import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      setError('Password dan konfirmasi password tidak cocok.');
      return;
    }
    
    try {
      const response = await api.post('/register', { name, email, password, password_confirmation });
      localStorage.setItem('auth-token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Gagal mendaftar. Email mungkin sudah digunakan.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center font-sans">
      <div className="max-w-md w-full bg-white p-10 rounded-[20px] border border-[#e0e0e0] shadow-sm">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2 tracking-tight">Daftar Akun</h2>
        <p className="text-center text-gray-500 mb-8 text-sm">Buat akun untuk menggunakan simulasi AHP</p>
        
        {error && <div className="mb-4 text-red-500 text-sm text-center">{error}</div>}
        
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent rounded-[12px] focus:ring-2 focus:ring-[#0066cc] focus:bg-white outline-none transition-all text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent rounded-[12px] focus:ring-2 focus:ring-[#0066cc] focus:bg-white outline-none transition-all text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent rounded-[12px] focus:ring-2 focus:ring-[#0066cc] focus:bg-white outline-none transition-all text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent rounded-[12px] focus:ring-2 focus:ring-[#0066cc] focus:bg-white outline-none transition-all text-sm"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-[#0066cc] text-white rounded-[12px] hover:bg-[#0055b3] transition-colors font-medium text-sm mt-2"
          >
            Daftar
          </button>
        </form>
        <p className="text-center mt-6 text-sm text-gray-500">
          Sudah punya akun? <Link to="/login" className="text-[#0066cc] hover:underline">Login di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
