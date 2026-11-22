# Mouhamadou Abdoulaye SOW – Portfolio

Personal portfolio built with **Next.js**, **TypeScript** and **Tailwind CSS**, deployed on **Vercel**, in English at `/en` and in French at `/fr`.

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000/en and http://localhost:3000/fr
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

## Languages and deployment

- One Vercel project serves both languages: `/en` and `/fr`.
- `/` redirects each visitor to `/fr` or `/en` based on the browser language, see `src/middleware.ts`.
- The FR / EN button in the navigation switches between the two versions.
- Every push to `main` redeploys the site.
