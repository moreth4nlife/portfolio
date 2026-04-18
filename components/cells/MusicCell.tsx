'use client';

import { useQuery } from '@tanstack/react-query';
import Cell from '../Cell';

interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  image: string;
  isPlaying: boolean;
  progress: number;
  duration: number;
}

export default function MusicCell() {
  const { data: track } = useQuery<SpotifyTrack>({
    queryKey: ['spotify'],
    queryFn: async () => {
      const res = await fetch('/api/spotify');
      return res.json();
    },
    staleTime: 60000, // 1 minute
  });

  return (
    <Cell className="cell-music" tilt={true}>
      <div style={{ marginBottom: '14px' }}>
        <div className="label">Now playing · Spotify</div>
      </div>
      <div style={{
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '16px',
        alignItems: 'center',
      }}>
        <div style={{
          width: '84px',
          height: '84px',
          borderRadius: 'var(--radius-md)',
          backgroundImage: track?.image
            ? `url(${track.image})`
            : 'radial-gradient(circle at 30% 30%, #E6C8A8, transparent 55%), radial-gradient(circle at 70% 80%, #7A4A3A, transparent 60%), linear-gradient(135deg, #2A1D18, #4A2E22)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden',
          flex: 'none',
        }} />
        <div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '22px',
            lineHeight: '1.1',
            letterSpacing: '-0.01em',
          }}>
            {track?.name || 'Plastic Love'}
          </div>
          <div style={{
            color: 'var(--ink-soft)',
            fontSize: '13px',
            marginTop: '2px',
          }}>
            {track?.artist || 'Mariya Takeuchi'} · {track?.album || 'Variety'}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '3px',
            height: '16px',
            marginTop: '10px',
          }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                style={{
                  width: '3px',
                  background: 'var(--accent)',
                  animation: `bar 0.9s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.15}s`,
                  borderRadius: '2px',
                  height: '3px',
                }}
              />
            ))}
          </div>
          <div style={{
            marginTop: '12px',
            height: '3px',
            background: 'var(--line-strong)',
            borderRadius: '2px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: `${track ? (track.progress / track.duration) * 100 : 38}%`,
              background: 'var(--ink)',
              borderRadius: '2px',
            }} />
          </div>
        </div>
      </div>
    </Cell>
  );
}
