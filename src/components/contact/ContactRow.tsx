import { Check, Copy, ExternalLink, QrCode } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { MouseEventHandler, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { copyTextToClipboard } from '../../utils/clipboard'

interface ContactRowProps {
  icon: ReactNode
  label: string
  value: string
  copyValue: string
  ariaLabel: string
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  actionIcon?: 'external' | 'qr'
  disabled?: boolean
}

export function ContactRow({
  icon,
  label,
  value,
  copyValue,
  ariaLabel,
  href,
  onClick,
  actionIcon = 'external',
  disabled = false,
}: ContactRowProps) {
  const { t } = useTranslation()

  const [copied, setCopied] = useState(false)

  const copiedTimeoutReference = useRef<number | null>(null)

  const ActionIcon = actionIcon === 'qr' ? QrCode : ExternalLink

  useEffect(() => {
    return () => {
      if (copiedTimeoutReference.current !== null) {
        window.clearTimeout(copiedTimeoutReference.current)
      }
    }
  }, [])

  const copyToClipboard = async () => {
    await copyTextToClipboard(copyValue)

    setCopied(true)

    if (copiedTimeoutReference.current !== null) {
      window.clearTimeout(copiedTimeoutReference.current)
    }

    copiedTimeoutReference.current = window.setTimeout(() => {
      setCopied(false)
      copiedTimeoutReference.current = null
    }, 1600)
  }

  const visualContent = (
    <span className={`contact-row${disabled ? ' contact-row--disabled' : ''}`}>
      <span className="contact-row__icon">{icon}</span>

      <span className="contact-row__information">
        <span className="contact-row__label">{label}</span>

        <span className="contact-row__divider" aria-hidden="true" />

        <span className="contact-row__value-group">
          <span className="contact-row__value" dir="ltr">
            {value}
          </span>

          <button
            type="button"
            className={`contact-row__copy${copied ? ' contact-row__copy--copied' : ''}`}
            onClick={copyToClipboard}
            aria-label={
              copied
                ? t('contact.valueCopied', {
                    label,
                  })
                : t('contact.copyValue', {
                    label,
                  })
            }
            title={
              copied
                ? t('contact.valueCopied', {
                    label,
                  })
                : t('contact.copyValue', {
                    label,
                  })
            }
          >
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          </button>
        </span>
      </span>

      <ActionIcon className="contact-row__external" aria-hidden="true" strokeWidth={1.8} />
    </span>
  )

  // The row action remains a sibling overlay so the copy button is an independent target.
  let mainAction: ReactNode = null

  if (!disabled && href) {
    const opensExternalPage = href.startsWith('http://') || href.startsWith('https://')

    mainAction = (
      <a
        className="contact-row__main-action"
        href={href}
        target={opensExternalPage ? '_blank' : undefined}
        rel={opensExternalPage ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      />
    )
  } else if (!disabled) {
    mainAction = (
      <button
        type="button"
        className="contact-row__main-action"
        onClick={onClick}
        aria-label={ariaLabel}
      />
    )
  }

  return (
    <span className={`contact-row-wrapper${disabled ? ' contact-row-wrapper--disabled' : ''}`}>
      {visualContent}
      {mainAction}
    </span>
  )
}
