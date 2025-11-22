# CLAUDE.md - Development Guide for AI Assistants

This document provides context and guidelines for AI development assistants working on the ChemistryTools Landing project for kvenno.app.

## IMPORTANT: Read This First

**Before starting any work on kvenno.app projects:**
1. **Always read `KVENNO-STRUCTURE.md` first** - This is the master document defining the entire site structure, design system, and navigation patterns
2. This CLAUDE.md file provides repo-specific context but `KVENNO-STRUCTURE.md` is the authoritative source for design decisions

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
├── media/                 # Favicon and brand assets
│   ├── favicon.ico
│   ├── favicon.svg
│   └── ...
├── KVENNO-STRUCTURE.md    # MASTER DOCUMENT - Site structure & design system
├── CLAUDE.md              # This file - AI assistant guide
├── DEPLOYMENT.md          # Deployment instructions and procedures
├── README.md              # Project documentation
└── styles.css             # Global styles for landing page
```

### Deployment Locations

**This Repository (Development → Production):**
- `/home/user/ChemistryTools-Landing` → `/var/www/kvenno.app/` (root level)
  - Deploys: `index.html`, `styles.css`, `media/`, and all hub pages (`1-ar/index.html`, etc.)

**Other Tool Repositories:**
- Lab Reports: `/home/user/LabReports` → `/var/www/kvenno.app/2-ar/lab-reports/` and `/var/www/kvenno.app/3-ar/lab-reports/`
- AI Tutor: `/home/user/icelandic-chemistry-ai-tutor` → `/var/www/kvenno.app/1-ar/ai-tutor/`, `/var/www/kvenno.app/2-ar/ai-tutor/`, `/var/www/kvenno.app/3-ar/ai-tutor/`
- Chemistry Games: `/home/user/ChemistryGames` → `/var/www/kvenno.app/[year]/games/` (separate builds per year)

### Web Paths
- **Landing Page:** `/` (this repo - `index.html`)
- **Year Hubs:** `/1-ar/`, `/2-ar/`, `/3-ar/`, `/val/`, `/f-bekkir/` (this repo - hub `index.html` files)
- **Tools:** `/1-ar/ai-tutor/`, `/2-ar/lab-reports/`, `/1-ar/games/`, etc. (separate repos - see KVENNO-STRUCTURE.md section 1)

## Current Status (As of 2025-11-22)

### Implemented Features
- ✅ Static HTML landing page and year hub structure
- ✅ Year-based navigation (1-ar, 2-ar, 3-ar, val, f-bekkir)
- ✅ Consistent header component on all pages
- ✅ Breadcrumb navigation on hub pages
- ✅ Responsive design following school's design system
- ✅ Tool cards with status indicators (available, coming, planned)
- ✅ Favicon and brand assets in media folder
- ✅ Global styles in styles.css
- ✅ Comprehensive documentation (KVENNO-STRUCTURE.md, DEPLOYMENT.md)

### In Development (Separate Repositories)
- 🚧 Lab Reports tool (`LabReports` repo) - deployed to 2nd and 3rd year
- 🚧 AI Tutor (`icelandic-chemistry-ai-tutor` repo) - deployed to 1st, 2nd, and 3rd year
- 🚧 Chemistry Games (`ChemistryGames` repo) - separate games per year

### Planned
- 📋 Additional chemistry tools as needed
- 📋 Elective course tools (`/val/`)
- 📋 Social sciences track tools (`/f-bekkir/`)

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
   - Defined in `KVENNO-STRUCTURE.md`

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

2. **Follow the design system from KVENNO-STRUCTURE.md**
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
5. Update KVENNO-STRUCTURE.md to reflect the new hub
6. Test locally before deployment (see DEPLOYMENT.md)

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

**See DEPLOYMENT.md for comprehensive deployment instructions.**

Quick reference:

```bash
# From local machine (WSL)
cd /home/user/ChemistryTools-Landing
scp -r * siggi@server:/tmp/landing-deploy/

# SSH to server
ssh siggi@server

# Deploy to production
sudo cp -r /tmp/landing-deploy/* /var/www/kvenno.app/
sudo chown -R www-data:www-data /var/www/kvenno.app/
sudo chmod -R 755 /var/www/kvenno.app/
rm -rf /tmp/landing-deploy/
```

### Deployment Checklist

- [ ] Test all pages locally (python3 -m http.server 8000)
- [ ] Verify all links work
- [ ] Check Icelandic characters display correctly (UTF-8)
- [ ] Test on mobile and desktop sizes (< 768px and > 768px)
- [ ] Verify breadcrumbs are correct on all hub pages
- [ ] Ensure header is consistent across all pages
- [ ] Check favicon displays correctly
- [ ] Copy files to server
- [ ] Set correct permissions (755 for dirs, 644 for files)
- [ ] Test live site at https://kvenno.app/
- [ ] Verify all hub pages load (1-ar, 2-ar, 3-ar, val, f-bekkir)

## Tool Deployment Architecture

Each tool is developed and deployed independently. **See KVENNO-STRUCTURE.md Section 1 for complete mapping.**

```
Repository                    → Deployment                        → Web Path
──────────────────────────────────────────────────────────────────────────────
ChemistryTools-Landing        → /var/www/kvenno.app/              → /
LabReports (build 1)          → /var/www/kvenno.app/2-ar/lab-reports/ → /2-ar/lab-reports/
LabReports (build 2)          → /var/www/kvenno.app/3-ar/lab-reports/ → /3-ar/lab-reports/
icelandic-chemistry-ai-tutor  → /var/www/kvenno.app/1-ar/ai-tutor/ → /1-ar/ai-tutor/
  (build 1)
icelandic-chemistry-ai-tutor  → /var/www/kvenno.app/2-ar/ai-tutor/ → /2-ar/ai-tutor/
  (build 2)
icelandic-chemistry-ai-tutor  → /var/www/kvenno.app/3-ar/ai-tutor/ → /3-ar/ai-tutor/
  (build 3)
ChemistryGames/1-ar           → /var/www/kvenno.app/1-ar/games/   → /1-ar/games/
ChemistryGames/2-ar           → /var/www/kvenno.app/2-ar/games/   → /2-ar/games/
ChemistryGames/3-ar           → /var/www/kvenno.app/3-ar/games/   → /3-ar/games/
```

**IMPORTANT**: Shared apps (Lab Reports, AI Tutor) require separate builds for each deployment path. See KVENNO-STRUCTURE.md Section 1 for details on multi-path builds.

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

### Authentication

**This repository (ChemistryTools-Landing) does not require authentication** - all pages are open access.

Individual tools handle their own authentication:
- **Lab Reports**: Requires Azure AD authentication (see LabReports repo)
- **AI Tutor**: Requires Azure AD authentication (see icelandic-chemistry-ai-tutor repo)
- **Chemistry Games**: Open access (no authentication)

For detailed authentication implementation, see KVENNO-STRUCTURE.md Section 2.

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


## Questions or Issues?

If you encounter unclear requirements or architectural decisions:
1. **Check `KVENNO-STRUCTURE.md` first** - it's the authoritative source for all design and architecture decisions
2. Check `DEPLOYMENT.md` for deployment-specific questions
3. Review existing patterns in similar pages for consistency
4. Prioritize consistency with current implementation
5. Keep the Icelandic language requirement in mind (all UI text must be in Icelandic)
6. Maintain simplicity - static HTML is intentional (no build process)
7. Ask the user for clarification if needed

## Recent Changes

### 2025-11-22: Documentation and Standards Update
- Updated `KVENNO-STRUCTURE.md` Section 8 with ChemistryTools-Landing details
- Created comprehensive `DEPLOYMENT.md` with deployment procedures
- Updated `README.md` to reference KVENNO-STRUCTURE.md and DEPLOYMENT.md
- Updated `CLAUDE.md` to match current architecture and documentation
- Verified repository structure matches standards
- Clarified deployment paths and multi-build requirements for shared apps

### 2024-11-20: Complete Restructure to Static HTML
- **BREAKING:** Removed React-based SPA architecture
- Changed to static HTML pages (no build process)
- Implemented year-based hub structure (1-ar, 2-ar, 3-ar, val, f-bekkir)
- Added consistent header component on all pages
- Added breadcrumb navigation on hub pages
- Implemented design system from `KVENNO-STRUCTURE.md`
- Created `KVENNO-STRUCTURE.md` as master design document
- Removed all React dependencies, build tools, and complex infrastructure

### Previous History (Pre-2024-11-20)
- Project was previously React-based with Vite, React Router, Context API
- Had mock authentication with RBAC
- Included admin dashboard
- Changed architecture to simpler static approach

---

**Last Updated:** 2025-11-22
**Project Version:** 2.1.0 (Documentation update)
**Status:** Production

---

## Quick Reference for AI Assistants

**Working on this repo:**
1. **ALWAYS read `KVENNO-STRUCTURE.md` first** for design system and architecture
2. Check `DEPLOYMENT.md` for deployment procedures
3. Use Icelandic for all UI text (Heim, Til baka, Verkfæri, etc.)
4. Maintain consistency across all HTML files
5. Test locally before deployment (python3 -m http.server 8000)
6. Remember: Simple static HTML is intentional (no build process)
7. This repo deploys to root `/var/www/kvenno.app/`, not a subdirectory

**Adding features:**
- Copy existing patterns from current pages for consistency
- Use `#f36b22` for primary color (Kvennaskólinn brand)
- Include header component on all pages
- Add breadcrumbs on all sub-pages
- Keep responsive design in mind (< 768px mobile, > 768px desktop)
- Update all relevant pages if making global changes (header, styles, etc.)
- Update `KVENNO-STRUCTURE.md` if making architectural changes
- Copy updated `KVENNO-STRUCTURE.md` to all other kvenno.app repos

**File structure:**
- Root: `index.html`, `styles.css`, `media/`
- Hub pages: `[year]/index.html` (1-ar, 2-ar, 3-ar, val, f-bekkir)
- Tools deployed separately from other repos
