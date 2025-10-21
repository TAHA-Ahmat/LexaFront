<template>
  <div class="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white border-b border-blue-700/50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
      <!-- Informations de contact à gauche -->
      <div class="flex items-center gap-4 text-xs text-blue-100">
        <a
          href="mailto:contact@lexafric.com"
          class="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          contact@lexafric.com
        </a>
      </div>

      <!-- Sélecteur de langue à droite -->
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <NuxtLink
          v-for="(l, index) in availableLocales"
          :key="l.code"
          :to="switchLocalePath(l.code)"
          class="text-xs uppercase tracking-wider hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1 transition-all"
          :class="locale === l.code ? 'text-white font-bold bg-white/10' : 'text-blue-200'"
          :aria-current="locale === l.code ? 'true' : 'false'"
        >
          {{ l.code }}
          <span v-if="index < availableLocales.length - 1" class="mx-1 text-blue-400">|</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// Obtenir toutes les locales disponibles
const availableLocales = computed(() => {
  return locales.value as Array<{ code: string; name: string }>
})
</script>
