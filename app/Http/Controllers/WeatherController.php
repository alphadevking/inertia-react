<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class WeatherController extends Controller
{
    public function index() {
        return Inertia::render('Weather');
    }

    public function getWeather(Request $request)
    {
        $location = $request->input('location', 'Lagos Nigeria'); // Default to 'Lagos Nigeria' if not provided

        $response = Http::get('https://api.weatherapi.com/v1/current.json', [
            'key' => env('WEATHERAPI_KEY'),
            'q' => $location
        ]);

        return Inertia::render('Weather', ['weatherData' => $response->json()]);
    }
}
