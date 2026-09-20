import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroScene } from './HeroScene';
import { ArrowDown, Terminal } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface HeroProps {
  onScrollToWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToWork }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLHeadingElement>(null);
  const statementRef = useRef<HTMLHeadingElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // Live IST Time update
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Refined GSAP Hero Entrance Timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered reveals
      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.2 }
      )
        .fromTo(
          greetingRef.current?.querySelectorAll('.hero-line') || [],
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 1.1, stagger: 0.12 },
          '-=0.6'
        )
        .fromTo(
          statementRef.current?.querySelectorAll('.hero-word') || [],
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 1.0, stagger: 0.08 },
          '-=0.8'
        )
        .fromTo(
          narrativeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-32 md:pt-36 pb-10 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto z-10 overflow-hidden"
    >
      {/* Interactive 3D WebGL Background Scene */}
      <HeroScene />

      {/* Top Editorial Label & Category */}
      <div ref={labelRef} className="relative z-10 opacity-0 mb-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech tracking-widest text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="text-[#E2F952] font-semibold">[ 00 / HELLO ]</span>
          <span className="text-neutral-600">/</span>
          <span className="uppercase text-neutral-300 tracking-wider">
            IT STUDENT &middot; SELF-TAUGHT &middot; CURIOUS
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-neutral-500">
          <Terminal className="w-3.5 h-3.5 text-[#E2F952]" />
          <span className="sr-only">Portfolio</span>
        </div>
      </div>

      {/* Main Typographic Editorial Display */}
      <div className="relative z-10 my-auto">
        {/* Intro greeting */}
        <h1
          ref={greetingRef}
          className="font-display font-bold uppercase tracking-tight text-white/90 text-2xl sm:text-3xl md:text-4xl mb-4 overflow-hidden"
        >
          <span className="block hero-line overflow-hidden">
            HI, I'M <span className="text-white underline decoration-[#E2F952]/50 underline-offset-8">{PERSONAL_INFO.name}.</span>
          </span>
        </h1>

        {/* Human-centered Typographic Statement */}
        <h2
          ref={statementRef}
          className="font-display font-extrabold uppercase text-white tracking-tighter hero-clamp-title mb-8 select-none"
        >
          <span className="block overflow-hidden py-1">
            <span className="inline-block hero-word mr-3 md:mr-6">I BUILD</span>
            <span className="inline-block hero-word text-neutral-400">PRODUCTS</span>
          </span>
          <span className="block overflow-hidden py-1">
            <span className="inline-block hero-word mr-3 md:mr-6 text-white">THAT FEEL</span>
            <span className="inline-block hero-word text-[#E2F952]">CLEAR</span>
          </span>
          <span className="block overflow-hidden py-1">
            <span className="inline-block hero-word text-neutral-300 mr-3 md:mr-6">&amp;</span>
            <span className="inline-block hero-word text-white">USEFUL.</span>
          </span>
        </h2>

        {/* Supporting Narrative & Action Row */}
        <div
          ref={narrativeRef}
          className="opacity-0 max-w-2xl flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
        >
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            {PERSONAL_INFO.subTagline}
          </p>

          <MagneticButton
            strength={0.25}
            onClick={onScrollToWork}
            data-cursor-text="EXPLORE"
            className="flex-none px-6 py-3.5 bg-white text-[#090909] hover:bg-[#E2F952] font-mono-tech text-xs tracking-wider uppercase font-semibold transition-colors duration-300 rounded-sm shadow-[0_4px_25px_rgba(255,255,255,0.08)] flex items-center justify-center gap-2 group"
          >
            <span>EXPLORE WORK</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Editorial Coordinates & Scroll Cue */}
      <div
        ref={bottomBarRef}
        className="relative z-10 opacity-0 pt-10 border-t border-white/10 font-mono-tech text-xs tracking-wider uppercase text-neutral-400"
      >
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3 sm:items-end sm:gap-8 md:gap-12">
          <div className="min-w-0">
            <span className="text-neutral-600 block text-[10px] leading-none mb-1.5">ORIGIN</span>
            <span className="block text-white font-medium leading-snug">TAMIL NADU, INDIA</span>
          </div>
          <div className="hidden md:block min-w-0">
            <span className="text-neutral-600 block text-[10px] leading-none mb-1.5">COORDINATES</span>
            <span className="block text-neutral-300 leading-snug">{PERSONAL_INFO.coordinates}</span>
          </div>
          <div className="min-w-0">
            <span className="text-neutral-600 block text-[10px] leading-none mb-1.5">LOCAL TIME</span>
            <span className="block text-[#E2F952] font-mono leading-snug">{currentTime ? `${currentTime} IST` : 'IST'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
