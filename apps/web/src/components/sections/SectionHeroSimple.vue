<template>
  <!-- 1️⃣ QUI NOUS SOMMES -->
  <section class="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
    <!-- Subtle grid pattern -->
    <div class="absolute inset-0 opacity-[0.03]">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <div class="container mx-auto px-4 md:px-6 lg:px-8 relative">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
          <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium text-white">{{ $t('pages.home.hero.badge') }}</span>
        </div>

        <!-- Titre principal -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {{ $t('pages.home.hero.title') }}
        </h1>

        <!-- Sous-titre -->
        <p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {{ $t('pages.home.hero.subtitle') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            {{ $t('pages.home.hero.cta.contact') }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>

          <NuxtLink
            :to="localePath('/services')"
            class="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all"
          >
            {{ $t('pages.home.hero.cta.services') }}
          </NuxtLink>
        </div>

        <!-- Stats rapides -->
        <div class="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white">10+</div>
            <div class="text-sm text-gray-400 mt-1">{{ $t('pages.home.hero.stats.years') }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white">15+</div>
            <div class="text-sm text-gray-400 mt-1">{{ $t('pages.home.hero.stats.experts') }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white">25+</div>
            <div class="text-sm text-gray-400 mt-1">{{ $t('pages.home.hero.stats.partners') }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
