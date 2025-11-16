// ===================================
// THEME SWITCHING
// ===================================

// Check for saved theme preference or default to system preference
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
};

// Toggle theme
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
}

// ===================================
// MOBILE MENU
// ===================================

const initMobileMenu = () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
};

// ===================================
// SMOOTH SCROLLING & ACTIVE LINKS
// ===================================

const initSmoothScrolling = () => {
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const updateActiveLink = () => {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call
};

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

const initNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px var(--shadow-heavy)';
        } else {
            navbar.style.boxShadow = '0 2px 10px var(--shadow)';
        }
        
        lastScroll = currentScroll;
    });
};

// ===================================
// FORM VALIDATION & SUBMISSION
// ===================================

const initFormHandling = () => {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(bookingForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.phone || !data.service || !data.date || !data.time) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(data.phone)) {
                showNotification('Please enter a valid phone number.', 'error');
                return;
            }
            
            // Date validation (must be in the future)
            const selectedDate = new Date(data.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                showNotification('Please select a future date.', 'error');
                return;
            }
            
            // If all validations pass
            console.log('Booking submitted:', data);
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            showNotification('Booking request submitted successfully! We will contact you soon.', 'success');
            
            // Reset form
            bookingForm.reset();
        });
    }
};

// ===================================
// NOTIFICATION SYSTEM
// ===================================

const showNotification = (message, type = 'info') => {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 90%;
        word-wrap: break-word;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
};

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards and review cards
    const animatedElements = document.querySelectorAll('.service-card, .review-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
};

// ===================================
// LAZY LOADING IMAGES
// ===================================

const initLazyLoading = () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
};

// ===================================
// SET MIN DATE FOR BOOKING
// ===================================

const initDatePicker = () => {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        // Set min date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDate = tomorrow.toISOString().split('T')[0];
        dateInput.setAttribute('min', minDate);
    }
};

// ===================================
// SEARCH FUNCTIONALITY
// ===================================

const initSearch = () => {
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const searchTerm = prompt('What are you looking for?');
            if (searchTerm) {
                // Simple search implementation
                const searchLower = searchTerm.toLowerCase();
                const sections = document.querySelectorAll('section');
                
                let found = false;
                sections.forEach(section => {
                    const text = section.textContent.toLowerCase();
                    if (text.includes(searchLower)) {
                        section.scrollIntoView({ behavior: 'smooth' });
                        found = true;
                        return;
                    }
                });
                
                if (!found) {
                    showNotification('No results found for "' + searchTerm + '"', 'info');
                }
            }
        });
    }
};

// ===================================
// ANALYTICS & TRACKING (Placeholder)
// ===================================

const initAnalytics = () => {
    // Track page views
    console.log('Page view tracked');
    
    // Track button clicks
    const buttons = document.querySelectorAll('button, .cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim();
            console.log('Button clicked:', buttonText);
            // In production, send to analytics service
        });
    });
};

// ===================================
// PERFORMANCE MONITORING
// ===================================

const initPerformanceMonitoring = () => {
    // Monitor page load performance
    window.addEventListener('load', () => {
        if (performance.timing) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('Page load time:', loadTime, 'ms');
        }
        
        // Log Core Web Vitals if available
        if ('web-vitals' in window) {
            // This would require the web-vitals library
            console.log('Core Web Vitals tracking enabled');
        }
    });
};

// ===================================
// INITIALIZE ALL FEATURES
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Add event listener to theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Initialize other features
    initMobileMenu();
    initSmoothScrolling();
    initNavbarScroll();
    initFormHandling();
    initScrollAnimations();
    initLazyLoading();
    initDatePicker();
    initSearch();
    initAnalytics();
    initPerformanceMonitoring();
    
    console.log('Glamorous Beauty Salon website initialized successfully! ✨');
});

// ===================================
// SERVICE WORKER REGISTRATION (PWA)
// ===================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is ready
        // navigator.serviceWorker.register('/service-worker.js')
        //     .then(registration => console.log('Service Worker registered:', registration))
        //     .catch(error => console.log('Service Worker registration failed:', error));
    });
}

// ===================================
// EXPORT FOR TESTING
// ===================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initTheme,
        toggleTheme,
        showNotification
    };
}
