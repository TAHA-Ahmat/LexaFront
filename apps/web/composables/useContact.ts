/**
 * Composable pour gérer le formulaire de contact
 * Phase 1 : stub (pas d'envoi réel)
 * Phase 2+ : appel API backend
 */
export const useContact = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  interface ContactForm {
    name: string
    email: string
    message: string
  }

  const submitContact = async (data: ContactForm) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      // Phase 1 : Simulation d'envoi (pas de backend)
      await new Promise(resolve => setTimeout(resolve, 1000))

      console.log('Contact form data (Phase 1 - not sent):', data)

      // Phase 2+ : Remplacer par :
      // const response = await $fetch('/api/contact', {
      //   method: 'POST',
      //   body: data
      // })

      success.value = true
      return true
    } catch (err) {
      error.value = 'Une erreur est survenue. Veuillez réessayer.'
      console.error('Contact form error:', err)
      return false
    } finally {
      loading.value = false
    }
  }

  const reset = () => {
    loading.value = false
    error.value = null
    success.value = false
  }

  return {
    loading,
    error,
    success,
    submitContact,
    reset
  }
}
