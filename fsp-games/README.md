# FSP Games - Static Website

A static HTML/CSS website featuring a hero section matching the Figma design.

## Project Structure

```
fsp-games/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Main stylesheet
├── images/
│   ├── hero-background.png  # Hero section background image
│   └── logo.svg       # FSP Games logo
├── fonts/             # Custom font files (see Font Setup below)
├── js/                # JavaScript files (for future use)
└── README.md          # This file
```

## Font Setup

This project uses two custom fonts:

### 1. FK Grotesk Neue
- **Type**: Commercial font (geometric sans-serif)
- **Source**: [Florian Karsten Typefaces](https://fonts.floriankarsten.com/fk-grotesk-neue)
- **Usage**: Primary font for navigation, headings, and body text
- **Weights needed**: Regular (400), Medium (500)

**To add the font:**
1. Purchase/download FK Grotesk Neue from the official website
2. Place the font files in the `fonts/` directory:
   - `FKGroteskNeue-Regular.woff2`
   - `FKGroteskNeue-Regular.woff`
   - `FKGroteskNeue-Medium.woff2`
   - `FKGroteskNeue-Medium.woff`
3. The CSS is already configured to use these fonts

**Note**: Until the font files are added, the site will use system font fallbacks (San Francisco, Segoe UI, Roboto).

### 2. EB Garamond
- **Type**: Open-source serif font
- **Source**: [Google Fonts](https://fonts.google.com/specimen/EB+Garamond) (already included via CDN)
- **Usage**: Subtitle text in hero section
- **Status**: ✅ Already configured and working

## Getting Started

1. **Add Font Files** (if you have FK Grotesk Neue):
   - Download FK Grotesk Neue font files
   - Place them in the `fonts/` directory as specified above

2. **Open the Website**:
   - Simply open `index.html` in a web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **View the Site**:
   - Navigate to `http://localhost:8000` (or the port your server uses)

## Design Specifications

- **Viewport**: 1440px × 900px (desktop)
- **Hero Section Height**: 900px
- **Navigation Bar**: Fixed at top, 83px height
- **Typography**:
  - Hero Title: FK Grotesk Neue, 500 weight, 100px, uppercase
  - Hero Subtitle: EB Garamond, 400 weight, 24px
  - Navigation: FK Grotesk Neue, 500 weight, 16px

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design included for mobile devices

## Future Enhancements

- Dropdown menu functionality for navigation items
- Additional pages and sections
- Interactive animations
- JavaScript enhancements







