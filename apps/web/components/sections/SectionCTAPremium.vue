<template>
  <section class="relative py-32 overflow-hidden">
    <!-- Background vidéo-like avec gradients animés -->
    <div class="absolute inset-0 bg-black">
      <!-- Gradients multiples pour effet de profondeur -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 opacity-90"></div>

      <!-- Effet de grille lumineuse -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <!-- Spots lumineux animés -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000"></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative container mx-auto px-4">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Badge premium -->
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-blue-300 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          {{ $t('pages.home.cta.badge') || 'Prenez contact' }}
        </div>

        <!-- Titre principal impactant -->
        <h2 class="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
          <span class="block">{{ $t('pages.home.cta.title') }}</span>
        </h2>

        <!-- Sous-titre élégant -->
        <p class="text-2xl md:text-3xl text-blue-100 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
          {{ $t('pages.home.cta.subtitle') }}
        </p>

        <!-- Boutons d'action premium -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <NuxtLink
            :to="localePath('/contact')"
            class="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
          >
            <span class="relative z-10 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ $t('pages.home.cta.button1') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
            <!-- Effet de brillance au survol -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </NuxtLink>

          <NuxtLink
            :to="localePath('/a-propos')"
            class="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ $t('pages.home.cta.button2') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Informations de contact avec design épuré -->
        <div class="pt-12 border-t border-white/20">
          <p class="text-blue-200 mb-6 text-lg">{{ $t('pages.home.cta.or') }}</p>
          <div class="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <!-- Téléphone -->
            <a
              href="tel:+23522519166"
              class="group flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                </svg>
              </div>
              <div class="text-left">
                <div class="text-sm text-blue-200 mb-1">{{ $t('pages.home.cta.callUs') }}</div>
                <div class="text-white font-bold text-lg">(+235) 22 51 91 66</div>
              </div>
            </a>

            <!-- Email -->
            <a
              href="mailto:contact@lexafric.com"
              class="group flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="text-left">
                <div class="text-sm text-blue-200 mb-1">{{ $t('pages.home.cta.writeUs') }}</div>
                <div class="text-white font-bold text-lg">contact@lexafric.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}
</style>
