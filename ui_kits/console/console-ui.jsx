/* XR1 Solution — Console UI kit · primitives */
const { useState, useEffect } = React;

function Icon({ name, size }) {
  return <i data-lucide={name} style={size ? { width: size, height: size } : undefined}></i>;
}

const NAV = [
  { id: "overview", label: "Overview", icon: "layout-dashboard" },
  { id: "projects", label: "Projects", icon: "folder-git-2", ct: 12 },
  { id: "automations", label: "Automations", icon: "workflow", ct: 8 },
  { id: "settings", label: "Settings", icon: "settings" },
];

function Sidebar({ active, onNav }) {
  return (
    <aside className="side">
      <div className="side-brand">
        <span className="tile">XR1</span>
        <div>
          <div className="nm">SOLUTION</div>
          <div className="sub">console</div>
        </div>
      </div>
      <div className="navhead">workspace</div>
      <div className="navlist">
        {NAV.map((n) => (
          <div key={n.id} className={"nav-i" + (active === n.id ? " active" : "")} onClick={() => onNav(n.id)}>
            <Icon name={n.icon} />
            <span>{n.label}</span>
            {n.ct != null && <span className="ct">{n.ct}</span>}
          </div>
        ))}
      </div>
      <div className="side-foot">
        <div className="avatar">jd</div>
        <div>
          <div style={{ fontSize: 12.5, color: "var(--fg-1)" }}>jane@acme.co</div>
          <div style={{ fontSize: 11, color: "var(--fg-3)" }}>acme workspace</div>
        </div>
      </div>
    </aside>
  );
}

function TopBar({ crumb }) {
  return (
    <div className="topbar">
      <div className="crumb">
        console{crumb.map((c, i) => <React.Fragment key={i}><span className="sep">/</span><b>{c}</b></React.Fragment>)}
      </div>
      <div className="cmd"><span>❯ run command</span><kbd>⌘K</kbd></div>
      <div className="statpill"><i></i> all systems go</div>
    </div>
  );
}

function Toggle({ on, onClick }) {
  return <div className={"tog" + (on ? " on" : "")} onClick={onClick}><span className="kn"></span></div>;
}

Object.assign(window, { Icon, Sidebar, TopBar, Toggle });
