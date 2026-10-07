import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { usePreferences } from '../../hooks/usePreferences'

interface TypingTextProps {
  text: string
  className?: string
  startDelay?: number
  characterDelay?: number
  completionDelay?: number
  onComplete?: () => void
}

interface TypingPresentationProps {
  text: string
  visibleText: string
  className?: string
  animationsEnabled: boolean
}

interface AnimatedTypingTextProps {
  text: string
  className?: string
  startDelay: number
  characterDelay: number
  completionDelay: number
  onComplete?: () => void
}

interface StaticTypingTextProps {
  text: string
  className?: string
  completionDelay: number
  onComplete?: () => void
}

function TypingPresentation({
  text,
  visibleText,
  className,
  animationsEnabled,
}: TypingPresentationProps) {
  return (
    <span role="text" aria-label={text} className={className}>
      <span aria-hidden="true">{visibleText}</span>

      <motion.span
        aria-hidden="true"
        className="ms-[0.08em] inline-block h-[0.95em] w-[2px] translate-y-[0.08em] bg-accent align-baseline"
        initial={{ opacity: 1 }}
        animate={
          animationsEnabled
            ? {
                opacity: [1, 1, 0, 0],
              }
            : {
                opacity: 1,
              }
        }
        transition={
          animationsEnabled
            ? {
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                times: [0, 0.45, 0.5, 1],
                ease: 'linear',
              }
            : {
                duration: 0,
              }
        }
      />
    </span>
  )
}

function AnimatedTypingText({
  text,
  className,
  startDelay,
  characterDelay,
  completionDelay,
  onComplete,
}: AnimatedTypingTextProps) {
  const characters = Array.from(text)
  const totalCharacterCount = characters.length

  const [visibleCharacterCount, setVisibleCharacterCount] = useState(0)

  useEffect(() => {
    let typingTimeout: number | undefined

    let completionTimeout: number | undefined

    let nextCharacterIndex = 0

    const completeTyping = () => {
      completionTimeout = window.setTimeout(() => {
        onComplete?.()
      }, completionDelay)
    }

    const typeNextCharacter = () => {
      nextCharacterIndex += 1

      setVisibleCharacterCount(nextCharacterIndex)

      if (nextCharacterIndex >= totalCharacterCount) {
        completeTyping()
        return
      }

      typingTimeout = window.setTimeout(typeNextCharacter, characterDelay)
    }

    if (totalCharacterCount === 0) {
      completionTimeout = window.setTimeout(() => {
        onComplete?.()
      }, startDelay + completionDelay)
    } else {
      typingTimeout = window.setTimeout(typeNextCharacter, startDelay)
    }

    return () => {
      if (typingTimeout !== undefined) {
        window.clearTimeout(typingTimeout)
      }

      if (completionTimeout !== undefined) {
        window.clearTimeout(completionTimeout)
      }
    }
  }, [characterDelay, completionDelay, onComplete, startDelay, totalCharacterCount])

  return (
    <TypingPresentation
      text={text}
      visibleText={characters.slice(0, visibleCharacterCount).join('')}
      className={className}
      animationsEnabled
    />
  )
}

function StaticTypingText({ text, className, completionDelay, onComplete }: StaticTypingTextProps) {
  useEffect(() => {
    if (!onComplete) {
      return
    }

    const completionTimeout = window.setTimeout(() => {
      onComplete()
    }, completionDelay)

    return () => {
      window.clearTimeout(completionTimeout)
    }
  }, [completionDelay, onComplete, text])

  return (
    <TypingPresentation
      text={text}
      visibleText={text}
      className={className}
      animationsEnabled={false}
    />
  )
}

export function TypingText({
  text,
  className,
  startDelay = 0,
  characterDelay = 65,
  completionDelay = 0,
  onComplete,
}: TypingTextProps) {
  const { preferences, prefersReducedMotion } = usePreferences()

  const animationsEnabled = preferences.effects !== 'off' && !prefersReducedMotion

  const animationKey = [text, startDelay, characterDelay, completionDelay].join(':')

  // Separate trees give each animation mode an independent effect lifecycle.
  if (!animationsEnabled) {
    return (
      <StaticTypingText
        key={`static:${animationKey}`}
        text={text}
        className={className}
        completionDelay={completionDelay}
        onComplete={onComplete}
      />
    )
  }

  return (
    <AnimatedTypingText
      key={`animated:${animationKey}`}
      text={text}
      className={className}
      startDelay={startDelay}
      characterDelay={characterDelay}
      completionDelay={completionDelay}
      onComplete={onComplete}
    />
  )
}
