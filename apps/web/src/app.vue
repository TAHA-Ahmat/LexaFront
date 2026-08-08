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

// lang/dir sur <html> selon la locale + police Google Fonts non-bloquante
useHead({
  htmlAttrs: {
    lang: () => (currentLocale.value as any)?.language || locale.value,
    dir: () => currentDir.value
  },
  link: [
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
      href: fontHref,
      // Chargement non-bloquant
      media: 'print',
      onload: "this.media='all'"
    }
  ]
})
</script>
