<template>
  <div>
    <!-- Hero Section Premium -->
    <section class="relative py-20 md:py-28 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/20 dark:via-gray-950 dark:to-gray-950 overflow-hidden">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <!-- Gradient accents -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div class="relative container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <li><NuxtLink :to="localePath('/')" class="hover:text-indigo-600 dark:hover:text-indigo-400">{{ $t('common.home') }}</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></li>
            <li><NuxtLink :to="localePath('/solutions')"  class="hover:text-indigo-600 dark:hover:text-indigo-400">{{ $t('nav.solutions') }}</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></li>
            <li class="text-gray-900 dark:text-white font-medium">{{ $t('pages.solutions.legal.title') }}</li>
          </ol>
        </nav>

        <div class="max-w-4xl mx-auto text-center space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-full">
            <svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-semibold text-indigo-700 dark:text-indigo-300">{{ $t('pages.solutions.legal.title') }}</span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            {{ $t('pages.solutions.legal.title') }}
          </h1>

          <!-- Description -->
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {{ $t('pages.solutions.legal.description') }}
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
              {{ $t('pages.solutions.legal.longDescription') }}
            </p>
            <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t('pages.solutions.legal.details.intro') }}
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
            {{ $t('common.ourServices') }}
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="(feature, index) in $tm('pages.solutions.legal.features')" :key="index"
              class="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{{ $t(`pages.solutions.legal.features.${index}`) }}</h3>
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
                {{ $t('pages.solutions.legal.details.section1.title') }}
              </h2>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.solutions.legal.details.section1.content') }}
              </p>
            </div>
            <div class="order-1 lg:order-2">
              <div class="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-gray-200 dark:border-gray-800 p-12 md:p-16">
                <div class="relative z-10 flex items-center justify-center h-full">
                  <svg class="w-32 h-32 md:w-48 md:h-48 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div class="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border border-gray-200 dark:border-gray-800 p-12 md:p-16">
                <div class="relative z-10 flex items-center justify-center h-full">
                  <svg class="w-32 h-32 md:w-48 md:h-48 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {{ $t('pages.solutions.legal.details.section2.title') }}
              </h2>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.solutions.legal.details.section2.content') }}
              </p>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div class="order-2 lg:order-1 space-y-4">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {{ $t('pages.solutions.legal.details.section3.title') }}
              </h2>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.solutions.legal.details.section3.content') }}
              </p>
            </div>
            <div class="order-1 lg:order-2">
              <div class="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border border-gray-200 dark:border-gray-800 p-12 md:p-16">
                <div class="relative z-10 flex items-center justify-center h-full">
                  <svg class="w-32 h-32 md:w-48 md:h-48 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
          <div class="relative bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-700 dark:to-purple-800 rounded-2xl p-10 md:p-14 shadow-2xl border border-indigo-500/20 overflow-hidden">
            <!-- Subtle pattern overlay -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <!-- Content -->
            <div class="relative text-center space-y-6">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {{ $t('pages.solutions.cta.title') }}
              </h2>
              <p class="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                {{ $t('pages.solutions.cta.subtitle') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <NuxtLink
                  :to="localePath('/contact')" 
                  class="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  {{ $t('common.contactUs') }}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/solutions')" 
                  class="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all"
                >
                  {{ $t('common.allSolutions') }}
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
  title: 'Secrétariat Juridique - Lexafric',
  description: 'Gestion complète de votre secrétariat juridique et corporate. Tenue des registres, préparation des assemblées et formalités légales.',
  ogTitle: 'Secrétariat Juridique - Lexafric',
  ogDescription: 'Gestion complète de votre secrétariat juridique et corporate'
})
</script>
