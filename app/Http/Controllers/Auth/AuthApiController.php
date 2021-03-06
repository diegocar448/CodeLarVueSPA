<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use App\Http\Requests\StoreUpdateUserFormRequest;

class AuthApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['authenticate', 'register']]);
    }

    public function authenticate()
    {
        // grab credentials from the request
        $credentials = request()->only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // Get user authenticated
        $user = auth()->user();

        // all good so return the token
        return response()->json(compact('token', 'user'));
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

    public function register(StoreUpdateUserFormRequest $request, User $user)
    {   
        $data = $request->only(['name', 'email', 'password']);
        $data['password'] = bcrypt($data['password']);

        $user::create($data);

        return $this->authenticate();       

    }

    public function update(StoreUpdateUserFormRequest $request)
    {
        $response = $this->getUser();

        if($response['status'] != 200)
        {
            return response()->json([$response['response']], $response['status']);
        }else{
            $user = $response['response'];
            $user->update($request->all());

            return response()->json(compact('user'));
        }
        
    }

    public function getUser()
    {
        try {

            if (! $user = JWTAuth::parseToken()->authenticate()) {
                //return response()->json(['user_not_found'], 404);
                return [
                    'response' => 'user_not_found',
                    'status'    => 404
                ];
            }

        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            //return response()->json(['token_expired'], $e->getStatusCode());
            return [
                'response' => 'token_expired',
                'status'    => $e->getStatusCode()
            ];

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            //return response()->json(['token_invalid'], $e->getStatusCode());
            return [
                'response' => 'token_invalid',
                'status'    => $e->getStatusCode()
            ];

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            //return response()->json(['token_absent'], $e->getStatusCode());
            return [
                'response' => 'token_absent',
                'status'    => $e->getStatusCode()
            ];

        }

        return [
            'response' => $user,
            'status'    => 200
        ];
    }
}
