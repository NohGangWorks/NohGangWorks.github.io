# NohGangWorks.github.io

Hi!

Static corporate website for GitHub Pages.

This repository provides the official public website of NohGang Works Co.,Ltd.
(주식회사 노강웍스), NGST project information, support contact, and policy pages.

Homepage from this repo: https://nohgangworks.github.io

## Files

- `index.html`: language selection for Korean and English.
- `ko/` and `en/`: separate localized corporate homepages.
- `ko/projects/`, `en/projects/`: localized public project lists.
- `ko/ngst/`, `en/ngst/`: localized NGST product-family pages.
- `ko/privacy/`, `en/privacy/`: localized website privacy policies.
- `ko/privacy/ngst-express-it/`, `en/privacy/ngst-express-it/`: localized NGST Express It privacy policies.
- `ko/terms/`, `en/terms/`: localized website terms of use.
- `direct-note-print/index.html`: the static mobile print handoff for Direct Note Print. Printable data stays in the URL fragment and is not sent in the HTTP request.
- Legacy unprefixed and `.html` policy/project URLs redirect to the English localized pages.
- `styles.css`: responsive styling for the homepage.
- `site.js`: small navigation behavior for mobile menus.
- `assets/hero-space-background.png`: local visual asset for the homepage hero.
- `.nojekyll`: keeps GitHub Pages in plain static-file mode.

## Local preview

Run a small local server so root-relative links such as `/privacy/` work:

```powershell
python -m http.server 8000
```
