# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Pablo Campuzano's personal portfolio website — a static HTML/CSS site built from a Figma design.

## Structure

```
index.html   — landing page (navbar, hero, projects grid, footer)
about.html   — CV/about page (profile, skills, education, work experience, research)
```

## Stack

Plain HTML + CSS (no build tool, no framework). Open directly in a browser.

## Design System

Fonts used (loaded via Google Fonts where available):
- **Bitcount Grid Single** — nav links, tags, section headers (`var(--font-mono)`)
- **Georgia** (fallback for Thermal VF) — name, descriptions (`var(--font-display)`)
- **Merriweather Bold** — project titles (`var(--font-serif)`)
- **Source Code Pro** — about/CV page body (`var(--font-code)`)

Key colors:
- `#000` black — navbar bg, text
- `#f6f6f6` — page bg
- `#ffffff` — projects section bg, CV panel bg
- `#ff34d2` — pink accent (about page dates, dividers)
- `#484848` — CV body text

## Image Assets

Project images and the profile photo are served from Figma MCP asset URLs (expire after 7 days). Replace with permanent hosted URLs when deploying.

## Figma Source

`https://www.figma.com/design/u24Cej21BW1GLVG8Ux8WC7/Portafolio`
- `11:1829` — Landing page
- `151:2442` — About/CV page
- `69:6017` — Projects grid
