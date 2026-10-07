import { useTranslation } from 'react-i18next'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { ContactCard } from './ContactCard'
import './contact.css'

interface ContactSectionProps {
  animationsDisabled: boolean
}

export function ContactSection({ animationsDisabled }: ContactSectionProps) {
  const { t } = useTranslation()

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <RevealOnScroll
        className="contact-section__header-reveal"
        animationsDisabled={animationsDisabled}
        amount={0.5}
      >
        <header className="contact-section__header">
          <h1 id="contact-title" className="contact-section__title">
            {t('contact.title')}
          </h1>

          <p className="contact-section__introduction">{t('contact.introduction')}</p>
        </header>
      </RevealOnScroll>

      <RevealOnScroll
        className="contact-section__card-reveal"
        animationsDisabled={animationsDisabled}
        delay={0.08}
        amount={0.25}
      >
        <ContactCard />
      </RevealOnScroll>
    </section>
  )
}
