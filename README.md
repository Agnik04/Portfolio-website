# Portfolio Website

A modern, animated personal portfolio built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Where to add YOUR data

Almost everything lives in one file:

> `src/data/portfolio.ts`

Edit that file to change your name, role, tagline, about text, stats, skills,
projects, experience, email, and social links. The whole site updates from it.

- **Profile / hero:** `profile` object (name, role, tagline, email, socials, resume link)
- **About + stats:** `about` object
- **Skills:** `skills` array (grouped by category)
- **Projects:** `projects` array (add `image` URLs, `liveUrl`, `repoUrl`, and `featured: true`)
- **Experience:** `experience` array

## Theming

Colors are CSS variables in `src/index.css` (`:root` for light, `.dark` for dark).
The site defaults to dark mode (set on `<html class="dark">` in `index.html`).
Change the `--primary` / `--accent` hues to recolor the whole gradient system.

## Structure

```
src/
  components/   # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
  data/         # portfolio.ts  <-- your content
  index.css     # theme + global styles
  App.tsx       # page composition
```
