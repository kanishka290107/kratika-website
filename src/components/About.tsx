import React, { useState } from 'react';
import { Microscope, Activity, ShieldCheck, CheckCircle2, Calendar, Sparkles, BookOpen, HeartPulse } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'science' | 'athlete'>('science');

  return (
    <section id="about" className="py-24 relative bg-[#09111F]/90 border-t border-[#162338]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-teal-400 uppercase mb-3">
            <span>01</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>About Kratika Dubey</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            Where Biological Precision Meets Athletic Tenacity
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A harmonious integration of academic biotechnology scholarship, rigorous laboratory methodology, and competitive football leadership.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: About Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1B2E] border border-[#1E2E48] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Academic & Practical Journey
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  {PERSONAL_INFO.aboutText1}
                </p>
                <p>
                  {PERSONAL_INFO.aboutText2}
                </p>
              </div>

              {/* Bio Fact Matrix */}
              <div className="mt-8 pt-6 border-t border-[#1E2E48] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#16253C] text-teal-400 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase font-mono tracking-wider">Date of Birth</div>
                    <div className="text-white font-medium mt-0.5">{PERSONAL_INFO.dob}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#16253C] text-emerald-400 shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase font-mono tracking-wider">Academic Foundation</div>
                    <div className="text-white font-medium mt-0.5">Biotechnology & Zoology</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#16253C] text-cyan-400 shrink-0">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase font-mono tracking-wider">Laboratory Tenures</div>
                    <div className="text-white font-medium mt-0.5">Methodology Lab & Lab Technician</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#16253C] text-amber-400 shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase font-mono tracking-wider">Athletic Standing</div>
                    <div className="text-white font-medium mt-0.5">Professional Footballer</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#0D1829] border border-[#1A2A42] text-center">
                <div className="text-teal-400 font-mono text-base font-bold">Accuracy</div>
                <div className="text-xs text-slate-400 mt-1">Experimental rigor in the lab</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0D1829] border border-[#1A2A42] text-center">
                <div className="text-emerald-400 font-mono text-base font-bold">Discipline</div>
                <div className="text-xs text-slate-400 mt-1">Daily athletic & study habit</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0D1829] border border-[#1A2A42] text-center">
                <div className="text-cyan-400 font-mono text-base font-bold">Teamwork</div>
                <div className="text-xs text-slate-400 mt-1">Seamless workflow alignment</div>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Scientific & Athletic Interactive Visual */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Toggle for Dual Perspective */}
            <div className="p-1.5 bg-[#0E1A2C] border border-[#1E2E48] rounded-xl flex items-center gap-1">
              <button
                onClick={() => setActiveTab('science')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'science'
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Microscope className="w-3.5 h-3.5" />
                <span>The Laboratory Mind</span>
              </button>
              <button
                onClick={() => setActiveTab('athlete')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'athlete'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>The Athletic Driver</span>
              </button>
            </div>

            {/* Display Card Based on Active Tab */}
            <div className="p-6 rounded-2xl bg-[#0F1B2E] border border-[#1E2E48] shadow-xl relative min-h-[380px] flex flex-col justify-between">
              
              {activeTab === 'science' ? (
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">Methodology & Zoology</span>
                    <span className="text-xs text-slate-500 font-mono">2+2 Years Field Lab Exp</span>
                  </div>

                  {/* Scientific SVG Schematic Animation */}
                  <div className="relative h-44 rounded-xl bg-[#091220] border border-[#1A2A42] flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full text-teal-500/40" viewBox="0 0 300 150" fill="none">
                      {/* Stylized DNA Strands */}
                      <path
                        d="M 20,40 Q 75,90 150,40 T 280,40"
                        stroke="rgba(20, 184, 166, 0.7)"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <path
                        d="M 20,90 Q 75,40 150,90 T 280,90"
                        stroke="rgba(6, 182, 212, 0.7)"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      {/* Base pair connectors */}
                      {[40, 75, 110, 150, 190, 225, 260].map((x, i) => (
                        <g key={i}>
                          <line
                            x1={x}
                            y1={i % 2 === 0 ? 52 : 78}
                            x2={x}
                            y2={i % 2 === 0 ? 78 : 52}
                            stroke="rgba(20, 184, 166, 0.5)"
                            strokeWidth="1.5"
                            strokeDasharray="2,2"
                          />
                          <circle cx={x} cy={i % 2 === 0 ? 52 : 78} r="3" fill="#14B8A6" />
                          <circle cx={x} cy={i % 2 === 0 ? 78 : 52} r="3" fill="#06B6D4" />
                        </g>
                      ))}
                    </svg>

                    <div className="absolute inset-x-0 bottom-2 text-center">
                      <span className="text-[11px] font-mono text-teal-300 bg-[#091220]/80 px-2 py-0.5 rounded border border-teal-500/30">
                        Cellular Structure & Methodology Alignment
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>Rigorous adherence to experimental protocols & methodology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>Extensive knowledge in zoological morphology and physiology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>Systematic sample handling, tracking, and workstation discipline</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Athletic Regimen</span>
                    <span className="text-xs text-slate-500 font-mono">Professional Footballer</span>
                  </div>

                  {/* Athletic Football Field Schematic Animation */}
                  <div className="relative h-44 rounded-xl bg-[#071714] border border-emerald-900/40 flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full text-emerald-500/40" viewBox="0 0 300 150" fill="none">
                      {/* Football Pitch Lines */}
                      <rect x="25" y="15" width="250" height="120" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1.5" />
                      <line x1="150" y1="15" x2="150" y2="135" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1.5" />
                      <circle cx="150" cy="75" r="28" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1.5" />
                      <circle cx="150" cy="75" r="2.5" fill="#10B981" />
                      
                      {/* Penalty Boxes */}
                      <rect x="25" y="42" width="38" height="66" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.2" />
                      <rect x="237" y="42" width="38" height="66" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.2" />

                      {/* Tactical Vector Motion */}
                      <path d="M 60,75 C 90,40 130,50 170,85 S 220,70 240,75" stroke="#34D399" strokeWidth="2" strokeDasharray="4,4" />
                      <circle cx="240" cy="75" r="4" fill="#34D399" />
                    </svg>

                    <div className="absolute inset-x-0 bottom-2 text-center">
                      <span className="text-[11px] font-mono text-emerald-300 bg-[#071714]/80 px-2 py-0.5 rounded border border-emerald-500/30">
                        Tactical Awareness & Squad Coordination
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>High physical conditioning, endurance, and on-pitch discipline</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Dynamic communication and synchronization under match pressure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Natural athletic versatility across multiple sporting formats</span>
                    </li>
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-[#1E2E48] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Core Dual Identity</span>
                <span className="text-teal-400">Science + Athletics</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
