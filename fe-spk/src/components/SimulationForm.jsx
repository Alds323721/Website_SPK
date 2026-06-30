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
    <div className="bg-canvas p-8 rounded-[18px] border border-hairline w-full mb-8 relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[21px] font-semibold text-ink tracking-tight">Input Alternatif Developer</h3>
        <div className="group relative cursor-pointer">
          <span className="w-7 h-7 rounded-full bg-canvas-parchment flex items-center justify-center text-ink-muted-80 hover:bg-primary hover:text-white transition-colors border border-hairline text-sm">?</span>
          <div className="absolute right-0 top-9 w-72 p-5 bg-canvas shadow-none rounded-[11px] border border-hairline hidden group-hover:block z-10">
            <p className="text-[14px] font-semibold mb-3 text-ink">Panduan Skala (1-5)</p>
            <div className="bg-canvas-parchment p-3 rounded-[11px] mb-3 border border-hairline">
              <img src="/src/assets/images/illustration-guide.png" alt="Panduan Skala" className="w-full object-contain mix-blend-multiply" onError={(e) => e.target.style.display='none'} />
              <ul className="text-[12px] text-ink-muted-80 space-y-1 mt-2">
                <li><span className="font-semibold text-ink">5</span> = Sangat Baik / Sangat Murah</li>
                <li><span className="font-semibold text-ink">4</span> = Baik / Murah</li>
                <li><span className="font-semibold text-ink">3</span> = Cukup / Standar</li>
                <li><span className="font-semibold text-ink">2</span> = Buruk / Mahal</li>
                <li><span className="font-semibold text-ink">1</span> = Sangat Buruk / Sangat Mahal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="overflow-x-auto w-full">
          <table className="w-full min-w-[700px] text-center border-collapse">
            <thead>
              <tr className="border-b border-hairline text-[14px] text-ink-muted-80">
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
                <tr key={alt.id} className="border-b border-hairline/40 last:border-0 hover:bg-canvas-parchment/30 transition-colors">
                  <td className="py-4 pr-4 text-left">
                    <input 
                      type="text" 
                      required 
                      placeholder={`Developer ${index + 1}`} 
                      value={alt.nama} 
                      onChange={(e) => handleChange(alt.id, 'nama', e.target.value)} 
                      className="w-full min-w-[180px] px-4 py-2 bg-canvas-parchment border border-transparent rounded-full focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-canvas outline-none transition-all text-[14px] font-medium text-ink" 
                    />
                  </td>
                  {['nilai_ui_ux', 'nilai_biaya', 'nilai_keamanan', 'nilai_waktu', 'nilai_portofolio'].map(field => (
                    <td key={field} className="py-4 px-2">
                      <input 
                        type="number" 
                        min="1" 
                        max="5" 
                        required 
                        value={alt[field]} 
                        onChange={(e) => handleChange(alt.id, field, Number(e.target.value))} 
                        className="w-16 px-2 py-2 mx-auto bg-canvas-parchment border border-transparent rounded-full text-center focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-canvas outline-none transition-all font-mono text-[14px]" 
                      />
                    </td>
                  ))}
                  <td className="py-4 pl-2 text-right">
                    <button 
                      type="button" 
                      onClick={() => handleRemove(alt.id)} 
                      disabled={alternatifs.length === 1} 
                      className="text-ink-muted-48 hover:text-red-500 hover:bg-red-50 rounded-full p-2 transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink-muted-48"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button 
            type="button" 
            onClick={handleAdd} 
            className="w-full sm:w-auto text-primary font-normal hover:text-primary text-[14px] px-[22px] py-[11px] rounded-full border border-primary/30 hover:border-primary/60 transition-all active:scale-95 bg-transparent"
          >
            + Tambah Alternatif
          </button>
          <button 
            type="submit" 
            className="w-full sm:w-auto px-[22px] py-[11px] bg-primary text-white rounded-full hover:bg-primary transition-all active:scale-95 font-normal text-[14px] shadow-none"
          >
            Hitung Peringkat AHP
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimulationForm;
