<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/dynamic-content', function () {
    $content = [
        [
            'title' => 'Viajes',
            'image' => '/images/background.webp',
            'description' => 'Explora los viajes que he hecho por media España, especialmente en la costa Mediterránea.',
            'url' => '/journeys',
        ],
        [
            'title' => 'Música',
            'image' => '/images/electric-guitar-neon.webp',
            'description' => 'Me gustan sobre todo los géneros electrónicos y relacionados con el Metal.',
            'url' => '/music',
        ],
        [
            'title' => 'Películas y series',
            'image' => '/images/cinema-red-background.webp',
            'description' => 'He visto muchos tipos de series y películas, te traigo unas recomendaciones que, si no has visto, te encantarán.',
            'url' => '/cinema',
        ],
           [
            'title' => 'Relatos',
            'image' => '/images/quill-pen-old-book.webp',
            'description' => 'Algunos ratos libres dejo fluir mi creatividad.',
            'url' => '/books',
        ],
    ];

    return response()->json(collect($content)->random(3)->values());
});