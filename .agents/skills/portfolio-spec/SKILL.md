---
   name: portfolio-spec
   description: Layout, content, and structure spec for the portfolio website. Use when building, modifying, or reviewing any portfolio section (nav, hero, projects, research, animations, deployment).
   ---
   


# Portfolio Site Spec — "The Curious Duck" (Celestial Atlas)

Hybrid model: fixed nav for speed (recruiters), scroll-depth story for anyone who stays (everyone else).
Deploy target: GitHub Pages.

---

## 1. Concept in one line

A constellation is a collection of separate stars connected into meaning.

Each project, publication, discovery, and question is a star.

Viewed individually, they are isolated points.
Viewed together, they reveal a pattern.

That pattern is The Curious Duck — discovered, not announced.

Tagline: **"Following questions wherever they lead."**

---

## 2. Global structure

```
┌─────────────────────────────────────────────┐
│  FIXED NAV (sticky, transparent → solid)     │  ← always available, never gated
│  Home · Projects · Research · Resume · Contact│
└─────────────────────────────────────────────┘
│
▼ (scroll)
┌─────────────────────────────────────────────┐
│  HERO — surface                              │
│  constellation, name, one-liner, CTA, current│
│  observation                                 │
└─────────────────────────────────────────────┘
▼
┌─────────────────────────────────────────────┐
│  LAYER 1 — quick facts strip                 │
└─────────────────────────────────────────────┘
▼
┌─────────────────────────────────────────────┐
│  LAYER 2 — curiosity (questions worth chasing)│
└─────────────────────────────────────────────┘
▼
┌─────────────────────────────────────────────┐
│  LAYER 3 — projects                          │
└─────────────────────────────────────────────┘
▼
┌─────────────────────────────────────────────┐
│  LAYER 4 — research / publication            │
└─────────────────────────────────────────────┘
▼
┌─────────────────────────────────────────────┐
│  LAYER 5 — what surprised me                 │
└─────────────────────────────────────────────┘
▼
┌─────────────────────────────────────────────┐
│  LAYER 6 — thoughts / curiosities             │
└─────────────────────────────────────────────┘
▼
┌─────────────────────────────────────────────┐
│  LAYER 7 — vision + contact (final region)   │
└─────────────────────────────────────────────┘
```

**Rule that makes this work:** nav is never hidden behind the story. `position: sticky; top: 0` from the first scroll pixel. Every nav link does a smooth-scroll to a section `id`. A recruiter lands, clicks "Projects" or "Resume", done in 3 seconds. Someone curious scrolls the whole thing.

---

## 3. Section-by-section detail

### 3.0 Fixed nav
- Transparent over hero, gets a solid `background` + subtle bottom border once `scrollY > window.innerHeight * 0.8`.
- Left: a small constellation/star glyph as wordmark — **not** a literal duck icon or mascot. Right: Home / Projects / Research / Resume / Contact links + a "Resume" button that's visually distinct.
- Mobile: collapse to a hamburger, but keep the Resume button always visible outside the hamburger.

### 3.1 Hero — "The Curious Duck Constellation"
Two-column layout, deep space aesthetic. Core metaphor: a constellation is separate stars connected into meaning — your projects, research, and questions are the stars, together forming a duck shape that's discovered, not announced.

**Layout — Desktop:** left column text, right column constellation SVG.
**Layout — Mobile:** constellation on top, then text, then CTA buttons.

**Left side content:**
- Small serif label: "ANATIS CURIOSA · Catalog Entry · 2024–Present" (Playfair Display, decorative only, never body text)
- Name in Inter, large
- Tagline: "Following questions wherever they lead."
- Short description (2-3 lines): CE student, ML/data systems/research
- **Current Observation panel** — small block, e.g. "Investigating cross-dataset battery degradation patterns for remaining useful life prediction." Only keep this if you'll actually update it — stale content reads as abandoned.
- CTA row: Resume (visually strongest), GitHub, LinkedIn

**Right side — the constellation (centerpiece):**
- Custom SVG duck-shaped constellation, built from real stars with real labels (not fake Latin): Curiosity (head), Research (heart), ML Systems (wing), Data Analytics (wing extension), Building (body), IEEE 2025 (tail), Thapar CE (foot), Projects (foot)
- Bayer-style prefixes are fine (α ML Systems, β Research, etc.) — real astronomical convention, not fake
- Ghost duck outline behind the stars at ~0.05 opacity max — barely visible, discovered not announced
- Background: deep matte black (#0A0A0F), extremely faint coordinate grid + concentric circles, minimal scattered stars

**Color system:**
| Token | Value |
|---|---|
| Background | #0A0A0F |
| Primary text | #F4F4F2 |
| Secondary text | #A8A8B3 |
| Constellation gold | #D4B16A |
| Muted gold | #B89555 |
| Grid lines | rgba(212,177,106,0.06) |
| Ghost duck | rgba(212,177,106,0.05) |

**Typography:** Inter for everything (name, body, nav, buttons) + Playfair Display only for the "ANATIS CURIOSA" catalog label and occasional decorative headings — never body text.

**Avoid:** neon colors, excessive animation, dashboard aesthetics, cartoon duck mascot, floating particles, shooting stars, rotating planets, generic AI-generated look. No ocean/water imagery of any kind — this concept is fully sky/atlas-based, not underwater.

### 3.2 Layer 1 — quick facts strip
Lead with the differentiators, not the number everyone has. CGPA lives on the resume PDF, not the homepage headline.

| Fact | Value |
|---|---|
| Program | B.E. Computer Engineering, Thapar, 2024-2028 |
| Publication | IEEE ComputingCon 2025 |
| Fellowship | Undergraduate Research Fellowship (URF) 2026 |
| Focus | ML systems + data analytics |

Small, scannable stat cards or a single divided line. Under one screen height.

### 3.3 Layer 2 — curiosity ("questions worth chasing")
Sits between facts and projects. This is the narrative hinge — it reframes projects as answers to questions, not a checklist.

3-4 short question cards, one per project family, e.g.:
- Can batteries tell us when they'll die?
- Why do buildings waste energy at scale?
- Can machines learn to recognize duplicates from very little labeled data?
- Can data replace guesswork in how a college runs itself?

Keep each to one line. No answers here — the payoff comes in the next section. Scroll cue at the bottom of this section into Projects.

### 3.4 Layer 3 — projects
Four cards, real numbers from your CV — don't soften these into vague bullets:

**Enerlytics AI — ML Energy Optimization** (Python, Scikit-Learn, PCA, K-Means, Streamlit, 2026)
- Analyzed 52,585 buildings, segmented into 4 behavioral clusters
- Silhouette score 0.212, CH Index 15,337
- Interactive Streamlit dashboard for anomaly detection
- Identified up to $0.3M in potential energy savings

**AcadHub** (MySQL, PL/SQL, Streamlit, 2026)
- Unified LMS, WebKiosk, PYQ into one platform (Admin/Faculty/Student roles)
- 12-entity relational schema, role-based access control
- PL/SQL procedures/triggers/views automating attendance & assessment
- Streamlit dashboard with 10+ analytics reports

**Aircraft Engine RUL Prediction** (Python, TensorFlow, LSTM, 2026)
- NASA C-MAPSS FD001: 20,631 cycles across 200 engines
- 14,241 training sequences via sliding-window modeling
- Benchmarked Linear Regression → LSTM → BiLSTM → Stacked LSTM (best performer)

**Stack Overflow Duplicate Detection** (Python, NLP, Sentence-BERT, K-Means — URF project, ongoing)
- Unsupervised duplicate-question detection using semantic embeddings
- Benchmarking TF-IDF vs Sentence-BERT with K-Means/DBSCAN
- Evaluation framework against known duplicate links

Card layout: tech stack pills + 3-4 bullet stats + GitHub link. Surface numbers visible without clicking — recruiters scan, they don't click to reveal.

### 3.5 Layer 4 — research
- **Published:** *Enhanced Diabetes Prediction using Ensemble Learning and Sparse PCA* — IEEE ComputingCon 2025. Ensemble pipeline (RF/XGBoost/CatBoost) + Sparse PCA, Optuna tuning, 94.6% accuracy, 92.9% F1. Link to IEEE Xplore.
- **In progress:** a short, honest line about the EV battery RUL work — keep this vague on specifics since it's unpublished and tied to your supervisor's name. **Check with your supervisor before putting any specifics of unpublished research on a public site** — not your call alone to make public.

### 3.6 Layer 5 — what surprised me
Same substance as a typical "failures" section, better frame. Sounds like a researcher reporting findings, not someone apologizing:
- Transformers underperformed GRU/LSTM on your smaller datasets — a real, useful finding
- Capacity turned out to dominate feature importance over other signals you expected to matter
- A Physics-Informed Neural Network direction was suggested and you navigated around it given implementation constraints — say what constraint, briefly, and what you did instead

Keep this section short — 3-4 lines. The point is credibility, not a confessional.

### 3.7 Layer 6 — thoughts / curiosities
Lightweight, can start as a placeholder:
- "Currently thinking about: [whatever you're actually into]"
- If no blog yet, use 3-4 short "currently exploring" cards instead of full posts. Don't fake a blog with dummy posts — an honest empty placeholder beats fake content.

### 3.8 Layer 7 — vision + contact (final mapped region)
- Short paragraph on what you're building toward — frame around solving problems with data (analytics → decisions → impact), matching the direction your actual project mix points toward.
- Final CTA row: Resume download, email, LinkedIn, GitHub, LeetCode. Make contact info impossible to miss.

---

## 4. Animation approach

**Hero constellation (on load):**
- Background stars fade in first
- Constellation lines draw themselves via SVG `stroke-dasharray`, driven by `path.getTotalLength()` in JS (not hardcoded values — must stay correct if star positions change later)
- Star nodes appear, then labels fade in, then text content fades upward
- Ongoing: very slow, barely-noticeable star pulsing — no flashy effects

**Hero constellation (interaction):**
- Gentle mouse-parallax, max 5-10px movement. Constellation shifts slightly, grid shifts even less.
- Structure the SVG with separate `<g>` groups for background-grid, constellation, and ghost-duck so each layer can have an independent parallax transform
- Throttle the mousemove handler with `requestAnimationFrame` — don't recalculate on every raw event
- **Touch devices:** skip mouse-parallax entirely, static constellation, no hover-dependent behavior

**Atlas Depth Background (persistent, spans the whole page):**

A single tall, pre-composed background — not a per-frame procedurally-recalculated canvas. Density and layout are baked into one full-page-height SVG/canvas asset generated once (sparse near the top, denser toward the bottom), so no live star-position math runs on scroll. This keeps it cheap and jank-free, especially on mobile.

Structure: `AtlasBackground.jsx` renders as `position: absolute; inset: 0; z-index: 0` inside a `position: relative` full-height page wrapper — it scrolls naturally with the page like any other tall element, no manual scroll-repositioning needed. All section content sits at `z-index: 1` with the same base background color (`#0A0A0F`), so there are no visible seams between sections — the depth feel comes from what's happening in the shared backdrop, not from section-to-section color changes.

Depth zones (baked into the asset + a few lightweight ScrollTrigger-toggled layers on top):

| Section | Star density | What's added |
|---|---|---|
| Hero | Sparse (~15-20 stars/viewport) | Home constellation fully visible, prominent |
| Curiosity | Moderate increase | Grid slightly more visible |
| Projects | Higher | 2-3 small pre-drawn neighboring constellation clusters (unlabeled dot+line groups) fade in near section edges via ScrollTrigger — suggests nearby charted territory, not just noise |
| Research | Highest | Coordinate grid opacity/scale increases subtly; optional very-low-opacity decorative coordinate-style labels (e.g. faint "RA/Dec" style numerals) — purely atmospheric, never legible-priority |
| Vision | Thins out again | Sparser, more black space — "edge of the mapped territory" feeling; home constellation may reappear very faintly as a callback |

On top of the static asset, only two things are actually scroll-animated:
- **Parallax offset:** background scrolls at ~0.8x the speed of foreground content (`transform: translateY()`, GPU-cheap) for a depth cue
- **Neighboring constellation fade-in/out:** 2-3 clusters near Projects, toggled by ScrollTrigger based on section visibility, not continuous recalculation

**Readability rule (non-negotiable):** content cards (project cards, research block, etc.) get a subtle near-solid backdrop — `rgba(10,10,15,0.85)` — so increased background density shows through the margins and negative space, never directly behind body text. The denser the background gets, the more this backdrop matters — check Projects and Research sections specifically during the mobile pass.

**Reduced motion:** the density gradient itself isn't motion (it's a static image), so it stays for `prefers-reduced-motion` users. Disable the parallax speed offset and constellation fade transitions — show them in their final visible state immediately instead.

**Mobile:** the parallax speed differential can feel janky on touch scroll — reduce or remove it on small viewports. Keep the density backdrop unchanged (it's just an image, no touch-scroll conflict there).

**Rest of the site:**
- **GSAP + ScrollTrigger** also handles the existing per-section darkening/reveal transitions as you move through sections. Free, well-documented.
- Skip Three.js/WebGL — not needed for this concept.

**Non-negotiable:** wrap all animation (stroke-draw, parallax, scroll-linked effects) in a `prefers-reduced-motion` check — show the final static state immediately for users with that preference.

**Explicitly avoid:** floating particles, shooting stars, galaxy effects, rotating planets, excessive glow, constant/idle movement beyond the very subtle star pulse. No water, ripple, wave, or diving imagery anywhere — that concept has been fully replaced.

---

## 5. Scope: V1 vs V1.5

Don't let polish ideas delay shipping. Split like this:

**V1 (ship this during placement season):**
- Full 7-layer structure above, one fully-realized constellation hero (grid + stars + ghost duck + labels), no simplified placeholder version
- All content sections real, no placeholder fake data
- Nav, resume, contact all working
- Deployed live on GitHub Pages

**V1.5 (after launch, when you have slack):**
- Additional stars and connecting lines that appear as the user scrolls into deeper layers — visually extending the atlas map as more of your work is revealed, rather than a static hero-only constellation
- Richer parallax depth across sections (subtle layered star-field density changes per section)
- Actual blog posts replacing the "currently exploring" placeholder cards

A site that ships with one well-executed constellation beats a site still in progress because it's chasing multi-stage mascot animation or extra visual effects.

---

## 6. Tech stack recommendation

**Vite + React + TailwindCSS + GSAP (ScrollTrigger)**

Why: Vite builds to plain static files (what GitHub Pages needs), React keeps sections as reusable components, Tailwind for fast styling, GSAP for reliable scroll animation, native SVG for the constellation.

Skip: Next.js (no SSR needed), Three.js (no 3D needed), any backend/database (GitHub Pages is static-only).

---

## 7. Suggested folder structure

```
portfolio/
├── public/
│   ├── resume.pdf
│   └── constellation/      (star field, constellation path data, ghost-duck SVG assets,
│                            full-page depth-gradient background asset)
├── src/
│   ├── components/
│   │   ├── AtlasBackground.jsx
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── CurrentInvestigation.jsx
│   │   ├── QuickFacts.jsx
│   │   ├── Curiosity.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Research.jsx
│   │   ├── Surprises.jsx
│   │   ├── Thoughts.jsx
│   │   ├── Vision.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── questions.js
│   │   └── publication.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── .github/workflows/deploy.yml
```

---

## 8. GitHub Pages deployment

1. In `vite.config.js`, set `base: '/your-repo-name/'` (required — without this, assets 404 on Pages).
2. Simplest path: `npm install --save-dev gh-pages`, add to `package.json`:
   ```json
   "scripts": { "deploy": "vite build && gh-pages -d dist" }
   ```
   then `npm run deploy` pushes `dist/` to a `gh-pages` branch. Turn on Pages in repo settings pointing to that branch.
3. Cleaner path (recommended): GitHub Actions workflow that builds and deploys on every push to `main`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with: { node-version: 20 }
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with: { path: dist }
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```
4. Custom domain (optional, later): add a `CNAME` file in `public/` with your domain, point DNS to GitHub Pages IPs.
5. **Contact form:** no backend on GitHub Pages — use Formspree or EmailJS (free tiers) for a client-side form submission.

---

## 9. Build order (what to prompt Antigravity, in sequence)

1. Scaffold: Vite + React + Tailwind project, basic scroll structure, empty section components
2. Nav component with sticky behavior + smooth scroll to section IDs
3. Build the Hero component using the **final constellation design directly** — do not build an intermediate floating-duck-bob hero. Implement in one pass: atlas grid background, constellation stars/lines, ghost duck, labels, CTA layout, and the full animation/interaction spec from section 4 (stroke-draw via `getTotalLength()`, layered parallax groups, reduced-motion guard, touch fallback, throttled mousemove). This is the highest-design-risk section — review the Implementation Plan carefully before proceeding.
4. Quick facts strip
5. Curiosity section — build `data/questions.js` first, then the card layout
6. Projects section — build `data/projects.js` first, then `ProjectCard.jsx` that maps over it
7. Research section
8. "What surprised me" section
9. Thoughts section (placeholder cards)
10. Vision + footer/contact
11. Build `AtlasBackground.jsx` per @SPEC.md section 4's Atlas Depth Background spec — the static density-gradient asset, parallax offset, and neighboring-constellation fade-ins. Build this once all sections exist so the ScrollTrigger zones can reference real section boundaries.
12. GSAP ScrollTrigger pass — wire up the depth/darkening effect across sections once everything exists (do this last)
13. Mobile pass — test every section at 375px width, simplify animations where needed, add the content-card readability backdrop, reduce/remove background parallax on small viewports
14. GitHub Actions deploy workflow
15. **(V1.5, later)** Additional scroll-revealed stars/connections per section 5, once V1 is live

Content-first, animation-last means you always have a working (if plain) site at any point in the process.

---

## 10. Execution guide — running this in Antigravity

**Setup:** install from antigravity.google/download, sign in with Google account.

**Project:** create a local folder (e.g. `~/portfolio`), then in Antigravity: Select Project → New Project → Add Folder → that folder → Default permissions → Create.

**Load this spec into the project:** copy this file into the project root as `SPEC.md`. Reference it in every prompt with `@SPEC.md` so the agent has full context without retyping. Optional pro move: turn it into a project Skill at `.agents/skills/portfolio-spec/SKILL.md` (with a `name`/`description` header) so it auto-loads without needing `@` every time.

**Build order — one prompt per stage, same conversation thread, review each Implementation Plan before clicking Proceed:**

0. **BEFORE anything else** — in the project folder terminal, manually run:
   ```
   git init
   git add SPEC.md .agents/skills/
   git commit -m "spec and skill files"
   ```
   Do this yourself, don't ask the agent — it takes 10 seconds and means SPEC.md and the skill folder can never be silently wiped by a scaffolding tool again. Commit again after every major stage below (`git add -A && git commit -m "stage X done"`) — cheap insurance, zero credits.
1. `Set up a new Vite + React + TailwindCSS project inside this folder. Reference @SPEC.md section 6 for the tech stack and section 7 for the folder structure. Just scaffold empty components for now, don't fill content yet. Do not delete or overwrite SPEC.md or the .agents/skills folder.`
2. `Build the Nav component per @SPEC.md section 3.0 — sticky, transparent over hero, solid background after scrolling, smooth scroll to section IDs, a small constellation glyph as wordmark (not a literal duck icon), mobile hamburger with Resume button always visible outside it.`
3. `Build the Hero component per @SPEC.md section 3.1, using the full animation and interaction spec from section 4. Implement the final constellation design directly — atlas grid background, star nodes with real labels, connecting lines that self-draw using path.getTotalLength(), the ghost duck at ~0.05 opacity, layered <g> groups for independent parallax (grid/constellation/ghost-duck), throttled mousemove with requestAnimationFrame, a prefers-reduced-motion fallback that shows the static final state, and no parallax on touch devices. Strictly follow the design constraints in @SPEC.md section 11 — this should look like a restrained research notebook, not a generic AI-generated site.`
4. `Build the QuickFacts component per @SPEC.md section 3.2.`
5. `Create data/questions.js and the Curiosity component per @SPEC.md section 3.3.`
6. `Create data/projects.js with the four projects from @SPEC.md section 3.4, then build ProjectCard.jsx and Projects.jsx.`
7. `Build the Research component per @SPEC.md section 3.5.`
8. `Build the Surprises component per @SPEC.md section 3.6.`
9. `Build the Thoughts component per @SPEC.md section 3.7 as placeholder cards.`
10. `Build the Vision and Footer components per @SPEC.md section 3.8.`
11. `Build AtlasBackground.jsx per @SPEC.md section 4's Atlas Depth Background spec — a single pre-composed full-page-height density gradient (not a per-frame recalculated canvas), with parallax offset and 2-3 neighboring constellation clusters that fade in near the Projects section via ScrollTrigger. Add the rgba(10,10,15,0.85) readability backdrop to content cards.`
12. `Add GSAP ScrollTrigger per @SPEC.md section 4 — scroll-linked background darkening across layers. Respect prefers-reduced-motion.` (do this last, after all content is real)
13. `Test every section at 375px width using the browser subagent, simplify animations for mobile, and reduce/remove the background parallax offset on small viewports.`

**Visual checks:** use `/browser` or ask the agent to launch the dev server and screenshot the current state — do this every 2-3 sections, not just at the end.

**Deploy:**
1. Create an empty repo on github.com first (Antigravity can push, but can't create the remote repo).
2. `Initialize git, add a .gitignore for node_modules, commit, set remote to <your-repo-url>, push to main.`
3. `Set vite.config.js base to '/repo-name/' and create the GitHub Actions workflow from @SPEC.md section 8.`
4. Push the workflow, then set repo Settings → Pages → source to "GitHub Actions". Every push after this auto-deploys.

**Tips:** keep the security preset on review-required until you trust the output, then loosen it. Use Antigravity IDE alongside the standalone app if you want to hand-edit component code directly. Rename each conversation thread per section (`conv-hero`, `conv-projects`, etc.) as a build log.

---

## 11. Design Constraints — Avoiding "AI Slop"

Persistent rules. Reference this section (`@SPEC.md section 11`) in any visual/design prompt, or better — since this is in the skill file too, it should auto-apply. Goal: looks like a curious academic's personal atlas, not a generated SaaS landing page.

**Never:**
- Default purple-to-blue gradient backgrounds — the single biggest tell of an unstyled AI-generated site
- Glassmorphism / frosted-blur cards unless deliberately and sparingly chosen
- The generic "icon + bold title + one-line description" card grid repeated identically for every section — vary layout per section
- Emoji as icons or bullets in any content-facing section — never in nav, CTAs, or project cards
- Excessive box-shadow stacking or neumorphism — contrast and restraint carry the design, not shadow layering
- Stock-photo-style or AI-generated raster imagery — everything custom SVG/vector, matching the constellation visual language
- Ad-hoc colors outside the defined palette — no random blue/green/purple accents an agent might default to
- A third font sneaking in "for flourish" — Inter + Playfair Display only, and Playfair only for the catalog-label accent
- Any water/ocean/diving imagery, ripple effects, or literal cartoon duck mascot — fully replaced by the constellation concept

**Always:**
- Strict palette adherence: `#0A0A0F` background, `#F4F4F2` primary text, `#A8A8B3` secondary text, `#D4B16A` constellation gold, `#B89555` muted gold, faint gold rgba for grid/ghost elements only
- Generous whitespace — an atlas breathes, it doesn't cram content into dense grids
- Restraint in motion — subtle, slow, purposeful (see section 4). If an animation doesn't serve the "discovery" narrative, cut it.

**Visual hierarchy rule:** the constellation is always the visual hero. The grid exists to support the constellation. The ghost duck exists to support the constellation. Neither should compete for attention. If a user notices the grid before the constellation, the design has failed.

**Handcrafted rule:** the portfolio should feel handcrafted. If a design element exists only because it looks impressive, remove it. Every visual element must support at least one of: curiosity, exploration, mapping, discovery. If it doesn't support one of those themes, it doesn't belong on the site.

**Litmus test before adding any visual element:** would a real astronomical atlas or research notebook have this? If not — badges, confetti, glow-everything, decorative icons, gradient blobs — cut it.

**Prompt habit:** end style-sensitive prompts with something like — *"Keep it restrained, follow @SPEC.md section 11 — this should look like a research notebook, not a SaaS landing page."*