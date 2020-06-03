<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Kreait\Firebase\Factory;

class AuthController extends Controller
{
    private $auth;

    public function __construct()
    {
        $firebase = (new Factory)->withServiceAccount(base_path() . '/firebase-conf/' . env('FIREBASE_SERVICE_ACCOUNT_JSON_KEY'));
        $this->auth = $firebase->createAuth();
    }

    public function register(Request $request)
    {
        try {
            $createdUser = $this->auth->createUserWithEmailAndPassword($request->email, $request->pass);

            // $createdUser->displayName = $request->('name');
            $createdUser = $this->auth->updateUser($createdUser->uid, array(
                'displayName' => $request->name
            ));

            $this->doLogin($createdUser);

            return response()->json([
                'registered' => true,
                'redirectTo' => url('/')
            ]);

        } catch (\InvalidArgumentException $e) {

            return response()->json($e->getMessage());

        }
    }

    public function login(Request $request)
    {
        try {
            $signInResult = $this->auth->signInWithEmailAndPassword($request->email, $request->pass);
            $this->doLogin($signInResult->data());

            return response()->json([
                'logged' => true,
                'redirectTo' => url('/')
            ]);
        } catch (\InvalidArgumentException $e) {
            return response()->json($e->getMessage());
        }

    }

    public function logout(Request $request)
    {
        $user = session()->get('user');

        $this->auth->revokeRefreshTokens($user['localId']);
        session()->put('user', null);

        // return response()->json(['status' => 'ok', 'sessionX' => session('user') ]);

        return response()->json([
            'loggedOut' => true,
            'redirectTo' => url('/')
        ]);
    }

    public function doLogin($user)
    {

        $user['isLoggedIn'] = true;
        session()->put('user', $user);
    }
}
