# Gülce Besen Dilek — Portfolio (GitHub Pages version)

A static rebuild of besendilek.com, matching its page structure and layout (nav, dropdown menu, work grid with hover captions, About/Reel pages). All artwork is currently a placeholder — swap in your own images and gifs before publishing.

## Files

- `index.html` — homepage / Work grid
- `about.html`, `reel.html`, `direction.html`
- `kolaj.html`, `gal.html`, `more-art.html`, `the-solarologist.html`, `private.html`
- `css/style.css` — all styling
- `js/script.js` — mobile menu + scroll-in animation
- `images/` — placeholder graphics (replace these)

## Replace the placeholders

Each image in `images/` is named for what it shows (e.g. `work-katz.png`, `about-portrait.png`, `logo-placeholder.png`). Just overwrite the file with your real artwork using the **same filename**, or update the `src=` path in the relevant HTML file if you rename it. Animated pieces (like the Green Alternative List and Kolaj gifs on the original site) can be `.gif`, `.webp`, or an embedded video — swap the `<img>` tag accordingly.

The Reel page embeds your existing YouTube video directly, so nothing to change there unless you want a different video.

## Publish for free on GitHub Pages

1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository (e.g. `portfolio`), and set it to Public.
3. Upload all files in this folder to the repository (drag-and-drop works on github.com, or use `git push` if you're comfortable with git).
4. In the repo, go to **Settings → Pages**.
5. Under "Build and deployment", set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
6. GitHub will publish your site at `https://<your-username>.github.io/portfolio/` within a minute or two.
7. Optional: to use your own domain (e.g. besendilek.com), add a `CNAME` file with your domain name, and point your domain's DNS to GitHub Pages per GitHub's custom domain docs.

## Notes on this being a "1:1 copy"

I couldn't visually inspect your live Squarespace site's exact CSS (colors/fonts/pixel spacing) because I only have text/programmatic access, not a rendered browser — the Chrome browser tool wasn't connected in this session. So I rebuilt the **structure, navigation, page content, and layout pattern** exactly as they appear on besendilek.com (same nav items, same grid-of-work-with-italic-captions pattern, same About/Reel copy), styled in a clean minimal look similar to the original. If you want pixel-perfect matching of your exact fonts/colors, let me know and I can refine it once you share screenshots or the Squarespace theme name, or once the Chrome extension is connected so I can inspect it directly.
