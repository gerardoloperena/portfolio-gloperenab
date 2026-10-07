import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
  animationsDisabled: boolean
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, index, animationsDisabled, onOpen }: ProjectCardProps) {
  const { t } = useTranslation()

  const translationBase = `projects.${project.translationKey}`

  const projectName = t(`${translationBase}.name`)

  return (
    <motion.article
      initial={
        animationsDisabled
          ? false
          : {
              opacity: 0,
              y: 22,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: animationsDisabled ? 0 : 0.5,
        delay: animationsDisabled ? 0 : index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
      style={
        {
          '--project-accent': project.accent,
        } as CSSProperties
      }
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={t('common.openProject', {
          project: projectName,
        })}
        className="project-card group"
      >
        <span className="project-card__surface" />

        <span className="project-card__content">
          <span className="project-card__media">
            <img
              src={project.images[0]}
              alt=""
              loading="lazy"
              decoding="async"
              className="project-card__image"
            />
          </span>

          <span className="project-card__body">
            <span className="project-card__heading">
              <span>
                <span className="project-card__role">{t(`${translationBase}.role`)}</span>

                <span className="project-card__title">{projectName}</span>
              </span>

              <span className="project-card__arrow">
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </span>
            </span>

            <span className="project-card__technologies">
              {project.technologies.map((technology) => (
                <span key={technology} className="project-card__badge">
                  {technology}
                </span>
              ))}
            </span>
          </span>
        </span>
      </button>
    </motion.article>
  )
}
