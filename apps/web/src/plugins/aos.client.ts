import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    // Initialiser AOS dès que possible après l'hydratation
    // Utilisation de nextTick pour s'assurer que le DOM est prêt
    nuxtApp.hook('app:mounted', () => {
      // NextTick garantit que l'hydratation est terminée
      nextTick(() => {
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

          // Démarrer immédiatement (pas d'attente du load)
          startEvent: 'DOMContentLoaded',
        })

        // Forcer un refresh immédiat après init
        AOS.refresh()
      })
    })

    // Après chaque navigation SPA (dont changement de langue), les nouveaux
    // éléments [data-aos] ne sont jamais traités par AOS sinon => opacity 0
    // permanent via le CSS anti-flash. refreshHard() re-scanne le DOM.
    nuxtApp.hook('page:finish', () => {
      nextTick(() => AOS.refreshHard())
    })
  }
})
