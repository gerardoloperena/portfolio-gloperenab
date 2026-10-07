import { motion } from 'motion/react'
import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import type { ProfessionalExperience } from '../../data/experience'
import { getTranslatedStringList } from '../../utils/translation'
import { ExperienceCompanyIcon } from './ExperienceCompanyIcon'

interface ExperienceTimelineItemProps {
  experience: ProfessionalExperience
  continuationExperience?: ProfessionalExperience
  showEndDate: boolean
  index: number
  animationsDisabled: boolean
}

interface ExperienceItemStyles extends CSSProperties {
  '--experience-accent': string
  '--continuing-accent'?: string
}

function formatMonthYear(value: string, language: string) {
  const [year, month] = value.split('-').map(Number)

  const date = new Date(Date.UTC(year, month - 1, 1))

  return new Intl.DateTimeFormat(language, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

export function ExperienceTimelineItem({
  experience,
  continuationExperience,
  showEndDate,
  index,
  animationsDisabled,
}: ExperienceTimelineItemProps) {
  const { t, i18n } = useTranslation()

  const translationBase = `experience.items.${experience.translationKey}`

  const language = i18n.resolvedLanguage ?? i18n.language ?? 'es'

  const startDate = formatMonthYear(experience.startDate, language)

  const endDate = formatMonthYear(experience.endDate, language)

  const continuationEndDate = continuationExperience
    ? formatMonthYear(continuationExperience.endDate, language)
    : null

  const highlights = getTranslatedStringList(
    t(`${translationBase}.highlights`, {
      returnObjects: true,
    }),
  )

  const styles = {
    '--experience-accent': experience.accent,
    ...(continuationExperience
      ? {
          '--continuing-accent': continuationExperience.accent,
        }
      : {}),
  } as ExperienceItemStyles

  return (
    <motion.article
      tabIndex={0}
      className="experience-timeline__item"
      data-track={experience.track}
      data-continues={showEndDate ? undefined : 'true'}
      style={styles}
      initial={
        animationsDisabled
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: animationsDisabled ? 0 : 0.5,
        delay: animationsDisabled ? 0 : index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="experience-timeline__rail">
        {continuationExperience && continuationEndDate && (
          <>
            <span aria-hidden="true" className="experience-timeline__continuation-line" />

            <time
              dateTime={continuationExperience.endDate}
              className="experience-timeline__continuation-date"
            >
              {continuationEndDate}
            </time>
          </>
        )}

        <time
          dateTime={experience.startDate}
          className="experience-timeline__date experience-timeline__date--start"
        >
          {startDate}
        </time>

        <span aria-hidden="true" className="experience-timeline__marker" />

        <span aria-hidden="true" className="experience-timeline__line" />

        {showEndDate && (
          <time
            dateTime={experience.endDate}
            className="experience-timeline__date experience-timeline__date--end"
          >
            {endDate}
          </time>
        )}
      </div>

      <div className="experience-timeline__content">
        <p className="experience-timeline__mobile-period">
          <time dateTime={experience.startDate}>{startDate}</time>

          <span aria-hidden="true">—</span>

          <time dateTime={experience.endDate}>{endDate}</time>
        </p>

        <div className="experience-timeline__heading">
          <a
            className="experience-timeline__identity"
            href={experience.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExperienceCompanyIcon
              company={experience.translationKey}
              className="experience-timeline__company-icon"
            />

            <div className="experience-timeline__identity-text">
              <h2 className="experience-timeline__company">{t(`${translationBase}.company`)}</h2>

              <p className="experience-timeline__workplace">{t(`${translationBase}.workplace`)}</p>
            </div>
          </a>
        </div>

        <p className="experience-timeline__role">{t(`${translationBase}.role`)}</p>

        <p className="experience-timeline__summary">{t(`${translationBase}.summary`)}</p>

        <ul className="experience-timeline__highlights">
          {highlights.map((highlight, highlightIndex) => (
            <li key={`${experience.id}-${highlightIndex}`}>{highlight}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
