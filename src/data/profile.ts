// Content for both languages. Edit en.ts for English and fr.ts for French.
import { en } from "./en";
import { fr } from "./fr";
import type { Content } from "./types";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export const getContent = (lang: Locale): Content => (lang === "fr" ? fr : en);
