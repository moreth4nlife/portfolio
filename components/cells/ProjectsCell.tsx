'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
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

interface SanityProject {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl?: string;
  caseStudy: string;
  link: string;
  featured: boolean;
  order: number;
}

const DEFAULT_PROJECTS: Project[] = [
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
        body: 'The client needed a scalable analytics platform that could handle millions of data points while maintaining responsive performance.',
      },
    ],
  },
];

export default function ProjectsCell() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { data: sanityProjects = [] } = useQuery<SanityProject[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch('/api/projects');
      return res.json();
    },
    staleTime: 3600000, // 1 hour
  });

  const projects: Project[] = sanityProjects.length > 0
    ? sanityProjects.map((p, idx) => ({
        id: p._id,
        num: String(idx + 1).padStart(2, '0'),
        title: p.title,
        subtitle: p.shortDescription || '',
        year: new Date().getFullYear().toString(),
        role: 'Developer',
        stack: p.technologies || [],
        link: p.link || '#',
        cover: p.imageUrl || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        summary: p.shortDescription || '',
        sections: p.caseStudy ? [{ heading: 'Overview', body: p.caseStudy }] : [],
      }))
    : DEFAULT_PROJECTS;

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
          <div className="projects-grid">
            {projects.map((project) => (
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
