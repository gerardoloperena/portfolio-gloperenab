import { useTranslation } from 'react-i18next'
import type { AboutHobby } from '../../data/about'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { LoopingMediaVideo } from '../ui/LoopingMediaVideo'

interface HobbyItemProps {
  hobby: AboutHobby
  index: number
  animationsDisabled: boolean
}

export function HobbyItem({ hobby, index, animationsDisabled }: HobbyItemProps) {
  const { t } = useTranslation()

  return (
    <RevealOnScroll
      className="about-hobby-reveal"
      animationsDisabled={animationsDisabled}
      delay={Math.min(index * 0.04, 0.12)}
      amount={0.22}
    >
      <article className="about-hobby" data-media-position={hobby.mediaPosition}>
        <div className="about-hobby__content">
          <h3 className="about-hobby__title">
            {t(`about.hobbies.items.${hobby.translationKey}.title`)}
          </h3>

          <p className="about-hobby__description">
            {t(`about.hobbies.items.${hobby.translationKey}.description`)}
          </p>
        </div>

        <figure className="about-hobby__media" data-fit={hobby.mediaFit}>
          {hobby.mediaType === 'video' ? (
            <LoopingMediaVideo
              className="about-hobby__image"
              src={hobby.media}
              label={t(`about.hobbies.items.${hobby.translationKey}.imageAlt`)}
              paused={animationsDisabled}
            />
          ) : (
            <img
              className="about-hobby__image"
              src={hobby.media}
              alt={t(`about.hobbies.items.${hobby.translationKey}.imageAlt`)}
              loading="lazy"
              decoding="async"
            />
          )}
        </figure>
      </article>
    </RevealOnScroll>
  )
}
