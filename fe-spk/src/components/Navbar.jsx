import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="h-[72px] bg-white flex items-center px-6 md:px-12 justify-between font-sans border-b border-[#e0e0e0] sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img 
          src="/src/assets/icons/logo-spk.png" 
          alt="Logo SPK" 
          className="h-8 w-auto" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/32x32?text=Logo";
          }} 
        />
        <span className="font-bold text-[22px] tracking-tight text-[#1d1d1f]">SPK Developer</span>
      </div>
      
      <div className="flex items-center gap-8">
        <a 
          href="#kriteria" 
          className="hidden md:block text-[#1d1d1f] hover:text-[#0066cc] font-medium transition-colors text-[16px]"
        >
          Kriteria
        </a>
        <Link 
          to="/login" 
          className="bg-[#0066cc] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#0055b3] transition-colors text-[15px] shadow-sm active:scale-95"
        >
          Mulai Simulasi
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
