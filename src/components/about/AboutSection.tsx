import { useTranslation } from 'react-i18next'
import { aboutHeroImage, aboutHobbies } from '../../data/about'
import { ScrollToTopButton } from '../ui/ScrollToTopButton'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { HobbyItem } from './HobbyItem'
import './about.css'

interface AboutSectionProps {
  animationsDisabled: boolean
}

export function AboutSection({ animationsDisabled }: AboutSectionProps) {
  const { t } = useTranslation()

  return (
    <section className="about-section" aria-labelledby="about-title">
      <RevealOnScroll
        className="about-section__header-reveal"
        animationsDisabled={animationsDisabled}
        amount={0.5}
      >
        <header className="about-section__header">
          <h1 id="about-title" className="about-section__title">
            {t('about.title')}
          </h1>
        </header>
      </RevealOnScroll>

      <RevealOnScroll
        className="about-section__hero-reveal"
        animationsDisabled={animationsDisabled}
        delay={0.05}
        amount={0.2}
      >
        <figure className="about-section__hero">
          <img
            className="about-section__hero-image"
            src={aboutHeroImage}
            alt={t('about.heroAlt')}
            decoding="async"
          />
        </figure>
      </RevealOnScroll>

      <RevealOnScroll
        className="about-section__introduction-reveal"
        animationsDisabled={animationsDisabled}
        delay={0.08}
        amount={0.35}
      >
        <p className="about-section__introduction">{t('about.introduction')}</p>
      </RevealOnScroll>

      <section className="about-hobbies" aria-labelledby="about-hobbies-title">
        <RevealOnScroll animationsDisabled={animationsDisabled} amount={0.5}>
          <div className="about-hobbies__heading">
            <h2 id="about-hobbies-title" className="about-hobbies__title">
              {t('about.hobbies.title')}
            </h2>
          </div>
        </RevealOnScroll>

        <div className="about-hobbies__list">
          {aboutHobbies.map((hobby, index) => (
            <HobbyItem
              key={hobby.id}
              hobby={hobby}
              index={index}
              animationsDisabled={animationsDisabled}
            />
          ))}
        </div>
      </section>

      <ScrollToTopButton
        label={t('common.backToTop')}
        threshold={520}
        animationsDisabled={animationsDisabled}
      />
    </section>
  )
}
