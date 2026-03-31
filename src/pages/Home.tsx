import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from '../components/Navigation';
import { DownloadModal } from '../components/DownloadModal';
import { HeroSection } from '../sections/HeroSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { PricingSection } from '../sections/PricingSection';
import { ClosingSection } from '../sections/ClosingSection';
import { Footer } from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-white">
      {/* Navigation */}
      <Navigation onDownload={openModal} />

      {/* Download Modal */}
      <DownloadModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Main content - Simple One Pager */}
      <main className="relative">
        {/* Hero Section - Venn Diagram */}
        <HeroSection onDownload={openModal} />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Pricing Section - only once */}
        <PricingSection onSelect={openModal} />

        {/* Closing CTA Section */}
        <div id="closing">
          <ClosingSection onDownload={openModal} />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
