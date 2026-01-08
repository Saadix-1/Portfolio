# Saad's Portfolio

A professional, responsive personal portfolio website built with semantic HTML5, modern CSS3 (Dark Theme), and vanilla JavaScript. Designed to showcase software engineering projects, internships, and certifications.

## 🚀 Quick Start

Open `index.html` in your browser to view the site locally.

## 🛠 Tech Stack

- **HTML5**: Semantic structure for SEO.
- **CSS3**: Custom properties (variables), Flexbox, Grid, Glassmorphism.
- **JavaScript**: Smooth scrolling, mobile navigation, scroll-triggered animations.

## 🌐 Alignment with Professional Standards
- **Dark Mode**: High-contrast, engineer-focused aesthetic.
- **Performant**: No heavy framework overhead.
- **Mobile First**: Fully responsive design.

---

## ☁️ How to Deploy to Netlify

### Method 1: The Easiest Way (Drag & Drop)
*Best for a quick preview or one-time upload.*

1. Go to [app.netlify.com](https://app.netlify.com).
2. Log in or Sign up.
3. Go to the **Sites** tab.
4. Drag the entire **folder** containing your `index.html`, `styles.css`, and `script.js` (likely named `Projet` or `Portfolio`) onto the drop area that says **"Drag and drop your site output folder here"**.
5. Wait a few seconds (~5s).
6. **Success!** Netlify will give you a generated URL (e.g., `silly-name-12345.netlify.app`).
7. Click "Site Settings" > "Change site name" to make it `saad-portfolio.netlify.app`.

### Method 2: The Professional Way (GitHub Integration)
*Best for long-term maintenance. Updates automatically when you push code.*

1. **Push this code to GitHub** (if not already done).
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   # Create a repo on GitHub.com and copy the URL
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
2. Go to [app.netlify.com](https://app.netlify.com) and click **"Add new site"** > **"Import an existing project"**.
3. Select **GitHub**.
4. Authorize Netlify to access your GitHub repositories.
5. Search for and select your **Portfolio** repository.
6. Click **Deploy**.
7. Done! Now every time you modify a file and `git push`, your site updates automatically.
