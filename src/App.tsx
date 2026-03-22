import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from './components/Navigation';
import { DownloadModal } from './components/DownloadModal';
import { HeroSection } from './sections/HeroSection';
import { QuotesSection } from './sections/QuotesSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { PricingSection } from './sections/PricingSection';
import { ClosingSection } from './sections/ClosingSection';
import { Footer } from './sections/Footer';
import { SupportPage } from './pages/SupportPage';
import { MarketingPage } from './pages/MarketingPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

gsap.registerPlugin(ScrollTrigger);

// Main landing page component
function LandingPage() {
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

        {/* Quotes Section - Rotating affirmations */}
        <QuotesSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Pricing Section - only once */}
        <PricingSection onSelect={openModal} />

        {/* Closing CTA Section */}
        <div id="closing">
          <ClosingSection onDownload={openModal} />
        </div>

        {/* Footer with expandable legal sections */}
        <Footer />
      </main>
    </div>
  );
}

// App with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
