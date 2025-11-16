// Theme Management
(function() {
    'use strict';

    // Get theme preference from localStorage or system preference
    function getThemePreference() {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Set theme
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    // Initialize theme
    const initialTheme = getThemePreference();
    setTheme(initialTheme);

    // Theme toggle button
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();

// Mobile Menu Toggle
(function() {
    'use strict';

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            }
        });
    }
})();

// Smooth Scroll for Navigation Links
(function() {
    'use strict';

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
})();

// Form Handling
(function() {
    'use strict';

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1000);
        });
    }
})();

// Intersection Observer for Animations (Optional Enhancement)
(function() {
    'use strict';

    // Only add animations if user hasn't requested reduced motion
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe service cards and step items
        document.querySelectorAll('.service-card, .step-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
})();

// Keyboard Navigation Enhancement
(function() {
    'use strict';

    // Add keyboard support for theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    // Trap focus in mobile menu when open
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        navMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                mobileMenuToggle.focus();
            }
        });
    }
})();

// Performance: Lazy load images if any are added in the future
(function() {
    'use strict';

    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
})();

// Analytics placeholder (for future integration)
(function() {
    'use strict';

    // Track page views, button clicks, etc.
    // This is a placeholder for actual analytics integration
    window.trackEvent = function(eventName, eventData) {
        // Replace with actual analytics code (Google Analytics, etc.)
        console.log('Event tracked:', eventName, eventData);
    };

    // Track CTA clicks
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', function() {
            window.trackEvent('cta_click', {
                text: this.textContent.trim(),
                href: this.href || this.closest('a')?.href
            });
        });
    });
})();
