# Angular Projects

This repository contains multiple Angular projects.

## Projects

### PC Store
An e-commerce Angular application showcasing computer products with a modern, responsive interface.

**Live Site**: [youssefnouira.me](https://youssefnouira.me)

### Other Projects
- angular-calculator
- qr-menu-builder

## Deployment

The PC Store project is deployed to GitHub Pages and accessible at the custom domain youssefnouira.me.

### How to Deploy

1. Make changes to the pc-store project
2. Run the build script from the repository root:
   ```bash
   ./build-for-gh-pages.sh
   ```
3. Commit and push changes:
   ```bash
   git add docs/
   git commit -m "Update deployment"
   git push
   ```

### GitHub Pages Configuration

Make sure GitHub Pages is configured in repository settings:
- Source: Deploy from a branch
- Branch: Your working branch (e.g., `main` or `copilot/host-pc-store-on-youssefnouira`)
- Folder: `/docs`
- Custom domain: `youssefnouira.me`

The repository includes:
- `CNAME` file at root (for GitHub)
- `CNAME` file in docs folder (for deployment)
- `.nojekyll` file to disable Jekyll processing

## Development

Each project has its own README with specific development instructions.

## Credits

**Developer**: Youssef NOUIRA  
**Framework**: Angular 20.1.0
