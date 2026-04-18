'use client';

import Cell from '../Cell';

export default function PortraitCell() {
  return (
    <Cell className="cell-portrait" tilt={true}>
      <svg
        className="portrait-svg"
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      >
        <defs>
          <linearGradient id="pgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8833A" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#C45A2C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3A1F12" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="glow" cx="0.3" cy="0.25" r="0.7">
            <stop offset="0%" stopColor="#FFD9A0" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#FFD9A0" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="300" height="400" fill="url(#pgrad)" />
        <rect width="300" height="400" fill="url(#glow)" />
        <g fill="#1A0E08" opacity="0.78">
          <ellipse cx="150" cy="160" rx="48" ry="56" />
          <path d="M70 400 L70 290 C70 245 105 225 150 225 C195 225 230 245 230 290 L230 400 Z" />
        </g>
        <g fill="#1E3325" opacity="0.55">
          <path d="M20 400 C30 330 10 300 25 270 C40 300 55 330 50 400 Z" />
          <path d="M270 400 C285 340 265 310 280 280 C295 310 310 340 300 400 Z" />
        </g>
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '22px',
          zIndex: 2,
        }}
      >
        <span
          style={{
            backdropFilter: 'blur(6px)',
            background: 'rgba(245, 236, 216, 0.85)',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink-mute)',
            background: 'var(--bg-raised)',
            padding: '6px 10px',
            borderRadius: '999px',
            alignSelf: 'flex-start',
            border: '1px solid var(--line)',
            width: 'fit-content',
          }}
        >
          Porto · PT
        </span>
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 3vw, 40px)',
            lineHeight: '1',
            color: 'var(--ink)',
            alignSelf: 'flex-end',
            textAlign: 'right',
            textShadow: '0 1px 18px rgba(0,0,0,0.4)',
          }}
        >
          Marcos<br />Alves
          <small style={{
            display: 'block',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: 'rgba(245, 236, 216, 0.7)',
            textTransform: 'uppercase',
            marginTop: '8px',
          }}>
            b. 1996
          </small>
        </div>
      </div>
    </Cell>
  );
}
