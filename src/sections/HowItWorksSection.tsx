import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Set Your Intention',
    description: 'Choose a focus: love, peace, health, purpose, wealth, growth, creativity, belonging, spirit, or freedom.',
  },
  {
    number: '02',
    title: 'Reflect',
    description: 'Answer reflective prompts. The app listens before it speaks. Your intention becomes structured input.',
  },
  {
    number: '03',
    title: 'Personalize',
    description: 'Select your narrator voice, background soundscape, and session duration.',
  },
  {
    number: '04',
    title: 'Generate & Listen',
    description: 'Receive a personalized guided meditation crafted from your specific intention.',
  },
];

export const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Steps stagger animation
      const steps = stepsRef.current?.querySelectorAll('.step-item');
      if (steps) {
        gsap.fromTo(steps,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="section-full bg-white py-24 z-30"
    >
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <span className="micro-label mb-4 block">The Process</span>
          <h2 className="text-[32px] md:text-[42px] font-normal text-[#1A1A18] leading-tight mb-4">
            how it works
          </h2>
          <p className="body-text max-w-lg">
            A simple process to turn your intentions into guided practice.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="space-y-0">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="step-item flex gap-8 py-8 border-b border-[#E5E5E5] first:border-t"
            >
              <span className="micro-label text-[#9E9E9E] w-12 shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="text-[18px] font-medium text-[#1A1A18] mb-2">
                  {step.title}
                </h3>
                <p className="body-text">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
