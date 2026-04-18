/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind which files to scan for class names
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom fonts loaded via Google Fonts in layout.jsx
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      // Brand color palette — edit these to change the whole site theme
      colors: {
        bg: "#0a0a0f",        // deep near-black background
        surface: "#111118",   // card / section background
        border: "#1e1e2e",    // subtle borders
        accent: "#6ee7b7",    // emerald-ish green — the highlight color
        "accent-dim": "#34d399",
        muted: "#4a4a6a",     // muted text
        soft: "#8888aa",      // secondary text
        light: "#e2e2f0",     // primary text
      },
      // Animation keyframes for the hero gradient blob and fade-ups
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
        blob: "blob 7s infinite",
        "slide-in": "slide-in 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
