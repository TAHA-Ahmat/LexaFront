import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import { gsap } from 'gsap'

export interface CounterAnimationOptions {
  duration?: number
  ease?: string
  delay?: number
  onUpdate?: (value: number) => void
  onComplete?: () => void
}

/**
 * Composable pour animer les compteurs numériques
 * Utilise GSAP pour une animation fluide et performante
 *
 * @param target - La valeur cible du compteur
 * @param options - Options de configuration de l'animation
 * @returns Un objet avec la valeur animée et les fonctions de contrôle
 *
 * @example
 * const { value, start, reset } = useCounterAnimation(1000, { duration: 2 })
 */
export function useCounterAnimation(
  target: number | Ref<number>,
  options: CounterAnimationOptions = {}
) {
  const {
    duration = 2,
    ease = 'power2.out',
    delay = 0,
    onUpdate,
    onComplete
  } = options

  const value = ref(0)
  const tweenInstance = ref<gsap.core.Tween | null>(null)

  const start = () => {
    const targetValue = typeof target === 'number' ? target : target.value

    // Nettoyer l'animation précédente si elle existe
    if (tweenInstance.value) {
      tweenInstance.value.kill()
    }

    tweenInstance.value = gsap.to(value, {
      value: targetValue,
      duration,
      ease,
      delay,
      onUpdate: () => {
        if (onUpdate) {
          onUpdate(value.value)
        }
      },
      onComplete: () => {
        if (onComplete) {
          onComplete()
        }
      }
    })
  }

  const reset = () => {
    if (tweenInstance.value) {
      tweenInstance.value.kill()
    }
    value.value = 0
  }

  const pause = () => {
    if (tweenInstance.value) {
      tweenInstance.value.pause()
    }
  }

  const resume = () => {
    if (tweenInstance.value) {
      tweenInstance.value.resume()
    }
  }

  onUnmounted(() => {
    if (tweenInstance.value) {
      tweenInstance.value.kill()
    }
  })

  return {
    value,
    start,
    reset,
    pause,
    resume
  }
}

/**
 * Composable pour animer automatiquement un compteur lors du scroll
 * Combine IntersectionObserver avec useCounterAnimation
 *
 * @param element - Ref de l'élément DOM à observer
 * @param target - La valeur cible du compteur
 * @param options - Options de configuration
 * @returns Un objet avec la valeur animée
 */
export function useScrollCounter(
  element: Ref<HTMLElement | null>,
  target: number | Ref<number>,
  options: CounterAnimationOptions & { threshold?: number, once?: boolean } = {}
) {
  const { threshold = 0.5, once = true, ...animationOptions } = options
  const { value, start } = useCounterAnimation(target, animationOptions)
  const hasAnimated = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!element.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasAnimated.value || !once) {
              start()
              hasAnimated.value = true
            }
          }
        })
      },
      { threshold }
    )

    observer.observe(element.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { value }
}

/**
 * Formateur pour afficher les nombres avec séparateurs
 *
 * @param value - Le nombre à formater
 * @param options - Options de formatage
 * @returns Le nombre formaté en string
 */
export function formatCounter(
  value: number,
  options: {
    decimals?: number
    separator?: string
    suffix?: string
    prefix?: string
  } = {}
): string {
  const {
    decimals = 0,
    separator = ' ',
    suffix = '',
    prefix = ''
  } = options

  const rounded = Math.floor(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
  const parts = rounded.toFixed(decimals).split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)

  return prefix + parts.join('.') + suffix
}
