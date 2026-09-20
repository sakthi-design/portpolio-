import React from 'react';
import type { Project } from '../data/portfolioData';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import {
  BurnoutDashboardVisual,
  AnimalVisionVisual,
  PlacementBotVisual,
  MovieWishlistVisual,
} from './ProjectVisuals';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const renderVisual = (id: string) => {
    switch (id) {
      case 'ai-employee-burnout':
        return <BurnoutDashboardVisual />;
      case 'animal-classification':
        return <AnimalVisionVisual />;
      case 'ai-blog-bot':
        return <PlacementBotVisual />;
      case 'placement-assist-bot':
        return <PlacementBotVisual />;
      case 'movie-wishlist':
        return <MovieWishlistVisual />;
      default:
        return null;
    }
  };

  return (
    <section
      id="work"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto border-t border-white/10"
    >
      {/* Editorial Index Header */}
      <div className="flex items-center justify-between gap-4 mb-16 font-mono-tech text-xs tracking-widest text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="text-[#E2F952] font-semibold">[ 03 ]</span>
          <span className="uppercase text-white">SELECTED WORK</span>
        </div>
        <span className="text-neutral-500 uppercase">{PROJECTS.length} PROJECTS, REAL CODE</span>
      </div>

      {/* Section Title Statement */}
      <div className="max-w-3xl mb-24">
        <h2 className="font-display font-extrabold uppercase text-white tracking-tighter section-clamp-title mb-4">
          THINGS I'VE <span className="text-[#E2F952]">BUILT</span> &amp; <span className="text-neutral-400">SHIPPED.</span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
          Five projects that started as "I wonder if I can build this" — click any of them for the full story.
        </p>
      </div>

      {/* Asymmetric Project Showcases */}
      <div className="space-y-32 md:space-y-40">
        {PROJECTS.map((project) => {
          const isTextLeft = project.layoutVariant === 'text-left';
          const isVisualLeft = project.layoutVariant === 'visual-left';
          const isFullWidth = project.layoutVariant === 'full-width';

          // Asymmetric Layout 1: Text Left / Visual Right
          if (isTextLeft) {
            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group cursor-pointer"
                onClick={() => onSelectProject(project)}
                data-cursor-text="VIEW PROJECT"
              >
                {/* Text Col */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                  <div className="flex items-center gap-4 font-mono-tech text-xs">
                    <span className="text-[#E2F952] font-bold text-base">{project.number}</span>
                    <span className="text-neutral-500">/</span>
                    <span className="text-neutral-400 uppercase tracking-wider">{project.category}</span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-none group-hover:text-[#E2F952] transition-colors duration-300 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 font-mono-tech text-[11px] text-neutral-300 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-white group-hover:text-[#E2F952] transition-colors">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Visual Col */}
                <div className="lg:col-span-7 transform group-hover:scale-[1.01] transition-transform duration-500">
                  {renderVisual(project.id)}
                </div>
              </div>
            );
          }

          // Asymmetric Layout 2: Visual Left / Text Right
          if (isVisualLeft) {
            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group cursor-pointer"
                onClick={() => onSelectProject(project)}
                data-cursor-text="VIEW PROJECT"
              >
                {/* Visual Col */}
                <div className="lg:col-span-7 order-2 lg:order-1 transform group-hover:scale-[1.01] transition-transform duration-500">
                  {renderVisual(project.id)}
                </div>

                {/* Text Col */}
                <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-between gap-6">
                  <div className="flex items-center gap-4 font-mono-tech text-xs">
                    <span className="text-[#E2F952] font-bold text-base">{project.number}</span>
                    <span className="text-neutral-500">/</span>
                    <span className="text-neutral-400 uppercase tracking-wider">{project.category}</span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-none group-hover:text-[#E2F952] transition-colors duration-300 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 font-mono-tech text-[11px] text-neutral-300 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-white group-hover:text-[#E2F952] transition-colors">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          }

          // Asymmetric Layout 3: Full-width Visual / Text Below
          if (isFullWidth) {
            return (
              <div
                key={project.id}
                className="flex flex-col gap-8 group cursor-pointer"
                onClick={() => onSelectProject(project)}
                data-cursor-text="VIEW PROJECT"
              >
                {/* Full-width visual container */}
                <div className="w-full transform group-hover:scale-[1.01] transition-transform duration-500">
                  {renderVisual(project.id)}
                </div>

                {/* Text below in wide grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
                  <div className="md:col-span-2 font-mono-tech text-xs">
                    <span className="text-[#E2F952] font-bold text-lg">{project.number}</span>
                    <span className="block text-neutral-500 uppercase tracking-widest mt-1">{project.year}</span>
                  </div>

                  <div className="md:col-span-6">
                    <div className="text-neutral-400 uppercase font-mono-tech text-xs tracking-wider mb-2">
                      {project.category}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white tracking-tight group-hover:text-[#E2F952] transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div className="md:col-span-4 flex flex-col justify-between h-full gap-4 md:items-end">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 font-mono-tech text-[11px] text-neutral-300 uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-white group-hover:text-[#E2F952] transition-colors">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          }

          // Asymmetric Layout 4: Asymmetric Split
          return (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group cursor-pointer"
              onClick={() => onSelectProject(project)}
              data-cursor-text="VIEW PROJECT"
            >
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex items-center gap-4 font-mono-tech text-xs">
                  <span className="text-[#E2F952] font-bold text-base">{project.number}</span>
                  <span className="text-neutral-500">/</span>
                  <span className="text-neutral-400 uppercase tracking-wider">{project.category}</span>
                </div>

                <div>
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight leading-none group-hover:text-[#E2F952] transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-4 font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 font-mono-tech text-[11px] text-neutral-300 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <span className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-white group-hover:text-[#E2F952] transition-colors">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 transform group-hover:scale-[1.01] transition-transform duration-500">
                {renderVisual(project.id)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
