# XR1 Solution — Design System

> **"The studio as a terminal."** A dark-first, TUI / CRT-inspired identity for a hybrid
> digital studio. Pixel display type, monospace everything-else, ASCII logos, and a palette
> built from a refined ANSI-16 terminal scheme with phosphor-green as the hero.

---

## 1 · Company context

**XR1 Solution** is a hybrid digital studio — software development, web design, automation
and visual communication under one roof. The positioning is deliberate: they don't sell
"websites" or "graphics," they sell **complete solutions** that bring **order, identity and
function** to a client's digital project.

The brand voice expresses this through a terminal/developer-console metaphor: the studio
behaves like a well-designed command-line tool — precise, fast, no fluff, everything in its
right place. This is the through-line for every design decision below.

Three capability pillars, used as a recurring triad in copy and layout:

| Pillar | Plain meaning |
|---|---|
| `software`   | Custom development — apps, tools, integrations |
| `design`     | Web design + visual communication / brand systems |
| `automation` | Workflow automation that removes manual busywork |

### Sources
This system was created **from a written brief only** — no codebase, Figma, or existing
brand assets were provided. The direction (dark theme by default, ASCII/TUI-style logo à la
*opencode*, "modern but 8-bit" type) was supplied in the kickoff brief and interpreted into
the full system documented here. There are **no external source links to credit.** If XR1
Solution has existing brand files (logo, site, deck), share them and this system will be
reconciled against them.

---

## 2 · Content fundamentals — how XR1 writes

The copy reads like clean terminal output: **lowercase-leaning, terse, technical-but-warm.**

- **Voice & person.** Plural "we" for the studio; "you / your project" for the client.
  Confident and plain — never salesy. "We build complete digital solutions" not
  "We are passionate about leveraging synergies."
- **Casing.** Three deliberate registers:
  - `lowercase mono` for commands, labels, file-like nouns, nav, and product chrome
    (`software · design · automation`, `xr1 ❯ deploy`).
  - **Title / sentence case** for headlines and body sentences.
  - `UPPERCASE + wide tracking` for eyebrows and micro-labels only (`PROJECT NAME`, `ACTIVE`).
- **The triad.** `order · identity · function` (or `software · design · automation`) recurs as
  a rhythm device — usually middot-separated, lowercase.
- **Terminal grammar.** The `xr1 ❯` prompt, the `❯` glyph, command-style verbs
  (`build`, `deploy`, `init`, `sync`), and `# comments` are part of the voice. Use sparingly
  as seasoning, not on every line.
- **Numbers & claims.** Concrete and quiet (`142 modules`, `runs every 6h`, `done in 3.4s`).
  No invented stats, no hype metrics.
- **Emoji.** **None.** The icon language is monospace glyphs and box-drawing characters
  (see Iconography). Status is shown with colored dots, not 🟢.
- **Vibe.** Calm competence. The feeling of a tool that just works — quiet, precise,
  a little nerdy, never loud.

**Examples**
- Hero: `We bring order, identity and function to digital projects.`
- Eyebrow: `DIGITAL STUDIO — SOFTWARE · DESIGN · AUTOMATION`
- Button: `start a project ❯` / `view work`
- Status line: `● online · 12 projects · last deploy 04:00`
- Section header: `// what we do`

---

## 3 · Visual foundations

### Theme
**Dark by default**, and effectively dark-only — the identity lives on near-black terminal
surfaces. There is no light theme in scope.

### Color
A refined **ANSI-16 terminal palette**. Phosphor **green `#6EE7A0` is the single hero accent**;
amber / cyan / blue / magenta / red are reserved supporting + syntax + semantic colors. The
palette is dominant-neutral with one sharp accent — never a rainbow.
- Surfaces step deep→raised: `bg-0 #0A0C0D` (page) → `bg-1` → `bg-2` → `bg-3`, plus
  `bg-inset #070809` for terminal wells and code.
- Text ramps `fg-0 → fg-4`. Green is used for: primary actions, the prompt glyph, active
  states, success, and small accents — not large fills of body text.
- Full tokens in **`colors_and_type.css`**.

### Typography
- **Display / wordmark — Pixelify Sans** (the "modern 8-bit" face). Headings, hero, logo.
- **Body / UI / code — JetBrains Mono.** Everything functional. Monospace is the default
  texture of the whole brand.
- **Micro-labels — Silkscreen.** Tiny uppercase bitmap badges and chrome accents only.
- Eyebrows are mono, uppercase, `letter-spacing: .14em`, green.
- ⚠️ **Fonts load from Google Fonts CDN** (see import in `colors_and_type.css`). They are not
  self-hosted in `fonts/` because binaries couldn't be fetched in this environment — if you
  need offline/self-hosted copies, download the three families and drop them in `fonts/`.

### Spacing & grid
4px base scale (`sp-1`=4 … `sp-8`=64). An 8px **character-cell rhythm** underlies layouts —
think aligned columns and monospace grids rather than free-flowing whitespace.

### Corner radii
**Square-leaning.** Default control radius is `2px`; cards/inputs `4px`; large panels `8px`;
pills use full radius only for status chips/tags. Sharp corners reinforce the TUI feel.

### Borders
**Hairline 1px borders are the primary structural device** — `--line` for most edges,
`--line-strong` on interactive/hover, `--line-faint` for the quietest dividers. The brand is
*border-led*, not shadow-led.

### Elevation & shadows
Flat and restrained. Prefer **border + subtle green glow** over drop shadows. `shadow-2` is a
soft deep shadow for floating panels/terminals; `glow-soft` (green halo) marks active/primary
surfaces; `ring-focus` (green ring + wash) is the focus state. No heavy material elevation.

### Cards / panels
`bg-1` fill, `1px --line` border, `4px` radius. Often have a **title bar** (`bg-2`, bottom
border, a status dot + mono filename-style title + Silkscreen status tag) over a padded body.
Terminal panels use `bg-inset`, a `6px` radius, traffic-light dots, and `shadow-2`.

### Backgrounds & texture
Solid near-black `bg-0` is the base. Two signature treatments layer on top:
1. **CRT scanlines** — `repeating-linear-gradient` of ~1.5% white, 1px line every 4px. Very
   subtle; used on hero/feature surfaces.
2. **Phosphor glow** — a soft green radial (top-left) bleeding into the surface.
No photographic backgrounds, no mesh gradients, no purple/blue hero gradients. ASCII art is a
legitimate "graphic."

### Imagery
Imagery is sparse and on-brand: ASCII art, terminal screenshots, code, and product UI shots.
If photography is used, treat it **cool, high-contrast, near-monochrome with grain** so it
sits on the dark palette. Never warm, glossy stock photography.

### Motion
Fast and mechanical. Transitions `90–260ms`, `ease-out`. The signature animation is a
**hard `steps(1)` blinking block cursor** (`█`). Hovers and toggles are snappy; press states
nudge `translateY(1px)`. No bouncy spring physics, no parallax. Respect
`prefers-reduced-motion`.

### Interaction states
- **Hover:** ghost controls gain a green border + `--wash-green` (8% green) background and
  green text; primary buttons lighten to `green-bright`; list rows lift to `bg-2`.
- **Press / active:** `translateY(1px)` (a tactile "keypress").
- **Focus:** `ring-focus` — 1px green ring + 3–4px green glow.
- **Selected:** `--wash-green` fill + 2px green left-border + green text (TUI selection bar).

### Transparency & blur
Used minimally. Washes (`--wash-green`, `--glow-green`) are translucent green for selection
and glow. Backdrop blur is **not** part of the language — the aesthetic is crisp, not glassy.

---

## 4 · Iconography

The brand's **native icon language is monospace text**, not an icon set:
- **Box-drawing characters** build logos, frames and dividers: `┌ ─ ┐ │ └ ┘ ▸ ❯ █ ░ ▮`.
- **The `❯` prompt glyph** is the single most important symbol — it stands in for "go,"
  "command," and the brand mark itself.
- **Status = colored dots** (`●`), never emoji. Tags are prefixed with `#`.
- **No emoji**, anywhere in product or marketing.

For richer product UI (a dashboard, settings, etc.) where text glyphs aren't enough, use
**[Lucide](https://lucide.dev)** via CDN — its 1.5px stroke, square-ish geometry and
minimal style match the TUI feel. ⚠️ **Lucide is a substitution**, chosen as the closest match
to the brand's line aesthetic; there is no proprietary XR1 icon set. Swap it out if one is
created. Load: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.

Logo assets live in **`assets/`** as plain-text ASCII (`logo-xr1-block.txt`, `logo-xr1-box.txt`)
plus rendered lockups in the Brand preview cards. Render ASCII logos in JetBrains Mono, green,
with a soft glow, on a dark surface.

---

## 5 · Index — what's in this system

| Path | What it is |
|---|---|
| `README.md` | This file — context, voice, visual foundations, iconography. |
| `colors_and_type.css` | All design tokens (CSS vars) + semantic type classes. Import this. |
| `SKILL.md` | Agent-Skill manifest so this system is usable in Claude Code. |
| `assets/` | ASCII logo marks (`logo-xr1-block.txt`, `logo-xr1-box.txt`). |
| `preview/` | 22 Design-System specimen cards (type, color, spacing, components, brand). |
| `ui_kits/website/` | Marketing-site UI kit — interactive recreation + JSX components. |
| `ui_kits/console/` | TUI-style client console (dashboard app) UI kit + JSX components. |

> No slide template was provided, so `slides/` was intentionally not created. Ask if you'd
> like a deck template built on this system.
