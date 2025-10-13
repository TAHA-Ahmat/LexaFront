/**
 * Composable pour gérer le SEO de manière centralisée
 */
export const useSeo = () => {
  const config = useRuntimeConfig()
  const { locale } = useI18n()

  const setPageMeta = (options: {
    title: string
    description: string
    image?: string
    type?: 'website' | 'article'
    url?: string
  }) => {
    const siteUrl = config.public.siteUrl
    const ogImage = options.image || `${siteUrl}/og-default.jpg`
    const pageUrl = options.url || siteUrl

    useSeoMeta({
      title: options.title,
      description: options.description,
      ogTitle: options.title,
      ogDescription: options.description,
      ogImage: ogImage,
      ogUrl: pageUrl,
      ogType: options.type || 'website',
      twitterCard: 'summary_large_image',
      twitterTitle: options.title,
      twitterDescription: options.description,
      twitterImage: ogImage
    })

    useHead({
      htmlAttrs: {
        lang: locale.value,
        dir: locale.value === 'ar' ? 'rtl' : 'ltr'
      }
    })
  }

  return {
    setPageMeta
  }
}
