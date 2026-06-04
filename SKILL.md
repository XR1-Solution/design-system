---
name: xr1-solution-design
description: Use this skill to generate well-branded interfaces and assets for XR1 Solution, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. XR1 Solution is a hybrid digital studio (software + design + automation) with a dark-first TUI / terminal aesthetic — pixel display type, monospace body, ASCII logos, phosphor-green accent.
user-invocable: true
---

# XR1 Solution — Design Skill

Read **`README.md`** first — it holds the brand context, content/voice rules, full visual
foundations, and iconography. Then explore the other files as needed.

## What's here
- `colors_and_type.css` — all design tokens (CSS variables) + semantic type classes. Import this
  into any artifact and load the three Google Fonts (import string is at the top of the file).
- `assets/` — ASCII logo marks (`logo-xr1-block.txt`, `logo-xr1-box.txt`).
- `preview/` — specimen cards documenting type, color, spacing, components, brand.
- `ui_kits/website/` — marketing-site recreation (React/JSX, no build step).
- `ui_kits/console/` — TUI client-dashboard recreation (React/JSX, no build step).

## How to use it
- **Throwaway visuals** (slides, mocks, prototypes): copy the assets/tokens you need and produce
  static, self-contained HTML files for the user to view. Lean on the UI-kit components for
  in-brand screens.
- **Production code**: copy assets and internalize the rules here to design fluently in the brand.

## Non-negotiables (the gist — README has the detail)
- **Dark only.** Near-black terminal surfaces; phosphor green `#6EE7A0` is the single hero accent.
- **Type:** Pixelify Sans (display/wordmark) · JetBrains Mono (body/UI/code) · Silkscreen (micro-labels).
- **Voice:** terse, lowercase-leaning, technical-but-warm. "we" / "you". The `xr1 ❯` prompt and
  `❯` glyph are signature. **No emoji** — icons are monospace glyphs or Lucide (CDN).
- **Look:** hairline 1px borders over shadows, square-leaning radii (2–8px), CRT scanlines + green
  glow, fast `steps(1)` cursor-blink motion, `translateY(1px)` press states.

If invoked with no other guidance, ask the user what they want to build, ask a few focused
questions, then act as an expert XR1 designer who outputs HTML artifacts **or** production code
depending on the need.
