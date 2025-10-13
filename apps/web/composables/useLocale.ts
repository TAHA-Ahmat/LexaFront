/**
 * Composable pour gérer les locales et RTL
 */
export const useLocaleHelpers = () => {
  const { locale } = useI18n()

  const isRTL = computed(() => locale.value === 'ar')

  const dir = computed(() => isRTL.value ? 'rtl' : 'ltr')

  const textAlign = computed(() => isRTL.value ? 'right' : 'left')

  return {
    isRTL,
    dir,
    textAlign
  }
}
