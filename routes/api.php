<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::namespace('Api')->name('api.')->group(function () {
    Route::post('/register', 'AuthController@register');
    Route::post('/login', 'AuthController@login');
    Route::post('/logout', 'AuthController@logout');

    Route::get('/user', function (Request $request) {

        if( session()->has('user') ) {
            // return response()->json(['user' =>  session()->get('user')], 200);
            return array(
                'uid'         => session('user')['localId'],
                'email'       => session('user')['email'],
                'displayName' => session('user')['displayName'],
            );
        } else {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }

    });
});

Route::resource('pets', 'Api\PetController');
