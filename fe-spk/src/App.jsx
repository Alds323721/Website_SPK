import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLanding from './pages/PublicLanding';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogs from './pages/AdminLogs';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('admin-token');
  if (!token) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLanding />} />
        
        {/* Admin Login */}
        <Route path="/admin" element={<AdminLogin />} />
        
        {/* Admin Dashboard Protected Routes */}
        <Route element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path="/admin/alternatif" element={<AdminDashboard />} />
          <Route path="/admin/logs" element={<AdminLogs />} />
          <Route path="/admin/dashboard" element={<Navigate to="/admin/alternatif" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
