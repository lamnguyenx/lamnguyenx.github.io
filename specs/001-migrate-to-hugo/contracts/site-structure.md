# Site Structure Contract

## Directory Layout

```
hugo-site/
├── config.toml              # Site configuration
├── content/                 # Markdown content
│   ├── _index.md           # Homepage
│   ├── about/
│   │   └── _index.md
│   └── posts/
│       ├── _index.md
│       └── post1.md
├── layouts/                 # HTML templates
│   └── _default/
│       ├── baseof.html     # Base template
│       ├── single.html     # Single page template
│       └── list.html       # List page template
├── assets/                  # CSS/JS source files
│   └── css/
│       └── main.css
├── static/                  # Static assets (images, etc.)
└── public/                  # Generated site (output)
```

## Content Frontmatter Schema

```yaml
---
title: "Post Title"
date: 2025-10-26T10:00:00Z
draft: false
tags: ["tag1", "tag2"]
categories: ["category1"]
---

Content here...
```

## Configuration Contract

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "Site Title"

[params]
  author = "Author Name"
  description = "Site description"
```

## Template Variables

- `.Title`: Page title
- `.Content`: Rendered content
- `.Date`: Publication date
- `.Params.tags`: Tag array
- `.Site.Params.author`: Site author
