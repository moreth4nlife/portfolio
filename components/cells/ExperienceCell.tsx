'use client';

import Cell from '../Cell';

export default function ExperienceCell() {
  const exp = [
    { company: '25Friday', role: 'Frontend Engineer', dates: '2025 — Present', current: true },
    { company: 'Mercedes-Benz.io', role: 'Frontend Engineer', dates: 'Aug 2022 — Nov 2025' },
    { company: 'Losch Digital Lab', role: 'Frontend Developer', dates: 'Jun 2019 — Jul 2022' },
    { company: 'Bodum', role: 'Web Developer', dates: 'Aug 2018 — Jun 2019' },
  ];

  return (
    <Cell className="cell-experience" tilt={true}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="label">03 — Experience</div>
        <div className="label" style={{ fontFamily: 'var(--font-mono)' }}>7 YRS</div>
      </div>
      <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column' }}>
        {exp.map((e, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              alignItems: 'baseline',
              gap: '16px',
              padding: '14px 0',
              borderTop: '1px solid var(--line)',
              cursor: 'default',
              transition: 'padding 0.3s ease',
            }}
            onMouseEnter={(el) => {
              if (el.currentTarget) el.currentTarget.style.paddingLeft = '6px';
            }}
            onMouseLeave={(el) => {
              if (el.currentTarget) el.currentTarget.style.paddingLeft = '0';
            }}
          >
            <div>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                letterSpacing: '-0.01em',
                position: 'relative',
              }}>
                {e.company}
                {e.current && (
                  <span style={{
                    display: 'inline-block',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#3CB371',
                    marginLeft: '10px',
                    verticalAlign: 'middle',
                    animation: 'pulse 2.2s ease-out infinite',
                  }} />
                )}
              </div>
              <div style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '12.5px',
                color: 'var(--ink-mute)',
                marginTop: '2px',
                letterSpacing: '0',
              }}>
                {e.role}
              </div>
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--ink-mute)',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}>
              {e.dates}
            </span>
          </div>
        ))}
      </div>
    </Cell>
  );
}
