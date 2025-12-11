import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import { gsap } from 'gsap'

export interface MagneticButtonOptions {
  strength?: number
  ease?: string
  duration?: number
  resetDuration?: number
  scaleFactor?: number
  disabled?: boolean
}

/**
 * Composable pour créer un effet "magnetic" sur les boutons
 * Le bouton suit le curseur avec un effet d'aimant
 *
 * @param element - Ref de l'élément DOM
 * @param options - Options de configuration
 * @returns Un objet avec les fonctions de contrôle
 *
 * @example
 * const buttonRef = ref<HTMLElement | null>(null)
 * const { activate, deactivate } = useMagneticButton(buttonRef, { strength: 0.3 })
 */
export function useMagneticButton(
  element: Ref<HTMLElement | null>,
  options: MagneticButtonOptions = {}
) {
  const {
    strength = 0.4,
    ease = 'power3.out',
    duration = 0.6,
    resetDuration = 0.8,
    scaleFactor = 1.1,
    disabled = false
  } = options

  const isActive = ref(false)
  const currentX = ref(0)
  const currentY = ref(0)

  const handleMouseMove = (e: MouseEvent) => {
    if (!element.value || disabled) return

    const rect = element.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculer la distance du curseur par rapport au centre
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    // Appliquer le facteur de force
    const moveX = deltaX * strength
    const moveY = deltaY * strength

    currentX.value = moveX
    currentY.value = moveY

    // Animer le déplacement
    gsap.to(element.value, {
      x: moveX,
      y: moveY,
      scale: scaleFactor,
      duration,
      ease,
      overwrite: 'auto'
    })
  }

  const handleMouseLeave = () => {
    if (!element.value || disabled) return

    currentX.value = 0
    currentY.value = 0
    isActive.value = false

    // Retour à la position initiale
    gsap.to(element.value, {
      x: 0,
      y: 0,
      scale: 1,
      duration: resetDuration,
      ease: 'elastic.out(1, 0.3)',
      overwrite: 'auto'
    })
  }

  const handleMouseEnter = () => {
    if (!disabled) {
      isActive.value = true
    }
  }

  const activate = () => {
    if (!element.value) return

    element.value.addEventListener('mouseenter', handleMouseEnter)
    element.value.addEventListener('mousemove', handleMouseMove)
    element.value.addEventListener('mouseleave', handleMouseLeave)
  }

  const deactivate = () => {
    if (!element.value) return

    element.value.removeEventListener('mouseenter', handleMouseEnter)
    element.value.removeEventListener('mousemove', handleMouseMove)
    element.value.removeEventListener('mouseleave', handleMouseLeave)

    // Reset position
    gsap.to(element.value, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.3
    })
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
    isActive,
    currentX,
    currentY
  }
}

/**
 * Composable pour créer un effet magnetic avec shadow dynamique
 * Combine l'effet magnetic avec une shadow qui suit le curseur
 *
 * @param element - Ref de l'élément DOM
 * @param options - Options de configuration
 */
export function useMagneticWithShadow(
  element: Ref<HTMLElement | null>,
  options: MagneticButtonOptions & { shadowStrength?: number } = {}
) {
  const { shadowStrength = 20, ...magneticOptions } = options

  const handleMouseMove = (e: MouseEvent) => {
    if (!element.value) return

    const rect = element.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    // Calculer l'angle pour la shadow
    const shadowX = -deltaX / shadowStrength
    const shadowY = -deltaY / shadowStrength

    // Appliquer la shadow dynamique
    gsap.to(element.value, {
      '--shadow-x': `${shadowX}px`,
      '--shadow-y': `${shadowY}px`,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const magneticEffect = useMagneticButton(element, magneticOptions)

  onMounted(() => {
    if (element.value) {
      element.value.addEventListener('mousemove', handleMouseMove)
    }
  })

  onUnmounted(() => {
    if (element.value) {
      element.value.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return magneticEffect
}
