import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Essential',
    price: '$19.99',
    yearlyPrice: '$149.99',
    period: '/mo',
    yearlyPeriod: '/yr',
    description: 'Begin your practice with core features.',
    features: [
      '3 meditations/month',
      '3 meditation styles',
      'Deep Transformation',
      'Classic Manifestation',
      'Affirmation Flow',
      'Journaling',
      'Insights',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$49.99',
    yearlyPrice: '$399.99',
    period: '/mo',
    yearlyPeriod: '/yr',
    description: 'Deepen your practice with advanced tools.',
    features: [
      '5 meditations/month',
      '5 meditation styles',
      'Deep Transformation',
      'Classic Manifestation',
      'Affirmation Flow',
      'Yoga Nidra',
      'Alpha Method',
      'Journaling',
      'Insights',
    ],
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '$99.99',
    yearlyPrice: '$799.99',
    period: '/mo',
    yearlyPeriod: '/yr',
    description: 'The complete manifestation system.',
    features: [
      '10 meditations/month',
      'All 8 meditation styles',
      'Deep Transformation',
      'Classic Manifestation',
      'Affirmation Flow',
      'Yoga Nidra',
      'Alpha Method',
      'Somatic',
      'Future Self',
      'Sleep Programming',
      'Offline downloads',
      'Journaling',
      'Insights',
    ],
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

      // Cards animation
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

      // Footer animation
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
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        {/* Header - centered, lowercase like app */}
        <div ref={headerRef} className="mb-16 text-center">
          <h2 className="text-[32px] md:text-[42px] font-normal text-[#1A1A18] leading-tight mb-4">
            pricing
          </h2>
          <p className="body-text max-w-lg mx-auto">
            Choose the plan that aligns with your practice.
          </p>
        </div>

        {/* Pricing Cards - aligned columns */}
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
              <div className="mb-6">
                <span className={`micro-label mb-2 block ${
                  plan.highlighted ? 'text-white/60' : ''
                }`}>
                  {plan.name}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className={`text-[32px] font-normal ${
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
                <p className={`text-[13px] mt-1 ${
                  plan.highlighted ? 'text-white/50' : 'text-[#9E9E9E]'
                }`}>
                  or {plan.yearlyPrice}{plan.yearlyPeriod}
                </p>
                <p className={`text-[14px] mt-3 ${
                  plan.highlighted ? 'text-white/70' : 'text-[#6B6B6B]'
                }`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li 
                    key={feature}
                    className={`text-[13px] ${
                      plan.highlighted ? 'text-white/80' : 'text-[#6B6B6B]'
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={onSelect}
                className={`w-full mt-auto ${
                  plan.highlighted 
                    ? 'btn-scientific-white' 
                    : 'btn-scientific'
                }`}
              >
                Select
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
