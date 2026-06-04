# UI Kit — XR1 Solution Marketing Website

An interactive, in-brand recreation of XR1 Solution's marketing site. Dark TUI aesthetic,
ASCII hero mark, animated terminal, monospace throughout.

## Run
Open `index.html`. It mounts a React app (no build step — Babel-in-browser).

## Files
| File | Contents |
|---|---|
| `index.html` | Head (fonts + tokens), CDN React/Babel/Lucide, mounts the app. |
| `site.css` | All kit styles. Imports `../../colors_and_type.css`. |
| `site-ui.jsx` | Primitives: `Brand`, `Button`, `Icon` (Lucide), `HeroTerminal` (animated typewriter). |
| `site-sections.jsx` | `Nav`, `Hero`, `Services`, `Work`, `Process`, `Contact`, `Footer`, `App`. |

## Interactions
- Sticky nav with smooth-scroll anchors; "start a project ❯" jumps to the contact form.
- Hero terminal types a colorized build sequence on load (respects reduced-motion).
- Service / work cards have hover lift + green glow.
- Contact form is a fake terminal `new-project.sh` — submitting shows a `✓ message sent` state.

## Notes
- **Icons:** [Lucide](https://lucide.dev) via CDN (`code-xml`, `shapes`, `workflow`) — a flagged
  substitution matching the brand's thin-line/box geometry. The native icon language is still
  monospace glyphs (`❯ ▸ #`).
- **Work content is representative**, not real case studies — swap in XR1's actual projects.
- Fonts load from Google Fonts CDN.
