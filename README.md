# Jezekael Brunon

Personal site built with Jekyll and served by GitHub Pages: blog posts, short notes, projects,
CTF write-ups and the World Wide Threats & Actors (WWTA) incident map.

## Adding content

Create **one Markdown file** in the right folder and push. Listings, the home page, the sitemap and
the WWTA map update on their own.

| Folder | Badge | What goes there |
|---|---|---|
| `blog/posts/` | posts | Long-form posts |
| `blog/notes/` | notes | Short notes |
| `projects/research/` | research | Research projects (incl. the WWTA map) |
| `projects/writeups/` | writeups | CTF write-ups, any depth of sub-folders |
| `projects/research/wwta/incidents/` | | One file per incident (feeds the map) |
| `projects/research/wwta/groups/` | | One file per threat actor |

The Blog and Projects pages list everything below them in one list, newest first. Each card's
badge is the first sub-folder the file sits in, so a new folder such as `projects/tools/` gets a
"tools" badge automatically (add a `.pill-tools` colour in `assets/css/main.css` if you want one).
URLs mirror the folders: `blog/posts/my-post.md` → `/blog/posts/my-post.html`.

A post looks like this:

```markdown
---
title: My post title
date: 2026-10-06
description: One or two sentences shown on cards and under the title.
tags: [tag1, tag2]
---
The post, in normal Markdown.
```

Optional front matter: `category`, `short_title` (breadcrumb label), `info` (extra sidebar rows,
e.g. `info: { Status: In progress }`), `files` (downloadable files listed in the sidebar),
`mermaid: true` (render ```` ```mermaid ```` blocks), `in_feed: false` (hide from the home page).

**New folder:** create it with an `index.md` that has `layout: folder`, a `title` and a
`description`. It lists everything inside it automatically. Images and scripts can sit next to the
page (e.g. in a `files/` sub-folder) and be linked with a relative path.

Incident and group files use the fields of the existing ones; copy one as a template. An incident's
`group` must match a group's file name (`apt28` for `groups/apt28.md`).

## Local preview

Needs Ruby (on Windows: RubyInstaller with DevKit).

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Repository layout

- `blog/`, `projects/`: the content (Markdown).
- `_layouts/`, `_includes/`: page templates (header, footer, cards). The leading `_` tells Jekyll
  these are templates, not pages.
- `_config.yml`: site settings and per-folder defaults.
- `index.html`, `about.html`, `resume.html`, `404.html`: standalone pages.
- `assets/`: CSS, JS, CV PDFs and the generated `data/wwta.json`.
