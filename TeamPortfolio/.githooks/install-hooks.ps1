# Run from repository root in PowerShell to set hooks path to .githooks
param()
$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
# navigate to repo root (folder containing this script)
Set-Location $repoRoot
Write-Host "Setting git core.hooksPath to .githooks for repository at $repoRoot"
git config core.hooksPath ".githooks"
if ($LASTEXITCODE -eq 0) { Write-Host "Hooks path set. Ensure the hook files are executable on your OS." } else { Write-Host "Failed to set hooksPath. Run this in a git repo root and ensure git is installed." }
