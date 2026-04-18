'use client';

import { useState, useEffect } from 'react';
import Cell from '../Cell';

export default function ClockCell() {
  const [time, setTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set initial time
    const updateTime = () => {
      const fmt = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Europe/Lisbon',
      });
      setTime(fmt.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (!mounted || !time) {
    return (
      <Cell className="cell-clock" tilt={true}>
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div className="label">Now</div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              letterSpacing: '-0.02em',
              lineHeight: '1',
              marginTop: '12px',
            }}>--:--</div>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10.5px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-mute)',
            }}>Porto · 41°N</div>
            <div style={{
              marginTop: '4px',
              color: 'var(--ink-soft)',
              fontSize: '13px',
            }}>Overcast · 16°C</div>
          </div>
        </div>
      </Cell>
    );
  }

  return (
    <Cell className="cell-clock" tilt={true}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <div className="label">Now</div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontVariantNumeric: 'tabular-nums',
            letterSpacing: '-0.02em',
            lineHeight: '1',
            marginTop: '12px',
          }}>
            {time}
          </div>
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10.5px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink-mute)',
          }}>Porto · 41°N</div>
          <div style={{
            marginTop: '4px',
            color: 'var(--ink-soft)',
            fontSize: '13px',
          }}>Overcast · 16°C</div>
        </div>
      </div>
    </Cell>
  );
}
