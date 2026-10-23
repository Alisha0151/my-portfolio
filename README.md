# Alisha Fatima: Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide icons. No backend, no API keys.

## Run locally (macOS)
1. Install Node.js 18+ (https://nodejs.org) and check with `node -v`.
2. Unzip, then in Terminal: `cd portfolio`, then `code .` to open VS Code.
3. `npm install`
4. `npm run dev` and open the printed URL (usually http://localhost:5173).

Other commands: `npm run build` (typecheck + production build into `dist/`), `npm run preview`.

## Edit content
All text lives in `src/data/portfolio.ts`. Project visuals are in `src/sections/Projects.tsx`.

## Assets
- Portrait: `public/images/alisha-profile.jpg` (replace with your original photo, same filename)
- Resume: `public/resume/Alisha_Fatima_Resume.pdf` (replace to update the download)

## Deploy
Push to GitHub, then on https://vercel.com choose Add New, Project, import the repo. Vercel detects Vite
(build `npm run build`, output `dist`). Netlify works the same way.
