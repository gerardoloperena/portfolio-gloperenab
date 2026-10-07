import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { projects, type Project } from '../../data/projects'
import { ScrollToTopButton } from '../ui/ScrollToTopButton'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import './projects.css'

interface ProjectsSectionProps {
  animationsDisabled: boolean
}

export function ProjectsSection({ animationsDisabled }: ProjectsSectionProps) {
  const { t } = useTranslation()

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const closeProject = useCallback(() => {
    setSelectedProject(null)
  }, [])

  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <header className="projects-section__header">
        <h1 id="projects-title" className="projects-section__title">
          {t('projects.title')}
        </h1>

        <p className="projects-section__introduction">{t('projects.introduction')}</p>
      </header>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            animationsDisabled={animationsDisabled}
            onOpen={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        key={selectedProject?.id ?? 'closed'}
        project={selectedProject}
        animationsDisabled={animationsDisabled}
        onClose={closeProject}
      />

      <ScrollToTopButton label={t('common.backToTop')} animationsDisabled={animationsDisabled} />
    </section>
  )
}
