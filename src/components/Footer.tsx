import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto border-t border-white/10 font-mono-tech text-xs">
      {/* Editorial Footer */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        {/* Brand & Specialties */}
        <div className="space-y-4">
          <span className="font-display text-2xl font-bold tracking-tight text-white block">
            {PERSONAL_INFO.brandName}
          </span>
          <div className="flex flex-wrap items-center gap-3 text-neutral-400 text-[11px] uppercase tracking-wider">
            <span>WEB DEVELOPER</span>
            <span className="text-neutral-600">&middot;</span>
            <span>AI / ML</span>
            <span className="text-neutral-600">&middot;</span>
            <span>FULL-STACK</span>
            <span className="text-neutral-600">&middot;</span>
            <span>CREATIVE TECHNOLOGY</span>
          </div>
          <p className="text-neutral-500 text-[11px] max-w-sm">
            Designed and coded by me, mistakes and all. No template.
          </p>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full md:w-auto justify-between">
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              GITHUB
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-neutral-400 hover:text-[#E2F952] transition-colors"
            >
              EMAIL
            </a>
          </div>

          <MagneticButton
            strength={0.3}
            onClick={onScrollToTop}
            data-cursor-text="TOP"
            className="flex items-center gap-2 text-neutral-400 hover:text-[#E2F952] transition-colors cursor-pointer group uppercase text-[11px] tracking-wider"
          >
            <span>BACK TO TOP</span>
            <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E2F952] transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-white group-hover:text-[#E2F952] group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </MagneticButton>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-500 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} SAKTHIMURUGAN V. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
};
