
// Video carousel configuration
const videos = [
    {
        id: 'pvHgiplNkQA',
        embedUrl: 'https://www.youtube.com/embed/pvHgiplNkQA?autoplay=1&mute=1&loop=1&playlist=pvHgiplNkQA&controls=0&modestbranding=1&rel=0'
    },
    {
        id: 'rWT4nN3WrwI',
        embedUrl: 'https://www.youtube.com/embed/rWT4nN3WrwI?autoplay=1&mute=1&loop=1&playlist=rWT4nN3WrwI&controls=0&modestbranding=1&rel=0'
    },
    {
        id: 'ode0RbA3sDw',
        embedUrl: 'https://www.youtube.com/embed/ode0RbA3sDw?autoplay=1&mute=1&loop=1&playlist=ode0RbA3sDw&controls=0&modestbranding=1&rel=0'
    }
];

// Current video index
let currentVideo = 0;

// DOM elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselDots = document.getElementById('carouselDots');
const leftVideo = document.getElementById('leftVideo');
const centerVideo = document.getElementById('centerVideo');
const rightVideo = document.getElementById('rightVideo');

// Mobile menu functionality
function toggleMobileMenu() {
    const isOpen = !mobileNav.classList.contains('hidden');
    
    if (isOpen) {
        mobileNav.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    } else {
        mobileNav.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
}

// Get video index with offset
function getVideoIndex(offset) {
    return (currentVideo + offset + videos.length) % videos.length;
}

// Update video carousel
function updateVideoCarousel() {
    // Update center video
    centerVideo.src = videos[currentVideo].embedUrl;
    
    // Update side videos
    leftVideo.src = videos[getVideoIndex(-1)].embedUrl;
    rightVideo.src = videos[getVideoIndex(1)].embedUrl;
    
    // Update dots
    const dots = carouselDots.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentVideo) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Navigate to next video
function nextVideo() {
    currentVideo = (currentVideo + 1) % videos.length;
    updateVideoCarousel();
}

// Navigate to previous video
function prevVideo() {
    currentVideo = (currentVideo - 1 + videos.length) % videos.length;
    updateVideoCarousel();
}

// Navigate to specific video
function goToVideo(index) {
    currentVideo = index;
    updateVideoCarousel();
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle navigation link clicks
function handleNavClick(event) {
    const href = event.target.getAttribute('href');
    
    if (href && href.startsWith('#')) {
        event.preventDefault();
        scrollToSection(href);
        
        // Close mobile menu if open
        if (!mobileNav.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    }
}

// Initialize the application
function init() {
    // Mobile menu event listener
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Video carousel event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', prevVideo);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextVideo);
    }
    
    // Dot navigation event listeners
    if (carouselDots) {
        const dots = carouselDots.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToVideo(index));
        });
    }
    
    // Navigation link event listeners
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Initialize video carousel
    updateVideoCarousel();
    
    // Keyboard navigation for carousel
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            prevVideo();
        } else if (event.key === 'ArrowRight') {
            nextVideo();
        }
    });
    
    console.log('LoopMind static site initialized successfully!');
}

// Auto-advance carousel (optional)
function startAutoPlay() {
    setInterval(() => {
        nextVideo();
    }, 10000); // Change video every 10 seconds
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Optional: Start auto-play (uncomment if desired)
// startAutoPlay();
