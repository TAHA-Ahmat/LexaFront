<template>
  <!-- 5️⃣ AGISSEZ MAINTENANT -->
  <section class="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          <span class="text-sm font-medium text-white">{{ $t('pages.home.cta.badge') }}</span>
        </div>

        <!-- Titre -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {{ $t('pages.home.cta.title') }}
        </h2>

        <!-- Sous-titre -->
        <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          {{ $t('pages.home.cta.subtitle') }}
        </p>

        <!-- Coordonnées directes -->
        <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4">
          <!-- Téléphone -->
          <a
            href="tel:+23522519166"
            class="flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
          >
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
              </svg>
            </div>
            <div class="text-left">
              <div class="text-sm text-gray-400">{{ $t('pages.home.cta.phone.label') }}</div>
              <div class="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">(+235) 22 51 91 66</div>
            </div>
          </a>

          <!-- Email -->
          <a
            href="mailto:contact@lexafric.com"
            class="flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
          >
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="text-left">
              <div class="text-sm text-gray-400">{{ $t('pages.home.cta.email.label') }}</div>
              <div class="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">contact@lexafric.com</div>
            </div>
          </a>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            {{ $t('pages.home.cta.button.contact') }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>

          <a
            href="tel:+23522519166"
            class="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
            </svg>
            {{ $t('pages.home.cta.button.call') }}
          </a>
        </div>

        <!-- Réponse rapide -->
        <div class="text-sm text-gray-400 pt-4">
          {{ $t('pages.home.cta.responseTime') }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
