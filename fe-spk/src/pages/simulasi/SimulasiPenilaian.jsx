import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SimulationForm from '../../components/SimulationForm';
import api from '../../api/axios';

const SimulasiPenilaian = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCalculate = async (alternatifs) => {
    setIsLoading(true);
    try {
      const response = await api.post('/calculate', { alternatifs });
      // Simpan hasil ke sessionStorage lalu arahkan ke halaman Hasil
      sessionStorage.setItem('ahp-results', JSON.stringify(response.data.results));
      navigate('/dashboard/simulasi/hasil');
    } catch (error) {
      console.error('Error calculating:', error);
      alert('Terjadi kesalahan saat menghitung. Pastikan server Laravel berjalan.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-12 space-y-8">
      <div>
        <h1 className="text-[26px] font-semibold text-[#1d1d1f] tracking-tight">Input Penilaian Developer</h1>
        <p className="text-gray-500 mt-1 text-[14px]">
          Masukkan nama developer dan berikan nilai 1–5 untuk setiap kriteria. Klik "Hitung Peringkat AHP" untuk melihat hasil.
        </p>
      </div>

      {/* Panduan skala */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {[
          { val: 5, label: 'Sangat Baik', sub: 'Sangat Murah', color: 'bg-green-50 border-green-200 text-green-700' },
          { val: 4, label: 'Baik', sub: 'Murah', color: 'bg-teal-50 border-teal-200 text-teal-700' },
          { val: 3, label: 'Cukup', sub: 'Standar', color: 'bg-blue-50 border-blue-200 text-blue-700' },
          { val: 2, label: 'Buruk', sub: 'Mahal', color: 'bg-orange-50 border-orange-200 text-orange-700' },
          { val: 1, label: 'Sangat Buruk', sub: 'Sangat Mahal', color: 'bg-red-50 border-red-200 text-red-700' },
        ].map(item => (
          <div key={item.val} className={`rounded-[12px] border p-3 text-center ${item.color}`}>
            <div className="text-[22px] font-bold">{item.val}</div>
            <div className="text-[12px] font-semibold leading-tight">{item.label}</div>
            <div className="text-[11px] opacity-70 mt-0.5">{item.sub}</div>
          </div>
        ))}
      </div>

      {/* Form input */}
      <div className={`transition-opacity ${isLoading ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
        <SimulationForm onCalculate={handleCalculate} />
      </div>

      {isLoading && (
        <div className="flex items-center justify-center gap-3 py-4">
          <div className="w-5 h-5 border-2 border-[#0066cc] border-t-transparent rounded-full animate-spin" />
          <span className="text-[14px] text-gray-500">Menghitung peringkat AHP…</span>
        </div>
      )}
    </div>
  );
};

export default SimulasiPenilaian;
