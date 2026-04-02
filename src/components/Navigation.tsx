import { useState, useEffect } from 'react';

interface NavigationProps {
  onDownload: () => void;
}

export const Navigation = ({ onDownload }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-8 md:px-12 py-6">
        {/* Logo - lowercase align with 16% letter-spacing */}
        <div className="align-wordmark">align</div>

        {/* Nav Links - centered */}
        <div className="hidden md:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection('pricing')}
            className="micro-label hover:text-[#1A1A18] transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="micro-label hover:text-[#1A1A18] transition-colors"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollToSection('footer')}
            className="micro-label hover:text-[#1A1A18] transition-colors"
          >
            Support
          </button>
        </div>

        {/* CTA */}
        <button 
          onClick={onDownload}
          className="btn-scientific text-[11px] py-3 px-5"
        >
          Pre-register
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
