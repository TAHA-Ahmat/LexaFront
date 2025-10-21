<template>
  <div>
    <!-- Hero Section Premium -->
    <section class="relative py-20 md:py-28 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/20 dark:via-gray-950 dark:to-gray-950 overflow-hidden">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <!-- Gradient accents -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-3xl"></div>
      </div>

      <div class="relative container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <li><NuxtLink :to="localePath('/')" class="hover:text-purple-600 dark:hover:text-purple-400">{{ $t('common.home') }}</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></li>
            <li><NuxtLink :to="localePath('/services')"  class="hover:text-purple-600 dark:hover:text-purple-400">{{ $t('nav.services') }}</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></li>
            <li class="text-gray-900 dark:text-white font-medium">{{ $t('pages.services.social.title') }}</li>
          </ol>
        </nav>

        <div class="max-w-4xl mx-auto text-center space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/30 rounded-full">
            <svg class="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-semibold text-purple-700 dark:text-purple-300">Expertise Sociale & RH</span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            {{ $t('pages.services.social.title') }}
          </h1>

          <!-- Description -->
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {{ $t('pages.services.social.description') }}
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
              {{ $t('pages.services.social.longDescription') }}
            </p>
            <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t('pages.services.social.details.intro') }}
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
            <div v-for="(feature, index) in $tm('pages.services.social.features')" :key="index"
              class="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{{ $t(`pages.services.social.features.${index}`) }}</h3>
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
                {{ $t('pages.services.social.details.section1.title') }}
              </h2>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.social.details.section1.content') }}
              </p>
            </div>
            <div class="order-1 lg:order-2">
              <div class="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border border-gray-200 dark:border-gray-800 p-12 md:p-16">
                <div class="relative z-10 flex items-center justify-center h-full">
                  <svg class="w-32 h-32 md:w-48 md:h-48 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div class="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border border-gray-200 dark:border-gray-800 p-12 md:p-16">
                <div class="relative z-10 flex items-center justify-center h-full">
                  <svg class="w-32 h-32 md:w-48 md:h-48 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {{ $t('pages.services.social.details.section2.title') }}
              </h2>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.social.details.section2.content') }}
              </p>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div class="order-2 lg:order-1 space-y-4">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {{ $t('pages.services.social.details.section3.title') }}
              </h2>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.social.details.section3.content') }}
              </p>
            </div>
            <div class="order-1 lg:order-2">
              <div class="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/30 border border-gray-200 dark:border-gray-800 p-12 md:p-16">
                <div class="relative z-10 flex items-center justify-center h-full">
                  <svg class="w-32 h-32 md:w-48 md:h-48 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
          <div class="relative bg-gradient-to-br from-purple-600 to-violet-700 dark:from-purple-700 dark:to-violet-800 rounded-2xl p-10 md:p-14 shadow-2xl border border-purple-500/20 overflow-hidden">
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
                {{ $t('pages.services.cta.subtitle') }} et sécuriser vos relations avec vos collaborateurs
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <NuxtLink
                  :to="localePath('/contact')" 
                  class="inline-flex items-center justify-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  {{ $t('common.contactUs') }}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/services')" 
                  class="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all"
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
  title: 'Assistance Sociale - Lexafric',
  description: 'Gestion administrative, contrats de travail et accompagnement RH complet',
  ogTitle: 'Assistance Sociale - Lexafric',
  ogDescription: 'Gestion administrative, contrats de travail et accompagnement RH complet'
})
</script>
