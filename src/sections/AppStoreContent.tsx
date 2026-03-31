import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AppStoreContent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
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
      id="app-store-content"
      className="w-full bg-white py-24 z-80 border-t border-[#E5E5E5]"
    >
      <div ref={contentRef} className="max-w-3xl mx-auto px-8 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className="micro-label mb-4 block">Manifestation Forecast</span>
          <h2 className="text-[24px] md:text-[32px] font-normal text-[#1A1A18] leading-tight mb-6">
            Manifestation forecast for this week
          </h2>
          <p className="body-text">
            Personalised manifestation meditations shaped around your intentions, with thoughtfully written scripts, premium voice guidance, and immersive guided journeys.
          </p>
        </div>

        {/* Description */}
        <div className="mb-16 space-y-6">
          <p className="body-text">
            Align transforms your intentions into personalised manifestation meditations designed around what you want to call in.
          </p>
          <p className="body-text">
            Whether you are seeking abundance, love, clarity, confidence, calm, focus, or inner peace, Align helps you turn your intentions into a guided meditation experience that feels personal, reflective, and immersive.
          </p>
          <p className="body-text">
            Instead of offering one-size-fits-all audio, Align creates meditation journeys based on your answers, preferences, and goals. Each session is shaped around your current mindset, your desired focus, and the energy you want to cultivate in your daily life.
          </p>
          <p className="body-text">
            Align combines personal intention-setting with carefully structured meditation experiences, using reflective prompts, guided visualisation, calming voice guidance, and mindfulness-inspired techniques to support a more intentional practice.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h3 className="text-[18px] font-medium text-[#1A1A18] mb-6">How it works</h3>
          <ol className="space-y-4">
            <li className="body-text flex gap-4">
              <span className="micro-label text-[#9E9E9E] shrink-0">01</span>
              <span>Choose your focus area, such as abundance, love, clarity, confidence, or peace</span>
            </li>
            <li className="body-text flex gap-4">
              <span className="micro-label text-[#9E9E9E] shrink-0">02</span>
              <span>Answer reflective questions about your desires, mindset, and intentions</span>
            </li>
            <li className="body-text flex gap-4">
              <span className="micro-label text-[#9E9E9E] shrink-0">03</span>
              <span>Select your preferred voice, meditation style, and session length</span>
            </li>
            <li className="body-text flex gap-4">
              <span className="micro-label text-[#9E9E9E] shrink-0">04</span>
              <span>Receive a personalised script shaped around your responses</span>
            </li>
            <li className="body-text flex gap-4">
              <span className="micro-label text-[#9E9E9E] shrink-0">05</span>
              <span>Listen to your guided manifestation journey whenever you need it</span>
            </li>
            <li className="body-text flex gap-4">
              <span className="micro-label text-[#9E9E9E] shrink-0">06</span>
              <span>Journal your thoughts, emotional shifts, and insights over time</span>
            </li>
          </ol>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-[18px] font-medium text-[#1A1A18] mb-6">Features</h3>
          <ul className="space-y-3">
            <li className="body-text">Personalised meditation experiences tailored to your intentions</li>
            <li className="body-text">AI-generated scripts shaped by your answers and chosen focus</li>
            <li className="body-text">Premium voice selection for a more immersive listening experience</li>
            <li className="body-text">Multiple meditation styles and durations to match your mood and routine</li>
            <li className="body-text">Evidence-informed meditation formats inspired by mindfulness, reflection, breathwork, and visualisation</li>
            <li className="body-text">Journaling integration to deepen your reflection and support your practice</li>
            <li className="body-text">Download sessions for offline listening with Elite</li>
            <li className="body-text">Streak tracking and progress insights to help you stay consistent</li>
          </ul>
        </div>

        {/* Subscription Plans */}
        <div className="mb-16">
          <h3 className="text-[18px] font-medium text-[#1A1A18] mb-6">Subscription plans</h3>
          <div className="space-y-6">
            <div className="border border-[#E5E5E5] p-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[16px] font-medium text-[#1A1A18]">Essential</span>
                <span className="micro-label">$14.99/mo or $99.99/yr</span>
              </div>
              <p className="body-text text-[13px]">3 personalised sessions per month</p>
            </div>
            <div className="border border-[#E5E5E5] p-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[16px] font-medium text-[#1A1A18]">Pro</span>
                <span className="micro-label">$39.99/mo or $299.99/yr</span>
              </div>
              <p className="body-text text-[13px]">10 personalised sessions per month, plus journaling features</p>
            </div>
            <div className="border border-[#E5E5E5] p-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[16px] font-medium text-[#1A1A18]">Elite</span>
                <span className="micro-label">$88.88/mo or $699.99/yr</span>
              </div>
              <p className="body-text text-[13px]">20 personalised sessions per month, plus full access to all features including offline listening</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="body-text mb-6">
            Download Align and begin a personalised manifestation practice shaped around your intentions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppStoreContent;
