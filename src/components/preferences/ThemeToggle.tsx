import { Moon, Sun } from 'lucide-react'
import { flushSync } from 'react-dom'
import { usePreferences } from '../../hooks/usePreferences'

interface ThemeToggleProps {
  darkLabel?: string
  lightLabel?: string
  darkText?: string
  lightText?: string
}

export function ThemeToggle({
  darkLabel = 'Activar tema oscuro',
  lightLabel = 'Activar tema claro',
  darkText = 'Oscuro',
  lightText = 'Claro',
}: ThemeToggleProps) {
  const { preferences, resolvedTheme, prefersReducedMotion, updatePreference } = usePreferences()

  const isDarkTheme = resolvedTheme === 'dark'
  const nextTheme = isDarkTheme ? 'light' : 'dark'
  const label = isDarkTheme ? lightLabel : darkLabel
  const visibleText = isDarkTheme ? darkText : lightText

  const changeTheme = () => {
    const animationsDisabled = preferences.effects === 'off' || prefersReducedMotion

    if (animationsDisabled || typeof document.startViewTransition !== 'function') {
      updatePreference('theme', nextTheme)
      return
    }

    // flushSync commits the theme while the View Transition API captures both states.
    document.startViewTransition(() => {
      flushSync(() => {
        updatePreference('theme', nextTheme)
      })
    })
  }

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={changeTheme}
      className="
        group flex min-w-20 flex-col items-center gap-1.5
        rounded-2xl border border-border
        bg-surface/90 px-2.5 py-2
        text-muted shadow-sm backdrop-blur-md
        transition-[color,background-color,border-color,box-shadow,transform]
        duration-500 ease-out
        hover:-translate-y-0.5 hover:border-accent/60
        hover:text-foreground hover:shadow-md
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-focus
        focus-visible:ring-offset-2 focus-visible:ring-offset-canvas
        active:translate-y-0
      "
    >
      <span
        aria-hidden="true"
        className="
          grid size-9 place-items-center rounded-xl
          border border-border bg-surface-soft
          text-accent
          transition-[color,background-color,border-color,transform]
          duration-500 ease-out
          group-hover:scale-105 group-hover:border-accent/50
        "
      >
        {isDarkTheme ? (
          <Moon className="size-[1.15rem]" strokeWidth={1.8} />
        ) : (
          <Sun className="size-[1.15rem]" strokeWidth={1.8} />
        )}
      </span>

      <span className="text-[0.68rem] font-medium leading-none">{visibleText}</span>
    </button>
  )
}
