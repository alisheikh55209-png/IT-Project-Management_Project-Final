# Team Portfolio Website

A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript for a 3-member development team.

## Features

- **Fully Responsive Design** - Works seamlessly on all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Smooth Scrolling** - Enhanced navigation experience
- **Interactive Elements** - Hover effects, animations, and transitions
- **Contact Form** - Functional contact form with validation
- **Team Section** - Showcase for 3 team members (Muhammad Ali Sheikh_70151489, Muneeb Ur Rehman_70149177, Faraz Butt_70154218)
- **Projects Gallery** - Display your team's work with beautiful project cards
- **Skills Showcase** - Animated skill bars and technology cards
## Project Structure

```
.
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # All styles and animations
│   ├── js/
│   │   └── script.js      # JavaScript functionality
│   └── images/
│       ├── profile/       # Team member photos
│       ├── projects/      # Project cover images
│       └── icons/         # SVG icons
└── README.md
```

## Sections

1. **Home** - Landing page with hero section
2. **About** - Team introduction and statistics
3. **Skills** - Technology stack and expertise
4. **Projects** - Portfolio of completed projects
5. **Team** - Individual team member profiles
6. **Contact** - Contact form and information

## How to Use

1. Open `index.html` in your web browser
2. No build process or dependencies required - it's pure HTML/CSS/JS!
3. Customize the content by editing `index.html`
4. Modify styles in `assets/css/style.css`
5. Add functionality in `assets/js/script.js`

## Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #B63E96;
    --primary-dark: #58E6D9;
    --dark-bg: #1b1b1b;
    --light-bg: #f5f5f5;
}
```

### Team Members
Update team member information in the Team section of `index.html`:
- Names
- Roles
- Bios
- Social links
- Profile images

### Projects
Add or modify projects in the Projects section:
- Project images (add to `assets/images/projects/`)
- Project descriptions
- Technology tags
- Project links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All images should be optimized for web use
- Form submission currently shows a success message (backend integration needed for actual email sending)
- Smooth scrolling works in modern browsers
- Animations respect `prefers-reduced-motion` for accessibility
