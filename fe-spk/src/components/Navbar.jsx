import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-canvas-parchment/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/src/assets/icons/logo-spk-light.png" alt="Logo SPK" className="h-10 w-auto" onError={(e) => e.target.style.display = 'none'} />
            <span className="font-bold text-ink text-xl tracking-tight">SPK Developer</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#kriteria" className="text-ink hover:text-primary transition-colors font-medium">Kriteria</a>
            <a href="#simulasi" className="text-ink hover:text-primary transition-colors font-medium">Simulasi</a>
            <a href="/admin" className="px-5 py-2.5 rounded-full bg-ink text-surface-pearl hover:bg-gray-800 transition-colors font-semibold shadow-sm">Login Admin</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-ink hover:text-primary focus:outline-none p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <a href="#kriteria" className="block px-3 py-3 text-ink hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium" onClick={() => setIsOpen(false)}>Kriteria</a>
            <a href="#simulasi" className="block px-3 py-3 text-ink hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium" onClick={() => setIsOpen(false)}>Simulasi</a>
            <a href="/admin" className="block px-3 py-3 text-primary font-bold hover:bg-blue-50 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Login Admin</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
