import React, { useState } from 'react';
import { sendInquiry, describeEmailError } from '../lib/emailjs';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Check, Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { MagneticButton } from './MagneticButton';

export const Contact: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setSendError(null);

    try {
      await sendInquiry(formData);

      setFormSubmitted(true);
      setTimeout(() => {
        setIsFormOpen(false);
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSendError(describeEmailError(error));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto border-t border-white/10"
    >
      {/* Editorial Index Header */}
      <div className="flex items-center justify-between gap-4 mb-16 font-mono-tech text-xs tracking-widest text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="text-[#E2F952] font-semibold">[ 06 ]</span>
          <span className="uppercase text-white">CONTACT</span>
        </div>
        <span className="text-neutral-500 uppercase">SAY HELLO</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Monumental Heading */}
        <div className="lg:col-span-8">
          <h2 className="font-display font-extrabold uppercase text-white tracking-tighter hero-clamp-title mb-8 select-none">
            <span className="block">LET'S BUILD</span>
            <span className="block text-neutral-400">SOMETHING</span>
            <span className="block text-[#E2F952]">USEFUL.</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-12">
            Got a project, an internship, or just a question? My inbox is open — I usually reply within a day.
          </p>

          {/* Primary Magnetic CTA */}
          <div className="flex flex-wrap items-center gap-6">
            <MagneticButton
              strength={0.3}
              onClick={() => {
                setSendError(null);
                setIsFormOpen(true);
              }}
              data-cursor-text="LET'S TALK"
              className="px-8 py-4 bg-[#E2F952] hover:bg-[#d5ee3a] text-[#090909] font-mono-tech text-xs sm:text-sm tracking-wider uppercase font-bold transition-all duration-300 rounded-sm shadow-[0_4px_35px_rgba(226,249,82,0.25)] flex items-center gap-3 group cursor-pointer"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </MagneticButton>
          </div>
        </div>

        {/* Right Column: Direct Network Links */}
        <div className="lg:col-span-4 flex flex-col gap-8 pt-4 lg:border-l lg:border-white/10 lg:pl-12">
          <div>
            <span className="font-mono-tech text-[10px] tracking-widest text-neutral-500 uppercase block mb-3">
              DIRECT INQUIRIES
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="font-mono-tech text-sm sm:text-base text-white hover:text-[#E2F952] transition-colors break-all flex items-center gap-2 group"
            >
              <Mail className="w-4 h-4 text-[#E2F952]" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>

          <div className="border-t border-white/10 pt-6">
            <span className="font-mono-tech text-[10px] tracking-widest text-neutral-500 uppercase block mb-3">
              REPOSITORIES &amp; CODE
            </span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="GITHUB"
              className="font-mono-tech text-sm text-neutral-300 hover:text-white transition-colors flex items-center justify-between group py-2"
            >
              <div className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                <span>GITHUB / SAKTHIMURUGAN-V</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#E2F952] transition-colors" />
            </a>
          </div>

          <div className="border-t border-white/10 pt-6">
            <span className="font-mono-tech text-[10px] tracking-widest text-neutral-500 uppercase block mb-3">
              PROFESSIONAL NETWORK
            </span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="LINKEDIN"
              className="font-mono-tech text-sm text-neutral-300 hover:text-white transition-colors flex items-center justify-between group py-2"
            >
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                <span>LINKEDIN / SAKTHIMURUGAN-V</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#E2F952] transition-colors" />
            </a>
          </div>

          <div className="border-t border-white/10 pt-6 font-mono-tech text-xs text-neutral-500">
            <span>BASED IN TAMIL NADU, INDIA &middot; AVAILABLE WORLDWIDE</span>
          </div>
        </div>
      </div>

      {/* Interactive Contact Inquiry Drawer / Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setIsFormOpen(false)} />

          <div className="relative w-full max-w-lg bg-[#0F0F0E] border border-white/15 rounded-xl p-8 shadow-2xl z-10 font-mono-tech">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-xs tracking-wider text-white uppercase font-bold flex items-center gap-2">
                <Send className="w-4 h-4 text-[#E2F952]" />
                START A CONVERSATION
              </span>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-neutral-500 hover:text-white text-sm"
              >
                [ESC]
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E2F952]/10 border border-[#E2F952] flex items-center justify-center text-[#E2F952]">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl uppercase font-bold text-white">
                  MESSAGE TRANSMITTED
                </h3>
                <p className="text-xs text-neutral-400 font-sans">
                  Thank you — I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase text-neutral-400 block mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded bg-white/[0.03] border border-white/10 text-white text-xs focus:border-[#E2F952] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase text-neutral-400 block mb-1.5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded bg-white/[0.03] border border-white/10 text-white text-xs focus:border-[#E2F952] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase text-neutral-400 block mb-1.5">
                    MESSAGE / PROJECT BRIEF
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What are you working on? What do you need?"
                    className="w-full px-4 py-3 rounded bg-white/[0.03] border border-white/10 text-white text-xs focus:border-[#E2F952] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {sendError && (
                  <div
                    role="alert"
                    className="px-4 py-3 rounded bg-red-500/10 border border-red-500/40 text-red-300 text-xs"
                  >
                    {sendError}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity Inquiry from ${encodeURIComponent(
                      formData.name || 'Visitor'
                    )}&body=${encodeURIComponent(formData.message)}`}
                    className="text-[10px] text-neutral-400 hover:text-white underline underline-offset-4"
                  >
                    Open in Mail Client &rarr;
                  </a>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="px-6 py-2.5 bg-[#E2F952] hover:bg-[#d5ee3a] disabled:opacity-50 disabled:cursor-not-allowed text-[#090909] font-bold text-xs uppercase tracking-wider rounded transition-colors"
                  >
                    {isSending ? 'SENDING…' : 'SEND INQUIRY'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
