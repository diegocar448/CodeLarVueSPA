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

    public function products(Product $product, Request $request)
    {
        $year = $request->year;

        //agrupar por mes no callback
        $products = $product->where('created_at', '>=', "{$year}-01-01") //pegar o primeiro dia do primeiro mes do ano
                            ->where('created_at', '<=', date("Y-m-t", strtotime("{$year}-12"))) //ultimo dia do ultimo mês do ano
                            ->get()
                            ->groupBy( function($query){
           return $query->created_at->format('m');
        });

        $labels = [];
        $datasets = [];

        foreach($products as $product)
        {
            //dd($product[0]->created_at->format('m'));
            $labels[] = "Mês {$product[0]->created_at->format('m')}";
            $datasets[] = count($product);
        }

        

        

        return response()->json([
            'labels' => $labels,
            'datasets' => $datasets,            
        ]);
    }
}
