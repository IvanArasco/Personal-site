<?php

use Illuminate\Support\Facades\Route;

// Open CV auto
Route::get('/cv', function () {
    $path = public_path('cv/iam_cv.pdf');
    
    return response()->file($path);
});

// Routes Controlled by React
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');