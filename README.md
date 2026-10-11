# MD Rahil — Portfolio v2

A polished, responsive, dark portfolio with four primary pages: Home, Projects, About, and Journal. The Journal includes search, category filters, featured writing, and individual article pages.

## Run locally

Requirements: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

- `app/page.tsx` — homepage content and featured projects
- `app/projects/page.tsx` — project list, categories, GitHub links
- `app/about/page.tsx` — biography, education, interests, toolkit
- `lib/posts.ts` — blog articles and content
- `components/Nav.tsx` — navigation and social profile link
- `components/Footer.tsx` — footer and contact email
- `app/globals.css` — colors, layout, responsiveness, animations and styling

## Notes

- Contact email is configured as `rahilalam0786s@gmail.com`. Confirm it is the address you want public before deploying.
- Verify project links and update project status as needed.
- The journal is local content; no database or CMS is required.
- Deploy on Vercel by importing the GitHub repository.


## Portfolio sections

- `/` — expanded homepage with featured projects and open-source highlights
- `/projects` — project directory
- `/opensource` — open-source projects and contribution links
- `/about` — profile and engineering interests
- `/blog` — searchable engineering journal

Run locally with `npm install` and `npm run dev`. The site uses Next.js, React, and lucide-react.
