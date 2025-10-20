<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white py-32 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[url('/images/pattern.svg')]"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block px-6 py-2 bg-red-600 bg-opacity-30 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-red-400 border-opacity-30">
            Service #5
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            {{ $t('pages.services.training.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-red-100 leading-relaxed max-w-3xl mx-auto">
            {{ $t('pages.services.training.description') }}
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
              {{ $t('pages.services.training.longDescription') }}
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t('pages.services.training.details.intro') }}
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
            <div v-for="(feature, index) in $tm('pages.services.training.features')" :key="index"
              class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
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
                {{ $t('pages.services.training.details.section1.title') }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.training.details.section1.content') }}
              </p>
            </div>
            <div class="order-1 md:order-2">
              <div class="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-16 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="bg-gradient-to-br from-rose-500 to-rose-700 rounded-2xl p-16 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div>
              <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ $t('pages.services.training.details.section2.title') }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.training.details.section2.content') }}
              </p>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ $t('pages.services.training.details.section3.title') }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.services.training.details.section3.content') }}
              </p>
            </div>
            <div class="order-1 md:order-2">
              <div class="bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl p-16 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 dark:from-red-800 dark:via-red-900 dark:to-gray-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Besoin de formations sur-mesure ?
        </h2>
        <p class="text-xl md:text-2xl mb-10 text-red-100 max-w-3xl mx-auto">
          Développez les compétences de vos équipes avec nos programmes de formation adaptés à vos besoins
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Contactez-nous
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-all"
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
  title: 'Formations - Lexafric',
  description: 'Formations inter et intra-entreprises, développement des compétences et programmes sur-mesure',
  ogTitle: 'Formations - Lexafric',
  ogDescription: 'Formations inter et intra-entreprises, développement des compétences et programmes sur-mesure'
})
</script>
