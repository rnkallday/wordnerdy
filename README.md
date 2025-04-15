# WordNerdy Portfolio Website

A modern, responsive portfolio website showcasing multimedia work by Rian Kochel. Built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Modern UI**: Clean, professional design with smooth transitions and animations
- **Accessibility**: Built with accessibility in mind, following WCAG guidelines
- **Performance**: Optimized for fast loading and smooth interactions

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata and global styles
│   ├── page.tsx         # Main page component
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── ui/              # Reusable UI components
│   │   └── Navigation.tsx
│   └── sections/        # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## File Updates

### Layout and Configuration
- **src/app/layout.tsx**: Added viewport meta tag, theme color configuration, and improved body styling
- **tailwind.config.js**: Created with dark mode support, custom animations, and color variables
- **src/app/globals.css**: Added Tailwind directives and CSS variables for theming

### Components
- **src/app/ui/Navigation.tsx**: Created responsive navigation with mobile menu
- **src/app/sections/Hero.tsx**: Built hero section with call-to-action buttons
- **src/app/sections/About.tsx**: Added about section with skills and expertise
- **src/app/sections/Projects.tsx**: Created project showcase with cards
- **src/app/sections/Contact.tsx**: Built contact form with validation
- **src/app/page.tsx**: Assembled all sections into the main page

## Future Enhancements

- Add form submission functionality
- Implement image optimization
- Add blog section
- Integrate with a CMS
- Add animations with Framer Motion
- Implement SEO improvements

## License

MIT 