"use client";
import { useEffect, useRef, useState } from "react";
import { LINES } from "./content";

export default function HackSim({ onDone, onSkip }) {
  const [p, setP] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const f = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const v = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      setP(v);
      if (v >= 0.995 && !done.current) {
        done.current = true;
        setTimeout(onDone, 1400);
      }
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, [onDone]);

  return (
    <div style={{ height: "600vh" }}>
      <div className="term">
        {p < 0.02 && <div className="hint">Scroll down to continue</div>}
        <div className="term-box">
          <div className="log">
            {LINES.filter((l) => p >= l.at).map((l) => (
              <div key={l.at}>{l.t}</div>
            ))}
          </div>
          <div className="bar"><span style={{ width: p * 100 + "%" }} /></div>
          <div className="pct">{Math.round(p * 100)}%</div>
        </div>
      </div>
      <button className="skip" onClick={onSkip}>Skip intro</button>
    </div>
  );
}