/* XR1 Solution — Console UI kit · views + app */
function LogBlock({ lines }) {
  return (
    <div className="log">
      {lines.map((segs, i) => (
        <div key={i}>{segs.map((s, j) => <span key={j} className={s.c}>{s.t}</span>)}</div>
      ))}
    </div>
  );
}
const ACTIVITY = [
  [{ t: "04:12 ", c: "tm" }, { t: "✓ deploy ", c: "ok" }, { t: "atlas-core " }, { t: "v2.4.1", c: "nm" }, { t: " → production" }],
  [{ t: "04:00 ", c: "tm" }, { t: "✓ run ", c: "ok" }, { t: "invoice-sync · 142 rows synced" }],
  [{ t: "03:48 ", c: "tm" }, { t: "⟳ build ", c: "nm" }, { t: "ledgersync #218 started" }],
  [{ t: "03:31 ", c: "tm" }, { t: "✗ build ", c: "er" }, { t: "pipe-runner #57 failed — exit 1" }],
  [{ t: "02:00 ", c: "tm" }, { t: "✓ run ", c: "ok" }, { t: "backup-db · 1.2GB → s3" }],
  [{ t: "00:14 ", c: "tm" }, { t: "! warn ", c: "wn" }, { t: "northwind-web high memory (82%)" }],
];
const DEPLOYLOG = [
  [{ t: "04:12 ", c: "tm" }, { t: "✓", c: "ok" }, { t: " build complete — 142 modules" }],
  [{ t: "04:12 ", c: "tm" }, { t: "✓", c: "ok" }, { t: " uploaded → fra1" }],
  [{ t: "04:12 ", c: "tm" }, { t: "✓", c: "ok" }, { t: " health check passed" }],
  [{ t: "04:12 ", c: "tm" }, { t: "→ live at atlas-core.acme.app", c: "nm" }],
  [{ t: "04:08 ", c: "tm" }, { t: "# triggered by jane@acme.co", c: "tm" }],
];
const LINKEDAUTO = [
  [{ t: "● ", c: "ok" }, { t: "deploy-notify · fires on every deploy" }],
  [{ t: "● ", c: "ok" }, { t: "backup-db · nightly 02:00" }],
  [{ t: "○ ", c: "tm" }, { t: "lead-router · disabled" }],
];
const PROJECTS = [
  { id: "atlas-core", st: "on", stl: "running", env: "production", meta: "deployed 4m ago · v2.4.1", repo: "acme/atlas-core", region: "fra1", node: "v20.11" },
  { id: "ledgersync", st: "bd", stl: "building", env: "production", meta: "build #218 · 00:42", repo: "acme/ledgersync", region: "fra1", node: "v20.11" },
  { id: "northwind-web", st: "on", stl: "running", env: "production", meta: "deployed 2h ago · v1.9.0", repo: "acme/northwind", region: "iad1", node: "v20.11" },
  { id: "meridian-brand", st: "idle", stl: "idle", env: "preview", meta: "no deploys yet", repo: "acme/meridian", region: "—", node: "—" },
  { id: "pipe-runner", st: "er", stl: "failed", env: "staging", meta: "build #57 failed · 11m ago", repo: "acme/pipe-runner", region: "fra1", node: "v18.19" },
];

const AUTOMATIONS_INIT = [
  { id: "invoice-sync", desc: "Stripe → Notion · every 6h", last: "04:00 · 142 rows", on: true },
  { id: "deploy-notify", desc: "Deploy → Slack #ship", last: "4m ago", on: true },
  { id: "backup-db", desc: "Postgres dump → S3 · daily", last: "02:00 · 1.2GB", on: true },
  { id: "lead-router", desc: "Form → CRM + email", last: "18m ago", on: false },
  { id: "weekly-report", desc: "Metrics digest · Mondays", last: "Mon 09:00", on: true },
];

function Overview() {
  return (
    <React.Fragment>
      <div className="view-head"><h1>Overview</h1><p>acme workspace · 5 projects · 8 automations</p></div>
      <div className="stats">
        <div className="stat"><div className="k"><Icon name="folder-git-2" /> projects</div><div className="v">5</div><div className="d">4 healthy</div></div>
        <div className="stat"><div className="k"><Icon name="workflow" /> automations</div><div className="v">7</div><div className="d">running now</div></div>
        <div className="stat"><div className="k"><Icon name="rocket" /> deploys / 24h</div><div className="v">23</div><div className="d">+6 vs avg</div></div>
        <div className="stat"><div className="k"><Icon name="activity" /> uptime</div><div className="v">99.9%</div><div className="d down">30d window</div></div>
      </div>
      <div className="cols">
        <div className="panel">
          <div className="panel-h"><span className="t">activity</span><span className="act">view all</span></div>
          <LogBlock lines={ACTIVITY} />
        </div>
        <div className="panel">
          <div className="panel-h"><span className="t">automations</span><span className="act">manage</span></div>
          <div className="rows">
            {AUTOMATIONS_INIT.slice(0, 4).map((a) => (
              <div className="r" key={a.id} style={{ cursor: "default" }}>
                <span className={"dot " + (a.on ? "on" : "idle")}></span>
                <div><div className="nm" style={{ fontSize: 13 }}>{a.id}</div><div className="meta">{a.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Projects({ onOpen }) {
  return (
    <React.Fragment>
      <div className="view-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div><h1>Projects</h1><p>5 projects across production, staging & preview</p></div>
        <button className="btn btn-primary">+ new project</button>
      </div>
      <div className="panel">
        <div className="panel-h"><span className="t">all projects</span><span className="act">filter ▾</span></div>
        <div className="rows">
          {PROJECTS.map((p) => (
            <div className="r" key={p.id} onClick={() => onOpen(p.id)}>
              <span className={"dot " + p.st}></span>
              <span className="nm">{p.id}</span>
              <span className="env">{p.env}</span>
              <span className="meta">{p.meta}</span>
              <span className="arrow">❯</span>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

function ProjectDetail({ id, onBack }) {
  const p = PROJECTS.find((x) => x.id === id);
  const [tab, setTab] = useState("overview");
  return (
    <React.Fragment>
      <div className="back" onClick={onBack}>‹ projects</div>
      <div className="view-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className={"dot " + p.st} style={{ width: 10, height: 10, borderRadius: 99, display: "inline-block" }}></span>
          <div><h1 style={{ marginBottom: 2 }}>{p.id}</h1><p>{p.stl} · {p.env} · {p.repo}</p></div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn btn-ghost">logs</button>
          <button className="btn btn-primary">deploy ❯</button>
        </div>
      </div>
      <div className="tabs">
        {["overview", "deploys", "automations"].map((t) => (
          <div key={t} className={"tab" + (tab === t ? " active" : "")} onClick={() => setTab(t)}>{t}</div>
        ))}
      </div>
      {tab === "overview" && (
        <div className="cols">
          <div className="panel">
            <div className="panel-h"><span className="t">deploy log</span></div>
            <LogBlock lines={DEPLOYLOG} />
          </div>
          <div className="panel">
            <div className="panel-h"><span className="t">environment</span></div>
            <div className="kv">
              <div className="k">status</div><div className="vv green">{p.stl}</div>
              <div className="k">env</div><div className="vv">{p.env}</div>
              <div className="k">region</div><div className="vv">{p.region}</div>
              <div className="k">node</div><div className="vv">{p.node}</div>
              <div className="k">repo</div><div className="vv">{p.repo}</div>
            </div>
          </div>
        </div>
      )}
      {tab === "deploys" && (
        <div className="panel"><div className="panel-h"><span className="t">recent deploys</span></div>
          <div className="rows">
            {[["v2.4.1","✓","4m ago","jane"],["v2.4.0","✓","2h ago","ci-bot"],["v2.3.9","✓","yesterday","jane"],["v2.3.8","✗","2d ago","ci-bot"]].map((d,i)=>(
              <div className="r" key={i} style={{cursor:"default"}}>
                <span className={"dot "+(d[1]==="✓"?"on":"er")}></span>
                <span className="nm">{d[0]}</span><span className="meta">{d[2]}</span>
                <span className="meta" style={{marginLeft:"auto"}}># {d[3]}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {tab === "automations" && (
        <div className="panel"><div className="panel-h"><span className="t">linked automations</span></div>
          <LogBlock lines={LINKEDAUTO} />
        </div>
      )}
    </React.Fragment>
  );
}

function Automations() {
  const [list, setList] = useState(AUTOMATIONS_INIT);
  const toggle = (id) => setList((l) => l.map((a) => a.id === id ? { ...a, on: !a.on } : a));
  return (
    <React.Fragment>
      <div className="view-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div><h1>Automations</h1><p>{list.filter((a) => a.on).length} of {list.length} active · toggle to enable</p></div>
        <button className="btn btn-primary">+ new flow</button>
      </div>
      <div className="panel">
        <div className="panel-h"><span className="t">flows</span><span className="act">+ template</span></div>
        <div className="rows">
          {list.map((a) => (
            <div className="r" key={a.id} style={{ cursor: "default" }}>
              <span className={"dot " + (a.on ? "on" : "idle")}></span>
              <div style={{ minWidth: 160 }}><div className="nm" style={{ fontSize: 13.5 }}>{a.id}</div><div className="meta">{a.desc}</div></div>
              <span className="meta">last: {a.last}</span>
              <span style={{ marginLeft: "auto" }}><Toggle on={a.on} onClick={() => toggle(a.id)} /></span>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

function Settings() {
  return (
    <React.Fragment>
      <div className="view-head"><h1>Settings</h1><p>acme workspace configuration</p></div>
      <div className="panel" style={{ maxWidth: 560 }}>
        <div className="panel-h"><span className="t">workspace</span></div>
        <div className="kv">
          <div className="k">name</div><div className="vv">acme</div>
          <div className="k">plan</div><div className="vv green">studio · active</div>
          <div className="k">members</div><div className="vv">4 seats</div>
          <div className="k">region</div><div className="vv">fra1 (primary)</div>
          <div className="k">billing</div><div className="vv">€ 2,400 / mo</div>
        </div>
      </div>
    </React.Fragment>
  );
}

const CRUMBS = { overview: ["overview"], projects: ["projects"], automations: ["automations"], settings: ["settings"] };

function App() {
  const [view, setView] = useState("overview");
  const [project, setProject] = useState(null);
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  const nav = (v) => { setProject(null); setView(v); };
  const crumb = project ? ["projects", project] : (CRUMBS[view] || [view]);
  return (
    <div className="app">
      <Sidebar active={view} onNav={nav} />
      <div className="main">
        <TopBar crumb={crumb} />
        <div className="content">
          {view === "overview" && <Overview />}
          {view === "projects" && !project && <Projects onOpen={(id) => setProject(id)} />}
          {view === "projects" && project && <ProjectDetail id={project} onBack={() => setProject(null)} />}
          {view === "automations" && <Automations />}
          {view === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
