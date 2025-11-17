# Phase 3: Feature Assignments

This document lists the Phase 3 feature assignments and exact steps each team member should follow.

## Assignments
- **Ali (Muhammad Ali Sheikh)** — Team Lead: Dashboard / Hero section
  - Branch: `feature-ali-dashboard`
  - Tasks: add hero HTML/CSS, navigation, responsive layout

- **Muneeb Ur Rehman (70149177)** — Developer 2: Skills section
  - Branch: `feature-muneeb-skills`
  - Tasks: enhance skills section with animations, add new skill cards, improve UI interactions
  - Status: ✅ Complete (PR merged)

- **Faraz Butt (70154218)** — Developer 3: Projects gallery
  - Branch: `feature-faraz-projects`
  - Tasks: add project cards, images, project details modal/links
  - Status: ✅ Complete (PR merged)

## Quick Start (copy/paste for each member)
1. Open PowerShell / Terminal and go to your projects folder:

```powershell
cd C:\path\to\projects
```

2. Clone the repository (if you haven't already):

```powershell
git clone https://github.com/alisheikh55209-png/IT-Poject-Management_Project-Final.git
cd IT-Poject-Management_Project-Final
```

3. Fetch latest and switch to your assigned branch:

```powershell
git fetch origin
git checkout -b feature-yourname origin/feature-yourname  # replace feature-yourname with your branch
```

4. Make changes, stage, commit, and push:

```powershell
# make your edits (HTML/CSS/JS)
git add .
git commit -m "Add: <short description of changes>"
git push -u origin feature-yourname
```

5. Create a Pull Request on GitHub:
- Open: https://github.com/alisheikh55209-png/IT-Poject-Management_Project-Final
- Click **Compare & pull request** or **Pull requests → New pull request**
- Select `feature-yourname` as the compare branch
- Use the `PULL_REQUEST_TEMPLATE.md` as guidance for the PR description
- Request review from the team lead (Ali)

## Review & Merge Process (Team Lead)
- Review the `Files changed` tab for the PR
- Approve (Review → Approve) and merge (Squash and merge recommended for small features)
- Delete the branch after merge
- Update `PROJECT_REPORT.md` with screenshots and short notes for the merged feature

## Notes
- Keep commits small and focused
- Do not commit large binary files; add them to `assets/images/` and optimize images
- If you run into merge conflicts, follow the steps in `CONTRIBUTING.md` under "Handling Merge Conflicts"


---
**Last updated:** November 15, 2025
