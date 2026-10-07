import awsCertificate from '../assets/docs/certificates/aws-certificate.pdf'
import awsCover from '../assets/images/certificates/aws-cover.png'
import claudeCodeCover from '../assets/images/certificates/claude-code-101-cover.png'
import googleUxCover from '../assets/images/certificates/google-ux-cover.png'

export const certificateTranslationKeys = ['aws', 'googleUx', 'claudeCode'] as const

export type CertificateTranslationKey = (typeof certificateTranslationKeys)[number]

export interface Certificate {
  id: string
  translationKey: CertificateTranslationKey
  cover: string
  href: string
}

export const certificates: readonly Certificate[] = [
  {
    id: 'aws-cloud-practitioner',
    translationKey: 'aws',
    cover: awsCover,
    href: awsCertificate,
  },
  {
    id: 'google-ux',
    translationKey: 'googleUx',
    cover: googleUxCover,
    href: 'https://coursera.org/share/1e28ad2cce418dc0aee76ff3774d57d6',
  },
  {
    id: 'claude-code-101',
    translationKey: 'claudeCode',
    cover: claudeCodeCover,
    href: 'https://verify.skilljar.com/c/bmvfjua5hfx6',
  },
]
