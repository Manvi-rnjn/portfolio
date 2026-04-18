# Manvi Ranjan — Portfolio Website

A clean, modern, dark-themed personal portfolio built with **Next.js 14** and **Tailwind CSS**.

---

## 📁 Folder Structure

```
portfolio/
├── app/                    # Next.js App Router (pages + layout)
│   ├── globals.css         # Global styles, custom CSS classes, Google Fonts import
│   ├── layout.jsx          # Root layout — wraps every page (HTML head, metadata)
│   └── page.jsx            # Main page — assembles all section components
│
├── components/             # Reusable UI components (one file per section)
│   ├── Navbar.jsx          # Sticky top navigation with mobile hamburger
│   ├── Hero.jsx            # Landing section with animated background
│   ├── About.jsx           # About me + stat cards
│   ├── Projects.jsx        # Project cards grid
│   ├── Skills.jsx          # Skills grouped by category
│   ├── Contact.jsx         # Contact info + form
│   └── Footer.jsx          # Simple footer
│
├── public/                 # Static files (images, favicon, resume PDF)
│   └── (add your photos/resume here)
│
├── .gitignore              # Files to exclude from git
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind theme (colors, fonts, animations)
├── postcss.config.js       # PostCSS (required by Tailwind)
├── vercel.json             # Vercel deployment settings
└── package.json            # Dependencies and scripts
```

**Key idea:** Each page section is its own file in `components/`. This makes it easy to edit one section without touching anything else.

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18 or higher installed ([download here](https://nodejs.org))
- A terminal (Command Prompt, PowerShell, or any Unix terminal)

### Steps

```bash
# 1. Clone or download the project
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 2. Install all dependencies (this reads package.json)
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser and go to:
#    http://localhost:3000
```

The dev server has **hot reload** — save any file and the browser updates instantly.

### Build for Production (optional, test before deploying)

```bash
npm run build   # Compiles the project
npm run start   # Runs the compiled version at localhost:3000
```

---

## ☁️ Deploying to Vercel (Free)

Vercel is made by the same team as Next.js — deploying is essentially one click.

### Option A: Via Vercel Dashboard (Easiest)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click **"New Project"** → Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site will be live at `https://your-project-name.vercel.app` in ~2 minutes

Every time you push to GitHub, Vercel automatically re-deploys. ✨

### Option B: Via Vercel CLI

```bash
# Install the Vercel CLI globally
npm install -g vercel

# From inside your project folder:
vercel

# Follow the prompts — it asks a few questions, then deploys
# Your URL is printed at the end
```

---

## ✏️ Customization Guide

### Change your name, email, links
- **Name/intro:** `components/Hero.jsx` — edit the `<h1>` and `<p>` text
- **About paragraph:** `components/About.jsx` — edit the `<p>` tags in the left column
- **Email:** `components/Contact.jsx` → `CONTACT_LINKS` array
- **LinkedIn/GitHub URLs:** `components/Contact.jsx` → `CONTACT_LINKS` array
- **Navbar "Hire Me" email:** `components/Navbar.jsx` → the `<a href="mailto:...">` tag

### Add a new project
Open `components/Projects.jsx` and add a new object to the `PROJECTS` array:

```js
{
  id: "04",
  title: "Your New Project",
  description: "What it does and how you built it.",
  tech: ["React", "Firebase"],
  github: "https://github.com/you/repo",
  demo: "https://your-demo.com",
  featured: false,
}
```

### Add your resume PDF
1. Add your PDF file to the `public/` folder as `resume.pdf`
2. In `components/About.jsx`, change `href="#"` to `href="/resume.pdf"`

### Change the accent color
Open `tailwind.config.js` and find the `colors` section. Change the `accent` hex value:

```js
accent: "#6ee7b7",  // Change this to any color you like
```

### Enable the contact form
1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a form and copy your endpoint URL
3. In `components/Contact.jsx`, uncomment the `fetch(...)` block and replace the URL

---

## 🎨 Design Decisions

| Choice | Reason |
|--------|--------|
| Dark background `#0a0a0f` | Professional, reduces eye strain, popular in dev portfolios |
| `Syne` font for headings | Geometric, modern — feels techy without being cold |
| `DM Sans` for body text | Highly readable at small sizes |
| `JetBrains Mono` for labels | Code-native feel, consistent with developer aesthetic |
| Emerald green accent `#6ee7b7` | Distinctive, good contrast on dark bg, not overused |
| Animated background blobs | Adds depth without distraction — removed in reduced-motion mode |

---

## 📦 Dependencies

| Package | Why |
|---------|-----|
| `next` | React framework with SSR, routing, and image optimization |
| `react` + `react-dom` | Core React library |
| `tailwindcss` | Utility-first CSS — fast to style, easy to customize |
| `lucide-react` | Clean, consistent icon library (same icons used in VS Code) |

---

## 🛠️ Troubleshooting

**`npm install` fails:**
Make sure you're on Node.js 18+. Run `node --version` to check.

**Fonts not loading:**
You need an internet connection during dev — fonts are loaded from Google Fonts.

**Page is blank / errors in console:**
Check that you're running `npm run dev` from inside the `portfolio/` folder.
