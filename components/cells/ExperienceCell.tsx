'use client';

import { useQuery } from '@tanstack/react-query';
import Cell from '../Cell';

interface Experience {
  _id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  description?: string;
  skills?: string[];
  location?: string;
}

export default function ExperienceCell() {
  const { data: experiences = [] } = useQuery<Experience[]>({
    queryKey: ['experience'],
    queryFn: async () => {
      const res = await fetch('/api/experience');
      return res.json();
    },
    staleTime: 3600000, // 1 hour
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const formatDateRange = (start: string, end: string | null) => {
    const startDate = formatDate(start);
    if (!end) return `${startDate} — Present`;
    const endDate = formatDate(end);
    return `${startDate} — ${endDate}`;
  };

  const exp = experiences.map(e => ({
    company: e.company,
    role: e.role,
    dates: formatDateRange(e.startDate, e.endDate),
    current: e.isCurrent || !e.endDate,
  }));

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
