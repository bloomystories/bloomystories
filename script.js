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
            darkMode: false,
            
            // Google Reviews Data
            googleReviews: [],
            loadingReviews: false,
            displayedReviewsCount: 6,
            overallRating: 0,
            
            galleryCategories: ['All', 'Prewedding', 'Wedding'],
            
            // Gallery photos with categories - using your actual images
            photos: [
                // Prewedding Photos
                {
                    thumbnail: 'images/prewed/DSC01159.jpg',
                    full: 'images/prewed/DSC01159.jpg',
                    alt: 'Romantic prewedding moment',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC01293.jpg',
                    full: 'images/prewed/DSC01293.jpg',
                    alt: 'Beautiful prewedding portrait',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC01336.jpg',
                    full: 'images/prewed/DSC01336.jpg',
                    alt: 'Couple prewedding session',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC01494.jpg',
                    full: 'images/prewed/DSC01494.jpg',
                    alt: 'Artistic prewedding shot',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC01641.jpg',
                    full: 'images/prewed/DSC01641.jpg',
                    alt: 'Prewedding love story',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC05265.jpg',
                    full: 'images/prewed/DSC05265.jpg',
                    alt: 'Dreamy prewedding moment',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC05299.jpg',
                    full: 'images/prewed/DSC05299.jpg',
                    alt: 'Candid prewedding capture',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC05310.jpg',
                    full: 'images/prewed/DSC05310.jpg',
                    alt: 'Elegant prewedding portrait',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC05322.jpg',
                    full: 'images/prewed/DSC05322.jpg',
                    alt: 'Romantic prewedding scene',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC05396.jpg',
                    full: 'images/prewed/DSC05396.jpg',
                    alt: 'Beautiful prewedding moment',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC05527.jpg',
                    full: 'images/prewed/DSC05527.jpg',
                    alt: 'Prewedding couple photography',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC05535.jpg',
                    full: 'images/prewed/DSC05535.jpg',
                    alt: 'Stunning prewedding capture',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC05652.jpg',
                    full: 'images/prewed/DSC05652.jpg',
                    alt: 'Artistic prewedding photography',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC05671.jpg',
                    full: 'images/prewed/DSC05671.jpg',
                    alt: 'Prewedding love capture',
                    category: 'Prewedding'
                },
                {
                    thumbnail: 'images/prewed/DSC05676.jpg',
                    full: 'images/prewed/DSC05676.jpg',
                    alt: 'Dreamy prewedding shot',
                    category: 'Prewedding'
                },
                
                // Wedding Photos
                {
                    thumbnail: 'images/wed/1I0A4204.jpg',
                    full: 'images/wed/1I0A4204.jpg',
                    alt: 'Wedding ceremony moment',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/1I0A4229.jpg',
                    full: 'images/wed/1I0A4229.jpg',
                    alt: 'Beautiful wedding portrait',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/1I0A4300.jpg',
                    full: 'images/wed/1I0A4300.jpg',
                    alt: 'Wedding celebration moment',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/1I0A4308.jpg',
                    full: 'images/wed/1I0A4308.jpg',
                    alt: 'Bride and groom moment',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/1I0A4315.jpg',
                    full: 'images/wed/1I0A4315.jpg',
                    alt: 'Wedding ceremony capture',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/1I0A4329.jpg',
                    full: 'images/wed/1I0A4329.jpg',
                    alt: 'Special wedding moment',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/1I0A4498.jpg',
                    full: 'images/wed/1I0A4498.jpg',
                    alt: 'Wedding day memories',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/1I0A4585.jpg',
                    full: 'images/wed/1I0A4585.jpg',
                    alt: 'Beautiful wedding scene',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/1I0A4600.jpg',
                    full: 'images/wed/1I0A4600.jpg',
                    alt: 'Wedding couple portrait',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/1I0A4643.jpg',
                    full: 'images/wed/1I0A4643.jpg',
                    alt: 'Stunning wedding capture',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/1I0A4688.jpg',
                    full: 'images/wed/1I0A4688.jpg',
                    alt: 'Wedding day joy',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/1I0A4710.jpg',
                    full: 'images/wed/1I0A4710.jpg',
                    alt: 'Perfect wedding moment',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/4Z9A3959.jpg',
                    full: 'images/wed/4Z9A3959.jpg',
                    alt: 'Wedding celebration',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/4Z9A6067.jpg',
                    full: 'images/wed/4Z9A6067.jpg',
                    alt: 'Wedding ceremony detail',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/DSC00052.jpg',
                    full: 'images/wed/DSC00052.jpg',
                    alt: 'Wedding day emotions',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/DSC00089.jpg',
                    full: 'images/wed/DSC00089.jpg',
                    alt: 'Beautiful wedding moment',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/DSC00107.jpg',
                    full: 'images/wed/DSC00107.jpg',
                    alt: 'Wedding couple love',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/DSC00749.jpg',
                    full: 'images/wed/DSC00749.jpg',
                    alt: 'Wedding ceremony capture',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/DSC00757.jpg',
                    full: 'images/wed/DSC00757.jpg',
                    alt: 'Wedding day happiness',
                    category: 'Wedding'
                },
                {
                    thumbnail: 'images/wed/DSC00811.jpg',
                    full: 'images/wed/DSC00811.jpg',
                    alt: 'Special wedding capture',
                    category: 'Wedding'
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
        },
        
        displayedGoogleReviews() {
            return this.googleReviews.slice(0, this.displayedReviewsCount);
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
            console.log('Opening lightbox for index:', index); // Debug log
            this.currentPhotoIndex = index;
            this.lightboxOpen = true;
            document.body.style.overflow = 'hidden';
        },
        
        closeLightbox() {
            console.log('Closing lightbox'); // Debug log
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
        },
        
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
                case 'instagram':
                    // Instagram doesn't support direct URL sharing, so we'll open Instagram
                    shareUrl = 'https://www.instagram.com/thebloomystories/#';
                    break;
                case 'youtube':
                    shareUrl = 'https://www.youtube.com/@thebloomytories';
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
        
        // Dark mode toggle
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            document.documentElement.classList.toggle('dark-mode', this.darkMode);
            localStorage.setItem('darkMode', this.darkMode);
        },
        
        // Initialize dark mode from localStorage
        initDarkMode() {
            const savedDarkMode = localStorage.getItem('darkMode');
            if (savedDarkMode !== null) {
                this.darkMode = JSON.parse(savedDarkMode);
                document.documentElement.classList.toggle('dark-mode', this.darkMode);
            }
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
        },

        // Google Reviews Methods
        async loadGoogleReviews() {
            this.loadingReviews = true;
            
            try {
                // For demo purposes, simulate Google Reviews data
                // In production, you would replace this with actual Google Places API call
                const mockReviews = [
                    {
                        id: 'review1',
                        author_name: 'Priya Sharma',
                        rating: 5,
                        text: 'Absolutely stunning photography! The Bloomy Stories team captured our wedding beautifully. Every moment was perfectly preserved and the attention to detail was incredible. Highly recommend!',
                        time: 1703097600,
                        profile_photo_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80'
                    },
                    {
                        id: 'review2',
                        author_name: 'Rajesh Patel',
                        rating: 5,
                        text: 'Outstanding service and exceptional photography skills. They made our special day even more memorable with their professional approach and creative shots.',
                        time: 1701878400,
                        profile_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80'
                    },
                    {
                        id: 'review3',
                        author_name: 'Meera Joshi',
                        rating: 5,
                        text: 'The best wedding photographer in Vapi! Beautiful work, very professional, and delivered exactly what we wanted. The photos are artistic and emotional.',
                        time: 1700668800,
                        profile_photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80'
                    },
                    {
                        id: 'review4',
                        author_name: 'Amit Desai',
                        rating: 5,
                        text: 'Fantastic experience! They captured every emotion and moment perfectly. The team is very skilled and professional. Would definitely recommend to anyone looking for quality wedding photography.',
                        time: 1699459200,
                        profile_photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80'
                    },
                    {
                        id: 'review5',
                        author_name: 'Kavya Shah',
                        rating: 5,
                        text: 'Incredible photography and videography services! They made us feel comfortable throughout the shoot and delivered stunning results. Truly talented photographers.',
                        time: 1698249600,
                        profile_photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80'
                    },
                    {
                        id: 'review6',
                        author_name: 'Vivek Modi',
                        rating: 5,
                        text: 'Professional, creative, and punctual. The Bloomy Stories team exceeded our expectations. The pre-wedding and wedding photos are absolutely beautiful!',
                        time: 1697040000,
                        profile_photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80'
                    },
                    {
                        id: 'review7',
                        author_name: 'Neha Thakkar',
                        rating: 5,
                        text: 'Amazing work! They captured our wedding day perfectly. The team is very professional and the quality of photos is outstanding. Highly recommended!',
                        time: 1695830400,
                        profile_photo_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80'
                    },
                    {
                        id: 'review8',
                        author_name: 'Hardik Gupta',
                        rating: 5,
                        text: 'Excellent photography services! They made our wedding memorable with their creative shots and professional approach. Very satisfied with their work.',
                        time: 1694620800,
                        profile_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80'
                    }
                ];

                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                this.googleReviews = mockReviews;
                this.calculateOverallRating();
                
            } catch (error) {
                console.error('Error loading Google Reviews:', error);
                // Fallback to static testimonials if Google Reviews fail
                this.googleReviews = [];
            } finally {
                this.loadingReviews = false;
            }
        },

        calculateOverallRating() {
            if (this.googleReviews.length === 0) return;
            
            const totalRating = this.googleReviews.reduce((sum, review) => sum + review.rating, 0);
            this.overallRating = (totalRating / this.googleReviews.length).toFixed(1);
        },

        formatDate(timestamp) {
            const date = new Date(timestamp * 1000);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        },

        loadMoreReviews() {
            this.displayedReviewsCount += 3;
        },

        // Method to fetch real Google Reviews (requires API key and proper setup)
        async fetchRealGoogleReviews() {
            // This would be used when you have a proper Google Places API setup
            const placeId = 'YOUR_GOOGLE_PLACE_ID'; // Replace with actual place ID
            const apiKey = 'YOUR_API_KEY'; // Replace with actual API key
            
            try {
                const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`);
                const data = await response.json();
                
                if (data.result && data.result.reviews) {
                    this.googleReviews = data.result.reviews;
                    this.calculateOverallRating();
                }
            } catch (error) {
                console.error('Error fetching Google Reviews:', error);
                // Fallback to mock data or static testimonials
                this.loadGoogleReviews();
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
        
        // Load Google Reviews
        this.loadGoogleReviews();
        
        // Initialize dark mode
        this.initDarkMode();
    },
    
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
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

// Add parallax effect to hero section and navbar scroll effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    const navbar = document.querySelector('.navbar');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    // Add scrolled class to navbar for logo switching
    if (navbar) {
        if (scrolled > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
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
