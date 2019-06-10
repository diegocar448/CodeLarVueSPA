<?php

namespace App\Http\Controllers\Auth\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use App\Http\Controllers\Auth\Api\Traits\AuthTrait;

class AuthApiController extends Controller
{
    use AuthTrait;

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['authenticate']]);
    }   
    


    public function getAuthenticatedUser()
    {
        $response = $this->getUser();

        if($response['status'] != 200)
        {
            return response()->json([$response['response']], $response['status']);
        }else{
            $user = $response['response'];
        }

        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }


    public function refreshToken()
    {
        if (!$token = JWTAuth::getToken())
            return response()->json(['error' => 'token_not_send'], 401);

        try {
            $token = JWTAuth::refresh();
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        }

        return response()->json(compact('token', 'user'));
    }

    

    
}
