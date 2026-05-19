<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AlternatifController;
use App\Http\Controllers\CalculationController;

// Public Calculation API
Route::post('/calculate', [CalculationController::class, 'calculate']);
Route::get('/logs', [CalculationController::class, 'getLogs']);

// Admin Auth
Route::post('/login', [AuthController::class, 'login']);

// Protected Admin Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    
    Route::get('/alternatifs/export', [AlternatifController::class, 'exportCsv']);
    Route::apiResource('alternatifs', AlternatifController::class);
});
