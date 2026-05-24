param(
  [string]$Version = "20260525-static-blog-data"
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$indexPath = Join-Path $root "index.html"
$stylesPath = Join-Path $root "styles.css"
$appPath = Join-Path $root "app.js"
$outputPath = Join-Path $root "google-apps-script\Index.html"

function Read-Utf8([string]$Path) {
  return [System.IO.File]::ReadAllText($Path, [System.Text.Encoding]::UTF8)
}

function Write-Utf8NoBom([string]$Path, [string]$Content) {
  $encoding = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($Path, $Content, $encoding)
}

function Get-MimeType([string]$Path) {
  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    ".png" { return "image/png" }
    ".jpg" { return "image/jpeg" }
    ".jpeg" { return "image/jpeg" }
    ".svg" { return "image/svg+xml" }
    ".webp" { return "image/webp" }
    ".otf" { return "font/otf" }
    ".ttf" { return "font/ttf" }
    ".woff" { return "font/woff" }
    ".woff2" { return "font/woff2" }
    default { return "application/octet-stream" }
  }
}

function Convert-AssetToDataUri([string]$AssetRef) {
  $assetPathOnly = ($AssetRef -replace '^\./', '') -replace '\?.*$', ''
  $assetPath = Join-Path $root $assetPathOnly
  if (-not (Test-Path -LiteralPath $assetPath)) {
    Write-Warning "Asset not found: $AssetRef"
    return $AssetRef
  }

  $mimeType = Get-MimeType $assetPath
  $bytes = [System.IO.File]::ReadAllBytes($assetPath)
  $base64 = [Convert]::ToBase64String($bytes)
  return "data:$mimeType;base64,$base64"
}

$html = Read-Utf8 $indexPath
$css = Read-Utf8 $stylesPath
$js = Read-Utf8 $appPath

$html = [regex]::Replace(
  $html,
  '<link rel="stylesheet" href="\./styles\.css\?v=[^"]+"\s*/>',
  "    <style>`n$css`n    </style>"
)

$html = [regex]::Replace(
  $html,
  '<script src="\./app\.js\?v=[^"]+"></script>',
  "    <script>`n$js`n    </script>"
)

$assetPattern = '\./assets/[^"''\)\s]+\.(?:png|jpg|jpeg|svg|webp|otf|ttf|woff|woff2)(?:\?[^"''\)\s]+)?'
$matches = [regex]::Matches($html, $assetPattern) | ForEach-Object { $_.Value } | Sort-Object -Unique

foreach ($assetRef in $matches) {
  $dataUri = Convert-AssetToDataUri $assetRef
  $html = $html.Replace($assetRef, $dataUri)
}

Write-Utf8NoBom $outputPath $html

$imageRefsLeft = [regex]::Matches($html, $assetPattern).Count
$sizeMb = [Math]::Round((Get-Item -LiteralPath $outputPath).Length / 1MB, 2)
Write-Host "Built $outputPath"
Write-Host "Embedded assets: $($matches.Count)"
Write-Host "Remaining local asset refs: $imageRefsLeft"
Write-Host "Output size: $sizeMb MB"
