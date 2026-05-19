import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { Calendar } from 'lucide-react';

const AdminLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    try {
      const res = await api.get('/logs');
      setLogs(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-ink tracking-tight">Log Simulasi Publik</h1>
        <p className="text-gray-500 mt-1 text-sm">Pantau riwayat perhitungan AHP yang dilakukan oleh user secara publik.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Memuat data log...</div>
        ) : logs.length === 0 ? (
          <div className="p-20 text-center flex flex-col items-center justify-center">
            <img src="/src/assets/images/empty-data-placeholder.png" alt="Empty Log" className="w-48 h-48 mb-6 opacity-80" onError={(e) => e.target.style.display='none'} />
            <h3 className="text-lg font-bold text-ink">Belum ada simulasi dilakukan</h3>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-canvas-parchment text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                  <th className="px-6 py-4">ID Simulasi</th>
                  <th className="px-6 py-4">Waktu Eksekusi</th>
                  <th className="px-6 py-4">Alternatif Pemenang (Ranking 1)</th>
                  <th className="px-6 py-4">Skor Pemenang</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {logs.map((log) => {
                  const winner = log.ranking_data && log.ranking_data.length > 0 ? log.ranking_data[0] : null;
                  return (
                    <tr key={log.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-500 font-mono">#{log.id}</td>
                      <td className="px-6 py-4 text-sm font-medium flex items-center text-ink">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {new Date(log.executed_at).toLocaleString('id-ID')}
                      </td>
                      <td className="px-6 py-4 font-semibold text-ink">
                        {winner ? winner.nama : '-'}
                      </td>
                      <td className="px-6 py-4 font-mono text-primary font-bold">
                        {winner ? winner.score.toFixed(4) : '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogs;
