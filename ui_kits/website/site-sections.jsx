/* XR1 Solution — Website UI kit · sections + app */
const ASCII_XR1 = `██╗  ██╗ ██████╗   ██╗
╚██╗██╔╝ ██╔══██╗ ███║
 ╚███╔╝  ██████╔╝ ╚██║
 ██╔██╗  ██╔══██╗  ██║
██╔╝ ██╗ ██║  ██║  ██║
╚═╝  ╚═╝ ╚═╝  ╚═╝  ╚═╝`;

const SERVICES = [
  { ico: "code-xml", h: "software", p: "Custom apps, internal tools and integrations — built to last, not to demo.",
    li: ["web & product apps", "APIs & integrations", "react · node · postgres"] },
  { ico: "shapes", h: "design", p: "Brand systems, websites and visual communication with a clear point of view.",
    li: ["identity & design systems", "web & ui design", "figma · motion"] },
  { ico: "workflow", h: "automation", p: "We remove the manual busywork so your team ships, not copies and pastes.",
    li: ["workflow automation", "data sync & pipelines", "n8n · zapier · scripts"] },
];

const ASCII_TILE = [
`  ┌───────────┐
  │ ▓▓▓  ▓ ▓▓  │
  │ ▓ ▓  ▓ ▓ ▓ │
  │ ▓▓▓  ▓ ▓▓  │
  └───────────┘`,
`   ╔═╗ ╔═╗ ╔═╗
   ║▓║→║▓║→║▓║
   ╚═╝ ╚═╝ ╚═╝
   sync · 06h`,
`  ████░░░░░░ 40%
  ██████░░░░ 62%
  █████████░ 91%`,
`  > ls ./brand
  logo.svg
  tokens.css
  type.woff2`,
];

const WORK = [
  { h: "atlas-core", p: "Operations platform + design system", yr: "2025", tags: ["product", "design-system", "react"], art: 0 },
  { h: "ledgersync", p: "Finance automation · Stripe → Notion", yr: "2025", tags: ["automation", "n8n"], art: 1 },
  { h: "northwind.io", p: "Marketing site + CMS rebuild", yr: "2024", tags: ["web", "design"], art: 2 },
  { h: "brand://meridian", p: "Identity + brand toolkit", yr: "2024", tags: ["identity", "figma"], art: 3 },
];

const STEPS = [
  { n: "01", h: "scope", p: "We map the problem and define what 'done' looks like — no guessing." },
  { n: "02", h: "design", p: "Identity, flows and interface, decided in the open with you." },
  { n: "03", h: "build", p: "Software and automations, shipped in tight, reviewable increments." },
  { n: "04", h: "handoff", p: "Documented, owned by you, with the system to keep moving." },
];

function Nav({ onStart }) {
  const go = (id) => (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <nav className="nav"><div className="wrap nav-inner">
      <Brand onClick={go("top")} />
      <div className="nav-links">
        <a href="#work" onClick={go("work")}>work</a>
        <a href="#services" onClick={go("services")}>services</a>
        <a href="#process" onClick={go("process")}>process</a>
        <a href="#contact" onClick={go("contact")}>contact</a>
      </div>
      <Button variant="ghost" onClick={onStart}>start a project ❯</Button>
    </div></nav>
  );
}

function Hero({ onStart }) {
  return (
    <header className="hero" id="top"><div className="wrap hero-grid">
      <div>
        <pre className="ascii">{ASCII_XR1}</pre>
        <h1>We bring <span className="g">order, identity</span> and function to digital projects.</h1>
        <p className="lead">A hybrid studio for software, design and automation. One team, one
          system — from the first command to the final deploy.</p>
        <div className="hero-cta">
          <Button onClick={onStart}>start a project ❯</Button>
          <Button variant="ghost" href="#work" onClick={(e)=>{e.preventDefault();document.getElementById('work')?.scrollIntoView({behavior:'smooth'});}}>view work</Button>
        </div>
      </div>
      <HeroTerminal />
    </div></header>
  );
}

function Services() {
  return (
    <section className="section" id="services"><div className="wrap">
      <div className="sec-label">// <b>what we do</b></div>
      <h2 className="sec-title">Three disciplines, one team.</h2>
      <p className="sec-sub">Most studios hand you a piece. We hand you the whole working system —
        designed, built and automated to fit together.</p>
      <div className="svc-grid">
        {SERVICES.map((s) => (
          <div className="svc" key={s.h}>
            <div className="ico"><Icon name={s.ico} size={24} /></div>
            <h3>{s.h}</h3>
            <p>{s.p}</p>
            <ul>{s.li.map((l) => <li key={l}>{l}</li>)}</ul>
          </div>
        ))}
      </div>
    </div></section>
  );
}

function Work() {
  return (
    <section className="section" id="work"><div className="wrap">
      <div className="sec-label">// <b>selected work</b></div>
      <h2 className="sec-title">Recent solutions.</h2>
      <p className="sec-sub">Representative projects. Replace with XR1's real case studies when ready.</p>
      <div className="work-grid">
        {WORK.map((w) => (
          <article className="work" key={w.h}>
            <div className="work-top"><pre>{ASCII_TILE[w.art]}</pre></div>
            <div className="work-meta">
              <div><h4>{w.h}</h4><p>{w.p}</p></div>
              <span className="yr">{w.yr}</span>
            </div>
            <div className="tagrow">{w.tags.map((t) => <span className="tg" key={t}>{t}</span>)}</div>
          </article>
        ))}
      </div>
    </div></section>
  );
}

function Process() {
  return (
    <section className="section" id="process"><div className="wrap">
      <div className="sec-label">// <b>how we work</b></div>
      <h2 className="sec-title">A predictable path.</h2>
      <p className="sec-sub">No black boxes. Four phases, each ending in something you can see and own.</p>
      <div className="steps">
        {STEPS.map((s) => (
          <div className="step" key={s.n}>
            <div className="n">{s.n}</div>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}

function Contact({ formRef }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <section className="section" id="contact" ref={formRef}><div className="wrap contact">
      <div>
        <div className="sec-label">// <b>start</b></div>
        <h2>Got a project that needs <span className="g">order?</span></h2>
        <p className="muted" style={{ fontSize: 15, lineHeight: 1.65, maxWidth: "44ch" }}>
          Tell us what you're building. We reply within a day with a clear next step — no decks,
          no runaround.</p>
        <div style={{ marginTop: 24, color: "var(--fg-3)", fontSize: 13 }}>
          <div>● available for new work</div>
          <div style={{ marginTop: 6 }}>hello@xr1solution.studio</div>
        </div>
      </div>
      <div className="form">
        <div className="term-bar"><span className="tb r"></span><span className="tb a"></span><span className="tb g"></span><span className="term-name">new-project.sh</span></div>
        <div className="term-body">
          {sent ? (
            <div className="sent">✓ message sent — we'll be in touch.<br /><span style={{color:"var(--fg-3)"}}># talk soon, {name || "friend"}</span></div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="flabel">your name</div>
              <div className="field"><span className="pfx">xr1 ❯</span><input value={name} onChange={(e)=>setName(e.target.value)} placeholder="jane doe" spellCheck="false" /></div>
              <div className="flabel">what do you need built?</div>
              <div className="field" style={{ alignItems: "flex-start" }}><span className="pfx" style={{ marginTop: 2 }}>xr1 ❯</span><textarea rows="3" value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="a web app + brand + automations…" spellCheck="false"></textarea></div>
              <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center", marginTop: 6 }}>send ❯</button>
            </form>
          )}
        </div>
      </div>
    </div></section>
  );
}

function Footer() {
  return (
    <footer className="footer"><div className="wrap foot-inner">
      <div style={{ maxWidth: 280 }}>
        <Brand />
        <p className="muted" style={{ fontSize: 13, lineHeight: 1.6, marginTop: 14 }}>
          A hybrid digital studio. Software, design and automation — in order.</p>
      </div>
      <div className="foot-col"><h5>studio</h5><a href="#work">work</a><a href="#services">services</a><a href="#process">process</a></div>
      <div className="foot-col"><h5>connect</h5><a href="#contact">contact</a><a href="#">github</a><a href="#">linkedin</a></div>
      <div className="foot-col"><h5>say hi</h5><a href="#">hello@xr1solution.studio</a></div>
    </div>
    <div className="wrap copy">© 2026 XR1 Solution · built in the terminal ❯</div>
    </footer>
  );
}

function App() {
  const formRef = useRef(null);
  const onStart = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <React.Fragment>
      <div className="scanlines"></div>
      <Nav onStart={onStart} />
      <Hero onStart={onStart} />
      <Services />
      <Work />
      <Process />
      <Contact formRef={formRef} />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
