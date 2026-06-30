import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { Users, FileText, Activity } from 'lucide-react';

const UserDashboard = () => {
  const [stats, setStats] = useState({ alternatifs: 0, logs: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [altRes, logRes] = await Promise.all([
          api.get('/alternatifs'),
          api.get('/logs')
        ]);
        setStats({
          alternatifs: altRes.data.length,
          logs: logRes.data.length
        });
      } catch (e) {
        console.error("Failed to fetch stats", e);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-6 font-sans">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-ink tracking-tight">Selamat Datang</h1>
        <p className="text-gray-500 mt-1 text-[14px]">Berikut adalah ringkasan aktivitas simulasi AHP Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[20px] border border-[#e0e0e0] shadow-sm flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0066cc] mr-4">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Alternatif</p>
            <h3 className="text-2xl font-bold text-gray-900">{stats.alternatifs}</h3>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-[20px] border border-[#e0e0e0] shadow-sm flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0066cc] mr-4">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Riwayat Simulasi</p>
            <h3 className="text-2xl font-bold text-gray-900">{stats.logs}</h3>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-[20px] border border-[#e0e0e0] shadow-sm flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mr-4">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Status Sistem</p>
            <h3 className="text-2xl font-bold text-gray-900">Aktif</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
