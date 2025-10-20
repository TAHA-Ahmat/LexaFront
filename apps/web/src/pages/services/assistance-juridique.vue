<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-32 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[url('/images/pattern.svg')]"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block px-6 py-2 bg-blue-600 bg-opacity-30 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-blue-400 border-opacity-30">
            Service #1
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            {{ $t('pages.services.legal.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            {{ $t('pages.services.legal.description') }}
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
              {{ $t('pages.services.legal.longDescription') }}
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t('pages.services.legal.details.intro') }}
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
            <div v-for="(feature, index) in $tm('pages.services.legal.features')" :key="index"
              class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
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
                {{ $t('pages.services.legal.details.section1.title') }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.legal.details.section1.content') }}
              </p>
            </div>
            <div class="order-1 md:order-2">
              <div class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-16 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-16 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
            </div>
            <div>
              <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ $t('pages.services.legal.details.section2.title') }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.legal.details.section2.content') }}
              </p>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ $t('pages.services.legal.details.section3.title') }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.legal.details.section3.content') }}
              </p>
            </div>
            <div class="order-1 md:order-2">
              <div class="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-16 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Besoin d'une assistance juridique ?
        </h2>
        <p class="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
          Notre équipe d'experts juridiques est à votre écoute pour analyser vos besoins et vous proposer des solutions adaptées
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Contactez-nous
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
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
  title: 'Assistance Juridique - Lexafric',
  description: 'Audit contractuel, conseil juridique et accompagnement personnalisé pour sécuriser vos relations d\'affaires',
  ogTitle: 'Assistance Juridique - Lexafric',
  ogDescription: 'Audit contractuel, conseil juridique et accompagnement personnalisé pour sécuriser vos relations d\'affaires'
})
</script>
