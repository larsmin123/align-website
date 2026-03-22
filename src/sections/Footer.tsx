import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [showAppContent, setShowAppContent] = useState(false);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(footer,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="w-full bg-[#1A1A18] border-t border-[#333333] z-[70]"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left - Logo & Tagline */}
          <div className="lg:max-w-[280px]">
            <div className="align-wordmark-white mb-4">align</div>
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
                <li>
                  <button 
                    onClick={() => setShowAppContent(!showAppContent)}
                    className="text-[14px] text-white/60 hover:text-white transition-colors text-left"
                  >
                    App Store
                  </button>
                </li>
              </ul>
            </div>

            {/* Pages */}
            <div>
              <div className="micro-label text-white/40 mb-4">Pages</div>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/support"
                    className="text-[14px] text-white/60 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a 
                    href="/marketing"
                    className="text-[14px] text-white/60 hover:text-white transition-colors"
                  >
                    Marketing
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <div className="micro-label text-white/40 mb-4">Legal</div>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/privacy"
                    className="text-[14px] text-white/60 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a 
                    href="/terms"
                    className="text-[14px] text-white/60 hover:text-white transition-colors"
                  >
                    Terms
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
              href="https://www.instagram.com/align___app" 
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





      {/* App Store Content Section */}
      {showAppContent && (
        <div className="bg-[#0F0F0F] border-t border-[#333333] py-16">
          <div className="max-w-3xl mx-auto px-8 md:px-12">
            <h3 className="text-[18px] font-medium text-white mb-8">Manifestation Forecast</h3>
            
            <div className="space-y-6 text-[13px] text-white/60">
              <p>
                Personalised manifestation meditations shaped around your intentions, with thoughtfully written scripts, premium voice guidance, and immersive guided journeys.
              </p>

              <p>
                Align transforms your intentions into personalised manifestation meditations designed around what you want to call in. Whether you are seeking abundance, love, clarity, confidence, calm, focus, or inner peace, Align helps you turn your intentions into a guided meditation experience that feels personal, reflective, and immersive.
              </p>

              <div>
                <h4 className="text-[14px] font-medium text-white/80 mb-3">How it works</h4>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Choose your focus area, such as abundance, love, clarity, confidence, or peace</li>
                  <li>Answer reflective questions about your desires, mindset, and intentions</li>
                  <li>Select your preferred voice, meditation style, and session length</li>
                  <li>Receive a personalised script shaped around your responses</li>
                  <li>Listen to your guided manifestation journey whenever you need it</li>
                  <li>Journal your thoughts, emotional shifts, and insights over time</li>
                </ol>
              </div>

              <div>
                <h4 className="text-[14px] font-medium text-white/80 mb-3">Features</h4>
                <ul className="space-y-2">
                  <li>Personalised meditation experiences tailored to your intentions</li>
                  <li>AI-generated scripts shaped by your answers and chosen focus</li>
                  <li>Premium voice selection for a more immersive listening experience</li>
                  <li>Multiple meditation styles and durations to match your mood and routine</li>
                  <li>Evidence-informed meditation formats inspired by mindfulness, reflection, breathwork, and visualisation</li>
                  <li>Journaling integration to deepen your reflection and support your practice</li>
                  <li>Download sessions for offline listening with Elite</li>
                  <li>Streak tracking and progress insights to help you stay consistent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
