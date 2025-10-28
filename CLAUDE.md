# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Quarto book project for lamnguyenx's personal website and technical blog. The project contains technical content about AI engineering, context engineering, and Python data science topics.

## Development Commands

### Building the Book
- **Render the entire book**: `quarto render`
- **Render specific file**: `quarto render filename.qmd`
- **Preview locally**: `quarto preview`

### Project Structure
- **Configuration**: `_quarto.yml` defines the book structure, themes, and output settings
- **Content files**: `.qmd` files contain the book chapters and content
- **Output directory**: `docs/` (configured in `_quarto.yml`)
- **Styles**: Custom CSS in `visionbook.css` and `custom.css`
- **Custom theme**: `custom-dark.scss` for dark mode styling

## Key Configuration Details

### Book Structure
- **Title**: "lamnguyenx"
- **Description**: "code/music/cycling/cats/dogs expert since 1995"
- **Output format**: HTML book with light/dark theme support
- **Chapters**: Defined in `_quarto.yml`

### Styling and Themes
- **Light theme**: Cosmo
- **Dark theme**: Darkly with custom-dark.scss
- **Custom CSS**: visionbook.css for additional styling
- **Code formatting**: Printing highlight style with code block backgrounds
- **Theme toggle**: Site includes a toggle button for dark/light theme switching

### Python Dependencies
- **Code execution**: Enabled by default in Quarto

## Content Architecture

- **index.qmd**: Personal introduction and about page
- **advanced-context-engineering.qmd**: Technical content about AI engineering practices
- **indexing.qmd**: Currently commented out in configuration

## Deployment

- The book is configured to build to the `docs/` directory
- GitHub Pages deployment uses the `docs` folder as the source
- Repository is configured for GitHub Pages with `.nojekyll` file

## Development Notes

- The project uses Quarto > 1.7
- Custom styling focuses on clean presentation with floating sidebar
- MathJax is enabled for mathematical content
- Code blocks are configured with wrapping and background styling