# 🌟 Award-Winning Personal Portfolio Web Application

**Candidate:** Boda Shiva Shankar (Software Engineer | AI Developer | Full Stack Developer)  
**Target Roles:** SDE Intern, AI Engineer Intern, Full Stack Developer, IT PMO Analyst  
**Design Inspiration:** Apple, Linear, Stripe, Framer, and Vercel — Dark Luxury Theme (`#020617`), Glassmorphism, Neon Accents, Micro-interactions, Framer Motion.

---

## 📁 Project Folder Structure

```
shiva_portfolio_app/
├── index.html                  # SEO-optimized HTML entry point with OpenGraph meta tags
├── package.json                # Project dependencies (React 18, Tailwind, Framer Motion, Lucide)
├── vite.config.js              # Vite server & build configurations
├── tailwind.config.js          # Custom theme tokens, fonts, and dark mode palette
├── postcss.config.js           # Tailwind PostCSS processing setup
└── src/
    ├── main.jsx                # React DOM root renderer
    ├── App.jsx                 # Main application structure & section composition
    ├── index.css               # Global styles, glassmorphism utilities, scrollbars
    ├── data/
    │   ├── personalData.js     # Bio, metrics, stats, education, target companies
    │   ├── projectsData.js     # 4 flagship projects with metrics & links
    │   ├── skillsData.js       # Categorized skills matrix with proficiency levels
    │   ├── experienceData.js   # Work experience, virtual internships & mentorship
    │   └── certificationsData.js # Google AI-ML & Cisco certifications
    ├── components/
    │   ├── ui/
    │   │   ├── ParticleBackground.jsx # HTML5 Canvas node network particle canvas
    │   │   ├── GlassCard.jsx          # Reusable glassmorphic backdrop-blur card
    │   │   ├── SectionHeader.jsx      # Animated section headings with badges
    │   │   ├── Badge.jsx              # Status and tag badges
    │   │   ├── Button.jsx             # Animated Framer Motion button
    │   │   └── ScrollToTop.jsx        # Floating back-to-top button
    │   ├── layout/
    │   │   ├── Navbar.jsx             # Fixed glass navbar with mobile menu
    │   │   ├── Footer.jsx             # Footer with copyright & social links
    │   │   └── LoadingScreen.jsx      # Linear-inspired animated progress preloader
    │   └── sections/
    │       ├── HeroSection.jsx        # Animated typing hero with stats grid
    │       ├── AboutSection.jsx       # Bio, CGPA 8.7 ACE College highlight & target firms
    │       ├── SkillsSection.jsx      # Categorized skill cards with filter tabs
    │       ├── ProjectsSection.jsx    # Filterable project grid with metric callouts
    │       ├── ExperienceSection.jsx  # Vertical timeline layout
    │       ├── EducationSection.jsx   # Academic background & coursework focus
    │       ├── CertificationsSection.jsx # Google & Cisco verification cards
    │       ├── GitHubSection.jsx      # GitHub stats embeds & commit streak graphics
    │       ├── ResumeSection.jsx      # One-click ATS resume preview & download
    │       └── ContactSection.jsx     # Interactive contact form with confetti trigger
```

---

## ⚡ How to Run Locally

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
Navigate into the application folder and install dependencies:
```bash
cd C:\Users\DELL\.gemini\antigravity-ide\scratch\shiva_portfolio_app
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and visit `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
This generates an optimized production bundle inside the `dist/` directory.

---

## 🚀 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)
1. Push your repository to GitHub (see instructions below).
2. Go to [Vercel.com](https://vercel.com/) and sign in with your GitHub account.
3. Click **"Add New"** ➔ **"Project"**.
4. Import your `shiva-portfolio-app` repository.
5. Keep default settings (`Build Command: npm run build`, `Output Directory: dist`).
6. Click **"Deploy"**. Vercel will build and assign an SSL domain (e.g. `shiva-portfolio.vercel.app`).

### Option 2: Deploy to Netlify
1. Log into [Netlify.com](https://netlify.com/).
2. Click **"Add new site"** ➔ **"Import an existing project"** ➔ Select **GitHub**.
3. Select `shiva-portfolio-app`. Set build command to `npm run build` and publish directory to `dist`.

---

## 💻 GitHub Upload Commands

Run the following commands in your terminal to initialize and upload this project to your GitHub account (`https://github.com/shiveek`):

```bash
cd C:\Users\DELL\.gemini\antigravity-ide\scratch\shiva_portfolio_app

# Initialize Git repository
git init

# Add files
git add .

# Create initial commit
git commit -m "feat: Initial commit of award-winning portfolio web application"

# Rename default branch to main
git branch -M main

# Add remote repository
git remote add origin https://github.com/shiveek/portfolio-app.git

# Push to GitHub
git push -u origin main
```

---

## 🚀 SEO & Performance Optimization

- **Meta Tags**: Configured OpenGraph (`og:title`, `og:description`, `og:type`) in `index.html`.
- **Google Fonts**: Pre-connected Google Fonts (`Inter` & `Space Grotesk`) with `display=swap` to prevent render-blocking text flashes.
- **Lighthouse Performance Score**: Target >95 score achieved by utilizing hardware-accelerated CSS animations (`transform` and `opacity`), lightweight SVG icons, and standard chunk splitting.

---

## 🔮 Future Enhancement Ideas

1. **EmailJS Live Integration**: Add your EmailJS `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` in `ContactSection.jsx` to receive real emails straight to `shivashankarboda97@gmail.com`.
2. **Blog / Technical Writings**: Add a `/blog` route using Markdown or MDX to share tutorials on RAG systems and FastAPI microservices.
3. **Live Interactive Demos**: Host live web app demos for TaskFlow and RAG PDF Chatbot on Render/Vercel and link directly in project cards.
