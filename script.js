// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 200);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// EmailJS Configuration - Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init("vXJovGVPDj4cSibQZ"); // Your Public Key
        console.log('EmailJS initialized successfully');
    } else {
        console.error('EmailJS SDK not loaded');
    }
    
    // Contact form handling with EmailJS
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = document.getElementById('submitBtn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
            submitBtn.disabled = true;
            
            // Check if EmailJS is loaded
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS is not loaded');
                showNotification('Email service not loaded. Please refresh the page and try again.', 'error');
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
                return;
            }
            
            // Send email using EmailJS
            emailjs.sendForm('service_j6vm1wj', 'template_zidng4h', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success modal
                    showSuccessModal();
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button state
                    btnText.style.display = 'inline';
                    btnLoading.style.display = 'none';
                    submitBtn.disabled = false;
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error notification
                    showNotification('Sorry, there was an error sending your message. Please try emailing me directly at sandeep897@outlook.com', 'error');
                    
                    // Reset button state
                    btnText.style.display = 'inline';
                    btnLoading.style.display = 'none';
                    submitBtn.disabled = false;
                });
        });
    }
});

// Success Modal Functions
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
        // Add blur to background
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
        // Remove blur from background
        document.body.style.overflow = 'auto';
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Timeline toggle functionality
function toggleTimeline(nodeId) {
    const description = document.getElementById(`description-${nodeId}`);
    const toggle = event.target.closest('.timeline__event__toggle');
    const icon = toggle.querySelector('i');
    
    // Close all other descriptions
    document.querySelectorAll('.timeline__event__description').forEach(desc => {
        if (desc.id !== `description-${nodeId}`) {
            desc.classList.remove('active');
        }
    });
    
    // Remove active class from all other toggle buttons
    document.querySelectorAll('.timeline__event__toggle').forEach(btn => {
        if (btn !== toggle) {
            btn.classList.remove('active');
        }
    });
    
    // Toggle current description
    if (description.classList.contains('active')) {
        description.classList.remove('active');
        toggle.classList.remove('active');
    } else {
        description.classList.add('active');
        toggle.classList.add('active');
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    // Store the original HTML structure
    const originalHTML = element.innerHTML;
    
    // Create a temporary element to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = originalHTML;
    
    // Get the text content without HTML tags
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    // Clear the element
    element.innerHTML = '';
    
    let i = 0;
    
    function type() {
        if (i < textContent.length) {
            // Build the HTML structure as we type
            if (i < 8) { // "Hi, I'm " part
                element.innerHTML = textContent.substring(0, i + 1);
            } else if (i === 8) { // After "Hi, I'm "
                // Add the span opening tag
                element.innerHTML = textContent.substring(0, 8) + '<span class="highlight">';
            } else if (i > 8) {
                // Add characters inside the span
                const namePart = textContent.substring(8, i + 1);
                element.innerHTML = textContent.substring(0, 8) + '<span class="highlight">' + namePart;
            }
            i++;
            setTimeout(type, speed);
        } else {
            // Complete the span tag
            element.innerHTML = originalHTML;
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Store the original HTML before any modifications
        const originalHTML = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalHTML, 50);
        }, 1000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Active navigation highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Add active class styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2563eb !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Lazy loading for images (if any are added later)
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(section);
});

// Counter animation for statistics (if needed)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(counter => {
    counterObserver.observe(counter);
});

// Preloader (optional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to back to top button
backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.transform = 'translateY(-3px)';
    backToTopBtn.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.transform = 'translateY(0)';
    backToTopBtn.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
});

// Video thumbnail functionality
document.addEventListener('DOMContentLoaded', () => {
    const videoThumbnail = document.getElementById('videoThumbnail');
    const videoEmbed = document.getElementById('videoEmbed');
    const playButton = document.getElementById('playButton');
    const playIcon = document.getElementById('playIcon');
    const youtubeIframe = document.getElementById('youtubeIframe');
    
    if (videoThumbnail && videoEmbed) {
        // Initial click to load and play video
        playButton.addEventListener('click', () => {
            // Load the YouTube video with proper embed URL and autoplay
            youtubeIframe.src = 'https://www.youtube.com/embed/W9TadgboZ-s?si=2rV69u3bQtIPGpEd&start=2&autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=1&allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            
            // Hide thumbnail and show video
            videoThumbnail.style.display = 'none';
            videoEmbed.style.display = 'flex';
            
            // Smooth transition
            videoEmbed.style.opacity = '0';
            videoEmbed.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                videoEmbed.style.opacity = '1';
                videoEmbed.style.transform = 'scale(1)';
            }, 50);
        });
        
        // Listen for iframe load to handle video end
        youtubeIframe.addEventListener('load', () => {
            // Video loaded successfully
            console.log('Video loaded');
        });
    }
});

// Carousel functionality
let carouselStates = {};

function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel-track');
    carousels.forEach(carousel => {
        const carouselId = carousel.id;
        carouselStates[carouselId] = {
            currentSlide: 0,
            totalSlides: carousel.children.length
        };
    });
}

function moveCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const state = carouselStates[carouselId];
    
    if (!carousel || !state) return;
    
    state.currentSlide += direction;
    
    // Handle wrap-around
    if (state.currentSlide >= state.totalSlides) {
        state.currentSlide = 0;
    } else if (state.currentSlide < 0) {
        state.currentSlide = state.totalSlides - 1;
    }
    
    updateCarousel(carouselId);
}

function goToSlide(carouselId, slideIndex) {
    const state = carouselStates[carouselId];
    if (!state) return;
    
    state.currentSlide = slideIndex;
    updateCarousel(carouselId);
}

function updateCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    const dots = document.getElementById(carouselId.replace('-carousel', '-dots'));
    const state = carouselStates[carouselId];
    
    if (!carousel || !state) return;
    
    // Update carousel position
    const translateX = -state.currentSlide * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
    
    // Update dots
    if (dots) {
        const dotElements = dots.querySelectorAll('.dot');
        dotElements.forEach((dot, index) => {
            if (index === state.currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

// Auto-advance carousel (optional)
function startAutoAdvance(carouselId, interval = 5000) {
    setInterval(() => {
        moveCarousel(carouselId, 1);
    }, interval);
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousels();
    
    // Optional: Start auto-advance for carousels
    // startAutoAdvance('geetanagar-carousel');
    // startAutoAdvance('ambikagiri-carousel');
});

// Experience Tabs
document.addEventListener('DOMContentLoaded', () => {
    const expTabs = document.querySelectorAll('.exp-tab');
    const expDetails = document.querySelectorAll('.exp-detail');

    expTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and details
            expTabs.forEach(t => t.classList.remove('active'));
            expDetails.forEach(d => d.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show corresponding detail
            const company = tab.dataset.company;
            const detail = document.getElementById(company);
            if (detail) {
                detail.classList.add('active');
            }
        });
    });
});

// Tabbed Gallery
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.media-tab-item');
    const tabContents = document.querySelectorAll('.media-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');

            const target = document.getElementById(tab.dataset.tab);

            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            if(target) {
                target.classList.add('active');
            }
        });
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentImageIndex;
    let currentGalleryImages;

    document.querySelectorAll('.carousel-slide img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;

            const carouselTrack = img.closest('.carousel-track');
            currentGalleryImages = Array.from(carouselTrack.querySelectorAll('img'));
            currentImageIndex = currentGalleryImages.findIndex(galleryImg => galleryImg.src === img.src);
            
            updateLightboxNav();
        });
    });

    function updateLightboxNav() {
        if (currentGalleryImages.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
    }

    function showImage(index) {
        if (index >= currentGalleryImages.length) {
            currentImageIndex = 0;
        } else if (index < 0) {
            currentImageIndex = currentGalleryImages.length - 1;
        } else {
            currentImageIndex = index;
        }
        lightboxImg.src = currentGalleryImages[currentImageIndex].src;
    }

    prevBtn.addEventListener('click', () => showImage(currentImageIndex - 1));
    nextBtn.addEventListener('click', () => showImage(currentImageIndex + 1));

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                showImage(currentImageIndex - 1);
            } else if (e.key === 'ArrowRight') {
                showImage(currentImageIndex + 1);
            } else if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            }
        }
    });
}); 