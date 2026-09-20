import React, { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { useMousePosition } from './hooks/useMousePosition';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { Project } from './data/portfolioData';

export const App: React.FC = () => {
  const { scrollTo } = useLenis();
  useMousePosition(); // Activates ambient mouse glow variables
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'hero') {
      scrollTo(0);
    } else {
      scrollTo(`#${sectionId}`, { offset: -60 });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090909] text-[#F4F4F2] selection:bg-[#E2F952] selection:text-[#090909] overflow-x-hidden">
      {/* Subtle Tactile Film Grain Texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Dynamic Ambient Mouse Radial Glow */}
      <div className="ambient-glow fixed inset-0 z-0" aria-hidden="true" />

      {/* Thin Minimal Scroll Progress Line */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#E2F952] z-[60] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Desktop Contextual Lerp Custom Cursor */}
      <CustomCursor />

      {/* Fixed Minimal Navigation */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero onScrollToWork={() => handleNavigate('work')} />
        <About />
        <Capabilities />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer onScrollToTop={() => scrollTo(0)} />

      {/* Case Study Fullscreen Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
