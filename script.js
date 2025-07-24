// Background Music Control
document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    if (backgroundMusic) {
        // Set volume to 30%
        backgroundMusic.volume = 0.3;
        
        // Attempt to autoplay when user interacts with the page
        const playMusic = () => {
            backgroundMusic.play().catch(error => {
                console.log('Autoplay prevented by browser:', error);
            });
        };

        // Try to play immediately
        playMusic();

        // Add event listeners for user interaction to start music
        const startMusicOnInteraction = () => {
            playMusic();
            // Remove event listeners after first interaction
            document.removeEventListener('click', startMusicOnInteraction);
            document.removeEventListener('keydown', startMusicOnInteraction);
            document.removeEventListener('scroll', startMusicOnInteraction);
            document.removeEventListener('touchstart', startMusicOnInteraction);
        };

        document.addEventListener('click', startMusicOnInteraction);
        document.addEventListener('keydown', startMusicOnInteraction);
        document.addEventListener('scroll', startMusicOnInteraction);
        document.addEventListener('touchstart', startMusicOnInteraction);
    }
});

// Gallery Image Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Add loading animation for gallery items
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Smooth Scroll for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a subtle click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Video Loading and Error Handling
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.family-video');
    
    videos.forEach(video => {
        video.addEventListener('loadstart', function() {
            // Add loading indicator
            const wrapper = this.parentElement;
            if (!wrapper.querySelector('.video-loading')) {
                const loadingDiv = document.createElement('div');
                loadingDiv.className = 'video-loading';
                loadingDiv.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: #8b4513;
                    font-size: 1rem;
                    background: rgba(255, 255, 255, 0.9);
                    padding: 1rem;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                `;
                loadingDiv.textContent = 'Loading video...';
                wrapper.style.position = 'relative';
                wrapper.appendChild(loadingDiv);
            }
        });

        video.addEventListener('canplay', function() {
            // Remove loading indicator
            const loadingDiv = this.parentElement.querySelector('.video-loading');
            if (loadingDiv) {
                loadingDiv.remove();
            }
        });

        video.addEventListener('error', function() {
            // Handle video error
            const loadingDiv = this.parentElement.querySelector('.video-loading');
            if (loadingDiv) {
                loadingDiv.textContent = 'Video temporarily unavailable';
                loadingDiv.style.color = '#d2691e';
            }
        });
    });
});

// Page Load Animation
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('.main-content');
    
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Enhanced Image Hover Effects for Gallery
document.addEventListener('DOMContentLoaded', function() {
    const galleryPhotos = document.querySelectorAll('.gallery-photo');
    
    galleryPhotos.forEach(photo => {
        photo.addEventListener('load', function() {
            // Add a subtle fade-in effect when image loads
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 50);
        });
    });
});

// Keyboard Navigation Enhancement
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Pause music if playing
        const backgroundMusic = document.getElementById('backgroundMusic');
        if (backgroundMusic && !backgroundMusic.paused) {
            backgroundMusic.pause();
        }
    }
    
    if (e.key === ' ' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        // Toggle music play/pause
        const backgroundMusic = document.getElementById('backgroundMusic');
        if (backgroundMusic) {
            if (backgroundMusic.paused) {
                backgroundMusic.play().catch(console.log);
            } else {
                backgroundMusic.pause();
            }
        }
    }
});

// Touch Enhancement for Mobile
if ('ontouchstart' in window) {
    document.addEventListener('DOMContentLoaded', function() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            item.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 300);
            });
        });
    });
}

// Music Control Indicator
document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    if (backgroundMusic) {
        // Create a subtle music indicator
        const musicIndicator = document.createElement('div');
        musicIndicator.id = 'music-indicator';
        musicIndicator.innerHTML = '♪';
        musicIndicator.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(139, 69, 19, 0.8);
            color: white;
            padding: 10px;
            border-radius: 50%;
            font-size: 16px;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            opacity: 0.7;
        `;
        
        musicIndicator.addEventListener('click', function() {
            if (backgroundMusic.paused) {
                backgroundMusic.play().catch(console.log);
                this.style.opacity = '1';
            } else {
                backgroundMusic.pause();
                this.style.opacity = '0.5';
            }
        });
        
        musicIndicator.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        musicIndicator.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        document.body.appendChild(musicIndicator);
        
        // Update indicator based on music state
        backgroundMusic.addEventListener('play', function() {
            musicIndicator.style.opacity = '1';
        });
        
        backgroundMusic.addEventListener('pause', function() {
            musicIndicator.style.opacity = '0.5';
        });
    }
});
