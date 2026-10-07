import { useEffect, type RefObject } from 'react'

interface ModalLifecycleOptions<Element extends HTMLElement> {
  open: boolean
  onClose: () => void
  initialFocusReference: RefObject<Element | null>
}

export function useModalLifecycle<Element extends HTMLElement>({
  open,
  onClose,
  initialFocusReference,
}: ModalLifecycleOptions<Element>) {
  useEffect(() => {
    if (!open) {
      return
    }

    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null

    const previousOverflow = document.body.style.overflow

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    // Preserve page scroll and restore the originating focus when the modal closes.
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    initialFocusReference.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [initialFocusReference, onClose, open])
}
