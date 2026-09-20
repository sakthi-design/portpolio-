import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL_INFO } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const metadataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal on scroll
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current.querySelectorAll('.about-reveal-line'),
          { y: '80%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1.1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Paragraph fade-up
      if (paragraphRef.current) {
        gsap.fromTo(
          paragraphRef.current,
          { opacity: 0.2, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: 'top 80%',
              scrub: 0.5,
            },
          }
        );
      }

      // Metadata entry
      if (metadataRef.current) {
        gsap.fromTo(
          metadataRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: metadataRef.current,
              start: 'top 90%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const metadataItems = [
    { label: 'NAME', value: PERSONAL_INFO.name },
    { label: 'FIELD', value: 'INFORMATION TECHNOLOGY' },
    { label: 'FOCUS', value: 'WEB / AI / ML / FULL-STACK' },
    { label: 'LOCATION', value: `${PERSONAL_INFO.location} (TAMIL NADU)` },
    { label: 'ACADEMIC', value: 'B.TECH UNDERGRADUATE' },
    { label: 'STATUS', value: 'OPEN TO OPPORTUNITIES' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto border-t border-white/10"
    >
      {/* Editorial Index Header */}
      <div className="flex items-center justify-between gap-4 mb-14 font-mono-tech text-xs tracking-widest text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="text-[#E2F952] font-semibold">[ 01 ]</span>
          <span className="uppercase text-white">ABOUT</span>
        </div>
        <span className="text-neutral-500 uppercase">A BIT ABOUT ME</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Giant Monumental Heading */}
        <div className="lg:col-span-7">
          <h2
            ref={headingRef}
            className="font-display font-extrabold uppercase text-white tracking-tighter section-clamp-title"
          >
            <span className="block overflow-hidden py-1">
              <span className="block about-reveal-line">I LIKE</span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="block about-reveal-line text-neutral-400">TURNING IDEAS</span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="block about-reveal-line text-[#E2F952]">INTO THINGS.</span>
            </span>
          </h2>
        </div>

        {/* Right Column: Editorial Paragraph & Narrative */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8 pt-4">
          <p
            ref={paragraphRef}
            className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal leading-relaxed tracking-tight"
          >
            I got into code by trying to customize a game launcher and breaking it badly. Fixing it taught me more than a semester of classes. Now I'm an IT undergrad who builds <span className="text-[#E2F952] font-medium">websites and small tools</span> — and occasionally trains an ML model for fun.
          </p>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            I care that things work on a cheap phone on slow internet, not just on my laptop. If a button confuses my mom, it goes back for another pass.
          </p>
        </div>
      </div>

      {/* Bottom Metadata Matrix */}
      <div
        ref={metadataRef}
        className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {metadataItems.map((item) => (
          <div key={item.label} className="flex flex-col gap-1.5 font-mono-tech">
            <span className="text-[10px] tracking-widest text-neutral-500 uppercase">{item.label}</span>
            <span className="text-xs sm:text-sm text-neutral-200 uppercase font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
