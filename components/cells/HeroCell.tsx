'use client';

import Cell from '../Cell';

export default function HeroCell() {
  return (
    <Cell className="cell-hero" tilt={true}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <div className="label">Portfolio · MMXXVI</div>
        </div>
        <div>
          <h1 style={{
            fontSize: 'clamp(48px, 6.2vw, 96px)',
            lineHeight: '0.98',
            letterSpacing: '-0.025em',
            fontFamily: 'var(--font-serif)',
          }}>
            Frontend<br />
            engineer with a<br />
            sense for <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>feel</em>.
          </h1>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '24px',
        }}>
          <span style={{
            maxWidth: '34ch',
            color: 'var(--ink-soft)',
            fontSize: '15px',
            lineHeight: '1.55',
            fontFamily: 'var(--font-sans)',
            textTransform: 'none',
            letterSpacing: 0,
          }}>
            Building interfaces where typography, motion and restraint do the heavy lifting.
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--ink-mute)',
            whiteSpace: 'nowrap',
          }}>
            ↓ scroll
          </span>
        </div>
      </div>
    </Cell>
  );
}
