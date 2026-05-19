import React from 'react';

const SensitivitySlider = ({ weights, onWeightChange, enabled, setEnabled }) => {
  return (
    <div className="bg-canvas-parchment p-8 rounded-2xl mb-8 border border-gray-100 shadow-sm transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
        <div>
          <h4 className="font-bold text-ink text-lg">Sesuaikan Bobot Kriteria</h4>
          <p className="text-sm text-gray-500 mt-1">Uji sensitivitas hasil dengan mengubah bobot standar pakar secara dinamis.</p>
        </div>
        <label className="flex items-center cursor-pointer shrink-0">
          <div className="relative">
            <input type="checkbox" className="sr-only" checked={enabled} onChange={() => setEnabled(!enabled)} />
            <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ease-in-out ${enabled ? 'bg-primary' : 'bg-gray-300'}`}></div>
            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out shadow-sm ${enabled ? 'transform translate-x-6' : ''}`}></div>
          </div>
          <span className="ml-3 text-sm font-medium text-ink select-none">Ubah Bobot</span>
        </label>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 transition-all duration-500 overflow-hidden ${enabled ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}`}>
        {Object.entries(weights).map(([key, value]) => (
          <div key={key} className="space-y-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between text-sm items-center">
              <span className="font-semibold text-ink capitalize tracking-wide">{key.replace('_', ' ')}</span>
              <span className="text-primary font-mono bg-blue-50 px-2 py-1 rounded font-bold">{value.toFixed(3)}</span>
            </div>
            <input 
              type="range" min="0.01" max="1" step="0.01" 
              value={value} 
              onChange={(e) => onWeightChange(key, parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-blue-700 transition-all"
            />
          </div>
        ))}
        <div className="col-span-full mt-2 text-xs text-gray-500 bg-white p-3 rounded-lg border border-yellow-200 bg-yellow-50/50">
          * Catatan: Total bobot pada metode AHP idealnya mendekati 1. Sistem akan secara dinamis menghitung berdasarkan rasio bobot yang Anda atur.
        </div>
      </div>
    </div>
  );
};

export default SensitivitySlider;
