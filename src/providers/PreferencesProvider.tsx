import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { systemDarkModeQuery, systemReducedMotionQuery } from '../constants/preferences'
import {
  PreferencesContext,
  type PreferencesContextValue,
  type UpdatePreference,
} from '../contexts/PreferencesContext'
import type { Preferences, ResolvedTheme } from '../types/preferences'
import { loadPreferences, matchesMediaQuery, savePreferences } from '../utils/preferences'

export function PreferencesProvider({ children }: PropsWithChildren) {
  const [preferences, setPreferences] = useState<Preferences>(loadPreferences)

  const [systemUsesDarkMode, setSystemUsesDarkMode] = useState(() =>
    matchesMediaQuery(systemDarkModeQuery),
  )

  const [systemReducesMotion, setSystemReducesMotion] = useState(() =>
    matchesMediaQuery(systemReducedMotionQuery),
  )

  const resolvedTheme: ResolvedTheme =
    preferences.theme === 'system' ? (systemUsesDarkMode ? 'dark' : 'light') : preferences.theme

  const prefersReducedMotion =
    preferences.motion === 'system' ? systemReducesMotion : preferences.motion === 'reduced'

  // Track operating-system changes while preferences remain linked to the system.
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(systemDarkModeQuery)

    const reducedMotionMediaQuery = window.matchMedia(systemReducedMotionQuery)

    const handleDarkModeChange = (event: MediaQueryListEvent) => {
      setSystemUsesDarkMode(event.matches)
    }

    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      setSystemReducesMotion(event.matches)
    }

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange)

    reducedMotionMediaQuery.addEventListener('change', handleReducedMotionChange)

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange)

      reducedMotionMediaQuery.removeEventListener('change', handleReducedMotionChange)
    }
  }, [])

  // Apply visual preferences before paint to prevent a one-frame theme mismatch.
  useLayoutEffect(() => {
    const root = document.documentElement

    root.dataset.theme = resolvedTheme
    root.dataset.textSize = preferences.textSize
    root.dataset.colorProfile = preferences.colorProfile
    root.dataset.motion = prefersReducedMotion ? 'reduced' : 'full'
    root.dataset.effects = preferences.effects
  }, [
    preferences.colorProfile,
    preferences.effects,
    preferences.textSize,
    prefersReducedMotion,
    resolvedTheme,
  ])

  useEffect(() => {
    savePreferences(preferences)
  }, [preferences])

  const updatePreference = useCallback<UpdatePreference>((key, value) => {
    setPreferences((currentPreferences) => {
      if (currentPreferences[key] === value) {
        return currentPreferences
      }

      return {
        ...currentPreferences,
        [key]: value,
      }
    })
  }, [])

  const contextValue = useMemo<PreferencesContextValue>(
    () => ({
      preferences,
      resolvedTheme,
      prefersReducedMotion,
      updatePreference,
    }),
    [preferences, resolvedTheme, prefersReducedMotion, updatePreference],
  )

  return <PreferencesContext.Provider value={contextValue}>{children}</PreferencesContext.Provider>
}
