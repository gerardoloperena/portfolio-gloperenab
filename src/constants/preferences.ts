import type { Preferences } from '../types/preferences'

export const preferencesStorageKey = 'portfolio:preferences:v1'

export const systemDarkModeQuery = '(prefers-color-scheme: dark)'

export const systemReducedMotionQuery = '(prefers-reduced-motion: reduce)'

export const defaultPreferences = {
  theme: 'system',
  textSize: 'md',
  colorProfile: 'standard',
  motion: 'system',
  effects: 'full',
} satisfies Preferences
