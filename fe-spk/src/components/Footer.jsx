import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-ink text-surface-pearl py-8 mt-12 print:hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} Sistem Pendukung Keputusan Pemilihan Web Developer - Undiksha.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
