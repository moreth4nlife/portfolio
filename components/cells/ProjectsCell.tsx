'use client';

import { useState } from 'react';
import Cell from '../Cell';
import ProjectModal from '../ProjectModal';

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

const PROJECTS: Project[] = [
  {
    id: 'project-01',
    num: '01',
    title: 'Orion Dashboard',
    subtitle: 'Analytics Platform',
    year: '2024',
    role: 'Lead Frontend Engineer',
    stack: ['React', 'TypeScript', 'Tailwind', 'D3.js'],
    link: 'https://example.com/orion',
    cover: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    summary: 'A comprehensive analytics dashboard for real-time data visualization and business intelligence.',
    sections: [
      {
        heading: 'Challenge',
        body: 'The client needed a scalable analytics platform that could handle millions of data points while maintaining responsive performance. The previous system suffered from slow load times and limited interactivity.',
      },
      {
        heading: 'Solution',
        body: 'Built a modern React application with server-side rendering for optimal performance. Implemented virtualization for large datasets and integrated D3.js for complex data visualizations. Added real-time WebSocket updates for live dashboard data.',
      },
      {
        heading: 'Result',
        body: 'Reduced initial load time by 60% and improved data rendering performance by 80%. The platform now handles 10M+ data points without degradation. Client adoption increased by 40% within the first month.',
      },
    ],
  },
  {
    id: 'project-02',
    num: '02',
    title: 'Flux Mobile App',
    subtitle: 'Social Commerce',
    year: '2023',
    role: 'Full Stack Developer',
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'],
    link: 'https://example.com/flux',
    cover: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    summary: 'A social commerce mobile application connecting creators with consumers through live shopping experiences.',
    sections: [
      {
        heading: 'Challenge',
        body: 'Creating a seamless experience for live shopping events with real-time inventory sync, payment processing, and social features across iOS and Android.',
      },
      {
        heading: 'Solution',
        body: 'Developed a cross-platform mobile application using React Native with native modules for camera and payment integrations. Built real-time infrastructure using Node.js and WebSockets for live event management.',
      },
      {
        heading: 'Result',
        body: 'Launched to 50K+ users with 90% retention rate. Processed $2M+ in transactions in the first quarter. Featured in App Store and Google Play Store.',
      },
    ],
  },
  {
    id: 'project-03',
    num: '03',
    title: 'Zenith Design System',
    subtitle: 'Enterprise Component Library',
    year: '2023',
    role: 'Design System Lead',
    stack: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'],
    link: 'https://example.com/zenith',
    cover: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    summary: 'A comprehensive design system and component library serving 15+ internal products at enterprise scale.',
    sections: [
      {
        heading: 'Challenge',
        body: 'Multiple product teams were building inconsistent UIs with duplicated code. There was no single source of truth for design tokens or components, leading to maintenance nightmares.',
      },
      {
        heading: 'Solution',
        body: 'Created a centralized design system with 50+ production-ready components. Implemented design tokens, accessibility standards (WCAG 2.1), and comprehensive documentation with Storybook.',
      },
      {
        heading: 'Result',
        body: 'Reduced component development time by 70% across teams. Improved accessibility compliance to 100%. Adopted by 15+ products, eliminating 40+ hours of duplicate work monthly.',
      },
    ],
  },
];

export default function ProjectsCell() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Cell className="cell-projects" tilt={true}>
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="label">06 — Projects</div>
            <div className="label">SELECT</div>
          </div>
          <div style={{
            marginTop: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
          }}>
            {PROJECTS.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                style={{
                  border: '1px solid var(--accent)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: 'var(--ink)',
                  background: 'none',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--ink)';
                  e.currentTarget.style.color = 'var(--ink)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--ink)';
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10.5px',
                  letterSpacing: '0.1em',
                  color: 'var(--ink-mute)',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}>
                  PRJ / {project.num}
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '17px',
                  color: 'var(--ink-soft)',
                  lineHeight: '1.2',
                }}>
                  {project.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </Cell>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
