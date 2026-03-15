# Portfolio 2026 (Nuxt 3)

Personal portfolio built with Nuxt 3, TypeScript, and Tailwind CSS.

## Stack

- Nuxt 3
- Vue 3 + `<script setup>`
- TypeScript
- Tailwind CSS

## Run Locally

1. Install dependencies:
```bash
npm install
```
2. Start dev server:
```bash
npm run dev
```
3. Build for production:
```bash
npm run build
```

## Project Structure

```text
.
├── app.vue
├── nuxt.config.ts
├── assets/
│   └── styles/
│       └── tailwind.css
├── components/
│   ├── layout/      # App-level layout UI (navbar, footer, theme, scroll)
│   ├── cards/       # Reusable card components
│   ├── sections/    # Larger page sections (hero, etc.)
│   └── ui/          # Small reusable primitives (tags, section titles)
├── composables/
│   └── useTheme.ts
├── data/
│   ├── profile.ts   # Personal profile, experience, skills, education
│   ├── projects.ts  # Project list + project detail content
│   └── blog.ts      # Blog post data
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue
│   ├── about.vue
│   ├── contact.vue
│   ├── projects/
│   │   ├── index.vue
│   │   └── [slug].vue
│   └── blog/
│       ├── index.vue
│       └── [slug].vue
└── public/
    ├── cv.pdf
    ├── favicon.svg
    ├── og-image.svg
    └── images/
        └── projects/
```

## Nuxt Conventions Used

- `pages/` drives routes automatically (file-based routing).
- `layouts/default.vue` wraps all pages by default.
- `components/` is auto-imported.
- `composables/` is auto-imported for `useX` helpers.
- `public/` files are served as-is (for example `public/cv.pdf` => `/cv.pdf`).
- `assets/` files are processed by the build pipeline.

## Where To Edit Content

- Personal info, recruiter summary, skills, experience, education:
  - `data/profile.ts`
- Project cards and project detail pages:
  - `data/projects.ts`
- Blog listing and blog details:
  - `data/blog.ts`

## Common Updates

- Add a new project: append a new object in `data/projects.ts`.
- Update hero/about text: edit fields in `data/profile.ts`.
- Replace CV: overwrite `public/cv.pdf`.
- Replace project images: add files in `public/images/projects/` and update image paths in `data/projects.ts`.

## Notes

- This repo intentionally keeps things convention-based and simple.
- Avoid adding custom routing or plugin complexity unless needed.
