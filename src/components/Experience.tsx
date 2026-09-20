import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto border-t border-white/10"
    >
      {/* Editorial Index Header */}
      <div className="flex items-center justify-between gap-4 mb-16 font-mono-tech text-xs tracking-widest text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="text-[#E2F952] font-semibold">[ 04 ]</span>
          <span className="uppercase text-white">EXPERIENCE</span>
        </div>
        <span className="text-neutral-500 uppercase">WHAT I'VE DONE SO FAR</span>
      </div>

      {/* Section Statement */}
      <div className="max-w-3xl mb-16">
        <h2 className="font-display font-extrabold uppercase text-white tracking-tighter section-clamp-title mb-4">
          REAL WORK, <span className="text-[#E2F952]">EARLY</span> <span className="text-neutral-400">DAYS.</span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
          Internships, freelance gigs, and a lot of self-taught trial and error.
        </p>
      </div>

      {/* Editorial Timeline Table */}
      <div className="border-t border-white/10 flex flex-col">
        {EXPERIENCES.map((item) => (
          <div
            key={item.number}
            className="py-10 md:py-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-white/[0.01] transition-colors"
          >
            {/* Timeline Period & Number */}
            <div className="md:col-span-3 font-mono-tech">
              <span className="text-xs text-[#E2F952] font-bold block mb-1">[{item.number}]</span>
              <span className="text-sm md:text-base text-white font-medium block">{item.period}</span>
              <span className="text-xs text-neutral-500 uppercase mt-1 block">{item.location}</span>
            </div>

            {/* Role & Organization */}
            <div className="md:col-span-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight leading-tight">
                {item.role}
              </h3>
              <p className="font-mono-tech text-xs sm:text-sm text-[#E2F952] mt-1 uppercase tracking-wider">
                {item.organization}
              </p>
            </div>

            {/* Description & Tech Chips */}
            <div className="md:col-span-5 flex flex-col justify-between gap-6">
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 font-mono-tech text-[11px] text-neutral-400 uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
