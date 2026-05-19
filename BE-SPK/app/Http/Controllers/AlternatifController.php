<?php

namespace App\Http\Controllers;

use App\Models\Alternatif;
use Illuminate\Http\Request;

class AlternatifController extends Controller
{
    public function index()
    {
        return response()->json(Alternatif::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'kontak' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'nilai_ui_ux' => 'required|numeric|min:1|max:5',
            'nilai_biaya' => 'required|numeric|min:1|max:5',
            'nilai_keamanan' => 'required|numeric|min:1|max:5',
            'nilai_waktu' => 'required|numeric|min:1|max:5',
            'nilai_portofolio' => 'required|numeric|min:1|max:5',
        ]);

        $alternatif = Alternatif::create($validated);
        return response()->json($alternatif, 201);
    }

    public function show(Alternatif $alternatif)
    {
        return response()->json($alternatif);
    }

    public function update(Request $request, Alternatif $alternatif)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'kontak' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'nilai_ui_ux' => 'required|numeric|min:1|max:5',
            'nilai_biaya' => 'required|numeric|min:1|max:5',
            'nilai_keamanan' => 'required|numeric|min:1|max:5',
            'nilai_waktu' => 'required|numeric|min:1|max:5',
            'nilai_portofolio' => 'required|numeric|min:1|max:5',
        ]);

        $alternatif->update($validated);
        return response()->json($alternatif);
    }

    public function destroy(Alternatif $alternatif)
    {
        $alternatif->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
    
    public function exportCsv()
    {
        $alternatifs = Alternatif::all();
        $csvData = "ID,Nama,Kontak,Deskripsi,Nilai UI/UX,Nilai Biaya,Nilai Keamanan,Nilai Waktu,Nilai Portofolio\n";
        
        foreach ($alternatifs as $row) {
            $csvData .= "{$row->id},{$row->nama},{$row->kontak},{$row->deskripsi},{$row->nilai_ui_ux},{$row->nilai_biaya},{$row->nilai_keamanan},{$row->nilai_waktu},{$row->nilai_portofolio}\n";
        }
        
        return response($csvData)
            ->header('Content-Type', 'text/csv')
            ->header('Content-Disposition', 'attachment; filename="alternatifs_backup.csv"');
    }
}
