import React from 'react';

const ResultView = ({ results }) => {
  if (!results || results.length === 0) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-canvas p-8 rounded-[18px] border border-hairline mt-8 relative overflow-hidden group" id="result-print-area">
      {/* Removed the decorative top gradient line based on the "No decorative gradients" rule */}
      
      <div className="hidden print:block mb-8 text-center border-b border-hairline pb-6">
        <img src="/src/assets/images/pdf-header-branding.png" alt="Header PDF" className="h-20 mx-auto object-contain mb-4" onError={(e) => e.target.style.display='none'} />
        <h2 className="text-[24px] font-semibold text-ink tracking-tight">Hasil Rekomendasi Pemilihan Web Developer</h2>
        <p className="text-[14px] text-ink-muted-80">Sistem Pendukung Keputusan - Metode AHP</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 print:hidden gap-4">
        <div>
          <h3 className="text-[21px] font-semibold text-ink tracking-tight">Hasil Peringkat</h3>
          <p className="text-ink-muted-80 text-[14px] mt-1">Alternatif dengan skor tertinggi direkomendasikan.</p>
        </div>
        
        {/* Style as button-pearl-capsule */}
        <button 
          onClick={handlePrint} 
          className="px-4 py-2 border-3 border-divider-soft bg-surface-pearl text-ink-muted-80 rounded-[11px] hover:bg-canvas-parchment transition-all flex items-center gap-2 text-[14px] font-medium active:scale-95"
        >
          <svg className="w-4 h-4 text-ink-muted-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Unduh PDF
        </button>
      </div>

      <div className="overflow-x-auto rounded-[11px] border border-hairline bg-canvas">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-canvas-parchment border-b border-hairline">
              <th className="py-4 px-6 font-semibold text-ink text-center w-20 uppercase text-[12px] tracking-wider">Rank</th>
              <th className="py-4 px-6 font-semibold text-ink uppercase text-[12px] tracking-wider">Nama Developer</th>
              <th className="py-4 px-6 font-semibold text-ink text-right uppercase text-[12px] tracking-wider">Skor AHP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-hairline/50">
            {results.map((res, index) => (
              <tr key={res.id || index} className={`transition-colors ${index === 0 ? 'bg-primary/5 hover:bg-primary/10' : 'hover:bg-canvas-parchment/30'}`}>
                <td className="py-5 px-6 text-center">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-semibold text-[14px] ${index === 0 ? 'bg-primary text-white' : index === 1 ? 'bg-hairline text-ink' : index === 2 ? 'bg-canvas-parchment border border-hairline text-ink-muted-80' : 'bg-canvas-parchment text-ink-muted-48'}`}>
                    {res.rank}
                  </span>
                </td>
                <td className="py-5 px-6 font-semibold text-ink text-[17px] flex items-center gap-3">
                  {res.nama}
                  {index === 0 && (
                    <span className="text-[12px] bg-primary/10 text-primary px-3 py-0.5 rounded-full font-semibold border border-primary/25 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Terbaik
                    </span>
                  )}
                </td>
                <td className="py-5 px-6 text-right font-mono font-bold text-[18px] text-primary">
                  {res.score.toFixed(4)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultView;

