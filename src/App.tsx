import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import profileImage from './assets/images/profile/profile.png'
import { InteractiveGridBackground } from './components/background/InteractiveGridBackground'
import { IntroSequence } from './components/intro/IntroSequence'
import {
  RadialNavigation,
  type RadialNavigationItem,
} from './components/navigation/RadialNavigation'
import { PreferencesControls } from './components/preferences/PreferencesControls'
import { ExperienceSection } from './components/experience/ExperienceSection'
import { DraggableOrbitDot } from './components/profile/DraggableOrbitDot'
import { AboutSection } from './components/about/AboutSection'
import { ContactSection } from './components/contact/ContactSection'
import { ProjectsSection } from './components/projects/ProjectsSection'
import { TypingText } from './components/ui/TypingText'
import { usePreferences } from './hooks/usePreferences'
import './styles/easter-egg.css'
import './styles/view-transitions.css'

const navigationDefinitions = [
  {
    id: 'projects',
    translationKey: 'navigation.projects',
  },
  {
    id: 'experience',
    translationKey: 'navigation.experience',
  },
  {
    id: 'about',
    translationKey: 'navigation.about',
  },
  {
    id: 'contact',
    translationKey: 'navigation.contact',
  },
] as const

const easterEggDurationMilliseconds = 10000

function App() {
  const { t } = useTranslation()
  const { preferences, resolvedTheme, prefersReducedMotion } = usePreferences()

  const animationsDisabled = preferences.effects === 'off' || prefersReducedMotion

  const [introCompleted, setIntroCompleted] = useState(false)

  const [heroTextCompleted, setHeroTextCompleted] = useState(false)

  const [activeSection, setActiveSection] = useState<string | null>(null)

  const [easterEggActive, setEasterEggActive] = useState(false)

  const easterEggTimeoutReference = useRef<number | null>(null)

  const navigationItems: RadialNavigationItem[] = navigationDefinitions.map(
    ({ id, translationKey }) => ({
      id,
      label: t(translationKey),
    }),
  )

  const activeNavigationItem =
    activeSection === null
      ? null
      : (navigationItems.find((item) => item.id === activeSection) ?? null)

  const documentTitle = activeNavigationItem?.label ?? t('common.home')

  useEffect(() => {
    document.title = `${documentTitle} | Gerardo Loperena Bustillos`
  }, [documentTitle])

  const handleHeroTextComplete = useCallback(() => {
    setHeroTextCompleted(true)
  }, [])

  const handleIntroComplete = useCallback(() => {
    setIntroCompleted(true)
  }, [])

  // Repeated triggers restart the effect window instead of stacking timers.
  const handleEasterEggActivate = useCallback(() => {
    if (animationsDisabled) {
      return
    }

    if (easterEggTimeoutReference.current !== null) {
      window.clearTimeout(easterEggTimeoutReference.current)
    }

    setEasterEggActive(true)

    easterEggTimeoutReference.current = window.setTimeout(() => {
      setEasterEggActive(false)
      easterEggTimeoutReference.current = null
    }, easterEggDurationMilliseconds)
  }, [animationsDisabled])

  useEffect(() => {
    return () => {
      if (easterEggTimeoutReference.current !== null) {
        window.clearTimeout(easterEggTimeoutReference.current)
      }
    }
  }, [])

  const handleSectionSelection = (sectionId: string) => {
    setHeroTextCompleted(false)
    setActiveSection(sectionId)
  }

  const handleBackToHome = () => {
    setActiveSection(null)
  }

  const showIntro = !introCompleted && activeSection === null

  const showEasterEgg = easterEggActive && !animationsDisabled

  return (
    <div
      className={`
        portfolio-shell relative
        min-h-dvh overflow-x-hidden
        bg-canvas text-foreground
        ${showEasterEgg ? 'easter-egg-active' : ''}
      `}
    >
      <InteractiveGridBackground animationsDisabled={animationsDisabled} themeKey={resolvedTheme} />

      <AnimatePresence>
        {!showIntro && (
          <motion.div
            key="preference-controls"
            className="absolute inset-x-0 top-3 z-[60] flex justify-center px-3 sm:fixed sm:inset-x-auto sm:end-6 sm:top-6 sm:px-0"
            initial={
              animationsDisabled
                ? false
                : {
                    opacity: 0,
                    y: -10,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: animationsDisabled ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <PreferencesControls animationsDisabled={animationsDisabled} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeSection !== null && (
          <motion.button
            key="home-profile-button"
            type="button"
            onClick={handleBackToHome}
            aria-label={t('common.goHome')}
            className="group fixed start-3 top-3 z-[70] inline-flex flex-col items-center border-0 bg-transparent p-0 text-sm font-semibold text-foreground transition-transform duration-200 hover:scale-[1.03] sm:start-6 sm:top-6 sm:h-12 sm:flex-row sm:rounded-full sm:border sm:border-border sm:bg-surface/88 sm:p-1.5 sm:pe-4 sm:shadow-lg sm:backdrop-blur-md sm:transition-[border-color,background-color,transform] sm:hover:border-accent/70 sm:hover:bg-surface-raised"
            initial={
              animationsDisabled
                ? false
                : {
                    opacity: 0,
                    x: -12,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -12,
            }}
          >
            <span className="relative z-[1] size-11 overflow-hidden rounded-full border-2 border-accent bg-surface-soft shadow-lg sm:size-9 sm:shadow-none">
              <img src={profileImage} alt="" className="size-full object-cover object-center" />
            </span>

            <span className="-mt-1 rounded-full border border-accent bg-surface px-2 py-1 text-[0.62rem] font-semibold leading-none text-foreground shadow-md sm:hidden">
              {t('common.back')}
            </span>

            <span className="hidden ps-2 sm:inline">{t('common.home')}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroSequence key="intro" onComplete={handleIntroComplete} />
        ) : activeSection === null ? (
          <motion.main
            key="home"
            className="relative z-10 flex min-h-dvh items-center justify-center px-4 pb-10 pt-36 sm:px-8 sm:py-16"
            initial={
              animationsDisabled
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={
              animationsDisabled
                ? undefined
                : {
                    opacity: 0,
                    y: -16,
                  }
            }
            transition={{
              duration: animationsDisabled ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex w-full max-w-5xl flex-col items-center gap-8 sm:gap-10">
              <div className="flex w-full flex-col items-center gap-4">
                <TypingText
                  text={t('home.greeting')}
                  className="whitespace-pre-line text-center text-2xl font-medium leading-tight tracking-[-0.04em] min-[360px]:text-3xl sm:text-4xl lg:text-[2.6rem]"
                  startDelay={250}
                  characterDelay={42}
                  completionDelay={2000}
                  onComplete={handleHeroTextComplete}
                />

                <AnimatePresence initial={false}>
                  {heroTextCompleted && (
                    <motion.p
                      key="professional-introduction"
                      className="max-w-3xl px-1 text-pretty text-center text-sm italic leading-6 text-muted sm:text-base sm:leading-7"
                      initial={
                        animationsDisabled
                          ? false
                          : {
                              opacity: 0,
                              y: 8,
                              filter: 'blur(4px)',
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                      }}
                      exit={
                        animationsDisabled
                          ? undefined
                          : {
                              opacity: 0,
                              y: -4,
                              filter: 'blur(3px)',
                            }
                      }
                      transition={{
                        duration: animationsDisabled ? 0 : 2.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {t('home.introduction')}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <RadialNavigation
                items={navigationItems}
                animationsDisabled={animationsDisabled}
                onSelect={handleSectionSelection}
              >
                <div className="profile-orbit-frame relative grid size-56 place-items-center rounded-full border-[6px] border-accent bg-surface shadow-[var(--effect-shadow)] min-[360px]:size-64 sm:size-72">
                  <DraggableOrbitDot
                    animationsDisabled={animationsDisabled}
                    onEasterEggActivate={handleEasterEggActivate}
                  />

                  <div className="profile-photo-inner size-[calc(100%-1.5rem)] overflow-hidden rounded-full border-2 border-border bg-surface-raised">
                    <img
                      src={profileImage}
                      alt="Gerardo Loperena Bustillos"
                      className="size-full object-cover object-center"
                    />
                  </div>
                </div>
              </RadialNavigation>
            </div>
          </motion.main>
        ) : (
          <motion.main
            key={activeSection}
            className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[90rem] flex-col px-4 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-12"
            initial={
              animationsDisabled
                ? false
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={
              animationsDisabled
                ? undefined
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            transition={{
              duration: animationsDisabled ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {activeSection === 'projects' ? (
              <ProjectsSection animationsDisabled={animationsDisabled} />
            ) : activeSection === 'experience' ? (
              <ExperienceSection animationsDisabled={animationsDisabled} />
            ) : activeSection === 'about' ? (
              <AboutSection animationsDisabled={animationsDisabled} />
            ) : activeSection === 'contact' ? (
              <ContactSection animationsDisabled={animationsDisabled} />
            ) : (
              <section className="mx-auto w-full max-w-6xl rounded-3xl border border-border bg-surface/90 p-6 shadow-[var(--effect-shadow)] backdrop-blur-md sm:p-10">
                <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {t('common.portfolio')}
                </span>

                <h1 className="text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                  {activeNavigationItem?.label}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                  {t(`sections.${activeSection}`)}
                </p>

                <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface-soft p-8 text-center text-muted">
                  {t('sections.pending')}
                </div>
              </section>
            )}
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
