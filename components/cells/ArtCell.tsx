'use client';

import Cell from '../Cell';

export default function ArtCell() {
  const interests = [
    { word: 'Plants', note: 'monstera, ferns, terracotta pots' },
    { word: 'Cooking', note: 'korean & japanese, mostly' },
    { word: 'Ramen', note: 'tonkotsu over everything' },
    { word: 'Warm light', note: 'amber lamps at dusk' },
    { word: 'Interiors', note: 'raw wood, concrete, cream' },
    { word: 'Architecture', note: 'brutalist & bauhaus' },
    { word: 'K-dramas', note: 'slow-burn over plot twists' },
    { word: 'Cinema', note: 'pta, wes, wong kar-wai' },
    { word: 'Anime', note: 'ghost in the shell, evangelion' },
    { word: 'Vinyl', note: 'city-pop & ambient' },
  ];

  return (
    <Cell className="cell-art" tilt={false}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '20px',
      }}>
        {/* Head Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '24px',
        }}>
          <div className="label">04 — Off-screen</div>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(26px, 2.2vw, 38px)',
            lineHeight: '1.05',
            letterSpacing: '-0.01em',
            textAlign: 'right',
            maxWidth: '55%',
            margin: 0,
          }}>
            Plants, ramen<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>&amp; a neon skyline.</em>
          </h3>
        </div>

        {/* Ticker */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '14px 0',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        }}>
          <div style={{
            display: 'flex',
            width: 'max-content',
            gap: '0',
            animation: 'ticker 50s linear infinite',
          }}>
            {[...interests, ...interests].map((it, i) => (
              <div
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '12px',
                  padding: '0 22px',
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(34px, 3vw, 54px)',
                    letterSpacing: '-0.015em',
                    lineHeight: '1',
                    color: i % 2 === 0 ? 'var(--ink)' : 'var(--accent)',
                    fontStyle: i % 2 === 0 ? 'normal' : 'italic',
                  }}
                >
                  {it.word}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.04em',
                  color: 'var(--ink-mute)',
                  textTransform: 'lowercase',
                }}>
                  {it.note}
                </span>
                <span style={{
                  fontSize: '12px',
                  color: 'var(--line-strong)',
                  marginLeft: '10px',
                }}>
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--ink-mute)',
        }}>
          <span>A — Z</span>
          <span>CULTURAL INTAKE · MMXXVI</span>
          <span>10 ENTRIES</span>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </Cell>
  );
}
