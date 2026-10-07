export const supportedLanguages = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
  { code: 'ja', label: '日本語' },
  { code: 'ar', label: 'العربية' },
  { code: 'hi', label: 'हिन्दी' },
] as const

export type SupportedLanguage = (typeof supportedLanguages)[number]['code']

export const languageStorageKey = 'portfolio-language'

const supportedCodes = new Set<string>(supportedLanguages.map(({ code }) => code))

export function normalizeLanguage(language: string | null | undefined): SupportedLanguage | null {
  if (!language) {
    return null
  }

  if (supportedCodes.has(language)) {
    return language as SupportedLanguage
  }

  const normalizedLanguage = language.toLowerCase()

  if (normalizedLanguage === 'zh-cn' || normalizedLanguage.startsWith('zh-hans')) {
    return 'zh-CN'
  }

  if (normalizedLanguage.startsWith('zh')) {
    return null
  }

  const baseLanguage = normalizedLanguage.split('-')[0]

  if (supportedCodes.has(baseLanguage)) {
    return baseLanguage as SupportedLanguage
  }

  return null
}

function readStoredLanguage(): SupportedLanguage | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    return normalizeLanguage(window.localStorage.getItem(languageStorageKey))
  } catch {
    return null
  }
}

export function saveLanguage(language: SupportedLanguage) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(languageStorageKey, language)
  } catch {
    // The selected language still works when storage is unavailable.
  }
}

export function applyDocumentLanguage(language: SupportedLanguage) {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.lang = language
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
}

export function detectInitialLanguage(): SupportedLanguage {
  const storedLanguage = readStoredLanguage()

  if (storedLanguage) {
    return storedLanguage
  }

  if (typeof navigator === 'undefined') {
    return 'en'
  }

  const browserLanguages =
    navigator.languages.length > 0 ? navigator.languages : [navigator.language]

  for (const language of browserLanguages) {
    const detectedLanguage = normalizeLanguage(language)

    if (detectedLanguage) {
      return detectedLanguage
    }
  }

  return 'en'
}
