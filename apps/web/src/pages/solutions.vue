<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ $t('pages.solutions.title') }}</h1>
        <p class="text-xl text-purple-100 max-w-3xl">{{ $t('pages.solutions.subtitle') }}</p>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Solution 1: Secrétariat Juridique -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ $t('pages.solutions.legal.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">{{ $t('pages.solutions.legal.description') }}</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start text-gray-600 dark:text-gray-300">
                <svg class="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('pages.solutions.legal.feature1') }}
              </li>
              <li class="flex items-start text-gray-600 dark:text-gray-300">
                <svg class="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('pages.solutions.legal.feature2') }}
              </li>
            </ul>
            <NuxtLink to="/solutions/secretariat-juridique" class="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
              {{ $t('common.readMore') }} →
            </NuxtLink>
          </div>

          <!-- Solution 2: Gouvernance d'Entreprise -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ $t('pages.solutions.governance.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">{{ $t('pages.solutions.governance.description') }}</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start text-gray-600 dark:text-gray-300">
                <svg class="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('pages.solutions.governance.feature1') }}
              </li>
              <li class="flex items-start text-gray-600 dark:text-gray-300">
                <svg class="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('pages.solutions.governance.feature2') }}
              </li>
            </ul>
            <NuxtLink to="/solutions/gouvernance-entreprise" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
              {{ $t('common.readMore') }} →
            </NuxtLink>
          </div>

          <!-- Solution 3: Création & Transformation -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ $t('pages.solutions.creation.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">{{ $t('pages.solutions.creation.description') }}</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start text-gray-600 dark:text-gray-300">
                <svg class="h-5 w-5 text-orange-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('pages.solutions.creation.feature1') }}
              </li>
              <li class="flex items-start text-gray-600 dark:text-gray-300">
                <svg class="h-5 w-5 text-orange-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('pages.solutions.creation.feature2') }}
              </li>
            </ul>
            <NuxtLink to="/solutions/creation-transformation" class="text-orange-600 dark:text-orange-400 font-semibold hover:underline">
              {{ $t('common.readMore') }} →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{{ $t('pages.solutions.why.title') }}</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-2">10+</div>
            <p class="text-gray-600 dark:text-gray-300">{{ $t('pages.solutions.why.experience') }}</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-2">35+</div>
            <p class="text-gray-600 dark:text-gray-300">{{ $t('pages.solutions.why.partners') }}</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <p class="text-gray-600 dark:text-gray-300">{{ $t('pages.solutions.why.satisfaction') }}</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <p class="text-gray-600 dark:text-gray-300">{{ $t('pages.solutions.why.support') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-purple-600 dark:bg-purple-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('pages.solutions.cta.title') }}</h2>
        <p class="text-xl mb-8 text-purple-100">{{ $t('pages.solutions.cta.subtitle') }}</p>
        <NuxtLink
          to="/contact"
          class="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
        >
          {{ $t('pages.solutions.cta.button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Nos Solutions - Lexafric',
  description: 'Découvrez nos solutions en secrétariat juridique, gouvernance d\'entreprise et création & transformation',
  ogTitle: 'Nos Solutions - Lexafric',
  ogDescription: 'Découvrez nos solutions en secrétariat juridique, gouvernance d\'entreprise et création & transformation'
})
</script>
