import React from 'react';
import { EDUCATIONS } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto border-t border-white/10"
    >
      {/* Editorial Index Header */}
      <div className="flex items-center justify-between gap-4 mb-16 font-mono-tech text-xs tracking-widest text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="text-[#E2F952] font-semibold">[ 05 ]</span>
          <span className="uppercase text-white">EDUCATION</span>
        </div>
        <span className="text-neutral-500 uppercase">WHERE I STUDIED</span>
      </div>

      {/* Section Title Statement */}
      <div className="max-w-3xl mb-16">
        <h2 className="font-display font-extrabold uppercase text-white tracking-tighter section-clamp-title mb-4">
          SCHOOL, <span className="text-[#E2F952]">COURSEWORK</span> &amp; <span className="text-neutral-400">BASICS.</span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
          The coursework behind the projects — plus the parts I'm still figuring out.
        </p>
      </div>

      {/* Editorial Education Items */}
      <div className="border-t border-white/10 flex flex-col">
        {EDUCATIONS.map((edu) => (
          <div
            key={edu.number}
            className="py-12 md:py-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-white/[0.01] transition-colors"
          >
            {/* Timeline Period */}
            <div className="md:col-span-3 font-mono-tech">
              <span className="text-xs text-[#E2F952] font-bold block mb-1">[{edu.number}]</span>
              <span className="text-sm md:text-base text-white font-medium block">{edu.period}</span>
              <span className="text-xs text-neutral-500 uppercase mt-1 block">{edu.location}</span>
            </div>

            {/* Degree & Institution in Monumental Display */}
            <div className="md:col-span-9 flex flex-col gap-6">
              <div>
                <span className="font-mono-tech text-xs tracking-widest text-[#E2F952] uppercase block mb-2">
                  {edu.degree}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
                  {edu.field}
                </h3>
                <p className="font-mono-tech text-base sm:text-lg text-neutral-300 mt-2 uppercase tracking-wide">
                  {edu.institution}
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed max-w-2xl">
                {edu.description}
              </p>

              {/* Coursework & Highlights */}
              <div className="flex flex-wrap gap-2 pt-2">
                {edu.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1.5 rounded bg-white/[0.03] border border-white/10 font-mono-tech text-xs text-neutral-300 uppercase"
                  >
                    {highlight}
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
