export type Domain = "Software" | "Data" | "Cloud & DevOps" | "DevOps" | "Security" | "AI";

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  upcoming?: boolean;
  points: string[];
  stack: string[];
};

export type Project = {
  title: string;
  domains: Domain[];
  description: string;
  stack: string[];
  link?: string;
  inProgress?: boolean;
};

type SectionText = { kicker: string; title: string };

export type Content = {
  profile: {
    name: string;
    shortName: string;
    role: string;
    tagline: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    cv: string;
    focus: string[];
  };
  about: { paragraphs: string[]; stats: { value: string; label: string }[] };
  experiences: Experience[];
  projects: Project[];
  skills: { group: string; items: string[]; core?: string[] }[];
  education: { degree: string; school: string; location: string; period: string; details: string[] }[];
  leadership: { title: string; period: string; points: string[] }[];
  interests: string[];
  languages: { name: string; level: string }[];
  ui: {
    lang: "en" | "fr";
    meta: { title: string; description: string };
    nav: { about: string; experience: string; projects: string; skills: string; education: string; contact: string };
    switchLabel: string;
    hello: string;
    downloadCv: string;
    portraitAlt: string;
    sections: { about: SectionText; experience: SectionText; projects: SectionText; skills: SectionText; education: SectionText };
    upcoming: string;
    viewCode: string;
    inProgress: string;
    interestsTitle: string;
    languagesTitle: string;
    domains: Record<Domain, string>;
    contact: { kicker: string; title: string; text: string };
    footer: string;
  };
};

export const repo = (name: string) => `https://github.com/MouhamadouAbdoulayeSow/${name}`;
