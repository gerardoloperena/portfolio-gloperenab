import { motion, useInView } from 'motion/react'
import { useRef, type PropsWithChildren } from 'react'

interface RevealOnScrollProps extends PropsWithChildren {
  animationsDisabled: boolean
  className?: string
  delay?: number
  amount?: number
}

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function RevealOnScroll({
  animationsDisabled,
  children,
  className,
  delay = 0,
  amount = 0.25,
}: RevealOnScrollProps) {
  const observerReference = useRef<HTMLDivElement>(null)

  // once:false intentionally replays the reveal after the element re-enters the viewport.
  const isInView = useInView(observerReference, {
    once: false,
    amount,
    margin: '0px 0px -8% 0px',
  })

  const visible = animationsDisabled || isInView

  return (
    <div ref={observerReference} className={className}>
      <motion.div
        className="w-full"
        variants={revealVariants}
        initial={animationsDisabled ? false : 'hidden'}
        animate={visible ? 'visible' : 'hidden'}
        transition={{
          duration: animationsDisabled ? 0 : 0.58,
          delay: animationsDisabled || !isInView ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
