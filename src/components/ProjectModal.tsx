import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import {
  BurnoutDashboardVisual,
  AnimalVisionVisual,
  PlacementBotVisual,
  MovieWishlistVisual,
} from './ProjectVisuals';
import { MagneticButton } from './MagneticButton';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderVisual = (id: string) => {
    switch (id) {
      case 'ai-employee-burnout':
        return <BurnoutDashboardVisual />;
      case 'animal-classification':
        return <AnimalVisionVisual />;
      case 'placement-assist-bot':
        return <PlacementBotVisual />;
      case 'movie-wishlist':
        return <MovieWishlistVisual />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Click backdrop to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-5xl my-auto bg-[#0F0F0E] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Modal Top Header Bar */}
        <div className="p-6 md:px-8 border-b border-white/10 flex items-center justify-between bg-[#0B0B0A] flex-none">
          <div className="flex items-center gap-4 font-mono-tech text-xs tracking-wider">
            <span className="text-[#E2F952] font-semibold">PROJECT [{project.number}]</span>
            <span className="text-neutral-500">/</span>
            <span className="text-neutral-300 uppercase">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            data-cursor-text="CLOSE"
            className="w-9 h-9 rounded-full border border-white/15 hover:border-white flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body Scroll Container */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-10 font-sans">
          {/* Title & Subtitle */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-none mb-3">
              {project.title}
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Project Visual Representation */}
          <div className="w-full rounded-lg overflow-hidden border border-white/10">
            {renderVisual(project.id)}
          </div>

          {/* Key Metrics / Highlights if any */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-tech pt-2">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="p-4 rounded-lg bg-white/[0.02] border border-white/10 flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">{metric.label}</span>
                  <span className="text-white text-base font-semibold">{metric.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
            <div className="space-y-3">
              <span className="font-mono-tech text-xs tracking-widest uppercase text-red-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                THE PROBLEM
              </span>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono-tech text-xs tracking-widest uppercase text-[#E2F952] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2F952]" />
                THE SOLUTION &amp; ARCHITECTURE
              </span>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Comprehensive Overview */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
              PROJECT OVERVIEW
            </span>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
              KEY CAPABILITIES &amp; FEATURES
            </span>
            <div className="grid grid-cols-1 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#E2F952] flex-none mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
              TECHNOLOGY STACK
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded bg-white/5 border border-white/10 font-mono-tech text-xs text-neutral-200 uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-6 md:px-8 border-t border-white/10 bg-[#0B0B0A] flex flex-col sm:flex-row items-center justify-between gap-4 flex-none font-mono-tech text-xs">
          <span className="text-neutral-500">DEVELOPED BY SAKTHIMURUGAN V</span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.githubUrl && (
              <MagneticButton
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="GITHUB"
                className="flex-1 sm:flex-none px-5 py-2.5 rounded border border-white/20 hover:border-white text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB REPO</span>
              </MagneticButton>
            )}

            {project.liveDemoUrl && (
              <MagneticButton
                as="a"
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="DEMO"
                className="flex-1 sm:flex-none px-5 py-2.5 rounded bg-[#E2F952] hover:bg-[#d4ed3f] text-[#090909] font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>VIEW REPOSITORY / DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </MagneticButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
