import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { LayoutDashboard, Users, LogOut, FileText, BarChart, Settings, Calculator, Award } from 'lucide-react';

const UserLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/logout');
    } catch (e) {
      console.error(e);
    } finally {
      localStorage.removeItem('auth-token');
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex bg-canvas-parchment font-sans text-ink">
      {/* Sidebar */}
      <aside className="w-64 bg-ink text-white flex flex-col hidden md:flex border-r border-white/5">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <img src="/src/assets/icons/logo-spk-light.png" alt="Logo" className="h-6 w-auto mr-2.5" onError={(e) => e.target.style.display='none'} />
          <span className="font-semibold text-[18px] tracking-tight text-white">SPK System</span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto">
          <NavLink 
            to="/dashboard" 
            end
            className={({isActive}) => `flex items-center px-4 py-2.5 rounded-full transition-all text-[14px] ${isActive ? 'bg-[#0066cc] text-white font-medium' : 'text-body-muted hover:bg-white/5 hover:text-white'}`}
          >
            <LayoutDashboard className="w-4 h-4 mr-3" />
            Dashboard
          </NavLink>
          <NavLink 
            to="/dashboard/alternatif" 
            className={({isActive}) => `flex items-center px-4 py-2.5 rounded-full transition-all text-[14px] ${isActive ? 'bg-[#0066cc] text-white font-medium' : 'text-body-muted hover:bg-white/5 hover:text-white'}`}
          >
            <Users className="w-4 h-4 mr-3" />
            Data Alternatif
          </NavLink>
          <div className="pt-4 pb-2 px-4 text-xs font-semibold text-white/40 uppercase tracking-wider">
            Simulasi AHP
          </div>
          <NavLink 
            to="/dashboard/simulasi/kriteria" 
            className={({isActive}) => `flex items-center px-4 py-2.5 rounded-full transition-all text-[14px] ${isActive ? 'bg-[#0066cc] text-white font-medium' : 'text-body-muted hover:bg-white/5 hover:text-white'}`}
          >
            <Settings className="w-4 h-4 mr-3" />
            Kriteria (AHP)
          </NavLink>
          <NavLink 
            to="/dashboard/simulasi/perhitungan" 
            className={({isActive}) => `flex items-center px-4 py-2.5 rounded-full transition-all text-[14px] ${isActive ? 'bg-[#0066cc] text-white font-medium' : 'text-body-muted hover:bg-white/5 hover:text-white'}`}
          >
            <Calculator className="w-4 h-4 mr-3" />
            Perhitungan Matriks
          </NavLink>
          <NavLink 
            to="/dashboard/simulasi/penilaian" 
            className={({isActive}) => `flex items-center px-4 py-2.5 rounded-full transition-all text-[14px] ${isActive ? 'bg-[#0066cc] text-white font-medium' : 'text-body-muted hover:bg-white/5 hover:text-white'}`}
          >
            <BarChart className="w-4 h-4 mr-3" />
            Penilaian
          </NavLink>
          <NavLink 
            to="/dashboard/simulasi/hasil" 
            className={({isActive}) => `flex items-center px-4 py-2.5 rounded-full transition-all text-[14px] ${isActive ? 'bg-[#0066cc] text-white font-medium' : 'text-body-muted hover:bg-white/5 hover:text-white'}`}
          >
            <Award className="w-4 h-4 mr-3" />
            Hasil Rekomendasi
          </NavLink>
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout} 
            className="flex items-center px-4 py-2.5 w-full text-left text-ink-muted-48 hover:bg-red-500/10 hover:text-red-400 rounded-full transition-colors text-[14px]"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 bg-canvas border-b border-[#e0e0e0] flex items-center px-8 justify-between z-10">
          <h2 className="text-[18px] font-semibold text-ink">Personal Dashboard</h2>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0066cc]/10 flex items-center justify-center text-[#0066cc] font-semibold text-[14px]">
              ME
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8 relative bg-[#f5f5f7]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default UserLayout;

