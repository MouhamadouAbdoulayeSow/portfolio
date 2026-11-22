# Mouhamadou Abdoulaye SOW – Portfolio

Personal portfolio built with **Next.js**, **TypeScript** and **Tailwind CSS**, deployed on **Vercel** in two languages from the same code.

## Run locally

```bash
npm install
npm run dev                              # English version, http://localhost:3000
NEXT_PUBLIC_SITE_LANG=fr npm run dev     # French version
```

## Update the content

| File | Content |
|---|---|
| `src/data/en.ts` | English text: profile, experience, projects, skills, interface labels |
| `src/data/fr.ts` | French text, same structure |
| `cv/CV_Mouhamadou_Abdoulaye_SOW.html` | English CV, rendered to `public/CV_Mouhamadou_Abdoulaye_SOW.pdf` |
| `cv/CV_Mouhamadou_Abdoulaye_SOW_FR.html` | French CV, rendered to `public/CV_Mouhamadou_Abdoulaye_SOW_FR.pdf` |

Render a CV to PDF:

```bash
google-chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf="$PWD/public/CV_Mouhamadou_Abdoulaye_SOW_FR.pdf" \
  "file://$PWD/cv/CV_Mouhamadou_Abdoulaye_SOW_FR.html"
```

## Deployment: two Vercel projects, one repository

| Vercel project | Environment variables |
|---|---|
| English site | `NEXT_PUBLIC_ALT_SITE_URL` = URL of the French site |
| French site | `NEXT_PUBLIC_SITE_LANG` = `fr`, `NEXT_PUBLIC_ALT_SITE_URL` = URL of the English site |

`NEXT_PUBLIC_ALT_SITE_URL` adds an FR / EN switch in the navigation.
Every push to `main` redeploys both sites.
