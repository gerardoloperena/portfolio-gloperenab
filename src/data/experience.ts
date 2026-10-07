export const experienceTranslationKeys = [
  'subsecretaria',
  'motorrax',
  'eduMedia',
  'softbot',
] as const

export type ExperienceTranslationKey = (typeof experienceTranslationKeys)[number]

export type ExperienceTrack = 'main' | 'parallel'

export interface ProfessionalExperience {
  id: string
  translationKey: ExperienceTranslationKey
  startDate: string
  endDate: string
  accent: string
  website: string
  track: ExperienceTrack
}

export const professionalExperiences: readonly ProfessionalExperience[] = [
  {
    id: 'subsecretaria',
    translationKey: 'subsecretaria',
    startDate: '2019-11',
    endDate: '2019-12',
    accent: '#a855f7',
    website: 'https://tamaulipas.gob.mx/innovacion/',
    track: 'main',
  },
  {
    id: 'motorrax',
    translationKey: 'motorrax',
    startDate: '2021-08',
    endDate: '2021-12',
    accent: '#f97316',
    website: 'https://www.motorrax.com/',
    track: 'main',
  },
  {
    id: 'edu-media',
    translationKey: 'eduMedia',
    startDate: '2022-02',
    endDate: '2026-07',
    accent: '#3b82f6',
    website: 'https://www.edumediamanager.com/acceder',
    track: 'main',
  },
  {
    id: 'softbot',
    translationKey: 'softbot',
    startDate: '2024-08',
    endDate: '2025-06',
    accent: '#10b981',
    website: 'https://www.softbot.com.mx/',
    track: 'parallel',
  },
]
