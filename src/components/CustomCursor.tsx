import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const isEnabled = typeof window !== 'undefined'
    ? !(window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)
    : false;
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Smooth lerp coordinates
  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest<HTMLElement>('[data-cursor-text], [data-cursor], a, button');
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor-text');
        if (text) {
          setCursorText(text);
          setIsHovered(true);
        } else {
          setCursorText(null);
          setIsHovered(true);
        }
      } else {
        setCursorText(null);
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Render loop with lerp
    const render = () => {
      // Fast response for dot
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.75;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.75;

      // Smoother delayed lag for ring/badge
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central precise dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full transition-opacity duration-200 ${
          cursorText ? 'opacity-0' : 'opacity-100 bg-[#E2F952]'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer contextual follower / badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center transition-[width,height,background-color,border-color,opacity] duration-300 ease-out select-none ${
          cursorText
            ? 'px-4 py-2 bg-[#E2F952] text-[#090909] font-mono-tech text-[11px] font-semibold tracking-wider rounded-full shadow-[0_0_25px_rgba(226,249,82,0.35)] -translate-x-1/2 -translate-y-1/2'
            : isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 rounded-full border border-[#E2F952]/60 bg-[#E2F952]/10 backdrop-blur-[1px]'
            : 'w-8 h-8 -ml-4 -mt-4 rounded-full border border-white/20'
        } ${isClicking ? 'scale-90' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      >
        {cursorText && <span className="whitespace-nowrap uppercase">{cursorText}</span>}
      </div>
    </div>
  );
};
