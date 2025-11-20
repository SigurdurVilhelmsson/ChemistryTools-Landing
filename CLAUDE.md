# CLAUDE.md - Development Guide for AI Assistants

This document provides context and guidelines for AI development assistants working on the ChemistryTools Landing project.

## Project Overview

This is a React-based landing page and portal for AI-powered chemistry education tools developed for Kvennaskólinn í Reykjavík (a secondary school in Reykjavik, Iceland). The application serves as a centralized entry point that links to separate chemistry learning tool applications, each in their own repository and deployment. Authentication is handled through Microsoft Azure AD and shared via localStorage.

**Primary Language:** Icelandic (all UI text, comments, and documentation should be in Icelandic)

## Repository Structure

This repository contains **only the landing page**. Individual tools are in separate repositories:

### Development (Local)
- **Landing Page:** `/home/user/repo/ChemistryTools-Landing`
- **Lab Reports:** `/home/user/repo/LabReports`
- **AI Tutor:** `/home/user/repo/AITutor` (future)

### Deployment (Production Server)
- **Landing Page:** `/var/www/kvenno.app/landing`
- **Lab Reports:** `/var/www/kvenno.app/lab-reports`
- **AI Tutor:** `/var/www/kvenno.app/ai-tutor` (future)

### Web Paths
- **Landing Page:** `/` or `/landing/`
- **Lab Reports:** `/lab-reports/`
- **AI Tutor:** `/ai-tutor/` (future)

Each tool is built and deployed independently. The landing page navigates to tools via external URLs (e.g., `/lab-reports/`, `/ai-tutor/`).

## Current Status (As of 2025-11-20)

### Implemented Features
- ✅ React 19 landing page with Vite build system
- ✅ Role-Based Access Control (RBAC) system
- ✅ Mock authentication with localStorage (shared across tools)
- ✅ Teacher/Student role differentiation
- ✅ Admin dashboard (teacher-only)
- ✅ Responsive design following school's design system
- ✅ External navigation to separate tool applications

### In Development
- 🚧 Lab Reports tool (separate repository, in development)
- 🚧 AI Tutor (coming January 2026, separate repository)
- 🚧 Admin dashboard features (UI exists, no functionality yet)

### Planned
- 📋 Azure AD B2C integration (to replace mock authentication)
- 📋 Actual tool implementations using Claude API
- 📋 Admin features (manage experiments, view analytics)

## Architecture

### Tech Stack
- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Routing:** React Router v7
- **State Management:** React Context API
- **Styling:** CSS Modules + custom CSS
- **Authentication:** Mock auth (localStorage) with RBAC (will be replaced with Azure AD B2C)
- **AI:** Claude from Anthropic

### Key Design Patterns

1. **Context-Based State Management**
   - `UserRoleProvider` wraps the entire app
   - Provides authentication state and user role to all components
   - Use the `useUserRole()` hook to access auth state

2. **Role-Based Access Control (RBAC)**
   - Two roles: `teacher` and `student`
   - Teacher emails are whitelisted in `src/config/teachers.js`
   - Admin page is protected (teacher-only access)
   - Role checking happens via `UserRoleContext`

3. **Component Structure**
   - Functional components with hooks
   - Page components in `src/pages/`
   - Reusable UI components in `src/components/`
   - Each component has its own CSS file

## File Structure & Key Files

### Critical Files

#### `src/contexts/UserRoleContext.jsx`
**Purpose:** Manages authentication and user roles
**Key exports:**
- `UserRoleProvider` - Context provider component
- `useUserRole()` - Hook to access auth state

**Usage:**
```javascript
const { isTeacher, isAuthenticated, role, login, logout } = useUserRole();
```

#### `src/config/teachers.js`
**Purpose:** Whitelist of teacher email addresses
**Key exports:**
- `TEACHER_EMAILS` - Array of teacher emails
- `isTeacher(email)` - Check if email is a teacher
- `getUserRole(email)` - Get role ('teacher' | 'student')

**Important:** When adding a new teacher, add their @kvenno.is email to this array.

#### `src/App.jsx`
**Purpose:** Main application component with routing
**Key features:**
- Wraps app in `UserRoleProvider`
- Defines all routes
- Includes `Header` and `Footer` on all pages

### Page Components

#### `src/pages/Home.jsx`
- Landing page with hero section
- Displays tool cards with external navigation
- Shows authentication prompt for unauthenticated users
- Defines tool configurations with `externalUrl` property

#### `src/pages/About.jsx`
- About page with project information
- Describes the tools and their purpose

#### `src/pages/Admin.jsx`
- Teacher-only dashboard
- Auto-redirects non-teachers to home page
- Currently shows placeholder content for future features

### Component Files

#### `src/components/Header.jsx`
- Navigation bar
- Login/logout functionality
- Admin link (visible only to teachers)

#### `src/components/ToolCard.jsx`
- Displays a tool with icon, title, description
- Shows status badges (available, coming, planned)
- Handles external navigation via `window.location.href`
- Reads authentication state from localStorage (shared across tools)
- Checks user authentication before allowing navigation

## Design System

### Colors
```css
--primary-color: #f36b22;     /* Main orange */
--primary-dark: #c55113;       /* Darker orange */
--text-dark: #2c2c2c;          /* Main text */
--text-light: #666666;         /* Secondary text */
```

### Typography
- **Font Family:** 'Hind', sans-serif (Google Fonts)
- **Headings:** Bold, dark color
- **Body:** Regular weight, medium gray

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Development Guidelines

### When Adding New Features

1. **Use Icelandic for all user-facing text**
   - UI labels, messages, comments should be in Icelandic
   - Variable names and function names can be in English

2. **Respect the RBAC system**
   - Use `useUserRole()` hook to check permissions
   - Protect teacher-only routes with checks
   - Example:
   ```javascript
   const { isTeacher, isAuthenticated } = useUserRole();
   if (!isTeacher) {
     navigate('/');
   }
   ```

3. **Follow existing patterns**
   - Use functional components with hooks
   - Create separate CSS files for components
   - Use React Router's `useNavigate` for navigation

4. **Authentication flow**
   - Users log in via Header component
   - Email must end with @kvenno.is
   - Role is automatically assigned based on `teachers.js`
   - Auth state is persisted in localStorage

### Common Tasks

#### Adding a new teacher
Edit `src/config/teachers.js`:
```javascript
export const TEACHER_EMAILS = [
  'sigurdurev@kvenno.is',
  'newteacher@kvenno.is',  // Add here
];
```

#### Adding a new tool
1. Create the tool in a **separate repository** (e.g., `/home/user/repo/NewTool`)
2. Build and deploy to `/var/www/kvenno.app/new-tool`
3. Add tool card data in `src/pages/Home.jsx`:
   ```javascript
   {
     id: 'new-tool',
     title: 'Titill verkfæris',
     description: 'Lýsing á verkfærinu',
     icon: '🔬',
     externalUrl: '/new-tool/',  // Points to deployed app (kebab-case)
     status: 'available',  // or 'coming', 'planned'
     releaseDate: 'Janúar 2026'  // Optional, for 'coming' status
   }
   ```
4. The tool app should read authentication state from localStorage
5. Note: Do NOT create internal routes in App.jsx for tools
6. Use kebab-case for URLs (e.g., `/lab-reports/`, not `/LabReports/`)

#### Protecting a route for teachers only
```javascript
import { useUserRole } from '../contexts/UserRoleContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function TeacherOnlyPage() {
  const { isTeacher, isAuthenticated } = useUserRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !isTeacher) {
      navigate('/');
    }
  }, [isAuthenticated, isTeacher, navigate]);

  if (!isTeacher) return null;

  return <div>Teacher content here</div>;
}
```

## Testing & Development

### Running locally
```bash
npm install
npm run dev
# Opens on http://localhost:5173
```

### Building for production
```bash
npm run build
# Output in dist/
```

### Linting
```bash
npm run lint
```

## Deployment

### Deployment Architecture

The project uses a **multi-repository architecture** where each tool is developed, built, and deployed independently:

```
Repository (Development)          Deployment (Production)              Web Path
─────────────────────────────────────────────────────────────────────────────────
ChemistryTools-Landing       →    /var/www/kvenno.app/landing      →   /
LabReports                   →    /var/www/kvenno.app/lab-reports  →   /lab-reports/
AITutor                      →    /var/www/kvenno.app/ai-tutor     →   /ai-tutor/
```

### Git Deployment Workflow (Production Server)

Each repository should be deployed independently using the following steps:

#### Initial Setup (First Time Only)

For each repository on the production server:

```bash
# Create deployment directory
sudo mkdir -p /var/www/kvenno.app/landing
sudo chown $USER:$USER /var/www/kvenno.app/landing

# Clone repository to a deployment source directory
cd /var/www/kvenno.app
git clone <repository-url> landing-src

# Or for other tools:
git clone <lab-reports-repo-url> lab-reports-src
git clone <ai-tutor-repo-url> ai-tutor-src
```

#### Standard Deployment Process

When deploying updates for **ChemistryTools-Landing**:

```bash
# 1. Navigate to source directory
cd /var/www/kvenno.app/landing-src

# 2. Pull latest changes
git fetch origin
git pull origin main  # or the appropriate branch

# 3. Install dependencies (if package.json changed)
npm install

# 4. Build the project
npm run build

# 5. Deploy built files to production directory
rm -rf /var/www/kvenno.app/landing/*
cp -r dist/* /var/www/kvenno.app/landing/

# 6. Set appropriate permissions
sudo chown -R www-data:www-data /var/www/kvenno.app/landing
sudo chmod -R 755 /var/www/kvenno.app/landing
```

#### Deployment Script (Recommended)

Create a deployment script for each tool (e.g., `deploy-landing.sh`):

```bash
#!/bin/bash
set -e  # Exit on error

REPO_DIR="/var/www/kvenno.app/landing-src"
DEPLOY_DIR="/var/www/kvenno.app/landing"
BRANCH="main"

echo "=== Deploying ChemistryTools Landing ==="

# Pull latest changes
cd $REPO_DIR
echo "Pulling latest changes from $BRANCH..."
git fetch origin
git pull origin $BRANCH

# Install dependencies
echo "Installing dependencies..."
npm install

# Build
echo "Building project..."
npm run build

# Deploy
echo "Deploying to $DEPLOY_DIR..."
rm -rf $DEPLOY_DIR/*
cp -r dist/* $DEPLOY_DIR/

# Set permissions
echo "Setting permissions..."
sudo chown -R www-data:www-data $DEPLOY_DIR
sudo chmod -R 755 $DEPLOY_DIR

echo "=== Deployment complete ==="
```

Make it executable:
```bash
chmod +x deploy-landing.sh
```

#### Deploy Other Tools Similarly

For **Lab Reports**:
```bash
cd /var/www/kvenno.app/lab-reports-src
git pull origin main
npm install
npm run build
rm -rf /var/www/kvenno.app/lab-reports/*
cp -r dist/* /var/www/kvenno.app/lab-reports/
```

For **AI Tutor** (when ready):
```bash
cd /var/www/kvenno.app/ai-tutor-src
git pull origin main
npm install
npm run build
rm -rf /var/www/kvenno.app/ai-tutor/*
cp -r dist/* /var/www/kvenno.app/ai-tutor/
```

### Web Server Configuration

Ensure your web server (nginx/Apache) is configured to:
1. Serve the landing page from `/var/www/kvenno.app/landing` at the root path `/`
2. Serve each tool from its respective directory:
   - `/lab-reports/` → `/var/www/kvenno.app/lab-reports`
   - `/ai-tutor/` → `/var/www/kvenno.app/ai-tutor`
3. Configure React Router fallback for SPA routing (all routes should serve `index.html`)

Example nginx configuration:
```nginx
server {
    listen 80;
    server_name kvenno.app;
    root /var/www/kvenno.app/landing;

    # Landing page (root)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Lab Reports tool
    location /lab-reports/ {
        alias /var/www/kvenno.app/lab-reports/;
        try_files $uri $uri/ /lab-reports/index.html;
    }

    # AI Tutor tool
    location /ai-tutor/ {
        alias /var/www/kvenno.app/ai-tutor/;
        try_files $uri $uri/ /ai-tutor/index.html;
    }
}
```

### Important Deployment Notes

1. **Independent Builds**: Each tool is built and deployed independently
2. **Shared Authentication**: All tools share authentication via localStorage
3. **URL Consistency**: Always use kebab-case for URLs (e.g., `/lab-reports/`)
4. **Asset Paths**: Ensure Vite's `base` config matches deployment path (e.g., `base: '/lab-reports/'`)
5. **Testing**: Test each tool independently after deployment
6. **Rollback**: Keep previous build in a backup directory for quick rollback if needed

## Important Context

### Mock Authentication
- **Current:** localStorage-based mock auth
- **Future:** Will be replaced with Azure AD B2C for single sign-on
- **Implication:** When implementing features, keep auth logic modular for easy replacement
- **Note:** Azure AD is only used for authentication, not for AI functionality

### Icelandic Language
- All UI text must be in Icelandic
- This is a requirement for the school
- Use proper Icelandic characters (á, ð, é, í, ó, ú, ý, þ, æ, ö)

### School Context
- **Target users:** Secondary school students and teachers
- **School:** Kvennaskólinn í Reykjavík
- **Email domain:** @kvenno.is
- **Subject:** Chemistry (Efnafræði)

### Claude API Integration
- Tools will use Claude from Anthropic for AI functionality
- Not yet implemented in current codebase
- GDPR compliance is important
- No user data should be stored
- Authentication uses Azure AD B2C (separate from AI service)

## Git Workflow

### Branch Naming
- Feature branches: `claude/feature-name-{session-id}`
- Current branch: `claude/update-docs-01YKmUHEKPzwRkZ98qgWCg3b`

### Commit Messages
- Use clear, descriptive messages
- Can be in English or Icelandic
- Follow conventional commit format when possible

## Future Considerations

### When Implementing Azure AD B2C
- Replace `UserRoleContext` authentication logic
- Keep the role system (teacher/student distinction)
- Update `teachers.js` or migrate to Azure AD groups/roles
- Remove localStorage dependency
- Azure AD is only for authentication, not AI services

### When Adding New Tools
- Follow the pattern in `ToolCard.jsx`
- Add proper status badges
- Include release dates for "coming" features
- Ensure responsive design
- **Important**: Configure Vite base path in the tool's `vite.config.js`:
  ```javascript
  export default defineConfig({
    base: '/lab-reports/',  // Must match the deployment path
    plugins: [react()],
  })
  ```
- Note: Landing page uses `base: '/'` (default) since it's at root

### Performance
- Keep bundle size small
- Lazy load tool pages if they become heavy
- Optimize images (currently using emoji icons)

## Questions or Issues?

If you encounter unclear requirements or architectural decisions:
1. Check existing patterns in similar components
2. Prioritize consistency with current codebase
3. Keep the Icelandic language requirement in mind
4. Respect the RBAC system
5. Ask the user for clarification if needed

## Recent Changes

### 2025-11-20 (Update 2): Updated Deployment Structure
- Changed deployment paths to unified structure under `/var/www/kvenno.app/`
- Updated external URLs to use kebab-case: `/lab-reports/`, `/ai-tutor/`
- Added comprehensive deployment documentation with git workflow
- Documented nginx configuration for multi-app setup
- Added deployment scripts and best practices

### 2025-11-20: Refactored to Landing-Page-Only Architecture
- **BREAKING:** Removed internal tool pages (LabReports.jsx, AITutor.jsx)
- Updated ToolCard to use external navigation via `window.location.href`
- Changed tool configuration to use `externalUrl` instead of `path`
- Removed tool routes from App.jsx (only keeps landing, about, admin)
- Cleaned up unused files (ToolPage.css, AuthContext.jsx)
- Updated documentation to reflect multi-repository architecture
- Tools are now separate repositories deployed independently

### 2025-11-18: RBAC System Added
- Implemented Role-Based Access Control
- Added `UserRoleContext` for auth and role management
- Created `teachers.js` configuration file
- Added Admin page with teacher-only access
- Updated from React 18 to React 19
- Updated from React Router v6 to v7

---

**Last Updated:** 2025-11-20
**Project Version:** 0.0.0 (pre-release)
**Status:** Active Development
