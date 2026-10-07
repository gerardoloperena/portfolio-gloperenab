import { createContext } from 'react'
import type { Preferences, ResolvedTheme } from '../types/preferences'

export type UpdatePreference = <Key extends keyof Preferences>(
  key: Key,
  value: Preferences[Key],
) => void

export interface PreferencesContextValue {
  preferences: Preferences
  resolvedTheme: ResolvedTheme
  prefersReducedMotion: boolean
  updatePreference: UpdatePreference
}

export const PreferencesContext = createContext<PreferencesContextValue | null>(null)
