'use client';

import Cell from '../Cell';

export default function GamingCell() {
  const games = [
    { name: 'Valorant', ico: 'ico-val', hours: 'RANKED' },
    { name: 'CS2', ico: 'ico-cs', hours: 'FPS' },
    { name: 'Clash Royale', ico: 'ico-cr', hours: 'MOBILE' },
    { name: 'EA FC 26', ico: 'ico-fc', hours: 'FOOTY' },
    { name: 'Diablo IV', ico: 'ico-d4', hours: 'ARPG' },
    { name: 'Baldur\'s Gate 3', ico: 'ico-bg', hours: 'CRPG' },
    { name: 'Fortnite', ico: 'ico-fn', hours: 'BR' },
  ];

  const iconGradients: { [key: string]: string } = {
    'ico-cr': 'linear-gradient(135deg, #FFD34F, #D28E1C)',
    'ico-val': 'linear-gradient(135deg, #FF4655, #711a23)',
    'ico-cs': 'linear-gradient(135deg, #C0A24C, #3a2c12)',
    'ico-d4': 'linear-gradient(135deg, #6b0a0a, #1a0404)',
    'ico-bg': 'linear-gradient(135deg, #8a2b1a, #2b0a04)',
    'ico-fn': 'linear-gradient(135deg, #7c3aed, #1b0a3a)',
    'ico-fc': 'linear-gradient(135deg, #0FAE56, #053a1c)',
  };

  return (
    <Cell className="cell-gaming" tilt={true}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <div className="label">05 — Rotation</div>
        </div>
        <div style={{
          marginTop: '14px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px 18px',
        }}>
          {games.map((g) => (
            <div
              key={g.name}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '8px 0',
                borderBottom: '1px solid var(--line)',
                fontSize: '13.5px',
              }}
            >
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--ink)',
              }}>
                <span
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    flexShrink: 0,
                    background: iconGradients[g.ico] || 'var(--accent)',
                  }}
                />
                {g.name}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10.5px',
                color: 'var(--ink-mute)',
                letterSpacing: '0.04em',
              }}>
                {g.hours}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Cell>
  );
}
