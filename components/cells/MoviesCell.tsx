'use client';

import { useQuery } from '@tanstack/react-query';
import Cell from '../Cell';

interface Film {
  title: string;
  rating: number;
  year: number;
  poster?: string;
  link?: string;
  image?: string;
}

const DEFAULT_FILMS = [
  { title: 'La La Land', rating: 4.5, year: 2016 },
  { title: 'Drive', rating: 5, year: 2011 },
  { title: 'The Grand Budapest Hotel', rating: 4.5, year: 2014 },
  { title: 'There Will Be Blood', rating: 5, year: 2007 },
];

export default function MoviesCell() {
  const { data: films } = useQuery<Film[]>({
    queryKey: ['letterboxd'],
    queryFn: async () => {
      const res = await fetch('/api/letterboxd');
      return res.json();
    },
    staleTime: 3600000, // 1 hour
  });

  const displayFilms = (films && films.length > 0) ? films.slice(0, 4) : DEFAULT_FILMS;

  const gradients = [
    'linear-gradient(160deg, #8A3A1E, #1C0A06)',
    'linear-gradient(160deg, #3E5A2E, #0E1A08)',
    'linear-gradient(160deg, #C47A3E, #4A2A10)',
    'linear-gradient(160deg, #6B4A2E, #1C1008)',
  ];

  const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '½' : '') + (empty > 0 ? '☆'.repeat(empty) : '');
  };

  return (
    <Cell className="cell-movies" tilt={true}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '14px' }}>
        <div className="label">Letterboxd</div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--accent)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>recently watched</span>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '8px',
      }}>
        {displayFilms.map((f: any, i) => {
          const posterUrl = f.poster || f.image;
          const Component = f.link ? 'a' : 'div';
          const componentProps = f.link ? { href: f.link, target: '_blank', rel: 'noopener noreferrer' } : {};

          return (
            <Component
              key={f.title}
              className="movie-poster"
              {...componentProps}
              style={{
                aspectRatio: '2 / 3',
                borderRadius: 'var(--radius-sm)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '8px',
                color: '#fff',
                fontFamily: 'var(--font-serif)',
                fontSize: '11px',
                lineHeight: '1.1',
                transition: 'transform 0.3s ease',
                background: posterUrl ? `url(${posterUrl})` : gradients[i],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={(e: any) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e: any) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75))',
              }} />
              <span style={{ position: 'relative', zIndex: 1 }}>
                {f.title}<br />
                <span style={{ fontSize: '10px' }}>
                  {renderStars(f.rating)}
                </span>
              </span>
            </Component>
          );
        })}
      </div>
    </Cell>
  );
}
