'use client';

import Cell from '../Cell';

export default function ContactCell() {
  const links = [
    { label: 'Email', value: 'marcosalves.work@gmail.com', href: 'mailto:marcosalves.work@gmail.com' },
    { label: 'LinkedIn', value: 'marcosalvesdesign', href: 'https://www.linkedin.com/in/marcosalvesdesign/' },
    { label: 'Instagram', value: '@marcosesalves', href: 'https://instagram.com/marcosesalves' },
  ];

  return (
    <Cell className="cell-contact" tilt={true}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <div className="label">07 — Get in touch</div>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 2.6vw, 42px)',
            marginTop: '14px',
            lineHeight: '1.04',
            margin: 0,
          }}>
            Let's <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>make</em> something.
          </h3>
        </div>
        <div style={{
          marginTop: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderTop: '1px solid var(--line)',
                color: 'var(--ink)',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'padding 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.paddingLeft = '6px';
                e.currentTarget.style.color = 'var(--accent)';
                const arrow = e.currentTarget.querySelector('[data-arrow]') as HTMLElement;
                if (arrow) arrow.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.paddingLeft = '0';
                e.currentTarget.style.color = 'var(--ink)';
                const arrow = e.currentTarget.querySelector('[data-arrow]') as HTMLElement;
                if (arrow) arrow.style.transform = 'translateX(0)';
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  color: 'var(--ink-mute)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginRight: '10px',
                }}>
                  {l.label}
                </span>
                {l.value}
              </span>
              <span
                data-arrow
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  transition: 'transform 0.3s ease',
                }}
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </Cell>
  );
}
