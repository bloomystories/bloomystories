# Bloomy Stories Photography Website

A beautiful, responsive static website for Bloomy Stories wedding photography built with Vue.js, HTML5, CSS3, and JavaScript.

## Features

### 🏠 **Home Page**
- Hero section with compelling call-to-action
- About Bloomy Stories section introducing the photographer
- Services showcase with animated cards
- Professional, elegant design

### 📸 **Gallery Page**
- Interactive photo gallery with category filtering
- Lightbox viewer with keyboard navigation
- Categories: All, Ceremony, Reception, Portraits, Details
- Hover effects and smooth transitions
- Mobile-responsive grid layout

### 💬 **Testimonials Page**
- Client reviews with star ratings
- Professional testimonial cards
- Client photos and wedding dates
- Responsive grid layout

### 🌐 **Social Media Integration**
- Instagram, Twitter, and YouTube links
- Hover effects with brand colors
- Easy access to social media profiles

### 📱 **Responsive Design**
- Mobile-first approach
- Responsive navigation with hamburger menu
- Optimized for all screen sizes
- Touch-friendly interface

## Technologies Used

- **Vue.js 3** - Progressive JavaScript framework
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript ES6+** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Playfair Display & Open Sans)

## Project Structure

```
wedding-photographer-website/
├── index.html          # Main HTML file with Vue.js app
├── styles.css          # Complete CSS styling
├── script.js           # Vue.js application and JavaScript functionality
└── README.md           # Project documentation
```

## Features Breakdown

### Navigation
- Fixed header with smooth scrolling
- Mobile hamburger menu
- Active page highlighting
- Smooth transitions

### Gallery System
- Filterable photo categories
- Lightbox with navigation arrows
- Keyboard support (ESC, Arrow keys)
- Lazy loading for performance
- Error handling for missing images

### Animations & Effects
- Scroll-triggered animations
- Parallax hero section
- Hover effects on cards and buttons
- Smooth transitions throughout
- Loading animations

### Performance Optimizations
- Image preloading
- Lazy loading implementation
- CSS animations using transforms
- Optimized image sizes from Unsplash

## Setup Instructions

1. **Clone or download the project files**
2. **Open `index.html` in a web browser**
3. **That's it!** No build process required

## Customization

### Adding Your Own Photos
Replace the Unsplash URLs in `script.js` with your own image URLs:

```javascript
photos: [
    {
        thumbnail: 'path/to/your/thumbnail.jpg',
        full: 'path/to/your/full-size.jpg',
        alt: 'Your photo description',
        category: 'Ceremony' // or 'Reception', 'Portraits', 'Details'
    }
    // Add more photos...
]
```

### Updating Testimonials
Modify the testimonials array in `script.js`:

```javascript
testimonials: [
    {
        id: 1,
        name: 'Client Names',
        date: 'Wedding Date',
        text: 'Testimonial text...',
        photo: 'path/to/client/photo.jpg'
    }
    // Add more testimonials...
]
```

### Changing Social Media Links
Update the social media URLs in `index.html`:

```html
<a href="https://instagram.com/yourhandle" target="_blank" class="social-link instagram">
<a href="https://twitter.com/yourhandle" target="_blank" class="social-link twitter">
<a href="https://youtube.com/yourchannel" target="_blank" class="social-link youtube">
```

### Customizing Colors
Main brand colors in `styles.css`:

```css
/* Primary color (red) */
#e74c3c

/* Secondary colors */
#2c3e50 (dark blue-gray)
#7f8c8d (gray)
#f8f9fa (light gray)
```

### Contact Information
Update contact details in `index.html`:

```html
<span>hello@bloomystories.com</span>
<span>+1 (555) 123-4567</span>
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Vue.js Features Used

- **Reactive Data**: Dynamic content updates
- **Computed Properties**: Filtered photo gallery
- **Event Handling**: User interactions
- **Conditional Rendering**: Page navigation
- **List Rendering**: Gallery and testimonials
- **Component Lifecycle**: Initialization and cleanup

## Performance Features

- **Intersection Observer**: Scroll animations
- **Image Optimization**: Multiple sizes for responsiveness
- **CSS Transitions**: Hardware-accelerated animations
- **Event Delegation**: Efficient event handling
- **Debounced Scroll**: Optimized scroll effects

## Future Enhancements

Potential features to add:
- Contact form with email integration
- Blog section for wedding tips
- Pricing packages display
- Client login area
- Photo download system
- Search functionality in gallery
- Video integration
- SEO optimization
- Analytics integration

## License

This project is open source and available under the MIT License.

## Credits

- **Photos**: Courtesy of Unsplash photographers
- **Icons**: Font Awesome
- **Fonts**: Google Fonts
- **Framework**: Vue.js

---

**Created for Bloomy Stories - professional wedding photography with a modern online presence using cutting-edge web technologies.**
