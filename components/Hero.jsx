// components/Hero.jsx
// ─── Hero Section ─────────────────────────────────────────────────────────────
// The first thing visitors see. Contains:
// - Animated background blobs (pure CSS)
// - Name, tagline, short intro
// - Two CTA buttons
// - Scroll indicator

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* ── Animated Background Blobs ──────────────────────────────────────
          These are blurred colored divs that drift around to create depth.
          CSS animation "blob" is defined in tailwind.config.js           */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-blob"
          style={{ background: "radial-gradient(circle, #6ee7b7, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 animate-blob delay-300"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full opacity-6 animate-blob delay-500"
          style={{ background: "radial-gradient(circle, #34d399, transparent 70%)" }}
        />
      </div>

      {/* ── Grid Pattern Overlay ───────────────────────────────────────────
          A subtle dot/grid pattern for texture                           */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6ee7b7 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Main Hero Content ──────────────────────────────────────────────
          opacity-0 + animate-fade-up = items start invisible and rise up */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">

        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 text-xs font-mono text-accent/80 border border-accent/20 rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          {/* Pulsing green dot */}
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Available for Internships
        </div>

        {/* Name — gradient-text class defined in globals.css */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          <span className="gradient-text">Manvi</span>
          <br />
          <span className="text-light">Ranjan</span>
        </h1>

        {/* Tagline */}
        <p
          className="font-display text-xl md:text-2xl text-soft font-medium mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          CS Student Building Real-World Web Applications
        </p>

        {/* Short intro */}
        <p
          className="font-body text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          B.Tech Computer Science student building scalable web applications
          with Node.js. Passionate about clean code and elegant solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
        >
          {/* Primary button */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-bg font-body font-semibold text-sm hover:bg-accent-dim transition-all duration-200 hover:shadow-[0_0_30px_rgba(110,231,183,0.3)]"
          >
            View Projects
            <span>→</span>
          </a>
          {/* Secondary button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-border text-soft font-body font-medium text-sm hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* ── Scroll Indicator ────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
