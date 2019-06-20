<?php

/**
$this->get('categories', 'Api\CategoryController@index');
$this->post('categories', 'Api\CategoryController@store');
$this->put('categories/{id}', 'Api\CategoryController@update');
$this->delete('categories/{id}', 'Api\CategoryController@delete');
 */



$this->group([   
    'namespace' => 'Auth\Api',
], function(){

    $this->post('auth', 'AuthApiController@authenticate');
    $this->post('auth-refresh', 'AuthApiController@refreshToken');
    $this->get('me', 'AuthApiController@getAuthenticatedUser');

    $this->post('register', 'ProfileApiController@register');
    $this->put('update', 'ProfileApiController@update');

});




$this->group([
    'prefix' => 'v1',
    'namespace' => 'Api\v1',
    //'middleware' => 'auth:api'
], function () {

    $this->get('categories/{id}/products', 'CategoryController@products');
    $this->apiResource('categories', 'CategoryController');

    $this->apiResource('products', 'ProductController');

//    $this->get('reports-products', 'ReportController@products');
});