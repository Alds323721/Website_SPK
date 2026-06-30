<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alternatif extends Model
{
    use HasFactory;

    protected $table = 'alternatifs';

    protected $fillable = [
        'user_id', 'nama', 'kontak', 'deskripsi',
        'nilai_ui_ux', 'nilai_biaya', 'nilai_keamanan',
        'nilai_waktu', 'nilai_portofolio',
    ];

    protected $casts = [
        'nilai_ui_ux'      => 'float',
        'nilai_biaya'      => 'float',
        'nilai_keamanan'   => 'float',
        'nilai_waktu'      => 'float',
        'nilai_portofolio' => 'float',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
