<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OnepageController extends Controller
{
    public function index(Request $request){
    
        return Inertia::render('Welcome', [
        ]);
    }
}
