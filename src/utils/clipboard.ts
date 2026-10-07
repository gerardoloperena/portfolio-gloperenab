export async function copyTextToClipboard(value: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value)
      return
    } catch {
      // The DOM fallback supports browsers where the Clipboard API is unavailable or restricted.
    }
  }

  const temporaryInput = document.createElement('textarea')

  temporaryInput.value = value
  temporaryInput.setAttribute('readonly', '')
  temporaryInput.style.position = 'fixed'
  temporaryInput.style.opacity = '0'
  temporaryInput.style.pointerEvents = 'none'

  document.body.appendChild(temporaryInput)

  try {
    temporaryInput.focus()
    temporaryInput.select()
    document.execCommand('copy')
  } finally {
    temporaryInput.remove()
  }
}
