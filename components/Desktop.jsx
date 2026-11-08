"use client";
import { useState } from "react";
import { FOLDERS, WINDOWS } from "./content";
import Doodle from "./Doodles";

const PARENT = { rateguard: "projects", analyzer: "projects", ws_session: "writeups", ws_clickjack: "writeups", ws_rate: "writeups", ws_verify: "writeups" };

function Block({ b, onOpen }) {
  if (b.h) return <h3>{b.h}</h3>;
  if (b.p) return <p>{b.p}</p>;
  if (b.meta) return <p className="meta">{b.meta}</p>;
  if (b.li) return <ul>{b.li.map((t) => <li key={t}>{t}</li>)}</ul>;
  if (b.file) return <button className="file" onClick={() => onOpen(b.file)}>{b.label}</button>;
  if (b.a) return <p><a href={b.a} target="_blank" rel="noreferrer">{b.label}</a></p>;
  return null;
}

export default function Desktop() {
  const [view, setView] = useState(null);
  const w = view ? WINDOWS[view] : null;

  return (
    <div className="desk">
      <div className="topbar">manvi@portfolio:~$ open a folder</div>
      <div className="icons">
        {FOLDERS.map((f) => (
          <button key={f.id} className="icon" onClick={() => setView(f.id)}>
            <svg viewBox="0 0 64 52" width="64" height="52" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
              <path d="M4 12V46h56V16H30L24 8H4z" />
            </svg>
            {f.label}
          </button>
        ))}
      </div>

      <div className="hero">
  <h1>Manvi Ranjan</h1>
  <p>Cybersecurity (VAPT) and Java backend. Open to internships.</p>
  <a className="cta" href="/Manvi_Ranjan_Resume.pdf" target="_blank" rel="noreferrer">Download resume</a>
</div>

      {w && (
        <div className="page" key={view}>
          <div className="page-head">
            <span>{w.title}</span>
            <div className="btns">
              {PARENT[view] && <button onClick={() => setView(PARENT[view])}>Back</button>}
              <button onClick={() => setView(null)}>Close</button>
            </div>
          </div>
          <div className="page-main">
            <div className="page-art"><Doodle name={w.doodle} /></div>
            <div className="page-body">
              {w.body.map((b, i) => <Block key={i} b={b} onOpen={setView} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}