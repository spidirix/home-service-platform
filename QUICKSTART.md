# Quick Start Guide

## 🚀 Get Your Website Running in 2 Minutes

### Step 1: Download the Files

All website files are in the `/workspace` directory:

```
✅ index.html       - Main website page
✅ styles.css       - All styling
✅ script.js        - Interactive features
✅ sitemap.xml      - For SEO
✅ robots.txt       - For search engines
✅ manifest.json    - PWA support
✅ .htaccess        - Server configuration
✅ 404.html         - Error page
```

### Step 2: Open in Browser

**Option A: Double-click**
- Simply double-click `index.html`
- Opens in your default browser
- Works immediately!

**Option B: Local Server (Recommended)**
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Step 3: Customize Your Content

#### 📞 Update Contact Info

1. **Phone Number**: Search for `(571) 224-2908` in `index.html` and replace
2. **Email**: Search for `info@glamorousbeauty.com` and replace
3. **Address**: Update in the Contact section
4. **Business Hours**: Edit in the Contact section

#### 🖼️ Add Your Images

Replace these image URLs in `index.html`:

```html
<!-- Hero Image (Line ~88) -->
<img src="YOUR_HERO_IMAGE.jpg" alt="...">

<!-- Service Images (Lines ~126, 135, 144) -->
<img src="YOUR_SERVICE_IMAGE_1.jpg" alt="...">
<img src="YOUR_SERVICE_IMAGE_2.jpg" alt="...">
<img src="YOUR_SERVICE_IMAGE_3.jpg" alt="...">

<!-- About Image (Line ~213) -->
<img src="YOUR_ABOUT_IMAGE.jpg" alt="...">
```

#### 💰 Update Services & Prices

Find the services section in `index.html` and edit:

```html
<h3 class="service-title">
    Your Service Name<br>
    <span class="service-price">$XXX</span>
</h3>
```

#### 🎨 Change Colors

Edit `styles.css` (around line 20):

```css
:root {
    --accent-gold: #d4a574;  /* Your brand color */
}
```

### Step 4: Test Features

1. **Theme Switching** ☀️🌙
   - Click the sun/moon icon in the top navigation
   - Should toggle between light and dark modes

2. **Mobile Menu** 📱
   - Resize browser to mobile size
   - Click hamburger menu icon
   - Navigation should slide in

3. **Booking Form** 📝
   - Scroll to "Book Your Appointment"
   - Fill out and submit the form
   - Should see success notification

4. **Smooth Scrolling** ⬇️
   - Click navigation links
   - Should smoothly scroll to sections

### Step 5: Deploy Online

#### GitHub Pages (FREE)

```bash
# 1. Create repository
git init
git add .
git commit -m "Initial commit"

# 2. Push to GitHub
git remote add origin YOUR_REPO_URL
git push -u origin main

# 3. Enable GitHub Pages in repo settings
```

#### Netlify (FREE)

1. Drag and drop your folder to netlify.com
2. Or connect your Git repository
3. Your site is live in 30 seconds!

#### Traditional Hosting

1. Use FTP client (FileZilla)
2. Upload all files to `public_html` or `www` folder
3. Done!

## 🎯 Essential Customizations

### Priority 1 (Before Going Live)
- [ ] Replace phone number
- [ ] Replace email address
- [ ] Update business address
- [ ] Add real photos (replace Unsplash URLs)
- [ ] Update business hours
- [ ] Update Google Maps location

### Priority 2 (Within First Week)
- [ ] Set up form backend
- [ ] Add Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Set up SSL certificate (HTTPS)
- [ ] Create social media accounts
- [ ] Generate PWA icons

### Priority 3 (Optional Enhancements)
- [ ] Add more customer reviews
- [ ] Create blog section
- [ ] Add image gallery
- [ ] Set up email marketing
- [ ] Integrate online booking system
- [ ] Add live chat

## 🔧 Common Issues & Solutions

### Issue 1: Theme Toggle Not Working
**Solution**: Check browser console for errors. Ensure `script.js` is loaded correctly.

### Issue 2: Forms Not Submitting
**Solution**: Forms currently log to console. You need to set up a backend or use a service like Formspree.

### Issue 3: Images Not Loading
**Solution**: Check image paths. Use relative paths (`./images/photo.jpg`) or absolute URLs.

### Issue 4: Mobile Menu Not Opening
**Solution**: Ensure JavaScript is enabled and `script.js` is loaded.

### Issue 5: .htaccess Not Working
**Solution**: .htaccess only works on Apache servers. For Nginx, use equivalent configuration.

## 📞 Need Help?

### Resources
- 📖 Full documentation: See `README.md`
- ✅ Testing report: See `TESTING.md`
- 🌐 Browser DevTools: Press F12 to debug

### Form Backend Options

**Option 1: Formspree (Easy)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS (JavaScript)**
```javascript
emailjs.send("service_id", "template_id", formData);
```

**Option 3: Custom Backend**
- PHP: Use mail() function
- Node.js: Use Nodemailer
- Python: Use Flask-Mail

## 🎉 You're All Set!

Your website is:
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ Theme-switchable
- ✅ Professional looking
- ✅ Ready to customize

**Next Steps:**
1. Add your content
2. Test on mobile devices
3. Deploy to a domain
4. Promote your site

**Good luck with your business! 💇‍♀️✨**

---

💡 **Pro Tip**: Save a backup before making major changes!

📧 Questions? The code is well-commented for easy customization.
