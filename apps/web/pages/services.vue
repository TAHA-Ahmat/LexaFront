<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ $t('pages.services.title') }}</h1>
        <p class="text-xl text-blue-100 max-w-3xl">{{ $t('pages.services.subtitle') }}</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service Card 1: Assistance Juridique -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ $t('pages.services.legal.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">{{ $t('pages.services.legal.description') }}</p>
            <NuxtLink to="/services/assistance-juridique" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              {{ $t('common.readMore') }} →
            </NuxtLink>
          </div>

          <!-- Service Card 2: Assistance Fiscale -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ $t('pages.services.fiscal.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">{{ $t('pages.services.fiscal.description') }}</p>
            <NuxtLink to="/services/assistance-fiscale" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              {{ $t('common.readMore') }} →
            </NuxtLink>
          </div>

          <!-- Service Card 3: Assistance Sociale -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ $t('pages.services.social.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">{{ $t('pages.services.social.description') }}</p>
            <NuxtLink to="/services/assistance-sociale" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              {{ $t('common.readMore') }} →
            </NuxtLink>
          </div>

          <!-- Service Card 4: Assistance à Recrutement -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ $t('pages.services.recruitment.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">{{ $t('pages.services.recruitment.description') }}</p>
            <NuxtLink to="/services/assistance-recrutement" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              {{ $t('common.readMore') }} →
            </NuxtLink>
          </div>

          <!-- Service Card 5: Formations -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ $t('pages.services.training.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">{{ $t('pages.services.training.description') }}</p>
            <NuxtLink to="/services/formations" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              {{ $t('common.readMore') }} →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-blue-600 dark:bg-blue-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('pages.services.cta.title') }}</h2>
        <p class="text-xl mb-8 text-blue-100">{{ $t('pages.services.cta.subtitle') }}</p>
        <NuxtLink
          to="/contact"
          class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          {{ $t('pages.services.cta.button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Nos Services - Lexafric',
  description: 'Découvrez nos services en assistance juridique, fiscale, sociale, recrutement et formations',
  ogTitle: 'Nos Services - Lexafric',
  ogDescription: 'Découvrez nos services en assistance juridique, fiscale, sociale, recrutement et formations'
})
</script>
