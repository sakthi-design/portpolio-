import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 40);

      // Section spy
      const sections = ['contact', 'education', 'experience', 'work', 'capabilities', 'about'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT', id: 'about', index: '01' },
    { label: 'CAPABILITIES', id: 'capabilities', index: '02' },
    { label: 'WORK', id: 'work', index: '03' },
    { label: 'EXPERIENCE', id: 'experience', index: '04' },
    { label: 'EDUCATION', id: 'education', index: '05' },
    { label: 'CONTACT', id: 'contact', index: '06' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#090909]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 md:gap-6">
          {/* Brand & Live Status */}
          <div className="flex items-center min-w-0 gap-4 md:gap-5">
            <button
              onClick={() => handleLinkClick('hero')}
              data-cursor-text="TOP"
              className="text-left group flex items-center leading-none"
            >
              <span className="font-display text-lg md:text-xl font-bold tracking-[-0.08em] leading-none text-white group-hover:text-[#E2F952] transition-colors duration-300">
                {PERSONAL_INFO.brandName}
              </span>
            </button>

            {/* Live Status Beacon */}
            <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-white/10 text-[11px] font-mono-tech tracking-[0.16em] uppercase leading-none text-neutral-400">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-beacon-ping absolute inline-flex h-full w-full rounded-full bg-[#E2F952] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E2F952]"></span>
              </span>
              <span className="text-white/80 whitespace-nowrap">{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Desktop Minimal Nav */}
          <nav className="hidden md:flex items-center justify-end gap-1 lg:gap-2 flex-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <MagneticButton
                  key={item.id}
                  strength={0.2}
                  onClick={() => handleLinkClick(item.id)}
                  data-cursor-text="GO"
                  className={`inline-flex items-center leading-none px-3 py-1.5 text-[12px] font-mono-tech tracking-[0.15em] uppercase transition-all duration-300 rounded-sm relative group ${
                    isActive ? 'text-[#E2F952]' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] text-neutral-600 mr-1 group-hover:text-[#E2F952] transition-colors leading-none">
                    {item.index}
                  </span>
                  <span className="leading-none">{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-[#E2F952]" />
                  )}
                </MagneticButton>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#E2F952] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#090909]/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-8 pt-28 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-[12px] font-mono-tech tracking-widest text-[#E2F952] uppercase mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E2F952]"></span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="text-left flex items-baseline justify-between py-3 border-b border-white/10 group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono-tech text-xs text-neutral-500">[{item.index}]</span>
                <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-[#E2F952] transition-colors">
                  {item.label}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-[#E2F952] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col gap-3 font-mono-tech text-xs text-neutral-400">
          <div className="flex justify-between">
            <span>LOCATION</span>
            <span className="text-white">{PERSONAL_INFO.location}</span>
          </div>
          <div className="flex justify-between">
            <span>EMAIL</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#E2F952]">
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
