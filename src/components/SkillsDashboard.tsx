import React, { useState, useMemo } from 'react';
import { Search, Microscope, Briefcase, Cpu, CheckCircle2, Sparkles, Filter, X } from 'lucide-react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';

export const SkillsDashboard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'scientific' | 'professional' | 'digital'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Core Skills', count: SKILLS_DATA.length },
    { id: 'scientific', label: 'Scientific Skills', count: SKILLS_DATA.filter(s => s.category === 'scientific').length },
    { id: 'professional', label: 'Professional Skills', count: SKILLS_DATA.filter(s => s.category === 'professional').length },
    { id: 'digital', label: 'Digital Skills', count: SKILLS_DATA.filter(s => s.category === 'digital').length },
  ];

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.application.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative bg-[#070D18] border-t border-[#162338]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-teal-400 uppercase mb-3">
            <span>04</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Competencies & Toolset</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            Interactive Skills Dashboard
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A comprehensive matrix of laboratory expertise, professional communication and teamwork strengths, and modern digital fluencies.
          </p>
        </div>

        {/* Filter Bar & Search Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1E2E48]">
          
          {/* Functional Category Filter Segmented Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0E1A2C] border border-[#1E2E48] rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-teal-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-[#14233A]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  activeCategory === cat.id ? 'bg-slate-900/20 text-slate-900' : 'bg-[#192A44] text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search competencies..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-[#0E1A2C] border border-[#1E2E48] rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Skills Cards Grid */}
        {filteredSkills.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#0E1A2C] border border-[#1E2E48]">
            <Filter className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <div className="text-base font-semibold text-slate-300">No matching competencies found</div>
            <p className="text-xs text-slate-400 mt-1">Try adjusting your search keyword or selected category tab.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-1.5 text-xs text-teal-300 bg-teal-500/10 border border-teal-500/30 rounded-lg hover:bg-teal-500/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill) => {
              const isScientific = skill.category === 'scientific';
              const isProfessional = skill.category === 'professional';

              return (
                <div
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  className="group p-5 rounded-2xl bg-[#0E1A2C] border border-[#1E2E48] hover:border-teal-500/40 hover:bg-[#122137] transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Quiet unboxed kicker */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="font-mono text-[11px] text-teal-400">
                        {skill.categoryLabel}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        Inspect
                      </span>
                    </div>

                    {/* Skill Title */}
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg border ${
                        isScientific
                          ? 'bg-teal-500/10 border-teal-500/30 text-teal-300'
                          : isProfessional
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                          : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                      }`}>
                        {isScientific ? (
                          <Microscope className="w-4 h-4" />
                        ) : isProfessional ? (
                          <Briefcase className="w-4 h-4" />
                        ) : (
                          <Cpu className="w-4 h-4" />
                        )}
                      </div>
                      <h3
                        className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {skill.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Practical Application Line */}
                  <div className="mt-5 pt-3.5 border-t border-[#1C2C46] flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-mono">Application</span>
                    <span className="text-teal-300 font-medium truncate max-w-[190px]">
                      {skill.application}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Selected Skill Detail Modal */}
        {selectedSkill && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="bg-[#0E1A2C] border border-teal-500/40 rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-md bg-[#16253C]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-2">
                <span>{selectedSkill.categoryLabel}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Core Competency</span>
              </div>

              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                {selectedSkill.name}
              </h3>

              <div className="mt-4 p-4 rounded-xl bg-[#091220] border border-[#1A2A42] space-y-3">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Contextual Description</div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{selectedSkill.description}</p>
                </div>

                <div className="pt-2 border-t border-[#1A2A42]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-teal-400">Practical Manifestation</div>
                  <p className="text-xs text-slate-200 mt-1 font-medium">{selectedSkill.application}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
