/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { SkillsDashboard } from './components/SkillsDashboard';
import { BeyondTheLab } from './components/BeyondTheLab';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070D18] text-slate-100 selection:bg-teal-500 selection:text-white">
      {/* Interactive molecular particles canvas */}
      <ParticleBackground />

      {/* Navigation Top Bar Contract */}
      <Navbar
        onOpenCV={() => setIsCVOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenContact={handleOpenContact} />
        <About />
        <Education />
        <Experience />
        <SkillsDashboard />
        <BeyondTheLab />
        <Contact onOpenCV={() => setIsCVOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenCV={() => setIsCVOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Curriculum Vitae / Profile Summary Modal */}
      <ResumeModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />
    </div>
  );
}
