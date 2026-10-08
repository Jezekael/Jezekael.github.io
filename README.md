# Jezekael Brunon

Personal site built with Jekyll and served by GitHub Pages: blog posts, short notes, projects,
CTF write-ups and the World Wide Threats & Actors (WWTA) incident map.

## Adding content

Create **one Markdown file** in the right folder and push. Listings, the home page, the sitemap and
the WWTA map update on their own.

| Folder | URL | What goes there |
|---|---|---|
| `_blog/` | `/blog/<file>.html` | Long-form posts |
| `_notes/` | `/notes/<file>.html` | Short notes |
| `_projects/` | `/projects/<path>.html` | Projects, any depth of sub-folders |
| `_projects/writeups/hack_a_sat/<year>/` | | Hack-A-Sat write-ups |
| `_projects/wwta/incidents/` | | One file per incident (feeds the map) |
| `_projects/wwta/groups/` | | One file per threat actor |

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
