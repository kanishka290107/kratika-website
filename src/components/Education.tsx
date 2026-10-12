import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#070D18] border-t border-[#162338]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-teal-400 uppercase mb-3">
            <span>02</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Academic Milestones</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            Education & Academic Foundation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A continuous progression of scholarly achievement, anchored by advanced biotechnology studies and a deep grounding in zoological sciences.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-teal-500/30 space-y-12 ml-2 sm:ml-4">
          
          {EDUCATION_DATA.map((item, index) => {
            const isCurrent = item.id === 'msc-biotech';
            const isZoology = item.id === 'zoology-foundation';

            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline node marker */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isCurrent
                    ? 'border-teal-400 bg-teal-950 text-teal-300 ring-4 ring-teal-500/20'
                    : isZoology
                    ? 'border-emerald-400 bg-emerald-950 text-emerald-300 ring-4 ring-emerald-500/20'
                    : 'border-slate-600 bg-[#0F1B2E] text-slate-400 group-hover:border-teal-400'
                }`}>
                  {isCurrent ? (
                    <GraduationCap className="w-3 h-3" />
                  ) : isZoology ? (
                    <BookOpen className="w-3 h-3" />
                  ) : (
                    <Award className="w-3 h-3" />
                  )}
                </div>

                {/* Card Container */}
                <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
                  isCurrent
                    ? 'bg-gradient-to-br from-[#0F2036] to-[#0A1627] border-teal-500/40 shadow-xl shadow-teal-950/40'
                    : isZoology
                    ? 'bg-gradient-to-br from-[#0E2428] to-[#0A181C] border-emerald-500/40 shadow-xl shadow-emerald-950/30'
                    : 'bg-[#0E1A2C] border-[#1E2E48] hover:border-slate-600 shadow-md'
                }`}>
                  
                  {/* Card Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1E2E48]/80">
                    <div>
                      {/* Quiet unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                        <span className="text-teal-400 font-semibold">{item.period}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span>{item.institutionOrBoard}</span>
                      </div>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {item.degree}
                      </h3>
                    </div>

                    {/* Metric Display */}
                    <div className="sm:text-right shrink-0">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {item.metricLabel}
                      </div>
                      <div className={`text-2xl font-mono font-bold tabular-nums ${
                        item.metric.includes('97') ? 'text-emerald-300' : 'text-teal-300'
                      }`}>
                        {item.metric}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          isCurrent ? 'text-teal-400' : isZoology ? 'text-emerald-400' : 'text-slate-400'
                        }`} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Special Zoology highlight badge if zoology card */}
                  {isZoology && (
                    <div className="mt-5 pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs text-emerald-300">
                      <span className="font-semibold flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                        Academic Core Distinction
                      </span>
                      <span className="font-mono text-[11px] text-emerald-400/80">Strong Foundation in Zoology</span>
                    </div>
                  )}

                  {/* Status indicator for M.Sc. */}
                  {isCurrent && (
                    <div className="mt-5 pt-4 border-t border-teal-500/20 flex items-center justify-between text-xs text-teal-300">
                      <span className="font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                        Active Master's Candidate
                      </span>
                      <span className="font-mono text-[11px] text-teal-400/80">2026 — Present</span>
                    </div>
                  )}

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
