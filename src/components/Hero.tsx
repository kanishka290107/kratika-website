import React from 'react';
import { ArrowRight, Phone, Sparkles, Dna, Activity, Award, Microscope } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Subtle ambient glow gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Quiet unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-teal-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Biotechnology Scholar</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Lab Professional</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Athlete</span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
              style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">Kratika Dubey</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg font-medium text-teal-100/90 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.title}
            </p>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.shortIntro}
            </p>

            {/* Two CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 rounded-lg shadow-lg shadow-teal-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenContact}
                className="px-6 py-3 text-sm font-semibold text-slate-200 bg-[#131F33] hover:bg-[#1A2A44] border border-[#1E2E48] hover:border-teal-500/50 rounded-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Micro verification badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                DOB: 22 May 2003
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Call: +91 94126 31518
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                M.Sc. Candidate (2026—Present)
              </span>
            </div>

          </div>

          {/* Right Column: Organic Scientific Profile Placeholder */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
              
              {/* Outer organic rotating ring 1 */}
              <div 
                className="absolute inset-0 rounded-full border border-teal-500/20 animate-spin"
                style={{ animationDuration: '38s' }}
              >
                <span className="absolute top-2 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-teal-400 shadow-sm shadow-teal-400"></span>
                <span className="absolute bottom-4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>

              {/* Counter-rotating dashed biological orbit ring 2 */}
              <div 
                className="absolute inset-3 rounded-full border border-dashed border-cyan-500/25 animate-spin"
                style={{ animationDuration: '28s', animationDirection: 'reverse' }}
              >
                <span className="absolute top-1/4 right-2 w-2 h-2 rounded-full bg-cyan-400"></span>
              </div>

              {/* Glowing biological membrane backdrop */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-teal-950/80 via-[#0E1B2E] to-[#132A3E] border border-teal-500/30 shadow-2xl shadow-teal-950/60 flex items-center justify-center p-2 backdrop-blur-sm">
                
                {/* Scientific Hexagonal / Cellular motif layer */}
                <div className="w-full h-full rounded-full border border-teal-500/30 flex flex-col items-center justify-center relative overflow-hidden bg-[#0A1322] group shadow-inner">
                  
                  {/* Kratika Dubey Portrait Image */}
                  <img
                    src="/kratika.jpeg"
                    alt="Kratika Dubey - M.Sc. Biotechnology & Athlete"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = document.getElementById('monogram-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />

                  {/* Fallback monogram if image cannot load */}
                  <div
                    id="monogram-fallback"
                    className="hidden absolute inset-0 flex-col items-center justify-center bg-[#0A1322]"
                  >
                    <div 
                      className="text-5xl sm:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-white via-teal-200 to-emerald-400 select-none"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      KD
                    </div>
                    <div className="text-[11px] font-mono tracking-widest text-teal-300 uppercase mt-1">
                      Kratika Dubey
                    </div>
                  </div>

                  {/* Soft bottom vignette overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D18]/75 via-transparent to-transparent pointer-events-none" />

                  {/* Floating micro badge */}
                  <div className="absolute bottom-3 z-10 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0A1322]/90 border border-teal-500/40 text-[10px] text-teal-300 font-mono shadow-md backdrop-blur-sm">
                    <Activity className="w-2.5 h-2.5 text-teal-400" />
                    <span>Lab & Pitch</span>
                  </div>

                </div>
              </div>

              {/* Orbiting Satellite Indicator: Methodology Lab */}
              <div className="absolute -top-2 left-6 px-3 py-1.5 rounded-lg bg-[#0F1C2E]/95 border border-teal-500/40 shadow-lg shadow-black/40 flex items-center gap-2 text-xs text-slate-200 backdrop-blur-md">
                <Microscope className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="font-medium whitespace-nowrap">Methodology Lab (2 Yrs)</span>
              </div>

              {/* Orbiting Satellite Indicator: Professional Footballer */}
              <div className="absolute -bottom-3 right-4 px-3 py-1.5 rounded-lg bg-[#0F1C2E]/95 border border-emerald-500/40 shadow-lg shadow-black/40 flex items-center gap-2 text-xs text-slate-200 backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-medium whitespace-nowrap">Professional Footballer</span>
              </div>

            </div>
          </div>

        </div>

        {/* Real Data Highlights Strip */}
        <div className="mt-16 pt-8 border-t border-[#1E2E48]/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Methodology Lab</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white">2 <span className="text-sm font-sans font-normal text-teal-300">Years</span></div>
            <div className="text-xs text-slate-400">Structured experimental procedures</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Lab Technician</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white">2 <span className="text-sm font-sans font-normal text-teal-300">Years</span></div>
            <div className="text-xs text-slate-400">Sample workflow & discipline</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Class 12th Academic</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-emerald-300">97 <span className="text-sm font-sans font-normal text-slate-400">%ile</span></div>
            <div className="text-xs text-slate-400">Excellence in science studies</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Current Focus</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-teal-300">M.Sc.</div>
            <div className="text-xs text-slate-400">Biotechnology Postgraduate</div>
          </div>

        </div>

      </div>
    </section>
  );
};
