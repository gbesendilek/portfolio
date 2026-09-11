# Gülce Besen Dilek — Portfolio (GitHub Pages version)

A simple, single-focus portfolio for animation and illustration work. The homepage is one long mixed masonry gallery — no category split between animation and illustration, just the work, largest to smallest, in whatever order looks best. Hover a piece to see its title; click through to that project's own page for more images. All artwork is currently a placeholder — swap in your own images before publishing.

## Structure

- **Nav**: Work (home), Reel, About — trimmed down from the original site's nav.
- **Homepage** (`index.html`): a short line ("Every project deserves its unique style."), the long mixed gallery, then a dark bio section at the bottom ("Hello! I'm a 2D animator and illustrator...").
- **Project pages**: each gallery piece links to its own page with a title, a short meta line (medium · year), the hero image, and a small two-image gallery for additional shots. Files: `katz.html`, `grayzone.html`, `gal.html`, `illustration-mix.html`, `cybercity.html`, `forbidden-tshirt.html`, `kolaj.html`, `paper-moon.html`, `night-runner.html`, `field-notes.html`, `little-things.html`, `after-hours.html`.
- **About** (`about.html`) and **Reel** (`reel.html`) — unchanged in structure.
- `css/style.css` — all styling.
- `js/script.js` — mobile menu + scroll-in animation.
- `images/` — placeholder graphics (replace these).

Note: `direction.html`, `the-solarologist.html`, `private.html`, and `more-art.html` are no longer linked from anywhere (the Direction sub-menu and the two password-protected pieces were dropped for simplicity). They can be deleted from the repo whenever you like.

## Replace the placeholders

Each image in `images/` is named for what it shows (e.g. `work-katz.png`, `about-portrait.png`, `logo-placeholder.png`). Overwrite the file with your real artwork using the **same filename**, or update the `src=` path in the relevant HTML file if you rename it. On each project page, `detail-placeholder-1.png` / `detail-placeholder-2.png` are the "add more images from this project" slots — replace those with real stills, or add more `<img>` tags to `.project-gallery` for more than two.

The Reel page embeds your existing YouTube video directly, so nothing to change there unless you want a different video.

## Publish for free on GitHub Pages

1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository (e.g. `portfolio`), and set it to Public.
3. Upload all files in this folder to the repository (drag-and-drop works on github.com, or use `git push` if you're comfortable with git).
4. In the repo, go to **Settings → Pages**.
5. Under "Build and deployment", set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
6. GitHub will publish your site at `https://<your-username>.github.io/portfolio/` within a minute or two.
7. Optional: to use your own domain (e.g. besendilek.com), add a `CNAME` file with your domain name, and point your domain's DNS to GitHub Pages per GitHub's custom domain docs.

## Design notes

Black tagline bar under the header, a full-bleed masonry work grid (CSS multi-column layout, so mixed image sizes read as casual rather than uniform), hover-reveal captions showing just the project name, and a dark two-column bio section at the bottom of the homepage.
