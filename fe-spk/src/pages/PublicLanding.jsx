import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import WorkflowSteps from '../components/WorkflowSteps';

const PublicLanding = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] font-sans text-[#1d1d1f] selection:bg-[#0066cc]/20 selection:text-[#1d1d1f]">
      <Navbar />
      <main>
        <HeroSection />
        <WorkflowSteps />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLanding;
