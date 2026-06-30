import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const response = await api.post('/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('admin-token', response.data.token);
        navigate('/admin/alternatif');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login gagal. Periksa kembali kredensial Anda.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-surface-black overflow-hidden font-sans">
      {/* Left Column (True Black) */}
      <div className="hidden lg:flex lg:w-1/2 bg-surface-black items-center justify-center relative border-r border-white/10">
        {/* Removed decorative blur glows to keep the UI chrome completely flat */}
        <img 
          src="/src/assets/images/admin-secure-auth.png" 
          alt="Security Graphic" 
          className="relative z-10 w-80 h-80 object-contain" 
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute bottom-12 left-12 text-white z-10">
          <h2 className="text-[34px] font-semibold tracking-[-0.374px] leading-tight">Admin Portal</h2>
          <p className="text-body-muted text-[17px] mt-2">Akses aman ke sistem manajemen SPK AHP.</p>
        </div>
      </div>
      
      {/* Right Column (Parchment background with white form card) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-canvas-parchment">
        <div className="w-full max-w-md bg-canvas p-10 rounded-[18px] border border-hairline">
          <div className="text-center mb-10">
            <h1 className="text-[28px] font-semibold text-ink tracking-tight">Sign In</h1>
            <p className="text-ink-muted-80 mt-2 text-[14px]">Masukkan kredensial administrator Anda</p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-[11px] text-[14px] font-medium text-center border border-red-100">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[14px] font-semibold text-ink mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-11 px-5 bg-canvas-parchment border border-transparent rounded-full focus:bg-canvas focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[14px]"
                placeholder="admin@spk.com"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold text-ink mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-11 px-5 bg-canvas-parchment border border-transparent rounded-full focus:bg-canvas focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[14px]"
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-11 bg-primary hover:bg-primary text-white font-medium rounded-full transition-all active:scale-95 disabled:opacity-70 flex justify-center items-center text-[14px] shadow-none"
            >
              {isLoading ? 'Authenticating...' : 'Secure Login'}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <a href="/" className="text-[14px] text-primary hover:underline transition-colors">
              ← Kembali ke Halaman Publik
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

