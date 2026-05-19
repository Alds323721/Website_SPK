<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LogSimulasi extends Model
{
    use HasFactory;

    protected $table = 'log_simulasis';

    protected $fillable = ['executed_at', 'ranking_data'];

    protected $casts = [
        'executed_at' => 'datetime',
        'ranking_data' => 'array',
    ];
}
