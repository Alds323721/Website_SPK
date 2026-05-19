import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { LayoutDashboard, Users, LogOut, FileText } from 'lucide-react';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/logout');
    } catch (e) {
      console.error(e);
    } finally {
      localStorage.removeItem('admin-token');
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen flex bg-canvas-parchment">
      {/* Sidebar */}
      <aside className="w-72 bg-ink text-surface-pearl flex-col hidden md:flex">
        <div className="h-20 flex items-center px-8 border-b border-gray-800">
          <img src="/src/assets/icons/logo-spk-light.png" alt="Logo" className="h-8 w-auto mr-3" onError={(e) => e.target.style.display='none'} />
          <span className="font-bold text-xl tracking-tight text-white">SPK Admin</span>
        </div>
        <nav className="flex-1 py-8 px-4 space-y-2">
          <NavLink to="/admin/alternatif" className={({isActive}) => `flex items-center px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-primary text-white font-medium' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
            <Users className="w-5 h-5 mr-3" />
            Data Alternatif
          </NavLink>
          <NavLink to="/admin/logs" className={({isActive}) => `flex items-center px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-primary text-white font-medium' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
            <FileText className="w-5 h-5 mr-3" />
            Log Simulasi
          </NavLink>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button onClick={handleLogout} className="flex items-center px-4 py-3 w-full text-left text-gray-400 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-white border-b border-gray-200 flex items-center px-8 justify-between shadow-sm z-10">
          <h2 className="text-xl font-bold text-ink">Control Panel</h2>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              AD
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8 relative">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
