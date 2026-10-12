import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Microscope, GraduationCap, Trophy, Phone } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, SKILLS_DATA, ATHLETIC_PILLARS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `
KRATIKA DUBEY - CURRICULUM VITAE
Title: M.Sc. Biotechnology Student | Laboratory Professional | Professional Footballer
Date of Birth: 22 May 2003
Phone: 9412631518

ACADEMIC RECORD:
- M.Sc. Biotechnology: 2026 — Present (Currently Pursuing)
- Academic Foundation: Strong background in Zoology
- Class 12th: 97 Percentile
- Class 10th: 80 Percentile

PROFESSIONAL EXPERIENCE:
1. Methodology Laboratory (2 Years)
   - Practical laboratory exposure & laboratory methodology
   - Execution of scientific procedures with high accuracy and precision
   - Following strict laboratory protocols and responsibilities

2. Lab Technician (2 Years)
   - Laboratory assistance & sample/lab workflow support
   - Maintaining laboratory discipline, order, and documentation
   - Supporting procedures with meticulous attention to detail

ATHLETIC ACHIEVEMENTS:
- Professional Footballer
- Multi-sport capability, all-rounder personality, leadership & teamwork

CORE SKILLS:
- Scientific: Biotechnology, Zoology, Laboratory Expertise, Methodology Laboratory Experience, Lab Technician Skills, Laboratory Techniques
- Professional: Communication, Time Management, Active Listening, Teamwork, Discipline & Dedication, Problem Solving, Adaptability
- Digital: Basic Computer Skills, AI Skills
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#0B1524] border border-teal-500/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Action Bar */}
        <div className="sticky top-0 z-10 bg-[#0E1A2C] border-b border-[#1E2E48] px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono text-teal-400 uppercase tracking-wider">Curriculum Vitae</div>
            <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Kratika Dubey — Profile Summary
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="p-2 text-xs text-slate-300 bg-[#16253C] hover:bg-[#1E314F] border border-[#213554] rounded-lg transition-colors flex items-center gap-1.5"
              title="Copy text summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 font-medium rounded-lg transition-colors flex items-center gap-1.5"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#16253C] transition-colors ml-1"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Body */}
        <div className="p-6 sm:p-8 space-y-8 text-slate-200">
          
          {/* Header Block */}
          <div className="border-b border-[#1E2E48] pb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-xs sm:text-sm text-teal-300 font-medium mt-1">
              {PERSONAL_INFO.title}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <span>DOB: {PERSONAL_INFO.dob}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Phone: +91 {PERSONAL_INFO.phone}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Status: Enrolled M.Sc. Candidate</span>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.shortIntro}
            </p>
          </div>

          {/* Education Block */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-400 mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Education</span>
            </div>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl bg-[#091220] border border-[#1A2A42]">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-white text-sm">{edu.degree}</div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">{edu.period} · {edu.institutionOrBoard}</div>
                    </div>
                    <div className="text-right font-mono text-xs text-teal-300 font-bold tabular-nums">
                      {edu.metric}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Block */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-400 mb-3">
              <Microscope className="w-4 h-4" />
              <span>Laboratory Experience</span>
            </div>
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-[#091220] border border-[#1A2A42]">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-white text-sm">{exp.role}</div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">{exp.category} · {exp.duration}</div>
                    </div>
                    <div className="text-right font-mono text-xs text-teal-300 font-bold tabular-nums">
                      {exp.periodYears}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">{exp.overview}</p>
                  <ul className="mt-3 space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sports Block */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
              <Trophy className="w-4 h-4" />
              <span>Sports & Athletic Standing</span>
            </div>
            <div className="p-4 rounded-xl bg-[#091220] border border-emerald-900/30">
              <div className="font-semibold text-emerald-300 text-sm">Professional Footballer & Multi-Sport Athlete</div>
              <p className="text-xs text-slate-300 mt-2">
                Demonstrated competitive athletic ability, all-rounder personality, leadership, team coordination, discipline, and high-performance physical conditioning.
              </p>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-3">
              Core Competencies Inventory
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#091220] border border-[#1A2A42]">
                <div className="font-mono text-teal-300 text-[11px] uppercase mb-1.5">Scientific</div>
                <div className="space-y-1 text-slate-300">
                  <div>Biotechnology</div>
                  <div>Zoology</div>
                  <div>Laboratory Expertise</div>
                  <div>Methodology Experience</div>
                  <div>Lab Technician Skills</div>
                  <div>Laboratory Techniques</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#091220] border border-[#1A2A42]">
                <div className="font-mono text-emerald-300 text-[11px] uppercase mb-1.5">Professional</div>
                <div className="space-y-1 text-slate-300">
                  <div>Communication Skills</div>
                  <div>Time Management</div>
                  <div>Active Listening</div>
                  <div>Teamwork</div>
                  <div>Discipline & Dedication</div>
                  <div>Problem Solving</div>
                  <div>Adaptability</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#091220] border border-[#1A2A42]">
                <div className="font-mono text-cyan-300 text-[11px] uppercase mb-1.5">Digital</div>
                <div className="space-y-1 text-slate-300">
                  <div>Basic Computer Skills</div>
                  <div>AI Skills</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#0E1A2C] border-t border-[#1E2E48] px-6 py-3 flex items-center justify-between text-xs text-slate-400">
          <span>Official Candidate Profile</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#16253C] hover:bg-[#1E314F] text-slate-200 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
