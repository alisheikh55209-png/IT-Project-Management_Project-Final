# Contributing Guidelines

## Team Members
- **Team Lead:** Muhammad Ali Sheikh (70151489)
- **Developer 2:** Muneeb Ur Rehman (70149177)
- **Developer 3:** Faraz Butt (70154218)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/alisheikh55209-png/IT-Poject-Management_Project-Final.git
cd IT-Poject-Management_Project-Final
```

### 2. Create Your Feature Branch
Use the following branch naming convention:

```bash
git checkout -b feature-<yourname>
```

**Examples:**
- `feature-ali` (Team Lead)
- `feature-muneeb` (Developer 2)
- `feature-faraz` (Developer 3)

### 3. Make Your Changes
- Work on your assigned component/feature
- Commit frequently with clear, descriptive messages:

```bash
git add .
git commit -m "Add: description of your changes"
```

**Commit Message Format:**
- `Add: new feature or file`
- `Fix: bug fix`
- `Update: modifications to existing code`
- `Docs: documentation updates`

### 4. Push Your Branch
```bash
git push origin feature-<yourname>
```

### 5. Create a Pull Request (PR)
- Go to GitHub and create a Pull Request from your branch to `main`
- Add a clear title and description
- Request review from the team lead
- Wait for approval before merging

## Workflow

1. **Create Branch** → `git checkout -b feature-yourname`
2. **Make Changes** → Edit files, test locally
3. **Commit** → `git commit -m "Clear message"`
4. **Push** → `git push origin feature-yourname`
5. **Create PR** → Submit Pull Request on GitHub
6. **Review** → Team lead reviews and provides feedback
7. **Merge** → Once approved, merge into `main`

## Handling Merge Conflicts

### Simulated Conflict Resolution (Phase 4 - November 17, 2025)

**Conflict Scenario:** Two team members (Muneeb and Faraz) simultaneously modified the same section in README.md, creating a merge conflict.

**Steps Taken:**
1. **Created conflict scenario:**
   - Muneeb (Developer 2) added content to team contributions section
   - Faraz (Developer 3) added different content to same section
   - Both pushed changes to their respective branches

2. **Resolved conflict:**
   - Used VS Code merge conflict editor to review differences
   - Combined both contributions appropriately
   - Removed conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
   - Committed the resolved changes

3. **Documented resolution:**
   - Added conflict resolution details to this section
   - Updated project status to Phase 4 Complete
   - Marked collaboration & conflict resolution as demonstrated

**Outcome:** Successfully resolved merge conflict, demonstrating Git collaboration skills. All team contributions preserved and properly documented.

---

### General Conflict Resolution Steps

If a conflict occurs:

1. **Pull latest main:**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Resolve conflicts** in your editor:
   - Look for `<<<<<<<`, `=======`, `>>>>>>>`
   - Keep the correct code, remove conflict markers
   - Save the file

3. **Continue rebase:**
   ```bash
   git add .
   git rebase --continue
   ```

4. **Force push (only after resolving):**
   ```bash
   git push origin feature-<yourname> --force
   ```

5. **Document** the conflict and resolution in the Pull Request

## Code Review Checklist
Before submitting a PR, ensure:
- [ ] Code is tested locally
- [ ] Commits have clear messages
- [ ] No unnecessary files are included
- [ ] Documentation is updated if needed
- [ ] Branch is up-to-date with `main`

## Communication
- Use GitHub Issues for bug reports
- Use PR comments for code discussion
- Notify team lead when PR is ready for review

## Project Phases
1. **Phase 1:** Repository setup 
2. **Phase 2:** Cloning & creating branches 
3. **Phase 3:** Development with assigned features 
4. **Phase 4:** Conflict resolution practice 
5. **Phase 5:** Final documentation 
6. **Phase 6:** Presentation to class 

## Deployment Status
- **TeamPortfolio Project:** Successfully deployed to GitHub with Next.js setup
- **Branch:** `blackboxai/deploy-teamportfolio`
- **Pull Request:** Created for review and merge
- **Development Server:** Running on http://localhost:3000
- **Repository:** https://github.com/alisheikh55209-png/IT-Poject-Management_Project-Final

## Questions?
Contact the team lead (Muhammad Ali Sheikh) via GitHub or direct message.

---
**Last Updated:** November 18, 2025
