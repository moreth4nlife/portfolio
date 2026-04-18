'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import { useState, useMemo } from 'react';

import HeroCell from '@/components/cells/HeroCell';
import PortraitCell from '@/components/cells/PortraitCell';
import AboutCell from '@/components/cells/AboutCell';
import SkillsCell from '@/components/cells/SkillsCell';
import ClockCell from '@/components/cells/ClockCell';
import ExperienceCell from '@/components/cells/ExperienceCell';
import MusicCell from '@/components/cells/MusicCell';
import MoviesCell from '@/components/cells/MoviesCell';
import ArtCell from '@/components/cells/ArtCell';
import GamingCell from '@/components/cells/GamingCell';
import StillLifeCell from '@/components/cells/StillLifeCell';
import ProjectsCell from '@/components/cells/ProjectsCell';
import ContactCell from '@/components/cells/ContactCell';

export default function Home() {
  const { palette, toggleTheme } = useTheme();
  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60000,
          gcTime: 300000,
        },
      },
    })
  );

  const isDark = palette === 'dusk';

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '40px 32px 80px',
      }}>
        {/* Topbar */}
        <motion.div
          className="topbar"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="brand">
            <span className="dot" />
            MARCOS ALVES · PORTFOLIO
          </div>
          <div className="status">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light' : 'Switch to dark'}
              title={isDark ? 'Switch to light' : 'Switch to dark'}
              style={{
                background: 'none',
                border: 'none',
                padding: '0',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <span
                className="theme-toggle-track"
                data-dark={isDark}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  width: '40px',
                  height: '22px',
                  background: 'var(--bg-raised)',
                  border: '1px solid var(--line-strong)',
                  borderRadius: '999px',
                  transition: 'background 0.3s ease, border-color 0.3s ease',
                  padding: '2px',
                }}
              >
                <span
                  className="theme-toggle-thumb"
                  style={{
                    position: 'relative',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: isDark ? 'var(--accent)' : 'var(--ink)',
                    color: isDark ? 'var(--bg)' : 'var(--bg-raised)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'margin-left 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.3s ease, color 0.3s ease',
                    marginLeft: isDark ? 'auto' : '0',
                  }}
                >
                  {isDark ? (
                    <svg viewBox="0 0 16 16" width="10" height="10" style={{ color: 'inherit' }}>
                      <path fill="currentColor" d="M6.5 1.5a6.5 6.5 0 1 0 8 8 5.5 5.5 0 0 1-8-8z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" width="10" height="10" style={{ color: 'inherit' }}>
                      <circle cx="8" cy="8" r="3" fill="currentColor" />
                      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
                        <path d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.3 3.3l1.1 1.1M11.6 11.6l1.1 1.1M3.3 12.7l1.1-1.1M11.6 4.4l1.1-1.1" />
                      </g>
                    </svg>
                  )}
                </span>
              </span>
            </button>
            <span className="pulse" />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.04em',
              color: 'var(--ink-mute)',
              textTransform: 'uppercase',
            }}>
              AVAILABLE · PORTO
            </span>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento">
          <HeroCell />
          <PortraitCell />
          <AboutCell />
          <SkillsCell />
          <ClockCell />
          <ExperienceCell />
          <MusicCell />
          <MoviesCell />
          <ArtCell />
          <GamingCell />
          <StillLifeCell />
          <ProjectsCell />
          <ContactCell />
        </div>

        {/* Footer */}
        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '32px 0',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: 'var(--ink-mute)',
            borderTop: '1px solid var(--line)',
          }}
        >
          <span>© MMXXVI · MARCOS ALVES</span>
          <span>DESIGNED &amp; BUILT BY HAND</span>
          <span>PORTO — LAT 41.15° N</span>
        </motion.footer>
      </div>
    </QueryClientProvider>
  );
}
