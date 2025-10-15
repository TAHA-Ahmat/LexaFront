<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
    <div class="container mx-auto px-4">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('pages.home.features.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {{ $t('pages.home.features.subtitle') }}
        </p>
      </div>

      <!-- Grille de services -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <!-- Icône -->
          <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
            </svg>
          </div>

          <!-- Contenu -->
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ $t(feature.title) }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {{ $t(feature.description) }}
          </p>

          <!-- Liste des sous-services -->
          <ul class="space-y-2 mb-6">
            <li v-for="(item, i) in feature.items" :key="i" class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              {{ $t(item) }}
            </li>
          </ul>

          <!-- Lien "Savoir plus" -->
          <NuxtLink
            :to="feature.link"
            class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
          >
            {{ $t('common.readMore') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const features = [
  {
    title: 'pages.services.legal.title',
    description: 'pages.services.legal.description',
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
    items: [
      'pages.home.features.legal.item1',
      'pages.home.features.legal.item2'
    ],
    link: '/services'
  },
  {
    title: 'pages.services.fiscal.title',
    description: 'pages.services.fiscal.description',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    items: [
      'pages.home.features.fiscal.item1',
      'pages.home.features.fiscal.item2'
    ],
    link: '/services'
  },
  {
    title: 'pages.services.social.title',
    description: 'pages.services.social.description',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    items: [
      'pages.home.features.social.item1',
      'pages.home.features.social.item2'
    ],
    link: '/services'
  },
  {
    title: 'pages.services.recruitment.title',
    description: 'pages.services.recruitment.description',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7',
    items: [
      'pages.home.features.recruitment.item1',
      'pages.home.features.recruitment.item2'
    ],
    link: '/services'
  },
  {
    title: 'pages.services.training.title',
    description: 'pages.services.training.description',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    items: [
      'pages.home.features.training.item1',
      'pages.home.features.training.item2'
    ],
    link: '/services'
  },
  {
    title: 'pages.solutions.legal.title',
    description: 'pages.solutions.legal.description',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    items: [
      'pages.solutions.legal.feature1',
      'pages.solutions.legal.feature2'
    ],
    link: '/solutions'
  }
]
</script>
