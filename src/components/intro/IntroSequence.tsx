import { motion } from 'motion/react'
import { useState } from 'react'
import { TypingText } from '../ui/TypingText'

interface IntroSequenceProps {
  onComplete: () => void
}

export function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [isLeaving, setIsLeaving] = useState(false)

  return (
    <motion.div
      className="fixed inset-0 z-50 grid min-h-dvh place-items-center px-6 text-foreground"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLeaving ? 0 : 1 }}
      transition={{
        duration: isLeaving ? 0.65 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => {
        if (isLeaving) {
          onComplete()
        }
      }}
    >
      <TypingText
        text="Hola."
        className="text-6xl font-medium tracking-[-0.05em] sm:text-7xl"
        startDelay={450}
        characterDelay={180}
        completionDelay={3000}
        onComplete={() => {
          setIsLeaving(true)
        }}
      />
    </motion.div>
  )
}
