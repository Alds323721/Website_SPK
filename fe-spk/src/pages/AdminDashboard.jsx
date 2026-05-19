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
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-ink tracking-tight">Manajemen Alternatif</h1>
          <p className="text-gray-500 mt-1 text-sm">Kelola data master Web Developer di database.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleExport} className="flex items-center px-4 py-2 border border-gray-300 bg-white text-ink rounded-lg shadow-sm hover:bg-gray-50 font-medium text-sm transition-all">
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </button>
          <button onClick={openNew} className="flex items-center px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-blue-700 font-medium text-sm transition-all">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Data
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Memuat data...</div>
        ) : alternatifs.length === 0 ? (
          <div className="p-20 text-center flex flex-col items-center justify-center">
            <img src="/src/assets/images/empty-data-placeholder.png" alt="Empty Data" className="w-48 h-48 mb-6 opacity-80" onError={(e) => e.target.style.display='none'} />
            <h3 className="text-lg font-bold text-ink">Tidak ada data alternatif</h3>
            <p className="text-gray-500 mt-2 max-w-sm text-sm">Belum ada data web developer di sistem. Mulai dengan menambahkan data baru.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-canvas-parchment text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Nama Developer</th>
                  <th className="px-6 py-4">Kontak</th>
                  <th className="px-6 py-4">Nilai Kriteria (U/B/K/W/P)</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {alternatifs.map((alt) => (
                  <tr key={alt.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-500 font-mono">#{alt.id}</td>
                    <td className="px-6 py-4 font-semibold text-ink">{alt.nama}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{alt.kontak || '-'}</td>
                    <td className="px-6 py-4 font-mono text-sm text-gray-500">
                      {alt.nilai_ui_ux} / {alt.nilai_biaya} / {alt.nilai_keamanan} / {alt.nilai_waktu} / {alt.nilai_portofolio}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button onClick={() => handleEdit(alt)} className="p-2 bg-blue-50 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors inline-block">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(alt.id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors inline-block ml-2">
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
        <div className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative overflow-y-auto max-h-[90vh]">
            <h3 className="text-2xl font-bold text-ink mb-6">{formData.id ? 'Edit Data' : 'Tambah Data'} Developer</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Nama Developer</label>
                  <input type="text" required value={formData.nama} onChange={(e) => setFormData({...formData, nama: e.target.value})} className="w-full px-4 py-2 bg-canvas-parchment rounded-lg border border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Kontak / Email</label>
                  <input type="text" value={formData.kontak} onChange={(e) => setFormData({...formData, kontak: e.target.value})} className="w-full px-4 py-2 bg-canvas-parchment rounded-lg border border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-ink mb-2">Deskripsi</label>
                  <textarea rows="3" value={formData.deskripsi} onChange={(e) => setFormData({...formData, deskripsi: e.target.value})} className="w-full px-4 py-2 bg-canvas-parchment rounded-lg border border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none"></textarea>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-ink mb-4">Nilai Kriteria (1-5)</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {['nilai_ui_ux', 'nilai_biaya', 'nilai_keamanan', 'nilai_waktu', 'nilai_portofolio'].map(field => (
                    <div key={field}>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{field.replace('nilai_', '').replace('_', '/')}</label>
                      <input type="number" min="1" max="5" required value={formData[field]} onChange={(e) => setFormData({...formData, [field]: Number(e.target.value)})} className="w-full px-4 py-2 bg-canvas-parchment rounded-lg border border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none text-center font-mono" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg border border-gray-300 text-ink font-medium hover:bg-gray-50 transition-colors">Batal</button>
                <button type="submit" className="px-5 py-2.5 rounded-lg bg-ink text-white font-medium hover:bg-gray-800 shadow-md transition-colors">Simpan Data</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
