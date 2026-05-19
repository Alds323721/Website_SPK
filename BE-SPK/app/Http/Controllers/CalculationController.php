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
        
        // Accept optional custom alternatives, or fetch from DB
        $alternatifs = $request->input('alternatifs');
        if (!$alternatifs || count($alternatifs) === 0) {
            $alternatifs = Alternatif::all()->toArray();
        }

        if (count($alternatifs) === 0) {
            return response()->json(['message' => 'No alternatives to calculate.'], 400);
        }

        // AHP Normalization process
        // Benefit criteria: value / max_value
        // Cost criteria: min_value / value
        $maxUiUx = max(array_column($alternatifs, 'nilai_ui_ux'));
        $minBiaya = min(array_column($alternatifs, 'nilai_biaya'));
        $maxKeamanan = max(array_column($alternatifs, 'nilai_keamanan'));
        $minWaktu = min(array_column($alternatifs, 'nilai_waktu'));
        $maxPortofolio = max(array_column($alternatifs, 'nilai_portofolio'));

        $results = [];

        foreach ($alternatifs as $alt) {
            $normUiUx = $maxUiUx > 0 ? $alt['nilai_ui_ux'] / $maxUiUx : 0;
            $normBiaya = $alt['nilai_biaya'] > 0 ? $minBiaya / $alt['nilai_biaya'] : 0;
            $normKeamanan = $maxKeamanan > 0 ? $alt['nilai_keamanan'] / $maxKeamanan : 0;
            $normWaktu = $alt['nilai_waktu'] > 0 ? $minWaktu / $alt['nilai_waktu'] : 0;
            $normPortofolio = $maxPortofolio > 0 ? $alt['nilai_portofolio'] / $maxPortofolio : 0;

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
        return response()->json(LogSimulasi::orderBy('id', 'desc')->get());
    }
}
