# FilmyFly Astro Frontend

Modern, SEO-optimized frontend for FilmyFly built with Astro and Static Site Generation (SSG).

## Features

- ✨ **Static Site Generation (SSG)** - Pre-rendered pages for instant loads
- 🚀 **Extreme SEO** - Comprehensive meta tags, Open Graph, Twitter Cards, JSON-LD
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **API Integration** - Connects to Express.js backend
- 🔍 **Search Functionality** - Full-text movie search
- 📂 **Category Pages** - Browse movies by category
- 🎬 **Movie Details** - Rich movie information pages

## Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro      # Main layout with SEO
├── components/
│   ├── Header.astro           # Site header
│   ├── Footer.astro           # Site footer
│   ├── MovieCard.astro        # Movie card component
│   └── Pagination.astro       # Pagination component
├── pages/
│   ├── index.astro            # Homepage
│   ├── [slug].astro           # Movie detail (dynamic)
│   ├── search.astro           # Search results
│   ├── category/[id]/[slug].astro  # Category pages
│   └── page/[slug].astro      # Static pages
├── lib/
│   ├── api.ts                 # API client
│   └── seo.ts                 # SEO helpers
└── styles/
    └── global.css             # Global styles
```

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   Copy `.env.example` to `.env` and update:
   ```env
   PUBLIC_API_URL=http://localhost:4000/api
   PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Start backend API:**
   ```bash
   cd ../old_filmyfly
   npm run dev
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000`

## Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment

### Option 1: Static Hosting (Recommended)

Deploy to Vercel, Netlify, or Cloudflare Pages:

1. Build the project: `npm run build`
2. Deploy the `dist/` folder
3. Set environment variables:
   - `PUBLIC_API_URL=https://filmyflyhd.space/api`
   - `PUBLIC_SITE_URL=https://filmyfly.work`

### Option 2: Same Server with Nginx

Deploy on the same GCP server:

1. Build: `npm run build`
2. Copy `dist/` to `/var/www/filmyfly-frontend`
3. Configure Nginx to serve static files
4. Set up reverse proxy for `/api/*` to backend

## API Integration

The frontend connects to the Express.js backend API at `/api/*`:

- `/api/home` - Homepage data
- `/api/movies/:slug` - Movie details
- `/api/categories/:slug` - Category movies
- `/api/search` - Search movies
- `/api/settings` - Public settings

## SEO Features

✅ Dynamic meta tags (title, description, keywords)  
✅ Open Graph tags for social sharing  
✅ Twitter Card metadata  
✅ Structured data (JSON-LD) for movies  
✅ Automatic sitemap generation  
✅ Canonical URLs  
✅ Google Analytics integration  
✅ Mobile-optimized

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **@astrojs/sitemap** - Automatic sitemap
- **CSS** - Vanilla CSS (migrated from EJS)

## License

ISC
