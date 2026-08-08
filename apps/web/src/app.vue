<template>
  <div :dir="currentDir" class="font-sans antialiased">
    <NuxtLayout>
      <NuxtPage :transition="{
        name: 'page',
        mode: 'out-in',
        duration: 300
      }" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const currentLocale = computed(() => locales.value.find(l => l.code === locale.value))
const currentDir = computed(() => (currentLocale.value as any)?.dir === 'rtl' ? 'rtl' : 'ltr')

// Police arabe chargée uniquement en locale ar (poids nul pour FR/EN)
const fontHref = computed(() =>
  locale.value === 'ar'
    ? 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap'
    : 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
)

// hreflang FR/EN/AR pour l'indexation multilingue
const i18nHead = useLocaleHead({ seo: true })

// lang/dir sur <html> selon la locale + police Google Fonts non-bloquante
useHead({
  htmlAttrs: {
    lang: () => (currentLocale.value as any)?.language || locale.value,
    dir: () => currentDir.value
  },
  script: [
    {
      type: 'application/ld+json',
      // Donnees structurees cabinet (schema.org LegalService)
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: 'Lexafric',
        description: 'Cabinet de conseil juridique, fiscal et social en Afrique centrale',
        url: 'https://www.lexafric.com',
        telephone: '+23522519166',
        email: 'contact@lexafric.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: "N'Djamena",
          addressCountry: 'TD'
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' }
        ],
        areaServed: ['TD', 'CEMAC']
      })
    }
  ],
  // Getter : les alternates hreflang changent a chaque route
  link: () => [
    ...(i18nHead.value.link || []),
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: fontHref.value,
      // Chargement non-bloquant
      media: 'print',
      onload: "this.media='all'"
    }
  ]
})
</script>
