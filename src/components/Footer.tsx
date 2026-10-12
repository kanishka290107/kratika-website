import React from 'react';
import { ArrowUp, Phone, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCV: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050A14] border-t border-[#142033] py-14 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#142033]">
          
          <div className="space-y-2">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white hover:text-teal-300 transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Kratika Dubey
            </a>
            <p className="text-slate-400 text-xs max-w-md">
              M.Sc. Biotechnology Scholar · Methodology Laboratory Professional · Professional Footballer
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#about" className="hover:text-teal-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-teal-300 transition-colors">Experience</a>
            <a href="#education" className="hover:text-teal-300 transition-colors">Education</a>
            <a href="#skills" className="hover:text-teal-300 transition-colors">Skills</a>
            <a href="#beyond-the-lab" className="hover:text-teal-300 transition-colors">Beyond the Lab</a>
            <button onClick={onOpenCV} className="hover:text-teal-300 transition-colors">Curriculum Vitae</button>
            <button onClick={onOpenContact} className="hover:text-teal-300 transition-colors">Contact</button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Kratika Dubey. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono">Phone: +91 {PERSONAL_INFO.phone}</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-[#0E1A2C] border border-[#1A2A42] hover:text-white transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
