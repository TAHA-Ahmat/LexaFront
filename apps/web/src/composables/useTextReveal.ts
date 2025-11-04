import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import { gsap } from 'gsap'

export interface TextRevealOptions {
  type?: 'letters' | 'words' | 'lines'
  duration?: number
  stagger?: number
  ease?: string
  delay?: number
  from?: 'top' | 'bottom' | 'left' | 'right' | 'center'
  blur?: boolean
  scale?: boolean
  rotate?: boolean
  threshold?: number
  once?: boolean
}

/**
 * Composable pour créer des animations de révélation de texte
 * Split le texte en lettres/mots/lignes et les anime individuellement
 *
 * @param element - Ref de l'élément contenant le texte
 * @param options - Options de configuration
 * @returns Un objet avec les fonctions de contrôle
 *
 * @example
 * const titleRef = ref<HTMLElement | null>(null)
 * const { reveal, reset } = useTextReveal(titleRef, { type: 'letters', stagger: 0.03 })
 */
export function useTextReveal(
  element: Ref<HTMLElement | null>,
  options: TextRevealOptions = {}
) {
  const {
    type = 'words',
    duration = 0.8,
    stagger = 0.05,
    ease = 'power3.out',
    delay = 0,
    from = 'bottom',
    blur = true,
    scale = true,
    rotate = false,
    threshold = 0.2,
    once = true
  } = options

  const isRevealed = ref(false)
  const splitElements = ref<HTMLElement[]>([])
  let observer: IntersectionObserver | null = null

  /**
   * Split le texte en éléments individuels (lettres/mots/lignes)
   */
  const splitText = () => {
    if (!element.value) return

    const text = element.value.textContent || ''
    const originalHTML = element.value.innerHTML

    let parts: string[] = []

    if (type === 'letters') {
      parts = text.split('')
    } else if (type === 'words') {
      parts = text.split(' ')
    } else if (type === 'lines') {
      // Pour les lignes, on utilise <br> ou les retours à la ligne naturels
      parts = text.split('\n').filter(line => line.trim())
    }

    // Créer les éléments wrappés
    const wrappedParts = parts.map((part, index) => {
      const span = document.createElement('span')
      span.style.display = 'inline-block'
      span.style.overflow = 'hidden'
      span.style.verticalAlign = 'top'

      const inner = document.createElement('span')
      inner.style.display = 'inline-block'
      inner.textContent = part === ' ' ? '\u00A0' : part

      // Ajouter un espace après chaque mot
      if (type === 'words' && index < parts.length - 1) {
        inner.textContent += '\u00A0'
      }

      span.appendChild(inner)
      return span
    })

    // Vider l'élément et ajouter les nouveaux spans
    element.value.innerHTML = ''
    wrappedParts.forEach(span => element.value!.appendChild(span))

    // Garder une référence aux inner spans pour l'animation
    splitElements.value = Array.from(element.value.querySelectorAll('span > span')) as HTMLElement[]
  }

  /**
   * Configure les propriétés initiales selon la direction
   */
  const getInitialProps = () => {
    const props: any = {
      opacity: 0
    }

    switch (from) {
      case 'top':
        props.y = -100
        break
      case 'bottom':
        props.y = 100
        break
      case 'left':
        props.x = -100
        break
      case 'right':
        props.x = 100
        break
      case 'center':
        props.scale = 0
        break
    }

    if (blur) {
      props.filter = 'blur(10px)'
    }

    if (scale && from !== 'center') {
      props.scale = 0.5
    }

    if (rotate) {
      props.rotation = from === 'left' ? -15 : 15
    }

    return props
  }

  /**
   * Configure les propriétés finales
   */
  const getFinalProps = () => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      filter: 'blur(0px)',
      duration,
      ease,
      delay,
      stagger: {
        each: stagger,
        from: 'start'
      }
    }
  }

  /**
   * Révèle le texte avec l'animation
   */
  const reveal = () => {
    if (splitElements.value.length === 0) return

    const initialProps = getInitialProps()
    const finalProps = getFinalProps()

    // Set initial state
    gsap.set(splitElements.value, initialProps)

    // Animate to final state
    gsap.to(splitElements.value, finalProps)

    isRevealed.value = true
  }

  /**
   * Reset l'animation
   */
  const reset = () => {
    if (splitElements.value.length === 0) return

    const initialProps = getInitialProps()
    gsap.set(splitElements.value, initialProps)
    isRevealed.value = false
  }

  /**
   * Cache le texte avec animation inverse
   */
  const hide = () => {
    if (splitElements.value.length === 0) return

    const initialProps = getInitialProps()
    gsap.to(splitElements.value, {
      ...initialProps,
      duration: duration * 0.6,
      stagger: {
        each: stagger * 0.5,
        from: 'end'
      }
    })

    isRevealed.value = false
  }

  /**
   * Setup l'IntersectionObserver pour l'auto-reveal au scroll
   */
  const setupScrollReveal = () => {
    if (!element.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isRevealed.value) {
            reveal()
            if (once && observer) {
              observer.disconnect()
            }
          }
        })
      },
      { threshold }
    )

    observer.observe(element.value)
  }

  onMounted(() => {
    splitText()
    setupScrollReveal()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    reveal,
    reset,
    hide,
    isRevealed,
    splitElements
  }
}

/**
 * Directive Vue pour utiliser facilement le text reveal
 *
 * @example
 * <h1 v-text-reveal="{ type: 'letters', stagger: 0.03 }">Hello World</h1>
 */
export const vTextReveal = {
  mounted(el: HTMLElement, binding: any) {
    const elementRef = ref(el)
    useTextReveal(elementRef, binding.value || {})
  }
}
