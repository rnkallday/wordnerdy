# WordNerdy - Portfolio Website

A modern, responsive portfolio website built with Next.js and TailwindCSS, showcasing multimedia work by Rian Kochel.

## Project Overview

This portfolio website features a clean, modern design with smooth animations and responsive layouts. The site is built using:

- Next.js 14
- TypeScript
- TailwindCSS
- Framer Motion for animations
- Shadcn/ui components
- Custom font (Subjectivity)

## Tech Stack

- **Framework**: Next.js 14.1.3
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **Font**: Subjectivity (custom font)

## Project Structure

```
wordnerdy/
├── src/
│   ├── app/          # Next.js app directory (pages and layouts)
│   │   ├── ui/      # Reusable UI components
│   │   └── sections/ # Page sections
│   ├── lib/         # Utility functions and configurations
│   └── data/        # Data files and content
├── public/          # Static assets
├── fonts/          # Custom font files
└── [config files]  # Various configuration files
```

## Key Features

### Dynamic Frame Layout System
- Flexible frame system supporting video and HTML content
- Hover effects and smooth transitions
- SVG-based frame assets with responsive scaling
- Integrated content previews for various platforms

### UI Components
1. **Hero Section**
   - Responsive navigation with smooth transitions
   - Dynamic text animations
   - Background illustrations with parallax effects
   - Mobile-optimized layout

2. **Work Section**
   - Grid layout for portfolio items
   - Hover animations
   - Responsive image handling
   - Category filtering

3. **About Section**
   - Interactive timeline
   - Skills showcase
   - Responsive layout
   - Smooth scroll animations

4. **Contact Section**
   - Contact form with validation
   - Social media links
   - Responsive design
   - Interactive elements

## Development Setup

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development
Run the development server:
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Technical Implementation Details

### Frame System Configuration
```typescript
interface Frame {
  id: number
  content: {
    type: 'video' | 'html'
    src: string
  }
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  isHovered: boolean
}
```

### Font Configuration
```typescript
// Font variable implementation
variable: '--font-subjectivity'

// Tailwind configuration
fontFamily: {
  sans: ['var(--font-subjectivity)', 'system-ui', 'sans-serif']
}
```

## Development Guidelines

- Use TypeScript for type safety
- Follow TailwindCSS best practices
- Implement responsive design patterns
- Ensure accessibility compliance
- Optimize performance for all devices

## Recent Updates

### Responsive Design Improvements
- Enhanced mobile navigation in Hero component
- Optimized text sizing for different screen sizes
- Improved spacing and layout on mobile devices
- Added proper aria labels and accessibility features

### Performance Optimizations
- Optimized image loading
- Improved animation performance
- Enhanced mobile responsiveness
- Better text scaling across devices

### Technical Improvements
- Resolved compilation errors related to component imports
- Consolidated duplicate configurations
- Properly set up path aliases
- Implemented proper TypeScript support

## License

MIT License - feel free to use this project as a template for your own portfolio. 