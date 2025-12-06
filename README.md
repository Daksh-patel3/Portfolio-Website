# Daksh Patel - ML Engineer Portfolio

A world-class, highly professional Machine Learning Engineer portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Premium, minimal aesthetic with smooth animations
- 🌓 **Dark/Light Mode**: Seamless theme switching
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance Optimized**: Fast loading times and smooth interactions
- 🎭 **Beautiful Animations**: Framer Motion powered micro-interactions
- 🔍 **SEO Optimized**: Complete metadata and OG image support
- ♿ **Accessible**: WCAG 2.1 AA compliant

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfoliio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfoliio/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── ui/          # ShadCN UI components
│   │   ├── layout/      # Layout components
│   │   ├── sections/    # Page sections
│   │   ├── animations/  # Animation components
│   │   └── features/    # Feature components
│   ├── data/            # Data constants
│   └── lib/            # Utility functions
├── public/              # Static assets
└── ...config files
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- etc.

## Customization

### Update Content

Edit the data files in `src/data/`:
- `experience.ts` - Work experience
- `projects.ts` - Projects
- `skills.ts` - Skills
- `education.ts` - Education
- `research.ts` - Research publications

### Update Site Config

Edit `src/lib/constants.ts` to update:
- Site name and description
- Social media links (GitHub, LinkedIn, Email)
- Navigation links

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Theme colors: CSS variables in `globals.css`
- Default theme: Dark mode (can be changed in `src/app/layout.tsx`)

## License

This project is private and proprietary.

