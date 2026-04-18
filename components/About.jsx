// components/About.jsx
// ─── About Section ────────────────────────────────────────────────────────────
// A two-column layout: left side is the text, right side shows quick stat cards.

// Quick stats to show at a glance — edit the values here
const STATS = [
  { value: "3+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "2028", label: "Graduating" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ──────────────────────────────────────────── */}
        <div className="mb-16">
          {/* Small label above heading — consistent pattern throughout site */}
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            01 / About
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mt-2">
            Who I Am
          </h2>
        </div>

        {/* ── Two Column Layout ───────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Text content */}
          <div className="space-y-6">
            <p className="font-body text-soft text-lg leading-relaxed">
              I'm a{" "}
              <span className="text-accent font-medium">
                B.Tech Computer Science student
              </span>{" "}
              exploring web development and secure systems. 
              I have built and deployed projects using Node.js, working with 
              authentication, databases, and payment integration.
            </p>
            <p className="font-body text-soft leading-relaxed">
              My journey started with curiosity, about how websites actually work under the hood.
              I am actively learning and improving my skills through coursework and projects, 
              with a focus on understanding application 
              development step by step.
            </p>
            <p className="font-body text-soft leading-relaxed">
              Beyond web development, I have a keen interest in cybersecurity
              and enjoy exploring tools like Nmap and Burp Suite to understand
              how systems can be hardened against attacks.
            </p>

            <a
              href="/Manvi_Ranjan_Resume.pdf"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-accent border border-accent/30 px-5 py-2.5 rounded-lg hover:bg-accent/10 transition-all duration-200 mt-2"
            >
              Download Résumé
              <span>↓</span>
            </a>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="card p-6 flex flex-col gap-1">
                {/* Large number/value */}
                <span className="font-display text-3xl font-bold gradient-text">
                  {stat.value}
                </span>
                {/* Label below */}
                <span className="font-body text-muted text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
