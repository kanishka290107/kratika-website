import React, { useState } from 'react';
import { Phone, Mail, Send, Copy, Check, FileText, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenCV: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCV }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070D18] border-t border-[#162338]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-teal-400 uppercase mb-3">
            <span>06</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Get in Touch</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            Connect with Kratika Dubey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Open to scientific research collaborations, laboratory technical opportunities, biotechnology discussions, and athletic inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone Card */}
            <div className="p-7 rounded-2xl bg-[#0E1A2C] border border-teal-500/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between text-xs font-mono text-teal-400 mb-3">
                <span>Direct Mobile Contact</span>
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              </div>

              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-wider">
                {PERSONAL_INFO.displayPhone}
              </div>

              <div className="mt-1 text-xs text-slate-400">
                Official contact line for laboratory & professional discussions.
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex-1 py-2.5 px-4 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Directly</span>
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="py-2.5 px-4 text-xs font-semibold text-slate-200 bg-[#16253C] hover:bg-[#1E314F] border border-[#213554] rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  aria-label="Copy phone number"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="mt-4 pt-4 border-t border-[#1C2C46] flex items-center justify-between text-xs">
                <span className="text-slate-400">Quick WhatsApp:</span>
                <a
                  href={`https://wa.me/91${PERSONAL_INFO.phone}?text=Hi%20Kratika,%20I%20viewed%20your%20Biotechnology%20and%20Laboratory%20portfolio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Quick CV Download / Inspect Card */}
            <div className="p-6 rounded-2xl bg-[#0E1A2C] border border-[#1E2E48] flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Curriculum Vitae</div>
                <div className="text-sm font-semibold text-white mt-0.5">Comprehensive Profile Sheet</div>
                <p className="text-xs text-slate-400 mt-1">Review verified academic background and 4-year laboratory record.</p>
              </div>
              <button
                onClick={onOpenCV}
                className="p-3 text-teal-300 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 rounded-xl transition-colors shrink-0 flex items-center gap-1.5 text-xs font-medium"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Inspect CV</span>
              </button>
            </div>

            {/* Bio Credentials Summary Box */}
            <div className="p-6 rounded-2xl bg-[#091220] border border-[#162338] text-xs text-slate-400 space-y-2">
              <div className="font-mono text-slate-300 uppercase tracking-wider text-[11px] mb-2">
                Candidate Summary
              </div>
              <div className="flex justify-between py-1 border-b border-[#142033]">
                <span>Full Name:</span>
                <span className="text-slate-200 font-medium">{PERSONAL_INFO.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#142033]">
                <span>Date of Birth:</span>
                <span className="text-slate-200 font-medium">{PERSONAL_INFO.dob}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#142033]">
                <span>Primary Discipline:</span>
                <span className="text-teal-300 font-medium">M.Sc. Biotechnology</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Sports:</span>
                <span className="text-emerald-300 font-medium">Professional Football</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0E1A2C] border border-[#1E2E48] shadow-xl">
              
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to reach out directly regarding research, laboratory workflows, or sports coordination.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-teal-500/10 border border-teal-500/30 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Transmitted Successfully</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out to Kratika Dubey. Your message has been received and will be followed up shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs text-teal-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Prof. / Full Name"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#091220] border border-[#1E2E48] rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="colleague@domain.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#091220] border border-[#1E2E48] rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g., Laboratory Methodology Inquiry / Research Collaboration"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#091220] border border-[#1E2E48] rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#091220] border border-[#1E2E48] rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-mono">
                      * Required fields
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 disabled:opacity-50 rounded-lg transition-all flex items-center gap-2 shadow-sm"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
