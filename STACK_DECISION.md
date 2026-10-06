# Stack decision

## Verdict: stay plain static HTML + CSS + vanilla JS

The existing site is hand-authored static HTML with a client-side Leaflet map and
JSON-driven content. A generator (Jekyll, Astro, etc.) would add a build step,
dependency management, and template churn for no functional gain on a small
personal site. Plain static keeps the edit → render loop instant, keeps GitHub
Pages happy with zero config (`.nojekyll` is present), and lets all content stay
JSON-driven and loaded client-side with `fetch()`.

Recommend revisiting a generator only if the blog grows past ~30 posts and
hand-authoring Markdown becomes a chore.

## Two deliberate deviations from `GuideFOrSite.md`

The SPEC proposed a specific nested file tree and a TopoJSON choropleth. Both were
adjusted for lower risk and less breakage, while keeping the SPEC's intent intact.

### 1. Flat file layout instead of nested `blog/`, `resume/`, `projects/` folders

The SPEC's nested tree would change every page's relative paths (`./assets/…` →
`../assets/…`) and break the data-loading helpers in `common.js`, which fetch
`data/*.json` relative to the current page. Keeping every page at the repo root
means asset, data, and `fetch()` paths are identical on every page , one fewer
class of bug, and simpler to maintain.

Mapping of SPEC paths → actual files:

| SPEC path | Actual file |
|---|---|
| `blog/index.html` | `blog.html` |
| `blog/mr-robot-hacks.html` | `blog-mr-robot.html` |
| `blog/satellite-eavesdropper.html` | `blog-satellite.html` |
| `blog/hack-a-sat-setup.html` | `blog-hackasat.html` |
| `resume/index.html` | `resume.html` |
| `projects/index.html` | `projects.html` |
| `projects/research/wwta.html` | `wwta.html` |
| `projects/writeups/hack-a-sat/index.html` | `hackasat.html` |

### 2. WWT&A: marker map + searchable table instead of a shipped TopoJSON choropleth

A true choropleth needs a world-polygon TopoJSON (hundreds of KB) joined to
per-country counts, plus the author-time `build-threat-data.mjs` pipeline that
downloads and joins MITRE ATT&CK / CFR / ETDA / MISP / EuRepoC. That is valuable
but heavy, needs network access at author time, and adds a large asset.

The shipped `wwta.html` instead **reuses the existing `incidents` + `groups`
dataset** (no new dependency, no new large asset) to render:

1. per-suspected-sponsor attack counts,
2. a Leaflet marker map coloured by suspected sponsor, and
3. a searchable, sortable actor "database" table.

This is fully functional today. Upgrading to a real choropleth + the external
data join is tracked in `CHECKLIST.md` as a future enhancement.

## Bug fixed along the way

`assets/js/common.js` `loadDataset()` short-circuited on the embedded
`window.CYBER_FOOTPRINTS_DATA` (which contains only `incidents` + `groups`) and
set `posts` to `[]` without ever fetching `data/posts.json`. Result: the Notes
list and "latest notes" were always empty. `loadDataset()` now falls back to
fetching `posts.json` when embedded posts are absent.
