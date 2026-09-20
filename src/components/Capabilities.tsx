import React, { useState } from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section
      id="capabilities"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto border-t border-white/10"
    >
      {/* Editorial Index Header */}
      <div className="flex items-center justify-between gap-4 mb-16 font-mono-tech text-xs tracking-widest text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="text-[#E2F952] font-semibold">[ 02 ]</span>
          <span className="uppercase text-white">CAPABILITIES</span>
        </div>
        <span className="text-neutral-500 uppercase">{CAPABILITIES.length} AREAS, HONESTLY RATED</span>
      </div>

      {/* Section Header Heading */}
      <div className="max-w-3xl mb-16">
        <h2 className="font-display font-extrabold uppercase text-white tracking-tighter section-clamp-title mb-4">
          WHAT I <span className="text-neutral-400">CAN</span> DO <span className="text-[#E2F952]">(SO FAR).</span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
          Strong where I've shipped things, honest where I'm still learning. Hover a row to see the tools.
        </p>
      </div>

      {/* Editorial Expandable Rows */}
      <div className="border-t border-white/10 flex flex-col">
        {CAPABILITIES.map((cap, index) => {
          const isExpanded = hoveredIndex === index;

          return (
            <div
              key={cap.number}
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={() => setHoveredIndex(isExpanded ? null : index)}
              data-cursor-text="EXPLORE"
              className={`group border-b border-white/10 transition-all duration-500 cursor-pointer ${
                isExpanded ? 'bg-white/[0.02] py-8 md:py-10' : 'hover:bg-white/[0.01] py-6 md:py-8'
              }`}
            >
              {/* Row Main Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span
                    className={`font-mono-tech text-sm md:text-base font-semibold transition-colors duration-300 ${
                      isExpanded ? 'text-[#E2F952]' : 'text-neutral-500 group-hover:text-neutral-300'
                    }`}
                  >
                    {cap.number}
                  </span>

                  <div>
                    <h3
                      className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase transition-colors duration-300 ${
                        isExpanded ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                      }`}
                    >
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-mono-tech mt-1">
                      {cap.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end md:self-center">
                  <span className="hidden sm:inline-block font-mono-tech text-xs tracking-wider text-neutral-500 uppercase">
                    {cap.skills.length} TECHNOLOGIES
                  </span>

                  <div
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? 'border-[#E2F952] bg-[#E2F952] text-[#090909] rotate-45'
                        : 'border-white/20 text-neutral-400 group-hover:border-white group-hover:text-white'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Expandable Content Panel */}
              <div
                className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                  isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-white/5' : 'grid-rows-[0fr] opacity-0 mt-0 pt-0'
                }`}
              >
                <div className="min-h-0">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <p className="max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed">
                      {cap.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 md:max-w-md">
                      {cap.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-sm bg-white/[0.04] border border-white/10 font-mono-tech text-[11px] sm:text-xs tracking-wider text-neutral-300 uppercase hover:border-[#E2F952]/40 hover:text-[#E2F952] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
