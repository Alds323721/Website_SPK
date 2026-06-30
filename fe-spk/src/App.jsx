import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLanding from './pages/PublicLanding';
import Login from './pages/Login';
import Register from './pages/Register';
import UserLayout from './layouts/UserLayout';
import UserDashboard from './pages/UserDashboard';
import AlternatifManager from './pages/AlternatifManager';
import SimulasiKriteria from './pages/simulasi/SimulasiKriteria';
import SimulasiPerhitungan from './pages/simulasi/SimulasiPerhitungan';
import SimulasiPenilaian from './pages/simulasi/SimulasiPenilaian';
import SimulasiHasil from './pages/simulasi/SimulasiHasil';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('auth-token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLanding />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Dashboard Protected Routes */}
        <Route element={
          <ProtectedRoute>
            <UserLayout />
          </ProtectedRoute>
        }>
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/dashboard/alternatif" element={<AlternatifManager />} />

          {/* Simulasi — setiap langkah halaman sendiri */}
          <Route path="/dashboard/simulasi/kriteria" element={<SimulasiKriteria />} />
          <Route path="/dashboard/simulasi/perhitungan" element={<SimulasiPerhitungan />} />
          <Route path="/dashboard/simulasi/penilaian" element={<SimulasiPenilaian />} />
          <Route path="/dashboard/simulasi/hasil" element={<SimulasiHasil />} />

          {/* Redirect lama /dashboard/simulasi → /dashboard/simulasi/kriteria */}
          <Route path="/dashboard/simulasi" element={<Navigate to="/dashboard/simulasi/kriteria" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

