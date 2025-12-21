#!/bin/bash

# Smart Parking Document Converter
# This script helps convert the Markdown documentation to various formats

echo "=================================================="
echo "  Smart Parking Document Conversion Tool"
echo "=================================================="
echo ""

# Check if pandoc is installed
if command -v pandoc &> /dev/null; then
    echo "✓ Pandoc is installed"
    echo ""
    echo "Available conversions:"
    echo "  1. Convert to Word (.docx)"
    echo "  2. Convert to PDF"
    echo "  3. Convert to HTML"
    echo "  4. Convert to LaTeX"
    echo ""
    
    read -p "Choose an option (1-4): " option
    
    case $option in
        1)
            echo "Converting to Word format..."
            pandoc SMART_PARKING_PROTOTYPE.md -o Smart_Parking.docx --toc --toc-depth=2
            echo "✓ Conversion complete: Smart_Parking.docx"
            ;;
        2)
            echo "Converting to PDF format..."
            pandoc SMART_PARKING_PROTOTYPE.md -o Smart_Parking.pdf --toc --toc-depth=2
            echo "✓ Conversion complete: Smart_Parking.pdf"
            ;;
        3)
            echo "Converting to HTML format..."
            pandoc SMART_PARKING_PROTOTYPE.md -o Smart_Parking.html --standalone --toc --toc-depth=2
            echo "✓ Conversion complete: Smart_Parking.html"
            ;;
        4)
            echo "Converting to LaTeX format..."
            pandoc SMART_PARKING_PROTOTYPE.md -o Smart_Parking.tex
            echo "✓ Conversion complete: Smart_Parking.tex"
            ;;
        *)
            echo "Invalid option"
            exit 1
            ;;
    esac
else
    echo "✗ Pandoc is not installed"
    echo ""
    echo "To install Pandoc:"
    echo ""
    echo "  Ubuntu/Debian:"
    echo "    sudo apt-get install pandoc"
    echo ""
    echo "  macOS:"
    echo "    brew install pandoc"
    echo ""
    echo "  Windows:"
    echo "    Download from https://pandoc.org/installing.html"
    echo ""
    echo "Alternative: Use online converters"
    echo "  - https://cloudconvert.com/md-to-docx"
    echo "  - https://convertio.co/fr/md-docx/"
    echo "  - https://dillinger.io/"
    exit 1
fi
