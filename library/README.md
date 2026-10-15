# Client material library

Finished, compliance-reviewed client pieces, stored here so every advisor project can pull them. Source: Google Drive folder https://drive.google.com/drive/folders/19DtYKT8TDo-nF-P2vhivDVeIlv-K6_iZ (owner: tim.bohnett@farther.com).

- `pieces/`: every finished piece in one flat folder, so the catalog links and shared `assets/` resolve. It holds the Client Education Library one-pagers (`00`–`20`, index `00 Client Education Library.dc.html`) and the Intelligent Wealth Series four-page guides: Inflection Points `01`–`59`, Cornerstones `C01`–`C36`, Service Overviews `S01`–`S15`, UHNW `U01`–`U21`, Workplace to Wealth `W01`–`W06`, and the Dimensions of Modern Wealth group presentation decks `G01`–`G20` (16:9, 11 slides each with speaker notes, built on `deck-stage.js`). The master index is `Intelligent Wealth Series Catalog.dc.html`. `briefs/` holds the source briefs; `BUILD-RULES.md` holds the series build rules.
- `tools/ingest.js`: brings new uploads in (fixes stylesheet paths, relinks images, adds the advisor slot). Runs in time slices, so large batches may need `{onlyNew:true}`.
- `tools/image-map.json` + `tools/relink.js`: map each piece's original Drive image path (`assets/topic/01.jpg`, `assets/headers/golden-gate.jpg`, …) to the matching photo in this design system's image bank (`assets/images/library/`), wave graphic (`assets/waves/`) or catalog thumbnail (`assets/images/thumbs/`). The map was built by matching the Drive copies against the Figma image bank; no separate photo folder is needed.
- `assets/`: the two wordmark SVGs the pieces use (`wordmark-white` on the one-pagers maps to the cream wordmark).
- `tools/personalize.js`: fills the advisor slot from one roster record.
- `_audit.html`: loads every piece and reports the slot count and any page overflow. Regenerate its file list from `tools/audit-template.html` after big imports.

## Why Farther deck

`pieces/Why Farther Deck.dc.html` is the 19-slide client pitch (1920×1080), the same file as the `templates/why-farther/` template. It has two advisor slots: a small block at the bottom-left of the cover, and a full "Your advisor" slide (17) with headshot, name, title, credentials, contact, location and a QR code linking to the advisor's farther.com profile. `personalize.js` fills both. Its stylesheet, slide engine and icon script load from the design system (`templates/why-farther/`), so nothing extra needs copying. The Guild Investment Management slides from the original deck are not included; they stay in the source project.

## Group presentation decks (G01–G20)

The twenty Dimensions of Modern Wealth decks follow the Group Education Deck arc (`templates/group-education-deck/`): cover, nine teaching slides, and the condensed disclosure as slide 11. The advisor slot is the cover's bottom band (headshot, name, title, phone, email). The reference code at bottom-right stays. Cover photos come from the image bank. Catalog thumbnails `assets/thumbs/g-NN.jpg` map to the matching bank thumbnails in `tools/image-map.json`. G11–G20 were added from the Farther-Education project on September 28, 2026. Three of their covers were swapped so no two decks share a photo: G14 is the couple in autumn light, G16 is the child at the old tree, and G17 is the city skyline. The master catalog now has the full-width search bar and 20 deck cards.

**Deck audit.** Open `_deck-audit.html` (built from `tools/deck-audit-template.html`, with the G file list filled in). For every slide it checks for content past the 1920×1080 frame, content running into the bottom margin, rendered text under 24px (SVG text is measured at its on-screen size; the 13px reference code is exempt), broken images, and one advisor slot per deck. Add `?detail` to list each small-text run. The September 28, 2026 audit fixed:
- SVG chart labels that rendered at 20 to 23px because of viewBox scaling, across G01 to G18. Label sizes were raised so they render at 24px or larger.
- HTML text at 22 and 23px in G11, G12, G13, G16 and G19, raised to 24px.
- Tighter spacing on G04 slide 5 and G11 slide 2, which ran into the footer.
- An empty "Key defenses" box on G12 slide 4 and a repeated "Set aside resources for:" subtitle on G16 slide 6, both removed.
All 20 decks now pass.

## Advisor slot

Every piece has exactly one `data-advisor-slot` block, on the cover. Fields are marked `data-advisor="headshot | name | title | email | phone"`. In this library they show placeholder values ("Advisor Name").
- Placement: the **bottom-left corner of the cover** on every piece. On the Client Education one-pagers it's the last line of the page, under the sources line. On the multi-page guides it replaces the "Farther Wealth Management · farther.com" line in the **cover** footer only; the reference code stays at right and inner-page footers are unchanged. Layout: headshot, then name, title under the name, then email and phone. Markup and placement live in `tools/slot.js` (`placeSlot(html)`), which `ingest.js` uses.
- To make room, the main chart in one-pagers `03` and `09` was set to a fixed, slightly shorter height. Nothing else changed.

Never edit the content around the slot when personalizing. The copy, figures and disclosures are approved as written.

## "GoFartherInDesign" (run in the advisor's project)

Trigger code: **"GoFartherInDesign"** — a unique codeword an advisor types (alone, or with their email) to rebuild their whole personalized client education library. It's deliberately not a plain-English phrase like "recreate" or "build" so it can't collide with the product's own generic "recreate an uploaded file" flow, which intercepts phrasing like that before it ever reaches this design system and wrongly prompts for an upload. **No upload is needed** — every piece already lives in `library/pieces/` in this design system; this flow only needs the advisor's email (ask for it if not given).

1. Ask for the advisor's **email** if not already given. Find the exact match (case-insensitive, guard against `email: null` — ~1 in 10 advisors have no email on file) in `data/advisors.json` from this design system. If email lookup fails, retry matching on `displayName`/`nameAsPublished` (case-insensitive, trimmed) before concluding there's no match. If still no match, stop and say so — don't guess or invent an advisor. Confirm the name you found before building.
2. Copy every `.dc.html` in `library/pieces/`, plus `support.js`, `doc-page.js` and `deck-stage.js`, into a `pieces/` folder in the project. Photos and wordmarks stay in the design system and don't need copying.
3. In each copied `.dc.html`, replace `../../` (stylesheets, bundle, photos) with `../_ds/<folder>/`, then `../assets/` (wordmarks) with `../_ds/<folder>/library/assets/`, in that order.
4. Run `personalize(html, advisor)` from `tools/personalize.js` on every piece. It fills the name (`nameAsPublished`, with designations), title, email, phone (`phoneDisplay`) and headshot (`headshotJpgUrl`). If the advisor has no headshot, it removes the photo circle and leaves a name-only block. If there's no phone number, it drops the phone field.
5. Open `Intelligent Wealth Series Catalog.dc.html` and one piece from each series to confirm the slot renders.

```js
// run_script in the advisor's project
const DS = '_ds/<folder>/';                       // the bound design system folder
eval(await readFile(DS + 'library/tools/personalize.js'));
const roster = JSON.parse(await readFile(DS + 'data/advisors.json'));
const A = (Array.isArray(roster) ? roster : roster.advisors).find(a => a.email && a.email.toLowerCase() === EMAIL.toLowerCase());
for (const series of ['pieces']) {
  for (const f of await ls(DS + 'library/' + series)) {
    if (!f.endsWith('.dc.html')) continue;         // copy support.js, doc-page.js and deck-stage.js separately (copy_files)
    let html = await readFile(DS + 'library/' + series + '/' + f);
    html = html.split('../../').join('../' + DS);                   // stylesheets, bundle, photos
    html = html.split('"../assets/').join('"../' + DS + 'library/assets/'); // wordmarks
    await saveFile(series + '/' + f, personalize(html, A));
  }
}
```

## Updating from Drive

Upload the changed files to `uploads/` in this design system, then run `eval(await readFile('library/tools/ingest.js')); await ingest('uploads', {onlyNew:true})`. This adds only pieces that aren't in the library yet. Leave out `{onlyNew:true}` to overwrite pieces that changed, but with more than about 40 files that full re-run can hit the 30-second script limit. It overwrites the library copies, skips index pages, and adds the slot to any piece that doesn't have one yet. Finish by opening `_audit.html`.

## Disclosures

All pieces carry the official disclosure (`guidelines/compliance/DISCLOSURE.md`): the condensed version on the one-pagers (00–20), and the full version on the multi-page guides (51–59, C01–C36, U01–U21). Topic-specific risk language from the original pieces (index, past-performance, hypothetical, insurance, tax-limit, legal caveats) follows the official text as its own paragraph. For new uploads, run `tools/fix-disclosure.js` (`fixDisclosure(html, FULL, CONDENSED)`), then check that one-pagers still fit on one page.
