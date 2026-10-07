import { Code2, Mail, Phone } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import lineQrImage from '../../assets/images/contact/line-qr.png'
import wechatQrImage from '../../assets/images/contact/wechat-qr.png'
import { contactInformation } from '../../data/contact'
import { normalizeLanguage } from '../../i18n/languages'
import { openWhatsAppConversation } from '../../utils/contact'
import { ContactQrModal } from './ContactQrModal'
import { ContactRow } from './ContactRow'
import { LinkedInIcon } from './LinkedInIcon'
import { LineIcon, WeChatIcon } from './MessagingServiceIcons'

type RegionalContact = 'line' | 'wechat' | null

export function ContactCard() {
  const { t, i18n } = useTranslation()

  const [activeRegionalContact, setActiveRegionalContact] = useState<RegionalContact>(null)

  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language) ?? 'en'

  const usesTelephoneOnly = currentLanguage === 'ja' || currentLanguage === 'zh-CN'

  const isChineseLanguage = currentLanguage === 'zh-CN'

  const regionalContact =
    currentLanguage === 'ja' ? 'line' : currentLanguage === 'zh-CN' ? 'wechat' : null

  const handleWhatsAppClick = () => {
    openWhatsAppConversation({
      number: contactInformation.whatsapp.number,
      message: contactInformation.whatsapp.message,
    })
  }

  const closeRegionalContact = useCallback(() => {
    setActiveRegionalContact(null)
  }, [])

  return (
    <>
      <article
        className={`contact-card${regionalContact ? ' contact-card--regional' : ''}`}
        aria-label={t('contact.cardLabel')}
      >
        <span className="contact-card__texture" aria-hidden="true" />

        <div className="contact-card__content">
          <header className="contact-card__identity">
            <span className="contact-card__mark">
              <Code2 aria-hidden="true" strokeWidth={1.65} />
            </span>

            <span className="contact-card__identity-divider" aria-hidden="true" />

            <span className="contact-card__identity-copy">
              <strong className="contact-card__name">{contactInformation.name}</strong>

              <span className="contact-card__role">{t('contact.role')}</span>

              <span className="contact-card__technologies" dir="ltr">
                {contactInformation.technologies.join('  •  ')}
              </span>
            </span>
          </header>

          <address className="contact-card__links">
            <ContactRow
              icon={<LinkedInIcon aria-hidden="true" />}
              label={t('contact.linkedin')}
              value={contactInformation.linkedin.displayValue}
              copyValue={contactInformation.linkedin.displayValue}
              href={contactInformation.linkedin.href}
              ariaLabel={t('contact.openLinkedin')}
            />

            <ContactRow
              icon={<Phone aria-hidden="true" strokeWidth={1.75} />}
              label={t('contact.whatsapp')}
              value={
                usesTelephoneOnly
                  ? contactInformation.phone.displayValue
                  : contactInformation.whatsapp.displayValue
              }
              copyValue={`+${contactInformation.whatsapp.number}`}
              onClick={usesTelephoneOnly ? undefined : handleWhatsAppClick}
              disabled={usesTelephoneOnly}
              ariaLabel={
                usesTelephoneOnly ? t('contact.phoneInformation') : t('contact.openWhatsapp')
              }
            />

            <ContactRow
              icon={<Mail aria-hidden="true" strokeWidth={1.75} />}
              label={t('contact.email')}
              value={contactInformation.email.displayValue}
              copyValue={contactInformation.email.displayValue}
              href={isChineseLanguage ? undefined : contactInformation.email.gmailHref}
              disabled={isChineseLanguage}
              ariaLabel={isChineseLanguage ? t('contact.emailUnavailable') : t('contact.openEmail')}
            />

            {regionalContact === 'line' && (
              <ContactRow
                icon={<LineIcon aria-hidden="true" />}
                label={t('contact.line')}
                value={contactInformation.line.displayValue}
                copyValue={contactInformation.line.id}
                onClick={() => {
                  setActiveRegionalContact('line')
                }}
                ariaLabel={t('contact.openLineContact')}
                actionIcon="qr"
              />
            )}

            {regionalContact === 'wechat' && (
              <ContactRow
                icon={<WeChatIcon aria-hidden="true" />}
                label={t('contact.wechat')}
                value={contactInformation.wechat.displayValue}
                copyValue={contactInformation.wechat.id}
                onClick={() => {
                  setActiveRegionalContact('wechat')
                }}
                ariaLabel={t('contact.openWechatContact')}
                actionIcon="qr"
              />
            )}
          </address>
        </div>
      </article>

      <ContactQrModal
        open={activeRegionalContact === 'line'}
        serviceName="LINE"
        accountId={contactInformation.line.id}
        imageSource={lineQrImage}
        imageAlt={t('contact.lineQrAlt')}
        profileUrl={contactInformation.line.href}
        onClose={closeRegionalContact}
      />

      <ContactQrModal
        open={activeRegionalContact === 'wechat'}
        serviceName="WeChat"
        accountId={contactInformation.wechat.id}
        imageSource={wechatQrImage}
        imageAlt={t('contact.wechatQrAlt')}
        onClose={closeRegionalContact}
      />
    </>
  )
}
