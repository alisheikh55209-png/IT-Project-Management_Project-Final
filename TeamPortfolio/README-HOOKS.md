Git hooks for automatic commit numbering

What this does
- Adds a prepare-commit-msg hook (both POSIX shell and PowerShell) that increments `.githooks/commit_count.txt` and prefixes your commit messages with "Commit N: "

How to enable (Windows PowerShell)
1. Open PowerShell in the repository root `TeamPortfolio`.
2. Run:

   ```powershell
   .\.githooks\install-hooks.ps1
   ```

How to enable (Unix / macOS / WSL)
1. In the repository root run:

   ```sh
   git config core.hooksPath .githooks
   chmod +x .githooks/prepare-commit-msg
   ```

Notes
- Hooks are not automatically enabled by cloning — each contributor must run the above once.
- The PowerShell hook file `prepare-commit-msg.ps1` will be executed automatically by Git on Windows if your Git installation is configured to run PowerShell hooks; otherwise use the shell hook.
- The hook avoids prefixing merge/squash commits.
