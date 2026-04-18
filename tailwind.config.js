/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        xl: '28px',
        lg: '22px',
        md: '14px',
        sm: '10px',
      },
      colors: {
        // Ambient palette (default)
        ambient: {
          bg: '#EADBB8',
          'bg-raised': '#F2E3BE',
          ink: '#1A3024',
          'ink-soft': '#6B4A28',
          'ink-mute': '#A88A5E',
          line: 'rgba(26, 48, 36, 0.10)',
          'line-strong': 'rgba(26, 48, 36, 0.22)',
          accent: '#D8572A',
          'accent-2': '#F39044',
          'accent-soft': '#F2D8B0',
        },
        // Dusk palette
        dusk: {
          bg: '#140A08',
          'bg-raised': '#22140C',
          ink: '#F4D8A0',
          'ink-soft': '#D8A568',
          'ink-mute': '#8E6E3E',
          line: 'rgba(244, 216, 160, 0.08)',
          'line-strong': 'rgba(244, 216, 160, 0.22)',
          accent: '#F17A2E',
          'accent-2': '#D8572A',
          'accent-soft': '#3A1A0C',
        },
      },
    },
  },
  plugins: [],
};
