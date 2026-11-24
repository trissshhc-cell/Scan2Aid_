# Scan2Aid
A static, bilingual first-aid guide. All pictures are original local SVG illustrations, not photographs. No external fonts or libraries are needed.

## Run locally
From this folder, run `python -m http.server 8000` and open http://localhost:8000/. Do not double-click the HTML for offline testing: service workers require HTTPS or localhost.

## Publish on GitHub Pages
1. Create a GitHub repository (for example, `Scan2Aid`).
2. Upload the contents of this folder to the repository root, retaining the `images` folder.
3. In Settings > Pages, select Deploy from a branch, main, / (root), then Save.
4. Open the HTTPS address GitHub Pages provides. Typical address: `https://YOUR-USERNAME.github.io/Scan2Aid/`.
5. Generate a QR code using your actual published URL and test it on a phone. Use the `/bisaya.html` URL for a Bisaya-first QR code if desired.

## Offline test
Open either page online and wait for the ready status. Then disable networking (or use browser DevTools offline mode), reload, switch languages, and verify all five illustrations. Both pages are precached on first successful service-worker installation. External reference links are not cached. Offline access is specific to the device/browser and can be lost if site data is cleared or evicted. A new device must first load the site online.

## Updates
Edit either HTML file, CSS, JS or SVG files. Increment the version in `sw.js` when publishing changes. If adding or renaming assets, update ASSETS in `sw.js` as well. The cache-first strategy uses the installed version until the updated worker installs; reload after the update. Use the same folder layout on the host.

Medical content is educational, not clinically certified. The Cebuano translation should be reviewed by a fluent local healthcare professional before public deployment. References are provided on both pages.
