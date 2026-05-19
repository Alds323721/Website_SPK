<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('alternatifs', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('kontak')->nullable();
            $table->text('deskripsi')->nullable();
            $table->decimal('nilai_ui_ux', 5, 2)->default(0);
            $table->decimal('nilai_biaya', 5, 2)->default(0);
            $table->decimal('nilai_keamanan', 5, 2)->default(0);
            $table->decimal('nilai_waktu', 5, 2)->default(0);
            $table->decimal('nilai_portofolio', 5, 2)->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('alternatifs');
    }
};
