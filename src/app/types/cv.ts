export type Link = { label: string; url: string };

export type SkillGroup = {
  name: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  start: string; // YYYY-MM or YYYY
  end?: string; // YYYY-MM or YYYY or "Present"
  highlights?: string[];
};

export type ProjectItem = {
  name: string;
  description?: string;
  tech?: string[];
  link?: string;
};

export type EducationItem = {
  school: string;
  degree?: string;
  start?: string;
  end?: string;
};

export type CVData = {
  basics: {
    name: string;
    tagline?: string;
    location?: string;
    email?: string;
    website?: string;
    links?: Link[];
  };
  skills?: SkillGroup[];
  experience?: ExperienceItem[];
  projects?: ProjectItem[];
  education?: EducationItem[];
};
