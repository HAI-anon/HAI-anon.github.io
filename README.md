# HAI World Model Project Page

Static project page for:

`HAI: Hierarchical Anchored Interaction for Multi-View Bimanual World Models`

This repository hosts the anonymous GitHub Pages site at:

`https://hai-anon.github.io/`

The site is intentionally plain static HTML/CSS/JS. There is no frontend build step and no package manager requirement.

## Structure

- `index.html`: main page content and section order
- `site/styles.css`: all layout, color, typography, responsive behavior
- `site/main.js`: scroll progress, mobile nav, copy actions, experiment filters, reveal animation
- `assets/`: favicon and SVG figures used in the current page
- `media/`: qualitative MP4 and future experiment assets
- `.nojekyll`: tells GitHub Pages not to process the site with Jekyll
- `.gitignore`: basic local ignore rules

## Local Preview

From this directory:

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

## Current Notes

1. The page is currently anonymous and uses anonymous author text.
2. The featured qualitative video is already wired into `index.html`.
3. Additional paper, code, or dataset links can be added later if needed.

## GitHub Pages Deployment

1. Create a GitHub repository, for example `HAI-anon.github.io`.
2. Copy or push the contents of this directory to the repository root.
3. In GitHub, open `Settings -> Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select branch `main` and folder `/(root)`, then click `Save`.
6. After GitHub finishes publishing, your site will be available at:

`https://hai-anon.github.io/`

This is the simplest setup for a plain static project page. The repository root already contains `index.html`, so no build step is required.

## Media Notes

- For short qualitative demos, MP4 is usually the most practical choice.
- For side-by-side trajectory grids, stitched PNGs also work well.
- If you want autoplaying videos, use muted inline videos to avoid browser restrictions.
- Keep filenames simple and lowercase if you later wire them into the HTML.
