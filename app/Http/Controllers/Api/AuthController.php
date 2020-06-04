<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Kreait\Firebase\Factory;

class AuthController extends Controller
{
    private $auth;

    /**
     * AuthController constructor.
     * https://firebase-php.readthedocs.io/en/stable/authentication.html
     */
    public function __construct()
    {
        $firebase = (new Factory)->withServiceAccount(base_path() . '/firebase-conf/' . env('FIREBASE_SERVICE_ACCOUNT_JSON_KEY'));
        $this->auth = $firebase->createAuth();
    }

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name'      => 'required',
            'email'     => 'required|email',
            'password'  => 'required|min:6',
        ]);

        if( $validatedData ) :

            try {
                $createdUser = $this->auth->createUserWithEmailAndPassword($request->email, $request->password);
                $createdUser = $this->auth->updateUser($createdUser->uid, array(
                    'displayName' => $request->name
                ));

                $this->doLogin($createdUser->uid, $createdUser->email, $createdUser->displayName);

                return response()->json([
                    'registered' => true,
                    'redirectTo' => url('/')
                ]);

            } catch (\Kreait\Firebase\Exception\AuthException $e) {
                return response()->json([
                    'errors' => array($e->getMessage()),
                    'message' => $e->getMessage()
                ], 400);
            }

        endif;
    }

    public function login(Request $request)
    {

        try {
            $signInResult = $this->auth->signInWithEmailAndPassword($request->email, $request->password);
            $signInResult = $signInResult->data() ;

            $this->doLogin($signInResult['localId'], $signInResult['email'], $signInResult['displayName']);

            return response()->json([
                'logged' => true,
                'redirectTo' => url('/')
            ]);

        } catch (\Kreait\Firebase\Auth\SignIn\FailedToSignIn $e) {
            return response()->json([
                'errors' => array($e->getMessage()),
                'message' => $e->getMessage()
            ], 400);
        }

    }

    public function logout(Request $request)
    {
        $user = session()->get('user');
        $this->auth->revokeRefreshTokens($user['uid']);
        session()->put('user', null);

        return response()->json([
            'loggedOut' => true,
            'redirectTo' => url('/')
        ]);
    }

    public function doLogin($uid, $email, $displayName)
    {
        $user = array(
            'uid'           => $uid,
            'email'         => $email,
            'displayName'   => $displayName,
            'isLoggedIn'    => true,
        );

        session()->put('user', $user);
    }
}
