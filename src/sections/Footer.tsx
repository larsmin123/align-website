import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1A18] z-[70]">
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left - Logo & Tagline */}
          <div className="lg:max-w-[280px]">
            <Link to="/" className="align-wordmark-white mb-4 block hover:opacity-70 transition-opacity">
              align
            </Link>
            <p className="text-[14px] text-white/50 leading-relaxed">
              Personalised meditation for real life. Turn your intentions into guided practice.
            </p>
          </div>

          {/* Right - Links */}
          <div className="flex flex-wrap gap-12 lg:gap-20">
            {/* Product */}
            <div>
              <div className="micro-label text-white/40 mb-4">Product</div>
              <ul className="space-y-3">
                <li>
                  <a href="#how-it-works" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <div className="micro-label text-white/40 mb-4">Legal</div>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy-policy" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <div className="micro-label text-white/40 mb-4">Support</div>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:support@alignapp.world" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    support@alignapp.world
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#333333] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/40">
            © 2026 Align App. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/align___app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[12px] text-white/40 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://www.tiktok.com/@align___app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[12px] text-white/40 hover:text-white transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
