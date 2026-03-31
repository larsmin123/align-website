import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'ESSENTIAL',
    price: '$19.99',
    yearlyPrice: '$149.99',
    period: '/mo',
    description: 'Begin your practice with core features.',
    meditations: '3 meditations/month',
    styles: '3 meditation styles',
    includes: ['Deep Transformation', 'Classic Manifestation', 'Affirmation Flow'],
    features: ['Journaling', 'Insights'],
    highlighted: false,
  },
  {
    name: 'PRO',
    price: '$49.99',
    yearlyPrice: '$399.99',
    period: '/mo',
    description: 'Deepen your practice with advanced tools.',
    meditations: '5 meditations/month',
    styles: '5 meditation styles',
    includes: ['Deep Transformation', 'Classic Manifestation', 'Affirmation Flow', 'Yoga Nidra', 'Alpha Method'],
    features: ['Journaling', 'Insights'],
    highlighted: true,
  },
  {
    name: 'ELITE',
    price: '$99.99',
    yearlyPrice: '$799.99',
    period: '/mo',
    description: 'The complete manifestation system.',
    meditations: '10 meditations/month',
    styles: 'All 8 meditation styles',
    includes: ['Deep Transformation', 'Classic Manifestation', 'Affirmation Flow', 'Yoga Nidra', 'Alpha Method', 'Somatic', 'Future Self', 'Sleep Programming'],
    features: ['Offline downloads', 'Journaling', 'Insights'],
    highlighted: false,
  },
];

interface PricingSectionProps {
  onSelect: () => void;
}

export const PricingSection = ({ onSelect }: PricingSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
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

      const cards = cardsRef.current?.querySelectorAll('.pricing-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      gsap.fromTo(footerRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
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
      id="pricing"
      className="section-full bg-[#F8F8F8] py-24 z-40"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        {/* Header - centered */}
        <div ref={headerRef} className="mb-16 text-center">
          <h2 className="text-[32px] md:text-[42px] font-normal text-[#1A1A18] leading-tight mb-4">
            pricing
          </h2>
          <p className="body-text max-w-lg mx-auto">
            Choose the plan that aligns with your practice.
          </p>
        </div>

        {/* Pricing Cards */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`pricing-card p-8 flex flex-col ${
                plan.highlighted 
                  ? 'bg-[#1A1A18] text-white' 
                  : 'bg-white border border-[#E5E5E5]'
              }`}
            >
              {/* Plan Name */}
              <span className={`micro-label mb-4 ${
                plan.highlighted ? 'text-white/60' : 'text-[#9E9E9E]'
              }`}>
                {plan.name}
              </span>

              {/* Price */}
              <div className="mb-1">
                <span className={`text-[36px] font-normal ${
                  plan.highlighted ? 'text-white' : 'text-[#1A1A18]'
                }`}>
                  {plan.price}
                </span>
                <span className={`text-[14px] ${
                  plan.highlighted ? 'text-white/60' : 'text-[#9E9E9E]'
                }`}>
                  {plan.period}
                </span>
              </div>

              {/* Yearly Price */}
              <p className={`text-[13px] mb-4 ${
                plan.highlighted ? 'text-white/50' : 'text-[#9E9E9E]'
              }`}>
                or {plan.yearlyPrice}/yr
              </p>

              {/* Description */}
              <p className={`text-[14px] mb-6 ${
                plan.highlighted ? 'text-white/70' : 'text-[#6B6B6B]'
              }`}>
                {plan.description}
              </p>

              {/* Meditations */}
              <p className={`text-[16px] font-medium mb-2 ${
                plan.highlighted ? 'text-white' : 'text-[#1A1A18]'
              }`}>
                {plan.meditations}
              </p>

              {/* Styles */}
              <p className={`text-[14px] mb-6 ${
                plan.highlighted ? 'text-white/70' : 'text-[#6B6B6B]'
              }`}>
                {plan.styles}
              </p>

              {/* INCLUDES */}
              <div className="mb-6">
                <span className={`micro-label mb-3 block ${
                  plan.highlighted ? 'text-white/50' : 'text-[#9E9E9E]'
                }`}>
                  INCLUDES
                </span>
                <div className="flex flex-wrap gap-2">
                  {plan.includes.map((item) => (
                    <span 
                      key={item}
                      className={`text-[12px] px-3 py-1.5 rounded-full ${
                        plan.highlighted 
                          ? 'bg-white/10 text-white/90' 
                          : 'bg-[#F4F4F4] text-[#6B6B6B]'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className={`w-full h-px mb-6 ${
                plan.highlighted ? 'bg-white/20' : 'bg-[#E5E5E5]'
              }`} />

              {/* Features */}
              <div className="space-y-2 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <p 
                    key={feature}
                    className={`text-[14px] ${
                      plan.highlighted ? 'text-white/80' : 'text-[#6B6B6B]'
                    }`}
                  >
                    {feature}
                  </p>
                ))}
              </div>

              {/* SELECT Button */}
              <button 
                onClick={onSelect}
                className={`w-full py-4 text-[12px] font-medium tracking-[0.14em] uppercase border transition-colors ${
                  plan.highlighted 
                    ? 'border-white text-white hover:bg-white hover:text-[#1A1A18]' 
                    : 'border-[#1A1A18] text-[#1A1A18] hover:bg-[#1A1A18] hover:text-white'
                }`}
              >
                SELECT
              </button>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div ref={footerRef} className="mt-12 text-center">
          <p className="text-[13px] text-[#9E9E9E]">
            Cancel anytime. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
