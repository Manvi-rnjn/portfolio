// components/Skills.jsx
// ─── Skills Section ───────────────────────────────────────────────────────────
// Organized skill groups displayed in a clean card grid.
// Each category has an icon, a label, and a list of skills.

// ── Skill Categories Data ──────────────────────────────────────────────────────
// To add a new skill: just add it to the `skills` array in the right category.
// To add a new category: add a new object to SKILL_GROUPS.
const SKILL_GROUPS = [
  {
    category: "Languages",
    icon: "⟨/⟩",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20",
    accentColor: "text-blue-400",
    skills: ["Python", "Java", "C", "JavaScript"],
  },
  {
    category: "Web Development",
    icon: "◈",
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/20",
    accentColor: "text-accent",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Next.js", "REST APIs"],
  },
  {
    category: "Databases & Auth",
    icon: "◉",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/20",
    accentColor: "text-violet-400",
    skills: ["Supabase", "PostgreSQL", "Clerk", "Razorpay"],
  },
  {
    category: "Tools & Platforms",
    icon: "⚙",
    color: "from-orange-500/20 to-orange-500/5",
    borderColor: "border-orange-500/20",
    accentColor: "text-orange-400",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
  {
    category: "Data Science",
    icon: "◆",
    color: "from-pink-500/20 to-pink-500/5",
    borderColor: "border-pink-500/20",
    accentColor: "text-pink-400",
    skills: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Cybersecurity",
    icon: "⛨",
    color: "from-red-500/20 to-red-500/5",
    borderColor: "border-red-500/20",
    accentColor: "text-red-400",
    skills: ["Nmap", "Burp Suite", "Metasploit", "Network Recon"],
  },
];

// ── Single Skill Group Card ────────────────────────────────────────────────────
function SkillCard({ group }) {
  return (
    <div
      className={`card p-6 flex flex-col gap-4 bg-gradient-to-br ${group.color} border ${group.borderColor}`}
    >
      {/* Card header: icon + category label */}
      <div className="flex items-center gap-3">
        <span className={`font-mono text-lg ${group.accentColor}`}>
          {group.icon}
        </span>
        <h3 className="font-display font-semibold text-light text-sm tracking-wide">
          {group.category}
        </h3>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="font-body text-xs text-soft bg-bg/60 border border-border px-3 py-1.5 rounded-full hover:text-light hover:border-white/10 transition-colors duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Skills Section ────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            03 / Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mt-2">
            Tools of the Trade
          </h2>
          <p className="font-body text-muted mt-3 max-w-lg">
            Technologies I've worked with across different domains — web development,
            data science, and security.
          </p>
        </div>

        {/* Skill cards grid — 2 cols on tablet, 3 on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
