import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import { gsap } from 'gsap'

export interface ParallaxOptions {
  speed?: number
  direction?: 'vertical' | 'horizontal' | 'both'
  reverse?: boolean
  smooth?: boolean
  smoothness?: number
  disabled?: boolean
  offset?: number
}

/**
 * Composable pour créer un effet parallax sur un élément
 * L'élément se déplace à une vitesse différente du scroll
 *
 * @param element - Ref de l'élément DOM
 * @param options - Options de configuration
 * @returns Un objet avec les fonctions de contrôle
 *
 * @example
 * const layerRef = ref<HTMLElement | null>(null)
 * const { activate } = useParallax(layerRef, { speed: 0.5 })
 */
export function useParallax(
  element: Ref<HTMLElement | null>,
  options: ParallaxOptions = {}
) {
  const {
    speed = 0.5,
    direction = 'vertical',
    reverse = false,
    smooth = true,
    smoothness = 0.1,
    disabled = false,
    offset = 0
  } = options

  const scrollY = ref(0)
  const scrollX = ref(0)
  const currentY = ref(0)
  const currentX = ref(0)
  let rafId: number | null = null
  let isActive = false

  /**
   * Calcule la transformation parallax
   */
  const calculateTransform = () => {
    if (!element.value || disabled) return

    const elementRect = element.value.getBoundingClientRect()
    const elementTop = elementRect.top + window.scrollY
    const elementHeight = elementRect.height
    const windowHeight = window.innerHeight

    // Calculer le scroll relatif à l'élément
    const relativeScroll = window.scrollY - elementTop + windowHeight
    const scrollProgress = relativeScroll / (windowHeight + elementHeight)

    // Appliquer l'offset et la vitesse
    const baseOffset = offset
    const multiplier = reverse ? -1 : 1

    if (direction === 'vertical' || direction === 'both') {
      scrollY.value = (window.scrollY * speed * multiplier) + baseOffset
    }

    if (direction === 'horizontal' || direction === 'both') {
      scrollX.value = (window.scrollX * speed * multiplier) + baseOffset
    }
  }

  /**
   * Applique la transformation avec ou sans smooth
   */
  const applyTransform = () => {
    if (!element.value) return

    if (smooth) {
      // Lerp (linear interpolation) pour un mouvement fluide
      currentY.value += (scrollY.value - currentY.value) * smoothness
      currentX.value += (scrollX.value - currentX.value) * smoothness
    } else {
      currentY.value = scrollY.value
      currentX.value = scrollX.value
    }

    // Appliquer la transformation
    const translateY = direction === 'vertical' || direction === 'both' ? currentY.value : 0
    const translateX = direction === 'horizontal' || direction === 'both' ? currentX.value : 0

    gsap.set(element.value, {
      y: translateY,
      x: translateX,
      force3D: true
    })

    // Continuer l'animation si smooth est activé
    if (smooth && isActive) {
      rafId = requestAnimationFrame(applyTransform)
    }
  }

  /**
   * Handler pour le scroll
   */
  const handleScroll = () => {
    calculateTransform()

    if (!smooth) {
      applyTransform()
    } else if (!rafId) {
      rafId = requestAnimationFrame(applyTransform)
    }
  }

  /**
   * Active l'effet parallax
   */
  const activate = () => {
    if (disabled) return

    isActive = true
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation
  }

  /**
   * Désactive l'effet parallax
   */
  const deactivate = () => {
    isActive = false
    window.removeEventListener('scroll', handleScroll)

    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = null
    }

    // Reset position
    if (element.value) {
      gsap.set(element.value, { x: 0, y: 0 })
    }
  }

  onMounted(() => {
    if (!disabled) {
      activate()
    }
  })

  onUnmounted(() => {
    deactivate()
  })

  return {
    activate,
    deactivate,
    scrollY,
    scrollX,
    currentY,
    currentX
  }
}

/**
 * Composable pour créer un effet parallax avec plusieurs layers
 * Chaque layer a une vitesse différente pour créer un effet de profondeur
 *
 * @param layers - Array de refs d'éléments avec leurs vitesses
 * @param options - Options de configuration globales
 *
 * @example
 * const layer1 = ref(null)
 * const layer2 = ref(null)
 * useMultiLayerParallax([
 *   { element: layer1, speed: 0.3 },
 *   { element: layer2, speed: 0.6 }
 * ])
 */
export function useMultiLayerParallax(
  layers: Array<{ element: Ref<HTMLElement | null>; speed: number; reverse?: boolean }>,
  options: Omit<ParallaxOptions, 'speed' | 'reverse'> = {}
) {
  const parallaxInstances: ReturnType<typeof useParallax>[] = []

  layers.forEach(({ element, speed, reverse }) => {
    const instance = useParallax(element, {
      ...options,
      speed,
      reverse
    })
    parallaxInstances.push(instance)
  })

  const activateAll = () => {
    parallaxInstances.forEach(instance => instance.activate())
  }

  const deactivateAll = () => {
    parallaxInstances.forEach(instance => instance.deactivate())
  }

  return {
    activateAll,
    deactivateAll,
    instances: parallaxInstances
  }
}

/**
 * Composable pour créer un effet parallax basé sur la souris
 * L'élément se déplace selon la position de la souris
 *
 * @param element - Ref de l'élément DOM
 * @param options - Options de configuration
 */
export function useMouseParallax(
  element: Ref<HTMLElement | null>,
  options: {
    strength?: number
    reverse?: boolean
    smooth?: boolean
    smoothness?: number
    disabled?: boolean
  } = {}
) {
  const {
    strength = 20,
    reverse = false,
    smooth = true,
    smoothness = 0.1,
    disabled = false
  } = options

  const targetX = ref(0)
  const targetY = ref(0)
  const currentX = ref(0)
  const currentY = ref(0)
  let rafId: number | null = null

  const handleMouseMove = (e: MouseEvent) => {
    if (!element.value || disabled) return

    const { innerWidth, innerHeight } = window
    const mouseX = (e.clientX / innerWidth - 0.5) * 2
    const mouseY = (e.clientY / innerHeight - 0.5) * 2

    const multiplier = reverse ? -1 : 1

    targetX.value = mouseX * strength * multiplier
    targetY.value = mouseY * strength * multiplier
  }

  const animate = () => {
    if (!element.value) return

    if (smooth) {
      currentX.value += (targetX.value - currentX.value) * smoothness
      currentY.value += (targetY.value - currentY.value) * smoothness
    } else {
      currentX.value = targetX.value
      currentY.value = targetY.value
    }

    gsap.set(element.value, {
      x: currentX.value,
      y: currentY.value,
      force3D: true
    })

    rafId = requestAnimationFrame(animate)
  }

  const activate = () => {
    if (disabled) return

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafId = requestAnimationFrame(animate)
  }

  const deactivate = () => {
    window.removeEventListener('mousemove', handleMouseMove)

    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = null
    }

    if (element.value) {
      gsap.set(element.value, { x: 0, y: 0 })
    }
  }

  onMounted(() => {
    if (!disabled) {
      activate()
    }
  })

  onUnmounted(() => {
    deactivate()
  })

  return {
    activate,
    deactivate,
    currentX,
    currentY
  }
}
