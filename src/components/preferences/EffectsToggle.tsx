import { Sparkles, ZapOff } from 'lucide-react'
import { usePreferences } from '../../hooks/usePreferences'

interface EffectsToggleProps {
  disableLabel: string
  enableLabel: string
  enabledText: string
  disabledText: string
}

export function EffectsToggle({
  disableLabel,
  enableLabel,
  enabledText,
  disabledText,
}: EffectsToggleProps) {
  const { preferences, updatePreference } = usePreferences()

  const effectsEnabled = preferences.effects === 'full'
  const actionLabel = effectsEnabled ? disableLabel : enableLabel

  const toggleEffects = () => {
    updatePreference('effects', effectsEnabled ? 'off' : 'full')
  }

  return (
    <button
      type="button"
      aria-label={actionLabel}
      aria-pressed={effectsEnabled}
      title={actionLabel}
      className="inline-flex h-auto min-h-11 min-w-20 flex-col items-center justify-center gap-1.5 rounded-2xl border border-border bg-surface-raised p-2 text-base font-medium text-foreground shadow-[var(--effect-shadow)] transition duration-200 ease-out hover:border-accent disabled:pointer-events-none disabled:opacity-50"
      onClick={toggleEffects}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-surface-soft text-accent">
        {effectsEnabled ? (
          <Sparkles aria-hidden="true" size={18} />
        ) : (
          <ZapOff aria-hidden="true" size={18} />
        )}
      </span>

      <span className="text-[0.68rem] leading-tight text-muted">
        {effectsEnabled ? enabledText : disabledText}
      </span>
    </button>
  )
}
