import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import type { Project } from '../../data/projects'
import { useModalLifecycle } from '../../hooks/useModalLifecycle'
import { getTranslatedStringList } from '../../utils/translation'
import { ProjectLinks } from './ProjectLinks'

interface ProjectModalProps {
  project: Project | null
  animationsDisabled: boolean
  onClose: () => void
}

export function ProjectModal({ project, animationsDisabled, onClose }: ProjectModalProps) {
  const { t } = useTranslation()
  const [activeImage, setActiveImage] = useState(0)
  const closeButtonReference = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  useModalLifecycle({
    open: project !== null,
    onClose,
    initialFocusReference: closeButtonReference,
  })

  const imageCount = project?.images.length ?? 0

  useEffect(() => {
    if (!project || imageCount <= 1) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveImage((current) => (current - 1 + imageCount) % imageCount)
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveImage((current) => (current + 1) % imageCount)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [imageCount, project])

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + imageCount) % imageCount)
  }

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % imageCount)
  }

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          className="project-modal"
          initial={animationsDisabled ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: animationsDisabled ? 0 : 0.22,
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose()
            }
          }}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="project-modal__panel"
            initial={
              animationsDisabled
                ? false
                : {
                    opacity: 0,
                    y: 28,
                    scale: 0.975,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 18,
              scale: 0.985,
            }}
            transition={{
              duration: animationsDisabled ? 0 : 0.34,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              ref={closeButtonReference}
              type="button"
              onClick={onClose}
              aria-label={t('common.close')}
              className="project-modal__close"
            >
              <X aria-hidden="true" className="size-5" />
            </button>

            <div className="project-modal__gallery">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={activeImage}
                  src={project.images[activeImage]}
                  alt={t('common.image', {
                    current: activeImage + 1,
                    total: imageCount,
                  })}
                  className="project-modal__image"
                  initial={animationsDisabled ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: animationsDisabled ? 0 : 0.2,
                  }}
                />
              </AnimatePresence>

              {imageCount > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    aria-label={t('common.previous')}
                    className="project-modal__gallery-button project-modal__gallery-button--previous"
                  >
                    <ChevronLeft aria-hidden="true" className="size-5" />
                  </button>

                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label={t('common.next')}
                    className="project-modal__gallery-button project-modal__gallery-button--next"
                  >
                    <ChevronRight aria-hidden="true" className="size-5" />
                  </button>

                  <div className="project-modal__dots">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={t('common.image', {
                          current: index + 1,
                          total: imageCount,
                        })}
                        aria-current={activeImage === index ? 'true' : undefined}
                        onClick={() => setActiveImage(index)}
                        className="project-modal__dot"
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="project-modal__content">
              <span className="project-modal__role">
                {t(`projects.${project.translationKey}.role`)}
              </span>

              <h2 id={titleId} className="project-modal__title">
                {t(`projects.${project.translationKey}.name`)}
              </h2>

              <p className="project-modal__description">
                {t(`projects.${project.translationKey}.description`)}
              </p>

              <dl className="project-modal__details">
                <div>
                  <dt>{t('projects.context')}</dt>
                  <dd>{t(`projects.${project.translationKey}.context`)}</dd>
                </div>
              </dl>

              <div className="project-modal__section">
                <h3>{t('projects.contributions')}</h3>
                <ul>
                  {getTranslatedStringList(
                    t(`projects.${project.translationKey}.contributions`, {
                      returnObjects: true,
                    }),
                  ).map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </div>

              <div className="project-modal__section">
                <h3>{t('projects.technologies')}</h3>

                <div className="project-modal__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <ProjectLinks links={project.links} />
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
