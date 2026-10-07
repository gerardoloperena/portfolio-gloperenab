import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { certificates } from '../../data/certificates'
import { CertificateCard } from './CertificateCard'
import './certificates.css'

interface CertificatesSectionProps {
  animationsDisabled: boolean
}

export function CertificatesSection({ animationsDisabled }: CertificatesSectionProps) {
  const { t } = useTranslation()

  const prefersReducedMotion = useReducedMotion()

  const motionDisabled = animationsDisabled || Boolean(prefersReducedMotion)

  return (
    <section className="certificates-section" aria-labelledby="certificates-title">
      <motion.header
        className="certificates-section__header"
        initial={
          motionDisabled
            ? false
            : {
                opacity: 0,
                y: 32,
              }
        }
        animate={
          motionDisabled
            ? {
                opacity: 1,
                y: 0,
              }
            : undefined
        }
        whileInView={
          motionDisabled
            ? undefined
            : {
                opacity: 1,
                y: 0,
              }
        }
        viewport={{
          once: false,
          amount: 0.5,
        }}
        transition={{
          duration: motionDisabled ? 0 : 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h2 id="certificates-title" className="certificates-section__title">
          {t('certificates.title')}
        </h2>

        <p className="certificates-section__introduction">{t('certificates.introduction')}</p>
      </motion.header>

      <div className="certificates-section__grid">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            index={index}
            animationsDisabled={motionDisabled}
          />
        ))}
      </div>
    </section>
  )
}
