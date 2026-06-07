# Shree Ram Janaki Mandir - React.js Project

## 📋 Project Overview

This is a complete conversion of the Shree Ram Janaki Mandir website from HTML/CSS/JavaScript into a modern React.js application with a component-based architecture.

## 🏗️ Project Structure

```
React-Project/
├── public/
│   └── index.html                 # Main HTML entry point
├── src/
│   ├── components/                # Reusable components
│   │   ├── Navigation/            # Navigation bar component
│   │   ├── Footer/                # Footer component
│   │   ├── Hero/                  # Hero section (home page)
│   │   ├── FounderSection/        # Founder information section
│   │   ├── Stats/                 # Statistics cards component
│   │   ├── PageHeader/            # Reusable page header (About, Members, etc.)
│   │   ├── Timeline/              # Timeline component (About page)
│   │   ├── MemberCard/            # Individual member card component
│   │   ├── Gallery/               # Photo gallery with lightbox
│   │   ├── ContactForm/           # Contact form component
│   │   └── PujaSchedule/          # Daily puja schedule table
│   ├── pages/                     # Page components
│   │   ├── HomePage.js            # Home page
│   │   ├── AboutPage.js           # About/Our Story page
│   │   ├── MembersPage.js         # Members page
│   │   ├── PhotosPage.js          # Photos/Gallery page
│   │   └── ContactPage.js         # Contact page
│   ├── App.js                     # Main App component with routing
│   ├── App.css                    # Global styles and variables
│   ├── index.js                   # React entry point
│   └── index.css                  # Global CSS and fonts
├── package.json                   # Project dependencies
└── README.md                      # This file
```

## 🎨 Components Breakdown

### Navigation Component
- **File**: `src/components/Navigation/Navigation.js`
- **Responsibility**: Fixed navigation bar with temple logo and menu links
- **Features**: 
  - Smooth scroll to sections
  - Active page highlighting
  - Glowing logo animation

### Footer Component
- **File**: `src/components/Footer/Footer.js`
- **Responsibility**: Footer with temple info and links
- **Features**: 
  - Navigation links
  - Temple tagline
  - Copyright information

### Home Page Components

#### Hero Component
- **File**: `src/components/Hero/Hero.js`
- **Responsibility**: Large hero section with title and CTA buttons
- **Features**:
  - Animated mandala ring
  - Image mosaic grid
  - Call-to-action buttons
  - Responsive design

#### FounderSection Component
- **File**: `src/components/FounderSection/FounderSection.js`
- **Responsibility**: Founder information section
- **Features**:
  - Founder portrait placeholder
  - Biographical text
  - Decorative dividers

#### Stats Component
- **File**: `src/components/Stats/Stats.js`
- **Responsibility**: Display temple statistics
- **Features**:
  - 4-column grid for stats
  - Animated numbers with gradients
  - Responsive to 2-column on mobile

### About Page Components

#### PageHeader Component
- **File**: `src/components/PageHeader/PageHeader.js`
- **Responsibility**: Reusable page header across all pages
- **Props**:
  - `eyebrow`: Top label with emoji
  - `title`: Main title
  - `titleHighlight`: Gradient-colored subtitle
  - `intro`: Introduction paragraph

#### Timeline Component
- **File**: `src/components/Timeline/Timeline.js`
- **Responsibility**: Display temple's history timeline
- **Features**:
  - Vertical timeline with lamp icons
  - Year, heading, and description for each event
  - Smooth vertical line connector

### Members Page Components

#### MemberCard Component
- **File**: `src/components/MemberCard/MemberCard.js`
- **Responsibility**: Individual member profile card
- **Props**:
  - `member`: Object with role, emoji, name, description
  - `isFounder`: Boolean to style founder card differently
- **Features**:
  - Avatar emoji
  - Role badge
  - Hover effects
  - Special styling for founder

### Gallery/Photos Page

#### Gallery Component
- **File**: `src/components/Gallery/Gallery.js`
- **Responsibility**: Photo gallery with lightbox functionality
- **Features**:
  - Masonry grid layout
  - Hover overlay with image labels
  - Lightbox modal for full-size viewing
  - Escape key to close lightbox
  - Error handling for missing images

### Contact Page Components

#### ContactForm Component
- **File**: `src/components/ContactForm/ContactForm.js`
- **Responsibility**: Contact form for visitors
- **Features**:
  - Form validation
  - Input fields: Name, Phone, Email, Purpose, Message
  - Submit button with feedback
  - Local state management

#### PujaSchedule Component
- **File**: `src/components/PujaSchedule/PujaSchedule.js`
- **Responsibility**: Display daily puja schedule
- **Features**:
  - Responsive table
  - 6 daily pujas listed
  - Hover effects on rows

## 🎨 Styling System

### CSS Variables (Root)
```css
--saffron: #FF6B00
--deep-saffron: #E05A00
--gold: #C8922A
--gold-light: #F0C040
--maroon: #7B1A1A
--deep-maroon: #4A0E0E
--cream: #FDF6E3
--text-dark: #2A1005
--text-mid: #5C3317
--text-light: #8B5E3C
--lotus-pink: #E8667A
```

### Global Animations
- `fadeInUp`: Elements slide up while fading in
- `fadeInRight`: Elements slide right while fading in
- `glow-pulse`: Pulsing glow effect (used for logo)
- `slow-spin`: Slow rotating spin (used for mandala)

### Responsive Breakpoint
- **Mobile**: max-width: 900px
  - Adjusted padding and margins
  - Modified grid layouts (1 to 2 columns)
  - Hidden visual elements
  - Optimized font sizes

## 🚀 Getting Started

### Installation

1. Navigate to the React project directory:
```bash
cd React-Project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 📱 Pages Overview

### Home Page (`HomePage.js`)
- Hero section with welcome message
- Founder section with biography
- Temple statistics

### About Page (`AboutPage.js`)
- Temple's sacred story
- History and traditions
- Timeline of important events
- Featured images

### Members Page (`MembersPage.js`)
- Founder profile (spans full width)
- Temple owner and staff
- Priests and administrative team
- Member cards with descriptions

### Photos Page (`PhotosPage.js`)
- Photo gallery with 11+ images
- Masonry layout
- Lightbox modal for viewing full-size images
- Image labels and descriptions

### Contact Page (`ContactPage.js`)
- Contact information section
- Contact form for visitors
- Daily puja schedule table
- Temple hours and special events info

## 🔄 State Management

The app uses React's built-in `useState` hook for state management:

1. **App-level state** (`App.js`):
   - Current page state
   - Navigation control

2. **Component-level state**:
   - ContactForm: Form data
   - Gallery: Lightbox state

## 🎯 Key Features

✅ **Component-based Architecture**: Every UI element is a reusable component

✅ **Responsive Design**: Mobile-first approach with breakpoint at 900px

✅ **Smooth Navigation**: Client-side page switching without page reload

✅ **Interactive Elements**: Lightbox gallery, hover effects, form validation

✅ **Accessible**: Semantic HTML, proper ARIA labels, keyboard navigation

✅ **Performance**: Optimized images, CSS animations, lazy loading ready

✅ **Modern React**: Uses functional components and hooks

✅ **Theme System**: CSS variables for easy customization

## 🔧 Customization

### Changing Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --saffron: #FF6B00;
  --gold: #C8922A;
  /* etc... */
}
```

### Adding New Content
1. Update the data in the respective page component
2. Create new components if needed
3. Import and use in the page

### Adding New Pages
1. Create a new page component in `src/pages/`
2. Create CSS for the page
3. Add state in `App.js` for the new page
4. Add navigation link in `Navigation.js`
5. Add conditional render in `App.js`

## 📊 Member Data Structure

```javascript
const member = {
  role: 'Member Role',
  emoji: '🙏',
  name: 'Member Name',
  description: 'Detailed description...'
};
```

## 🖼️ Image Paths

Images are sourced from:
```
/mnt/user-data/uploads/WhatsApp_Image_*.jpeg
```

Update these paths in:
- `Hero.js`
- `AboutPage.js`
- `Gallery.js`

## 📝 Line-by-Line Conversion Reference

| HTML Element | React Component | Location |
|---|---|---|
| `<nav>` | `Navigation.js` | `/src/components/Navigation/` |
| `.hero` section | `Hero.js` | `/src/components/Hero/` |
| `.founder-section` | `FounderSection.js` | `/src/components/FounderSection/` |
| `.stats-row` | `Stats.js` | `/src/components/Stats/` |
| `.about-content` | `AboutPage.js` | `/src/pages/` |
| `.timeline` | `Timeline.js` | `/src/components/Timeline/` |
| `.members-grid` | `MembersPage.js` | `/src/pages/` |
| `.gallery-grid` | `Gallery.js` | `/src/components/Gallery/` |
| `.lightbox` | `Gallery.js` | `/src/components/Gallery/` |
| `.contact-layout` | `ContactPage.js` | `/src/pages/` |
| `.contact-form` | `ContactForm.js` | `/src/components/ContactForm/` |
| `.schedule-table` | `PujaSchedule.js` | `/src/components/PujaSchedule/` |
| `<footer>` | `Footer.js` | `/src/components/Footer/` |

## 🚦 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

- **react**: ^18.2.0 - Core React library
- **react-dom**: ^18.2.0 - React DOM rendering
- **react-router-dom**: ^6.10.0 - Client-side routing (optional, not currently used)
- **react-scripts**: 5.0.1 - Create React App scripts

## 💡 Tips & Best Practices

1. **Performance**: Use React DevTools to check for unnecessary re-renders
2. **Accessibility**: Ensure all interactive elements are keyboard accessible
3. **Mobile Testing**: Test on actual devices, not just browser emulation
4. **Code Splitting**: Consider lazy loading pages for better performance
5. **Error Boundaries**: Add error boundaries for production robustness

## 🤝 Contributing

To add new features or components:

1. Create new component in appropriate folder
2. Follow the naming convention (PascalCase for components)
3. Include accompanying CSS file
4. Document props and functionality
5. Test on both desktop and mobile

## 📄 License

This project is based on the Shree Ram Janaki Mandir website.

## ✨ Future Enhancements

- Add backend integration for form submission
- Implement image optimization and lazy loading
- Add multi-language support
- Add animations on scroll
- Implement service worker for offline access
- Add admin panel for content management
- Social media integration
- Event calendar system

---

**Created**: 2026
**Technology**: React.js 18+
**Status**: Complete and Ready for Deployment
