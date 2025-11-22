# Deployment Guide - ChemistryTools-Landing

This document provides detailed instructions for deploying the ChemistryTools-Landing repository to the kvenno.app production server.

## Overview

**Repository**: ChemistryTools-Landing
**Deployment Target**: `/var/www/kvenno.app/` (root level)
**Technology**: Static HTML/CSS (no build process required)
**Access**: Open access (no authentication required)
**Standards Conformance**: ✅ Fully conformant with KVENNO-STRUCTURE.md
**Production Status**: ✅ Deployed and active on kvenno.app

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All HTML files have been tested locally
- [ ] All internal links work correctly
- [ ] Breadcrumbs are accurate on all hub pages
- [ ] Header component is consistent across all pages
- [ ] Responsive design works on mobile and desktop
- [ ] Icelandic text displays correctly (special characters: á, ð, é, í, ó, ú, ý, þ, æ, ö)
- [ ] All tool links point to correct paths
- [ ] Favicon and media files are present
- [ ] Design follows KVENNO-STRUCTURE.md standards (primary color #f36b22)

### KVENNO-STRUCTURE.md Conformance Verification

**Current Status**: ✅ This repository is fully conformant with all KVENNO-STRUCTURE.md standards

Verify conformance before deployment:

- [ ] **Section 4 - Design System**: All colors, typography, button/tile styling match
  - Primary color: `#f36b22`
  - Border radius: 8px for buttons, 12px for cards
  - Max width: 1200px
  - Responsive breakpoint: 768px

- [ ] **Section 3 - Header Component**: Present on all pages with correct structure
  - Site logo: "Efnafræðivefur Kvennó" linking to `/`
  - Right buttons: "Kennarar" and "Upplýsingar"
  - Sticky positioning with bottom border

- [ ] **Section 4 - Navigation & Breadcrumbs**: Correct on all sub-pages
  - Format: `Heim > [Section]`
  - "Heim" links to `/`

- [ ] **Section 11 - Icelandic Language**: All UI text in Icelandic
  - "Heim" not "Home"
  - "Til baka" not "Back"
  - "Kennari" not "Teacher/Admin"

## Local Testing

### Using Python HTTP Server

```bash
cd /home/user/ChemistryTools-Landing
python3 -m http.server 8000
# Open browser to http://localhost:8000
```

### Using Node.js

```bash
cd /home/user/ChemistryTools-Landing
npx serve .
# Open browser to http://localhost:3000
```

### Test Checklist

- [ ] Landing page loads correctly
- [ ] All year hub links work (1-ar, 2-ar, 3-ar, val, f-bekkir)
- [ ] Navigation tiles respond to hover
- [ ] Mobile responsive layout works (< 768px width)
- [ ] Header "Kennari" and "Upplýsingar" buttons are present
- [ ] All hub pages show correct breadcrumbs

## Deployment Methods

### Method 1: Direct SCP from Local Machine (Recommended)

```bash
# On local machine (WSL or Linux)
cd /home/user/ChemistryTools-Landing

# Copy all files to temporary directory on server
scp -r * siggi@server:/tmp/landing-deploy/

# SSH to server
ssh siggi@server

# On server: Copy to production
sudo cp -r /tmp/landing-deploy/* /var/www/kvenno.app/
sudo chown -R www-data:www-data /var/www/kvenno.app/
sudo chmod -R 755 /var/www/kvenno.app/

# Clean up temporary files
rm -rf /tmp/landing-deploy/
```

### Method 2: Git Pull on Server

If the server has git access:

```bash
# SSH to server
ssh siggi@server

# Navigate to web directory
cd /var/www/kvenno.app

# Pull latest changes
sudo git pull origin main

# Set permissions
sudo chown -R www-data:www-data /var/www/kvenno.app/
sudo chmod -R 755 /var/www/kvenno.app/
```

### Method 3: Rsync for Incremental Updates

```bash
# From local machine
rsync -avz --delete \
  --exclude '.git' \
  --exclude '.gitignore' \
  /home/user/ChemistryTools-Landing/ \
  siggi@server:/tmp/landing-deploy/

# SSH to server and copy
ssh siggi@server "sudo cp -r /tmp/landing-deploy/* /var/www/kvenno.app/ && \
                  sudo chown -R www-data:www-data /var/www/kvenno.app/ && \
                  sudo chmod -R 755 /var/www/kvenno.app/ && \
                  rm -rf /tmp/landing-deploy/"
```

## File Structure After Deployment

After deployment, the server directory should look like this:

```
/var/www/kvenno.app/
├── index.html                      # Landing page (from this repo)
├── styles.css                      # Landing styles (from this repo)
├── media/                          # Brand assets (from this repo)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   └── ...
├── 1-ar/
│   ├── index.html                  # Hub page (from this repo)
│   ├── games/                      # ChemistryGames repo
│   └── ai-tutor/                   # AI Tutor repo
├── 2-ar/
│   ├── index.html                  # Hub page (from this repo)
│   ├── games/                      # ChemistryGames repo
│   ├── lab-reports/                # LabReports repo
│   └── ai-tutor/                   # AI Tutor repo
├── 3-ar/
│   ├── index.html                  # Hub page (from this repo)
│   ├── games/                      # ChemistryGames repo
│   ├── lab-reports/                # LabReports repo
│   └── ai-tutor/                   # AI Tutor repo
├── val/
│   └── index.html                  # Hub page (from this repo)
└── f-bekkir/
    └── index.html                  # Hub page (from this repo)
```

**Important**: This repository only deploys the root `index.html`, `styles.css`, `media/`, and hub page `index.html` files. The individual tools (games, lab-reports, ai-tutor) are deployed from their own repositories.

## Post-Deployment Verification

After deployment, verify the following:

### 1. Test Landing Page

```bash
curl -I https://kvenno.app/
# Should return 200 OK
```

### 2. Test Hub Pages

```bash
curl -I https://kvenno.app/1-ar/
curl -I https://kvenno.app/2-ar/
curl -I https://kvenno.app/3-ar/
curl -I https://kvenno.app/val/
curl -I https://kvenno.app/f-bekkir/
# All should return 200 OK
```

### 3. Manual Browser Testing

Visit in a browser:
- [ ] https://kvenno.app/ - Landing page loads
- [ ] https://kvenno.app/1-ar/ - 1st year hub loads
- [ ] https://kvenno.app/2-ar/ - 2nd year hub loads
- [ ] https://kvenno.app/3-ar/ - 3rd year hub loads
- [ ] https://kvenno.app/val/ - Electives hub loads
- [ ] https://kvenno.app/f-bekkir/ - Social sciences hub loads
- [ ] Favicon appears in browser tab
- [ ] Header is consistent on all pages
- [ ] All navigation links work
- [ ] Mobile responsive design works

### 4. Check File Permissions

```bash
ssh siggi@server
ls -la /var/www/kvenno.app/

# Files should be:
# - Owned by www-data:www-data
# - Permissions: 755 for directories, 644 for files
```

## Rollback Procedure

If issues are discovered after deployment:

```bash
# SSH to server
ssh siggi@server

# If using git
cd /var/www/kvenno.app
sudo git log --oneline  # Find the previous working commit
sudo git checkout <previous-commit-hash>
sudo chown -R www-data:www-data /var/www/kvenno.app/

# Or restore from backup
sudo cp -r /var/backups/kvenno.app/YYYY-MM-DD/* /var/www/kvenno.app/
sudo chown -R www-data:www-data /var/www/kvenno.app/
```

## Common Issues and Solutions

### Issue: 404 Not Found for hub pages

**Cause**: nginx configuration may need to handle trailing slashes or directory index files.

**Solution**: Ensure nginx is configured to serve `index.html` for directory requests:

```nginx
location / {
    root /var/www/kvenno.app;
    index index.html;
    try_files $uri $uri/ $uri/index.html =404;
}
```

### Issue: Icelandic characters display as �

**Cause**: Missing UTF-8 charset declaration.

**Solution**: Ensure all HTML files have:

```html
<meta charset="UTF-8">
```

And nginx sends correct headers:

```nginx
charset utf-8;
```

### Issue: Broken links to tools

**Cause**: Tool repositories haven't been deployed yet, or deployed to wrong paths.

**Solution**:
1. Check that tool directories exist: `/var/www/kvenno.app/1-ar/games/`, etc.
2. Deploy tool repositories (see their respective DEPLOYMENT.md files)
3. Verify tool links in hub pages match actual deployment paths

### Issue: Permissions denied

**Cause**: Files not owned by www-data or wrong permissions.

**Solution**:

```bash
sudo chown -R www-data:www-data /var/www/kvenno.app/
sudo chmod -R 755 /var/www/kvenno.app/
sudo find /var/www/kvenno.app/ -type f -exec chmod 644 {} \;
```

## Deployment Frequency

- **Critical fixes**: Deploy immediately after testing
- **Content updates**: As needed when new tools are added or descriptions change
- **Design updates**: After coordination with all tool repositories to ensure consistency
- **Regular maintenance**: Review and update quarterly

## Related Documentation

### Primary References

- **KVENNO-STRUCTURE.md** ⭐ **MOST IMPORTANT**: Master document defining complete site structure, design system, navigation patterns, authentication, and deployment architecture for all kvenno.app repositories. **Always read this first** when working on kvenno.app projects.

### Supporting Documentation

- **CLAUDE.md**: Development guidelines and context for AI assistants working on this repository
- **README.md**: Project overview, quick start guide, and repository-specific information

### Documentation Hierarchy

1. **KVENNO-STRUCTURE.md** - Authoritative source for all design and architecture decisions
2. **DEPLOYMENT.md** (this file) - Deployment-specific procedures and checklists
3. **CLAUDE.md** - Development workflow and AI assistant context
4. **README.md** - User-facing documentation and overview

## Emergency Contacts

- **Web Administrator**: siggi@kvenno.is
- **Chemistry Department**: efnafraeði@kvenno.is
- **IT Support**: Kvennaskólinn í Reykjavík IT department

## Deployment Automation (Future)

Consider implementing:

- GitHub Actions for automated deployment on push to main
- Pre-deployment validation scripts
- Automated backup before deployment
- Slack/email notifications on deployment completion
- Health check pings after deployment

---

**Last Updated**: 2025-11-22
**Document Version**: 1.0
**Maintained By**: Sigurður Einarsson, Chemistry Department
