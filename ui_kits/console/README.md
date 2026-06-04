# UI Kit — XR1 Solution Console

An interactive, TUI-styled client dashboard — the "app" surface of XR1 Solution. Where clients
watch their projects, deploys and automations like a well-designed command-line tool.

## Run
Open `index.html` (React via Babel-in-browser, no build step).

## Files
| File | Contents |
|---|---|
| `index.html` | Head (fonts + tokens), CDN React/Babel/Lucide, mounts the app. |
| `console.css` | App-shell + component styles. Imports `../../colors_and_type.css`. |
| `console-ui.jsx` | Primitives: `Sidebar`, `TopBar`, `Toggle`, `Icon`. |
| `console-app.jsx` | `LogBlock` + views (`Overview`, `Projects`, `ProjectDetail`, `Automations`, `Settings`) + `App` state. |

## Interactions
- Sidebar nav switches views; active row gets the green selection bar.
- **Projects → click any row → project detail** (deploy log, env table, deploys/automations tabs).
- **Automations** flows have working toggle switches (flip active/idle live).
- Breadcrumb in the top bar tracks the current view / project.

## Components covered
App shell (sidebar + topbar), nav rows with counts, stat cards, log/terminal panels,
data rows with status dots, key/value tables, tabs, toggles, buttons, command-palette hint.

## Notes
- **Icons:** [Lucide](https://lucide.dev) via CDN — flagged substitution; no proprietary XR1 set.
- All workspace/project/automation data is representative sample content.
- Fonts load from Google Fonts CDN.
