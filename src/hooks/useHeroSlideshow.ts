import { useEffect, useState } from 'react'

export function useHeroSlideshow(slideCount: number, intervalMs = 4500) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slideCount)
    }, intervalMs)

    return () => window.clearInterval(intervalId)
  }, [intervalMs, slideCount])

  return { activeSlide, setActiveSlide }
}
