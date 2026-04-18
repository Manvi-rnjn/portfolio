// components/Navbar.jsx
// ─── Navigation Bar ───────────────────────────────────────────────────────────
// Sticky top nav with smooth-scroll links and a mobile hamburger menu.
// All navigation is anchor-based (same page) — no routing needed.

"use client"; // Needed because we use useState for mobile menu toggle

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// The nav links — edit this array to add/remove items
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a background blur when user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <a
          href="#hero"
          className="font-display font-bold text-lg text-light tracking-tight hover:text-accent transition-colors"
        >
          MR<span className="text-accent">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-soft text-sm font-body hover:text-accent transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button
        <a
          href="mailto:manvi.18259@stu.upes.ac.in"
          className="hidden md:inline-flex items-center gap-2 text-sm font-body font-medium px-4 py-2 rounded-lg border border-accent/40 text-accent hover:bg-accent/10 transition-all duration-200"
        >
          Hire Me
        </a> */}

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-soft hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)} // Close menu on click
                  className="text-soft hover:text-accent transition-colors font-body"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
