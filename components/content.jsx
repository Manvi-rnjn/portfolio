export const LINES = [
  { at: 0, t: "> initiating handshake with manvi.sys (fictional demo)" },
  { at: 0.08, t: "> scope: authorized, portfolio only" },
  { at: 0.18, t: "> scanning ports ... 22 80 443 open" },
  { at: 0.3, t: "> fingerprinting stack: java 17 / spring boot 3" },
  { at: 0.42, t: "> testing session handling ... ok" },
  { at: 0.55, t: "> probing rate limits ... blocked" },
  { at: 0.68, t: "> parameter tampering ... filtered" },
  { at: 0.8, t: "> decrypting folders ..." },
  { at: 0.92, t: "> escalating privileges ..." },
  { at: 0.99, t: "> ACCESS GRANTED" },
];

export const FOLDERS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
    { id: "writeups", label: "Writeups" }
];

export const WINDOWS = {
  about: {
    title: "about.txt", doodle: "about",
    body: [
      { h: "Who I am" },
      { p: "Computer Science undergraduate (Cybersecurity specialization) at UPES with hands-on experience in Web Application Security (VAPT) and backend systems development in Java/Spring Boot." },
      { p: "Strong foundation in networking, access-control mechanisms, and scalable system design." },
      { meta: "B.Tech, 2024 – 2028. CGPA 8.87 / 10." },
    ],
  },
  experience: {
    title: "experience/", doodle: "experience",
    body: [
      { h: "Trihari Smart Solutions" },
      { meta: "Cybersecurity Intern (VAPT), Jun 2026 – Aug 2026" },
      { li: [
        "Conducted hybrid black-box and grey-box security assessments on live state-level web applications within an authorized scope.",
        "Identified and documented 15+ vulnerabilities, including missing rate-limiting on admin login, session fixation, and clickjacking, using Burp Suite and OWASP ZAP.",
        "Performed manual parameter tampering in Burp Suite, verified scanner false positives, and delivered formal remediation reports.",
      ] },
      { h: "Being Helper Foundation" },
      { meta: "Summer Intern, Jun 2025 – Aug 2025" },
      { li: [
        "Taught academic subjects and digital skills to underprivileged students in under-resourced environments.",
        "Designed engaging learning activities to improve student participation.",
        "Strengthened communication, leadership, and adaptability skills in low-resource environments.",
      ] },
    ],
  },
    projects: {
    title: "projects/", doodle: "projects",
    body: [
      { h: "Open a project" },
      { file: "rateguard", label: "RateGuard.txt" },
      { file: "analyzer", label: "Student_Performance_Analyzer.txt" },
    ],
  },
  rateguard: {
    title: "RateGuard.txt", doodle: "rateguard",
    body: [
      { h: "RateGuard: Distributed Rate-Limiting Engine" },
      { meta: "Java 17, Spring Boot 3, Redis, PostgreSQL. In progress." },
      { h: "Problem" },
      { p: "A rate limiter that reads a counter and then updates it in two steps lets concurrent requests slip past the limit. This is a check-then-act race condition, and it gets worse across multiple servers." },
      { h: "Approach" },
      { li: [
        "A distributed request-interception proxy that sits in front of an API and enforces limits.",
        "Core HTTP pipeline in Spring Boot 3 with custom filters and RFC 7807 Problem Details errors.",
        "Token Bucket limiting, designed to run as atomic Redis Lua scripts so the check and the update happen as one operation.",
      ] },
      { h: "Status" },
      { p: "Service skeleton and REST endpoints implemented. Filters, token bucket and Redis Lua script in progress." },
      { a: "https://github.com/Manvi-rnjn/RateGuard", label: "View on GitHub" }
    ],
  },
  analyzer: {
    title: "Student_Performance_Analyzer.txt", doodle: "analyzer",
    body: [
      { h: "Student Performance Analyzer" },
      { meta: "Python, Pandas, Matplotlib" },
      { h: "Problem" },
      { p: "Academic records are hard to compare by eye, so patterns in student performance are easy to miss." },
      { h: "Approach" },
      { li: [
        "Python file handling and data structures to load and process academic records.",
        "Pandas for analysis and Matplotlib for visual distribution summaries.",
      ] },
      { h: "Output" },
      { p: "Structured performance insights and distribution charts generated from student datasets." },
      { a: "https://github.com/Manvi-rnjn/Student-Performance-Analyzer", label: "View on GitHub" },
    ],
  },
  writeups: {
    title: "writeups/", doodle: "experience",
    body: [
      { h: "Short notes from my VAPT work" },
      { p: "Generic explanations of issues I have tested for. No client or site details." },
      { file: "ws_session", label: "Session_Fixation.txt" },
      { file: "ws_clickjack", label: "Clickjacking.txt" },
      { file: "ws_rate", label: "Missing_Rate_Limiting.txt" },
      { file: "ws_verify", label: "Verifying_Scanner_Findings.txt" },
    ],
  },
  ws_session: {
    title: "Session_Fixation.txt", doodle: "experience",
    body: [
      { h: "Session fixation" },
      { h: "What it is" },
      { p: "If an application keeps the same session ID before and after login, an attacker who knows or sets that ID beforehand can use it once the victim logs in." },
      { h: "How I test it" },
      { p: "Note the session cookie before login, log in, and check whether the value changed. If it did not, the application is vulnerable." },
      { h: "Fix" },
      { li: [
        "Issue a new session ID on login and on any privilege change, and invalidate the old one.",
        "Set cookies HttpOnly, Secure and SameSite.",
        "Never accept session IDs from URLs.",
      ] },
    ],
  },
  ws_clickjack: {
    title: "Clickjacking.txt", doodle: "experience",
    body: [
      { h: "Clickjacking" },
      { h: "What it is" },
      { p: "A page is loaded inside a hidden frame on an attacker's site, so a user's click lands on a button they cannot see." },
      { h: "How I test it" },
      { p: "Check whether the response lets the page be framed, by looking at the X-Frame-Options and Content-Security-Policy frame-ancestors headers. A missing header means the page can usually be framed." },
      { h: "Fix" },
      { li: [
        "Send Content-Security-Policy: frame-ancestors 'none' (or 'self' where framing is needed).",
        "Add X-Frame-Options: DENY or SAMEORIGIN for older browsers.",
      ] },
    ],
  },
  ws_rate: {
    title: "Missing_Rate_Limiting.txt", doodle: "experience",
    body: [
      { h: "Missing rate limiting on login" },
      { h: "What it is" },
      { p: "Without limits on login attempts, an attacker can try many passwords or reuse leaked credentials against an account." },
      { h: "How I test it" },
      { p: "On an authorised target, check whether repeated failed logins ever slow down, lock, or ask for extra proof." },
      { h: "Fix" },
      { li: [
        "Limit attempts per account and per IP, with increasing delays.",
        "Add multi-factor authentication and CAPTCHA after repeated failures.",
        "Log and alert on bursts of failures.",
      ] },
      { p: "This is the problem I am building RateGuard to solve at the infrastructure level." },
    ],
  },
  ws_verify: {
    title: "Verifying_Scanner_Findings.txt", doodle: "experience",
    body: [
      { h: "Verifying scanner findings" },
      { p: "Automated scanners report many false positives, so every finding needs manual confirmation before it goes in a report." },
      { li: [
        "Replay the flagged request in Burp Suite Repeater.",
        "Change one parameter at a time and compare responses.",
        "Confirm real impact, not just a matching signature.",
        "Report only what I can reproduce, with clear fix steps.",
      ] },
    ],
  },
  skills: {
    title: "skills.txt", doodle: "skills",
    body: [
      { h: "Languages" }, { p: "Java, Python, C, SQL" },
      { h: "Security & Tools" }, { p: "Burp Suite, OWASP ZAP, Nmap, curl, Git, Postman" },
      { h: "Web & Backend" }, { p: "Spring Boot, REST APIs, PostgreSQL, Redis, HTML, CSS" },
      { h: "Core Concepts" }, { p: "Data Structures & Algorithms, OOP, Operating Systems, Computer Networks, OWASP Top 10" },
    ],
  },
  resume: {
    title: "resume.pdf", doodle: "resume",
    body: [
      { h: "Education" },
      { p: "UPES Dehradun, B.Tech Computer Science (Cybersecurity), 2024 – 2028. CGPA 8.87 / 10." },
      { p: "Holy Mission Senior Secondary School (CBSE), Class XII, 2023. 90.4%." },
      { p: "Carmel High School (ICSE), Class X, 2021. 88.4%." },
      { h: "Activities" },
      { li: [
        "Documentation, Creatives & PR Member, Avishkarnam Literary Club, UPES (2024–2025).",
        "Volunteered in organising UKTI Literature Festival (2025) and Litcon Literary Event (2024).",
        "Built working model on Indore's Waste Management System for university sustainability fair.",
      ] },
      { a: "/Manvi_Ranjan_Resume.pdf", label: "Download full resume (PDF)" },
    ],
  },
  contact: {
    title: "contact.txt", doodle: "contact",
    body: [
      { h: "Get in touch" },
      { p: "Open to cybersecurity (VAPT) and backend engineering internships." },
      { a: "mailto:manvi.18259@stu.upes.ac.in", label: "manvi.18259@stu.upes.ac.in" },
      { a: "https://www.linkedin.com/in/manvi-ranjan-b33589319/", label: "LinkedIn" },
      { a: "https://github.com/Manvi-rnjn", label: "GitHub" },
      { meta: "India" },
    ],
  },
};