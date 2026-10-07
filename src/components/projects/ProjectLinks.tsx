import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { ProjectLink } from '../../data/projects'

interface ProjectLinksProps {
  links: readonly ProjectLink[]
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  const { t } = useTranslation()

  if (links.length === 0) {
    return null
  }

  return (
    <section className="project-modal__section project-modal__links-section">
      <h3>{t('projects.links.title')}</h3>

      <div className="project-modal__links">
        {links.map(({ labelTranslationKey, href }, index) => (
          <a
            key={`${href}-${index}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal__link"
          >
            <span>{t(labelTranslationKey)}</span>

            <ExternalLink aria-hidden="true" className="size-4" strokeWidth={1.8} />
          </a>
        ))}
      </div>
    </section>
  )
}
