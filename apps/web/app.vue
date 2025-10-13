<template>
  <div :dir="currentDir">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const currentDir = computed(() => {
  const l = locales.value.find(l => l.code === locale.value)
  return (l as any)?.dir === 'rtl' ? 'rtl' : 'ltr'
})
</script>
