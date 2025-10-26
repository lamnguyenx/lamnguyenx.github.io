# Research Findings: Hugo Migration

## Converting Quarto .qmd Files to Hugo Markdown

**Decision**: Use Quarto's `hugo-md` format to render .qmd files to Hugo-compatible Markdown.

**Rationale**: Quarto provides native support for generating Hugo-compatible output. The `quarto render --to hugo-md` command converts computational documents to plain markdown with proper frontmatter.

**Alternatives considered**:
- Manual conversion: Too error-prone and time-consuming for multiple files.
- Pandoc conversion: Less reliable with Quarto-specific syntax.

**Implementation**: Run `quarto render content/*.qmd --to hugo-md` to generate .md files in same directories.

## Implementing Dark Mode Toggle Without Plugins

**Decision**: Implement dark mode using CSS custom properties and vanilla JavaScript.

**Rationale**: Provides full control over theming, no external dependencies, works with static generation. Use CSS variables for colors, JavaScript for toggle and localStorage for persistence.

**Alternatives considered**:
- Hugo themes with dark mode: Introduces dependencies and complexity.
- CSS-only solutions: Limited persistence and toggle functionality.

**Implementation**:
- Define color variables in CSS: `--bg-color`, `--text-color`, etc.
- Create toggle button with JavaScript event listener.
- Use localStorage to remember user preference.
- Add `data-theme` attribute to HTML element.

## Minimal Hugo Site Setup

**Decision**: Use `hugo new site` without themes, create basic layouts manually.

**Rationale**: Avoids theme dependencies while maintaining full control. Hugo requires only `layouts/_default/single.html` and `list.html` for basic functionality.

**Alternatives considered**:
- Using minimal themes: Still introduces external dependencies.
- Full custom build system: Overkill for simple blog needs.

**Implementation**:
- `hugo new site sitename`
- Create `layouts/_default/single.html` for post pages.
- Create `layouts/_default/list.html` for index/section pages.
- Add basic CSS in `assets/css/main.css`.
- Configure `hugo.toml` with minimal settings.
