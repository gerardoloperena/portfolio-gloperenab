import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { Certificate } from '../../data/certificates'

interface CertificateCardProps {
  certificate: Certificate
  index: number
  animationsDisabled: boolean
}

export function CertificateCard({ certificate, index, animationsDisabled }: CertificateCardProps) {
  const { t } = useTranslation()

  const translationBase = `certificates.items.${certificate.translationKey}`

  return (
    <motion.article
      className="certificate-card"
      initial={
        animationsDisabled
          ? false
          : {
              opacity: 0,
              y: 36,
              scale: 0.97,
            }
      }
      animate={
        animationsDisabled
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : undefined
      }
      whileInView={
        animationsDisabled
          ? undefined
          : {
              opacity: 1,
              y: 0,
              scale: 1,
            }
      }
      viewport={{
        once: false,
        amount: 0.3,
        margin: '0px 0px -6% 0px',
      }}
      transition={{
        duration: animationsDisabled ? 0 : 0.58,
        delay: animationsDisabled ? 0 : index * 0.13,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a
        className="certificate-card__link"
        href={certificate.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="certificate-card__media">
          <img
            className="certificate-card__image"
            src={certificate.cover}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </span>

        <h3 className="certificate-card__title">{t(`${translationBase}.name`)}</h3>
      </a>

      <p className="certificate-card__issuer">{t(`${translationBase}.issuer`)}</p>
    </motion.article>
  )
}
