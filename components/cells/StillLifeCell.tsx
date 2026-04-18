'use client';

import Cell from '../Cell';

export default function StillLifeCell() {
  const shots = [
    { id: 'plants', label: 'Ficus · 16:00' },
    { id: 'ramen', label: 'Tonkotsu · evening' },
    { id: 'light', label: 'Amber lamp · 21:30' },
    { id: 'vinyl', label: 'Record store · Porto' },
    { id: 'arch', label: 'Concrete niche' },
  ];

  const ShotGradient = ({ id }: { id: string }) => {
    switch (id) {
      case 'plants':
        return (
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="plants-grad1" cx="30%" cy="70%">
                <stop offset="0%" stopColor="rgba(90, 122, 62, 0.95)" />
                <stop offset="60%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="plants-grad2" cx="75%" cy="35%">
                <stop offset="0%" stopColor="rgba(168, 188, 120, 0.5)" />
                <stop offset="55%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#plants-grad1)" />
            <rect width="100%" height="100%" fill="url(#plants-grad2)" />
            <rect width="100%" height="100%" fill="linear-gradient(170deg, #2A3A1E 0%, #1A2612 100%)" />
          </svg>
        );
      case 'ramen':
        return (
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="ramen-grad" cx="50%" cy="55%">
                <stop offset="0%" stopColor="#E8A04A" />
                <stop offset="30%" stopColor="#D97A2E" />
                <stop offset="60%" stopColor="#8A3A14" />
                <stop offset="100%" stopColor="#3A1A08" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#ramen-grad)" />
            <circle cx="50%" cy="55%" r="25%" fill="url(#ramen-grad2)" opacity="0.8" />
          </svg>
        );
      case 'light':
        return (
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="light-grad" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#FFD9A0" />
                <stop offset="25%" stopColor="#E8833A" />
                <stop offset="55%" stopColor="#8A3A14" />
                <stop offset="100%" stopColor="#1A0A08" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#light-grad)" />
          </svg>
        );
      case 'vinyl':
        return (
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="vinyl-grad" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#2A1F14" />
                <stop offset="100%" stopColor="#0E0806" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#vinyl-grad)" />
            <circle cx="50%" cy="50%" r="20%" fill="none" stroke="rgba(230, 180, 120, 0.2)" strokeWidth="2" />
            <circle cx="50%" cy="50%" r="10%" fill="#C45A2C" />
          </svg>
        );
      case 'arch':
        return (
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
            <rect width="100%" height="100%" fill="linear-gradient(160deg, #D4C8A8 0%, #8A7A58 55%, #3E3224 100%)" />
            <rect x="15%" y="20%" width="35%" height="55%" fill="rgba(26, 18, 12, 0.55)" />
            <rect x="60%" y="10%" width="28%" height="78%" fill="rgba(60, 90, 50, 0.85)" rx="4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Cell className="cell-stilllife" tilt={false}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="label">08 — Still life</div>
          <span className="label" style={{ color: 'var(--ink-soft)', fontSize: '10px' }}>shot on iphone · porto</span>
        </div>
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '12px',
          minHeight: 0,
        }}>
          {shots.map((s) => (
            <figure
              key={s.id}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  flex: 1,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <ShotGradient id={s.id} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.45))',
                }} />
              </div>
              <figcaption style={{
                position: 'absolute',
                left: '10px',
                bottom: '10px',
                zIndex: 2,
                fontFamily: 'var(--font-mono)',
                fontSize: '9.5px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255, 245, 225, 0.95)',
              }}>
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Cell>
  );
}
