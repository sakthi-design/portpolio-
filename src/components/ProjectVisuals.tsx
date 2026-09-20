import React, { useState } from 'react';
import { ShieldCheck, Eye, Terminal, Film, Star, CheckCircle2 } from 'lucide-react';

// Visual 01: AI Employee Burnout Intelligence Dashboard
export const BurnoutDashboardVisual: React.FC = () => {
  const [activeSignal, setActiveSignal] = useState<'workload' | 'recovery' | 'stress'>('workload');

  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[400px] p-6 sm:p-8 rounded-lg bg-[#111110] border border-white/10 flex flex-col justify-between relative overflow-hidden group">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 font-mono-tech text-xs">
          <span className="h-2 w-2 rounded-full bg-[#E2F952] animate-pulse" />
          <span className="text-white font-medium uppercase tracking-wider">AI WELLBEING TELEMETRY</span>
        </div>
        <span className="font-mono-tech text-[11px] px-2.5 py-1 rounded bg-white/5 text-neutral-400 border border-white/10">
          DEMO · SAMPLE DATA
        </span>
      </div>

      {/* Center Graph & Metric Gauges */}
      <div className="relative z-10 my-4 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Dynamic Metric Dial */}
        <div className="sm:col-span-4 flex flex-col items-center sm:items-start">
          <span className="font-mono-tech text-[10px] uppercase text-neutral-500 tracking-wider mb-1">
            PREDICTIVE RISK INDEX
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">28.4</span>
            <span className="font-mono-tech text-xs text-[#E2F952]">/ 100</span>
          </div>
          <div className="flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded bg-[#E2F952]/10 border border-[#E2F952]/30 text-[#E2F952] font-mono-tech text-[10px] uppercase font-semibold">
            <ShieldCheck className="w-3 h-3" />
            <span>OPTIMAL ZONE</span>
          </div>
        </div>

        {/* Live SVG Telemetry Curve */}
        <div className="sm:col-span-8 h-28 relative flex items-end">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E2F952" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#E2F952" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 Q40,30 80,45 T160,25 T240,50 T300,20 L300,80 L0,80 Z"
              fill="url(#curveGrad)"
            />
            <path
              d="M0,60 Q40,30 80,45 T160,25 T240,50 T300,20"
              fill="none"
              stroke="#E2F952"
              strokeWidth="2.5"
            />
            {/* Anomaly / Stress Points */}
            <circle cx="80" cy="45" r="3.5" fill="#090909" stroke="#E2F952" strokeWidth="2" />
            <circle cx="160" cy="25" r="4.5" fill="#E2F952" />
            <circle cx="240" cy="50" r="3.5" fill="#090909" stroke="#E2F952" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Bottom Telemetry Cards */}
      <div className="relative z-10 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 font-mono-tech text-xs">
        <button
          onClick={() => setActiveSignal('workload')}
          className={`p-2.5 rounded border text-left transition-all ${
            activeSignal === 'workload'
              ? 'bg-[#E2F952]/10 border-[#E2F952]/40 text-white'
              : 'border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/20'
          }`}
        >
          <span className="text-[9px] block text-neutral-500 uppercase">WORK VELOCITY</span>
          <span className="font-semibold text-white">42 hrs / wk</span>
        </button>

        <button
          onClick={() => setActiveSignal('recovery')}
          className={`p-2.5 rounded border text-left transition-all ${
            activeSignal === 'recovery'
              ? 'bg-[#E2F952]/10 border-[#E2F952]/40 text-white'
              : 'border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/20'
          }`}
        >
          <span className="text-[9px] block text-neutral-500 uppercase">RECOVERY GAP</span>
          <span className="font-semibold text-white">94.2% Norm</span>
        </button>

        <button
          onClick={() => setActiveSignal('stress')}
          className={`p-2.5 rounded border text-left transition-all ${
            activeSignal === 'stress'
              ? 'bg-[#E2F952]/10 border-[#E2F952]/40 text-white'
              : 'border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/20'
          }`}
        >
          <span className="text-[9px] block text-neutral-500 uppercase">COHORT DRIFT</span>
          <span className="font-semibold text-[#E2F952]">-4.8% Risk</span>
        </button>
      </div>
    </div>
  );
};

// Visual 02: Animal Classification Computer Vision Inspector
export const AnimalVisionVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[400px] p-6 sm:p-8 rounded-lg bg-[#111110] border border-white/10 flex flex-col justify-between relative overflow-hidden group">
      {/* Reticle Camera Viewport Simulation */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 font-mono-tech text-xs">
          <Eye className="w-4 h-4 text-[#E2F952]" />
          <span className="text-white font-medium uppercase tracking-wider">OPENCV CONVOLUTIONAL FEED</span>
        </div>
        <span className="font-mono-tech text-[10px] text-neutral-500 uppercase">SAMPLE FRAME</span>
      </div>

      {/* Target Framing Center */}
      <div className="relative z-10 my-4 h-44 rounded border border-dashed border-white/20 p-4 flex flex-col justify-between bg-black/40">
        {/* Frame Corners */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#E2F952]" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#E2F952]" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#E2F952]" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#E2F952]" />

        <div className="flex justify-between items-start font-mono-tech text-[11px]">
          <span className="px-2 py-0.5 rounded bg-[#E2F952] text-[#090909] font-bold">
            DETECTED: PANTHERA TIGRIS
          </span>
          <span className="text-white bg-black/60 px-2 py-0.5 rounded border border-white/10">
            CONFIDENCE: 98.4%
          </span>
        </div>

        {/* Center Target Crosshair */}
        <div className="m-auto flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-[#E2F952]/40 flex items-center justify-center animate-spin" style={{ animationDuration: '16s' }}>
            <div className="w-8 h-8 rounded-full border border-dashed border-white/30" />
          </div>
        </div>

        <div className="flex justify-between items-end font-mono-tech text-[10px] text-neutral-400">
          <span>ROI: [X:142 Y:88 W:310 H:260]</span>
          <span>WEIGHTS: RESNET-50</span>
        </div>
      </div>

      {/* Model Probabilities Breakdown */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col gap-2 font-mono-tech text-xs">
        <div className="flex justify-between text-neutral-400 text-[11px]">
          <span>Panthera tigris (Tiger)</span>
          <span className="text-white font-medium">98.4%</span>
        </div>
        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
          <div className="bg-[#E2F952] h-full rounded-full" style={{ width: '98.4%' }} />
        </div>

        <div className="flex justify-between text-neutral-500 text-[10px] mt-1">
          <span>Panthera pardus (Leopard)</span>
          <span>1.2%</span>
        </div>
        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
          <div className="bg-neutral-600 h-full rounded-full" style={{ width: '1.2%' }} />
        </div>
      </div>
    </div>
  );
};

// Visual 03: Placement Assist Bot Conversational Intelligence Interface
export const PlacementBotVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[400px] p-6 sm:p-8 rounded-lg bg-[#111110] border border-white/10 flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 font-mono-tech text-xs">
          <Terminal className="w-4 h-4 text-[#E2F952]" />
          <span className="text-white font-medium uppercase tracking-wider">AI BLOG FLOW</span>
        </div>
        <span className="font-mono-tech text-[11px] px-2.5 py-1 rounded bg-white/5 text-neutral-400 border border-white/10">
          DRAFT MODE
        </span>
      </div>

      <div className="relative z-10 my-4 rounded border border-dashed border-white/15 bg-black/30 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 font-mono-tech text-[10px] uppercase tracking-wider text-neutral-400">
          <div className="flex items-center gap-2 text-[#E2F952]">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#E2F952]" />
            <span>Prompt</span>
          </div>
          <span className="border border-white/10 px-2 py-1 rounded">READY</span>
        </div>

        <div className="mt-5 rounded border border-white/10 bg-white/[0.02] p-3">
          <div className="font-mono-tech text-[10px] uppercase tracking-wider text-[#E2F952] mb-2">PROMPT</div>
          <p className="text-neutral-300 leading-relaxed font-sans text-sm sm:text-base">
            Turn this idea into a structured blog outline with an engaging first draft and a clear editorial angle.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="rounded border border-white/10 bg-black/30 p-2.5">
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">TOPIC</span>
            <span className="mt-1 block text-sm font-semibold text-white">AI WRITING</span>
          </div>
          <div className="rounded border border-white/10 bg-black/30 p-2.5">
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">TONE</span>
            <span className="mt-1 block text-sm font-semibold text-white">CLEAR</span>
          </div>
          <div className="rounded border border-white/10 bg-black/30 p-2.5">
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">FORMAT</span>
            <span className="mt-1 block text-sm font-semibold text-white">OUTLINE</span>
          </div>
          <div className="rounded border border-[#E2F952]/30 bg-[#E2F952]/10 p-2.5">
            <span className="text-[10px] uppercase tracking-wider text-neutral-300 block">OUTPUT</span>
            <span className="mt-1 block text-sm font-semibold text-[#E2F952]">READY</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-3 text-xs text-neutral-400">
        <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
          <span className="text-[#E2F952]">&gt;</span>
          <span className="truncate text-white">generate_blog_outline --topic=ai_assistant</span>
          <span className="w-2 h-4 bg-[#E2F952] animate-pulse shrink-0" />
        </div>
        <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-neutral-500">READY</span>
      </div>
    </div>
  );
};

// Visual 04: Movie Wishlist & Explorer Cinema Cards
export const MovieWishlistVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[400px] p-6 sm:p-8 rounded-lg bg-[#111110] border border-white/10 flex flex-col justify-between relative overflow-hidden group">
      {/* Cinema Explorer Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 font-mono-tech text-xs">
          <Film className="w-4 h-4 text-[#E2F952]" />
          <span className="text-white font-medium uppercase tracking-wider">TMDB REST CURATOR</span>
        </div>
        <span className="font-mono-tech text-[11px] px-2.5 py-0.5 rounded bg-[#E2F952]/10 text-[#E2F952] border border-[#E2F952]/30">
          WISHLIST: 18 SAVED
        </span>
      </div>

      {/* Featured Cinema Preview Card */}
      <div className="relative z-10 my-4 p-4 rounded bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row gap-5 items-start">
        {/* Poster Abstract Frame */}
        <div className="w-full sm:w-28 h-36 flex-none rounded bg-neutral-900 border border-white/15 flex flex-col justify-between p-3 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-900 to-[#E2F952]/20 opacity-80" />
          <span className="relative z-10 font-mono-tech text-[10px] text-[#E2F952]">POSTER</span>
          <div className="relative z-10">
            <span className="font-display font-bold text-white text-xs block leading-tight">INTERSTELLAR</span>
            <span className="font-mono-tech text-[9px] text-neutral-400">2014 · SCI-FI</span>
          </div>
        </div>

        {/* Cinema Metadata & Synopsis */}
        <div className="flex flex-col justify-between h-full gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="flex items-center gap-1 font-mono-tech text-xs text-[#E2F952] font-semibold">
                <Star className="w-3.5 h-3.5 fill-[#E2F952]" />
                8.7 / 10
              </span>
              <span className="text-neutral-600 text-xs">&middot;</span>
              <span className="font-mono-tech text-xs text-neutral-400">Christopher Nolan</span>
            </div>

            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Humanity's time on Earth has come to an end. A team of explorers undertakes the most important mission in human history.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono-tech text-[10px]">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300">SCI-FI</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300">DRAMA</span>
            <span className="px-2 py-0.5 rounded bg-[#E2F952] text-[#090909] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              IN WISHLIST
            </span>
          </div>
        </div>
      </div>

      {/* Live TMDB API Filter Pills */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between font-mono-tech text-xs text-neutral-400">
        <span className="text-[11px] text-neutral-500">UI PREVIEW</span>
        <div className="flex gap-2">
          <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-white">ALL GENRES</span>
          <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-[#E2F952]">SEARCH: INSTANT</span>
        </div>
      </div>
    </div>
  );
};
