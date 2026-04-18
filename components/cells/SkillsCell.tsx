'use client';

import Cell from '../Cell';

export default function SkillsCell() {
  const primary = ['React', 'TypeScript', 'Next.js', 'CSS'];
  const secondary = ['Framer Motion', 'Vue', 'Tailwind', 'Node', 'Figma', 'GSAP', 'Svelte'];

  return (
    <Cell className="cell-skills" tilt={true}>
      <div className="label">02 — Stack</div>
      <div
        style={{
          marginTop: '14px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
        }}
      >
        {primary.map((s) => (
          <span
            key={s}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              padding: '5px 10px',
              border: '1px solid var(--ink)',
              borderRadius: '999px',
              background: 'var(--ink)',
              color: 'var(--bg)',
            }}
          >
            {s}
          </span>
        ))}
        {secondary.map((s) => (
          <span
            key={s}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              padding: '5px 10px',
              border: '1px solid var(--line-strong)',
              borderRadius: '999px',
              color: 'var(--ink-soft)',
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </Cell>
  );
}
