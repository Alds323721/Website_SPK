<?php

namespace App\Http\Controllers;

use App\Models\Alternatif;
use App\Models\LogSimulasi;
use Illuminate\Http\Request;

class CalculationController extends Controller
{
    // Fixed AHP Weights as requested
    private $weights = [
        'ui_ux' => 0.245,      // Benefit
        'biaya' => 0.239,      // Cost
        'keamanan' => 0.181,   // Benefit
        'waktu' => 0.181,      // Cost
        'portofolio' => 0.155, // Benefit
    ];

    public function calculate(Request $request)
    {
        // Accept optional custom weights from frontend
        $weights = $request->input('custom_weights', $this->weights);
        
        // 1. Normalisasi Bobot Kriteria agar totalnya pasti = 1.0
        $totalWeight = array_sum($weights);
        if ($totalWeight > 0) {
            foreach ($weights as $key => $weight) {
                $weights[$key] = $weight / $totalWeight;
            }
        }

        // Accept optional custom alternatives, or fetch from DB
        $alternatifs = $request->input('alternatifs');
        if (!$alternatifs || count($alternatifs) === 0) {
            $alternatifs = Alternatif::where('user_id', auth()->id())->get()->toArray();
        }

        if (count($alternatifs) === 0) {
            return response()->json(['message' => 'No alternatives to calculate.'], 400);
        }

        // 2. Proses Hitung Total per Kriteria (AHP Murni)
        // Benefit criteria: sum(value)
        // Cost criteria: sum(1 / value)
        $sumUiUx = 0;
        $sumKeamanan = 0;
        $sumPortofolio = 0;
        $sumInvBiaya = 0;
        $sumInvWaktu = 0;

        foreach ($alternatifs as $alt) {
            $sumUiUx += $alt['nilai_ui_ux'];
            $sumKeamanan += $alt['nilai_keamanan'];
            $sumPortofolio += $alt['nilai_portofolio'];
            $sumInvBiaya += $alt['nilai_biaya'] > 0 ? (1 / $alt['nilai_biaya']) : 0;
            $sumInvWaktu += $alt['nilai_waktu'] > 0 ? (1 / $alt['nilai_waktu']) : 0;
        }

        $results = [];

        // 3. Normalisasi Nilai Alternatif dan Sintesis Skor Akhir
        foreach ($alternatifs as $alt) {
            // Benefit: value / total_value
            $normUiUx = $sumUiUx > 0 ? $alt['nilai_ui_ux'] / $sumUiUx : 0;
            $normKeamanan = $sumKeamanan > 0 ? $alt['nilai_keamanan'] / $sumKeamanan : 0;
            $normPortofolio = $sumPortofolio > 0 ? $alt['nilai_portofolio'] / $sumPortofolio : 0;
            
            // Cost: (1 / value) / total_inv_value
            $normBiaya = ($alt['nilai_biaya'] > 0 && $sumInvBiaya > 0) ? ((1 / $alt['nilai_biaya']) / $sumInvBiaya) : 0;
            $normWaktu = ($alt['nilai_waktu'] > 0 && $sumInvWaktu > 0) ? ((1 / $alt['nilai_waktu']) / $sumInvWaktu) : 0;

            // Skor Akhir (Sintesis)
            $score = ($normUiUx * $weights['ui_ux']) +
                     ($normBiaya * $weights['biaya']) +
                     ($normKeamanan * $weights['keamanan']) +
                     ($normWaktu * $weights['waktu']) +
                     ($normPortofolio * $weights['portofolio']);

            $results[] = [
                'id' => $alt['id'] ?? null,
                'nama' => $alt['nama'],
                'score' => round($score, 4),
                'details' => $alt
            ];
        }

        // Sort by score descending
        usort($results, function($a, $b) {
            return $b['score'] <=> $a['score'];
        });
        
        // Add rank
        foreach ($results as $index => &$res) {
            $res['rank'] = $index + 1;
        }

        // Save Log
        $log = LogSimulasi::create([
            'user_id' => auth()->id(),
            'ranking_data' => $results
        ]);

        return response()->json([
            'weights' => $weights,
            'results' => $results,
            'log_id' => $log->id
        ]);
    }
    
    public function getLogs()
    {
        return response()->json(LogSimulasi::where('user_id', auth()->id())->orderBy('id', 'desc')->get());
    }
}
