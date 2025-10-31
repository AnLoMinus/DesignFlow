// DesignFlow (DF) - Scripts.js

/**
 * Smooth scroll for anchor links
 */
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for internal links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#' || href === '#!') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
            }
        });
    });
    
    // Add scroll event for header shadow
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.value-card, .workflow-step, .resource-category');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Console message
    console.log('%c DesignFlow (DF) 🚀 ', 'background: #0066cc; color: white; padding: 10px; border-radius: 5px; font-size: 16px;');
    console.log('%c תהליך לפני פיקסל • Process Before Pixel ', 'font-size: 12px; color: #666;');
    console.log('https://github.com/AnLoMinus/DesignFlow');
});

/**
 * Escape key to close modals/overlays
 */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Handle escape key if needed in future
        console.log('Escape pressed');
    }
});

/**
 * Check for reduced motion preference
 */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-base', '0s');
}

