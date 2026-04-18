'use client';

import Cell from '../Cell';

export default function AboutCell() {
  return (
    <Cell className="cell-about" tilt={true}>
      <div className="label">01 — About</div>
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(22px, 2vw, 30px)',
        lineHeight: '1.25',
        letterSpacing: '-0.01em',
        marginTop: '14px',
        color: 'var(--ink)',
        textWrap: 'pretty',
      }}>
        Twenty-nine, from <span style={{ color: 'var(--ink-mute)' }}>Porto</span>. In software since 2018,
        mostly on the front end — where code meets composition, rhythm and restraint.
        Off-screen: <span style={{ color: 'var(--ink-mute)' }}>art, history, competitive gaming, music</span>.
      </p>
    </Cell>
  );
}
