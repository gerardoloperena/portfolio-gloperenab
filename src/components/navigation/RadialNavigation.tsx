import { Briefcase, Circle, FolderKanban, Mail, UserRound, type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import type { CSSProperties, ReactNode } from 'react'
import './radial-navigation.css'

export interface RadialNavigationItem {
  id: string
  label: string
}

interface RadialNavigationProps {
  children: ReactNode
  items: readonly RadialNavigationItem[]
  animationsDisabled: boolean
  onSelect: (id: string) => void
}

interface NavigationItemStyles extends CSSProperties {
  '--item-position': string
  '--item-width': string
  '--cut-center-y': string
  '--cut-radius': string
  '--label-offset': string
}

const navigationIcons: Record<string, LucideIcon> = {
  projects: FolderKanban,
  experience: Briefcase,
  about: UserRound,
  contact: Mail,
}

const baseUnit = 16
const itemHeight = 4
const itemGap = 0.75
const profileRadius = 9
const menuCircleGap = 1
const cutRadius = profileRadius + menuCircleGap

const itemWidths = [31, 34, 34, 31]

const labelOffsets = [3.85, 5.05, 5.05, 3.85]

function formatCoordinate(value: number) {
  return Number(value.toFixed(2))
}

function getCircleRightCoordinate(y: number, circleCenterY: number, circleRadius: number) {
  const circleCenterX = -6 * baseUnit

  const verticalDistance = y - circleCenterY

  const remainingDistance = circleRadius * circleRadius - verticalDistance * verticalDistance

  if (remainingDistance < 0) {
    return Number.NEGATIVE_INFINITY
  }

  return circleCenterX + Math.sqrt(remainingDistance)
}

// Builds the menu outline around the circular profile cutout.
function createDesktopBorderPath(width: number, circleCenterY: number, circleRadius: number) {
  const inset = 1
  const cornerRadius = 15

  const left = inset
  const right = width - inset
  const top = inset
  const bottom = itemHeight * baseUnit - inset

  const topIntersection = getCircleRightCoordinate(top, circleCenterY, circleRadius)

  const bottomIntersection = getCircleRightCoordinate(bottom, circleCenterY, circleRadius)

  const cutsTop = topIntersection > left && topIntersection < right

  const cutsBottom = bottomIntersection > left && bottomIntersection < right

  const circleCenterX = -6 * baseUnit

  const horizontalDistance = left - circleCenterX

  const leftIntersectionDistance = Math.sqrt(
    Math.max(0, circleRadius * circleRadius - horizontalDistance * horizontalDistance),
  )

  const upperLeftIntersection = circleCenterY - leftIntersectionDistance

  const lowerLeftIntersection = circleCenterY + leftIntersectionDistance

  const formattedRight = formatCoordinate(right)

  const formattedBottom = formatCoordinate(bottom)

  const formattedTop = formatCoordinate(top)

  const radius = formatCoordinate(circleRadius)

  if (cutsTop && cutsBottom) {
    const startX = formatCoordinate(bottomIntersection)

    const endX = formatCoordinate(topIntersection)

    return [
      `M ${startX} ${formattedBottom}`,
      `H ${formatCoordinate(right - cornerRadius)}`,
      `Q ${formattedRight} ${formattedBottom} ${formattedRight} ${formatCoordinate(
        bottom - cornerRadius,
      )}`,
      `V ${formatCoordinate(top + cornerRadius)}`,
      `Q ${formattedRight} ${formattedTop} ${formatCoordinate(
        right - cornerRadius,
      )} ${formattedTop}`,
      `H ${endX}`,
      `A ${radius} ${radius} 0 0 1 ${startX} ${formattedBottom}`,
      'Z',
    ].join(' ')
  }

  if (cutsBottom) {
    const startX = formatCoordinate(bottomIntersection)

    const leftIntersectionY = formatCoordinate(upperLeftIntersection)

    return [
      `M ${startX} ${formattedBottom}`,
      `H ${formatCoordinate(right - cornerRadius)}`,
      `Q ${formattedRight} ${formattedBottom} ${formattedRight} ${formatCoordinate(
        bottom - cornerRadius,
      )}`,
      `V ${formatCoordinate(top + cornerRadius)}`,
      `Q ${formattedRight} ${formattedTop} ${formatCoordinate(
        right - cornerRadius,
      )} ${formattedTop}`,
      `H ${formatCoordinate(left + cornerRadius)}`,
      `Q ${formatCoordinate(left)} ${formattedTop} ${formatCoordinate(left)} ${formatCoordinate(
        top + cornerRadius,
      )}`,
      `V ${leftIntersectionY}`,
      `A ${radius} ${radius} 0 0 1 ${startX} ${formattedBottom}`,
      'Z',
    ].join(' ')
  }

  if (cutsTop) {
    const startX = formatCoordinate(left + cornerRadius)

    const endX = formatCoordinate(topIntersection)

    const leftIntersectionY = formatCoordinate(lowerLeftIntersection)

    return [
      `M ${startX} ${formattedBottom}`,
      `H ${formatCoordinate(right - cornerRadius)}`,
      `Q ${formattedRight} ${formattedBottom} ${formattedRight} ${formatCoordinate(
        bottom - cornerRadius,
      )}`,
      `V ${formatCoordinate(top + cornerRadius)}`,
      `Q ${formattedRight} ${formattedTop} ${formatCoordinate(
        right - cornerRadius,
      )} ${formattedTop}`,
      `H ${endX}`,
      `A ${radius} ${radius} 0 0 1 ${formatCoordinate(left)} ${leftIntersectionY}`,
      `V ${formatCoordinate(bottom - cornerRadius)}`,
      `Q ${formatCoordinate(left)} ${formattedBottom} ${startX} ${formattedBottom}`,
      'Z',
    ].join(' ')
  }

  return [
    `M ${formatCoordinate(left + cornerRadius)} ${formattedBottom}`,
    `H ${formatCoordinate(right - cornerRadius)}`,
    `Q ${formattedRight} ${formattedBottom} ${formattedRight} ${formatCoordinate(
      bottom - cornerRadius,
    )}`,
    `V ${formatCoordinate(top + cornerRadius)}`,
    `Q ${formattedRight} ${formattedTop} ${formatCoordinate(right - cornerRadius)} ${formattedTop}`,
    `H ${formatCoordinate(left + cornerRadius)}`,
    `Q ${formatCoordinate(left)} ${formattedTop} ${formatCoordinate(left)} ${formatCoordinate(
      top + cornerRadius,
    )}`,
    `V ${formatCoordinate(bottom - cornerRadius)}`,
    `Q ${formatCoordinate(left)} ${formattedBottom} ${formatCoordinate(
      left + cornerRadius,
    )} ${formattedBottom}`,
    'Z',
  ].join(' ')
}

const mobileBorderPath = [
  'M 5 63',
  'H 95',
  'Q 99 63 99 59',
  'V 5',
  'Q 99 1 95 1',
  'H 5',
  'Q 1 1 1 5',
  'V 59',
  'Q 1 63 5 63',
  'Z',
].join(' ')

export function RadialNavigation({
  children,
  items,
  animationsDisabled,
  onSelect,
}: RadialNavigationProps) {
  return (
    <div className="radial-navigation-layout">
      <div className="radial-navigation-profile">{children}</div>

      <nav aria-label="Navegación principal" className="radial-navigation">
        {items.map((item, index) => {
          const itemPosition = index * (itemHeight + itemGap)

          const itemWidth = itemWidths[index] ?? 34

          const labelOffset = labelOffsets[index] ?? 5.05

          const circleCenterY = (9 - itemPosition) * baseUnit

          const circleRadius = cutRadius * baseUnit

          const desktopBorderPath = createDesktopBorderPath(
            itemWidth * baseUnit,
            circleCenterY,
            circleRadius,
          )

          const styles: NavigationItemStyles = {
            '--item-position': `${itemPosition}rem`,
            '--item-width': `${itemWidth}rem`,
            '--cut-center-y': `${9 - itemPosition}rem`,
            '--cut-radius': `${cutRadius}rem`,
            '--label-offset': `${labelOffset}rem`,
          }

          const NavigationIcon = navigationIcons[item.id] ?? Circle

          return (
            <motion.button
              key={item.id}
              type="button"
              style={styles}
              className="radial-navigation__item"
              data-animations-disabled={animationsDisabled}
              initial={animationsDisabled ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={animationsDisabled ? undefined : { x: 16 }}
              whileTap={
                animationsDisabled
                  ? undefined
                  : {
                      x: 10,
                      scale: 0.995,
                    }
              }
              transition={{
                opacity: {
                  duration: 0.35,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                },
                x: {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0,
                },
                scale: {
                  duration: 0.12,
                  delay: 0,
                },
              }}
              onClick={() => onSelect(item.id)}
            >
              <span aria-hidden="true" className="radial-navigation__surface" />

              <svg
                aria-hidden="true"
                className="radial-navigation__border radial-navigation__border--mobile"
                viewBox="0 0 100 64"
                preserveAspectRatio="none"
              >
                <path
                  className="radial-navigation__border-path"
                  d={mobileBorderPath}
                  pathLength={1}
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <svg
                aria-hidden="true"
                className="radial-navigation__border radial-navigation__border--desktop"
                viewBox={`0 0 ${itemWidth * baseUnit} ${itemHeight * baseUnit}`}
                preserveAspectRatio="none"
              >
                <path
                  className="radial-navigation__border-path"
                  d={desktopBorderPath}
                  pathLength={1}
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <span className="radial-navigation__label">
                <span className="radial-navigation__icon">
                  <NavigationIcon aria-hidden="true" size={17} strokeWidth={1.9} />
                </span>

                <span>{item.label}</span>
              </span>
            </motion.button>
          )
        })}
      </nav>
    </div>
  )
}
