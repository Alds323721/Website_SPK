import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-canvas-parchment text-ink-muted-80 py-16 border-t border-hairline print:hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[12px] text-ink-muted-48 leading-relaxed font-sans">
          &copy; {new Date().getFullYear()} Sistem Pendukung Keputusan Pemilihan Web Developer. Dikembangkan oleh Universitas Pendidikan Ganesha (Undiksha).
        </p>
      </div>
    </footer>
  );
};

export default Footer;

