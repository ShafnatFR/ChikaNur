export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  highlights: string[];
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  duration: string;
  type: string; // 'PR & Leadership' | 'Creative & Art' | 'Events & Mentoring'
  description: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  category: 'Core' | 'Creative' | 'Technical' | 'Soft';
  level: number; // 0-100 indicating confidence
}

export interface ArtworkMock {
  title: string;
  category: string;
  description: string;
  imageFallback: string; // fallback color or category
}
