# Ratio1 Placeholder Pages

A Next.js application that displays placeholder pages for Ratio1 services that are still under development. The displayed page is determined by an environment variable, making it easy to deploy the same codebase for multiple services.

## Features

- **Environment-based routing**: Display different placeholder pages based on `NEXT_PUBLIC_SERVICE` environment variable
- **Ratio1 design system**: Matches the exact styling of ratio1.ai (colors, fonts, components)
- **Server-side rendering**: Built with Next.js 15 for optimal SEO and performance
- **Tailwind CSS v4**: Modern utility-first styling
- **TypeScript**: Full type safety
- **Minimal dependencies**: Simple and lightweight

## Available Placeholder Pages

- **Default** - Generic "Not Implemented" page (shown when `NEXT_PUBLIC_SERVICE` is not set)
- **Drive** (`drive`) - R1 Drive development page with link to r1fs-demo.ratio1.ai
- **Analytics** (`analytics`) - Analytics dashboard placeholder
- **Dashboard** (`dashboard`) - Main dashboard placeholder

## Quick Start

### Prerequisites

- Node.js 22 (LTS) - specified in `.nvmrc`

### Installation

```bash
# Install dependencies
npm install

# Copy example environment file
cp .env.example .env.local
```

### Development

```bash
# Run with default placeholder
npm run dev

# Run with specific service (e.g., drive)
NEXT_PUBLIC_SERVICE=drive npm run dev

# Run with analytics placeholder
NEXT_PUBLIC_SERVICE=analytics npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the result.

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Environment Variables

Create a `.env.local` file (or set environment variables in your deployment platform):

```env
NEXT_PUBLIC_SERVICE=drive
```

### Available Services

| Service Value | Page Displayed | Use Case |
|---------------|---------------|----------|
| (empty/unset) | Default "Not Implemented" | Generic placeholder for any unimplemented service |
| `drive` | R1 Drive development page | For drive.ratio1.ai - shows link to r1fs-demo |
| `analytics` | Analytics placeholder | For analytics-related services |
| `dashboard` | Dashboard placeholder | For main dashboard services |

## Deployment Examples

### Vercel

```bash
# For drive.ratio1.ai
vercel --env NEXT_PUBLIC_SERVICE=drive

# For analytics.ratio1.ai
vercel --env NEXT_PUBLIC_SERVICE=analytics
```

### Docker

```dockerfile
# In your Dockerfile
ENV NEXT_PUBLIC_SERVICE=drive
```

### Environment Variables in Hosting Platforms

- **Vercel/Netlify**: Add `NEXT_PUBLIC_SERVICE` in environment variables settings
- **AWS/GCP**: Set in your deployment configuration
- **Docker**: Pass via `-e NEXT_PUBLIC_SERVICE=drive`

## Adding New Placeholder Pages

1. Create a new component in `lib/placeholders/`:

```tsx
// lib/placeholders/MyServicePlaceholder.tsx
import { BorderedCard } from '@components/cards/BorderedCard';
import { SlateCard } from '@components/cards/SlateCard';

export function MyServicePlaceholder() {
    return (
        <div className="center-all min-h-screen p-8">
            <div className="col w-full max-w-2xl gap-6">
                {/* Your content here */}
            </div>
        </div>
    );
}
```

2. Export it from `lib/placeholders/index.ts`:

```tsx
export { MyServicePlaceholder } from './MyServicePlaceholder';
```

3. Add to the service map in `app/page.tsx`:

```tsx
const serviceMap: Record<string, () => JSX.Element> = {
    drive: DrivePlaceholder,
    analytics: AnalyticsPlaceholder,
    dashboard: DashboardPlaceholder,
    myservice: MyServicePlaceholder, // Add here
};
```

4. Use it:

```bash
NEXT_PUBLIC_SERVICE=myservice npm run dev
```

## Design System

This project uses the Ratio1 design system:

### Colors

- Primary: `#1b47f7` (Ratio1 blue)
- Background: `#fcfcfd` (light)
- Text: `#0b0b47` (body)
- Slate 75: `#f6f8fa`
- Slate 150: `#e9edf2`

### Typography

- Font: **Mona Sans** (200-900 weights)
- Monospace: **Roboto Mono**

### Components

- **BorderedCard**: White card with border (`components/cards/BorderedCard.tsx`)
- **SlateCard**: Card with slate background (`components/cards/SlateCard.tsx`)

### Utility Classes

- `.row` - Flex row with centered items
- `.col` - Flex column
- `.center-all` - Center items both vertically and horizontally
- `.section-title` - Section heading style
- `.big-title` - Large title style
- `.compact` - Compact text style

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with routing logic
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   └── cards/
│       ├── BorderedCard.tsx
│       └── SlateCard.tsx
├── lib/
│   └── placeholders/
│       ├── DefaultPlaceholder.tsx
│       ├── DrivePlaceholder.tsx
│       ├── AnalyticsPlaceholder.tsx
│       ├── DashboardPlaceholder.tsx
│       └── index.ts
├── .env.example            # Environment variables template
├── .nvmrc                  # Node version (22)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Technology Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5.8** - Type safety
- **Tailwind CSS 4.1** - Utility-first CSS
- **clsx** - Conditional class names

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

Modern browsers that support ES2022+ features.

## License

MIT

## Support

For questions or issues, visit [ratio1.ai](https://ratio1.ai) or check the [documentation](https://docs.ratio1.ai).
