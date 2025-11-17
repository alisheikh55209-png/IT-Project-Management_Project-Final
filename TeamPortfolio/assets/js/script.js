// ============================================
// Navigation & Mobile Menu
// ============================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// Smooth Scrolling
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Active Navigation Link
// ============================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ============================================
// Enhanced Animate on Scroll with Stagger Effects
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, observerOptions);

// Observe elements for animation with enhanced stagger effects
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .team-card, .stat-item, .section-header, .about-content, .contact-content');

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.95)';
        el.style.transition = `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s`;
        observer.observe(el);
    });

    // Add parallax effect to hero section
    const heroSection = document.querySelector('.home-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
});

// ============================================
// Counter Animation for Stats
// ============================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ============================================
// Skill Bar Animation
// ============================================
const skillBars = document.querySelectorAll('.skill-bar');
const skillBarsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const level = entry.target.getAttribute('data-level');
            entry.target.style.width = `${level}%`;
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillBarsObserver.observe(bar);
});

// ============================================
// Advanced Contact Form Handling with Real-time Validation
// ============================================
const contactForm = document.getElementById('contactForm');
const formInputs = contactForm.querySelectorAll('input, textarea');

// Real-time validation
formInputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', validateField);
});

function validateField(e) {
    const field = e.target;
    const fieldName = field.name;
    const value = field.value.trim();
    const errorElement = field.parentElement.querySelector('.field-error');

    let isValid = true;
    let errorMessage = '';

    switch (fieldName) {
        case 'name':
            if (!value) {
                isValid = false;
                errorMessage = 'Name is required';
            } else if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                isValid = false;
                errorMessage = 'Email is required';
            } else if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
        case 'subject':
            if (!value) {
                isValid = false;
                errorMessage = 'Subject is required';
            } else if (value.length < 5) {
                isValid = false;
                errorMessage = 'Subject must be at least 5 characters';
            }
            break;
        case 'message':
            if (!value) {
                isValid = false;
                errorMessage = 'Message is required';
            } else if (value.length < 10) {
                isValid = false;
                errorMessage = 'Message must be at least 10 characters';
            }
            break;
    }

    if (!isValid) {
        field.classList.add('field-error');
        field.classList.remove('field-success');
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
        }
    } else {
        field.classList.remove('field-error');
        field.classList.add('field-success');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    return isValid;
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    let isFormValid = true;
    formInputs.forEach(input => {
        if (!validateField({ target: input })) {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        showNotification('Please correct the errors in the form', 'error');
        return;
    }

    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Simulate form submission with enhanced feedback
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Add loading animation to button
    submitButton.style.position = 'relative';
    submitButton.innerHTML = `
        <span style="opacity: 0;">Sending...</span>
        <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            border: 2px solid rgba(255,255,255,0.3);
            border-top: 2px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
    `;

    // Simulate API call
    setTimeout(() => {
        showNotification('Thank you! Your message has been sent successfully.', 'success');
        contactForm.reset();

        // Reset field states
        formInputs.forEach(input => {
            input.classList.remove('field-error', 'field-success');
            const errorElement = input.parentElement.querySelector('.field-error');
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        });

        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Add validation styles
const validationStyle = document.createElement('style');
validationStyle.textContent = `
    .field-error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }

    .field-success {
        border-color: #10b981 !important;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) !important;
    }

    .field-error-message {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: none;
    }

    @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
`;
document.head.appendChild(validationStyle);

// Add error message elements to form fields
document.addEventListener('DOMContentLoaded', () => {
    const formFields = contactForm.querySelectorAll('.form-group');
    formFields.forEach(field => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error-message';
        field.appendChild(errorDiv);
    });
});

// ============================================
// Notification System
// ============================================
function showNotification(message, type = 'success') {
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
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
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

// ============================================
// Scroll to Top Button (Optional Enhancement)
// ============================================
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.setAttribute('aria-label', 'Scroll to top');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2563eb, #06b6d4);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.background = 'linear-gradient(135deg, #1d4ed8, #2563eb)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.background = 'linear-gradient(135deg, #2563eb, #06b6d4)';
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// ============================================
// Loading Screen Animation
// ============================================
function createLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-container">
            <div class="loading-logo">
                <span class="logo-text">Team<span>Portfolio</span></span>
            </div>
            <div class="loading-progress">
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
                <div class="progress-text">0%</div>
            </div>
            <div class="loading-particles">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
        </div>
    `;
    document.body.appendChild(loadingScreen);

    // Add loading screen styles
    const style = document.createElement('style');
    style.textContent = `
        #loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        .loading-container {
            text-align: center;
            color: white;
        }

        .loading-logo {
            margin-bottom: 2rem;
        }

        .logo-text {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #fff, #e0e7ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: logoPulse 2s ease-in-out infinite;
        }

        .logo-text span {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .loading-progress {
            margin-bottom: 2rem;
        }

        .progress-bar {
            width: 300px;
            height: 4px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
            overflow: hidden;
            margin-bottom: 1rem;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #fff, #e0e7ff);
            border-radius: 2px;
            width: 0%;
            transition: width 0.3s ease;
        }

        .progress-text {
            font-size: 1.2rem;
            font-weight: 600;
            opacity: 0.8;
        }

        .loading-particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            animation: particleFloat 3s ease-in-out infinite;
        }

        .particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 60%; left: 80%; animation-delay: 1s; }
        .particle:nth-child(3) { top: 40%; left: 60%; animation-delay: 2s; }
        .particle:nth-child(4) { top: 80%; left: 30%; animation-delay: 0.5s; }
        .particle:nth-child(5) { top: 10%; left: 90%; animation-delay: 1.5s; }

        @keyframes logoPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        @keyframes particleFloat {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.6;
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    return loadingScreen;
}

function animateLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressFill = loadingScreen.querySelector('.progress-fill');
    const progressText = loadingScreen.querySelector('.progress-text');

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 25 + 10; // Faster progress increment
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.visibility = 'hidden';
                setTimeout(() => {
                    loadingScreen.remove();
                }, 300); // Faster fade out
            }, 300); // Faster delay before fade
        }

        progressFill.style.width = progress + '%';
        progressText.textContent = Math.floor(progress) + '%';
    }, 50); // Faster interval
}

// Initialize loading screen
const loadingScreen = createLoadingScreen();
animateLoadingScreen();

// ============================================
// Lazy Loading Images (Performance Enhancement)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Dark Mode Toggle
// ============================================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

// Function to toggle theme
function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update toggle button icon
    updateToggleIcon(newTheme);
}

// Function to update toggle icon
function updateToggleIcon(theme) {
    const sunIcon = darkModeToggle.querySelector('.sun-icon');
    const moonIcon = darkModeToggle.querySelector('.moon-icon');

    if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

// Initialize toggle icon
updateToggleIcon(currentTheme);

// Add event listener to toggle button
darkModeToggle.addEventListener('click', toggleTheme);

// ============================================
// Particle Background Effect for Hero Section
// ============================================
function createParticleBackground() {
    const heroSection = document.querySelector('.home-section');
    if (!heroSection) return;

    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-background';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 1;
    `;

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 10}s;
        `;
        particleContainer.appendChild(particle);
    }

    heroSection.style.position = 'relative';
    heroSection.insertBefore(particleContainer, heroSection.firstChild);

    // Add particle animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.1;
            }
            50% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }

        .hero-particle:nth-child(odd) {
            animation-direction: reverse;
        }
    `;
    document.head.appendChild(style);
}

// Initialize particle background
createParticleBackground();

// ============================================
// Smooth Page Transitions
// ============================================
function createPageTransition() {
    // Add transition styles
    const transitionStyle = document.createElement('style');
    transitionStyle.textContent = `
        .page-transition {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            z-index: 10000;
            transform: translateX(-100%);
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .page-transition.active {
            transform: translateX(0);
        }

        .page-transition.fade-out {
            transform: translateX(100%);
        }

        .section-transition {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .section-transition.active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(transitionStyle);

    // Create transition overlay
    const transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'page-transition';
    document.body.appendChild(transitionOverlay);

    // Enhanced smooth scrolling with transitions
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                // Start transition
                transitionOverlay.classList.add('active');

                setTimeout(() => {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // End transition
                    setTimeout(() => {
                        transitionOverlay.classList.add('fade-out');
                        setTimeout(() => {
                            transitionOverlay.classList.remove('active', 'fade-out');
                        }, 600);
                    }, 300);
                }, 300);
            }
        });
    });

    // Add section transition effects
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-transition', 'active');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Initialize page transitions
createPageTransition();

// ============================================
// Console Welcome Message
// ============================================
console.log('%c👋 Welcome to our Portfolio!', 'font-size: 20px; font-weight: bold; color: #B63E96;');
console.log('%cWe are a team of passionate developers and designers.', 'font-size: 14px; color: #666;');

