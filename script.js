/* ============================================
   GURU NANAK UNIVERSITY - CULTURAL DAY 2026
   Main JavaScript File
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all features
    initDateDisplay();
    initCountdown();
    initNavigation();
    initScrollReveal();
    initGallery();
    initVideos();
    initQuotes();
    initAudio();
    initScrollToTop();
    initConfetti();
    
    console.log('Cultural Day 2026 Website Loaded Successfully! 🎉');
});

/* ========== DATE DISPLAY ========== */
function initDateDisplay() {
    const dateElements = [
        document.getElementById('heroDate'),
        document.getElementById('finaleDate'),
        document.getElementById('footerDate')
    ];
    
    dateElements.forEach(el => {
        if (el) {
            el.textContent = CULTURAL_CONFIG.eventDateDisplay;
        }
    });
}

/* ========== COUNTDOWN TIMER ========== */
function initCountdown() {
    const countdownContainer = document.getElementById('countdownContainer');
    const countdownMessage = document.getElementById('countdownMessage');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const eventDate = new Date(CULTURAL_CONFIG.eventDate).getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            // Event has started/passed
            if (countdownContainer) countdownContainer.style.display = 'none';
            if (countdownMessage) {
                countdownMessage.textContent = '🎉 CULTURAL DAY IS HERE! 🎉';
                countdownMessage.style.display = 'block';
            }
            return;
        }
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update display
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/* ========== NAVIGATION ========== */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');
    
    // Show navbar on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

/* ========== SCROLL REVEAL ANIMATION ========== */
function initScrollReveal() {
    if (!CULTURAL_CONFIG.revealOnScroll) return;
    
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    function reveal() {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const revealPoint = windowHeight - CULTURAL_CONFIG.revealOffset;
            
            if (elementTop < revealPoint) {
                el.classList.add('revealed');
            }
        });
    }
    
    // Initial check
    reveal();
    
    // Check on scroll
    window.addEventListener('scroll', reveal);
}

/* ========== SMOOTH SCROLL FUNCTIONS ========== */
function scrollToMain() {
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/* ========== GALLERY ========== */
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    // Gallery images to load
    // Add your image filenames here or they will be auto-detected
    const galleryImages = [
        // Example: 'cultural1.jpg', 'cultural2.jpg', etc.
        // Images will be loaded from assets/gallery/
    ];
    
    // If no images specified, try to load common names
    if (galleryImages.length === 0) {
        // Try loading images with common naming patterns
        const commonNames = [];
        for (let i = 1; i <= 20; i++) {
            CULTURAL_CONFIG.galleryFormats.forEach(format => {
                commonNames.push(`cultural${i}.${format}`);
                commonNames.push(`event${i}.${format}`);
                commonNames.push(`photo${i}.${format}`);
                commonNames.push(`img${i}.${format}`);
            });
        }
        
        // Try to load these images
        loadGalleryImages(commonNames);
    } else {
        loadGalleryImages(galleryImages);
    }
}

function loadGalleryImages(imageNames) {
    const galleryGrid = document.getElementById('galleryGrid');
    let loadedCount = 0;
    let attemptedCount = 0;
    
    imageNames.forEach((imageName, index) => {
        const img = new Image();
        const imagePath = CULTURAL_CONFIG.galleryPath + imageName;
        
        img.onload = function() {
            if (loadedCount === 0) {
                // Remove placeholder on first successful load
                const placeholder = galleryGrid.querySelector('.gallery-placeholder');
                if (placeholder) placeholder.remove();
            }
            
            loadedCount++;
            
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-reveal', '');
            galleryItem.onclick = function() {
                openLightbox(imagePath, `Cultural Day Photo ${loadedCount}`);
            };
            
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.alt = `Guru Nanak University Cultural Day ${loadedCount}`;
            imgElement.loading = 'lazy';
            
            galleryItem.appendChild(imgElement);
            galleryGrid.appendChild(galleryItem);
            
            // Trigger reveal animation
            setTimeout(() => {
                galleryItem.classList.add('revealed');
            }, index * 50);
        };
        
        img.onerror = function() {
            attemptedCount++;
            // Silently fail - image doesn't exist
        };
        
        img.src = imagePath;
    });
}

/* ========== LIGHTBOX ========== */
let currentLightboxIndex = 0;
let lightboxImages = [];

function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (!lightbox || !lightboxImg) return;
    
    // Collect all gallery images
    lightboxImages = Array.from(document.querySelectorAll('.gallery-item img')).map(img => ({
        src: img.src,
        alt: img.alt
    }));
    
    // Find current image index
    currentLightboxIndex = lightboxImages.findIndex(img => img.src === imageSrc);
    if (currentLightboxIndex === -1) currentLightboxIndex = 0;
    
    // Display image
    lightboxImg.src = imageSrc;
    lightboxImg.alt = caption;
    if (lightboxCaption) lightboxCaption.textContent = caption;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function lightboxPrev() {
    if (lightboxImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    updateLightboxImage();
}

function lightboxNext() {
    if (lightboxImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (lightboxImg && lightboxImages[currentLightboxIndex]) {
        lightboxImg.src = lightboxImages[currentLightboxIndex].src;
        lightboxImg.alt = lightboxImages[currentLightboxIndex].alt;
        if (lightboxCaption) {
            lightboxCaption.textContent = lightboxImages[currentLightboxIndex].alt;
        }
    }
}

// Lightbox event listeners
document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev')?.addEventListener('click', lightboxPrev);
document.getElementById('lightboxNext')?.addEventListener('click', lightboxNext);

// Close lightbox on escape key
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lightboxPrev();
        if (e.key === 'ArrowRight') lightboxNext();
    }
});

// Close lightbox on background click
document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

/* ========== VIDEOS ========== */
function initVideos() {
    const videosContainer = document.getElementById('videosContainer');
    if (!videosContainer) return;
    
    // Video files to load (add your video filenames here)
    const videoFiles = [
        // Example: 'cultural-event.mp4', 'performance.mp4', etc.
    ];
    
    if (videoFiles.length === 0) {
        // Try common video names
        const commonVideoNames = [];
        for (let i = 1; i <= 10; i++) {
            ['mp4', 'webm', 'ogg'].forEach(format => {
                commonVideoNames.push(`video${i}.${format}`);
                commonVideoNames.push(`cultural${i}.${format}`);
            });
        }
        loadVideos(commonVideoNames);
    } else {
        loadVideos(videoFiles);
    }
}

function loadVideos(videoNames) {
    const videosContainer = document.getElementById('videosContainer');
    let loadedCount = 0;
    
    videoNames.forEach((videoName, index) => {
        const videoPath = CULTURAL_CONFIG.videosPath + videoName;
        const video = document.createElement('video');
        
        video.onloadedmetadata = function() {
            if (loadedCount === 0) {
                // Remove placeholder
                const placeholder = videosContainer.querySelector('.videos-placeholder');
                if (placeholder) placeholder.remove();
                
                // Create video grid
                const videoGrid = document.createElement('div');
                videoGrid.className = 'video-grid';
                videoGrid.id = 'videoGrid';
                videosContainer.appendChild(videoGrid);
            }
            
            loadedCount++;
            
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            videoCard.setAttribute('data-reveal', '');
            
            const videoElement = document.createElement('video');
            videoElement.controls = true;
            videoElement.playsinline = true;
            videoElement.preload = 'metadata';
            videoElement.src = videoPath;
            videoElement.setAttribute('aria-label', `Cultural Day Video ${loadedCount}`);
            
            videoCard.appendChild(videoElement);
            
            const videoGrid = document.getElementById('videoGrid') || videosContainer;
            videoGrid.appendChild(videoCard);
            
            // Trigger reveal animation
            setTimeout(() => {
                videoCard.classList.add('revealed');
            }, index * 100);
        };
        
        video.onerror = function() {
            // Silently fail - video doesn't exist
        };
        
        video.src = videoPath;
    });
}

/* ========== QUOTES CAROUSEL ========== */
let currentQuoteIndex = 0;
let quoteInterval;

function initQuotes() {
    const quoteText = document.getElementById('quoteText');
    const quoteDots = document.getElementById('quoteDots');
    const quotePrev = document.getElementById('quotePrev');
    const quoteNext = document.getElementById('quoteNext');
    
    if (!quoteText || !CULTURAL_CONFIG.quotes.length) return;
    
    // Create dots
    if (quoteDots) {
        CULTURAL_CONFIG.quotes.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'quote-dot';
            if (index === 0) dot.classList.add('active');
            dot.onclick = () => showQuote(index);
            quoteDots.appendChild(dot);
        });
    }
    
    // Show first quote
    showQuote(0);
    
    // Auto-advance quotes
    startQuoteInterval();
    
    // Navigation buttons
    if (quotePrev) {
        quotePrev.addEventListener('click', () => {
            showQuote((currentQuoteIndex - 1 + CULTURAL_CONFIG.quotes.length) % CULTURAL_CONFIG.quotes.length);
            resetQuoteInterval();
        });
    }
    
    if (quoteNext) {
        quoteNext.addEventListener('click', () => {
            showQuote((currentQuoteIndex + 1) % CULTURAL_CONFIG.quotes.length);
            resetQuoteInterval();
        });
    }
}

function showQuote(index) {
    const quoteText = document.getElementById('quoteText');
    const dots = document.querySelectorAll('.quote-dot');
    
    if (!quoteText) return;
    
    currentQuoteIndex = index;
    
    // Fade out
    quoteText.style.opacity = '0';
    
    setTimeout(() => {
        // Change text
        quoteText.textContent = CULTURAL_CONFIG.quotes[index];
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        // Fade in
        quoteText.style.opacity = '1';
    }, 300);
}

function startQuoteInterval() {
    quoteInterval = setInterval(() => {
        showQuote((currentQuoteIndex + 1) % CULTURAL_CONFIG.quotes.length);
    }, CULTURAL_CONFIG.quoteInterval);
}

function resetQuoteInterval() {
    clearInterval(quoteInterval);
    startQuoteInterval();
}

/* ========== AUDIO CONTROLS ========== */
function initAudio() {
    const welcomeAudioBtn = document.getElementById('welcomeAudioBtn');
    const welcomeAudio = document.getElementById('welcomeAudio');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    
    // Welcome Audio
    if (welcomeAudioBtn && welcomeAudio) {
        // Check if welcome audio exists
        fetch(welcomeAudio.src, { method: 'HEAD' })
            .then(response => {
                if (!response.ok) {
                    welcomeAudioBtn.style.display = 'none';
                }
            })
            .catch(() => {
                welcomeAudioBtn.style.display = 'none';
            });
        
        welcomeAudioBtn.addEventListener('click', () => {
            if (welcomeAudio.paused) {
                welcomeAudio.play().catch(err => {
                    console.log('Audio play failed:', err);
                });
                welcomeAudioBtn.textContent = '▶️ PLAYING MESSAGE';
                welcomeAudioBtn.classList.add('playing');
            } else {
                welcomeAudio.pause();
                welcomeAudio.currentTime = 0;
                welcomeAudioBtn.textContent = '🔊 PLAY WELCOME MESSAGE';
                welcomeAudioBtn.classList.remove('playing');
            }
        });
        
        welcomeAudio.addEventListener('ended', () => {
            welcomeAudioBtn.textContent = '🔊 PLAY WELCOME MESSAGE';
            welcomeAudioBtn.classList.remove('playing');
        });
    }
    
    // Background Music
    if (musicToggle && bgMusic) {
        // Check if music exists
        fetch(bgMusic.src, { method: 'HEAD' })
            .then(response => {
                if (!response.ok) {
                    musicToggle.style.display = 'none';
                }
            })
            .catch(() => {
                musicToggle.style.display = 'none';
            });
        
        musicToggle.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(err => {
                    console.log('Music play failed:', err);
                });
                musicToggle.textContent = '▶️ PLAYING';
                musicToggle.classList.add('playing');
            } else {
                bgMusic.pause();
                musicToggle.textContent = '🎵 PLAY MUSIC';
                musicToggle.classList.remove('playing');
            }
        });
    }
}

/* ========== SCROLL TO TOP ========== */
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ========== CONFETTI ANIMATION ========== */
let confettiActive = false;

function initConfetti() {
    const finaleBtn = document.getElementById('finaleBtn');
    if (finaleBtn) {
        finaleBtn.addEventListener('click', launchConfetti);
    }
}

function launchConfetti() {
    if (confettiActive) return;
    
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    confettiActive = true;
    
    const confettiPieces = [];
    const colors = ['#ffd700', '#ff1744', '#1a237e', '#8b1538', '#6a1b9a', '#00e676'];
    const confettiCount = 150;
    
    // Create confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            velocity: Math.random() * 3 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        });
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let stillFalling = false;
        
        confettiPieces.forEach(piece => {
            piece.y += piece.velocity;
            piece.rotation += piece.rotationSpeed;
            
            if (piece.y < canvas.height) {
                stillFalling = true;
            }
            
            ctx.save();
            ctx.translate(piece.x + piece.w / 2, piece.y + piece.h / 2);
            ctx.rotate((piece.rotation * Math.PI) / 180);
            ctx.fillStyle = piece.color;
            ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
            ctx.restore();
        });
        
        if (stillFalling) {
            requestAnimationFrame(animateConfetti);
        } else {
            confettiActive = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animateConfetti();
}

// Resize confetti canvas on window resize
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confettiCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

/* ========== UTILITY: Check for Reduced Motion Preference ========== */
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Disable animations if user prefers reduced motion
if (prefersReducedMotion()) {
    document.body.classList.add('reduce-motion');
}
