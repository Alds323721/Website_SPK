import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-[#ffffff] text-[#1d1d1f] flex flex-col items-center justify-center text-center px-4 pt-32 pb-24 border-b border-[#f5f5f7]">
      <h1 className="text-[40px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.28px] max-w-4xl mb-6">
        Temukan Web Developer Terbaik untuk Bisnis Anda.<br className="hidden md:block" /> Didukung Data Objek, Bukan Tebakan.
      </h1>
      
      <p className="text-[21px] md:text-[28px] font-normal leading-[1.14] tracking-[0.196px] text-[#1d1d1f] max-w-3xl mb-12">
        Sistem Pendukung Keputusan berbasis metode Analytic Hierarchy Process (AHP) untuk mengukur kelayakan developer secara akurat berdasarkan kriteria UI/UX, Biaya, Keamanan, Waktu, dan Portofolio.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link 
          to="/register" 
          className="bg-[#0066cc] text-white text-[17px] rounded-full px-[22px] py-[11px] hover:bg-[#0071e3] active:scale-95 transition-all font-medium shadow-none"
        >
          Mulai Evaluasi Sekarang
        </Link>
        <a 
          href="#kriteria" 
          className="flex items-center text-[#0066cc] text-[17px] rounded-full px-[22px] py-[11px] hover:underline transition-all font-medium bg-transparent"
        >
          Pelajari Metode AHP <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
