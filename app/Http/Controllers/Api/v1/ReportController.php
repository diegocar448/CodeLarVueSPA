<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;

class ReportController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth:api');
    }

    public function products(Product $product)
    {
        //agrupar por mes no callback
        $products = $product->get()->groupBy( function($query){
           return $query->created_at->format('m');
        });

        return response()->json($products);
    }
}
