import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (typeof window !== 'undefined') {
    AOS.init({
      // Configuration optimale pour Lexafric
      duration: 800,           // Durée des animations (ms)
      easing: 'ease-out-cubic', // Courbe d'animation fluide
      once: true,              // Animation une seule fois (performance)
      offset: 100,             // Déclencher 100px avant la vue
      delay: 0,                // Pas de délai par défaut
      mirror: false,           // Pas d'animation au scroll retour
      anchorPlacement: 'top-bottom', // Point de déclenchement
      disable: false,          // Actif sur tous devices

      // Support prefers-reduced-motion (accessibilité)
      disableMutationObserver: false,

      // Optimisation GPU
      useClassNames: true,
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
    })
  }
})
