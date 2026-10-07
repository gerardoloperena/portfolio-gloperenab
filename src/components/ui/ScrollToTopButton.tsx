import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import './scroll-to-top-button.css'

interface ScrollToTopButtonProps {
  label: string
  threshold?: number
  animationsDisabled?: boolean
}

export function ScrollToTopButton({
  label,
  threshold = 480,
  animationsDisabled = false,
}: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  const prefersReducedMotion = useReducedMotion()

  const motionDisabled = animationsDisabled || Boolean(prefersReducedMotion)

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY >= threshold)
    }

    updateVisibility()

    window.addEventListener('scroll', updateVisibility, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', updateVisibility)
    }
  }, [threshold])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: motionDisabled ? 'auto' : 'smooth',
    })
  }

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.button
          key="scroll-to-top"
          type="button"
          className="scroll-to-top-button"
          aria-label={label}
          title={label}
          onClick={handleScrollToTop}
          initial={
            motionDisabled
              ? false
              : {
                  opacity: 0,
                  y: 14,
                  scale: 0.9,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={
            motionDisabled
              ? {
                  opacity: 0,
                }
              : {
                  opacity: 0,
                  y: 14,
                  scale: 0.9,
                }
          }
          transition={{
            duration: motionDisabled ? 0 : 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <svg
            aria-hidden="true"
            className="scroll-to-top-button__icon"
            viewBox="0 0 24 24"
            fill="none"
            focusable="false"
          >
            <path d="M12 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

            <path
              d="M5.5 11.5 12 5l6.5 6.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
