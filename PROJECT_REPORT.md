# Project Report

## Project Title
Portfolio Website

## Team
- Muhammad Ali Sheikh (70151489) - Team Lead
- Muneeb Ur Rehman (70149177) - Developer 2
- Faraz Butt (70154218) - Developer 3

## Abstract
This project demonstrates collaborative software development using Git and GitHub workflows. Our team built a modern, responsive portfolio website showcasing DevOps and web development skills. The project emphasizes version control, team collaboration, conflict resolution, and professional documentation practices.

## Objectives
- Demonstrate proficiency in Git/GitHub workflows including branching, merging, and pull requests
- Build a functional portfolio website with modern web technologies
- Practice team collaboration and conflict resolution in a development environment
- Create comprehensive documentation and testing procedures
- Present the project professionally to meet course requirements

## Features Implemented
- **Projects Gallery Section** — Displays six project cards (three from team, three from Faraz) with images, titles, descriptions, and technology tags.
- **Activity/Session Section** — Real-time updates visible to team lead and instructor; shows project submissions and team conversations.
- **Responsive Design** — Mobile-friendly layout for all sections using CSS Grid and Flexbox.
- **Dark Mode Toggle** — Light/dark theme switcher integrated throughout the site.
- **SVG Thumbnails** — Custom, scalable project visuals for DevOps/infrastructure projects.

## Implementation Details
- **Tech Stack:** HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript
- **Architecture:** Single-page application with modular CSS and JavaScript components
- **File Structure:**
  ```
  TeamPortfolio/
  ├── index.html (Main HTML file)
  ├── assets/
  │   ├── css/
  │   │   ├── style.css (Main styles)
  │   │   ├── hero.css (Hero section styles)
  │   │   └── [other component styles]
  │   ├── js/
  │   │   └── script.js (Main JavaScript functionality)
  │   └── images/
  │       ├── projects/ (Project thumbnails and SVGs)
  │       └── [other assets]
  └── README.md
  ```
- **Responsive Design:** Mobile-first approach using CSS Grid and Flexbox
- **Performance:** Optimized loading animations and lazy loading for images

## How to run locally
1. Open `index.html` in a browser
2. (Optional) Serve with a simple static server

## Screenshots

### Desktop View - Full Portfolio
![Portfolio Desktop View](TeamPortfolio/screenshots/desktop-full.png)

### Mobile View - Responsive Design
![Portfolio Mobile View](TeamPortfolio/screenshots/mobile-responsive.png)

### Projects Gallery - DevOps Projects
![Projects Gallery](TeamPortfolio/screenshots/projects-gallery.png)

### Dark Mode Toggle
![Dark Mode](TeamPortfolio/screenshots/dark-mode.png)

### Skills Section - Interactive Elements
![Skills Section](TeamPortfolio/screenshots/skills-section.png)

## Testing & Validation

### **Comprehensive Testing Results (Phase 5 - November 17, 2025)**

#### **Functional Testing:**
- ✅ **Website Loading:** Successfully opens in default browser via `start TeamPortfolio/index.html`
- ✅ **Navigation:** All sections (Hero, Skills, Projects, Activity) accessible via smooth scrolling
- ✅ **Dark Mode Toggle:** Theme switcher works correctly, persists across sections
- ✅ **Responsive Design:** Tested on multiple screen sizes (desktop, tablet, mobile breakpoints)
- ✅ **Project Cards:** All 6 project cards display with images, titles, descriptions, and technology tags
- ✅ **Interactive Elements:** Skill bars animate on hover, project cards have hover effects
- ✅ **Activity Section:** Team conversation logs display correctly with proper formatting

#### **Cross-Browser Testing:**
- ✅ **Chrome:** Full functionality confirmed
- ✅ **Firefox:** All features working
- ✅ **Edge:** Responsive design and interactions verified

#### **Performance Testing:**
- ✅ **Load Times:** Page loads within 2 seconds on standard connections
- ✅ **Animations:** Smooth transitions and hover effects
- ✅ **Image Loading:** All project thumbnails load correctly

#### **Manual Test Steps Performed:**
1. **Desktop Testing (1920x1080):**
   - Opened `TeamPortfolio/index.html` in browser
   - Verified full layout and all sections visible
   - Tested dark mode toggle functionality
   - Checked project gallery grid layout
   - Confirmed activity section displays team conversations

2. **Mobile Testing (375x667):**
   - Resized browser to mobile dimensions
   - Verified responsive grid layouts
   - Tested touch interactions and scrolling
   - Confirmed mobile navigation works

3. **Tablet Testing (768x1024):**
   - Tested intermediate breakpoint layouts
   - Verified content reflows appropriately

#### **Assets Validation:**
- ✅ **SVG Thumbnails:** Three custom SVGs (faraz-ci-cd-realistic.svg, faraz-terraform.svg, faraz-monitoring.svg) located in `TeamPortfolio/assets/images/projects/`
- ✅ **Image Loading:** All project images display correctly
- ✅ **File Paths:** All asset references are valid and accessible

#### **Known Issues:**
- ❌ **None reported** - All functionality working as expected
- ✅ **All project cards display correctly with images, descriptions, and tags**
- ✅ **No broken links or missing assets**

#### **Testing Environment:**
- **OS:** Windows 11
- **Browser:** Chrome 119.0.6045.105 (Default), Firefox 119.0, Edge 119.0.2151.44
- **Screen Resolutions:** 1920x1080, 1366x768, 768x1024, 375x667
- **Network:** Local testing (no external dependencies)

**Test Status:** ✅ **PASSED** - All critical functionality verified and working correctly.

## Individual Contributions
| Team Member | Tasks Completed |
|-------------|------------------|
| Muhammad Ali Sheikh | Dashboard, Hero section, Team assignment coordination, README updates |
| Muneeb | **Skills Section (Nov 17, 2025):** Enhanced Skills section with additional technologies and improved UI animations. Added interactive skill bars and hover effects. Branch: `feature-muneeb-skills` - PR merged. |
| Faraz Butt | **Projects Gallery (Nov 17, 2025):** Added three DevOps/infrastructure project cards with detailed descriptions and custom SVG thumbnails. Created Activity/Session section with team conversation logs. Included: Scalable CI/CD Pipeline (Docker, GitHub Actions, Kubernetes), Cloud Infrastructure Automation (Terraform, AWS, IaC), Monitoring & Observability Stack (Prometheus, Grafana, Loki). |

## Update Log
- Nov 17, 2025 10:00 — Muneeb: Submitted PR for Skills section enhancements with animations and interactive elements.
- Nov 17, 2025 10:30 — Ali: Reviewed and merged Muneeb's PR (`feature-muneeb-skills`) - Skills section complete.
- Nov 17, 2025 14:30 — Faraz Butt: Added three project cards to Projects gallery with polished descriptions and tags.
- Nov 17, 2025 14:35 — Faraz Butt: Created Activity/Session section with team conversation thread (Ali, Faraz, Teacher) for visibility.
- Nov 17, 2025 14:40 — Faraz Butt: Added CSS styling for Activity section (responsive, dark mode compatible).
- Nov 17, 2025 14:45 — Faraz Butt: Replaced project thumbnails with distinct existing images (devdreaming.jpg, fashion-studio-website.jpg, nft-collection-website-cover-image.jpg).
- Nov 17, 2025 14:50 — Faraz Butt: Created high-fidelity SVG placeholder for Scalable CI/CD Pipeline with pipeline visualization (Build → Test → Package → Deploy).
- Nov 17, 2025 15:00 — Faraz Butt: Finalized project thumbnails and committed all changes to branch `feature-faraz-projects`.
- Nov 18, 2025 12:00 — Ali: Successfully deployed TeamPortfolio project with Next.js setup to GitHub branch `blackboxai/deploy-teamportfolio`.
- Nov 18, 2025 12:30 — Ali: Updated CONTRIBUTING.md with deployment status and corrected project phases.
- **Branch:** `feature-faraz-projects` | **Status:** Ready for Pull Request review.
- **Branch:** `blackboxai/deploy-teamportfolio` | **Status:** Deployed and ready for review.

## Team Conversation Logs
**Pull Request Acceptance - Muneeb's Skills Section:**

- **Muneeb:** "Hi Ali, I've completed the Skills section enhancements. Added new skill cards, improved animations, and interactive hover effects. PR is ready for review."
- **Ali:** "Great work Muneeb! Let me review the changes. The animations look smooth and the new skill cards fit well with the design."
- **Ali:** "Approved! Merging your PR now. Skills section is complete."
- **Muneeb:** "Thanks Ali! Glad to contribute to the team portfolio."

**Faraz's Work Completion:**
- **Faraz:** "Ali, my projects gallery is ready. Added three DevOps projects with custom SVGs and the activity section for transparency."
- **Ali:** "Excellent Faraz! The projects look professional and the activity section will be great for the instructor to see our progress."

**Muneeb's Work Update:**
- **Muneeb:** "Hi team, I've been working on enhancing the portfolio's loading performance. The animations now load much faster and more consistently. Also updated all documentation files to reflect our current team structure and contributions."
- **Ali:** "Thanks Muneeb! The faster loading times will improve user experience significantly."

**Ali's Team Coordination:**
- **Ali:** "Great work everyone! I've reviewed both Muneeb's skills enhancements and Faraz's projects gallery. Everything looks excellent. Let's make sure all our documentation is up to date before the final submission."
- **Muneeb:** "Sounds good Ali. I've also added some additional conversation logs to document our recent discussions."
- **Faraz:** "Agreed. The activity section is really helping track our progress. Ready for final review."
- **Ali:** "Perfect. I'll merge the latest updates and ensure everything is consistent across all files."

## Lessons Learned
- **Git Workflow Mastery:** Learned the importance of proper branching strategies, pull request reviews, and conflict resolution in team environments
- **Collaborative Development:** Experienced real-world team dynamics, communication, and coordination challenges in software development
- **Documentation Importance:** Understood the value of comprehensive documentation for project maintenance and knowledge transfer
- **Performance Optimization:** Discovered the impact of small optimizations on user experience and loading times
- **Version Control Best Practices:** Gained practical experience with Git commands, commit messages, and repository management

## References
- **GitHub Documentation:** https://docs.github.com/en/get-started
- **CSS Grid Guide:** https://css-tricks.com/snippets/css/complete-guide-grid/
- **JavaScript MDN:** https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Responsive Design Patterns:** https://developers.google.com/web/fundamentals/design-and-ux/responsive/
- **SVG Icons:** https://www.flaticon.com/ (for project thumbnails)

---
**Last Updated:** November 17, 2025
