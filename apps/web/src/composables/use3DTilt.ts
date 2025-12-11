import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import { gsap } from 'gsap'

export interface Tilt3DOptions {
  maxTilt?: number
  perspective?: number
  scale?: number
  speed?: number
  glare?: boolean
  glareMaxOpacity?: number
  reverse?: boolean
  reset?: boolean
  resetDuration?: number
  disabled?: boolean
}

/**
 * Composable pour créer un effet 3D tilt sur les cartes
 * L'élément s'incline selon la position de la souris
 *
 * @param element - Ref de l'élément DOM
 * @param options - Options de configuration
 * @returns Un objet avec les fonctions de contrôle
 *
 * @example
 * const cardRef = ref<HTMLElement | null>(null)
 * const { activate } = use3DTilt(cardRef, { maxTilt: 15, glare: true })
 */
export function use3DTilt(
  element: Ref<HTMLElement | null>,
  options: Tilt3DOptions = {}
) {
  const {
    maxTilt = 20,
    perspective = 1000,
    scale = 1.05,
    speed = 0.6,
    glare = true,
    glareMaxOpacity = 0.3,
    reverse = false,
    reset = true,
    resetDuration = 1.2,
    disabled = false
  } = options

  const tiltX = ref(0)
  const tiltY = ref(0)
  const glareElement = ref<HTMLElement | null>(null)

  /**
   * Crée l'élément de glare (brillance) si activé
   */
  const createGlare = () => {
    if (!element.value || !glare) return

    const glare = document.createElement('div')
    glare.classList.add('tilt-glare')
    glare.style.position = 'absolute'
    glare.style.top = '0'
    glare.style.left = '0'
    glare.style.width = '100%'
    glare.style.height = '100%'
    glare.style.overflow = 'hidden'
    glare.style.pointerEvents = 'none'
    glare.style.borderRadius = 'inherit'

    const glareInner = document.createElement('div')
    glareInner.classList.add('tilt-glare-inner')
    glareInner.style.position = 'absolute'
    glareInner.style.top = '50%'
    glareInner.style.left = '50%'
    glareInner.style.width = '200%'
    glareInner.style.height = '200%'
    glareInner.style.transform = 'translate(-50%, -50%)'
    glareInner.style.background = 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)'
    glareInner.style.opacity = '0'

    glare.appendChild(glareInner)
    element.value.appendChild(glare)
    glareElement.value = glareInner

    // Ensure parent has position context
    if (getComputedStyle(element.value).position === 'static') {
      element.value.style.position = 'relative'
    }

    // Ensure parent has overflow hidden for glare
    element.value.style.overflow = 'hidden'
  }

  /**
   * Calcule l'angle de tilt selon la position de la souris
   */
  const handleMouseMove = (e: MouseEvent) => {
    if (!element.value || disabled) return

    const rect = element.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Position relative de la souris (-1 à 1)
    const mouseX = (e.clientX - rect.left) / rect.width
    const mouseY = (e.clientY - rect.top) / rect.height

    // Calculer les angles de rotation
    let rotateX = (mouseY - 0.5) * maxTilt * 2
    let rotateY = (mouseX - 0.5) * maxTilt * 2

    if (reverse) {
      rotateX = -rotateX
      rotateY = -rotateY
    }

    tiltX.value = rotateX
    tiltY.value = rotateY

    // Animer le tilt
    gsap.to(element.value, {
      rotationX: -rotateX,
      rotationY: rotateY,
      scale,
      duration: speed,
      ease: 'power2.out',
      transformPerspective: perspective,
      transformStyle: 'preserve-3d'
    })

    // Animer le glare si activé
    if (glare && glareElement.value) {
      const glareX = mouseX * 100
      const glareY = mouseY * 100
      const glareOpacity = Math.min(
        Math.sqrt(Math.pow(mouseX - 0.5, 2) + Math.pow(mouseY - 0.5, 2)) * 2,
        1
      ) * glareMaxOpacity

      gsap.to(glareElement.value, {
        x: `${glareX - 100}%`,
        y: `${glareY - 100}%`,
        opacity: glareOpacity,
        duration: speed,
        ease: 'power2.out'
      })

      // Calculer l'angle du gradient selon la position de la souris
      const angle = Math.atan2(mouseY - 0.5, mouseX - 0.5) * (180 / Math.PI)
      glareElement.value.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`
    }
  }

  /**
   * Reset le tilt quand la souris quitte
   */
  const handleMouseLeave = () => {
    if (!element.value || disabled || !reset) return

    tiltX.value = 0
    tiltY.value = 0

    gsap.to(element.value, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: resetDuration,
      ease: 'elastic.out(1, 0.5)'
    })

    if (glare && glareElement.value) {
      gsap.to(glareElement.value, {
        opacity: 0,
        duration: resetDuration * 0.5,
        ease: 'power2.out'
      })
    }
  }

  /**
   * Active l'effet tilt
   */
  const activate = () => {
    if (!element.value || disabled) return

    createGlare()
    element.value.addEventListener('mousemove', handleMouseMove)
    element.value.addEventListener('mouseleave', handleMouseLeave)

    // Set initial perspective
    element.value.style.transformStyle = 'preserve-3d'
  }

  /**
   * Désactive l'effet tilt
   */
  const deactivate = () => {
    if (!element.value) return

    element.value.removeEventListener('mousemove', handleMouseMove)
    element.value.removeEventListener('mouseleave', handleMouseLeave)

    // Reset transform
    gsap.to(element.value, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.3
    })

    // Remove glare
    if (glareElement.value) {
      glareElement.value.parentElement?.remove()
      glareElement.value = null
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
    tiltX,
    tiltY
  }
}

/**
 * Composable pour créer un effet parallax interne sur les enfants
 * Les éléments enfants bougent à des vitesses différentes lors du tilt
 *
 * @param element - Ref de l'élément parent
 * @param childrenSelectors - Sélecteurs CSS des enfants à animer
 * @param options - Options de configuration
 */
export function use3DTiltWithParallax(
  element: Ref<HTMLElement | null>,
  childrenSelectors: string[] = ['.tilt-layer'],
  options: Tilt3DOptions & { parallaxStrength?: number } = {}
) {
  const { parallaxStrength = 15, ...tiltOptions } = options
  const childrenElements = ref<HTMLElement[]>([])

  const tilt = use3DTilt(element, tiltOptions)

  const handleMouseMove = (e: MouseEvent) => {
    if (!element.value || childrenElements.value.length === 0) return

    const rect = element.value.getBoundingClientRect()
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5

    // Animer chaque enfant avec une intensité différente
    childrenElements.value.forEach((child, index) => {
      const depth = (index + 1) * parallaxStrength
      const moveX = mouseX * depth
      const moveY = mouseY * depth

      gsap.to(child, {
        x: moveX,
        y: moveY,
        duration: 0.6,
        ease: 'power2.out'
      })
    })
  }

  const handleMouseLeave = () => {
    childrenElements.value.forEach(child => {
      gsap.to(child, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)'
      })
    })
  }

  onMounted(() => {
    if (!element.value) return

    // Trouver tous les enfants à animer
    childrenSelectors.forEach(selector => {
      const elements = element.value!.querySelectorAll(selector) as NodeListOf<HTMLElement>
      childrenElements.value.push(...Array.from(elements))
    })

    // Ajouter les event listeners
    element.value.addEventListener('mousemove', handleMouseMove)
    element.value.addEventListener('mouseleave', handleMouseLeave)
  })

  onUnmounted(() => {
    if (element.value) {
      element.value.removeEventListener('mousemove', handleMouseMove)
      element.value.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return {
    ...tilt,
    childrenElements
  }
}
