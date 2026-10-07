export const themePreferences = ['system', 'light', 'dark'] as const

export const textSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

export const colorProfiles = ['standard', 'red-green', 'blue-yellow', 'high-contrast'] as const

export const motionPreferences = ['system', 'full', 'reduced'] as const

export const effectPreferences = ['full', 'off'] as const

export type ThemePreference = (typeof themePreferences)[number]

export type ResolvedTheme = Exclude<ThemePreference, 'system'>

export type TextSize = (typeof textSizes)[number]

export type ColorProfile = (typeof colorProfiles)[number]

export type MotionPreference = (typeof motionPreferences)[number]

export type EffectPreference = (typeof effectPreferences)[number]

export interface Preferences {
  theme: ThemePreference
  textSize: TextSize
  colorProfile: ColorProfile
  motion: MotionPreference
  effects: EffectPreference
}
