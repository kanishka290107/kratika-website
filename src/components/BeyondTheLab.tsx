import React from 'react';
import { Trophy, Activity, Users, Shield, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { ATHLETIC_PILLARS, SYNERGY_POINTS } from '../data/portfolioData';

export const BeyondTheLab: React.FC = () => {
  return (
    <section id="beyond-the-lab" className="py-24 relative bg-[#09111F]/90 border-t border-[#162338]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-emerald-400 uppercase mb-3">
            <span>05</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Athletics & Character</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            Beyond the Lab: Professional Football & Sports
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A competitive athletic foundation that instills unwavering discipline, tactical leadership, teamwork, and peak physical conditioning.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ATHLETIC_PILLARS.map((pillar, idx) => {
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1A2C] border border-[#1E2E48] hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider">
                      {pillar.metric}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">0{idx + 1}</span>
                  </div>

                  <div className="p-3 w-fit rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4">
                    {idx === 0 && <Trophy className="w-5 h-5" />}
                    {idx === 1 && <Activity className="w-5 h-5" />}
                    {idx === 2 && <Users className="w-5 h-5" />}
                    {idx === 3 && <Shield className="w-5 h-5" />}
                  </div>

                  <h3
                    className="text-lg font-bold text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#1C2C46] flex items-center gap-1.5 text-[11px] text-emerald-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Active Discipline</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Laboratory & Pitch Synergy Matrix */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0D1C28] via-[#0A1624] to-[#08121C] border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle tactical pitch watermark line */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-400">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" />
              <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="2" />
              <rect x="20" y="20" width="160" height="160" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Cross-Domain Synergy
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mt-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                How Football Elevates Scientific Excellence
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                The qualities forged in competitive football directly reinforce scientific rigor in the laboratory environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SYNERGY_POINTS.map((syn, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-xl bg-[#081320]/80 border border-[#1B2F44] hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2 pb-2 border-b border-[#16273A]">
                    <span className="text-teal-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                      Lab: {syn.labSide}
                    </span>
                    <span className="text-emerald-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Sport: {syn.sportSide}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {syn.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote banner */}
            <div className="mt-8 pt-6 border-t border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="italic text-slate-300 max-w-xl">
                "Whether executing a delicate multi-step assay or orchestrating a defensive press, precision and synchrony are non-negotiable."
              </div>
              <div className="font-mono text-emerald-400 text-right shrink-0">
                — Kratika Dubey
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
