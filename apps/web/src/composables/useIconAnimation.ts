import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import { gsap } from 'gsap'

export interface IconAnimationOptions {
  type?: 'bounce' | 'rotate' | 'pulse' | 'shake' | 'flip' | 'swing' | 'tada' | 'heartbeat'
  trigger?: 'hover' | 'click' | 'auto' | 'scroll'
  duration?: number
  ease?: string
  loop?: boolean
  loopDelay?: number
  scale?: number
  disabled?: boolean
}

/**
 * Composable pour animer les icônes avec différents effets
 *
 * @param element - Ref de l'élément icône
 * @param options - Options de configuration
 * @returns Un objet avec les fonctions de contrôle
 *
 * @example
 * const iconRef = ref<HTMLElement | null>(null)
 * const { play } = useIconAnimation(iconRef, { type: 'bounce', trigger: 'hover' })
 */
export function useIconAnimation(
  element: Ref<HTMLElement | null>,
  options: IconAnimationOptions = {}
) {
  const {
    type = 'bounce',
    trigger = 'hover',
    duration = 0.6,
    ease = 'elastic.out(1, 0.5)',
    loop = false,
    loopDelay = 2,
    scale = 1.2,
    disabled = false
  } = options

  const isPlaying = ref(false)
  let timeline: gsap.core.Timeline | null = null
  let loopTimeout: number | null = null

  /**
   * Animations prédéfinies
   */
  const animations = {
    bounce: () => {
      if (!element.value) return null
      return gsap.timeline()
        .to(element.value, {
          y: -20,
          duration: duration * 0.4,
          ease: 'power2.out'
        })
        .to(element.value, {
          y: 0,
          duration: duration * 0.6,
          ease: 'bounce.out'
        })
    },

    rotate: () => {
      if (!element.value) return null
      return gsap.timeline()
        .to(element.value, {
          rotation: 360,
          duration,
          ease: 'power2.inOut'
        })
    },

    pulse: () => {
      if (!element.value) return null
      return gsap.timeline()
        .to(element.value, {
          scale: scale,
          duration: duration * 0.5,
          ease: 'power2.out'
        })
        .to(element.value, {
          scale: 1,
          duration: duration * 0.5,
          ease: 'power2.in'
        })
    },

    shake: () => {
      if (!element.value) return null
      return gsap.timeline()
        .to(element.value, {
          x: -10,
          duration: duration * 0.1,
          ease: 'power2.inOut'
        })
        .to(element.value, {
          x: 10,
          duration: duration * 0.1,
          ease: 'power2.inOut'
        })
        .to(element.value, {
          x: -10,
          duration: duration * 0.1,
          ease: 'power2.inOut'
        })
        .to(element.value, {
          x: 10,
          duration: duration * 0.1,
          ease: 'power2.inOut'
        })
        .to(element.value, {
          x: 0,
          duration: duration * 0.1,
          ease: 'power2.inOut'
        })
    },

    flip: () => {
      if (!element.value) return null
      return gsap.timeline()
        .to(element.value, {
          rotationY: 180,
          duration: duration * 0.5,
          ease: 'power2.in'
        })
        .to(element.value, {
          rotationY: 360,
          duration: duration * 0.5,
          ease: 'power2.out'
        })
    },

    swing: () => {
      if (!element.value) return null
      return gsap.timeline()
        .to(element.value, {
          rotation: 15,
          duration: duration * 0.2,
          ease: 'power2.out',
          transformOrigin: 'top center'
        })
        .to(element.value, {
          rotation: -10,
          duration: duration * 0.2,
          ease: 'power2.inOut'
        })
        .to(element.value, {
          rotation: 5,
          duration: duration * 0.2,
          ease: 'power2.inOut'
        })
        .to(element.value, {
          rotation: -5,
          duration: duration * 0.2,
          ease: 'power2.inOut'
        })
        .to(element.value, {
          rotation: 0,
          duration: duration * 0.2,
          ease: 'power2.in'
        })
    },

    tada: () => {
      if (!element.value) return null
      return gsap.timeline()
        .to(element.value, {
          scale: 0.9,
          rotation: -3,
          duration: duration * 0.1,
          ease: 'power2.out'
        })
        .to(element.value, {
          scale: scale,
          rotation: 3,
          duration: duration * 0.15,
          ease: 'power2.out'
        })
        .to(element.value, {
          rotation: -3,
          duration: duration * 0.15,
          ease: 'power2.inOut'
        })
        .to(element.value, {
          rotation: 3,
          duration: duration * 0.15,
          ease: 'power2.inOut'
        })
        .to(element.value, {
          rotation: -3,
          duration: duration * 0.15,
          ease: 'power2.inOut'
        })
        .to(element.value, {
          scale: 1,
          rotation: 0,
          duration: duration * 0.3,
          ease: 'power2.in'
        })
    },

    heartbeat: () => {
      if (!element.value) return null
      return gsap.timeline()
        .to(element.value, {
          scale: scale,
          duration: duration * 0.2,
          ease: 'power2.out'
        })
        .to(element.value, {
          scale: 1,
          duration: duration * 0.15,
          ease: 'power2.in'
        })
        .to(element.value, {
          scale: scale,
          duration: duration * 0.2,
          ease: 'power2.out'
        })
        .to(element.value, {
          scale: 1,
          duration: duration * 0.45,
          ease: 'power2.in'
        })
    }
  }

  /**
   * Joue l'animation
   */
  const play = () => {
    if (disabled || isPlaying.value || !element.value) return

    // Tuer l'animation précédente si elle existe
    if (timeline) {
      timeline.kill()
    }

    isPlaying.value = true

    // Créer et jouer l'animation
    timeline = animations[type]()

    if (timeline) {
      timeline.eventCallback('onComplete', () => {
        isPlaying.value = false

        // Loop si activé
        if (loop && !disabled) {
          loopTimeout = window.setTimeout(() => {
            play()
          }, loopDelay * 1000)
        }
      })
    }
  }

  /**
   * Stop l'animation et reset
   */
  const stop = () => {
    if (timeline) {
      timeline.kill()
    }

    if (loopTimeout) {
      clearTimeout(loopTimeout)
      loopTimeout = null
    }

    if (element.value) {
      gsap.set(element.value, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        rotationY: 0,
        transformOrigin: 'center center'
      })
    }

    isPlaying.value = false
  }

  /**
   * Handlers pour les triggers
   */
  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      play()
    }
  }

  const handleClick = () => {
    if (trigger === 'click') {
      play()
    }
  }

  /**
   * Active les event listeners selon le trigger
   */
  const activate = () => {
    if (!element.value || disabled) return

    if (trigger === 'hover') {
      element.value.addEventListener('mouseenter', handleMouseEnter)
    } else if (trigger === 'click') {
      element.value.addEventListener('click', handleClick)
    } else if (trigger === 'auto' && loop) {
      play()
    }
  }

  /**
   * Désactive les event listeners
   */
  const deactivate = () => {
    if (!element.value) return

    element.value.removeEventListener('mouseenter', handleMouseEnter)
    element.value.removeEventListener('click', handleClick)

    stop()
  }

  onMounted(() => {
    activate()
  })

  onUnmounted(() => {
    deactivate()
  })

  return {
    play,
    stop,
    activate,
    deactivate,
    isPlaying
  }
}

/**
 * Composable pour animer une icône au scroll
 *
 * @param element - Ref de l'élément icône
 * @param options - Options de configuration
 */
export function useScrollIconAnimation(
  element: Ref<HTMLElement | null>,
  options: IconAnimationOptions & { threshold?: number; once?: boolean } = {}
) {
  const { threshold = 0.5, once = true, ...animationOptions } = options
  const hasAnimated = ref(false)
  let observer: IntersectionObserver | null = null

  const iconAnimation = useIconAnimation(element, {
    ...animationOptions,
    trigger: 'auto'
  })

  onMounted(() => {
    if (!element.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasAnimated.value || !once) {
              iconAnimation.play()
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

  return iconAnimation
}
