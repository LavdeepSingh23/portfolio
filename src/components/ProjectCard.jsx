export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* TODO: Tech stack pills, 3-4 bullet stats, GitHub link */}
      <p style={{ color: 'var(--color-text-secondary)' }}>{project?.title || 'Project Card'}</p>
    </div>
  )
}
