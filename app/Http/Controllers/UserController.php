<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    // New Method **********************************************
    public function login(Request $request){
        $userCredentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];

        if(!Auth::attempt($userCredentials)){
            // return response('The Username and Password are not correct', 403);
            return response("Incorrect email or password", 403);
        }

        return response(Auth::user(), 201);
    }

    // New Method **********************************************
    public function signup(Request $data) {
        $data['password'] = bcrypt($data->input('password'));
        $user = User::create($data->all());
        return response()->json($user, 201);
    }

    // New Method **********************************************
    public function getUser() {
        return response("hit endpoint");
    }
}
