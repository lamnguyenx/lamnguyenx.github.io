# Data Model: Hugo Site Migration

## Content Files Entity

**Purpose**: Represents markdown content files converted from Quarto.

**Attributes**:
- title: string (from frontmatter)
- date: datetime (publication date)
- draft: boolean (draft status)
- tags: array of strings (optional)
- categories: array of strings (optional)
- content: markdown text
- images: references to static assets

**Relationships**:
- Belongs to: Site sections (blog, about, etc.)
- References: Static assets in /static/

**Validation Rules**:
- Title must be present and non-empty
- Date must be valid ISO format
- Content must be valid markdown

## Site Configuration Entity

**Purpose**: Hugo site configuration and settings.

**Attributes**:
- baseURL: string (site URL)
- title: string (site title)
- author: string
- languageCode: string
- theme: string (empty for no theme)
- params: object (custom parameters)

**Relationships**:
- Configures: Layout templates
- Defines: Site structure

**Validation Rules**:
- baseURL must be valid URL
- Required fields present

## Static Assets Entity

**Purpose**: Images, CSS, JS files served by Hugo.

**Attributes**:
- path: string (relative path in /static/)
- type: string (image, css, js)
- size: number (file size in bytes)

**Relationships**:
- Referenced by: Content files
- Served by: Hugo static pipeline
