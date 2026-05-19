import React from 'react';

const ResultView = ({ results }) => {
  if (!results || results.length === 0) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg shadow-black/5 border border-gray-100 mt-8 relative overflow-hidden group" id="result-print-area">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-blue-400"></div>
      
      <div className="hidden print:block mb-8 text-center border-b pb-6">
        <img src="/src/assets/images/pdf-header-branding.png" alt="Header PDF" className="h-24 mx-auto object-contain mb-4" onError={(e) => e.target.style.display='none'} />
        <h2 className="text-2xl font-bold text-ink">Hasil Rekomendasi Pemilihan Web Developer</h2>
        <p className="text-gray-600">Sistem Pendukung Keputusan - Metode AHP</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 print:hidden gap-4">
        <div>
          <h3 className="text-2xl font-extrabold text-ink tracking-tight">Hasil Peringkat</h3>
          <p className="text-gray-500 text-sm mt-1">Alternatif dengan skor tertinggi direkomendasikan.</p>
        </div>
        <button onClick={handlePrint} className="px-5 py-2.5 border border-gray-200 bg-white text-ink rounded-lg hover:bg-canvas-parchment transition-all flex items-center gap-2 text-sm font-semibold shadow-sm hover:shadow">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
          Unduh PDF
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-canvas-parchment border-b border-gray-200">
              <th className="py-4 px-6 font-semibold text-ink text-center w-20 uppercase text-xs tracking-wider">Rank</th>
              <th className="py-4 px-6 font-semibold text-ink uppercase text-xs tracking-wider">Nama Developer</th>
              <th className="py-4 px-6 font-semibold text-ink text-right uppercase text-xs tracking-wider">Skor AHP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {results.map((res, index) => (
              <tr key={res.id || index} className={`transition-colors ${index === 0 ? 'bg-blue-50/30 hover:bg-blue-50/50' : 'hover:bg-gray-50/50'}`}>
                <td className="py-5 px-6 text-center">
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg shadow-sm ${index === 0 ? 'bg-primary text-white shadow-primary/30' : index === 1 ? 'bg-gray-200 text-gray-800' : index === 2 ? 'bg-orange-100 text-orange-800' : 'bg-canvas-parchment text-gray-500'}`}>
                    {res.rank}
                  </span>
                </td>
                <td className="py-5 px-6 font-medium text-ink text-lg flex items-center gap-3">
                  {res.nama}
                  {index === 0 && <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold border border-green-200 flex items-center gap-1 shadow-sm">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Terbaik
                  </span>}
                </td>
                <td className="py-5 px-6 text-right font-mono font-bold text-xl text-primary">
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
