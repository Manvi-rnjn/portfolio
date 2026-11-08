// app/layout.jsx
// ─── Root Layout ─────────────────────────────────────────────────────────────
// This wraps every page. Put things that appear on ALL pages here:
// - <html> and <body> tags
// - Global metadata (SEO title, description)
// - Global CSS import

import "./globals.css";

// Metadata is Next.js's built-in way to handle <head> tags (title, description, og:image etc.)
export const metadata = {
  title: "Manvi Ranjan | Cybersecurity & Backend Engineering",
  description: "B.Tech CS student | Web Application Security (VAPT) | Java and Spring Boot",
  keywords: ["Manvi Ranjan", "portfolio", "VAPT", "Cybersecurity", "Java", "Spring Boot"],
  authors: [{ name: "Manvi Ranjan" }],
  openGraph: {
    title: "Manvi Ranjan | Cybersecurity & Backend Engineering",
    description: "B.Tech CS student | Web Application Security (VAPT) | Java and Spring Boot",
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
