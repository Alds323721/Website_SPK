import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { Pencil, Trash2, Download, Plus } from 'lucide-react';

const AdminDashboard = () => {
  const [alternatifs, setAlternatifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null, nama: '', kontak: '', deskripsi: '', 
    nilai_ui_ux: 3, nilai_biaya: 3, nilai_keamanan: 3, nilai_waktu: 3, nilai_portofolio: 3
  });

  const fetchData = async () => {
    try {
      const res = await api.get('/alternatifs');
      setAlternatifs(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleExport = async () => {
    try {
      const response = await api.get('/alternatifs/export', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Data_Alternatif.csv');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Failed to export data", error);
      alert("Gagal mengekspor file Excel. Pastikan sesi login Anda valid.");
    }
  };

  const handleEdit = (alt) => {
    setFormData(alt);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Hapus data alternatif ini?")) {
      try {
        await api.delete(`/alternatifs/${id}`);
        fetchData();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await api.put(`/alternatifs/${formData.id}`, formData);
      } else {
        await api.post('/alternatifs', formData);
      }
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const openNew = () => {
    setFormData({
      id: null, nama: '', kontak: '', deskripsi: '', 
      nilai_ui_ux: 3, nilai_biaya: 3, nilai_keamanan: 3, nilai_waktu: 3, nilai_portofolio: 3
    });
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-semibold text-ink tracking-tight">Manajemen Alternatif</h1>
          <p className="text-ink-muted-80 mt-1 text-[14px]">Kelola data master Web Developer di database.</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Export Excel structured as button-pearl-capsule */}
          <button 
            onClick={handleExport} 
            className="flex items-center px-4 py-2 border-3 border-divider-soft bg-surface-pearl text-ink-muted-80 rounded-[11px] hover:bg-canvas-parchment font-medium text-[14px] transition-all active:scale-95"
          >
            <Download className="w-4 h-4 mr-2 text-ink-muted-80" />
            Export CSV
          </button>
          
          {/* Tambah Data structured as button-primary capsule */}
          <button 
            onClick={openNew} 
            className="flex items-center px-[20px] py-[10px] bg-primary text-white rounded-full hover:bg-primary font-medium text-[14px] transition-all active:scale-95 shadow-none"
          >
            <Plus className="w-4 h-4 mr-2" />
            Tambah Data
          </button>
        </div>
      </div>

      <div className="bg-canvas rounded-[18px] border border-hairline overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-ink-muted-80 text-[14px]">Memuat data...</div>
        ) : alternatifs.length === 0 ? (
          <div className="p-20 text-center flex flex-col items-center justify-center">
            <img src="/src/assets/images/empty-data-placeholder.png" alt="Empty Data" className="w-40 h-40 mb-6 opacity-60" onError={(e) => e.target.style.display='none'} />
            <h3 className="text-[17px] font-semibold text-ink">Tidak ada data alternatif</h3>
            <p className="text-ink-muted-80 mt-2 max-w-sm text-[14px]">Belum ada data web developer di sistem. Mulai dengan menambahkan data baru.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-canvas-parchment text-[12px] font-semibold text-ink-muted-80 uppercase tracking-wider border-b border-hairline">
                  <th className="px-6 py-4 w-20">ID</th>
                  <th className="px-6 py-4">Nama Developer</th>
                  <th className="px-6 py-4">Kontak</th>
                  <th className="px-6 py-4">Nilai Kriteria (U/B/K/W/P)</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline/50">
                {alternatifs.map((alt) => (
                  <tr key={alt.id} className="hover:bg-canvas-parchment/30 transition-colors">
                    <td className="px-6 py-4 text-[13px] text-ink-muted-48 font-mono">#{alt.id}</td>
                    <td className="px-6 py-4 font-semibold text-ink text-[15px]">{alt.nama}</td>
                    <td className="px-6 py-4 text-[14px] text-ink-muted-80">{alt.kontak || '-'}</td>
                    <td className="px-6 py-4 font-mono text-[14px] text-ink-muted-80">
                      {alt.nilai_ui_ux} / {alt.nilai_biaya} / {alt.nilai_keamanan} / {alt.nilai_waktu} / {alt.nilai_portofolio}
                    </td>
                    <td className="px-6 py-4 text-right space-x-1.5">
                      <button 
                        onClick={() => handleEdit(alt)} 
                        className="p-2 bg-canvas-parchment hover:bg-primary hover:text-white rounded-[8px] text-ink-muted-80 transition-colors inline-block active:scale-95"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(alt.id)} 
                        className="p-2 bg-canvas-parchment hover:bg-red-500 hover:text-white rounded-[8px] text-ink-muted-80 transition-colors inline-block active:scale-95"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-ink/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-canvas rounded-[18px] max-w-2xl w-full p-8 border border-hairline relative overflow-y-auto max-h-[90vh]">
            <h3 className="text-[21px] font-semibold text-ink tracking-tight mb-6">{formData.id ? 'Edit Data' : 'Tambah Data'} Developer</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[14px] font-semibold text-ink mb-2">Nama Developer</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.nama} 
                    onChange={(e) => setFormData({...formData, nama: e.target.value})} 
                    className="w-full h-10 px-4 bg-canvas-parchment border border-transparent rounded-[11px] focus:bg-canvas focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[14px]" 
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-semibold text-ink mb-2">Kontak / Email</label>
                  <input 
                    type="text" 
                    value={formData.kontak} 
                    onChange={(e) => setFormData({...formData, kontak: e.target.value})} 
                    className="w-full h-10 px-4 bg-canvas-parchment border border-transparent rounded-[11px] focus:bg-canvas focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[14px]" 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[14px] font-semibold text-ink mb-2">Deskripsi</label>
                  <textarea 
                    rows="3" 
                    value={formData.deskripsi} 
                    onChange={(e) => setFormData({...formData, deskripsi: e.target.value})} 
                    className="w-full px-4 py-2.5 bg-canvas-parchment border border-transparent rounded-[11px] focus:bg-canvas focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[14px]"
                  ></textarea>
                </div>
              </div>

              <div className="pt-4 border-t border-hairline">
                <h4 className="font-semibold text-ink mb-4 text-[15px]">Nilai Kriteria (1-5)</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {['nilai_ui_ux', 'nilai_biaya', 'nilai_keamanan', 'nilai_waktu', 'nilai_portofolio'].map(field => (
                    <div key={field}>
                      <label className="block text-[11px] font-semibold text-ink-muted-48 uppercase tracking-wider mb-2">{field.replace('nilai_', '').replace('_', '/')}</label>
                      <input 
                        type="number" 
                        min="1" 
                        max="5" 
                        required 
                        value={formData[field]} 
                        onChange={(e) => setFormData({...formData, [field]: Number(e.target.value)})} 
                        className="w-full h-10 bg-canvas-parchment border border-transparent rounded-[11px] focus:bg-canvas focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-center font-mono text-[14px]" 
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-hairline">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="px-[20px] py-[10px] rounded-full border border-hairline text-ink font-medium hover:bg-canvas-parchment transition-all text-[14px] active:scale-95"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-[20px] py-[10px] rounded-full bg-primary text-white font-medium hover:bg-primary transition-all text-[14px] active:scale-95 shadow-none"
                >
                  Simpan Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

