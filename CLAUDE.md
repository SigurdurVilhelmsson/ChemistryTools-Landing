# CLAUDE.md - Development Guide for AI Assistants

This document provides context and guidelines for AI development assistants working on the ChemistryTools Landing project for kvenno.app.

## IMPORTANT: Read This First

**Before starting any work on kvenno.app projects:**
1. **Always read `Kvenno_structure.md` first** - This is the master document defining the entire site structure, design system, and navigation patterns
2. This CLAUDE.md file provides repo-specific context but `Kvenno_structure.md` is the authoritative source for design decisions

## Project Overview

This is the **main landing page and navigation hub** for kvenno.app - a portal for AI-powered chemistry education tools developed for Kvennaskólinn í Reykjavík (a secondary school in Reykjavik, Iceland).

**Primary Language:** Icelandic (all UI text, comments, and documentation should be in Icelandic)

**Architecture:** Static HTML pages with embedded CSS - no build process required

## Repository Structure

This repository contains the **landing page and year hub pages**. Individual tools are in separate repositories.

### Current Structure

```
ChemistryTools-Landing/
├── index.html              # Main landing page
├── 1-ar/
│   └── index.html         # 1st year hub
├── 2-ar/
│   └── index.html         # 2nd year hub
├── 3-ar/
│   └── index.html         # 3rd year hub
├── val/
│   └── index.html         # Elective courses hub
├── f-bekkir/
│   └── index.html         # Social sciences track hub
├── Kvenno_structure.md    # MASTER DOCUMENT - Site structure & design system
├── CLAUDE.md              # This file - AI assistant guide
└── README.md              # Project documentation
```

### Deployment Locations

**This Repository (Development → Production):**
- `/home/user/ChemistryTools-Landing` → `/var/www/kvenno.app/landing/`

**Other Tool Repositories:**
- Lab Reports: `/home/user/LabReports` → `/var/www/kvenno.app/lab-reports/`
- AI Tutor: `/home/user/AITutor` → `/var/www/kvenno.app/ai-tutor/` (future)
- Chemistry Games: Separate repos per year

### Web Paths
- **Landing Page:** `/` (this repo)
- **Year Hubs:** `/1-ar/`, `/2-ar/`, `/3-ar/`, `/val/`, `/f-bekkir/` (this repo)
- **Tools:** `/1-ar/ai-tutor/`, `/2-ar/lab-reports/`, etc. (separate repos)

## Current Status (As of 2024-11-20)

### Implemented Features
- ✅ Static HTML landing page and year hub structure
- ✅ Year-based navigation (1-ar, 2-ar, 3-ar, val, f-bekkir)
- ✅ Consistent header component on all pages
- ✅ Breadcrumb navigation on hub pages
- ✅ Responsive design following school's design system
- ✅ Tool cards with status indicators (available, coming, planned)

### In Development (Separate Repositories)
- 🚧 Lab Reports tool (`lab-reports-app`)
- 🚧 AI Tutor (`ai-tutor-app`, coming January 2026)
- 🚧 Chemistry Games (separate repos per year)

### Planned
- 📋 Admin features (separate admin tool or integrated into tools)
- 📋 Authentication system (Azure AD B2C)
- 📋 Additional chemistry tools

## Architecture & Tech Stack

### Tech Stack
- **Frontend:** Pure HTML + CSS (no framework)
- **Styling:** Embedded CSS in each HTML file
- **Build Tool:** None (static files)
- **Deployment:** Direct file copy to server

### Key Design Patterns

1. **Consistent Header Component**
   - Present on all pages
   - Logo: "Kvenno Efnafræði" (links to `/`)
   - Right buttons: "Kennari" and "Upplýsingar"
   - Sticky positioning
   - Defined in `Kvenno_structure.md`

2. **Breadcrumb Navigation**
   - Format: `Heim > [Section] > [Page]`
   - Always starts with "Heim" linking to `/`
   - Present on all sub-pages

3. **Year-Based Organization**
   - Main landing has tiles for each year/track
   - Each year hub lists tools relevant to that year
   - Tools can be shared across years (e.g., AI Tutor in 1st, 2nd, 3rd year)

## Design System

### Colors
```css
--primary-color: #f36b22;     /* Main orange (Kvennaskólinn brand) */
--background: #f5f5f5;         /* Light gray background */
--text-dark: #333333;          /* Main text */
--text-light: #666666;         /* Secondary text */
--white: #ffffff;              /* White backgrounds */
```

### Typography
- **Font Family:** System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif)
- **Headings:** Bold, orange or dark color
- **Body:** Regular weight, dark gray

### Component Styling

#### Buttons
```css
border: 2px solid #f36b22;
border-radius: 8px;
padding: 0.5rem 1.5rem;
transition: all 0.3s;
/* Hover: background #f36b22, color white */
```

#### Tiles/Cards
```css
border: 2px solid #f36b22;
border-radius: 12px;
padding: 2rem;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
/* Hover: transform translateY(-5px) */
```

### Responsive Breakpoints
- Mobile: < 768px
- Desktop: > 768px

## Development Guidelines

### When Adding New Features

1. **Always use Icelandic for user-facing text**
   - UI labels, messages should be in Icelandic
   - Variable names and code comments can be in English
   - Examples: "Heim" not "Home", "Til baka" not "Back"

2. **Follow the design system from Kvenno_structure.md**
   - Use #f36b22 for primary color
   - Use consistent button/card styling
   - Include header on all pages
   - Include breadcrumbs on sub-pages

3. **Maintain consistency across all pages**
   - Copy header HTML from existing pages
   - Use same CSS patterns
   - Follow same layout structure

4. **Keep it simple**
   - Static HTML is intentional - easy to deploy and maintain
   - No build process needed
   - Embed CSS in `<style>` tags (for now)

### Common Tasks

#### Adding a new year hub

1. Create new directory (e.g., `4-ar/`)
2. Copy `1-ar/index.html` as template
3. Update:
   - Page title and meta tags
   - Breadcrumbs: `Heim > 4. ár`
   - Page heading
   - Tool cards (add relevant tools)
4. Add navigation tile on main `index.html`

#### Adding a new tool to a year hub

Edit the relevant year's `index.html`:

```html
<a href="/1-ar/new-tool/" class="tool-card">
    <h3>Tool Name</h3>
    <p>Description of the tool in Icelandic...</p>
    <span class="status">Tiltækt / Væntanlegt / Í áætlun</span>
</a>
```

For "coming soon" tools, add class `coming-soon`:
```html
<a href="#" class="tool-card coming-soon">
```

#### Updating the header across all pages

The header is duplicated in each HTML file. To update:
1. Make changes in `index.html` first
2. Copy the updated header to all other HTML files:
   - `1-ar/index.html`
   - `2-ar/index.html`
   - `3-ar/index.html`
   - `val/index.html`
   - `f-bekkir/index.html`

**Note:** Consider extracting header to a separate file with JavaScript include if frequent updates are needed.

#### Updating CSS styles

CSS is embedded in each HTML file's `<style>` tag. To update globally:
1. Update styles in one file
2. Copy the updated `<style>` section to all other files
3. Ensure consistency

**Note:** Consider extracting to external CSS file if styles become more complex.

## Testing & Development

### Running locally

```bash
# Simple HTTP server
python3 -m http.server 8000
# Open http://localhost:8000

# Or with Node.js
npx serve .
# Open http://localhost:3000
```

### Testing navigation

- Test all links work correctly
- Verify breadcrumbs are accurate
- Check responsive design on mobile sizes
- Test hover effects and transitions

## Deployment

### Standard Deployment Process

```bash
# On production server:
cd /var/www/kvenno.app/landing

# Pull latest changes (if using git on server)
git pull origin main

# Or copy files directly
# From local: scp -r * user@server:/var/www/kvenno.app/landing/

# Set permissions
sudo chown -R www-data:www-data /var/www/kvenno.app/landing
sudo chmod -R 755 /var/www/kvenno.app/landing
```

### Deployment Checklist

- [ ] Test all pages locally
- [ ] Verify all links work
- [ ] Check Icelandic characters display correctly
- [ ] Test on mobile and desktop sizes
- [ ] Verify breadcrumbs are correct
- [ ] Copy files to server
- [ ] Set correct permissions
- [ ] Test live site

## Tool Deployment Architecture

Each tool is developed and deployed independently:

```
Repository              → Deployment                  → Web Path
────────────────────────────────────────────────────────────────
kvenno-landing          → /var/www/kvenno.app/landing → /
lab-reports-app         → /var/www/kvenno.app/lab-reports → /2-ar/lab-reports/
ai-tutor-app            → /var/www/kvenno.app/ai-tutor → /1-ar/ai-tutor/
chemistry-games-1ar     → /var/www/kvenno.app/games-1ar → /1-ar/games/
```

### Adding a New Tool

1. **Create the tool in a separate repository**
2. **Build and deploy to `/var/www/kvenno.app/[tool-name]`**
3. **Add tool card to relevant year hub page(s)**
4. **Ensure tool includes:**
   - Consistent header component
   - Breadcrumb navigation
   - Link back to parent hub
   - Same design system (colors, fonts, styling)

## Important Context

### Icelandic Language
- All UI text must be in Icelandic
- This is a requirement for the school
- Use proper Icelandic characters (á, ð, é, í, ó, ú, ý, þ, æ, ö)

### School Context
- **Target users:** Secondary school students and teachers
- **School:** Kvennaskólinn í Reykjavík
- **Email domain:** @kvenno.is
- **Subject:** Chemistry (Efnafræði)

### Authentication (Future)
- Will be implemented with Azure AD B2C
- Currently no authentication on landing pages
- Individual tools may implement their own auth
- Keep auth logic modular for future integration

### AI Integration (In Tools)
- Tools will use Claude from Anthropic for AI functionality
- Not implemented in landing pages (static navigation only)
- GDPR compliance is important
- No user data should be stored without consent

## Git Workflow

### Branch Naming
- Feature branches: `claude/feature-name-{session-id}`
- Main branch: `main`

### Commit Messages
- Use clear, descriptive messages
- Can be in English or Icelandic
- Examples:
  - "Add 4th year hub page"
  - "Update header styling across all pages"
  - "Bæta við nýju verkfæri á 2. árs síðu"

## Future Considerations

### Potential Improvements

1. **Extract Common Components**
   - Consider using a static site generator (e.g., 11ty, Hugo)
   - Or simple PHP/JavaScript includes for header/footer
   - Would make updates easier across multiple pages

2. **External CSS File**
   - Extract CSS to `styles.css`
   - Include in all pages with `<link>` tag
   - Easier to maintain consistency

3. **Build Process**
   - If complexity grows, consider adding:
   - Sass/SCSS for better CSS organization
   - Template system for reusable components
   - Minification for production

4. **Progressive Enhancement**
   - Add JavaScript for enhanced interactions
   - Keep core functionality working without JS
   - Consider adding small animations

### When Adding Authentication

- Landing pages may not need auth
- Individual tools will handle their own authentication
- Consider shared auth state via localStorage or cookies
- Azure AD B2C will be the central auth provider

## Questions or Issues?

If you encounter unclear requirements or architectural decisions:
1. **Check `Kvenno_structure.md` first** - it's the authoritative source
2. Check existing patterns in similar pages
3. Prioritize consistency with current implementation
4. Keep the Icelandic language requirement in mind
5. Maintain simplicity - static HTML is intentional
6. Ask the user for clarification if needed

## Recent Changes

### 2024-11-20: Complete Restructure to Static HTML
- **BREAKING:** Removed React-based SPA architecture
- Changed to static HTML pages (no build process)
- Implemented year-based hub structure (1-ar, 2-ar, 3-ar, val, f-bekkir)
- Added consistent header component on all pages
- Added breadcrumb navigation on hub pages
- Implemented design system from `Kvenno_structure.md`
- Created `Kvenno_structure.md` as master design document
- Removed all React dependencies, build tools, and complex infrastructure

### Previous History (Pre-2024-11-20)
- Project was previously React-based with Vite, React Router, Context API
- Had mock authentication with RBAC
- Included admin dashboard
- Changed architecture to simpler static approach

---

**Last Updated:** 2024-11-20
**Project Version:** 2.0.0 (Static HTML rewrite)
**Status:** Production

---

## Quick Reference for AI Assistants

**Working on this repo:**
1. Read `Kvenno_structure.md` for design system
2. Use Icelandic for all UI text
3. Maintain consistency across all HTML files
4. Test locally before deployment
5. Remember: Simple static HTML is intentional

**Adding features:**
- Copy existing patterns from current pages
- Use #f36b22 for primary color
- Include header and breadcrumbs
- Keep responsive design in mind
- Update all relevant pages if making global changes

**Deployment:**
- No build process needed
- Copy files directly to `/var/www/kvenno.app/landing/`
- Set permissions: `chmod 755`, `chown www-data:www-data`
