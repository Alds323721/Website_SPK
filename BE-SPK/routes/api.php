<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AlternatifController;
use App\Http\Controllers\CalculationController;

// Public Auth Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected User Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // AHP Calculation APIs
    Route::post('/calculate', [CalculationController::class, 'calculate']);
    Route::get('/logs', [CalculationController::class, 'getLogs']);
    
    // Alternatif CRUD
    Route::get('/alternatifs/export', [AlternatifController::class, 'exportCsv']);
    Route::apiResource('alternatifs', AlternatifController::class);
});
