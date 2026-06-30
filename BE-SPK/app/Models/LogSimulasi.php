<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LogSimulasi extends Model
{
    use HasFactory;

    protected $table = 'log_simulasis';

    protected $fillable = ['user_id', 'executed_at', 'ranking_data'];

    protected $casts = [
        'executed_at' => 'datetime',
        'ranking_data' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
