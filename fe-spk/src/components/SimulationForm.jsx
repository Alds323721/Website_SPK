import React, { useState } from 'react';

const SimulationForm = ({ onCalculate }) => {
  const [alternatifs, setAlternatifs] = useState([
    { id: 1, nama: '', nilai_ui_ux: 3, nilai_biaya: 3, nilai_keamanan: 3, nilai_waktu: 3, nilai_portofolio: 3 },
    { id: 2, nama: '', nilai_ui_ux: 4, nilai_biaya: 2, nilai_keamanan: 5, nilai_waktu: 4, nilai_portofolio: 4 }
  ]);

  const handleAdd = () => {
    setAlternatifs([...alternatifs, { id: Date.now(), nama: '', nilai_ui_ux: 3, nilai_biaya: 3, nilai_keamanan: 3, nilai_waktu: 3, nilai_portofolio: 3 }]);
  };

  const handleRemove = (id) => {
    if (alternatifs.length > 1) {
      setAlternatifs(alternatifs.filter(a => a.id !== id));
    }
  };

  const handleChange = (id, field, value) => {
    setAlternatifs(alternatifs.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(alternatifs);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full mb-8 relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-ink">Input Alternatif Developer</h3>
        <div className="group relative cursor-pointer">
          <span className="w-8 h-8 rounded-full bg-canvas-parchment flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors border border-gray-200">?</span>
          <div className="absolute right-0 top-10 w-72 p-5 bg-white shadow-xl rounded-xl border border-gray-100 hidden group-hover:block z-10">
            <p className="text-sm font-bold mb-3 text-ink">Panduan Skala (1-5)</p>
            <div className="bg-canvas-parchment p-3 rounded-lg mb-3">
              <img src="/src/assets/images/illustration-guide.png" alt="Panduan Skala" className="w-full object-contain mix-blend-multiply" onError={(e) => e.target.style.display='none'} />
              <ul className="text-xs text-gray-600 space-y-1 mt-2">
                <li><span className="font-bold">5</span> = Sangat Baik / Sangat Murah</li>
                <li><span className="font-bold">4</span> = Baik / Murah</li>
                <li><span className="font-bold">3</span> = Cukup / Standar</li>
                <li><span className="font-bold">2</span> = Buruk / Mahal</li>
                <li><span className="font-bold">1</span> = Sangat Buruk / Sangat Mahal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="overflow-x-auto w-full">
          <table className="w-full min-w-[700px] text-center border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-sm text-gray-500">
                <th className="pb-3 pr-4 font-semibold text-left">Nama Developer</th>
                <th className="pb-3 px-2 font-semibold">UI/UX</th>
                <th className="pb-3 px-2 font-semibold">Biaya</th>
                <th className="pb-3 px-2 font-semibold">Keamanan</th>
                <th className="pb-3 px-2 font-semibold">Waktu</th>
                <th className="pb-3 px-2 font-semibold">Portofolio</th>
                <th className="pb-3 pl-2"></th>
              </tr>
            </thead>
            <tbody>
              {alternatifs.map((alt, index) => (
                <tr key={alt.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 pr-4 text-left">
                    <input type="text" required placeholder={`Developer ${index + 1}`} value={alt.nama} onChange={(e) => handleChange(alt.id, 'nama', e.target.value)} className="w-full min-w-[150px] px-4 py-2 bg-canvas-parchment border border-transparent rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-sm font-medium text-ink" />
                  </td>
                  {['nilai_ui_ux', 'nilai_biaya', 'nilai_keamanan', 'nilai_waktu', 'nilai_portofolio'].map(field => (
                    <td key={field} className="py-4 px-2">
                      <input type="number" min="1" max="5" required value={alt[field]} onChange={(e) => handleChange(alt.id, field, Number(e.target.value))} className="w-16 px-2 py-2 mx-auto bg-canvas-parchment border border-transparent rounded-lg text-center focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all font-mono" />
                    </td>
                  ))}
                  <td className="py-4 pl-2 text-right">
                    <button type="button" onClick={() => handleRemove(alt.id)} disabled={alternatifs.length === 1} className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg p-2 transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400">✕</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button type="button" onClick={handleAdd} className="w-full sm:w-auto text-primary font-medium hover:text-blue-800 text-sm px-5 py-2.5 rounded-lg border border-dashed border-primary/30 hover:bg-blue-50 transition-colors">+ Tambah Alternatif</button>
          <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-ink text-white rounded-lg hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all font-medium">Hitung Peringkat AHP</button>
        </div>
      </form>
    </div>
  );
};

export default SimulationForm;
