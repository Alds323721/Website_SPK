import React from 'react';
import { Layout, DollarSign, ShieldCheck, Clock, Briefcase } from 'lucide-react';

const criteria = [
  {
    id: 1,
    title: 'UI/UX Design',
    desc: 'Menilai estetika dan fungsionalitas antarmuka. Pengalaman pengguna yang baik adalah kunci retensi pengunjung.',
    icon: Layout,
  },
  {
    id: 2,
    title: 'Biaya (Cost)',
    desc: 'Optimasi anggaran Anda. SPK menghitung efisiensi biaya secara terbalik (semakin murah, semakin baik) menggunakan normalisasi khusus.',
    icon: DollarSign,
  },
  {
    id: 3,
    title: 'Keamanan',
    desc: 'Proteksi celah keamanan kode sistem. Faktor krusial untuk mencegah kebocoran data dan serangan siber.',
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: 'Waktu Pengerjaan',
    desc: 'Ketepatan waktu rilis timeline proyek. Diukur sebagai kriteria "Cost", di mana penyelesaian lebih cepat mendapat bobot lebih tinggi.',
    icon: Clock,
  },
  {
    id: 5,
    title: 'Portofolio',
    desc: 'Validasi rekam jejak proyek developer sebelumnya. Bukti nyata pengalaman yang relevan dengan skala bisnis Anda.',
    icon: Briefcase,
  }
];

const FeatureGrid = () => {
  return (
    <section id="kriteria" className="py-24 bg-[#ffffff] px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[34px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-tight mb-4">5 Pilar Keputusan Objektif</h2>
        <p className="text-[17px] text-[#1d1d1f] max-w-2xl mx-auto">Metode AHP (Analytic Hierarchy Process) kami dibangun di atas kriteria fundamental yang memastikan Anda memilih developer tanpa bias.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {criteria.map((item) => (
          <div key={item.id} className="bg-[#ffffff] border border-[#e0e0e0] rounded-[18px] p-8 hover:bg-[#f5f5f7] transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#0066cc] mb-6">
              <item.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
            <p className="text-[17px] text-[#1d1d1f] opacity-80 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
