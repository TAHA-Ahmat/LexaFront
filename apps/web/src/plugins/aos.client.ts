import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (typeof window !== 'undefined') {
    AOS.init({
      // Configuration optimisée pour performances
      duration: 400,           // Réduit de 800 -> 400ms pour plus de fluidité
      easing: 'ease-out',      // Courbe plus simple = moins de calculs
      once: true,              // Animation une seule fois (performance)
      offset: 50,              // Réduit de 100 -> 50px
      delay: 0,                // Pas de délai par défaut
      mirror: false,           // Pas d'animation au scroll retour
      anchorPlacement: 'top-bottom',
      disable: 'mobile',       // Désactivé sur mobile pour performances

      // Support prefers-reduced-motion (accessibilité)
      disableMutationObserver: false,

      // Optimisation GPU
      useClassNames: true,
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
    })
  }
})
