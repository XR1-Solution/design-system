/* XR1 Solution — Website UI kit · primitives */
const { useState, useEffect, useRef } = React;

function Brand({ onClick }) {
  return (
    <div className="brand" onClick={onClick}>
      <span className="tile">XR1</span>
      <span>SOLUTION</span>
    </div>
  );
}

function Button({ variant = "primary", children, onClick, href }) {
  const cls = "btn " + (variant === "primary" ? "btn-primary" : "btn-ghost");
  if (href) return <a className={cls} href={href} onClick={onClick}>{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
}

/* Icon helper — renders a Lucide icon (CDN). createIcons() called globally after mount. */
function Icon({ name, size = 22 }) {
  return <i data-lucide={name} style={{ width: size, height: size }}></i>;
}

/* Animated, colorized terminal typewriter */
const HERO_SCRIPT = [
  { t: "xr1 ❯ ", c: "cl-p" },
  { t: "start ", c: "cl-c" },
  { t: "--project acme\n", c: "cl-a" },
  { t: "# scoping the solution…\n", c: "cl-a" },
  { t: "✓ brand + design system\n", c: "cl-ok" },
  { t: "✓ web app · react/node\n", c: "cl-ok" },
  { t: "✓ automations · n8n\n", c: "cl-ok" },
  { t: "  delivered in 4.0 weeks\n", c: "cl-a" },
  { t: "xr1 ❯ ", c: "cl-p" },
  { t: "ship it", c: "cl-m" },
];

function HeroTerminal() {
  const total = HERO_SCRIPT.reduce((a, s) => a + s.t.length, 0);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= total) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setN(total); return; }
    const id = setTimeout(() => setN(n + 1), n < 6 ? 70 : 24);
    return () => clearTimeout(id);
  }, [n, total]);

  let left = n;
  const out = [];
  for (let i = 0; i < HERO_SCRIPT.length; i++) {
    const seg = HERO_SCRIPT[i];
    if (left <= 0) break;
    const slice = seg.t.slice(0, left);
    out.push(<span key={i} className={seg.c}>{slice}</span>);
    left -= seg.t.length;
  }
  return (
    <div className="term">
      <div className="term-bar">
        <span className="tb r"></span><span className="tb a"></span><span className="tb g"></span>
        <span className="term-name">~/xr1 — zsh</span>
      </div>
      <pre className="term-body">{out}<span className="cur"></span></pre>
    </div>
  );
}

Object.assign(window, { Brand, Button, Icon, HeroTerminal });
