<template>
  <div>
    <!-- Hero Section Premium -->
    <section class="relative py-20 md:py-28 bg-gradient-to-b from-emerald-50 via-white to-white dark:from-emerald-950/20 dark:via-gray-950 dark:to-gray-950 overflow-hidden">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <!-- Gradient accents -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div class="relative container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <li><NuxtLink :to="localePath('/')" class="hover:text-emerald-600 dark:hover:text-emerald-400">{{ $t('common.home') }}</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></li>
            <li><NuxtLink :to="localePath('/services')"  class="hover:text-emerald-600 dark:hover:text-emerald-400">{{ $t('nav.services') }}</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></li>
            <li class="text-gray-900 dark:text-white font-medium">{{ $t('pages.services.fiscal.title') }}</li>
          </ol>
        </nav>

        <div class="max-w-4xl mx-auto text-center space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 rounded-full">
            <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-semibold text-emerald-700 dark:text-emerald-300">{{ $t('pages.services.fiscal.title') }}</span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            {{ $t('pages.services.fiscal.title') }}
          </h1>

          <!-- Description -->
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {{ $t('pages.services.fiscal.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg max-w-none">
            <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {{ $t('pages.services.fiscal.longDescription') }}
            </p>
            <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t('pages.services.fiscal.details.intro') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {{ $t('common.interventionAreas') }}
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="(feature, index) in $tm('pages.services.fiscal.features')" :key="index"
              class="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{{ $t(`pages.services.fiscal.features.${index}`) }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Sections -->
    <section class="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto space-y-16 md:space-y-24">
          <!-- Section 1 -->
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div class="order-2 lg:order-1 space-y-4">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {{ $t('pages.services.fiscal.details.section1.title') }}
              </h2>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.fiscal.details.section1.content') }}
              </p>
            </div>
            <div class="order-1 lg:order-2">
              <div class="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border border-gray-200 dark:border-gray-800 p-12 md:p-16">
                <div class="relative z-10 flex items-center justify-center h-full">
                  <svg class="w-32 h-32 md:w-48 md:h-48 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div class="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-gray-200 dark:border-gray-800 p-12 md:p-16">
                <div class="relative z-10 flex items-center justify-center h-full">
                  <svg class="w-32 h-32 md:w-48 md:h-48 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {{ $t('pages.services.fiscal.details.section2.title') }}
              </h2>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.fiscal.details.section2.content') }}
              </p>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div class="order-2 lg:order-1 space-y-4">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {{ $t('pages.services.fiscal.details.section3.title') }}
              </h2>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.fiscal.details.section3.content') }}
              </p>
            </div>
            <div class="order-1 lg:order-2">
              <div class="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-gray-200 dark:border-gray-800 p-12 md:p-16">
                <div class="relative z-10 flex items-center justify-center h-full">
                  <svg class="w-32 h-32 md:w-48 md:h-48 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto">
          <div class="relative bg-gradient-to-br from-emerald-600 to-green-700 dark:from-emerald-700 dark:to-green-800 rounded-2xl p-10 md:p-14 shadow-2xl border border-emerald-500/20 overflow-hidden">
            <!-- Subtle pattern overlay -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <!-- Content -->
            <div class="relative text-center space-y-6">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {{ $t('pages.services.cta.title') }}
              </h2>
              <p class="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                {{ $t('pages.services.cta.subtitle') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <NuxtLink
                  :to="localePath('/contact')" 
                  class="inline-flex items-center justify-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  {{ $t('common.contactUs') }}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/services')" 
                  class="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-all"
                >
                  {{ $t('common.allServices') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Assistance Fiscale - Lexafric',
  description: 'Contrôle des déclarations, optimisation fiscale et accompagnement lors des contrôles',
  ogTitle: 'Assistance Fiscale - Lexafric',
  ogDescription: 'Contrôle des déclarations, optimisation fiscale et accompagnement lors des contrôles'
})
</script>
