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
    <div className="min-h-screen flex bg-surface-black overflow-hidden">
      <div className="hidden lg:flex lg:w-1/2 bg-ink items-center justify-center relative">
        <div className="absolute inset-0 bg-primary/20 blur-3xl transform -skew-y-12 z-0"></div>
        <img 
            src="/src/assets/images/admin-secure-auth.png" 
            alt="Security Graphic" 
            className="relative z-10 w-96 h-96 object-contain filter drop-shadow-[0_0_30px_rgba(0,102,204,0.5)]" 
            onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute bottom-10 left-10 text-white z-10">
          <h2 className="text-3xl font-bold tracking-tight">Admin Portal</h2>
          <p className="text-gray-400 mt-2">Secure access to SPK Backend</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-surface-pearl">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold text-ink">Sign In</h1>
            <p className="text-gray-500 mt-2 text-sm">Masukkan kredensial administrator Anda</p>
          </div>
          {error && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium text-center border border-red-100">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-canvas-parchment border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                placeholder="admin@spk.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-canvas-parchment border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70 flex justify-center items-center"
            >
              {isLoading ? 'Authenticating...' : 'Secure Login'}
            </button>
          </form>
          <div className="mt-8 text-center">
            <a href="/" className="text-sm text-gray-500 hover:text-primary transition-colors">← Kembali ke Halaman Publik</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
