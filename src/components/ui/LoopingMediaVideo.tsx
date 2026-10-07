import { useEffect, useRef } from 'react'

interface LoopingMediaVideoProps {
  src: string
  label: string
  className?: string
  paused: boolean
}

function resetVideo(video: HTMLVideoElement) {
  video.pause()

  if (video.readyState >= 1) {
    video.currentTime = 0
    return
  }

  video.load()
}

export function LoopingMediaVideo({ src, label, className, paused }: LoopingMediaVideoProps) {
  const videoReference = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoReference.current

    if (!video) {
      return
    }

    // Resetting to time zero keeps disabled effects deterministic across all videos.
    if (paused) {
      resetVideo(video)
      return
    }

    void video.play().catch(() => undefined)
  }, [paused, src])

  return (
    <video
      ref={videoReference}
      className={className}
      src={src}
      aria-label={label}
      autoPlay={!paused}
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      onLoadedData={(event) => {
        if (paused) {
          resetVideo(event.currentTarget)
        }
      }}
    />
  )
}
