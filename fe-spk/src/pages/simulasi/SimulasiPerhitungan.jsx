import React, { useState } from 'react';
import SensitivitySlider from '../../components/SensitivitySlider';

const defaultWeights = {
  ui_ux: 0.245,
  biaya: 0.239,
  keamanan: 0.181,
  waktu: 0.181,
  portofolio: 0.155,
};

const SimulasiPerhitungan = () => {
  const [isCustomWeight, setIsCustomWeight] = useState(false);
  const [weights, setWeights] = useState(defaultWeights);

  const handleWeightChange = (key, value) => {
    setWeights(prev => ({ ...prev, [key]: value }));
  };

  const total = Object.values(weights).reduce((a, b) => a + b, 0);

  // Normalisasi sehingga total = 1.0
  const normalizedWeights = Object.fromEntries(
    Object.entries(weights).map(([k, v]) => [k, v / total])
  );

  // Matriks perbandingan berpasangan (nilai tetap / pakar)
  const criteria = ['UI/UX', 'Biaya', 'Keamanan', 'Waktu', 'Portofolio'];
  const pairwiseMatrix = [
    [1,     1.3,   1.6,   1.5,   1.8],
    [0.77,  1,     1.3,   1.3,   1.5],
    [0.63,  0.77,  1,     1,     1.2],
    [0.67,  0.77,  1,     1,     1.2],
    [0.56,  0.67,  0.83,  0.83,  1  ],
  ];

  return (
    <div className="max-w-6xl mx-auto pb-12 space-y-8">
      <div>
        <h1 className="text-[26px] font-semibold text-[#1d1d1f] tracking-tight">Perhitungan Matriks AHP</h1>
        <p className="text-gray-500 mt-1 text-[14px]">Matriks perbandingan berpasangan dan bobot kriteria yang digunakan sistem.</p>
      </div>

      {/* Sensitivity Slider */}
      <SensitivitySlider
        weights={weights}
        onWeightChange={handleWeightChange}
        enabled={isCustomWeight}
        setEnabled={setIsCustomWeight}
      />

      {/* Normalized Weights Table */}
      <div className="bg-white border border-[#e0e0e0] rounded-[20px] p-6 shadow-sm">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h3 className="text-[16px] font-semibold text-[#1d1d1f]">Bobot Ternormalisasi</h3>
            <p className="text-[13px] text-gray-500 mt-0.5">Hasil normalisasi agar total bobot = 1.000</p>
          </div>
          <span className={`text-[13px] font-mono font-semibold px-3 py-1 rounded-full ${Math.abs(total - 1) < 0.01 ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}`}>
            Total: {total.toFixed(3)}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="border-b border-[#f0f0f0]">
                <th className="text-left py-2 pr-4 text-[12px] font-semibold text-gray-400 uppercase tracking-wider">Kriteria</th>
                <th className="text-right py-2 px-4 text-[12px] font-semibold text-gray-400 uppercase tracking-wider">Bobot Input</th>
                <th className="text-right py-2 px-4 text-[12px] font-semibold text-gray-400 uppercase tracking-wider">Bobot Normal.</th>
                <th className="text-right py-2 pl-4 text-[12px] font-semibold text-gray-400 uppercase tracking-wider">%</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c, i) => {
                const key = Object.keys(weights)[i];
                return (
                  <tr key={c} className="border-b border-[#f5f5f7] last:border-0 hover:bg-[#f5f5f7] transition-colors">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">{c}</td>
                    <td className="py-3 px-4 text-right font-mono text-gray-600">{weights[key].toFixed(3)}</td>
                    <td className="py-3 px-4 text-right font-mono font-semibold text-[#0066cc]">{normalizedWeights[key].toFixed(4)}</td>
                    <td className="py-3 pl-4 text-right font-mono text-gray-500">{(normalizedWeights[key] * 100).toFixed(1)}%</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-[#e0e0e0]">
                <td className="py-3 pr-4 font-semibold text-[#1d1d1f]">Total</td>
                <td className="py-3 px-4 text-right font-mono font-semibold">{total.toFixed(3)}</td>
                <td className="py-3 px-4 text-right font-mono font-semibold text-[#0066cc]">1.0000</td>
                <td className="py-3 pl-4 text-right font-mono font-semibold">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Pairwise Matrix Table */}
      <div className="bg-white border border-[#e0e0e0] rounded-[20px] p-6 shadow-sm">
        <div className="mb-5">
          <h3 className="text-[16px] font-semibold text-[#1d1d1f]">Matriks Perbandingan Berpasangan</h3>
          <p className="text-[13px] text-gray-500 mt-0.5">Nilai perbandingan relatif antar kriteria berdasarkan penilaian pakar (skala Saaty 1–9).</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-[#f0f0f0]">
                <th className="text-left py-2 pr-3 text-[12px] font-semibold text-gray-400 uppercase tracking-wider">Kriteria</th>
                {criteria.map(c => (
                  <th key={c} className="text-center py-2 px-2 text-[12px] font-semibold text-gray-400 uppercase tracking-wider">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pairwiseMatrix.map((row, i) => (
                <tr key={criteria[i]} className="border-b border-[#f5f5f7] last:border-0 hover:bg-[#f5f5f7] transition-colors">
                  <td className="py-2.5 pr-3 font-semibold text-[#1d1d1f]">{criteria[i]}</td>
                  {row.map((val, j) => (
                    <td
                      key={j}
                      className={`py-2.5 px-2 text-center font-mono ${i === j ? 'text-[#0066cc] font-semibold bg-[#0066cc]/5' : 'text-gray-600'}`}
                    >
                      {val.toFixed(2)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[12px] text-gray-400 mt-4">* Nilai diagonal (1.00) menunjukkan perbandingan kriteria dengan dirinya sendiri.</p>
      </div>
    </div>
  );
};

export default SimulasiPerhitungan;
