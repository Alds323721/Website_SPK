import React from 'react';

const LandingHero = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-canvas-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-ink leading-tight tracking-tight">
            Pemilihan Web Developer Terbaik <span className="text-primary">Secara Objektif</span>
          </h1>
          <p className="text-lg text-gray-600">
            Sistem Pendukung Keputusan menggunakan metode Analytical Hierarchy Process (AHP) untuk menemukan developer web yang paling sesuai dengan kebutuhan instansi Anda.
          </p>
          <div className="pt-4">
            <a href="#simulasi" className="inline-block px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-700 transition-all shadow-md">
              Mulai Simulasi Sekarang
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl transform translate-y-4"></div>
            <img 
              src="/src/assets/images/hero-digitalization.jpg" 
              alt="Digitalization Blueprint" 
              className="relative rounded-2xl max-w-full h-auto shadow-product-snap object-cover border border-gray-100"
              onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
