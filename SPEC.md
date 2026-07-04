# Portfolio Site Spec — Editorial Minimal (ReactBits system)

Hybrid model: Dock nav appears after hero (speed for anyone who scrolls a bit), hero CTAs handle immediate recruiter needs. Deploy target: GitHub Pages.

Design philosophy: **"Nothing moves unless it has a reason."** Premium, calm, intentional, memorable. Not a ReactBits showcase, not a SaaS landing page, not a space/cyberpunk/gamified theme.

---

## 1. Concept in one line

Curiosity, engineering, research, building, simplicity, confidence — communicated through restraint, not decoration. Recruiters understand the page in 10 seconds; curious visitors can spend several minutes in it. The interface disappears; the content is the experience.

No mascot, no metaphor-driven branding, no codename. Identity is carried entirely by name + typography, per the "interface disappears" philosophy.

**Tagline — pick one before building the Hero (plain text, no graphic, optional but cheap to include):**
- "Building things worth explaining."
- "Curious by default, careful by training."
- "I ask questions until the data answers them."
- "Engineering things that started as questions."
- Or skip the tagline entirely — a strong one-line description under your name works fine too, and is arguably more in line with "typography is the hero, no decorative flourishes."

---

## 2. Global structure

```
┌─────────────────────────────────────────────┐
│  HERO                                        │
│  Large typography, one text effect, direct   │
│  CTA row (Resume/GitHub/LinkedIn) — this     │
│  carries the "recruiter finds it fast" job   │
│  since Dock isn't visible yet                │
└─────────────────────────────────────────────┘
▼ (hero starts leaving viewport → Dock fades in)
┌─────────────────────────────────────────────┐
│  DOCK NAV — appears here, not before         │
│  Text-labeled, not icon-only                 │
└─────────────────────────────────────────────┘
▼
┌─────────────────────────────────────────────┐
│  LAYER 1 — quick facts strip (Count Up)      │
└─────────────────────────────────────────────┘
▼
┌─────────────────────────────────────────────┐
│  LAYER 2 — curiosity (questions worth chasing)│
└─────────────────────────────────────────────┘
▼
┌─────────────────────────────────────────────┐
│  LAYER 3 — projects (Count Up on stats)      │
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
│  LAYER 7 — vision + contact (footer)         │
└─────────────────────────────────────────────┘
```

---

## 3. Section-by-section detail

### 3.0 Navigation — Dock
- Use Dock as the primary navigation. No traditional sticky navbar.
- Appears only once the Hero starts leaving the viewport — feels like a tool becoming available, not something permanently occupying the screen.
- **Must use clear text labels, not icon-only glyphs** — Projects / Research / Resume / Contact. A recruiter shouldn't have to guess what an icon means.
- Resume stays visually distinct within the Dock.

### 3.1 Hero — typography-first, no illustration
This is the most important section. Extremely clean. No profile card, no hero illustration, no decorative graphics. The typography *is* the hero.

**Content philosophy:** the hero introduces a mindset before a resume line. It should answer "what kind of person is this" before "what technologies does he know." Lead with how you approach problems; let the degree/tools land as a quieter, secondary line — not the headline. Plain, honest language — no metaphor, no aphorism-for-its-own-sake. The words need to be trustworthy, not impressive.

**Components used:**
- Dot Grid as background (global — see 3.9)
- **Text Pressure on the main heading — locked decision.** Do not also add Type Text or any other text effect anywhere in the hero; the heading effect is the hero's one moment of motion, full stop.
- Click Spark enabled (global — see 3.9)

**Content:**
- Name, large
- A mindset-first line (how you approach problems), written in your own voice, not a template
- A quieter second line naming the current toolbox (software, data, research) — supporting detail, not the headline
- Optional tagline (plain text, no graphic) — pick one that sounds like you, or skip it entirely
- CTA row: Resume (visually strongest), GitHub, LinkedIn — these must work immediately, since Dock isn't visible yet

### 3.2 Layer 1 — quick facts strip
CGPA lives on the resume PDF, not the homepage headline. Lead with differentiators. No self-applied identity labels here — facts, not a category.

| Fact | Value |
|---|---|
| Program | B.E. Computer Engineering, Thapar, 2024-2028 |
| Publication | IEEE ComputingCon 2025 |
| Fellowship | Undergraduate Research Fellowship (URF) 2026 |

Dropped the old "Focus: ML systems + data analytics" row deliberately — it over-identified the site with one tool rather than the problems behind it. If a fourth row is wanted, keep it non-reductive (e.g. "Approach: engineering + research"), not a technology label.

Any numeric values here use Count Up, once, on entering viewport. Never animate plain text with Count Up.

### 3.3 Layer 2 — curiosity ("questions worth chasing")
Sits between facts and projects — reframes projects as answers to questions, not a checklist.

**Content philosophy — important:** the questions must be genuine curiosity that came *before* the project, not a project title reverse-engineered into question form. A reader should be able to imagine the person actually wondering this, not recognize a marketing rephrase of a deliverable. The placeholder questions from earlier drafts (e.g. "Can batteries tell us when they'll die?") were exactly this failure mode and need to be replaced with real ones.

**How to write these for real:** for each project, identify the actual moment that came first — a frustration, an offhand "wait, why does it do that," a supervisor's suggestion you got interested in, a reading that raised a question. Write it the way it was actually thought, not the way a portfolio wants it to sound. "My supervisor suggested this and I got interested" is a fine, honest curiosity story — it doesn't need an invented eureka moment.

3-4 short question cards, one line each. No answers here — payoff comes in Projects. Section headings use Variable Proximity (subtle, cursor-reactive, nothing exaggerated).

### 3.4 Layer 3 — projects
Content-first. No fancy cards, no 3D, no exploding interactions.

**Content philosophy:** projects are evidence, not achievements. Each project should communicate the problem, why it mattered, what you built, and what you learned — not just a list of metrics. Metrics stay visible (numeric stats use Count Up once on viewport entry) but support the story rather than being the story. This is a content-shape change only — same ProjectCard visual layout, a short 2-3 sentence problem/build/learning narrative plus the existing stat line beneath it, not four bare stat bullets.

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

Layout prioritizes readability over visual flourish. Optional very-low-opacity Pixel Blast accent behind this section — **defer to V1.5** (see section 5).

### 3.5 Layer 4 — research

**Content philosophy:** exploration, not publication. Lead with the question that drove the research and what's being learned systematically — the publication is an outcome mentioned in passing, not the section's opening claim. This is "I chased this question seriously enough that it became a paper," not "here is my paper."

- **Published:** open with what you were trying to understand, then note it became *Enhanced Diabetes Prediction using Ensemble Learning and Sparse PCA* — IEEE ComputingCon 2025 (ensemble pipeline, Sparse PCA, Optuna tuning, 94.6% accuracy, 92.9% F1 — kept visible, just not the lead sentence). Link to IEEE Xplore.
- **In progress:** a short, honest line about the EV battery RUL work, framed as an open question you're still working through — keep vague on specifics, unpublished, tied to your supervisor. **Check with your supervisor before publishing any specifics** — not your call alone.

**Layout for V1: a clean static layout, not Card Stack.** With only two entries, a stack metaphor will look sparse. Revisit Card Stack only if/when this section grows to 3+ real entries — it's a V1.5 idea, not a V1 build.

### 3.6 Layer 5 — what surprised me
This should be one of the most memorable sections on the site — genuine lessons that changed how you think, not motivational quotes or productivity advice. Sounds like a researcher reporting findings, not someone apologizing:
- Transformers underperformed GRU/LSTM on your smaller datasets — a real, useful finding. Add the "so what": how that changed how you now think about model choice on small datasets.
- Capacity turned out to dominate feature importance over other signals you expected to matter — add what that shifted in how you approach feature selection now.
- A Physics-Informed Neural Network direction was suggested and you navigated around it given implementation constraints — say what constraint, briefly, what you did instead, and what it taught you about scoping a research direction.

Short — 3-4 lines each. Credibility, not confession. The addition here is the "so what" half-sentence — the fact alone is a result, the fact plus its effect on your thinking is a lesson.

### 3.7 Layer 6a — how I work (new, optional but recommended)
3 concrete principles max, each grounded in something you actually did — not abstract aphorisms. This is the most direct way to demonstrate the mindset-first framing from the Hero, rather than just claim it. Costs nothing structurally: reuse the same simple list layout as the Surprises section, no new component, no new visual system. Keep it to 3 items or it drifts into "sounding deep for its own sake," which is explicitly the wrong register for this site.

### 3.7 Layer 6b — "Questions I'm Following" (renamed from "Thoughts")
Deliberately echoes "questions worth chasing" from the Curiosity section — the site opens and closes on the same idea. Lightweight, can start as placeholder:
- "Currently thinking about: [whatever you're actually into]"
- 3-4 short "currently exploring" cards instead of full posts if no blog yet. An honest empty placeholder beats fake content.

### 3.8 Layer 7 — vision + contact (footer)
- Short paragraph framed around the kinds of problems you want to keep chasing — not a target job title or career-ladder statement. Same signaling function as before, but stays in the same honest, non-performative voice as the rest of the site.
- Final CTA row: Resume download, email, LinkedIn, GitHub, LeetCode. Impossible to miss — this mechanic is unchanged.

---

## 4. Visual language & color system

**Never:** gradients, neon, glassmorphism, glowing borders, floating blobs, unnecessary cards, visual clutter, blue glows, bright purple, saturated colors, cyberpunk/futuristic-dashboard/game-UI/cartoon look.

**Always:** minimal, editorial, large typography, generous whitespace, dark interface.

| Token | Value |
|---|---|
| Background | #030303 |
| Primary text | #F5F5F5 |
| Secondary text | #B5B5B5 |
| Accent | Warm white or muted gold only |

No third accent color. No ad-hoc colors an agent might default to.

---

## 5. Component system (ReactBits) — scope: V1 vs V1.5

Each component has exactly one job. If two components solve the same problem, remove one.

**V1 — build these:**

| Component | Job | Where |
|---|---|---|
| Dot Grid | Global atmosphere background | Entire site |
| Text Pressure | Hero identity (locked — no other text effects in hero) | Hero only |
| Dock | Navigation | Appears after Hero leaves viewport |
| Variable Proximity | Subtle heading reactivity | All section headings |
| Count Up | Numeric values only | Facts strip, project stats |
| Click Spark | Click feedback | Global, subtle |

**V1.5 — defer:**

| Component | Job | Where | Why deferred |
|---|---|---|---|
| Pixel Blast | Section accent, extremely low opacity | Behind Projects/Research | Second background system on top of Dot Grid — real build/perf cost for two sections; add once V1 is live |
| Card Stack | Document-browsing interaction | Research | Only 2 real items currently — will look sparse; revisit once Research has 3+ real entries |

**Explicitly removed — do not build these:** Bubble Menu, Profile Card, Lanyard, Scrambled Text, Galaxy, Grid Scan, Dither as background, Radar, heavy particle systems, cyberpunk effects, neon lighting, infinite spinning elements.

**Consistency rule:** never combine multiple text effects on the same element. Never use Count Up on non-numeric text. Nothing loops forever — every animation finishes.

---

## 6. Motion philosophy

Calm, measured, responsive, physical, intentional. Nothing loops forever. Nothing constantly demands attention. Every animation finishes.

**Non-negotiable:** respect `prefers-reduced-motion` — disable all motion and show final static states instantly for users with that preference. Maintain 60fps; reduce motion on low-powered devices. Do not sacrifice performance for visual effects.

**Implementation risk to test early:** Dot Grid and Pixel Blast are typically canvas/WebGL-based (via libraries like `ogl`). Test Dot Grid alone on an actual mid-range mobile device before adding any other component on top of it — this is the most likely place your 60fps rule breaks, and it's cheaper to catch before building five more things on top of a laggy base layer.

---

## 7. Final design test — apply to every proposed feature before building it

1. Does this improve usability?
2. Does this improve storytelling?
3. Will recruiters still understand the page immediately?
4. Would this still look premium three years from now?
5. Is this component helping, or simply showing off?

If the answer to #5 is "showing off," remove it — regardless of how the other four answered.

---

## 8. Tech stack recommendation

**Vite + React + TailwindCSS + ReactBits components (Dot Grid, Text Pressure/Type Text, Dock, Variable Proximity, Count Up, Click Spark)**

ReactBits components are typically added per-component — either via their CLI or by copying the component code directly from each component's page on reactbits.dev, not as a single npm package. Check each component's own docs page for its exact install method and peer dependencies (some canvas-based ones need extra packages like `ogl`) before adding it.

Skip: Next.js (no SSR needed), any backend/database (GitHub Pages is static-only), GSAP (not needed for this system — ReactBits components handle their own animation internally).

---

## 9. Suggested folder structure

```
portfolio/
├── public/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── reactbits/          (copied-in library components, unmodified logic, re-skinned via props/CSS vars)
│   │   │   ├── DotGrid.jsx
│   │   │   ├── TextPressure.jsx    (or TypeText.jsx — pick one)
│   │   │   ├── Dock.jsx
│   │   │   ├── VariableProximity.jsx
│   │   │   ├── CountUp.jsx
│   │   │   └── ClickSpark.jsx
│   │   ├── Hero.jsx
│   │   ├── QuickFacts.jsx
│   │   ├── Curiosity.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Research.jsx
│   │   ├── Surprises.jsx
│   │   ├── Thoughts.jsx
│   │   └── Vision.jsx
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

## 10. GitHub Pages deployment

1. In `vite.config.js`, set `base: '/your-repo-name/'` (required — without this, assets 404 on Pages).
2. Simplest path: `npm install --save-dev gh-pages`, add to `package.json`:
   ```json
   "scripts": { "deploy": "vite build && gh-pages -d dist" }
   ```
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
4. Custom domain (optional, later): add a `CNAME` file in `public/` with your domain.
5. **Contact form:** no backend on GitHub Pages — use Formspree or EmailJS (free tiers).

---

## 11. Build order (what to prompt Antigravity, in sequence)

0. **Fresh folder, terminal, before anything else** (zero credits):
   - Create the new project folder from scratch (safe to fully delete the old one — this spec is self-contained, nothing from the old folder is needed).
   - Immediately, before opening Antigravity at all:
     ```
     git init
     ```
   - Save this file as `SPEC.md` in the folder root, create `.agents/skills/portfolio-spec/SKILL.md` with this same content pasted below its metadata header, then:
     ```
     git add SPEC.md .agents/skills/
     git commit -m "spec and skill files, editorial minimal, fresh start"
     ```
   - Only after this commit exists, open Antigravity and create the project pointing at this folder. This is the one habit from last time worth keeping — everything else can start clean.
1. `Set up a new Vite + React + TailwindCSS project inside this folder. Reference @SPEC.md section 8 for the tech stack and section 9 for the folder structure. Scaffold empty components only, don't fill content. Do not delete or overwrite SPEC.md or the .agents/skills folder.`
2. `Add the Dot Grid component from ReactBits per @SPEC.md section 5 — global background, re-skinned to neutral white/warm gray dots per section 4's color palette, subtle cursor reaction, no aggressive glow. Test this alone on a simulated low-end mobile viewport before continuing — flag if frame rate seems at risk.`
3. `Build the Hero component per @SPEC.md section 3.1 — large typography, no illustration, Text Pressure on the main heading only (no other text effects anywhere in the hero), direct CTA row for Resume/GitHub/LinkedIn, Click Spark enabled.`
4. `Build the QuickFacts component per @SPEC.md section 3.2 with Count Up on the numeric values only.`
5. `Build the Dock navigation per @SPEC.md section 3.0 — text-labeled items, appears once Hero starts leaving viewport.`
6. `Create data/questions.js and the Curiosity component per @SPEC.md section 3.3, with Variable Proximity on the section heading.`
7. `Create data/projects.js with the four projects from @SPEC.md section 3.4, then build ProjectCard.jsx and Projects.jsx with Count Up on the numeric stats.`
8. `Build the Research component per @SPEC.md section 3.5 using a clean static layout, not Card Stack (see V1 scope note).`
9. `Build the Surprises component per @SPEC.md section 3.6.`
10. `Build the Thoughts component per @SPEC.md section 3.7 as placeholder cards.`
11. `Build the Vision/footer component per @SPEC.md section 3.8.`
12. `Test every section at 375px width using the browser subagent, confirm 60fps holds with Dot Grid running, and verify prefers-reduced-motion disables all motion correctly.`
13. `Set vite.config.js base to '/repo-name/' and create the GitHub Actions workflow from @SPEC.md section 10.`

**Visual checks:** screenshot every 2-3 steps, not every single one. **Data entry** (`projects.js`, `questions.js`, `resume.pdf`) — do yourself, don't spend agent credits on it.

**Deploy:** create an empty repo on github.com first, then ask the agent to init/commit/push and set up the remote, same as before.