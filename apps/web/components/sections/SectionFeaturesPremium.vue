<template>
  <section class="relative py-32 bg-white dark:bg-black overflow-hidden">
    <!-- Background subtil -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black"></div>

    <div class="relative container mx-auto px-4">
      <!-- En-tête minimaliste -->
      <div class="max-w-3xl mx-auto text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          {{ $t('pages.home.features.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ $t('pages.home.features.subtitle') }}
        </p>
      </div>

      <!-- Grille de services premium -->
      <div class="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group relative"
        >
          <!-- Carte avec effet de verre -->
          <div
            class="relative h-full p-8 bg-white/50 dark:bg-white/5 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20"
          >
            <!-- Effet de lumière au survol -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 rounded-3xl transition-all duration-500"></div>

            <!-- Contenu -->
            <div class="relative z-10">
              <!-- Icône premium -->
              <div class="w-14 h-14 mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="feature.icon" />
                </svg>
              </div>

              <!-- Titre -->
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                {{ $t(feature.title) }}
              </h3>

              <!-- Description -->
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {{ $t(feature.description) }}
              </p>

              <!-- Liste des points clés -->
              <ul class="space-y-3 mb-8">
                <li v-for="(item, i) in feature.items" :key="i"
                    class="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <div class="flex-shrink-0 w-5 h-5 mt-0.5 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                    </svg>
                  </div>
                  {{ $t(item) }}
                </li>
              </ul>

              <!-- Lien avec flèche animée -->
              <NuxtLink
                :to="localePath(feature.link)"
                class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group/link"
              >
                <span>{{ $t('common.readMore') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover/link:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA final -->
      <div class="text-center mt-20">
        <NuxtLink
          :to="localePath('/services')"
          class="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl"
        >
          <span>Découvrir tous nos services</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

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
