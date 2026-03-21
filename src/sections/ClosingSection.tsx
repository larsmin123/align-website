import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ClosingSectionProps {
  onDownload: () => void;
}

export const ClosingSection = ({ onDownload }: ClosingSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Wordmark animation
      gsap.fromTo(wordmarkRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Tagline animation
      gsap.fromTo(taglineRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // CTA animation
      gsap.fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 55%',
            toggleActions: 'play none none reverse',
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-full bg-[#1A1A18] flex flex-col items-center justify-center z-[50]"
    >
      {/* Center Content */}
      <div className="relative z-10 text-center px-8">
        {/* Main Wordmark - lowercase with 16% letter-spacing, white */}
        <h2
          ref={wordmarkRef}
          className="align-wordmark-large-white mb-6"
        >
          align
        </h2>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-[15px] text-white/70 max-w-md mx-auto mb-10"
        >
          Download now. Begin your practice.
        </p>

        {/* CTA Button */}
        <button
          ref={ctaRef}
          onClick={onDownload}
          className="btn-scientific-white"
        >
          Download
        </button>
      </div>
    </section>
  );
};

export default ClosingSection;
