# Marcelo Rispoli Leal - Digital Portfolio

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

![Site Preview](https://marcelo-rispoli-leal.vercel.app/preview.jpg)

## Overview

Professional portfolio built with React and Tailwind CSS, featuring:

- 🖼️ **Interactive Carousel** showcasing logos of many companies, programming languages, frameworks, applications, databases, enterprise systems, and AWS resources.
- 🖨️ **Optimized Print** functionality for PDF resume generation
- 🌓 **Light/Dark Theme** based on system preferences
- 🌐 **Multilingual Support** (English, Portuguese, Spanish)
- 📱 **Fully Responsive** design

## Key Features

### Technologies and Customers Carousel

- Showcases a diverse collection of technologies (programming languages, databases, AWS resources) and key customers served
- Automatic transitions with manual controls
- Theme-optimized images

### Internationalization System

- Browser language detection
- Persistent language selection
- Translated content in 3 languages

### Technical Implementation

- Modular component architecture
- Custom hooks for state management
- Reusable UI components
- SEO and performance optimization

## Technologies

```json
{
  "dependencies": {
    "react": "^19.1.0",
    "tailwindcss": "^4.1.7",
    "react-icons": "^5.5.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^3.9.0",
    "prettier-plugin-tailwindcss": "^0.6.11"
  }
}
```

## Project Structure

```bash
src/
├── components/    # Reusable React components
├── hooks/         # Custom hooks (theme, language, carousel)
├── locales/       # Multilingual content
├── scripts/       # Theme/language configuration
└── styles.css     # Global styles
```

## Development

```bash
npm install    # Install dependencies
npm run dev    # Start development server
npm run build  # Create production build
```

## Deployment

Live at:  
https://marcelo-rispoli-leal.vercel.app

## Customization

To modify content:

1. Update JSON files in `/src/locales`
2. Add new images to `/public/images`
3. Adjust colors in `tailwind.config.js`

```javascript:src/scripts/theme.js
// Automatic theme system
document.documentElement.classList.toggle('dark', isDarkTheme);
```

```javascript:src/scripts/language.js
// Browser language detection
const userLanguages = navigator.languages || [navigator.language];
```
