# Nur Auni: Portfolio

A personal portfolio site built with [Astro](https://astro.build). It's a single page that builds to plain static HTML, so it loads fast, works well for search engines, and needs almost no JavaScript.

## ✏️ Editing your content

**Everything you'll want to change is in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).**
That includes your bio, tagline, links, projects, skills and experience. Search the file for `TODO` to find what still needs your input.

| What | Where |
| --- | --- |
| Text, links, projects, skills, experience | `src/data/portfolio.ts` |
| Project screenshots | `public/projects/`, then update `image` in the data file |
| Resume | Put `resume.pdf` in `public/` and set `links.resume: '/resume.pdf'` |
| Your photo (optional) | Put `me.webp` in `public/` and set `profile.photo: '/me.webp'` |
| Colors and fonts | Variables at the top of `src/styles/global.css` |
| Social preview image | Run `npm run og` after changing your name or role |

**Image tips:** use screenshots around **1200×750** (a 16:10 ratio). Save them as `.webp` or `.jpg` under ~200 KB. [Squoosh](https://squoosh.app) is a free tool for compressing them.

## 🖥️ Run it locally

You need [Node.js](https://nodejs.org) **22.22 or newer**.

```bash
cd site
npm install      # first time only
npm run dev      # start the dev server at http://localhost:4321
```

Other commands:

```bash
npm run build    # build the production site into dist/
npm run preview  # preview the production build locally
npm run og       # regenerate og-image.png and the PNG favicons
```

## 🚀 Deploy free on Vercel

### 1. Put the code on GitHub
The simplest setup is to make the `site` folder its own repository:

```bash
cd site
git init
git add .
git commit -m "Initial portfolio"
```

Then on GitHub, click **New repository** and name it `portfolio` (or anything you like). Don't add a README. Then run:

```bash
git branch -M main
git remote add origin https://github.com/auneyyyy/portfolio.git
git push -u origin main
```

### 2. Import it into Vercel
1. Go to [vercel.com](https://vercel.com) and **sign up with GitHub**.
2. Click **Add New… → Project** and pick your `portfolio` repo.
3. Vercel detects **Astro** automatically. Leave the settings as they are:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. About a minute later you'll get a live URL like `https://portfolio-xxxx.vercel.app`. 🎉

> **Pushed the whole Flutter folder instead?** That's fine too. In step 2, open **Root Directory**, choose `site`, and then deploy.

### 3. Updating later
Edit `src/data/portfolio.ts`, then commit and push:

```bash
git add .
git commit -m "Update projects"
git push
```

Vercel rebuilds and redeploys automatically every time you push.

### Optional: custom domain
In Vercel, go to **Project → Settings → Domains** and add your domain. Then set the `site:` fallback in `astro.config.mjs` to the new domain, so link previews use the right URL.

## 📁 Project structure

```
site/
├─ src/
│  ├─ data/portfolio.ts    ← all your content
│  ├─ components/          ← Header, Hero, About, Projects, Skills, Experience, Contact, Footer
│  ├─ layouts/Base.astro   ← <head>: SEO, Open Graph, fonts, theme script
│  ├─ styles/global.css    ← colors, fonts, buttons (light + dark)
│  └─ pages/index.astro    ← puts the sections together
├─ public/                 ← favicon, og-image.png, project images, robots.txt
└─ scripts/make-og.mjs     ← generates the social preview image
```
