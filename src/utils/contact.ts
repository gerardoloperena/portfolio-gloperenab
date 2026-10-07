interface OpenWhatsAppConversationOptions {
  number: string
  message: string
}

export function openWhatsAppConversation({ number, message }: OpenWhatsAppConversationOptions) {
  const url = new URL(`https://wa.me/${number}`)

  url.searchParams.set('text', message)

  window.open(url.toString(), '_blank', 'noopener,noreferrer')
}
