import {
  colorProfiles,
  effectPreferences,
  motionPreferences,
  textSizes,
  themePreferences,
  type Preferences,
} from '../types/preferences'
import { defaultPreferences, preferencesStorageKey } from '../constants/preferences'

const isAllowedValue = <Value extends string>(
  value: unknown,
  allowedValues: readonly Value[],
): value is Value => typeof value === 'string' && allowedValues.includes(value as Value)

export function loadPreferences(): Preferences {
  if (typeof window === 'undefined') {
    return { ...defaultPreferences }
  }

  try {
    const rawPreferences = window.localStorage.getItem(preferencesStorageKey)

    if (!rawPreferences) {
      return { ...defaultPreferences }
    }

    const parsedPreferences: unknown = JSON.parse(rawPreferences)

    if (
      typeof parsedPreferences !== 'object' ||
      parsedPreferences === null ||
      Array.isArray(parsedPreferences)
    ) {
      return { ...defaultPreferences }
    }

    const storedPreferences = parsedPreferences as Partial<Record<keyof Preferences, unknown>>

    return {
      theme: isAllowedValue(storedPreferences.theme, themePreferences)
        ? storedPreferences.theme
        : defaultPreferences.theme,
      textSize: isAllowedValue(storedPreferences.textSize, textSizes)
        ? storedPreferences.textSize
        : defaultPreferences.textSize,
      colorProfile: isAllowedValue(storedPreferences.colorProfile, colorProfiles)
        ? storedPreferences.colorProfile
        : defaultPreferences.colorProfile,
      motion: isAllowedValue(storedPreferences.motion, motionPreferences)
        ? storedPreferences.motion
        : defaultPreferences.motion,
      effects: isAllowedValue(storedPreferences.effects, effectPreferences)
        ? storedPreferences.effects
        : defaultPreferences.effects,
    }
  } catch {
    return { ...defaultPreferences }
  }
}

export function savePreferences(preferences: Preferences): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    window.localStorage.setItem(preferencesStorageKey, JSON.stringify(preferences))

    return true
  } catch {
    return false
  }
}

export function matchesMediaQuery(query: string): boolean {
  return typeof window !== 'undefined' && window.matchMedia(query).matches
}
