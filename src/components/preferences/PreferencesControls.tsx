import { Eye, EyeOff } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { EffectsToggle } from './EffectsToggle'
import { LanguageSelector } from './LanguageSelector'
import { ThemeToggle } from './ThemeToggle'

interface PreferencesControlsProps {
  animationsDisabled: boolean
}

const controlsId = 'portfolio-preference-options'

export function PreferencesControls({ animationsDisabled }: PreferencesControlsProps) {
  const { t } = useTranslation()

  const [optionsVisible, setOptionsVisible] = useState(false)

  const toggleLabel = optionsVisible ? t('preferences.hide') : t('preferences.show')

  return (
    <div className="flex w-[10.5rem] flex-col">
      <AnimatePresence initial={false}>
        {optionsVisible && (
          <motion.div
            id={controlsId}
            key="preference-options"
            className="grid grid-cols-2 gap-2 overflow-hidden"
            initial={
              animationsDisabled
                ? false
                : {
                    height: 0,
                    opacity: 0,
                    y: -6,
                  }
            }
            animate={{
              height: 'auto',
              opacity: 1,
              y: 0,
            }}
            exit={
              animationsDisabled
                ? undefined
                : {
                    height: 0,
                    opacity: 0,
                    y: -6,
                  }
            }
            transition={{
              duration: animationsDisabled ? 0 : 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ThemeToggle
              darkLabel={t('preferences.activateDark')}
              lightLabel={t('preferences.activateLight')}
              darkText={t('preferences.dark')}
              lightText={t('preferences.light')}
            />

            <EffectsToggle
              disableLabel={t('preferences.disableEffects')}
              enableLabel={t('preferences.enableEffects')}
              enabledText={t('preferences.effectsOn')}
              disabledText={t('preferences.effectsOff')}
            />

            <LanguageSelector />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-expanded={optionsVisible}
        aria-controls={controlsId}
        aria-label={toggleLabel}
        onClick={() => setOptionsVisible((currentValue) => !currentValue)}
        className="
            mt-2 inline-flex h-8 w-full
            flex-nowrap items-center
            justify-center gap-1.5
            whitespace-nowrap
            rounded-xl border border-border
            bg-transparent px-2
            text-[0.625rem] font-medium
            leading-none text-muted
            backdrop-blur-sm
            transition-[color,border-color,background-color,transform]
            duration-200
            hover:border-accent/60
            hover:bg-surface/40
            hover:text-foreground
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-focus
            focus-visible:ring-offset-2
            focus-visible:ring-offset-canvas
            active:scale-[0.98]
        "
      >
        {optionsVisible ? (
          <EyeOff aria-hidden="true" className="size-3.5 shrink-0" strokeWidth={1.8} />
        ) : (
          <Eye aria-hidden="true" className="size-3.5 shrink-0" strokeWidth={1.8} />
        )}

        <span className="text-[0.75rem] whitespace-nowrap">{toggleLabel}</span>
      </button>
    </div>
  )
}
