#!/bin/bash
set -e

echo "Building PC Store for GitHub Pages deployment..."

# Navigate to the pc-store directory
cd pc-store

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the application
echo "Building the application..."
npm run build

# Navigate back to root
cd ..

# Move files from docs/browser to docs if browser folder exists
if [ -d "docs/browser" ]; then
    echo "Moving files from browser subfolder..."
    mv docs/browser/* docs/
    rmdir docs/browser
fi

# Copy CNAME file
echo "Copying CNAME file..."
cp CNAME docs/

# Create .nojekyll file to disable Jekyll processing
echo "Creating .nojekyll file..."
touch docs/.nojekyll

echo "Build complete! Files are ready in the docs/ folder."
echo "GitHub Pages should now serve the site from the docs folder."
