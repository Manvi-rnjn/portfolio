// Each folder page shows a hand-drawn scene (public/doodles/<name>.webp) plus a
// separate glowing accent layer (<name>-accent.webp) that is animated on its own.
// ox/oy = where the accent pivots, in percent of the image.
const ART = {
  about:      { ox: 58, oy: 54, glow: "#00ff5a", motion: "a-blink" },
  experience: { ox: 83, oy: 74, glow: "#ff2e63", motion: "a-wiggle" },
  projects:   { ox: 63, oy: 23, glow: "#00e5ff", motion: "a-float" },
  rateguard:  { ox: 50, oy: 91, glow: "#ffe600", motion: "a-pulse" },
  analyzer:   { ox: 72, oy: 36, glow: "#00e5ff", motion: "a-glow" },
  skills:     { ox: 51, oy: 19, glow: "#ff9d00", motion: "a-bob" },
  resume:     { ox: 47, oy: 73, glow: "#00ff5a", motion: "a-pop" },
  contact:    { ox: 66, oy: 35, glow: "#ff4fd8", motion: "a-fly" },
};

export default function Doodle({ name }) {
  const a = ART[name];
  if (!a) return null;
  return (
    <div className="art" style={{ "--ox": a.ox + "%", "--oy": a.oy + "%", "--glow": a.glow }}>
      <img className="art-base" src={`/doodles/${name}.webp`} alt="" draggable="false" />
      <img className={"art-accent " + a.motion} src={`/doodles/${name}-accent.webp`} alt="" draggable="false" />
    </div>
  );
}
