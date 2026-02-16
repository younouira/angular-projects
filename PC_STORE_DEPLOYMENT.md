# PC Store Deployment Guide

This document explains how the `pc-store` project is configured to be hosted on the custom domain `youssefnouira.me` using GitHub Pages.

## Overview

The pc-store Angular application is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The application is accessible at:

**Live URL**: https://youssefnouira.me/pc-store/

## Configuration Files

### 1. CNAME File

- **Location**: `pc-store/public/CNAME` (also exists at repository root)
- **Content**: `youssefnouira.me`
- **Purpose**: Tells GitHub Pages to use the custom domain

### 2. Angular Build Configuration

**File**: `pc-store/angular.json`

Key configurations:
- `outputPath: "dist/pc-store"` - Specifies where build artifacts are stored
- `baseHref: "/pc-store/"` - Sets the base URL for the application (required for GitHub Pages subdirectory)
- Assets include all files from `public/` directory (including CNAME and 404.html)

### 3. GitHub Actions Workflow

**File**: `.github/workflows/deploy-pc-store.yml`

The workflow:
1. Triggers on pushes to `main` branch that affect pc-store files
2. Installs Node.js and dependencies
3. Builds the production version of the app
4. Deploys to GitHub Pages using the official GitHub Pages action

### 4. Client-Side Routing Support

**Files**: 
- `pc-store/public/404.html` - Handles 404 errors by storing the path in sessionStorage
- `pc-store/src/index.html` - Reads sessionStorage and restores the correct route

This ensures that direct URLs to Angular routes (e.g., `/pc-store/product/1`) work correctly on GitHub Pages.

## Deployment Process

### Automatic Deployment

1. Push changes to the `main` branch
2. GitHub Actions workflow triggers automatically
3. Application is built and deployed
4. Changes are live at https://youssefnouira.me/pc-store/

### Manual Build

To test the production build locally:

```bash
cd pc-store
npm install
npm run build -- --configuration production
```

The build output will be in `pc-store/dist/pc-store/browser/`.

## Domain Configuration

### GitHub Repository Settings

To enable GitHub Pages with a custom domain:

1. Go to repository Settings → Pages
2. Source: Deploy from a branch (GitHub Actions will handle deployment)
3. Custom domain: `youssefnouira.me` (CNAME file handles this)
4. Enforce HTTPS: ✓ (recommended)

### DNS Configuration

Ensure your DNS provider has these records for `youssefnouira.me`:

**A Records** (point to GitHub Pages IPs):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Or CNAME Record** (for subdomain):
```
youssefnouira.me → younouira.github.io
```

## Troubleshooting

### Application doesn't load routes correctly
- Verify the `baseHref` in `angular.json` is set to `/pc-store/`
- Check that 404.html and the redirect script in index.html are present

### CNAME file is missing after deployment
- Ensure CNAME file exists in `pc-store/public/CNAME`
- Verify the assets configuration in `angular.json` includes the public directory

### GitHub Actions workflow fails
- Check the workflow logs in the Actions tab
- Verify Node.js version compatibility
- Ensure all dependencies are properly defined in package.json

## Technical Stack

- **Framework**: Angular 20.1.0
- **Build System**: Angular CLI with @angular/build
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Domain**: Custom domain via CNAME

## Security

- All dependencies are managed through npm
- No security vulnerabilities detected by CodeQL
- HTTPS enforced on custom domain
