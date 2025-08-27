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
            'description' => 'Explora los viajes que he hecho.',
            'url' => '/journeys',
        ],
        [
            'title' => 'Música',
            'image' => '/images/electric-guitar-neon.webp',
            'description' => 'Me gusta el Rap, el Rock, el Metal (y derivados), las que son de estilo synthwave, electrónicas...',
            'url' => '/music',
        ],
        [
            'title' => 'Películas y series',
            'image' => '/images/cinema-red-background.webp',
            'description' => 'He visto muchos tipos de series y películas. Te traigo unas recomendaciones que, si no has visto, te encantarán.',
            'url' => '/cinema',
        ],
    ];

    return response()->json(collect($content)->random(3)->values());
});