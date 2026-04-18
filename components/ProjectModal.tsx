'use client';

import { useEffect } from 'react';

interface ProjectSection {
  heading: string;
  body: string;
}

interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  stack: string[];
  link: string;
  cover: string;
  summary: string;
  sections: ProjectSection[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(20, 10, 8, 0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '5vh 4vw',
        overflowY: 'auto',
        animation: 'backdrop-in 0.3s ease',
      }}
    >
      <article
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label={project.title}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '960px',
          background: 'var(--bg-raised)',
          border: '1px solid var(--line-strong)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          overflow: 'hidden',
          animation: 'modal-in 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        {/* Header */}
        <header
          className="project-modal-head"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 32px',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div
            className="label"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10.5px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--ink-mute)',
            }}
          >
            PRJ / {project.num} · {project.year}
          </div>
          <button
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--ink-mute)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--ink)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--ink-mute)';
            }}
          >
            <svg viewBox="0 0 20 20" width="18" height="18">
              <path
                d="M4 4 L16 16 M16 4 L4 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>

        {/* Hero image */}
        <div
          className={`project-hero cover-${project.cover}`}
          style={{
            height: '320px',
            background: 'linear-gradient(135deg, #D8572A, #6B4A28)',
          }}
        />

        {/* Body */}
        <div
          className="project-modal-body"
          style={{
            padding: '48px',
            maxWidth: '700px',
          }}
        >
          <h2
            className="project-modal-title"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: '1.05',
              letterSpacing: '-0.01em',
              color: 'var(--ink)',
              marginBottom: '16px',
            }}
          >
            {project.title}
          </h2>

          <p
            className="project-modal-lede"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '16px',
              lineHeight: '1.6',
              color: 'var(--ink-soft)',
              marginBottom: '32px',
            }}
          >
            {project.summary}
          </p>

          {/* Meta grid */}
          <div
            className="project-meta-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              marginBottom: '48px',
              paddingBottom: '24px',
              borderBottom: '1px solid var(--line)',
            }}
          >
            <div>
              <div className="label" style={{ marginBottom: '6px' }}>
                Role
              </div>
              <span style={{ fontSize: '15px', color: 'var(--ink)' }}>
                {project.role}
              </span>
            </div>
            <div>
              <div className="label" style={{ marginBottom: '6px' }}>
                Year
              </div>
              <span style={{ fontSize: '15px', color: 'var(--ink)' }}>
                {project.year}
              </span>
            </div>
            <div>
              <div className="label" style={{ marginBottom: '6px' }}>
                Stack
              </div>
              <span style={{ fontSize: '15px', color: 'var(--ink)' }}>
                {project.stack.join(' · ')}
              </span>
            </div>
            <div>
              <div className="label" style={{ marginBottom: '6px' }}>
                Link
              </div>
              <span style={{ fontSize: '15px' }}>
                {project.link && project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = '0.7';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = '1';
                    }}
                  >
                    Visit ↗
                  </a>
                ) : (
                  <span style={{ color: 'var(--ink-mute)' }}>—</span>
                )}
              </span>
            </div>
          </div>

          {/* Sections */}
          <div className="project-sections">
            {project.sections.map((s, i) => (
              <section
                key={i}
                style={{
                  marginBottom: i < project.sections.length - 1 ? '32px' : '0',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px',
                    fontWeight: 'normal',
                    letterSpacing: '-0.01em',
                    color: 'var(--ink)',
                    marginBottom: '8px',
                  }}
                >
                  {s.heading}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: 'var(--ink-soft)',
                  }}
                >
                  {s.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </article>

      <style>{`
        @keyframes backdrop-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
