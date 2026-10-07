import { useTranslation } from 'react-i18next'
import { professionalExperiences, type ProfessionalExperience } from '../../data/experience'
import { CertificatesSection } from '../certificates/CertificatesSection'
import { ScrollToTopButton } from '../ui/ScrollToTopButton'
import { ExperienceTimelineItem } from './ExperienceTimelineItem'
import './experience.css'

interface ExperienceSectionProps {
  animationsDisabled: boolean
}

function findContinuationExperience(experience: ProfessionalExperience) {
  if (experience.track !== 'parallel') {
    return undefined
  }

  return professionalExperiences.find(
    (candidate) =>
      candidate.track === 'main' &&
      candidate.startDate <= experience.startDate &&
      candidate.endDate > experience.endDate,
  )
}

function continuesThroughNextExperience(
  experience: ProfessionalExperience,
  nextExperience: ProfessionalExperience | undefined,
) {
  if (!nextExperience || nextExperience.track !== 'parallel') {
    return false
  }

  return (
    experience.startDate <= nextExperience.startDate && experience.endDate > nextExperience.endDate
  )
}

export function ExperienceSection({ animationsDisabled }: ExperienceSectionProps) {
  const { t } = useTranslation()

  return (
    <>
      <section className="experience-section" aria-labelledby="experience-title">
        <header className="experience-section__header">
          <h1 id="experience-title" className="experience-section__title">
            {t('experience.title')}
          </h1>

          <p className="experience-section__introduction">{t('experience.introduction')}</p>
        </header>

        <div className="experience-timeline">
          {professionalExperiences.map((experience, index) => {
            const nextExperience = professionalExperiences[index + 1]

            const continuationExperience = findContinuationExperience(experience)

            const showEndDate = !continuesThroughNextExperience(experience, nextExperience)

            return (
              <ExperienceTimelineItem
                key={experience.id}
                experience={experience}
                continuationExperience={continuationExperience}
                showEndDate={showEndDate}
                index={index}
                animationsDisabled={animationsDisabled}
              />
            )
          })}
        </div>
      </section>

      <CertificatesSection animationsDisabled={animationsDisabled} />

      <ScrollToTopButton label={t('common.backToTop')} animationsDisabled={animationsDisabled} />
    </>
  )
}
