<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;

class AppController extends Controller
{
    private $auth;

    public function __construct()
    {
        $firebase = (new Factory)->withServiceAccount(base_path() . '/firebase-conf/' . env('FIREBASE_SERVICE_ACCOUNT_JSON_KEY'));
        $this->auth = $firebase->createAuth();
    }

    public function index()
    {
        if(!empty($_GET['clear-user']))
            session()->put('user', null);

        $user = false;
        if( session()->has('user') ) {
            // dd(session()->get('user'));
            $user = array(
                'uid'         => session('user')['uid'],
                'email'       => session('user')['email'],
                'displayName' => session('user')['displayName'],
            );

        }
        return view('app', compact('user') );
    }
}
