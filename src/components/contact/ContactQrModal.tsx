import { Check, Copy, ExternalLink, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { useModalLifecycle } from '../../hooks/useModalLifecycle'
import { copyTextToClipboard } from '../../utils/clipboard'

interface ContactQrModalProps {
  open: boolean
  serviceName: string
  accountId: string
  imageSource: string
  imageAlt: string
  profileUrl?: string
  onClose: () => void
}

export function ContactQrModal({
  open,
  serviceName,
  accountId,
  imageSource,
  imageAlt,
  profileUrl,
  onClose,
}: ContactQrModalProps) {
  const { t } = useTranslation()
  const closeButtonReference = useRef<HTMLButtonElement>(null)

  useModalLifecycle({
    open,
    onClose,
    initialFocusReference: closeButtonReference,
  })

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (open) {
      setCopied(false)
    }
  }, [accountId, open])

  if (!open) {
    return null
  }

  const copyAccountId = async () => {
    await copyTextToClipboard(accountId)

    setCopied(true)
  }

  // Rendering inside the shell preserves theme and easter-egg custom properties.
  const portalTarget = document.querySelector<HTMLElement>('.portfolio-shell') ?? document.body

  return createPortal(
    <div
      className="contact-qr-modal__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <section
        className="contact-qr-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-qr-modal-title"
        aria-describedby="contact-qr-modal-description"
      >
        <button
          ref={closeButtonReference}
          type="button"
          className="contact-qr-modal__close"
          onClick={onClose}
          aria-label={t('common.close')}
        >
          <X aria-hidden="true" />
        </button>

        <header className="contact-qr-modal__header">
          <span className="contact-qr-modal__eyebrow">{t('contact.digitalContact')}</span>

          <h2 id="contact-qr-modal-title">{serviceName}</h2>

          <p id="contact-qr-modal-description">
            {t('contact.qrDescription', {
              service: serviceName,
            })}
          </p>
        </header>

        <div className="contact-qr-modal__image-frame">
          <img src={imageSource} alt={imageAlt} className="contact-qr-modal__image" />
        </div>

        <div className="contact-qr-modal__account">
          <span>{t('contact.accountId')}</span>

          <strong dir="ltr">{accountId}</strong>
        </div>

        <div className="contact-qr-modal__actions">
          <button type="button" className="contact-qr-modal__action" onClick={copyAccountId}>
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}

            <span>{copied ? t('contact.copiedId') : t('contact.copyId')}</span>
          </button>

          {profileUrl && (
            <a
              className="contact-qr-modal__action contact-qr-modal__action--primary"
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink aria-hidden="true" />

              <span>{t('contact.openLineProfile')}</span>
            </a>
          )}
        </div>
      </section>
    </div>,
    portalTarget,
  )
}
