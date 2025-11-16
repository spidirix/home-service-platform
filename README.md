# Glamorous Beauty Salon Website

A modern, responsive, and SEO-optimized website for a professional beauty salon. Built with HTML5, CSS3, and vanilla JavaScript with automatic theme switching and mobile-first design.

![Website Preview](https://images.unsplash.com/photo-1560869713-bf165a4e6fcb?w=800&q=80)

## 🌟 Features

### Core Features
- **Fully Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- **Automatic Theme Switching** - Light/Dark mode with system preference detection
- **SEO Optimized** - Meta tags, structured data, sitemap, and semantic HTML
- **Fast Loading** - Optimized images, lazy loading, and browser caching
- **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- **Modern UI/UX** - Clean, elegant design with smooth animations

### Sections
1. **Hero Section** - Eye-catching banner with call-to-action
2. **Services** - Showcase of beauty services (Highlights, Balayage, Extensions)
3. **Customer Reviews** - Social proof with 5-star ratings
4. **About Us** - Information about the salon and expertise
5. **Booking Form** - Easy appointment scheduling with validation
6. **Contact** - Multiple contact methods with embedded map
7. **Footer** - Quick links and social media connections

## 🚀 Getting Started

### Quick Start

1. **Download the files** or clone the repository
2. **Open `index.html`** in any modern web browser
3. That's it! No build process or dependencies required.

### File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All CSS styles (with light/dark themes)
├── script.js           # JavaScript functionality
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search engine crawling instructions
├── manifest.json       # PWA manifest
├── .htaccess          # Apache server configuration
└── README.md          # This file
```

## 🎨 Customization

### Update Contact Information

Edit the following in `index.html`:

1. **Phone Number**: Search for `(571) 224-2908` and replace
2. **Email**: Search for `info@glamorousbeauty.com` and replace
3. **Address**: Update the address in the Contact section
4. **Business Hours**: Modify in the Contact section

### Change Colors

Edit these CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8f8f8;
    --text-primary: #1a1a1a;
    --accent-gold: #d4a574;
    /* ... more variables */
}
```

### Add Your Own Images

Replace the Unsplash image URLs in `index.html` with your own:

1. Hero image
2. Service images (3)
3. About section image

### Modify Services & Pricing

Update the services section in `index.html`:

```html
<article class="service-card">
    <div class="service-image">
        <img src="YOUR_IMAGE_URL" alt="Service description">
    </div>
    <div class="service-info">
        <h3 class="service-title">Service Name<br>
        <span class="service-price">$Price</span></h3>
        <button class="service-btn">SHOP NOW</button>
    </div>
</article>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔍 SEO Features

### Implemented SEO Best Practices

1. **Meta Tags**
   - Title, description, keywords
   - Open Graph for social media
   - Twitter Cards
   - Canonical URLs

2. **Structured Data** (JSON-LD)
   - BeautySalon schema
   - Business information
   - Ratings and reviews
   - Opening hours

3. **Technical SEO**
   - Semantic HTML5 elements
   - Proper heading hierarchy (H1, H2, H3)
   - Alt text for all images
   - XML sitemap
   - Robots.txt
   - Mobile-friendly design
   - Fast page load speed

4. **Performance Optimization**
   - Lazy loading images
   - Browser caching (.htaccess)
   - Compressed assets
   - Minimal dependencies

### Update SEO Content

1. **Title Tag**: Edit in `<title>` tag
2. **Meta Description**: Update the content attribute in meta description tag
3. **Keywords**: Modify meta keywords tag
4. **Structured Data**: Update JSON-LD script with actual business info
5. **Sitemap**: Edit `sitemap.xml` with your domain

## 🌓 Theme Switching

The website features automatic light/dark mode that:

1. **Detects System Preference** - Automatically matches user's OS theme
2. **Manual Toggle** - Sun/Moon icon in navigation
3. **Remembers Choice** - Uses localStorage to save preference
4. **Smooth Transitions** - Seamless color changes

### How It Works

```javascript
// Automatically detects and applies theme
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Uses system preference
    }
};
```

## 📋 Form Handling

The booking form includes:

- **Client-side Validation**
  - Required field checks
  - Email format validation
  - Phone number validation
  - Future date validation
  
- **User Feedback**
  - Success/error notifications
  - Visual validation states

### Connecting to Backend

To connect the form to your backend, modify the submit handler in `script.js`:

```javascript
// Replace console.log with actual API call
fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
    showNotification('Booking confirmed!', 'success');
})
.catch(error => {
    showNotification('Error submitting booking', 'error');
});
```

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Server Configuration

### Apache

Use the included `.htaccess` file for:
- HTTPS redirect
- Browser caching
- Compression
- Security headers

### Nginx

Create a similar configuration:

```nginx
# Force HTTPS
if ($scheme != "https") {
    return 301 https://$host$request_uri;
}

# Browser Caching
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Compression
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
```

## 📈 Performance Tips

1. **Optimize Images**
   - Use WebP format where possible
   - Compress images (use tools like TinyPNG)
   - Serve responsive images

2. **Enable Caching**
   - Use the provided `.htaccess` file
   - Set appropriate cache headers

3. **Minify Assets**
   - Minify CSS and JavaScript for production
   - Use tools like UglifyJS or CSSNano

4. **Use a CDN**
   - Serve static assets from a CDN
   - Reduces latency and improves load times

## 🛡️ Security

Implemented security features:

- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Input sanitization in forms

## 📞 Support & Contact

For questions or issues:

- **Email**: info@glamorousbeauty.com
- **Phone**: (571) 224-2908

## 📝 License

This project is licensed for use by Glamorous Beauty Salon.

## 🙏 Credits

- **Fonts**: Google Fonts (Poppins, Playfair Display)
- **Images**: Unsplash (for demo purposes - replace with your own)
- **Icons**: Feather Icons (inline SVG)

## 🔄 Updates & Maintenance

### Regular Updates

1. Update business hours for holidays
2. Add new services and pricing
3. Update customer reviews
4. Refresh images seasonally
5. Check and fix broken links

### Testing Checklist

- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Validate HTML (W3C Validator)
- [ ] Test all forms
- [ ] Check all links
- [ ] Test theme switching
- [ ] Verify SEO meta tags
- [ ] Test page load speed

## 🚀 Deployment

### GitHub Pages

1. Push code to GitHub
2. Go to Settings > Pages
3. Select branch to deploy
4. Your site will be live!

### Netlify

1. Connect your Git repository
2. Deploy automatically on push
3. Custom domain support

### Traditional Hosting

1. Upload files via FTP
2. Ensure .htaccess is uploaded
3. Point domain to hosting

---

**Built with ❤️ for Glamorous Beauty Salon**

*Making everyone feel Beautiful, Glamorous, and Confident!*
