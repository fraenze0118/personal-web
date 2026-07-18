export interface LocaleText {
  zh: string;
  en: string;
}

export interface Profile {
  name: string;
  nameEn: string;
  role: LocaleText;
  bio: LocaleText;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "embedded" | "tools" | "other";
}

export interface Project {
  title: LocaleText;
  description: LocaleText;
  detail?: LocaleText;
  features?: LocaleText[];
  videoUrl?: string;
  images?: string[];
  techs: string[];
  link?: string;
  github?: string;
}

export interface TimelineItem {
  period: string;
  title: LocaleText;
  subtitle: LocaleText;
  description?: LocaleText;
  type: "work" | "education";
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "email";
}
