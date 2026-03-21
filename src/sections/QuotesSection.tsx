import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    text: "Ask; who is thinking this, who is doing this? Then you will find your true self.",
    author: "Ramana Maharshi",
    category: "vedanta",
  },
  {
    text: "Whatever you ask in prayer, believing, you will receive.",
    author: "Matthew 21:22",
    category: "bible",
  },
  {
    text: "Whatever you ask for in prayer, believe that you have received it, and it will be yours.",
    author: "Mark 11:24",
    category: "bible",
  },
  {
    text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
    author: "Matthew 7:7",
    category: "bible",
  },
  {
    text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
    author: "Hebrews 11:1",
    category: "bible",
  },
  {
    text: "The kingdom of God is within you.",
    author: "Luke 17:21",
    category: "bible",
  },
  {
    text: "Elevate yourself through the power of your mind, and not degrade yourself.",
    author: "Bhagavad Gita 6.5",
    category: "vedanta",
  },
  {
    text: "For those who have conquered the mind, it is their friend.",
    author: "Bhagavad Gita 6.6",
    category: "vedanta",
  },
  {
    text: "Whenever and wherever the restless and unsteady mind wanders, one should bring it back.",
    author: "Bhagavad Gita 6.26",
    category: "vedanta",
  },
  {
    text: "All power is within you; you can do anything and everything.",
    author: "Swami Vivekananda",
    category: "vedanta",
  },
  {
    text: "We are what our thoughts have made us.",
    author: "Swami Vivekananda",
    category: "vedanta",
  },
  {
    text: "As you think, so you become.",
    author: "Sri Ramakrishna",
    category: "vedanta",
  },
  {
    text: "I don't chase I attract, what belongs to me will simply find me, that is how it is and that is how it will always be.",
    author: "Modern Affirmation",
    category: "affirmation",
  },
  {
    text: "It is always working out for me.",
    author: "Modern Affirmation",
    category: "affirmation",
  },
  {
    text: "My energy is addicting, magnetic, and alerting.",
    author: "Modern Affirmation",
    category: "affirmation",
  },
  {
    text: "Everyone around me is successful and my energy is lucky.",
    author: "Modern Affirmation",
    category: "affirmation",
  },
  {
    text: "My wealth compounds exponentially daily.",
    author: "Modern Affirmation",
    category: "affirmation",
  },
  {
    text: "My mind is worth millions and everyone knows it.",
    author: "Modern Affirmation",
    category: "affirmation",
  },
];

export const QuotesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Animate quote change
  useEffect(() => {
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(quoteRef.current,
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

    }, section);

    return () => ctx.revert();
  }, []);

  const currentQuote = quotes[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="section-full bg-[#F8F8F8] flex flex-col items-center justify-center z-20"
    >
      {/* Quote Content - centered */}
      <div className="relative z-10 text-center px-8 max-w-2xl">
        <div ref={quoteRef}>
          <p className="quote-text mb-6">
            "{currentQuote.text}"
          </p>
          <p className="quote-author">
            — {currentQuote.author}
          </p>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#1A1A18] w-4' 
                  : 'bg-[#C0C0C0] hover:bg-[#9E9E9E]'
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
