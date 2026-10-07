import { useEffect, useRef } from 'react'

interface InteractiveGridBackgroundProps {
  animationsDisabled: boolean
  themeKey: string
}

interface PointerPosition {
  x: number
  y: number
  strength: number
}

const gridSpacing = 42
const lineSampleDistance = 8
const influenceSigma = 88
const pointerDepth = 11
const darkGridOpacity = 0.22
const lightGridOpacity = 0.3

function getWarpedPoint(x: number, y: number, pointer: PointerPosition) {
  if (pointer.strength <= 0.001) {
    return { x, y }
  }

  const distanceX = pointer.x - x
  const distanceY = pointer.y - y
  const distanceSquared = distanceX * distanceX + distanceY * distanceY

  // A Gaussian falloff keeps the deformation smooth and local to the pointer.
  const influence =
    Math.exp(-distanceSquared / (2 * influenceSigma * influenceSigma)) * pointer.strength

  return {
    x: x + distanceX * influence * 0.055,
    y: y + distanceY * influence * 0.04 + influence * pointerDepth,
  }
}

export function InteractiveGridBackground({
  animationsDisabled,
  themeKey,
}: InteractiveGridBackgroundProps) {
  const canvasReference = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasReference.current

    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    const root = document.documentElement

    const rootStyles = getComputedStyle(root)

    const isDarkTheme = themeKey === 'dark' || root.dataset.theme === 'dark'

    const borderColor =
      rootStyles.getPropertyValue('--border').trim() || (isDarkTheme ? '#343943' : '#d8cdbc')

    let viewportWidth = window.innerWidth

    let viewportHeight = window.innerHeight

    let animationFrame: number | null = null

    let hasReceivedPointer = false

    const pointer: PointerPosition = {
      x: viewportWidth / 2,
      y: viewportHeight / 2,
      strength: 0,
    }

    const targetPointer: PointerPosition = {
      x: viewportWidth / 2,
      y: viewportHeight / 2,
      strength: 0,
    }

    const drawGrid = () => {
      context.clearRect(0, 0, viewportWidth, viewportHeight)

      context.save()
      context.strokeStyle = borderColor
      context.lineWidth = 1
      context.globalAlpha = isDarkTheme ? darkGridOpacity : lightGridOpacity

      for (let gridY = -gridSpacing; gridY <= viewportHeight + gridSpacing; gridY += gridSpacing) {
        context.beginPath()

        let isFirstPoint = true

        for (let x = -gridSpacing; x <= viewportWidth + gridSpacing; x += lineSampleDistance) {
          const point = getWarpedPoint(x, gridY, pointer)

          if (isFirstPoint) {
            context.moveTo(point.x, point.y)
            isFirstPoint = false
          } else {
            context.lineTo(point.x, point.y)
          }
        }

        context.stroke()
      }

      for (let gridX = -gridSpacing; gridX <= viewportWidth + gridSpacing; gridX += gridSpacing) {
        context.beginPath()

        let isFirstPoint = true

        for (let y = -gridSpacing; y <= viewportHeight + gridSpacing; y += lineSampleDistance) {
          const point = getWarpedPoint(gridX, y, pointer)

          if (isFirstPoint) {
            context.moveTo(point.x, point.y)
            isFirstPoint = false
          } else {
            context.lineTo(point.x, point.y)
          }
        }

        context.stroke()
      }

      context.restore()
    }

    const resizeCanvas = () => {
      viewportWidth = window.innerWidth

      viewportHeight = window.innerHeight

      // Capping DPR avoids an unnecessarily large canvas on high-density displays.
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.round(viewportWidth * pixelRatio)

      canvas.height = Math.round(viewportHeight * pixelRatio)

      canvas.style.width = `${viewportWidth}px`

      canvas.style.height = `${viewportHeight}px`

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      drawGrid()
    }

    // Frames run only while the interpolated pointer is moving toward its target.
    const startAnimation = () => {
      if (animationFrame !== null) {
        return
      }

      const animate = () => {
        pointer.x += (targetPointer.x - pointer.x) * 0.16

        pointer.y += (targetPointer.y - pointer.y) * 0.16

        pointer.strength += (targetPointer.strength - pointer.strength) * 0.13

        drawGrid()

        const positionDifference =
          Math.abs(targetPointer.x - pointer.x) + Math.abs(targetPointer.y - pointer.y)

        const strengthDifference = Math.abs(targetPointer.strength - pointer.strength)

        if (positionDifference > 0.1 || strengthDifference > 0.002) {
          animationFrame = window.requestAnimationFrame(animate)

          return
        }

        pointer.x = targetPointer.x
        pointer.y = targetPointer.y
        pointer.strength = targetPointer.strength

        drawGrid()
        animationFrame = null
      }

      animationFrame = window.requestAnimationFrame(animate)
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!hasReceivedPointer) {
        pointer.x = event.clientX
        pointer.y = event.clientY
        targetPointer.x = event.clientX
        targetPointer.y = event.clientY
        hasReceivedPointer = true
      }

      targetPointer.x = event.clientX

      targetPointer.y = event.clientY

      targetPointer.strength = 1

      startAnimation()
    }

    const handlePointerLeave = () => {
      targetPointer.strength = 0
      startAnimation()
    }

    resizeCanvas()

    window.addEventListener('resize', resizeCanvas)

    if (!animationsDisabled) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true })

      document.documentElement.addEventListener('pointerleave', handlePointerLeave)
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)

      window.removeEventListener('pointermove', handlePointerMove)

      document.documentElement.removeEventListener('pointerleave', handlePointerLeave)

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [animationsDisabled, themeKey])

  return (
    <canvas
      ref={canvasReference}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 size-full"
    />
  )
}
