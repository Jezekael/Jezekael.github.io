# Checklist: what still needs your input

The redesign is live and functional. These items are marked with
`TODO(jezekael)` in the source and need your real data or a decision.

## Résumé (`data/cv.json`)
- [ ] AKVIZE role: fill in responsibilities, tech stack, and shareable achievements.
- [ ] INSA de Lyon: program/specialization and start/end years.
- [ ] Skills: confirm/expand the `offensive`, `research`, `interests` groups.
- [ ] Certifications: add real certs (name, issuer, year) or remove the section.
- [ ] Confirm the contact email , the site currently shows `jezekael.brunon@gmail.com`
      (from the old About page). Your account email is `jezekael.brunon@akvize.com`.
- [ ] Replace/confirm `assets/CV.pdf` (the downloadable résumé already in the repo).

## Terminal hero (`assets/js/terminal.js`)
- [ ] Confirm the `whoami` / mission / skills lines read the way you want.

## Satellite project (`blog-satellite.html`)
- [ ] Goal, hardware, software stack, legal notes for your jurisdiction, and
      real captures/results (all marked TODO in the page).

## Hack-A-Sat write-ups (`hackasat.html`)
- [ ] Publish any real per-challenge write-ups you want public and link them from
      the matching challenge entries.
- [ ] Verify challenge → folder names against the live Cromulence repos
      (a few differ between READMEs and actual folders).

## World Wide Threats & Actors (`wwta.html`)
- [ ] Decide whether to upgrade from the marker-map + table to a real TopoJSON
      choropleth (see `STACK_DECISION.md`).
- [ ] If so, decide which external datasets to join: MITRE ATT&CK Groups,
      CFR Cyber Operations Tracker, ETDA Threat Group Cards, MISP galaxy, and
      EuRepoC (note EuRepoC is CC-BY-NC , fine for a personal site, keep attribution).

## Assets
- [ ] Add `assets/img/og-default.png` (Open Graph / social preview image). All
      pages reference it; until it exists, link previews will have no image.

## Content/structure decisions
- [ ] The old `about.html` is kept and linked in the footer. Decide whether to
      retire it now that the Resume page exists, or keep both.
- [ ] `exploits/` payload demo pages are preserved and linked from Projects.
      Confirm you want them publicly linked.
