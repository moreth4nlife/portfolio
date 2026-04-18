# Marcos Alves — Portfolio

A modern, interactive portfolio website built with Next.js 15+, Tailwind CSS, and Framer Motion. Features a bento-grid layout, live data integration with Spotify, GitHub, and Letterboxd, and smooth 3D interactions.

## Features

- **Bento Grid Layout**: Responsive grid-based design with multiple layout variants (Editorial layout implemented)
- **Theme Toggle**: Light (Ambient) and Dark (Dusk) color palettes with localStorage persistence
- **3D Tilt Effects**: Hover interactions with perspective-based 3D transforms
- **Cursor Glow**: Dynamic glow effect following cursor position
- **Live Data Integration**:
  - Spotify API: Currently playing or recently played track
  - GitHub API: Latest repositories and projects
  - Letterboxd: Recently watched films with ratings
- **Live Clock**: Real-time clock showing Porto timezone
- **Smooth Animations**: Powered by Framer Motion
- **Fully Responsive**: Mobile-first design with clamp() for scalable typography

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Data Fetching**: TanStack React Query
- **Fonts**: Inter Tight (sans), Instrument Serif (serif), JetBrains Mono (mono)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file with your API credentials:

```env
# Spotify API
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token

# GitHub API
NEXT_PUBLIC_GITHUB_USERNAME=marcosalves
GITHUB_TOKEN=your_github_token

# Letterboxd
LETTERBOXD_USERNAME=marcosalves
```

### 3. Spotify Setup

To get your Spotify credentials:

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Get your Client ID and Client Secret
4. Use the [Spotify Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization/) to get a refresh token
5. Add the credentials to `.env.local`

### 4. GitHub Setup

1. Create a personal access token at [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Grant `public_repo` scope
3. Add the token to `.env.local`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  ├── api/
  │   ├── spotify/route.ts      # Spotify API integration
  │   ├── github/route.ts        # GitHub API integration
  │   └── letterboxd/route.ts    # Letterboxd integration
  ├── layout.tsx                 # Root layout with theme provider
  ├── page.tsx                   # Main portfolio page
  └── globals.css                # Global styles and CSS variables
components/
  ├── Cell.tsx                   # Base cell component with tilt effect
  ├── ThemeProvider.tsx          # Theme context and toggle
  └── cells/                     # Individual cell components
    ├── HeroCell.tsx
    ├── PortraitCell.tsx
    ├── AboutCell.tsx
    ├── SkillsCell.tsx
    ├── ClockCell.tsx
    ├── ExperienceCell.tsx
    ├── MusicCell.tsx
    ├── MoviesCell.tsx
    ├── ArtCell.tsx
    ├── GamingCell.tsx
    ├── StillLifeCell.tsx
    ├── ProjectsCell.tsx
    └── ContactCell.tsx
```

## Color Palettes

### Ambient (Light)
- Background: `#EADBB8`
- Ink: `#1A3024`
- Accent: `#D8572A`

### Dusk (Dark)
- Background: `#140A08`
- Ink: `#F4D8A0`
- Accent: `#F17A2E`

## Interactive Features

- **Tilt Effect**: Hover over cells to see 3D perspective transform
- **Cursor Glow**: Dynamic radial gradient following cursor
- **Theme Toggle**: Switch between light and dark modes
- **Live Data**: Real-time updates from Spotify, GitHub, and Letterboxd
- **Animations**: Smooth transitions and micro-interactions throughout

## Adding Still Life Images

To add images to the Still Life cell:

1. Place images in `public/images/` directory
2. Update the `StillLifeCell.tsx` component to reference the images
3. Images will be displayed in the gallery strip

## Deployment

The portfolio is optimized for deployment on Vercel:

```bash
npm run build
npm start
```

Or deploy directly to Vercel:

```bash
vercel
```

## License

© 2026 Marcos Alves. All rights reserved.
