// The site language is chosen at build time with NEXT_PUBLIC_SITE_LANG ("en" by default, or "fr").
// Edit en.ts for the English site and fr.ts for the French site.
import { en } from "./en";
import { fr } from "./fr";

const content = process.env.NEXT_PUBLIC_SITE_LANG === "fr" ? fr : en;

// Link to the other language version, shown in the navigation when set.
export const altSiteUrl = process.env.NEXT_PUBLIC_ALT_SITE_URL ?? "";

export const { profile, about, experiences, projects, skills, education, leadership, interests, languages, ui } = content;
