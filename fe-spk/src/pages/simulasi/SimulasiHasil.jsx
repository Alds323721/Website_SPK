import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultView from '../../components/ResultView';

const SimulasiHasil = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = sessionStorage.getItem('ahp-results');
    if (stored) {
      setResults(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto pb-12 space-y-8">
      <div>
        <h1 className="text-[26px] font-semibold text-[#1d1d1f] tracking-tight">Hasil Rekomendasi</h1>
        <p className="text-gray-500 mt-1 text-[14px]">
          Peringkat developer berdasarkan skor AHP yang dinormalisasi. Total seluruh skor = 1.000.
        </p>
      </div>

      {results.length > 0 ? (
        <>
          {/* Summary card untuk winner */}
          <div className="bg-[#0066cc] rounded-[20px] p-6 text-white flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-[22px] font-bold shrink-0">
              🏆
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-widest text-white/60 mb-1">Rekomendasi Terbaik</p>
              <h2 className="text-[22px] font-bold">{results[0]?.nama}</h2>
              <p className="text-[14px] text-white/80 mt-0.5">
                Skor AHP: <span className="font-mono font-bold">{results[0]?.score?.toFixed(4)}</span>
                {' · '}Unggul dari {results.length - 1} alternatif lainnya
              </p>
            </div>
          </div>

          <ResultView results={results} />

          {/* Info normalisasi */}
          <div className="bg-[#f5f5f7] border border-[#e0e0e0] rounded-[16px] p-5">
            <p className="text-[13px] text-gray-600">
              <span className="font-semibold text-[#1d1d1f]">Catatan Metodologi AHP:</span>{' '}
              Skor akhir dihitung menggunakan normalisasi kolom matriks perbandingan berpasangan. 
              Total seluruh skor alternatif akan selalu berjumlah tepat{' '}
              <span className="font-mono font-semibold text-[#0066cc]">
                {results.reduce((sum, r) => sum + r.score, 0).toFixed(4)}
              </span>.
            </p>
          </div>
        </>
      ) : (
        <div className="bg-white border border-[#e0e0e0] rounded-[20px] p-16 text-center shadow-sm">
          <div className="text-5xl mb-5">📋</div>
          <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Belum Ada Hasil Perhitungan</h3>
          <p className="text-gray-500 text-[14px] mb-6 max-w-sm mx-auto">
            Silakan masuk ke halaman <strong>Penilaian</strong>, isi data developer, dan klik "Hitung Peringkat AHP".
          </p>
          <button
            onClick={() => navigate('/dashboard/simulasi/penilaian')}
            className="bg-[#0066cc] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#0055b3] transition-colors text-[14px] active:scale-95"
          >
            Mulai Penilaian
          </button>
        </div>
      )}
    </div>
  );
};

export default SimulasiHasil;
