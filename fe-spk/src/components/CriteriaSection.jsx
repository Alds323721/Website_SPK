import React from 'react';

const criteriaData = [
  { id: 'ui-ux', title: 'UI/UX Design', icon: '/src/assets/icons/ic-ui-ux.png', desc: 'Penilaian terhadap estetika dan kemudahan antarmuka.' },
  { id: 'biaya', title: 'Biaya', icon: '/src/assets/icons/ic-biaya.png', desc: 'Estimasi harga yang ditawarkan oleh developer.' },
  { id: 'keamanan', title: 'Keamanan', icon: '/src/assets/icons/ic-keamanan.png', desc: 'Standar keamanan sistem yang diterapkan.' },
  { id: 'waktu', title: 'Waktu Pengerjaan', icon: '/src/assets/icons/ic-waktu.png', desc: 'Estimasi durasi penyelesaian proyek.' },
  { id: 'portofolio', title: 'Portofolio', icon: '/src/assets/icons/ic-portofolio.png', desc: 'Rekam jejak dan pengalaman proyek sebelumnya.' }
];

const CriteriaSection = () => {
  return (
    <section id="kriteria" className="py-24 bg-canvas border-y border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-semibold text-ink mb-4 tracking-[-0.01em] leading-[1.1]">
            Kriteria Penilaian Pakar
          </h2>
          <p className="text-[17px] text-ink-muted-80 max-w-2xl mx-auto leading-[1.47]">
            Kami menggunakan 5 kriteria utama yang telah divalidasi oleh pakar untuk memberikan rekomendasi terbaik secara transparan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {criteriaData.map((item) => (
            <div 
              key={item.id} 
              className="group bg-canvas-parchment p-6 rounded-[18px] border border-hairline flex flex-col items-center text-center cursor-default transition-all duration-200"
            >
              {/* Icon Container with subtle pearl button treatment */}
              <div className="w-[64px] h-[64px] mb-4 flex items-center justify-center p-3 rounded-full bg-canvas border border-divider-soft group-hover:bg-primary/5 transition-colors">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-8 h-8 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:sepia group-hover:hue-rotate-[190deg] group-hover:saturate-200 transition-all duration-200"
                  onError={(e) => e.target.style.display = 'none'} 
                />
              </div>
              
              {/* Card Header (17px, bold/600) */}
              <h3 className="text-[17px] font-semibold text-ink group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              {/* Card Description (14px, caption) */}
              <p className="text-[14px] text-ink-muted-80 mt-2 leading-[1.43] tracking-[-0.224px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;

