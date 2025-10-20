<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-700 text-white py-32 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[url('/images/pattern.svg')]"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block px-6 py-2 bg-yellow-600 bg-opacity-30 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-yellow-400 border-opacity-30">
            Service #4
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            {{ $t('pages.services.recruitment.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-yellow-100 leading-relaxed max-w-3xl mx-auto">
            {{ $t('pages.services.recruitment.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {{ $t('pages.services.recruitment.longDescription') }}
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t('pages.services.recruitment.details.intro') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Nos Domaines d'Intervention
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div v-for="(feature, index) in $tm('pages.services.recruitment.features')" :key="index"
              class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{{ feature }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Sections -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto space-y-16">
          <!-- Section 1 -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ $t('pages.services.recruitment.details.section1.title') }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.recruitment.details.section1.content') }}
              </p>
            </div>
            <div class="order-1 md:order-2">
              <div class="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl p-16 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-16 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
            </div>
            <div>
              <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ $t('pages.services.recruitment.details.section2.title') }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.recruitment.details.section2.content') }}
              </p>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ $t('pages.services.recruitment.details.section3.title') }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.recruitment.details.section3.content') }}
              </p>
            </div>
            <div class="order-1 md:order-2">
              <div class="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-16 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 dark:from-yellow-800 dark:via-yellow-900 dark:to-gray-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Besoin d'aide pour recruter ?
        </h2>
        <p class="text-xl md:text-2xl mb-10 text-yellow-100 max-w-3xl mx-auto">
          Confiez-nous votre recrutement et accédez aux meilleurs talents du marché
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 bg-white text-yellow-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Contactez-nous
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all"
          >
            Voir tous les services
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Assistance à Recrutement - Lexafric',
  description: 'Sourcing, présélection de candidats et accompagnement à l\'intégration de vos nouvelles recrues',
  ogTitle: 'Assistance à Recrutement - Lexafric',
  ogDescription: 'Sourcing, présélection de candidats et accompagnement à l\'intégration de vos nouvelles recrues'
})
</script>
