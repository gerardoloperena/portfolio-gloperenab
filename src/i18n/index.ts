import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ar } from './ar'
import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { hi } from './hi'
import { ja } from './ja'
import {
  applyDocumentLanguage,
  detectInitialLanguage,
  normalizeLanguage,
  saveLanguage,
} from './languages'
import { pt } from './pt'
import { zhCN } from './zh-CN'

const resources = {
  es,
  en,
  'zh-CN': zhCN,
  pt,
  fr,
  ja,
  ar,
  hi,
}

function handleLanguageChange(language: string) {
  const normalizedLanguage = normalizeLanguage(language) ?? 'en'

  saveLanguage(normalizedLanguage)
  applyDocumentLanguage(normalizedLanguage)
}

// Register before initialization so the detected language is applied on the first render.
i18n.on('languageChanged', handleLanguageChange)

void i18n.use(initReactI18next).init({
  resources,
  lng: detectInitialLanguage(),
  fallbackLng: 'en',
  supportedLngs: Object.keys(resources),
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
})

export default i18n
