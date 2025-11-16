# Home Service Platform Website

A modern, responsive, and SEO-optimized website for a home service platform with automatic light/dark mode support.

## Features

### 🎨 Design & UX
- **Modern, Clean Design**: Professional and user-friendly interface
- **Responsive Layout**: Fully responsive design that works on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Subtle animations and transitions for better user experience
- **Accessible**: WCAG compliant with proper ARIA labels, keyboard navigation, and focus management

### 🌓 Theme Support
- **Automatic Theme Detection**: Detects system preference (light/dark mode)
- **Manual Toggle**: Users can manually switch between light and dark themes
- **Persistent Preference**: Theme choice is saved in localStorage
- **Smooth Transitions**: Seamless theme switching with CSS transitions

### 🔍 SEO Optimization
- **Meta Tags**: Comprehensive meta tags for search engines
- **Open Graph Tags**: Social media sharing optimization
- **Structured Data**: JSON-LD schema markup for better search engine understanding
- **Semantic HTML**: Proper use of semantic HTML5 elements
- **Accessible URLs**: Clean, descriptive anchor links

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for mobile devices
- **Breakpoints**: 
  - Mobile: < 480px
  - Tablet: 481px - 768px
  - Desktop: > 768px
- **Touch-Friendly**: Large tap targets and mobile menu

### ♿ Accessibility Features
- **ARIA Labels**: Proper ARIA attributes for screen readers
- **Keyboard Navigation**: Full keyboard support throughout the site
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user's motion preferences
- **Semantic HTML**: Proper heading hierarchy and landmark regions

## File Structure

```
/
├── index.html      # Main HTML file
├── styles.css      # All styles including theme variables
├── script.js       # JavaScript for interactivity and theme switching
└── README.md       # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in a web browser
2. **Local Development**: For best results, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. **Access**: Navigate to `http://localhost:8000` in your browser

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --accent-primary: #4f46e5;
    --bg-primary: #ffffff;
    /* ... */
}
```

### Content
Edit the HTML content in `index.html` to match your needs.

### Theme Behavior
Modify theme detection and switching logic in `script.js`.

## Performance

- **Optimized CSS**: Minimal, efficient stylesheets
- **Vanilla JavaScript**: No external dependencies
- **Lazy Loading**: Ready for image lazy loading implementation
- **Fast Load Times**: Optimized for quick page loads

## SEO Checklist

✅ Semantic HTML5 elements
✅ Meta description and keywords
✅ Open Graph tags
✅ Twitter Card tags
✅ Structured data (JSON-LD)
✅ Proper heading hierarchy
✅ Alt text ready for images
✅ Clean URL structure
✅ Mobile-friendly design
✅ Fast loading times

## Future Enhancements

- Add actual images and optimize them
- Implement backend form handling
- Add Google Analytics integration
- Add more interactive features
- Implement service provider profiles
- Add booking calendar functionality

## License

This project is open source and available for use.
