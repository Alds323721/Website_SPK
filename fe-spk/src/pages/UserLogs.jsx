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
    <div className="max-w-6xl mx-auto space-y-6 font-sans">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-ink tracking-tight">Log Simulasi Publik</h1>
        <p className="text-ink-muted-80 mt-1 text-[14px]">Pantau riwayat perhitungan AHP yang dilakukan oleh user secara publik.</p>
      </div>

      <div className="bg-canvas rounded-[18px] border border-hairline overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-ink-muted-80 text-[14px]">Memuat data log...</div>
        ) : logs.length === 0 ? (
          <div className="p-20 text-center flex flex-col items-center justify-center">
            <img src="/src/assets/images/empty-data-placeholder.png" alt="Empty Log" className="w-40 h-40 mb-6 opacity-60" onError={(e) => e.target.style.display='none'} />
            <h3 className="text-[17px] font-semibold text-ink">Belum ada simulasi dilakukan</h3>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-canvas-parchment text-[12px] font-semibold text-ink-muted-80 uppercase tracking-wider border-b border-hairline">
                  <th className="px-6 py-4 w-28">ID Simulasi</th>
                  <th className="px-6 py-4">Waktu Eksekusi</th>
                  <th className="px-6 py-4">Alternatif Pemenang (Ranking 1)</th>
                  <th className="px-6 py-4">Skor Pemenang</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline/50">
                {logs.map((log) => {
                  const winner = log.ranking_data && log.ranking_data.length > 0 ? log.ranking_data[0] : null;
                  return (
                    <tr key={log.id} className="hover:bg-canvas-parchment/30 transition-colors">
                      <td className="px-6 py-4 text-[13px] text-ink-muted-48 font-mono">#{log.id}</td>
                      <td className="px-6 py-4 text-[14px] font-medium flex items-center text-ink">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {new Date(log.executed_at).toLocaleString('id-ID')}
                      </td>
                      <td className="px-6 py-4 font-semibold text-ink text-[15px]">
                        {winner ? winner.nama : '-'}
                      </td>
                      <td className="px-6 py-4 font-mono text-primary font-bold text-[16px]">
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

