// Vue.js Application
const { createApp } = Vue;

createApp({
    data() {
        return {
            currentPage: 'home',
            mobileMenuOpen: false,
            activeCategory: 'All',
            lightboxOpen: false,
            currentPhotoIndex: 0,
            
            galleryCategories: ['All', 'Ceremony', 'Reception', 'Portraits', 'Details'],
            
            // Gallery photos with categories
            photos: [
                {
                    thumbnail: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Wedding ceremony moment',
                    category: 'Ceremony'
                },
                {
                    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Bride and groom portrait',
                    category: 'Portraits'
                },
                {
                    thumbnail: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Wedding reception dance',
                    category: 'Reception'
                },
                {
                    thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Wedding rings detail',
                    category: 'Details'
                },
                {
                    thumbnail: 'https://images.unsplash.com/photo-1522413452208-996ff3c3a9b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1522413452208-996ff3c3a9b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Couple walking together',
                    category: 'Portraits'
                },
                {
                    thumbnail: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Wedding ceremony kiss',
                    category: 'Ceremony'
                },
                {
                    thumbnail: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Wedding bouquet details',
                    category: 'Details'
                },
                {
                    thumbnail: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Reception celebration',
                    category: 'Reception'
                },
                {
                    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Romantic couple portrait',
                    category: 'Portraits'
                },
                {
                    thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Wedding shoes detail',
                    category: 'Details'
                },
                {
                    thumbnail: 'https://images.unsplash.com/photo-1505440484611-23c171ad6e96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1505440484611-23c171ad6e96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Wedding ceremony moment',
                    category: 'Ceremony'
                },
                {
                    thumbnail: 'https://images.unsplash.com/photo-1543764822-c4b6e2a64d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    full: 'https://images.unsplash.com/photo-1543764822-c4b6e2a64d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    alt: 'Reception party dancing',
                    category: 'Reception'
                }
            ],
            
            // Testimonials data
            testimonials: [
                {
                    id: 1,
                    name: 'Sarah & Michael',
                    date: 'October 2023',
                    text: 'Working with Bloomy Stories was an absolute dream! They captured every precious moment of our special day with such artistry and professionalism. The photos are breathtaking and tell our love story perfectly.',
                    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                },
                {
                    id: 2,
                    name: 'Emma & David',
                    date: 'August 2023',
                    text: 'From our engagement session to our wedding day, the experience was flawless. The photographer has an incredible eye for detail and made us feel so comfortable. We couldn\'t be happier with our photos!',
                    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                },
                {
                    id: 3,
                    name: 'Jessica & Ryan',
                    date: 'June 2023',
                    text: 'The quality of work is exceptional! Every photo is a work of art. They captured moments we didn\'t even know were happening. Our families and friends are still raving about the beautiful photos.',
                    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                },
                {
                    id: 4,
                    name: 'Amanda & James',
                    date: 'September 2023',
                    text: 'Professional, creative, and so easy to work with! The photographer understood our vision perfectly and delivered beyond our expectations. These photos will be treasured for generations.',
                    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                },
                {
                    id: 5,
                    name: 'Rachel & Tom',
                    date: 'May 2023',
                    text: 'Absolutely stunning work! The attention to detail and ability to capture authentic emotions is remarkable. We felt like celebrities for the day and the photos prove it. Highly recommend!',
                    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                },
                {
                    id: 6,
                    name: 'Lisa & Mark',
                    date: 'July 2023',
                    text: 'The photographer went above and beyond to make our day perfect. The photos are absolutely gorgeous and capture the joy and love we felt. We will treasure these memories forever.',
                    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                }
            ]
        }
    },
    
    computed: {
        filteredPhotos() {
            if (this.activeCategory === 'All') {
                return this.photos;
            }
            return this.photos.filter(photo => photo.category === this.activeCategory);
        }
    },
    
    methods: {
        // Navigation methods
        scrollToContact() {
            this.mobileMenuOpen = false;
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        },
        
        // Gallery methods
        openLightbox(index) {
            this.currentPhotoIndex = index;
            this.lightboxOpen = true;
            document.body.style.overflow = 'hidden';
        },
        
        closeLightbox() {
            this.lightboxOpen = false;
            document.body.style.overflow = 'auto';
        },
        
        nextPhoto() {
            this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.filteredPhotos.length;
        },
        
        prevPhoto() {
            this.currentPhotoIndex = this.currentPhotoIndex === 0 
                ? this.filteredPhotos.length - 1 
                : this.currentPhotoIndex - 1;
        },
        
        // Utility methods
        handleResize() {
            if (window.innerWidth > 768) {
                this.mobileMenuOpen = false;
            }
        }
    },
    
    mounted() {
        // Add event listeners
        window.addEventListener('resize', this.handleResize);
        
        // Handle keyboard navigation in lightbox
        document.addEventListener('keydown', (e) => {
            if (this.lightboxOpen) {
                if (e.key === 'Escape') {
                    this.closeLightbox();
                } else if (e.key === 'ArrowRight') {
                    this.nextPhoto();
                } else if (e.key === 'ArrowLeft') {
                    this.prevPhoto();
                }
            }
        });
        
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Initialize animations on scroll
        this.initScrollAnimations();
    },
    
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    
    methods: {
        ...this.methods,
        
        // Animation methods
        initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe elements that should animate on scroll
            setTimeout(() => {
                const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .gallery-item, .about-content');
                animatedElements.forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    observer.observe(el);
                });
            }, 100);
        },
        
        // Social media sharing methods
        shareOnSocialMedia(platform) {
            const url = window.location.href;
            const text = 'Check out this amazing wedding photographer!';
            
            let shareUrl = '';
            
            switch(platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                    break;
                case 'instagram':
                    // Instagram doesn't support direct URL sharing, so we'll open Instagram
                    shareUrl = 'https://www.instagram.com/';
                    break;
                case 'youtube':
                    shareUrl = 'https://www.youtube.com/';
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        },
        
        // Contact form methods (for future expansion)
        handleContactForm(event) {
            event.preventDefault();
            // This could be expanded to handle form submission
            alert('Thank you for your interest! I will get back to you soon.');
        },
        
        // Mobile menu toggle
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        
        // Close mobile menu when clicking outside
        closeMobileMenu() {
            this.mobileMenuOpen = false;
        },
        
        // Lazy loading for images
        lazyLoadImages() {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });
            
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
}).mount('#app');

// Additional JavaScript for enhanced functionality

// Smooth scroll polyfill for older browsers
(function() {
    if (!Element.prototype.scrollTo) {
        Element.prototype.scrollTo = function(x, y) {
            this.scrollLeft = x;
            this.scrollTop = y;
        };
    }
})();

// Add loading animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        hero.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Add staggered animation to navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-10px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', preloadImages);

// Add error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
    }
}, true);
