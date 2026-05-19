import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LandingHero from '../components/LandingHero';
import CriteriaSection from '../components/CriteriaSection';
import SimulationForm from '../components/SimulationForm';
import SensitivitySlider from '../components/SensitivitySlider';
import ResultView from '../components/ResultView';
import api from '../api/axios';

const PublicLanding = () => {
  const [results, setResults] = useState([]);
  const [isCustomWeight, setIsCustomWeight] = useState(false);
  const [weights, setWeights] = useState({
    ui_ux: 0.245,
    biaya: 0.239,
    keamanan: 0.181,
    waktu: 0.181,
    portofolio: 0.155
  });

  const handleWeightChange = (key, value) => {
    setWeights(prev => ({ ...prev, [key]: value }));
  };

  const handleCalculate = async (alternatifs) => {
    try {
      const payload = {
        alternatifs,
      };
      
      if (isCustomWeight) {
        payload.custom_weights = weights;
      }
      
      const response = await api.post('/calculate', payload);
      setResults(response.data.results);
      
      setTimeout(() => {
        document.getElementById('hasil')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    } catch (error) {
      console.error("Error calculating:", error);
      alert("Terjadi kesalahan saat menghitung ke backend. Pastikan server Laravel berjalan di localhost:8000.");
    }
  };

  return (
    <div className="min-h-screen bg-canvas-parchment font-sans text-ink selection:bg-primary/20 selection:text-ink">
      <Navbar />
      <main>
        <LandingHero />
        <CriteriaSection />
        <section id="simulasi" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-ink mb-4 tracking-tight">Simulasi Keputusan AHP</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Masukkan daftar alternatif developer beserta nilainya, dan biarkan sistem merangking berdasarkan pembobotan objektif.</p>
          </div>
          <SensitivitySlider weights={weights} onWeightChange={handleWeightChange} enabled={isCustomWeight} setEnabled={setIsCustomWeight} />
          <SimulationForm onCalculate={handleCalculate} />
          <div id="hasil" className="pt-4 scroll-mt-24">
            <ResultView results={results} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLanding;
