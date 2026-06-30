import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CriteriaSection from '../components/CriteriaSection';
import SimulationForm from '../components/SimulationForm';
import SensitivitySlider from '../components/SensitivitySlider';
import ResultView from '../components/ResultView';
import api from '../api/axios';

const UserSimulasi = () => {
  const [results, setResults] = useState([]);
  const [isCustomWeight, setIsCustomWeight] = useState(false);
  const location = useLocation();
  const [weights, setWeights] = useState({
    ui_ux: 0.245,
    biaya: 0.239,
    keamanan: 0.181,
    waktu: 0.181,
    portofolio: 0.155
  });

  // Handle hash scrolling for sidebar links
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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
      alert("Terjadi kesalahan saat menghitung ke backend.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 font-sans pb-24">
      <div id="kriteria" className="scroll-mt-24">
        <CriteriaSection />
      </div>
      
      <div id="penilaian" className="scroll-mt-24 space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-ink mb-3 tracking-tight">Perhitungan Matriks AHP</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">Atur bobot preferensi dan masukkan nilai alternatif untuk mendapatkan rekomendasi terbaik.</p>
        </div>
        
        <div id="perhitungan" className="scroll-mt-24">
          <SensitivitySlider weights={weights} onWeightChange={handleWeightChange} enabled={isCustomWeight} setEnabled={setIsCustomWeight} />
        </div>
        
        <SimulationForm onCalculate={handleCalculate} />
      </div>
      
      <div id="hasil" className="scroll-mt-24">
        {results.length > 0 ? (
          <ResultView results={results} />
        ) : (
          <div className="bg-white p-12 rounded-[20px] border border-[#e0e0e0] text-center shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum Ada Hasil</h3>
            <p className="text-gray-500 text-sm">Silakan isi form penilaian dan klik "Hitung Peringkat AHP" untuk melihat hasil.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSimulasi;
