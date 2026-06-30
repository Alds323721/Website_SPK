import React from 'react';

const LandingHero = () => {
  return (
    <section className="min-h-[85vh] flex items-center bg-canvas-parchment overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-8 text-left">
          <h1 className="text-[40px] sm:text-[56px] font-semibold text-ink leading-[1.07] tracking-[-0.28px]">
            Pemilihan Web Developer Terbaik <br className="hidden sm:inline" />
            <span className="text-primary font-semibold">Secara Objektif</span>
          </h1>
          <p className="text-[21px] text-ink-muted-80 font-normal leading-[1.4] tracking-[-0.01em] max-w-xl">
            Sistem Pendukung Keputusan menggunakan metode Analytical Hierarchy Process (AHP) untuk menemukan developer web yang paling sesuai dengan kebutuhan instansi Anda.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#simulasi" 
              className="px-[24px] py-[12px] rounded-full bg-primary text-white text-[17px] font-normal hover:bg-primary transition-all active:scale-95 shadow-none inline-flex items-center justify-center"
            >
              Mulai Simulasi Sekarang
            </a>
            <a 
              href="#kriteria" 
              className="px-[24px] py-[12px] rounded-full border border-primary text-primary text-[17px] font-normal bg-transparent hover:bg-transparent transition-all active:scale-95 shadow-none inline-flex items-center justify-center"
            >
              Lihat Kriteria
            </a>
          </div>
        </div>

        {/* Product Renders */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* Removed the blue neon glow gradient and borders to allow the product photography to stand on its own */}
            <img 
              src="/src/assets/images/hero-digitalization.jpg" 
              alt="Digitalization Blueprint" 
              className="relative max-w-full h-auto shadow-product-snap object-cover rounded-none"
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

