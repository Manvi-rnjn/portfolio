// app/layout.jsx
// ─── Root Layout ─────────────────────────────────────────────────────────────
// This wraps every page. Put things that appear on ALL pages here:
// - <html> and <body> tags
// - Global metadata (SEO title, description)
// - Global CSS import

import "./globals.css";

// Metadata is Next.js's built-in way to handle <head> tags (title, description, og:image etc.)
export const metadata = {
  title: "Manvi Ranjan | Cybersecurity Student",
  description:
    "B.Tech CS student specializing in Node.js, web applications, and software development. View my projects and get in touch.",
  keywords: ["Manvi Ranjan", "portfolio", "full stack developer", "Node.js", "Next.js"],
  authors: [{ name: "Manvi Ranjan" }],
  // OpenGraph metadata makes the link look nice when shared on social media
  openGraph: {
    title: "Manvi Ranjan — Full-Stack Developer",
    description: "B.Tech CS student | Node.js | Web Applications | Problem Solver",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* children = the current page component (app/page.jsx) */}
        {children}
      </body>
    </html>
  );
}
