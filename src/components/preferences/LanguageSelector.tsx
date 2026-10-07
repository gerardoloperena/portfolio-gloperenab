import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { normalizeLanguage, supportedLanguages, type SupportedLanguage } from '../../i18n/languages'

export function LanguageSelector() {
  const { i18n, t } = useTranslation()

  const currentLanguage = normalizeLanguage(i18n.language) ?? 'en'

  const handleLanguageChange = (language: SupportedLanguage) => {
    void i18n.changeLanguage(language)
  }

  return (
    <label
      className="
        relative col-span-2 flex h-8
        select-none items-center
        overflow-hidden rounded-xl
        border border-border
        bg-surface/80 text-muted
        backdrop-blur-sm
        transition-colors duration-200
        hover:border-accent/60
        hover:text-foreground
        focus-within:border-accent
      "
    >
      <Languages
        aria-hidden="true"
        className="
          pointer-events-none
          absolute start-2.5
          size-3.5 text-accent
        "
        strokeWidth={1.8}
      />

      <span className="sr-only text-[0.68rem]">{t('preferences.chooseLanguage')}</span>

      <select
        value={currentLanguage}
        aria-label={t('preferences.chooseLanguage')}
        onChange={(event) => handleLanguageChange(event.target.value as SupportedLanguage)}
        className="
          h-full w-full
          appearance-none rounded-xl
          border-0 bg-transparent
          pe-7 ps-8
          text-[0.68rem] font-medium
          leading-none text-muted
          outline-none
        "
        style={{
          outline: 'none',
          boxShadow: 'none',
          fontSize: '0.68rem',
        }}
      >
        {supportedLanguages.map(({ code, label }) => (
          <option
            key={code}
            value={code}
            className="
                bg-surface
                text-foreground
              "
          >
            {label}
          </option>
        ))}
      </select>

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute end-2.5
          text-[0.55rem]
        "
      >
        ▾
      </span>
    </label>
  )
}
