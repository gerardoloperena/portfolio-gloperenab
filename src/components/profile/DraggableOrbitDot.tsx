import { animate, motion, useMotionValue } from 'motion/react'
import { useCallback, useEffect, useRef, type PointerEvent as ReactPointerEvent } from 'react'

interface DraggableOrbitDotProps {
  animationsDisabled: boolean
  onEasterEggActivate?: () => void
}

interface OrbitAnimationControls {
  stop: () => void
}

const fullRotation = 360
const automaticOrbitDuration = 18
const requiredFastRotations = 7
const maximumSpinDurationMilliseconds = 3000
const requiredAngularDistance = fullRotation * requiredFastRotations

function calculatePointerAngle(element: HTMLElement, clientX: number, clientY: number) {
  const bounds = element.getBoundingClientRect()

  const centerX = bounds.left + bounds.width / 2

  const centerY = bounds.top + bounds.height / 2

  return (Math.atan2(clientY - centerY, clientX - centerX) * 180) / Math.PI + 90
}

// Keep pointer movement continuous when the angle crosses the -180°/180° boundary.
function normalizeAngularDelta(delta: number) {
  if (delta > 180) {
    return delta - fullRotation
  }

  if (delta < -180) {
    return delta + fullRotation
  }

  return delta
}

export function DraggableOrbitDot({
  animationsDisabled,
  onEasterEggActivate,
}: DraggableOrbitDotProps) {
  const rotation = useMotionValue(0)

  const orbitReference = useRef<HTMLDivElement>(null)

  const animationControlsReference = useRef<OrbitAnimationControls | null>(null)

  // Drag metrics stay in refs to avoid rerendering during every pointer movement.
  const draggingReference = useRef(false)

  const lastPointerAngleReference = useRef<number | null>(null)

  const spinStartTimeReference = useRef(0)

  const accumulatedRotationReference = useRef(0)

  const easterEggTriggeredReference = useRef(false)

  const startAutomaticOrbit = useCallback(() => {
    animationControlsReference.current?.stop()

    if (animationsDisabled || draggingReference.current) {
      return
    }

    const currentRotation = rotation.get()

    animationControlsReference.current = animate(rotation, currentRotation + fullRotation, {
      duration: automaticOrbitDuration,
      ease: 'linear',
      repeat: Number.POSITIVE_INFINITY,
    })
  }, [animationsDisabled, rotation])

  useEffect(() => {
    startAutomaticOrbit()

    return () => {
      animationControlsReference.current?.stop()
    }
  }, [startAutomaticOrbit])

  const handlePointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return
    }

    const orbitElement = orbitReference.current

    if (!orbitElement) {
      return
    }

    event.preventDefault()

    event.currentTarget.setPointerCapture(event.pointerId)

    animationControlsReference.current?.stop()

    draggingReference.current = true

    lastPointerAngleReference.current = calculatePointerAngle(
      orbitElement,
      event.clientX,
      event.clientY,
    )

    spinStartTimeReference.current = performance.now()

    accumulatedRotationReference.current = 0

    easterEggTriggeredReference.current = false
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (!draggingReference.current) {
      return
    }

    const orbitElement = orbitReference.current

    const previousPointerAngle = lastPointerAngleReference.current

    if (!orbitElement || previousPointerAngle === null) {
      return
    }

    event.preventDefault()

    const currentPointerAngle = calculatePointerAngle(orbitElement, event.clientX, event.clientY)

    const angularDelta = normalizeAngularDelta(currentPointerAngle - previousPointerAngle)

    rotation.set(rotation.get() + angularDelta)

    lastPointerAngleReference.current = currentPointerAngle

    const currentTime = performance.now()

    const elapsedTime = currentTime - spinStartTimeReference.current

    if (elapsedTime > maximumSpinDurationMilliseconds) {
      spinStartTimeReference.current = currentTime

      accumulatedRotationReference.current = 0
    }

    accumulatedRotationReference.current += angularDelta

    const completedFastRotations =
      Math.abs(accumulatedRotationReference.current) >= requiredAngularDistance

    if (completedFastRotations && !easterEggTriggeredReference.current) {
      easterEggTriggeredReference.current = true

      onEasterEggActivate?.()
    }
  }

  const handlePointerFinish = useCallback(
    (event: ReactPointerEvent<HTMLButtonElement>) => {
      if (!draggingReference.current) {
        return
      }

      draggingReference.current = false

      lastPointerAngleReference.current = null

      accumulatedRotationReference.current = 0

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }

      startAutomaticOrbit()
    },
    [startAutomaticOrbit],
  )

  return (
    <motion.div
      ref={orbitReference}
      className="pointer-events-none absolute -inset-[6px] z-[3] rounded-full will-change-transform"
      style={{ rotate: rotation }}
    >
      <button
        type="button"
        aria-label="Arrastrar el punto alrededor de la fotografía"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerFinish}
        onPointerCancel={handlePointerFinish}
        onLostPointerCapture={handlePointerFinish}
        className="
          pointer-events-auto absolute
          start-1/2 top-0 grid size-10
          -translate-x-1/2
          -translate-y-1/2
          touch-none select-none
          place-items-center rounded-full
          cursor-grab
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-focus
          active:cursor-grabbing
        "
      >
        <span
          aria-hidden="true"
          className="
            profile-orbit-dot relative
            size-4 rounded-full
            bg-accent
            shadow-[var(--effect-glow)]
            ring-2 ring-canvas
          "
        />
      </button>
    </motion.div>
  )
}
