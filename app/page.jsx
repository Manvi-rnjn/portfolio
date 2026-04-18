// app/page.jsx
// ─── Main Page ────────────────────────────────────────────────────────────────
// This is the single-page layout. It imports all section components
// and renders them in order. This is the only "page" in the app.

// Import every section component
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky navigation bar — always visible at top */}
      <Navbar />

      {/* Main content — sections stack vertically */}
      <main>
        {/* 01 — Landing screen */}
        <Hero />

        {/* 02 — About me + stats */}
        <About />

        {/* 03 — Projects grid */}
        <Projects />

        {/* 04 — Skills categorized by domain */}
        <Skills />

        {/* 05 — Contact info + form */}
        <Contact />
      </main>

      {/* Site footer */}
      <Footer />
    </>
  );
}
