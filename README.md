# Manvi Ranjan: Portfolio

A personal portfolio built as a fictional "system" you break into. Visitors get a short intro, a scroll-driven hacking simulation, and then land on a desktop where each folder opens a full-page view with a hand-drawn scene and the text beside it.

Live site: https://manvi-rnjn-portfolio.vercel.app/

## The idea

Most portfolios are a long scrolling page of cards. This one is meant to feel like exploring something: the content is the same (about, experience, projects, skills, resume, contact), but it is revealed through a short story. The simulation is entirely fictional and uses no real systems.

## How it works

1. **Intro.** A black screen fades in a single question. Yes starts the experience. A Skip intro button is always available.
2. **Simulation.** A centred terminal and a green progress bar are driven by scroll position. Log lines appear at set points until the bar reaches 100%.
3. **Desktop.** Folders for About, Experience, Projects, Skills, Resume and Contact.
4. **Folder view.** Each folder takes the full page: an illustration on the left that wipes in like it is being drawn, then a single glowing accent that animates, with the text on the right. Project folders open file pages with a Back button.

## Tech stack

Next.js (App Router), React, plain CSS. Tailwind is installed and its directives are loaded, but all custom styling lives in `globals.css`. No animation or UI libraries are used.

## Project structure

```
portfolio/
├── app/
│   ├── globals.css        All styles, including the doodle animations
│   ├── layout.jsx         Root layout and page metadata
│   └── page.jsx           Switches between intro, simulation and desktop
├── components/
│   ├── Intro.jsx          Black screen, slow fade, proceed prompt
│   ├── HackSim.jsx        Scroll-driven terminal and green progress bar
│   ├── Desktop.jsx        Folder icons and full-page folder views
│   ├── Doodles.jsx        Draws an illustration and animates its accent
│   └── content.js         All text on the site (edit here)
└── public/
    ├── doodles/           Illustrations, one drawing plus one accent per folder
    └── Manvi_Ranjan_Resume.pdf
```

## Editing content

All wording lives in `components/content.js`.

- `FOLDERS` lists the desktop icons.
- `WINDOWS` holds each folder's title, text and illustration name. A block is a heading (`h`), paragraph (`p`), small grey line (`meta`), bullet list (`li`), link (`a`) or file button (`file`).
- `LINES` holds the log lines for the simulation.

To add a new project, add an entry to `WINDOWS`, then add a `{ file: "...", label: "..." }` button to the `projects` entry. If it opens from a folder, also add it to the `PARENT` object in `Desktop.jsx` so Back works.

## How the illustrations work

Each folder has two images in `public/doodles/`:

- `name.webp`: the white line drawing, revealed left to right with a CSS clip.
- `name-accent.webp`: only the single coloured object (the bug, the token, the stamp mark and so on) on a transparent background. It fades in with a glow and then moves on its own.

Splitting the layers is what lets one object glow and animate while the rest of the scene stays still. The motion for each accent is set in `Doodles.jsx` and defined in `globals.css`. The illustrations were generated with an AI image tool and then separated into layers.

## Running locally

Requires Node.js 18 or higher.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To test a production build:

```bash
npm run build
npm run start
```

## Deploying

The site is deployed on Vercel from this repository. Every push to the main branch triggers a new deployment.

## Roadmap

- [x] Intro, scroll-driven simulation and desktop
- [x] Full-page folder views with animated illustrations
- [x] Skip intro button
- [ ] Replace the RateGuard illustration with a single-scene version that is easier to read
- [ ] Name and resume button shown on the desktop
- [ ] Writeups folder with short notes on web security topics
- [ ] Plain scrollable view for quick scanning
- [ ] Social preview image for link sharing

Tick items off as they are completed.

## Author

Manvi Ranjan, B.Tech Computer Science (Cybersecurity), UPES
