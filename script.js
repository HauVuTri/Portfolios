// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Replace feather icons
feather.replace();

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Gallery functionality
const galleries = {};

function initGallery(galleryId) {
    galleries[galleryId] = {
        currentSlide: 0,
        totalSlides: document.querySelectorAll(`#${galleryId} .gallery-slide`).length
    };
}

function changeSlide(galleryId, direction) {
    const gallery = galleries[galleryId];
    const container = document.getElementById(galleryId);
    const indicators = document.getElementById(`indicators-${galleryId.split('-')[1]}`);
    
    gallery.currentSlide += direction;
    
    if (gallery.currentSlide >= gallery.totalSlides) {
        gallery.currentSlide = 0;
    } else if (gallery.currentSlide < 0) {
        gallery.currentSlide = gallery.totalSlides - 1;
    }
    
    updateGallery(galleryId, gallery.currentSlide);
}

function goToSlide(galleryId, slideIndex) {
    galleries[galleryId].currentSlide = slideIndex;
    updateGallery(galleryId, slideIndex);
}

function updateGallery(galleryId, slideIndex) {
    const container = document.getElementById(galleryId);
    const indicators = document.getElementById(`indicators-${galleryId.split('-')[1]}`);
    
    // Update slide position
    container.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    // Update indicators
    const dots = indicators.querySelectorAll('.gallery-dot');
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initialize galleries and auto-advance functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all galleries
    initGallery('gallery-1');
    initGallery('gallery-2');
    initGallery('gallery-3');
    initGallery('gallery-4');
    initGallery('gallery-5');
    
    // Auto-advance galleries every 5 seconds
    setInterval(() => {
        changeSlide('gallery-1', 1);
        setTimeout(() => changeSlide('gallery-2', 1), 1000);
        setTimeout(() => changeSlide('gallery-3', 1), 2000);
        setTimeout(() => changeSlide('gallery-4', 1), 3000);
        setTimeout(() => changeSlide('gallery-5', 1), 4000);
    }, 5000);
});