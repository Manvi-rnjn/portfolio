// components/Contact.jsx
// ─── Contact Section ──────────────────────────────────────────────────────────
// Contains:
// - Contact info (email, LinkedIn, GitHub)
// - A simple contact form with client-side handling
// Note: The form doesn't send email by itself — you'd integrate
//       Formspree, Resend, or similar to make it functional.

"use client"; // useState for form fields

import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";

// ── Contact Info Items ─────────────────────────────────────────────────────────
// Update href values with your real URLs
const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "manvi.18259@stu.upes.ac.in",
    href: "mailto:manvi.18259@stu.upes.ac.in",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/manvi-ranjan", // Replace with your actual LinkedIn
    href: "https://www.linkedin.com/in/manvi-ranjan-b33589319/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/manviranjan", // Replace with your actual GitHub
    href: "https://github.com/Manvi-rnjn",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null, // No link for location
  },
];

// ── Contact Form ───────────────────────────────────────────────────────────────
// To make this form actually send emails:
// 1. Create a free account at https://formspree.io
// 2. Get your form endpoint (looks like: https://formspree.io/f/xabcdefg)
// 3. Replace the fetch URL below with your endpoint
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent" | "error"

  // Update the relevant field when user types
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // ── To activate: replace URL with your Formspree endpoint ─────────────
    // const res = await fetch("https://formspree.io/f/YOUR_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    // setStatus(res.ok ? "sent" : "error");

    // Simulated success for demo — remove this when using real endpoint
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name field */}
      <div>
        <label className="font-body text-xs text-muted uppercase tracking-widest block mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm font-body text-light placeholder-muted focus:outline-none focus:border-accent/50 transition-colors"
        />
      </div>

      {/* Email field */}
      <div>
        <label className="font-body text-xs text-muted uppercase tracking-widest block mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm font-body text-light placeholder-muted focus:outline-none focus:border-accent/50 transition-colors"
        />
      </div>

      {/* Message field */}
      <div>
        <label className="font-body text-xs text-muted uppercase tracking-widest block mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about the opportunity..."
          className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm font-body text-light placeholder-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
        />
      </div>

      {/* Submit button — changes state based on submission */}
      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-body font-semibold text-sm transition-all duration-200 ${
          status === "sent"
            ? "bg-accent/20 text-accent border border-accent/30 cursor-default"
            : "bg-accent text-bg hover:bg-accent-dim hover:shadow-[0_0_30px_rgba(110,231,183,0.25)]"
        }`}
      >
        {status === "idle" && <><Send size={14} /> Send Message</>}
        {status === "sending" && "Sending..."}
        {status === "sent" && "✓ Message Sent!"}
        {status === "error" && "Failed — try emailing directly"}
      </button>
    </form>
  );
}

// ── Contact Section ───────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            04 / Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mt-2">
            Let's Talk
          </h2>
          <p className="font-body text-muted mt-3 max-w-lg">
            Open to internship opportunities, collaborations, and interesting
            projects. Don't hesitate to reach out.
          </p>
        </div>

        {/* Two column layout: contact info left, form right */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left: Contact info */}
          <div className="space-y-6">
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 group">
                {/* Icon in a small box */}
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon size={16} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted uppercase tracking-widest">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-body text-soft hover:text-accent transition-colors text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-body text-soft text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Extra note */}
            <div className="mt-8 p-5 rounded-xl border border-border bg-bg/40">
              <p className="font-body text-soft text-sm leading-relaxed">
                Currently pursuing B.Tech in Computer Science. Looking for
                internship opportunities where I can contribute and grow as a
                developer.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="card p-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
