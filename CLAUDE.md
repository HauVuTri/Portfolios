# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vietnamese personal branding website for Đoàn Thị Duyên, a medical social marketing specialist. The site is a single-page HTML application focused on showcasing her expertise in building digital brands for Eastern and Western medicine doctors.

## Architecture

- **Single-page HTML application** (`index.html`) - No build process required
- **Frontend-only static site** using vanilla HTML, CSS, and JavaScript
- **External dependencies via CDN**:
  - Tailwind CSS for styling
  - AOS (Animate On Scroll) for animations
  - Feather Icons for iconography
- **No package.json or build tools** - everything runs directly in the browser

## Project Structure

```
dtd/
└── index.html    # Complete application in one file
```

## Common Commands

Since this is a static HTML site, there are no build commands. Development workflow:

- **Local development**: Open `index.html` directly in a browser or serve via local HTTP server
- **No build process required** - all dependencies are loaded via CDN
- **No linting or testing setup** - pure HTML/CSS/JS implementation

## Key Features

The website includes:
- Professional portfolio showcasing 3 medical specialists
- Responsive design optimized for mobile and desktop
- Contact form and consultation booking
- Vietnamese language content focused on medical marketing
- Professional color scheme (navy blue, gold accents)

## Content Sections

- Hero section with value proposition
- About section (7 years experience)
- Featured doctors/projects showcase
- Why choose section with key benefits
- Contact/consultation form
- Social media links

## Styling Approach

- Custom CSS classes for branding (.gold-accent, .bg-navy, .btn-gold)
- Tailwind utility classes for layout and responsive design
- Google Fonts (Playfair Display for headings, Plus Jakarta Sans for body)
- Hover effects and transitions for interactive elements