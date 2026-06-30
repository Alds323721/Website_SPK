import axios from 'axios';

// Menggunakan port default Laravel (8000)
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  // Wajib true jika menggunakan Laravel Sanctum cookie-based authentication
  // withCredentials: true, (Dinonaktifkan karena kita menggunakan Bearer Token API biasa)
});

// Interceptor untuk menyisipkan token secara otomatis ke setiap request (jika ada)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
