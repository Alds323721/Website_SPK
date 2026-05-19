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
    <section id="kriteria" className="py-20 bg-surface-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-ink mb-4">Kriteria Penilaian Pakar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Kami menggunakan 5 kriteria utama yang telah divalidasi oleh pakar untuk memberikan rekomendasi terbaik.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {criteriaData.map((item) => (
            <div key={item.id} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center cursor-default">
              <div className="w-16 h-16 mb-4 flex items-center justify-center p-3 rounded-full bg-canvas-parchment group-hover:bg-blue-50 transition-colors">
                {/* Simulated SVG hover effects for images using CSS filters */}
                <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-10 h-10 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:sepia group-hover:hue-rotate-[190deg] group-hover:saturate-200 transition-all duration-300"
                    onError={(e) => e.target.style.display = 'none'} 
                />
              </div>
              <h3 className="text-lg font-semibold text-ink group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;
