import type { CSSProperties } from 'react'
import type { ExperienceTranslationKey } from '../../data/experience'

import eduMediaIcon from '../../assets/images/experience/companies/edu-media.svg'
import motorraxIcon from '../../assets/images/experience/companies/motorrax.svg'
import softbotIcon from '../../assets/images/experience/companies/softbot.svg'
import subsecretariaIcon from '../../assets/images/experience/companies/subsecretaria.svg'

interface ExperienceCompanyIconProps {
  company: ExperienceTranslationKey
  className?: string
}

interface CompanyIconStyles extends CSSProperties {
  '--experience-company-icon': string
}

const companyIcons: Record<ExperienceTranslationKey, string> = {
  subsecretaria: subsecretariaIcon,
  motorrax: motorraxIcon,
  eduMedia: eduMediaIcon,
  softbot: softbotIcon,
}

export function ExperienceCompanyIcon({ company, className }: ExperienceCompanyIconProps) {
  const styles = {
    '--experience-company-icon': `url("${companyIcons[company]}")`,
  } as CompanyIconStyles

  return <span aria-hidden="true" className={className} style={styles} />
}
