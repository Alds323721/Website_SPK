import React from 'react';
import CriteriaSection from '../../components/CriteriaSection';

const SimulasiKriteria = () => {
  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="text-[26px] font-semibold text-[#1d1d1f] tracking-tight">Kriteria Penilaian AHP</h1>
        <p className="text-gray-500 mt-1 text-[14px]">5 kriteria yang digunakan sebagai dasar perhitungan metode AHP.</p>
      </div>

      {/* Info banner AHP bobot */}
      <div className="mb-8 bg-[#0066cc]/5 border border-[#0066cc]/20 rounded-[16px] p-5 flex gap-4 items-start">
        <div className="w-8 h-8 rounded-full bg-[#0066cc]/10 flex items-center justify-center text-[#0066cc] shrink-0 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-[14px] font-semibold text-[#1d1d1f] mb-1">Tentang Bobot Kriteria</p>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Setiap kriteria memiliki bobot prioritas yang ditetapkan melalui Analytic Hierarchy Process (AHP). 
            Bobot standar pakar: <strong>UI/UX 24.5%</strong> · <strong>Biaya 23.9%</strong> · <strong>Keamanan 18.1%</strong> · <strong>Waktu 18.1%</strong> · <strong>Portofolio 15.5%</strong>.
            Anda dapat mengubah bobot ini secara dinamis di halaman <strong>Perhitungan Matriks</strong>.
          </p>
        </div>
      </div>

      {/* Weight visual breakdown */}
      <div className="bg-white border border-[#e0e0e0] rounded-[20px] p-6 mb-8 shadow-sm">
        <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-4">Distribusi Bobot Kriteria</h3>
        <div className="space-y-3">
          {[
            { label: 'UI/UX Design', key: 'ui_ux', weight: 0.245, color: '#0066cc' },
            { label: 'Biaya', key: 'biaya', weight: 0.239, color: '#0077dd' },
            { label: 'Keamanan', key: 'keamanan', weight: 0.181, color: '#0088ee' },
            { label: 'Waktu Pengerjaan', key: 'waktu', weight: 0.181, color: '#0099ff' },
            { label: 'Portofolio', key: 'portofolio', weight: 0.155, color: '#44aaff' },
          ].map((item) => (
            <div key={item.key} className="flex items-center gap-4">
              <span className="text-[13px] text-gray-600 w-36 shrink-0">{item.label}</span>
              <div className="flex-1 bg-[#f5f5f7] rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 rounded-full transition-all"
                  style={{ width: `${item.weight * 100}%`, backgroundColor: item.color }}
                />
              </div>
              <span className="text-[13px] font-mono font-semibold text-[#0066cc] w-12 text-right">
                {(item.weight * 100).toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Criteria cards */}
      <CriteriaSection />
    </div>
  );
};

export default SimulasiKriteria;
