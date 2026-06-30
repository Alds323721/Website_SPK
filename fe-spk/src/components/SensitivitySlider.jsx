import React from 'react';

const SensitivitySlider = ({ weights, onWeightChange, enabled, setEnabled }) => {
  return (
    <div className="bg-canvas-parchment p-8 rounded-[18px] mb-8 border border-hairline transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
        <div>
          <h4 className="font-semibold text-ink text-[18px] tracking-tight">Sesuaikan Bobot Kriteria</h4>
          <p className="text-[14px] text-ink-muted-80 mt-1">Uji sensitivitas hasil dengan mengubah bobot standar pakar secara dinamis.</p>
        </div>
        <label className="flex items-center cursor-pointer shrink-0">
          <div className="relative">
            <input type="checkbox" className="sr-only" checked={enabled} onChange={() => setEnabled(!enabled)} />
            {/* iOS style toggle switch */}
            <div className={`block w-12 h-6.5 rounded-full transition-colors duration-200 ease-in-out ${enabled ? 'bg-primary' : 'bg-ink-muted-80/20'}`}></div>
            <div className={`dot absolute left-0.5 top-0.5 bg-white w-5.5 h-5.5 rounded-full transition-transform duration-200 ease-in-out shadow-sm ${enabled ? 'transform translate-x-5.5' : ''}`}></div>
          </div>
          <span className="ml-3 text-[14px] font-medium text-ink select-none">Ubah Bobot</span>
        </label>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 transition-all duration-500 overflow-hidden ${enabled ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}`}>
        {Object.entries(weights).map(([key, value]) => (
          <div key={key} className="space-y-3 bg-canvas p-4 rounded-[11px] border border-hairline">
            <div className="flex justify-between text-[14px] items-center">
              <span className="font-semibold text-ink capitalize tracking-wide">{key.replace('_', ' ')}</span>
              <span className="text-primary font-mono bg-primary/5 px-2 py-0.5 rounded-[5px] font-semibold">{value.toFixed(3)}</span>
            </div>
            <input 
              type="range" min="0.01" max="1" step="0.01" 
              value={value} 
              onChange={(e) => onWeightChange(key, parseFloat(e.target.value))}
              className="w-full h-1 bg-hairline rounded-full appearance-none cursor-pointer accent-primary transition-all"
            />
          </div>
        ))}
        <div className="col-span-full mt-2 text-[12px] text-ink-muted-48 bg-canvas p-3 rounded-[11px] border border-hairline">
          * Catatan: Total bobot pada metode AHP idealnya mendekati 1. Sistem akan secara dinamis menghitung berdasarkan rasio bobot yang Anda atur.
        </div>
      </div>
    </div>
  );
};

export default SensitivitySlider;

