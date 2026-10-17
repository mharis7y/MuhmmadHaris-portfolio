# Portfolio Website – Design Spec (for coding agent)

Single-page personal portfolio. Sections in order: **Hero → IT Berries strip → About me → Skills → Portfolio → Contact → Footer**, plus a fixed navbar.

## 0. How to read this spec

- **Source of truth:** values come from the Figma CSS export (desktop, 1920px frame) plus the three mobile screenshots. The export was absolute-positioned (`left/top`); **do not copy absolute coordinates**. Build with flex/grid and a centered container. Only sizes, typography, colors and spacing below matter.
- **Desktop spec is exact. Mobile spec is estimated** from screenshots (no CSS export exists for mobile). Treat mobile numbers as approximate (see section 13).
- All name, bio, and copy in the design is **placeholder** (Lorem ipsum, "Tomasz Gajda", "eatsome."). Keep it in a single content/data file so it is easy to replace.
- Assets that must be supplied: logo (hexagon "TG" monogram, white and black versions), cut-out hero photo (transparent background), mountain background photo, `separator` image, 3 service icons, 3 project images, social icons.

## 1. Design tokens

```css
:root {
  /* colors */
  --black: #000000;
  --white: #FFFFFF;
  --bg-dark: #1A1A1A;        /* portfolio section, footer */
  --bg-strip: #1D1D1D;       /* IT Berries strip */
  --bg-nav-scrolled: #0B0B0B;/* navbar after scroll */
  --hero-grey: #D7D7D7;      /* hero left panel */
  --social-tile: #C4C4C4;    /* hero social icon tiles */
  --text-body: #050505;      /* About paragraph (Contact uses #000) */
  --text-muted: #919191;     /* hero subtitle */
  --placeholder: #8B8B8B;    /* form placeholders */
  --filter-inactive: #7C7C7C;
  --filter-active: #FFFBFB;  /* also "And many more to come!", DEMO/MORE */
  --filter-line: #AAAAAA;
  --shadow-tile: 0 4px 4px rgba(0,0,0,.25);

  /* light-section background (About+Skills, Contact) */
  --bg-light: radial-gradient(50% 50% at 50% 50%, rgba(26,21,21,0) 0%, rgba(1,1,1,.16) 100%), #FFFFFF;

  /* fonts */
  --font-ui: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  --font-hero: 'Raleway', sans-serif;
}
```

## 2. Fonts (Google Fonts)

| Family | Weights | Used for |
|---|---|---|
| **Montserrat** | 400, 500, 600, 700 (+600 italic) | Nav, section headers, skill labels, buttons, filter, form, portfolio overlay, "back to top" |
| **Open Sans** | 300, 400 | Paragraphs, service descriptions |
| **Raleway** | 700, 800 | Hero only ("Hi, I am", name, role) |
| **Roboto** | 400 | Hero photo caption only |
| **Varela** | 400 | Decorative "IT" logo in IT Berries strip only |
| **Nunito** | 700 | Footer copyright only |

## 3. Typography scale (desktop)

| Role | Font | Weight | Size / line-height | Letter-spacing | Color |
|---|---|---|---|---|---|
| Hero "Hi, I am" | Raleway | 700 | 40px / 47px | – | #000 |
| Hero name | Raleway | 700 | 80px / 94px | – | #000 |
| Hero role | Raleway | 800 | 25px / 29px | – | #919191 |
| Hero photo caption | Roboto | 400 | 15px / 18px, justify | – | #000 |
| Nav link | Montserrat | 700 | 17px / 21px | – | #FFF |
| Nav CTA "CONTACT ME" | Montserrat | 700 | 15px / 18px | – | #000 |
| Strip header "IT BERRIES" | Montserrat | 700 | 30px / 37px | 0.18538em | #FFF |
| Section header (ABOUT ME, SKILLS, CONTACT) | Montserrat | 700 | 30px / 38px | 0.35538em | #000 |
| Section header (PORTFOLIO) | Montserrat | 700 | 30px / 38px | 0.43538em | #000 |
| Body paragraph | Open Sans | 400 | 15px / 138.68% (≈21px) | – | #FFF in strip, #050505 About, #000 Contact |
| Sub-heading (USING NOW:, LEARNING:, OTHER SKILLS:) | Montserrat | 700 | 30px / 37px | 0.18538em | #000 |
| Service title | Montserrat | 700 | 22px / 27px | 0.18538em | #000 |
| Service description | Open Sans | 300 | 14px / 19px, justify | – | #000 |
| Skill label | Montserrat | 400 | 24px / 29px | 0.13538em | #000 |
| Button text (READ MORE, EXPLORE) | Montserrat | 600 | 15px / 18px | – | #FFF in strip, #000 on light |
| Filter tab | Montserrat | 600 | 14px / 17px | – | active #FFFBFB, inactive #7C7C7C |
| Project overlay tag "coded, designed" | Montserrat | 600 italic | 10px / 12px | 0.095em | #FFF |
| Project overlay title | Montserrat | 700 | 25px / 127.9% (≈32px) | 0.20538em | #FFF |
| Project overlay description | Montserrat | 500 | 10px / 12px | -0.015em | #FFF |
| Project overlay DEMO / MORE | Montserrat | 600 | 12px / 15px | 0.095em | #FFFBFB |
| "And many more to come!" | Montserrat | 600 | 20px / 24px | – | #FFFBFB |
| Form placeholder | Montserrat | 700 | 14px / 17px, uppercase | 0.04em | #8B8B8B |
| SUBMIT | Montserrat | 700 | 16px / 20px | 0.1em | #000 |
| BACK TO TOP | Montserrat | 700 | 15px / 18px | 0.18538em | #FFF |
| Footer copyright | Nunito | 700 | 18px / 25px | – | #FFF |

Section header, sub-headings, nav CTA, buttons, skill labels, and form labels are all **UPPERCASE**.

## 4. Global layout

- Design width 1920px; content max-width ≈ 1200–1300px, centered. Full-bleed backgrounds.
- Fixed/sticky navbar. Smooth-scroll anchors: About me → `#about`, Skills → `#skills`, Portfolio → `#portfolio`, Contact me → `#contact`.
- Desktop section heights (reference): Hero 1022 · IT strip 313 · About+Skills (shared gradient bg) ≈ 3017 · Portfolio 1305 · Contact 1178 · Footer 326.

### Reusable components

**Section header box** – centered, `border: 8px solid #000`, height 107px, text centered in the box. Widths: ABOUT ME 404px, SKILLS 404px, CONTACT 367px, PORTFOLIO 482px (i.e. width fits text, with generous horizontal padding).

**Bracket button** (READ MORE / EXPLORE / SUBMIT / DEMO / MORE) – no background or border. Text between two **vertical bars** (one left, one right), implemented as `border-left` / `border-right` or pseudo-elements. Bar height 32px (SUBMIT: 45px; DEMO/MORE: 27px), thickness 2px (SUBMIT: 3px). Bar color matches text color. Button width 139px (READ MORE / EXPLORE), SUBMIT 197px.

**Separator** – `separatorBlack.png`, 170×12, centered. It is a small zigzag/chevron glyph (`\\\///`) flanked by a short horizontal line on each side. Used between About blocks and in Contact under the paragraph. Supply as an SVG/PNG.

## 5. Navbar

- **Default state (top of page):** transparent, overlaid on hero. Logo (white "TG" monogram, ~60×50) at left edge of container, ~65–72px from top. Nav links at right: `About me`, `Skills`, `Portfolio` (white, Montserrat 700 17px), then `CONTACT ME` pill. Each item 147px wide × 46px high, text centered.
- **CONTACT ME pill:** `background #FFF; color #000; border: 4px solid #FFF; border-radius: 30px; font 700 15px`.
- **After scroll:** full-width bar, height 66px, background `#0B0B0B`, same links and pill, logo stays at left.
- **Hero logo variant:** logo on the grey hero panel is black.

## 6. Hero (desktop)

- Height 1022px, background `#000`.
- Left layer: `#D7D7D7` grey panel clipped diagonally. Implement with a **black rectangle rotated 9.67deg** covering the right side (`width ≈ 1802px, height ≈ 1374px`, positioned at about `left: 753px; top: -192px`), or with `clip-path` producing a slanted edge that leans right at the top.
- Left content block (center-aligned text, starts ≈ x 256–271):
  - "Hi, I am" (40px) → name "Tomasz Gajda" (80px) → role "Front-end Developer / UI Designer" (25px, #919191).
  - Social tiles row below: 3 tiles, each **61×56, `#C4C4C4`, shadow `0 4px 4px rgba(0,0,0,.25)`**, 31px gap (92px pitch). Icons in black: email (@), GitHub, LinkedIn.
- Right: cut-out photo, 783×877, placed on the black area, bottom aligned to the hero bottom (top ≈ 145px).
- Tiny caption near photo bottom: "this is not my photo, but I dearly hope to get one just like this" (Roboto 15px). It is a joke on the template; make it optional or remove.

## 7. IT Berries strip

- Full width, height ≈ 313px, background `#1D1D1D` (flat).
- Left content (offset ≈ 102px from left edge): header "IT BERRIES" (white), paragraph (white, justified, max-width ≈ 1148px), bracket button **READ MORE** (white).
- Decorative element at right, partially clipped by the top and right edges: a square outline (`border: 18px solid #000`, ≈ 388×368) with a large "IT" in Varela 280px (black, `letter-spacing: 3.8px`) inside, the whole group rotated **23.89deg**. It is black on `#1D1D1D`, so it should be very subtle.

## 8. About me

- Background: `--bg-light` (shared with Skills).
- Section header box "ABOUT ME".
- Paragraph: Open Sans 15px, center-aligned, `#050505`, max-width ≈ 763px.
- Bracket button **EXPLORE** (black), centered.
- Separator.
- **Services** (3 items) in a staggered layout, container ≈ 1066px wide:
  - Row 1: **DESIGN** (left) and **DEVELOPMENT** (right).
  - Row 2: **MAINTENANCE**, centered under them.
  - Each item: a large faded grayscale icon (60–80px, `background-blend-mode: luminosity`, low opacity) on the left, **overlapping/behind** the title; title Montserrat 700 22px; description Open Sans 300 14px justified, ≈ 430px wide, placed under the title and indented to the right of the icon.
  - Icons: design = pencil/ruler, development = crossed wrench/screwdriver, maintenance = gears.
- Separator after the services.

## 9. Skills

- Same background as About. Section header box "SKILLS".
- Three groups, each with a left-aligned sub-heading (30px, ls 0.185em) and a **4-column grid** (column pitch ≈ 240–255px, grid ≈ 1004px wide, centered). Each cell: icon (≈100px tall) centered above its uppercase label (24px).
- Row gap between icon rows ≈ 140–350px in the Figma; use ≈ 80–100px between rows and ≈ 80px between groups.

| Group | Items (in order) |
|---|---|
| **USING NOW:** (2 rows × 4) | HTML5, CSS3, SASS, JAVASCRIPT / REACT, BOOTSTRAP, GIT, FIGMA |
| **LEARNING:** | NODEJS, MySQL, MONGODB, TYPESCRIPT |
| **OTHER SKILLS:** | ANGIELSKI C1/C2 (English, UK flag), HISZPAŃSKI B1/B2 (Spanish, Spain flag), C++, C |

- Icons are full-color brand logos (use devicon / simple-icons SVGs). Brand colors seen in the export: HTML `#FF5722`, CSS `#2196F3`, Sass `#CF649A`, JS `#F7DF1E`, Bootstrap `#563D7C`, React `#53C1DE`, Git (orange-red), Figma (`#F24E1E #FF7262 #A259FF #1ABCFE #0ACF83`), Node `#539E43`, MongoDB green, TypeScript `#007ACC`. Language flags are round (`border-radius: 200px`).
- Labels for languages are Polish in the design; localize to English if the site is English.

## 10. Portfolio

- Section background `#1A1A1A`, height ≈ 1305px.
- **Banner** (top, full width, 321px high): mountain photo with `linear-gradient(rgba(0,0,0,.32), rgba(0,0,0,.32))` overlay. Header box "PORTFOLIO" is centered on it (black text, 8px black border, 482px wide).
- **Filter bar** (centered, 587px wide, 48px high, ≈ 32px below the banner): three tabs `ALL | CODED | DESIGNED`, each 149px wide, text centered. Active = `#FFFBFB`, inactive = `#7C7C7C`.
  - Underline track: 1px `#AAAAAA`, full width of the bar. Active indicator: 1px `#FFFFFF`, 201px wide, sits under the active tab and slides/changes with selection.
  - Filtering shows/hides tiles by category.
- **Grid:** 3 columns × 2 rows, edge-to-edge with no gaps, each tile 640×400 (1920px total). Tiles are full-bleed background images.
- **Tile hover/overlay state** (shown in the design on the center-top tile, "eatsome."):
  - Overlay `rgba(0,0,0,.8)` over the image.
  - Centered stack: tag *"coded, designed"* (italic), title **eatsome.** (25px, white, ls 0.205em), one-line description (10px), then `| DEMO |  | MORE |` bracket buttons (white).
- Figma reuses 3 stock images, some mirrored (`scaleX(-1)`). That is filler, so use real project images.
- **Footer line** below the grid: "And many more to come!" centered, `#FFFBFB`, 20px / 600.

## 11. Contact

- Background: `--bg-light`. Section header box "CONTACT" (367px wide).
- Paragraph (Open Sans 15px, center, `#000`, max-width ≈ 763px), then separator.
- **Form** (centered, field width ≈ 609px):
  - Fields: `ENTER YOUR NAME*`, `ENTER YOUR EMAIL*`, `PHONE NUMBER`, `YOUR MESSAGE*` (textarea).
  - Field style: **no full border**. Only `border-left: 5px solid #000` and `border-bottom: 5px solid #000`, transparent background. Height 48px (textarea ≈ 184px tall). Vertical pitch ≈ 101px (≈ 53px gap between fields).
  - Placeholder: Montserrat 700 14px, uppercase, ls 0.04em, `#8B8B8B`, left-padded ≈ 15px. `*` means required (name, email, message).
- **SUBMIT** bracket button, centered below (bars 3px × 45px, black).

## 12. Footer

- Background `#1A1A1A`, height ≈ 326px, all content centered and white.
- Top: "BACK TO TOP" (Montserrat 700 15px, ls 0.185em) with a small double-chevron icon (≈ 15px, pointing **up**) above it. Clicking scrolls to top.
- Middle: row of social icons, ≈ 30px each, `rgba(255,255,255,.9)`, ≈ 28px gaps. Screenshots show **4 icons**: Facebook, LinkedIn, Instagram, Email. (The CSS export lists only 3 vectors; follow the screenshot.)
- Bottom: "@2020 Tomasz Gajda All Rights Reserved." in Nunito 700 18px.

## 13. Mobile (estimated from screenshots; screenshots are @2x of a ~375px viewport)

Suggested breakpoints: **mobile ≤ 767px**, desktop ≥ 1024px. No tablet design exists, so interpolate (keep the desktop layout but scale gaps/fonts, collapse the nav to a hamburger below ~900px).

**General:** single column, sections stacked, side padding ≈ 24–30px, same colors/fonts/section order. Section header boxes keep the 8px black border but are smaller (≈ 150–200px wide, text ≈ 14–16px with wide letter-spacing). Body text ≈ 12–14px Open Sans, justified.

**Navbar:** black bar, ≈ 56px tall. Logo (white) left, hamburger (white, 3 bars) right.

**Menu (open):**
- Hamburger turns into an **X** (white).
- Header keeps a black bar with a 1px white line under it.
- Dropdown is full width, links stacked and centered: `About me`, `Skills`, `Portfolio` in white (Montserrat ≈ 16px / 600) on a dark translucent overlay (≈ `rgba(26,26,26,.9)`) over the page, each ≈ 55–60px tall.
- Last row `CONTACT ME`: **white background, black uppercase text**, full width.
- Tapping a link closes the menu and scrolls to the section.

**Hero (primary version – `mobile_landing`):**
- Full viewport height, black background, cut-out photo fills the upper portion (face centered, shoulders cropped).
- Bottom of the screen: a **semi-transparent grey band** (≈ `rgba(95,99,104,.9)`), with its top edge slanted (rising to the right ≈ 10–12deg), covering the lower ≈ 20% of the screen and the photo behind it.
- In the band, left-aligned: "Hi, I am" (Raleway 700 ≈ 18px, white), name (Raleway 700 ≈ 30–32px, white), role (Raleway 800 ≈ 12px, white).
- Social icons (email, GitHub, LinkedIn) are **stacked vertically at the right side** of the band, plain white glyphs (≈ 26px) with **no grey tiles**.

**Alternate hero (appears in `mobile_full_page` and in the open-menu screenshot):** a mountain/mist background photo with centered text "my name is Thomas" (light rounded display font, ≈ 20px) over "I'M A DEVELOPER" (Montserrat 700, white, ≈ 28px), then the separator and the 3 social icons in a row. This conflicts with the photo hero and is an older variation. **Use the photo hero** (`mobile_landing`) as the default and keep the alternate only if the user asks for it. The display font in "my name is Thomas" is not specified in the export.

**IT Berries:** dark `#1D1D1D`, header "IT BERRIES" at left, justified white paragraph, bracket button labeled **MORE** (instead of READ MORE) centered, faded rotated "IT" outline decoration partly visible at the right/bottom.

**About:** section header box, left-aligned justified paragraph, EXPLORE button, separator. Services **stacked vertically** (DESIGN, DEVELOPMENT, MAINTENANCE), each left-aligned: faded icon behind the title, title ≈ 14px, description ≈ 12px justified. Separator after.

**Skills:** header box, "USING NOW:" sub-heading (large, ≈ 22–24px, centered). Items are in **one column**, icon above the label, centered (icons ≈ 64px, labels ≈ 16px). The screenshot shows only HTML5, CSS3, SASS before the Portfolio banner, so it is truncated or abbreviated. Render all skill groups using the same pattern (a 2-column grid is also acceptable for the long lists).

**Portfolio:** banner photo with the header box. Filter tabs ALL / CODED / DESIGNED (in the mockup, DESIGNED wraps to a second line; prefer a single row with smaller text). Tiles are **full-width, one per row**, ≈ 16:9. The "eatsome." overlay content is visible by default on the first tile. "And many more to come!" below.

**Contact:** header box, short paragraph, separator, form fields at ≈ full width minus padding (same left+bottom bar style), SUBMIT button.

**Footer:** `BACK TO TOP` with chevron, 4 social icons in a row (white outlined squares/circles), copyright in Nunito (≈ 13–14px).

## 14. Interactions and behavior

- Navbar background changes from transparent to `#0B0B0B` (66px high) after scrolling past the hero.
- Smooth scrolling to the section anchors; BACK TO TOP scrolls to the top.
- Portfolio filter (ALL / CODED / DESIGNED) with a moving 201px active underline.
- Portfolio tile hover shows the dark overlay with DEMO / MORE.
- READ MORE / MORE expands or links to the IT Berries content. EXPLORE scrolls to services. (Targets are not specified.)
- Form: client-side validation for the starred fields; `email` type for email, `tel` for phone.
- Social links (email, GitHub, LinkedIn, Facebook, Instagram) in hero and footer open in a new tab; email uses `mailto:`.
- Add visible `:focus` styles (the design has none) and alt text/aria-labels for icons.
