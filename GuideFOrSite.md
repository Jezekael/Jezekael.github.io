# Redesign Package for `jezekael.github.io` — Claude Desktop Prompt + Companion SPEC.md

## TL;DR

- **Keep the stack plain static HTML/CSS/vanilla-JS (no Jekyll) and drive everything from JSON** — the existing "Cyber Footprints" site at jezekael.github.io is already a hand-built static site with `index.html`, `attacks.html`, `groups.html`, `posts.html` and `about.html`, so the lowest-risk, GitHub-Pages-native path is to refactor it in place rather than migrate to a generator. The deliverable below is (A) a ready-to-paste Claude Desktop prompt and (B) a full `SPEC.md` you drop into the repo root.
- **The design target is a Mr Robot / fsociety dark terminal** (near-black `#0d0d0d`, JetBrains Mono, traffic-light title bar reading `fsociety@kali:~$`, typewriter animation) for the Home hero, with a prashsiv.com-style minimal top nav (Home / Blog / Resume / Projects) and data-driven "latest content" cards.
- **Every research-heavy section is pre-sourced in the SPEC**: a full Mr Robot hack-feasibility post draft (Steel Mountain Raspberry Pi/BACnet, femtocell, USB drop, RFID badge cloning, Bluetooth keyboard spoof, John the Ripper, DDoS/rootkit) with per-hack realism ratings; a satellite-eavesdropper post template anchored to the 2025 UCSD/UMD "Don't Look Up" GEO research and SDR reception (noting NOAA APT shutdown in August 2025); a Hack-A-Sat local-setup guide built on the Cromulence Docker repos; and a "World Wide Threats & Actors" map + searchable database plan using MITRE ATT&CK, the CFR Cyber Operations Tracker, ETDA Threat Group Cards and EuRepoC with licensing and a JSON schema.

## Key Findings (research basis)

**Current site.** `https://jezekael.github.io/index.html` renders as **"Cyber Footprints — A personal archive of verified state-linked cyber operations, actor profiles, and analytical notes."**\[1\] The nav bar is Home / Attacks (`attacks.html`) / Groups (`groups.html`) / Notes (`posts.html`) / About (`about.html`).\[1\] The home page already contains counters ("Documented incidents / Tracked groups / Published notes"), an **"Interactive incident map"** with "Filter by group / Filter by region" controls, "Latest incident files", "Tracked groups" and "Latest notes" sections, and the footer "Built for GitHub Pages." This strongly implies a plain static site with a client-side map (Leaflet or similar) reading a local data file, and content lists that would benefit from a single JSON index. The individual sub-pages (`about.html`, `groups.html`, `attacks.html`, `posts.html`) could not be fetched during research (GitHub Pages fetch restrictions), so all bio/CV specifics must be treated as **TODO placeholders** for the user to confirm. Open-source footprints suggest the owner is **Jezekael Brunon**, an INSA Lyon computer-engineering/telecoms student doing offensive-security\[2\] and privacy-preserving decentralized-learning research (GitHub username `Jezekael`), but this is unconfirmed and must not be hard-coded without the user's say-so.

**Inspiration site.** prashsiv.com is built with **Astro**\[3\] and uses a minimal top nav (**Home / Blog / About / Resume**), a one-line tagline under a large name heading, a "Series" grouping (e.g. "Ongoing Hacks of Mr. Robot", "Side Projects"),\[3\] and a reverse-chronological "Writing" list where each row shows **date + series tag + title + one-sentence summary**. The resume link points straight at a PDF (`/Prashanth_Sivarajan_Resume.pdf`). Notably, prashsiv.com already runs an episode-by-episode "Hacks of Mr. Robot" series,\[3\] so the user's own Mr Robot post should differentiate by being a **single consolidated feasibility catalogue with ratings** rather than one-scene-per-post.

**Mr Robot hack realism.** The show's technical authenticity is driven by writer/technology-producer **Kor Adana**, a former network-security analyst, working with a team of advisers; in Yael Grauer's Forbes interview (Aug 21, 2016) Adana said "if the hack doesn't work, we'll restructure the story to fit the hack or we'll restructure the hack to fit the story. Either way, if it's not realistic we're not going to move forward with it." Documented, well-sourced hacks include: the **Steel Mountain Raspberry Pi** attached to the HVAC/climate-control system to cook E Corp's backup tapes (the Pi reaches the building-management system over **BACnet**, which often runs unauthenticated; the Pi used a cellular modem for out-of-band access);\[4\] **RFID badge cloning** to enter Steel Mountain;\[5\] **social engineering** (fake identity backed by a planted Wikipedia page); a **femtocell** dropped at the FBI/E Corp offices (Angela plants it) acting as a rogue base station / IMSI-catcher;\[4\] a **USB drop** in a prison parking lot (an officer inserts it);\[6\] **Bluetooth keyboard spoofing** of a police car's connection to upload malware to the prison network; **password cracking** with a dictionary/"word list" approach (John the Ripper); and **RAT/CD malware** delivered by the Dark Army. Independent security commentators (Rolling Stone's interview with Adana, Forbes, Avast, Dark Reading, The Globe and Mail's KPMG analysis) consistently rate these as plausible with existing, cheap tools.

**Satellite eavesdropper.** The strongest contemporary anchor is the 2025 **"Don't Look Up: There Are Sensitive Internal Links in the Clear on GEO Satellites"** study by\[7\] Wenyi Morty Zhang, Annie Dai, Keegan Ryan, Dave Levin, Nadia Heninger and Aaron Schulman (UC San Diego + University of Maryland), presented at **ACM CCS 2025** in Taipei (Distinguished Paper Award). Using a consumer satellite dish, a motor and a consumer TV-tuner card — an ~$800 off-the-shelf receiver scanning from a rooftop over roughly three years — they observed 39 GEO satellites across 25 distinct longitudes with 411 transponders and found that "50 percent of GEO links contained cleartext IP traffic," including cellular backhaul (calls/SMS/IMSI), in-flight Wi-Fi, VoIP, corporate/retail internal networks, critical-infrastructure SCADA, and military/government traffic; co-lead Dave Levin framed it as "These signals are just being broadcast to over 40 percent of the Earth at any point in time." The study was fully passive; code is the open-source "dontlookup" DVB-S2(X) IP packet extractor.\[8\] Separately, the hobbyist SDR ground-station angle changed in 2025: NOAA decommissioned its last APT weather birds — **NOAA-18 on June 6, 2025 at 1740 UTC (unrecoverable S-Band transmitter failure), NOAA-19 on August 13, 2025 at 16:55 UTC, and NOAA-15 on August 19, 2025 at 20:37 UTC** — ending the classic 137 MHz NOAA APT reception path and pushing hobbyists toward Meteor-M2 LRPT, GOES and the GEO work above. The user's own project details are unknown and must be placeholders.

**Hack-A-Sat.** All qualifiers and finals are open-sourced by **Cromulence** under MIT on GitHub (`cromulencellc`): `hackasat-qualifier-2020` (master), `-2021` (main), `-2022` (release branch), plus `-2023`, finals repos and `-techpapers` repos. Challenges ship as self-contained **Docker** images built per-folder; the live `ticket-taker`, `lifecycle-manager` and `sat-solver` infrastructure is *not* released,\[9\] but each challenge can be run locally with `docker run` using `SEED`, `FLAG`, `DIR`, `SERVICE_HOST`, `SERVICE_PORT`, `HOST`, `PORT` and `TICKET` env vars,\[9\] and a tickets→seeds "decoder ring" CSV is provided per year.\[9\] Challenge→folder maps per year are in the SPEC.

**Threat-actor data sources.** For the WWT&A map: **MITRE ATT&CK Groups** via `mitre-attack/attack-stix-data` (STIX 2.1 JSON; MITRE ATT&CK Terms of Use — free for research/commercial with copyright reproduction); **CFR Cyber Operations Tracker** (state-sponsored incidents since 2005, CSV export); **ETDA/ThaiCERT Threat Group Cards** (JSON/MISP export, 504 groups as of 16 Aug 2025); **MISP galaxy threat-actor.json** (CC0 / 2-clause BSD); and **EuRepoC Global Dataset of Cyber Incidents** (CSV/XLSX/JSON on Zenodo; note the license changed to **CC-BY-NC 4.0**). Recommended build: a small Node/Python script pre-joins these into one `threat-actors.json` + `incidents.json`, rendered with a Leaflet or D3/TopoJSON choropleth and client-side search via Fuse.js or List.js.

---

## A. The Claude Desktop Prompt (ready to paste)

> **Paste everything in this block into Claude Desktop.** It assumes Claude has direct read/write access to your local clone of `jezekael.github.io`.

```
You have direct access to my local git repository for my GitHub Pages site (jezekael.github.io). I want to redesign it into a dark, Mr Robot / fsociety "terminal" themed personal cybersecurity portfolio. A complete specification lives in the repo root as SPEC.md.

STEP 0 — READ FIRST, DON'T ASSUME
1. Read SPEC.md in full before writing any code. It contains the site map, file tree, design tokens, all component code (terminal hero, latest-content cards, interactive resume), the full blog-post drafts, the threat-actor map plan + JSON schemas, and the Hack-A-Sat scaffolding.
2. Inspect the existing repo first: list every file, and read index.html, attacks.html, groups.html, posts.html, about.html and any CSS/JS and data files already present. Report back a short inventory (stack, file structure, existing data files, existing map library) before changing anything.
3. PRESERVE existing content. The current site is "Cyber Footprints", a threat-research notebook with an incident map, groups, incidents and notes. Reuse its data and the incident map — the new "World Wide Threats & Actors" (WWT&A) project is the evolution of that map, not a replacement to be thrown away. Keep any real incident/group data you find.

STEP 1 — STACK DECISION (and justify it)
- Keep the site as plain static HTML + CSS + vanilla JS so it stays 100% GitHub Pages compatible with no build server. Do NOT introduce Jekyll, a bundler, npm runtime deps, or any server-side code. If you believe Jekyll or a generator is genuinely better, write your reasoning into a short STACK_DECISION.md and still default to plain static unless I approve otherwise.
- All content (blog posts list, projects, CV, threat actors, latest-content feed) must be data-driven from JSON files under /data, loaded client-side with fetch(). A single /data/content-index.json feeds the Home "latest content" cards.
- Any third-party libs (Leaflet, Fuse.js/List.js, a Markdown renderer) must be pinned, loaded from a vendored /assets/vendor/ copy or a pinned CDN with SRI, and must degrade gracefully.

STEP 2 — BUILD THE STRUCTURE
Create the folder/file tree exactly as specified in SPEC.md ("Site map & file tree"). Implement:
- Home: animated terminal hero (traffic-light title bar "fsociety@kali:~$", typewriter output describing me, blinking cursor) per SPEC's HTML/CSS/JS, then a "Latest content" grid of preview cards generated from /data/content-index.json.
- Blog: an index page listing posts from /data/posts.json, plus three post pages scaffolded from SPEC's drafts: (1) Mr Robot hack-feasibility catalogue, (2) satellite eavesdropper project, (3) Hack-A-Sat local setup guide.
- Resume: an interactive CV viewer reading /data/cv.json (timeline/cards that expand on click to show responsibilities, tech stack, achievements, links) plus a "Download PDF" button linking to /assets/cv/Jezekael_Brunon_CV.pdf.
- Projects: a landing page with two folders — Research (links to the satellite project + the WWT&A map) and Write-ups (Hack-A-Sat 2020/2021/2022 index + per-writeup template). Build the WWT&A page: a world choropleth of attacks attributed to state-linked APTs per country + a searchable table underneath, reading /data/threat-actors.json and /data/incidents.json, with the data-build script in /scripts as specified.

STEP 3 — QUALITY BARS
- Responsive (mobile-first), keyboard-accessible, semantic HTML, ARIA where needed, prefers-reduced-motion honored (typewriter + blinking cursor must stop/short-circuit when reduced motion is requested), color contrast AA on the dark theme, and a visible focus ring.
- Add SEO/meta per SPEC (title, description, Open Graph, canonical, theme-color #0d0d0d), a sensible 404.html in the terminal theme, sitemap.xml and robots.txt.
- Do NOT invent personal facts. Anywhere you need my real data (bio lines, CV entries, project results, photos, PDF), insert a clearly-marked <!-- TODO(jezekael): ... --> placeholder and list every one at the end in a CHECKLIST.md. Use the SPEC's placeholder text verbatim where provided.
- Attribute all external sources in the posts as SPEC specifies; never paste copyrighted text verbatim.

STEP 4 — COMMITS
Work in small, incremental commits with clear messages (e.g. "feat(home): terminal hero", "feat(data): content-index schema", "feat(projects): WWT&A map"). After each major section, pause and summarize what changed. Do not force-push or rewrite history. Do not delete files without telling me.

When done, output: the final file tree, the contents of CHECKLIST.md (everything I must still supply), and any STACK_DECISION.md reasoning.
```

---

## B. Companion `SPEC.md` (full content)

> Save everything below as `SPEC.md` in the repo root.

### B.1 Project overview & goals

Redesign the existing **Cyber Footprints** static site into a Mr Robot / fsociety-themed personal cybersecurity portfolio while preserving the existing threat-intel notebook content (incidents, groups, notes, the incident map). Four top-level sections: **Home, Blog, Resume, Projects**. Everything is static and GitHub-Pages-native; all dynamic content is JSON-driven and loaded client-side.

### B.2 Site map & file tree

```
/
├── index.html                  # Home: terminal hero + latest-content cards
├── blog/
│   ├── index.html              # Blog index (reads /data/posts.json)
│   ├── mr-robot-hacks.html     # Post 1: Mr Robot feasibility catalogue
│   ├── satellite-eavesdropper.html  # Post 2: satellite SDR/GEO project
│   └── hack-a-sat-setup.html   # Post 3: HAS local setup guide
├── resume/
│   └── index.html              # Interactive CV viewer (reads /data/cv.json)
├── projects/
│   ├── index.html              # Projects landing: Research + Write-ups folders
│   ├── research/
│   │   ├── index.html          # Research folder index
│   │   └── wwta.html           # World Wide Threats & Actors map + table
│   └── writeups/
│       ├── index.html          # Write-ups folder index
│       └── hack-a-sat/
│           ├── index.html      # HAS writeups landing (2020/2021/2022)
│           ├── 2020.html
│           ├── 2021.html
│           └── 2022.html
├── attacks.html                # PRESERVED (incident list) — re-skinned
├── groups.html                 # PRESERVED (groups) — re-skinned
├── about.html                  # PRESERVED/merged into Resume or kept
├── 404.html                    # terminal-themed
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── css/
│   │   ├── tokens.css          # design tokens (vars)
│   │   ├── base.css            # reset + typography
│   │   └── components.css      # terminal, cards, timeline, map, table
│   ├── js/
│   │   ├── terminal.js         # typewriter hero
│   │   ├── content-index.js    # renders latest-content cards
│   │   ├── posts.js            # blog index renderer
│   │   ├── cv.js               # interactive resume
│   │   ├── wwta.js             # map + searchable table
│   │   └── util.js             # fetch helpers, date fmt, md render
│   ├── vendor/                 # pinned Leaflet, Fuse.js, etc. (SRI)
│   ├── img/
│   └── cv/Jezekael_Brunon_CV.pdf   # TODO(jezekael): supply
├── data/
│   ├── content-index.json      # unified latest-content feed
│   ├── posts.json              # blog metadata
│   ├── cv.json                 # resume data
│   ├── projects.json           # projects metadata
│   ├── threat-actors.json      # WWT&A actors (built by script)
│   ├── incidents.json          # WWT&A incidents (built by script, reuses existing)
│   └── countries.topo.json     # world topology for choropleth
├── scripts/
│   └── build-threat-data.mjs   # join MITRE/CFR/ETDA/MISP → data/*.json
├── SPEC.md
├── STACK_DECISION.md           # (optional, created by Claude)
└── CHECKLIST.md                # (created by Claude)
```

### B.3 Design system

**Why plain static over Jekyll.** The current site is already hand-authored HTML with a client-side map; a generator would add a build step, Ruby/gem management and template churn for no functional gain on a small personal site. Plain static keeps edit-render loops instant, keeps GitHub Pages happy with zero config, and lets all content be JSON-driven. Recommend Jekyll only if the blog grows past ~30 posts and Markdown authoring becomes a chore.

**Color tokens** (`tokens.css`):

```css
:root{
  --bg:#0d0d0d;            /* near-black page background */
  --bg-elev:#121212;       /* elevated surfaces */
  --term-bg:#0a0a0a;       /* terminal window body */
  --term-border:#232323;   /* subtle window border */
  --titlebar:#1b1b1b;      /* terminal title bar */
  --text:#e6e6e6;          /* primary text (commands = white-ish) */
  --muted:#8a8a8a;         /* gray output */
  --green:#39ff7a;         /* $ prompt / accent (fsociety green) */
  --green-dim:#27c45f;
  --red:#ff5f56;           /* traffic light */
  --yellow:#ffbd2e;        /* traffic light */
  --grn-dot:#27c93f;       /* traffic light */
  --amber:#ffb86c;         /* [+] status lines */
  --link:#39ff7a;
  --danger:#ff5f56;
  --radius:10px;
  --gap:1rem;
  --maxw:1080px;
  --mono:'JetBrains Mono','Fira Code',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
  --sans:'Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
}
@media (prefers-reduced-motion: reduce){
  *{animation:none!important;transition:none!important}
}
```

**Typography.** Monospace **JetBrains Mono** (fallback Fira Code) for the terminal, headings and code; **Inter**/system sans for long-form body copy. Load fonts self-hosted in `/assets/vendor/fonts` or via a pinned provider with `font-display:swap`.

**Spacing/scale.** 4-pt base; spacing steps 4/8/12/16/24/32/48; max content width `--maxw` 1080px; body line-height 1.6; code line-height 1.5.

**Components.** Terminal window (title bar + traffic lights + body), preview card, timeline item (collapsed/expanded), searchable table, choropleth map container, tag/pill, nav bar, footer. All must meet WCAG AA contrast on `#0d0d0d` and show a visible focus outline (`outline:2px solid var(--green)`).

**Navigation** (all pages, prashsiv-style minimal): `CF` logo left → `Home · Blog · Projects · Resume` right. Keep the old Attacks/Groups/Notes reachable under Projects → Research or a secondary nav so no content is orphaned.

### B.4 Terminal hero — HTML / CSS / JS

**HTML** (in `index.html`):

```html
<section class="term-hero" aria-label="Introduction terminal">
  <div class="term-window">
    <div class="term-titlebar">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="term-title">fsociety@kali:~$</span>
    </div>
    <pre class="term-body" id="term" aria-live="polite"></pre>
  </div>
</section>
```

**CSS** (`components.css`):

```css
.term-hero{display:flex;justify-content:center;padding:3rem 1rem}
.term-window{width:min(100%,760px);background:var(--term-bg);
  border:1px solid var(--term-border);border-radius:var(--radius);
  box-shadow:0 10px 40px rgba(0,0,0,.6);overflow:hidden;font-family:var(--mono)}
.term-titlebar{display:flex;align-items:center;gap:.5rem;
  background:var(--titlebar);padding:.6rem .8rem}
.dot{width:12px;height:12px;border-radius:50%}
.dot-red{background:var(--red)} .dot-yellow{background:var(--yellow)}
.dot-green{background:var(--grn-dot)}
.term-title{margin-left:.6rem;color:var(--muted);font-size:.85rem}
.term-body{margin:0;padding:1.1rem 1.2rem;min-height:260px;
  color:var(--text);font-size:.95rem;line-height:1.6;white-space:pre-wrap}
.term-body .prompt{color:var(--green)}      /* green $ */
.term-body .cmd{color:#fff}                  /* white command */
.term-body .out{color:var(--muted)}          /* gray output */
.term-body .ok{color:var(--amber)}           /* [+] lines */
.cursor{display:inline-block;width:.6ch;background:var(--green);
  animation:blink 1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
```

**JS** (`terminal.js`) — typewriter that honors reduced motion and is fully data-driven:

```js
const lines = [
  {type:'prompt', text:'$ ', cmd:'whoami'},
  {type:'out', text:'jezekael — cybersecurity student & offensive-security tinkerer'}, // TODO(jezekael): confirm
  {type:'prompt', text:'$ ', cmd:'echo "Ready to explore?"'},
  {type:'out', text:'Ready to explore?'},
  {type:'prompt', text:'$ ', cmd:'./start_learning.sh'},
  {type:'ok', text:'[+] Initializing hack database...'},
  {type:'ok', text:'[+] Loading 21 exploits...'},
  {type:'ok', text:'[+] Access granted.'},
  {type:'prompt', text:'$ ', cmd:'cat skills.txt'},
  {type:'out', text:'recon · web · network · RF/SDR · CTF · threat-intel'}, // TODO(jezekael): confirm
];
const el = document.getElementById('term');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const sleep = ms => new Promise(r=>setTimeout(r,ms));

async function typeLine(line){
  if(line.type==='prompt'){
    const span=document.createElement('span');
    span.className='prompt'; span.textContent=line.text; el.appendChild(span);
    const c=document.createElement('span'); c.className='cmd'; el.appendChild(c);
    for(const ch of line.cmd){ c.textContent+=ch; if(!reduce) await sleep(38); }
  } else {
    const span=document.createElement('span');
    span.className = line.type==='ok' ? 'ok' : 'out';
    span.textContent = line.text; el.appendChild(span);
  }
  el.appendChild(document.createTextNode('\n'));
}
async function run(){
  if(reduce){ // render instantly
    lines.forEach(l=>{ typeLine(l); });
  } else {
    for(const l of lines){ await typeLine(l); await sleep(260); }
  }
  const cur=document.createElement('span');
  cur.className='prompt'; cur.textContent='$ '; el.appendChild(cur);
  const blink=document.createElement('span'); blink.className='cursor'; blink.textContent='\u00A0';
  el.appendChild(blink);
}
run();
```

> **Content note:** the "Loading 21 exploits" line matches the screenshot; swap the `whoami`/`skills` output for the user's real bio (TODO placeholders above).

### B.5 Latest-content cards (Home)

`data/content-index.json` — single source feeding the Home feed; each entry is a post, project or writeup:

```json
[
  {
    "type": "blog",
    "title": "How realistic are the hacks in Mr. Robot?",
    "slug": "/blog/mr-robot-hacks.html",
    "date": "2026-02-01",
    "summary": "A hack-by-hack feasibility catalogue with realism ratings.",
    "tags": ["mr-robot","analysis"]
  },
  {
    "type": "project",
    "title": "Satellite eavesdropper station",
    "slug": "/projects/research/index.html#satellite",
    "date": "2026-01-15",
    "summary": "An SDR ground station for satellite downlinks.",
    "tags": ["sdr","rf","satellite"]
  },
  {
    "type": "writeup",
    "title": "Hack-A-Sat 2022 — write-ups",
    "slug": "/projects/writeups/hack-a-sat/2022.html",
    "date": "2026-01-02",
    "summary": "Selected HAS3 qualifier solutions.",
    "tags": ["ctf","space","hack-a-sat"]
  }
]
```

`content-index.js` fetches it, sorts by `date` desc, takes the newest N (default 6), and renders cards:

```js
import { fmtDate } from './util.js';
const grid = document.getElementById('latest');
const N = 6;
fetch('/data/content-index.json').then(r=>r.json()).then(items=>{
  items.sort((a,b)=> b.date.localeCompare(a.date));
  grid.innerHTML = items.slice(0,N).map(i=>`
    <a class="card" href="${i.slug}">
      <span class="pill pill-${i.type}">${i.type}</span>
      <h3>${i.title}</h3>
      <p class="out">${i.summary}</p>
      <time class="muted">${fmtDate(i.date)}</time>
    </a>`).join('');
});
```

### B.6 Interactive resume + JSON schema

`data/cv.json`:

```json
{
  "name": "TODO(jezekael): Full name",
  "headline": "TODO(jezekael): e.g. Cybersecurity student — offensive security & RF",
  "location": "TODO(jezekael): City, Country",
  "links": { "github":"https://github.com/Jezekael", "linkedin":"TODO", "email":"TODO" },
  "pdf": "/assets/cv/Jezekael_Brunon_CV.pdf",
  "experience": [
    {
      "id": "exp1",
      "role": "TODO(jezekael): role",
      "org": "TODO(jezekael): org",
      "start": "2024-XX", "end": "present",
      "summary": "One-line summary shown collapsed.",
      "details": {
        "responsibilities": ["TODO"],
        "stack": ["TODO"],
        "achievements": ["TODO"],
        "links": [{"label":"TODO","url":"TODO"}]
      }
    }
  ],
  "education": [
    { "id":"edu1","school":"TODO(jezekael): INSA Lyon?","program":"TODO",
      "start":"20XX","end":"20XX","details":{"notes":["TODO"]} }
  ],
  "skills": { "offensive":["TODO"], "rf_sdr":["TODO"], "languages":["TODO"] },
  "certifications": [ { "name":"TODO","issuer":"TODO","year":"20XX" } ]
}
```

`cv.js` renders a timeline where each item is a `<button>`/`<details>` that expands to show `details`; the PDF button links to `cv.pdf`:

```js
fetch('/data/cv.json').then(r=>r.json()).then(cv=>{
  document.getElementById('cv-name').textContent = cv.name;
  document.getElementById('cv-pdf').href = cv.pdf;
  const wrap = document.getElementById('cv-timeline');
  const render = (items, kind) => items.map(e=>`
    <details class="tl-item" id="${e.id}">
      <summary>
        <span class="tl-dot"></span>
        <span class="tl-role">${e.role||e.program}</span>
        <span class="tl-org">${e.org||e.school}</span>
        <span class="tl-dates muted">${e.start} – ${e.end}</span>
      </summary>
      <p class="out">${e.summary||''}</p>
      ${e.details?.responsibilities?`<h4>Responsibilities</h4><ul>${e.details.responsibilities.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}
      ${e.details?.stack?`<h4>Tech stack</h4><p>${e.details.stack.join(' · ')}</p>`:''}
      ${e.details?.achievements?`<h4>Achievements</h4><ul>${e.details.achievements.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}
      ${e.details?.links?e.details.links.map(l=>`<a href="${l.url}">${l.label}</a>`).join(' · '):''}
    </details>`).join('');
  wrap.innerHTML = render(cv.experience,'exp') + render(cv.education,'edu');
});
```

Accessibility: `<details>/<summary>` gives native keyboard toggling; add `aria-expanded` sync if you replace it with buttons.

### B.7 Blog post 1 — "How realistic are the hacks in Mr. Robot?" (full draft)

> **Attribution rule:** paraphrase, don't copy. Cite sources inline as named links (Kor Adana interviews; the Mr. Robot Hacks Database by William Thomas; Rolling Stone, Forbes, Avast, Dark Reading, The Globe and Mail/KPMG, Wikipedia episode pages). The consolidated catalogue + ratings is the original contribution.

**Intro.** *Mr. Robot* is widely called the most technically accurate hacking show ever made, largely because writer and technology producer **Kor Adana** — a former corporate network-security analyst — builds each hack with a team of advisers and discards anything that isn't realistic. This post catalogues the show's notable hacks, the real tools behind them, and rates each on a feasibility scale. It complements (rather than copies) existing per-scene breakdowns such as William Thomas's *Mr. Robot Hacks Database* and Adana's own interviews.

**Feasibility scale.** 🟢 Realistic (works today with off-the-shelf kit) · 🟡 Plausible but dramatized (real technique, compressed/idealized) · 🔴 Hollywood (fun, not real).

| # | Hack (episode) | Technique & real tools | Rating |
|---|----------------|------------------------|--------|
| 1 | **Tor exit-node monitoring** (S1E1) | Running/monitoring Tor exit nodes can expose unencrypted exit traffic, but not deanonymize hidden services at will; Elliot's framing is directionally real. | 🟡 |
| 2 | **Password cracking of therapist/Tyrell** (S1) | Dictionary/rule attacks seeded with personal OSINT; real-world equivalent is **John the Ripper**/hashcat with a custom wordlist (the on-screen tool is fictional). | 🟢 |
| 3 | **DDoS on Allsafe/E Corp as a cover** (S1E1) | Volumetric DDoS as a distraction while a rootkit is planted — standard blue-team reality. | 🟢 |
| 4 | **CD/RAT drop by the Dark Army** (S1) | Malicious media delivering a Remote Access Trojan (webcam/keylogger); steganography via DeepSound on audio CDs. | 🟢 |
| 5 | **RFID badge cloning at Steel Mountain** (S1E5) | Proximity badge cloning with a concealed long-range reader (e.g. Proxmark-class) — a soccer-mom minivan and hotel entry are the dramatized bits. | 🟢 |
| 6 | **Social engineering + fake Wikipedia identity** (S1E5) | Pretexting backed by a planted web footprint; the single most reliable "hack" in the show. | 🟢 |
| 7 | **Raspberry Pi on Steel Mountain HVAC → BACnet** (S1E5–S2) | A Pi with a cellular modem behind a thermostat bridges to the building-management system over **BACnet**, which frequently runs unauthenticated, to raise temperature and cook LTO backup tapes. Experts (microcontrollertips, Forbes/Bazzell, Nightfall) call the vector real; the melt-the-tapes timeline is compressed. | 🟡 |
| 8 | **Femtocell drop at FBI/E Corp** (S2) | A reflashed **femtocell** acts as a rogue base station / IMSI-catcher to intercept cellular traffic and pivot into the network; Angela plants it and runs a prepared script. Adana has described this scene's design. | 🟡 |
| 9 | **USB drop in prison parking lot** (S1E6) | Baiting with malware-laden USB sticks; an officer inserts one. Antivirus catching it on-screen (Avast) is a real outcome. | 🟢 |
| 10 | **Bluetooth keyboard spoofing of a police car** (S1E6) | Brute-forcing/spoofing a Bluetooth link to a squad-car laptop to push malware into the prison system — plausible in principle, idealized in speed/range. | 🟡 |
| 11 | **Rootkit / "control the whole network"** (S1) | Persistence via rootkit after initial access — real; the total, instant control is dramatized. | 🟡 |
| 12 | **"Hacking the FBI unclassified network"** (S2) | Built on the femtocell + realistic discussion of FBI unclassified network segmentation per Adana; plausible as portrayed, not a magic button. | 🟡 |

**Tooling appendix.** The show's realism toolkit maps to **Kali Linux**, **Metasploit**, the **Social-Engineer Toolkit (SET)**,\[10\] **John the Ripper**/hashcat, **Nmap**, **Wget/curl**, **Proxmark-class RFID tools**, SDR/femtocell gear, and custom Python — the same stack pentesters actually use. Close with: *the show's real lesson is that the reliable attack vector is almost always a person, not a zero-day.*

### B.8 Blog post 2 — "Satellite eavesdropper station" (template with placeholders)

> This is a **template**; the user supplies their own hardware/results. Anchor the "why this is interesting now" section to credible public research.

**Sections:**
1. **Goal.** What the station is meant to receive (choose: weather imagery, L-band downlinks, or passive GEO IP study). `TODO(jezekael): state your actual goal.`
2. **Background / why now.** Summarize the 2025 **"Don't Look Up"** GEO study (UCSD + University of Maryland; CCS 2025 Distinguished Paper): with an ~$800 consumer dish + TV-tuner card scanning from a rooftop over roughly three years, researchers observed 39 GEO satellites across 25 distinct longitudes with 411 transponders and found "50 percent of GEO links contained cleartext IP traffic" (cellular backhaul, in-flight Wi-Fi, VoIP, corporate and critical-infrastructure links, some military/government).\[8\] Note that the authors stress it was **fully passive**\[8\] and legally reviewed. Also note the hobbyist landscape shift: NOAA retired its last APT weather satellites in 2025 (NOAA-18 June 6, NOAA-19 August 13, NOAA-15 August 19), ending classic 137 MHz NOAA APT reception and pushing enthusiasts to Meteor-M2 LRPT, GOES and GEO work.
3. **Hardware.** `TODO`: dish/antenna (e.g. QFH/turnstile for 137 MHz LRPT, offset dish + LNB for Ku-band GEO), SDR (RTL-SDR / Airspy / etc.), LNA/filters, rotator/motor, mount.
4. **Software stack.** Candidates: **SatDump**, **GNU Radio**, **gr-satellites**, and for the GEO IP-study path the open-source **"dontlookup" DVB-S2(X) IP packet extractor**.\[8\] `TODO`: which you used and config.
5. **Legal & ethical considerations.** Reception rules vary by country; passively receiving is treated differently from decoding/using private traffic. Follow responsible-disclosure norms if you ever observe unencrypted sensitive data; do not act on intercepted content. Cite the study's ethics/disclosure framing and the NSA VSAT guidance it references.\[8\] `TODO`: your jurisdiction's rules.
6. **Results.** `TODO(jezekael): captures, decoded images/telemetry, screenshots, lessons learned.`
7. **References.** Link the UCSD SATCOM project page and paper, SatDump/gr-satellites, and NOAA's decommissioning notices.

### B.9 Blog post 3 — "Set up Hack-A-Sat challenges locally" (step-by-step)

**Prerequisites.** Linux host (or WSL2), **Docker** + build tools, `git`, `socat`, and patience for building emulator/toolchain base images. All challenge code is MIT-licensed by Cromulence.

**Repos.**
- 2020 (HAS1) qualifier: `github.com/cromulencellc/hackasat-qualifier-2020` (branch `master`)
- 2021 (HAS2) qualifier: `github.com/cromulencellc/hackasat-qualifier-2021` (branch `main`)
- 2022 (HAS3) qualifier: `github.com/cromulencellc/hackasat-qualifier-2022` (branch `release`)
- Tech-paper solution repos: `-techpapers` variants per year; finals under `hackasat-final-2020`, `hackasat-final-2021`, `hackasat-finals-2022`, `hackasat-finals-2023`.

**What's included vs not.** Released: all challenge source, solvers, and per-challenge build infra.\[9\] **Not** released: the game host infra, scoreboard, and the `ticket-taker` / `lifecycle-manager` / `sat-solver` programs.\[9\] During the live event `ticket-taker` turned a team **ticket** into a `SEED` and `FLAG` and launched the container with those env vars; locally you supply them yourself.

**Steps.**
1. Clone a year's repo and read the root `README.md` (category→folder map) and the per-challenge `README.md`.
2. If a challenge uses a generator, build the base image first: `cd generator-base && make` (2021/2022 also need `microblaze-user-toolchain` for `small_hashes_anyways`, `ominous_etude`, `blazing_etudes`;\[9\] 2020 needs `qemu-sparc`, `rtems`, and `vmips-mips-emulator`\[11\] for the SPARC/LaunchLink challenges).
3. Build the challenge: `cd <challenge> && make build` (produces `<name>:generator`, `<name>:challenge`, `<name>:solver` as applicable).
4. Generate per-seed files (if required):
   ```
   docker run -t --rm -v "$PWD/out":/out -e SEED=1234 -e FLAG='flag{test}' <name>:generator
   ```
5. Run the challenge locally:
   ```
   # simple
   docker run --rm -i -e SEED=1234 -e FLAG='flag{test}' <name>:challenge
   # with generated files
   docker run --rm -i -e DIR=/mnt -v "$PWD/out":/mnt -e SEED=1234 -e FLAG='flag{test}' <name>:challenge
   # expose a port without xinetd
   socat -v tcp-listen:5000,reuseaddr "exec:docker run --rm -i -e SEED=1234 -e FLAG='flag{test}' <name>\:challenge"
   ```
   (Escape colons inside the `exec:` string with backslashes.)\[9\]
6. Verify with the solver:
   ```
   docker run -it --rm -e HOST=127.0.0.1 -e PORT=5000 <name>:solver
   ```
7. To reproduce the exact instance a team got in the live game, use the year's **tickets→seeds "decoder ring" CSV** in the repo root (`tickets_export_*.csv` / `2022_tickets_export_2022_06_27.csv`).

**Common pitfalls.** Forgetting to build `generator-base`/toolchain first; missing `SEED`/`FLAG` env vars; colon-escaping in `socat`; emulator images (QEMU-SPARC, vmips, MicroBlaze) being slow/large to build; solvers implement *a* solution not *the* only one;\[9\] some challenges need a managed connection (`SERVICE_HOST`/`SERVICE_PORT`) the local infra doesn't replicate.

### B.10 Projects → Research → "World Wide Threats & Actors" (WWT&A)

**Goal.** A world **choropleth** shading each country by the number of attacks attributed to state-linked APT groups, with a searchable "database" table beneath listing groups (aliases, suspected sponsor, first-seen, targets) and incidents.

**Recommended architecture (static-friendly).**
- **Map:** Leaflet + a GeoJSON/TopoJSON world (`countries.topo.json`) with a data-join to per-country counts; or D3 + TopoJSON if you want a pure-SVG choropleth. Leaflet is simpler and already likely present from the existing incident map — reuse it.
- **Search/table:** client-side with **Fuse.js** (fuzzy) or **List.js** (sortable/filterable table) over `threat-actors.json`.
- **Data build:** a Node script (`scripts/build-threat-data.mjs`) pre-joins sources at author-time into static JSON so the page ships no backend.

**Data sources, formats & licensing.**

| Source | What | Format | License / terms |
|--------|------|--------|-----------------|
| **MITRE ATT&CK Groups** (`mitre-attack/attack-stix-data`) | APT group profiles, aliases, techniques | STIX 2.1 JSON | ATT&CK Terms of Use — free for research & commercial; must reproduce MITRE copyright line |
| **CFR Cyber Operations Tracker** | State-sponsored incidents since 2005, suspected sponsor, type, victims | CSV export | CFR terms; attribute CFR Digital & Cyberspace Policy program |
| **ETDA/ThaiCERT Threat Group Cards** | 504 groups (as of 16 Aug 2025), country, tools, sectors | JSON + MISP galaxy export | TLP:WHITE; attribute ETDA/ThaiCERT |
| **MISP galaxy `threat-actor.json`** | Actor clusters, synonyms, country, refs | JSON | CC0 1.0 **or** 2-clause BSD |
| **EuRepoC Global Dataset** | 3,400+ coded cyber incidents, initiators/receivers | CSV/XLSX/JSON (Zenodo) | **CC-BY-NC 4.0** (non-commercial) — keep attribution; fine for a personal site |

> **Licensing call:** default the map to **MITRE ATT&CK + MISP galaxy** (most permissive) for actor profiles and **CFR** for state-attribution counts; treat **EuRepoC** as optional enrichment because of its non-commercial clause. Always reproduce each source's required attribution in a page footer.

**`data/threat-actors.json` schema:**

```json
[
  {
    "id": "G0007",
    "name": "APT28",
    "aliases": ["Fancy Bear","Sofacy","Sednit"],
    "suspected_sponsor": "Russia",
    "country_iso3": "RUS",
    "first_seen": "2004",
    "last_seen": "2025",
    "motivation": ["espionage"],
    "target_sectors": ["government","defense","media"],
    "target_countries_iso3": ["UKR","USA","DEU"],
    "sources": {
      "mitre": "https://attack.mitre.org/groups/G0007/",
      "etda": "https://apt.etda.or.th/cgi-bin/showcard.cgi?g=...",
      "misp_uuid": "..."
    },
    "incident_count": 42
  }
]
```

**`data/incidents.json` schema** (reuses the existing Cyber Footprints incidents where possible):

```json
[
  {
    "id": "inc-2015-tv5monde",
    "title": "TV5Monde broadcast sabotage",
    "year": 2015,
    "actor_id": "G0007",
    "sponsor_country_iso3": "RUS",
    "victim_countries_iso3": ["FRA"],
    "type": "sabotage",
    "sources": ["https://www.cfr.org/cyber-operations/..."]
  }
]
```

**`scripts/build-threat-data.mjs` outline:**

```js
// 1. Load MITRE attack-stix-data enterprise bundle (intrusion-set objects).
// 2. Load MISP galaxy threat-actor.json; map synonyms + country.
// 3. Parse CFR Cyber Operations Tracker CSV into incidents[].
// 4. (Optional) Parse EuRepoC JSON; filter to state-attributed incidents.
// 5. Normalize country names -> ISO3 (use a small lookup table).
// 6. Join: for each actor, compute incident_count and target_countries.
// 7. Aggregate per sponsor_country_iso3 -> counts for the choropleth.
// 8. Write data/threat-actors.json, data/incidents.json, data/country-counts.json.
// Deterministic, run at author-time; commit outputs so Pages serves static JSON.
```

**`wwta.js` behavior:** load `country-counts.json`, color each country by count (sequential green scale on the dark theme), tooltip on hover with top actors, click a country to filter the table; Fuse.js search box filters actors by name/alias/sponsor; table columns: Group · Aliases · Sponsor · First seen · Target sectors · Incidents · Sources.

### B.11 Projects → Write-ups → Hack-A-Sat scaffold (per-year challenge index)

Each year page gets a **challenge index** (category → challenge → folder) plus a **per-writeup template** (challenge name, category, difficulty, tools, approach, solution steps, flag-redacted, source link to the Cromulence folder). Use `<details>` per challenge so the index is scannable.

**2020 (HAS1) qualifier categories & challenges** (external → internal folder):
- *Space Cadets:* Lt. Cmdr. Data→`basic-file`, Lt. Starbuck→`basic-service`, Capt. Solo→`basic-handoff`\[11\]
- *AAAA:* I Like to Watch→`beckley`, Attitude Adjustment→`attitude`, Seeing Stars→`centroids`, Digital Filters, Meh→`filter`, SpaceBook→`spacebook`, My 0x20→`myspace`\[11\]
- *Satellite Bus:* Magic Bus→`bus`, Bytes Away!→`patch`, Sun? On My Sat?→`sparc1`, Monkey in the Middle→`chagford`, Sun? On My Sat? Again?→`sparc2`\[11\]
- *Ground Segment:* Track the Sat→`antenna`, Can you hear me now?→`verizon`, Talk to me, Goose→`goose`, I see what you did there→`rbs_m2`, Vax the Sat→`vaxthesat`\[11\]
- *Communication System:* Phasors to Stun→`phasor`, 56K Flex Magic→`modem`, Phasors to Kill→`phasor2`, Ground Control to Major Tom→`major_tom`, Something's Out There→`nena`\[11\]
- *Payload Modules:* That's not on my calendar→`monroe`, SpaceDB→`spacedb`, Space Race→`spacerace`, Leaky Crypto→`leaky`, LaunchLink→`rfmagic`\[11\]
- *Space and Things:* Where's the Sat?→`jackson`, Don't Tweet That Picture→`tweet`, Good Plan? Great Plan!→`mission`, 1201 Alarm→`apollo_gcm`, Rogue Base Station→`rogue`\[11\]

**2021 (HAS2) qualifier categories & challenges:**
- *Launch Pad:* Cape Canaveral→`basic-file`, Vandenberg→`basic-service`, Edwards→`basic-handoff`\[12\]
- *Guardians of the…:* Fiddlin' John Carson→`kepler`, Cotton Eye GEO→`kepler2`, Linky→`linky`, Saving Spinny→`spinny`, Mr. Radar→`radar`\[12\]
- *Deck 36, Main Engineering:* Quaternion→`quaternion`, Problems are Mounting→`problems`, Hindsight→`hindsight`, Take Out the Trash→`trash`\[12\]
- *Rapid Unplanned Disassembly:* tree in the forest→`treefall`, Mars or Bust→`mars`, Mongoose Mayhem→`mongoose`, amogus→`amogus`, Grade F Prime Beef→`fprime`\[12\]
- *We're On the Same Wavelength:* iq→`iq`, Bit Flipper→`bitflipper`, credence clearwater space data systems→`noise`, Error Correction→`errcorr`\[12\]
- *Presents from Marco:* groundead→`groundead`, King's Ransom→`kings`, King's Ransom 2→`kings2`\[12\]

**2022 (HAS3) qualifier categories & challenges:**
- *The Danger Room:* Juggernaut→`basic_file`, Magneto→`basic_service`, Prof. X→`basic_handoff`\[9\]
- *Crypto Category Placeholder Name:* Black Hole→`black_hole`, Leggo My Steggo!→`leggo_my_stego`, Screaming Fist→`screaming_fist`, Welcome to the Spiderverse→`spiderverse`\[9\]
- *I Can Haz Satellite:* F'DA Approved Beef→`fda_approved_beef`, Fun in the Sun→`sunfun`, Red Alert→`red_alert`\[9\]
- *Revenge of the Space Math:* (Don't) Fly Me to the Moon→`fly_me_to_the_moon`, Crosslinks→`crosslinks`, Matters of State→`matters_of_state`, Navigation Rebooting→`crosslinks` (2nd)\[9\]
- *Rocinante Strikes Back:* Once Unop a Djikstar→`dijkstar`, Stars Above→`starsabove`, The Authenticator Equivalence Principle→`authentication_equivalence_principle`, The Wrath of Khan→`khan`\[9\]
- *The Only Good Bug is a Dead Bug:* Bit Flipper→`bitflipper`, Blazin' Etudes→`blazing_etudes`, It's A Wrap→`its_a_wrap`, Ominous Etude→`ominous_etude`, Small Hashes Anyways→`small_hashes_anyways`\[9\]
- *We Get Signal:* Doppler→`doppler`, Power Level→`power_level`, Power Point→`power_point`, Space Jam→`space_jam`\[9\]

**Per-writeup template:**

```markdown
## <Challenge Name>  ·  <Category>  ·  Difficulty: <1–3>
**Folder:** cromulencellc/hackasat-qualifier-<YEAR>/<folder>
**Tools:** <pwntools, GNU Radio, Python, ...>
### Recon
### Approach
### Solution (steps)
### Flag
flag{REDACTED}
### Notes / references
```

### B.12 Navigation, SEO & meta

Every page `<head>`:

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><!-- page --> · Cyber Footprints</title>
<meta name="description" content="<!-- page-specific -->">
<link rel="canonical" href="https://jezekael.github.io/<path>">
<meta name="theme-color" content="#0d0d0d">
<meta property="og:type" content="website">
<meta property="og:title" content="<!-- page -->">
<meta property="og:description" content="<!-- page-specific -->">
<meta property="og:image" content="https://jezekael.github.io/assets/img/og-default.png">
<meta name="twitter:card" content="summary_large_image">
```

Add `sitemap.xml`, `robots.txt` (allow all, point to sitemap), and a terminal-themed `404.html` that prints `$ cat page.html → cat: page.html: No such file or directory` with a link home.

### B.13 Accessibility & performance

- Honor `prefers-reduced-motion` (terminal renders instantly, cursor stops blinking).
- Semantic landmarks (`<header><nav><main><footer>`), skip-link, `aria-live="polite"` on the terminal, `alt` text on images.
- AA contrast on `#0d0d0d`; visible focus ring in fsociety green.
- Lazy-load the map library only on `wwta.html`; defer non-critical JS; self-host or SRI-pin vendor libs.

### B.14 CHECKLIST — what the user must supply

- [ ] Confirm name/handle shown in the terminal (`whoami`) and real bio/skills lines.
- [ ] CV data for `data/cv.json` (experience, education, skills, certs, links).
- [ ] `assets/cv/Jezekael_Brunon_CV.pdf` (the downloadable résumé).
- [ ] Profile photo / OG image (`assets/img/og-default.png`).
- [ ] Satellite project specifics (goal, hardware, software, legal notes, results, captures).
- [ ] Confirm which existing Cyber Footprints data files/map library are present so they can be reused.
- [ ] Any real Hack-A-Sat write-up content the user wants published (vs. just the scaffold).
- [ ] Decide EuRepoC inclusion given its non-commercial license.
- [ ] LinkedIn/GitHub/email URLs for the nav/footer.

## Caveats

- The individual sub-pages of the current site (`about.html`, `groups.html`, `attacks.html`, `posts.html`) could not be fetched during research, and the owner's identity/bio is inferred, not confirmed — Claude must inventory the real repo first and the user must fill the TODO placeholders; nothing personal should be invented.
- prashsiv.com already publishes an episode-by-episode Mr Robot series; the user's post is deliberately scoped as a single consolidated feasibility catalogue to avoid duplicating that format.
- The "Don't Look Up" research is passive and was legally reviewed by its authors; the satellite post must foreground legality/ethics for the user's own jurisdiction and must not encourage acting on intercepted traffic.
- Threat-intel datasets disagree on attribution and counts; the WWT&A map shows *suspected* state attribution and must label it as such and cite every source's required attribution. EuRepoC is CC-BY-NC.
- Hack-A-Sat challenge→folder names include a few mismatches between READMEs and actual folders (noted inline); Claude should verify folder names against the live repo when scaffolding links.

## Sources

1. [Cyber Footprints](https://jezekael.github.io/index.html)
2. [Jezekael Brunon - Offensive Cyber Security Consultant - AKVIZE (ex CloudixIO)](https://www.linkedin.com/in/jezekael-brunon/)
3. [prashsiv](https://prashsiv.com/)
4. [Mr. Robot Hacking Wiki - Complete Technical Reference](https://joasantonio.com/mrrobot.html)
5. ['Mr. Robot': Four of the Show's Best Hacks, Explained](https://www.rollingstone.com/culture/culture-news/mr-robot-four-of-the-shows-best-hacks-explained-180924/)
6. [Mr. Robot was our favorite show of 2015](https://blog.avast.com/2015/12/29/mr-robot-was-our-favorite-show-of-2015/)
7. [Aaron Schulman, Associate Professor](https://cseweb.ucsd.edu//~schulman/)
8. [🛰️ SATCOM Security](https://satcom.sysnet.ucsd.edu/)
9. [GitHub - cromulencellc/hackasat-qualifier-2022](https://github.com/cromulencellc/hackasat-qualifier-2022)
10. [Mr. Robot Hacks - Hackers Arise](https://hackers-arise.com/category/mr-robot/)
11. [GitHub - cromulencellc/hackasat-qualifier-2020: Open source release of challenges and other code used in the Hack-A-Sat Qualifier in 2020.](https://github.com/cromulencellc/hackasat-qualifier-2020)
12. [GitHub - cromulencellc/hackasat-qualifier-2021: Open source release of challenges and other code used in the Hack-A-Sat 2 Qualifier in 2021.](https://github.com/cromulencellc/hackasat-qualifier-2021)
