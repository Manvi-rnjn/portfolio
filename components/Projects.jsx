// components/Projects.jsx
// ─── Projects Section ─────────────────────────────────────────────────────────
// Displays project cards in a grid. Each card shows:
// - Project number, title, description
// - Tech stack tags
// - Links to GitHub / live demo

import { ExternalLink, Github, Globe } from "lucide-react";

// ── Project Data ───────────────────────────────────────────────────────────────
// Edit this array to add, remove, or modify projects.
// For github/demo links: replace "#" with your actual URLs.
const PROJECTS = [
  {
    id: "01",
    title: "Aviation Learning Platform",
    description:
      "A full-stack e-learning platform built for aviation students. Features user authentication via Clerk, payment integration with Razorpay, course management backed by Supabase, and deployed to production on Vercel.",
    tech: ["Node.js", "Supabase", "Clerk", "Razorpay", "Vercel", "JavaScript"],
    github: "https://github.com/Manvi-rnjn/aeropath",    // Replace with your GitHub repo URL
    demo: "https://aeropath-steel.vercel.app/",      // Replace with your live site URL
    featured: true, // Featured projects get a slightly larger card treatment
  },
  {
    id: "02",
    title: "Student Performance Analyzer",
    description:
      "A Python-based data analysis tool that processes student grade data to identify performance patterns and predict outcomes. Uses pandas for data manipulation and matplotlib/seaborn to generate insightful visual reports.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
    github: "#",
    demo: null, // Set to null if no live demo exists
    featured: false,
  },
  {
    id: "03",
    title: "Confidential Genome Sequencing System",
    description:
      "A software engineering project focused on secure handling of genomic data, exploring privacy-preserving techniques and system design using SDLC concepts.",
    tech: ["Java", "SDLC", "Data Security", "Multiparty Computation", "Functional Encryption"],
    github: "#",
    demo: null,
    featured: false,
  },
];

// ── Single Project Card ────────────────────────────────────────────────────────
// Extracted as its own component for reusability and readability.
function ProjectCard({ project }) {
  return (
    <article className="card p-7 flex flex-col gap-5 group">

      {/* Card header: project number + external links */}
      <div className="flex items-start justify-between">
        {/* Project number in monospace font */}
        <span className="font-mono text-xs text-muted tracking-widest">
          {project.id}
        </span>

        {/* Link icons — only render if links exist */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              <Github size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Project title — slightly larger for featured projects */}
      <h3
        className={`font-display font-bold text-light group-hover:text-accent transition-colors duration-200 ${
          project.featured ? "text-2xl" : "text-xl"
        }`}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-soft text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs text-accent/70 bg-accent/5 border border-accent/10 px-2.5 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

// ── Projects Section ──────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            02 / Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mt-2">
            Things I've Built
          </h2>
          <p className="font-body text-muted mt-3 max-w-lg">
            A selection of projects that showcase my skills across the stack —
            from backend APIs to data analysis.
          </p>
        </div>

        {/* Projects grid — responsive: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Manvi-rnjn"  // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-soft hover:text-accent transition-colors border border-border hover:border-accent/30 px-6 py-3 rounded-lg"
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
