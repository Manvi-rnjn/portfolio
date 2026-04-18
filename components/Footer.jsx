// components/Footer.jsx
// ─── Footer ──────────────────────────────────────────────────────────────────
// Simple, minimal footer. Shows copyright and a back-to-top link.

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p className="font-mono text-xs text-muted">
          © {year} Manvi Ranjan. Built with Next.js & Tailwind CSS.
        </p>

        {/* Back to top */}
        <a
          href="#hero"
          className="font-mono text-xs text-muted hover:text-accent transition-colors flex items-center gap-1"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
