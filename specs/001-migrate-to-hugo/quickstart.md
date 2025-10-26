# Quickstart: Migrate to Hugo

## Prerequisites

- Install Hugo: `brew install hugo` (macOS) or download from hugo.io
- Install Quarto: `brew install quarto` or from quarto.org
- Git repository with existing Quarto site

## Migration Steps

### 1. Backup Current Site

```bash
cp -r content/ content_backup/
cp _quarto.yml _quarto.yml.backup
```

### 2. Create Hugo Site

```bash
hugo new site .
# Remove default files
rm -rf archetypes/ content/ layouts/ static/
```

### 3. Convert Content

```bash
# Convert all .qmd files to Hugo markdown
find content_backup -name "*.qmd" -exec quarto render {} --to hugo-md \;
# Move generated .md files to content/
find content_backup -name "*.md" -exec cp {} content/ \;
```

### 4. Setup Basic Layouts

Create `layouts/_default/baseof.html`:

```html
<!DOCTYPE html>
<html lang="en" data-theme="{{ .Site.Params.theme | default "light" }}">
<head>
    <meta charset="UTF-8">
    <title>{{ .Title }} | {{ .Site.Title }}</title>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <header>...</header>
    <main>{{ block "main" . }}{{ end }}</main>
    <footer>...</footer>
    <script src="/js/theme-toggle.js"></script>
</body>
</html>
```

### 5. Configure Site

Edit `config.toml`:

```toml
baseURL = "https://yourusername.github.io/"
languageCode = "en-us"
title = "Your Site Title"

[params]
  author = "Your Name"
```

### 6. Build and Test

```bash
hugo server -D  # Preview locally
hugo             # Build for production
```

## Dark Mode Setup

1. Add CSS variables in `assets/css/main.css`
2. Create theme toggle script in `assets/js/theme-toggle.js`
3. Add toggle button to base template

## Deployment

Push to GitHub main branch. GitHub Pages will auto-deploy from `docs/` folder or root `public/`.
