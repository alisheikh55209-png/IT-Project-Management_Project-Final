# PowerShell version of prepare-commit-msg hook
param(
    [string]$commitMsgFile,
    [string]$commitSource,
    [string]$sha1
)
$countFile = Join-Path $PSScriptRoot 'commit_count.txt'
if (-not (Test-Path $countFile)) { Set-Content -Path $countFile -Value '0' -Encoding UTF8 }
try {
    $count = [int](Get-Content $countFile -Raw)
} catch {
    $count = 0
}
$new = $count + 1
Set-Content -Path $countFile -Value $new -Encoding UTF8
if ($commitSource -in @('merge','squash')) { exit 0 }
if (Test-Path $commitMsgFile) {
    $firstLine = Get-Content -Path $commitMsgFile -TotalCount 1 -Raw
    if ($firstLine -notmatch '^Commit \d+:') {
        $rest = Get-Content -Path $commitMsgFile -Raw
        Set-Content -Path $commitMsgFile -Value ("Commit $new: `n" + $rest) -Encoding UTF8
    }
}
exit 0
