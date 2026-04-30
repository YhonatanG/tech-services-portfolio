# Tech Services Portfolio Website

A modern, responsive portfolio website for a technology services company built with React, TypeScript, Vite, and TailwindCSS.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, minimal design with smooth animations
- **Routing**: Client-side routing with React Router
- **Reusable Components**: Modular component architecture
- **Form Validation**: Contact form with basic validation
- **Hover Effects**: Interactive elements with transitions

## Tech Stack

- React 18 with functional components and hooks
- TypeScript
- Vite (build tool)
- TailwindCSS (styling)
- React Router DOM (routing)

## Project Structure

```
src/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── pages/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── Portfolio.tsx
│   └── Services.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code linting

## Pages

- **Home**: Hero section with company value proposition
- **Services**: List of technology services offered
- **About**: Company description and values
- **Portfolio**: Showcase of past projects and case studies
- **Contact**: Contact form with validation

## Customization

- Update content in the respective page components
- Modify styles using TailwindCSS classes
- Add new components in the `components` folder
- Extend routing in `App.tsx`

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment to any static hosting service.