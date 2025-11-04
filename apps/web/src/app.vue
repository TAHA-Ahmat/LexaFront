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
const currentDir = computed(() => {
  const l = locales.value.find(l => l.code === locale.value)
  return (l as any)?.dir === 'rtl' ? 'rtl' : 'ltr'
})

// Charger la police Google Fonts
useHead({
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
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
    }
  ]
})
</script>
