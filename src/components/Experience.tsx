import React, { useState } from 'react';
import { Microscope, ClipboardCheck, ShieldCheck, CheckCircle2, Clock, Sparkles, ChevronRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState<number>(0);

  const workflowSteps = [
    {
      title: "Protocol Review & Preparation",
      summary: "Thorough verification of standard operating methodology before commencing any laboratory sequence.",
      focus: "Maintaining strict protocol discipline and zero-error readiness"
    },
    {
      title: "Sample & Workflow Support",
      summary: "Systematic handling of biological samples and laboratory workflows to ensure procedural integrity.",
      focus: "Sample tracking, cleanliness, and synchronized lab assistance"
    },
    {
      title: "Scientific Execution & Precision",
      summary: "Meticulous execution of scientific procedures while maintaining continuous accuracy.",
      focus: "Observational precision, temperature/condition stability, and accuracy"
    },
    {
      title: "Documentation & Clean Organization",
      summary: "Comprehensive record keeping, cataloging observations, and ensuring workstation hygiene.",
      focus: "Accurate logging, traceability, and laboratory order"
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#09111F]/90 border-t border-[#162338]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-teal-400 uppercase mb-3">
            <span>03</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Hands-on Laboratory Background</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            Professional Laboratory Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Four cumulative years of rigorous laboratory immersion across methodology procedures and technical laboratory operations.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {EXPERIENCE_DATA.map((exp) => {
            const isMethodology = exp.id === 'methodology-lab';

            return (
              <div
                key={exp.id}
                className="p-7 sm:p-8 rounded-2xl bg-[#0F1B2E] border border-[#1E2E48] hover:border-teal-500/40 transition-all shadow-xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Ambient corner light */}
                <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl pointer-events-none ${
                  isMethodology ? 'bg-teal-500/10' : 'bg-cyan-500/10'
                }`} />

                <div>
                  {/* Card Header & Tenure */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#1E2E48]">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${
                        isMethodology
                          ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                          : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      }`}>
                        {isMethodology ? <Microscope className="w-5 h-5" /> : <ClipboardCheck className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-400">{exp.category}</div>
                        <h3
                          className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {exp.role}
                        </h3>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Experience</div>
                      <div className="text-xl font-mono font-bold text-teal-300 tabular-nums">
                        {exp.periodYears}
                      </div>
                    </div>
                  </div>

                  {/* Overview Paragraph */}
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {exp.overview}
                  </p>

                  {/* Core Responsibilities Provided in Prompt */}
                  <div className="mt-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      Key Responsibilities & Scope
                    </div>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isMethodology ? 'text-teal-400' : 'text-cyan-400'
                          }`} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Core Competencies (Unboxed text with separators per skill) */}
                <div className="mt-8 pt-5 border-t border-[#1E2E48]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Focus Competencies
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                    {exp.competencies.map((comp, cIdx) => (
                      <React.Fragment key={comp}>
                        <span className="hover:text-teal-300 transition-colors">{comp}</span>
                        {cIdx < exp.competencies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Methodology & Quality Discipline Module */}
        <div className="p-7 sm:p-8 rounded-2xl bg-[#0C1626] border border-[#1E2E48] shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-teal-400">
                Operational Discipline
              </div>
              <h3 className="text-xl font-bold text-white mt-1" style={{ fontFamily: 'var(--font-display)' }}>
                Laboratory Standard Operating Principles
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Interactive 4-Step Methodology Workflow
            </div>
          </div>

          {/* Interactive Steps Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {workflowSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedWorkflowStep(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  selectedWorkflowStep === idx
                    ? 'bg-teal-500/15 border-teal-500/50 shadow-md shadow-teal-950/40 text-white'
                    : 'bg-[#101E33] border-[#1C2C46] text-slate-400 hover:text-slate-200 hover:bg-[#14243D]'
                }`}
              >
                <div className="text-[10px] font-mono tracking-wider uppercase text-teal-400">
                  Step 0{idx + 1}
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1 line-clamp-1">
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Content */}
          <div className="p-5 rounded-xl bg-[#091220] border border-[#1A2A42] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="text-xs font-mono text-teal-400">
                Active Protocol Phase: {workflowSteps[selectedWorkflowStep].title}
              </div>
              <p className="text-sm text-slate-300">
                {workflowSteps[selectedWorkflowStep].summary}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#0F1B2E] border border-teal-500/30 shrink-0 text-right md:text-left">
              <div className="text-[10px] uppercase font-mono text-slate-400">Operational Priority</div>
              <div className="text-xs font-medium text-teal-200 mt-0.5">
                {workflowSteps[selectedWorkflowStep].focus}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
