<template>
  <section class="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 dark:from-blue-900 dark:via-purple-900 dark:to-blue-800 relative overflow-hidden">
    <!-- Formes décoratives -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Contenu -->
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          {{ $t('pages.home.cta.title') }}
        </h2>
        <p class="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
          {{ $t('pages.home.cta.subtitle') }}
        </p>

        <!-- Boutons d'action -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {{ $t('pages.home.cta.button1') }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/a-propos')"
            class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ $t('pages.home.cta.button2') }}
          </NuxtLink>
        </div>

        <!-- Informations de contact rapide -->
        <div class="mt-12 pt-12 border-t border-white/20">
          <p class="text-blue-100 mb-4">{{ $t('pages.home.cta.or') }}</p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
            <a href="tel:+23522519166" class="inline-flex items-center gap-2 hover:text-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
              </svg>
              <span class="font-semibold">(+235) 22 51 91 66</span>
            </a>
            <span class="hidden sm:inline text-white/50">•</span>
            <a href="mailto:contact@lexafric.com" class="inline-flex items-center gap-2 hover:text-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="font-semibold">contact@lexafric.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
