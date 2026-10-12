export interface EducationItem {
  id: string;
  degree: string;
  institutionOrBoard: string;
  period: string;
  metric: string;
  metricLabel: string;
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  category: string;
  duration: string;
  periodYears: string;
  overview: string;
  responsibilities: string[];
  competencies: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'scientific' | 'professional' | 'digital';
  categoryLabel: string;
  description: string;
  application: string;
}

export const PERSONAL_INFO = {
  name: "Kratika Dubey",
  dob: "22 May 2003",
  title: "M.Sc. Biotechnology Student | Laboratory Professional | Professional Footballer",
  shortIntro: "I am a passionate Biotechnology postgraduate student with hands-on laboratory experience and a strong academic foundation in Zoology. With 2 years of experience in a methodology laboratory and as a lab technician, I combine scientific knowledge, practical laboratory skills, communication, discipline and teamwork. Beyond science, I am a professional footballer and an all-round sports enthusiast.",
  aboutText1: "I am Kratika Dubey, currently pursuing my Master of Science in Biotechnology. My academic journey has given me a strong foundation in biological sciences, particularly Zoology and Biotechnology. I also have practical experience working in a methodology laboratory and as a lab technician.",
  aboutText2: "I believe that professional growth comes from combining knowledge with practical experience. My laboratory background has helped me develop precision, responsibility, time management and problem-solving abilities, while my experience in football has strengthened my discipline, teamwork, communication and leadership qualities.",
  phone: "9412631518",
  displayPhone: "+91 94126 31518",
  academicFoundation: "Strong academic foundation in Zoology & Biotechnology",
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "msc-biotech",
    degree: "Master of Science (M.Sc.) in Biotechnology",
    institutionOrBoard: "Postgraduate Academic Program",
    period: "2026 — Present",
    metric: "Enrolled",
    metricLabel: "Status",
    description: "Currently pursuing Master's degree in Biotechnology, advancing knowledge in molecular and cellular biological disciplines.",
    highlights: [
      "Currently pursuing Master's degree in Biotechnology",
      "Advanced focus on modern biotechnological applications",
      "Reinforcing experimental methodology and biological analysis",
      "Deep integration of theoretical science with practical lab discipline"
    ]
  },
  {
    id: "zoology-foundation",
    degree: "Biological Sciences & Zoology Foundation",
    institutionOrBoard: "Undergraduate Academic Background",
    period: "Pre-Master's",
    metric: "Specialized",
    metricLabel: "Academic Core",
    description: "Strong academic background in Zoology, offering extensive comprehension of organismal physiology, classification, and biological systems.",
    highlights: [
      "Strong academic foundation in Zoology",
      "Comprehensive study of animal biology and cellular mechanisms",
      "Solid preparatory ground for modern biotechnology specialization",
      "Analytical observation of biological specimens and structures"
    ]
  },
  {
    id: "class-12",
    degree: "Class 12th Senior Secondary",
    institutionOrBoard: "Senior Secondary Board Examination",
    period: "Completed",
    metric: "97th",
    metricLabel: "Percentile",
    description: "Outstanding academic achievement demonstrating academic discipline, analytical excellence, and scientific rigor.",
    highlights: [
      "Achieved 97 percentile in Class 12th examinations",
      "Strong concentration in scientific disciplines",
      "Demonstrated academic excellence and rigorous study habits"
    ]
  },
  {
    id: "class-10",
    degree: "Class 10th Secondary School",
    institutionOrBoard: "Secondary Education Board",
    period: "Completed",
    metric: "80th",
    metricLabel: "Percentile",
    description: "Solid academic grounding across core general and science subjects.",
    highlights: [
      "Achieved 80 percentile in Class 10th examinations",
      "Consistent academic record in foundational sciences and mathematics",
      "Early engagement in athletic pursuits alongside academic studies"
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "methodology-lab",
    role: "Methodology Laboratory Professional",
    category: "Methodology Laboratory",
    duration: "2 Years of Experience",
    periodYears: "2 Years",
    overview: "Comprehensive hands-on experience in methodology laboratory operations, focusing on systematic scientific workflows, experimental integrity, and protocol rigor.",
    responsibilities: [
      "Practical laboratory exposure across core methodological setups",
      "Implementation of standardized laboratory methodology",
      "Execution and monitoring of structured scientific procedures",
      "Maintaining high accuracy and precision across experimental steps",
      "Handling essential laboratory responsibilities and workstation oversight",
      "Diligent adherence to all laboratory protocols and safety guidelines"
    ],
    competencies: [
      "Laboratory Methodology",
      "Protocol Compliance",
      "Accuracy & Precision",
      "Scientific Procedures",
      "Workstation Responsibility"
    ]
  },
  {
    id: "lab-technician",
    role: "Lab Technician",
    category: "Laboratory Technical Support",
    duration: "2 Years of Experience",
    periodYears: "2 Years",
    overview: "Active operational support within the laboratory setting, facilitating seamless sample workflow, procedure execution, and rigorous documentation.",
    responsibilities: [
      "Providing continuous laboratory assistance during complex procedures",
      "Facilitating smooth sample handling and lab workflow support",
      "Maintaining laboratory discipline, cleanliness, and orderliness",
      "Precise documentation, cataloging, and record organization",
      "Supporting laboratory procedures and technical preparations",
      "Exercising sharp attention to detail across every operational phase"
    ],
    competencies: [
      "Sample Workflow Support",
      "Technical Assistance",
      "Documentation & Organization",
      "Laboratory Discipline",
      "Attention to Detail"
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Scientific Skills
  {
    id: "biotech",
    name: "Biotechnology",
    category: "scientific",
    categoryLabel: "Scientific Skills",
    description: "Postgraduate theoretical and applied knowledge of biotechnological principles and biological systems.",
    application: "Advanced biological analysis & academic research"
  },
  {
    id: "zoology",
    name: "Zoology",
    category: "scientific",
    categoryLabel: "Scientific Skills",
    description: "Strong academic foundation in Zoology, organismal biology, and comparative biological studies.",
    application: "Specimen understanding & physiological context"
  },
  {
    id: "lab-expertise",
    name: "Laboratory Expertise",
    category: "scientific",
    categoryLabel: "Scientific Skills",
    description: "Practical handling of laboratory environments, workstation oversight, and quality standards.",
    application: "Daily lab operations & standard maintenance"
  },
  {
    id: "methodology-exp",
    name: "Methodology Laboratory Experience",
    category: "scientific",
    categoryLabel: "Scientific Skills",
    description: "2 years of structured methodology laboratory experience adhering to strict experimental procedures.",
    application: "Execution of standardized scientific methodology"
  },
  {
    id: "lab-tech-skills",
    name: "Lab Technician Skills",
    category: "scientific",
    categoryLabel: "Scientific Skills",
    description: "2 years of technician experience in workflow support, bench preparation, and systematic tracking.",
    application: "Sample support, bench assistance & inventory order"
  },
  {
    id: "lab-techniques",
    name: "Laboratory Techniques",
    category: "scientific",
    categoryLabel: "Scientific Skills",
    description: "Proficiency in maintaining precision, handling materials methodically, and following standardized procedures.",
    application: "Precision handling & protocol replication"
  },

  // Professional Skills
  {
    id: "communication",
    name: "Communication Skills",
    category: "professional",
    categoryLabel: "Professional Skills",
    description: "Clear verbal articulation and technical reporting honed both in the lab and as an on-field athletic leader.",
    application: "Inter-departmental coordination & team briefings"
  },
  {
    id: "time-management",
    name: "Time Management",
    category: "professional",
    categoryLabel: "Professional Skills",
    description: "Balancing demanding M.Sc. academics, 2-year laboratory tenures, and competitive sports routines.",
    application: "Time-sensitive lab procedures & high productivity"
  },
  {
    id: "active-listening",
    name: "Active Listening",
    category: "professional",
    categoryLabel: "Professional Skills",
    description: "Keen attentiveness to protocol instructions, supervisor guidelines, and teammate call-outs.",
    application: "Flawless protocol execution & responsive teamwork"
  },
  {
    id: "teamwork",
    name: "Teamwork",
    category: "professional",
    categoryLabel: "Professional Skills",
    description: "Seamless collaborative capacity derived from 2 years lab workflow support and competitive football squads.",
    application: "Synchronized lab shifts & collaborative research"
  },
  {
    id: "discipline",
    name: "Discipline & Dedication",
    category: "professional",
    categoryLabel: "Professional Skills",
    description: "Unwavering commitment to accuracy, safety protocols, and daily physical and academic training.",
    application: "Consistent lab standards & unwavering focus"
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "professional",
    categoryLabel: "Professional Skills",
    description: "Analytical mindset capable of troubleshooting anomalies in procedure and adapting in fast-paced scenarios.",
    application: "Process troubleshooting & swift decision-making"
  },
  {
    id: "adaptability",
    name: "Adaptability",
    category: "professional",
    categoryLabel: "Professional Skills",
    description: "Agility in shifting between meticulous laboratory precision and dynamic, fast-evolving athletic environments.",
    application: "Thriving across diverse working conditions"
  },

  // Digital Skills
  {
    id: "basic-computer",
    name: "Basic Computer Skills",
    category: "digital",
    categoryLabel: "Digital Skills",
    description: "Proficiency in digital documentation, data entry, report compilation, and computational record-keeping.",
    application: "Lab log maintenance & digital reporting"
  },
  {
    id: "ai-skills",
    name: "AI Skills",
    category: "digital",
    categoryLabel: "Digital Skills",
    description: "Familiarity with contemporary artificial intelligence tools for accelerating research workflows and information synthesis.",
    application: "Scientific literature search & workflow acceleration"
  }
];

export const ATHLETIC_PILLARS = [
  {
    title: "Professional Footballer",
    metric: "Competitive",
    description: "Trained and competing at a professional standard, combining tactical awareness, high agility, and physical resilience.",
    icon: "trophy"
  },
  {
    title: "Multi-Sport Capability",
    metric: "All-Rounder",
    description: "Strong interest, natural athletic aptitude, and active participation across multiple sports disciplines.",
    icon: "activity"
  },
  {
    title: "On-Field Leadership",
    metric: "Team-First",
    description: "Leading through communication, tactical coordination, and motivating team members during intense competitive moments.",
    icon: "users"
  },
  {
    title: "Discipline & Dedication",
    metric: "Core Habit",
    description: "Applying the athletic regimen of daily training, conditioning, and mental resilience directly to academic and laboratory goals.",
    icon: "shield"
  }
];

export const SYNERGY_POINTS = [
  {
    labSide: "Methodological Precision",
    sportSide: "Tactical Execution",
    description: "Strict adherence to lab protocols mirrors the exact positional discipline required on the football pitch."
  },
  {
    labSide: "Sample Workflow Support",
    sportSide: "Squad Synchronization",
    description: "Supporting technicians and researchers aligns with passing rhythm and team-first playmaking in competitive sport."
  },
  {
    labSide: "Calm Problem-Solving",
    sportSide: "Composure Under Pressure",
    description: "Handling unexpected assay variables requires the same poised mindset as making split-second decisions during a match."
  },
  {
    labSide: "Punctual Protocol Timing",
    sportSide: "Conditioning & Stamina",
    description: "Mastery of time-sensitive reagents mirrors the sustained energy management over 90 minutes of high-intensity play."
  }
];
