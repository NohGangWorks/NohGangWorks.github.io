# NohGangWorks.github.io

Hi!

Basic static homepage for GitHub Pages.

This repository provides a stable public domain homepage for NohGang Works,
NGST project information, support contact, and policy pages.

Homepage from this repo: https://nohgangworks.github.io

## Files

- `index.html`: the public front page GitHub Pages serves at the site root.
- `projects/index.html`: a list view for public projects served at `/projects/`.
- `ngst/index.html`: the first project page for NGST, short for Noh Gang Smart Tools, served at `/ngst/`.
- `privacy/index.html`: the NohGang Works website privacy policy served at `/privacy/`.
- `privacy/ngst-express-it/index.html`: the NGST Express It app privacy policy served at `/privacy/ngst-express-it/`.
- `direct-note-print/index.html`: the static mobile print handoff for Direct Note Print. Printable data stays in the URL fragment and is not sent in the HTTP request.
- `privacy.html`, `projects.html`, `ngst.html`, `privacy/ngst-express-it.html`: redirects for previous `.html` URLs.
- `styles.css`: responsive styling for the homepage.
- `site.js`: small navigation behavior for the mobile privacy menu.
- `assets/hero-space-background.png`: local visual asset for the homepage hero.
- `.nojekyll`: keeps GitHub Pages in plain static-file mode.

## Local preview

Run a small local server so root-relative links such as `/privacy/` work:

```powershell
python -m http.server 8000
```
