import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Beyond the Lab', href: '#beyond-the-lab' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#070D18]/90 backdrop-blur-md border-b border-[#1E2E48]/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element brand wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-teal-300 transition-colors whitespace-nowrap"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Kratika Dubey
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 hover:text-teal-300 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCV}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-[#131F33] hover:bg-[#1C2C47] border border-[#1E2E48] rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap"
              aria-label="View Resume Summary"
            >
              <FileText className="w-3.5 h-3.5 text-teal-400" />
              <span>View CV</span>
            </button>
            <button
              onClick={onOpenContact}
              className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-md transition-colors shadow-sm shadow-teal-500/20 flex items-center gap-1.5 whitespace-nowrap"
              aria-label="Get in touch"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-md bg-[#131F33] border border-[#1E2E48]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1322] border-b border-[#1E2E48] px-4 pt-3 pb-5 space-y-3 mt-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-[#131F33] hover:text-teal-300 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#1E2E48] flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="flex-1 py-2 text-xs font-semibold text-slate-200 bg-[#131F33] border border-[#1E2E48] rounded-md flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-teal-400" />
              <span>View CV</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-md flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
