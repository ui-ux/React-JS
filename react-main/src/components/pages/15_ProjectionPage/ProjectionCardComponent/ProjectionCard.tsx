import type { ReactNode } from 'react'
import './ProjectionCard.css'

type ProjectionCardProps = {
  title?: ReactNode
  children?: ReactNode
  actions?: ReactNode
}

function ProjectionCard({
  title = 'Default card title',
  children = <p>No content provided.</p>,
  actions,
}: ProjectionCardProps) {
  return (
    <article className="card">
      <header>{title}</header>

      <div className="card-content">{children}</div>

      {actions && <footer>{actions}</footer>}
    </article>
  )
}

export default ProjectionCard
