import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VennDiagram } from '../components/svg/VennDiagram';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onDownload: () => void;
}

export const HeroSection = ({ onDownload }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const vennRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Load animation
      const loadTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      loadTl
        .fromTo(vennRef.current, 
          { opacity: 0, scale: 0.95 }, 
          { opacity: 1, scale: 1, duration: 1.2 }
        )
        .fromTo(taglineRef.current, 
          { opacity: 0, y: 16 }, 
          { opacity: 1, y: 0, duration: 0.8 }, 
          0.4
        )
        .fromTo(ctaRef.current, 
          { opacity: 0, y: 12 }, 
          { opacity: 1, y: 0, duration: 0.6 }, 
          0.6
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=80%',
          pin: true,
          scrub: 0.5,
        }
      });

      scrollTl
        .fromTo(vennRef.current, 
          { y: 0, opacity: 1 }, 
          { y: -40, opacity: 0, ease: 'power2.in' }, 
          0.5
        )
        .fromTo(taglineRef.current, 
          { y: 0, opacity: 1 }, 
          { y: -30, opacity: 0, ease: 'power2.in' }, 
          0.55
        )
        .fromTo(ctaRef.current, 
          { y: 0, opacity: 1 }, 
          { y: -20, opacity: 0, ease: 'power2.in' }, 
          0.6
        );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-full bg-white flex flex-col items-center justify-center z-10"
    >
      {/* Venn Diagram - centered */}
      <div
        ref={vennRef}
        className="w-[80vw] max-w-[500px] mb-12"
      >
        <VennDiagram />
      </div>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="body-text text-center max-w-md mb-10 px-8"
      >
        Personalized manifestation meditations based on cognitive behavioral principles.
      </p>

      {/* Scientific CTA */}
      <button
        ref={ctaRef}
        onClick={onDownload}
        className="btn-scientific"
      >
        Begin Session
      </button>
    </section>
  );
};

export default HeroSection;
