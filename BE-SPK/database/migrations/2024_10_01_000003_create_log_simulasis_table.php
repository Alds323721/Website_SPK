<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('log_simulasis', function (Blueprint $table) {
            $table->id();
            $table->timestamp('executed_at')->useCurrent();
            $table->json('ranking_data');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('log_simulasis');
    }
};
