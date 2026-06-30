import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Daftarkan Akun & Alternatif',
    desc: 'Masuk ke personal dashboard Anda dan buat daftar kandidat web developer yang ingin dievaluasi beserta nilai mentah mereka.'
  },
  {
    num: '02',
    title: 'Pembobotan Kriteria Dinamis',
    desc: 'Atur tingkat sensitivitas atau bobot prioritas untuk masing-masing kriteria (UI/UX, Biaya, Keamanan, dll) menggunakan slider intuitif.'
  },
  {
    num: '03',
    title: 'Sintesis Keputusan Akhir',
    desc: 'Sistem memproses normalisasi matriks AHP secara instan dan mengeluarkan rekomendasi peringkat terbaik dengan total nilai mutlak 1.0.'
  }
];

const WorkflowSteps = () => {
  return (
    <section id="fitur" className="py-24 bg-[#f5f5f7] px-4 md:px-8 border-y border-[#e0e0e0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-tight mb-4">Cara Kerja DevRank</h2>
          <p className="text-[17px] text-[#1d1d1f] max-w-2xl mx-auto">Tiga langkah sederhana untuk mendapatkan keputusan terbaik yang didukung secara matematis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-[#e0e0e0]"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#ffffff] border border-[#e0e0e0] rounded-full flex items-center justify-center text-[17px] font-semibold text-[#0066cc] mb-6 shadow-sm">
                {step.num}
              </div>
              <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">{step.title}</h3>
              <p className="text-[17px] text-[#1d1d1f] opacity-80 leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
