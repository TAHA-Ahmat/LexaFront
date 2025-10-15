<template>
  <section class="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900">
    <div class="container mx-auto px-4">
      <!-- Titre de section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          {{ $t('pages.home.stats.title') }}
        </h2>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          {{ $t('pages.home.stats.subtitle') }}
        </p>
      </div>

      <!-- Grille de statistiques -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
        >
          <!-- Icône -->
          <div class="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="stat.icon" />
            </svg>
          </div>

          <!-- Valeur -->
          <div class="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">
            {{ stat.value }}
          </div>

          <!-- Label -->
          <div class="text-lg text-blue-100 font-medium">
            {{ $t(stat.label) }}
          </div>
        </div>
      </div>

      <!-- Message additionnel -->
      <div class="mt-16 text-center">
        <p class="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          {{ $t('pages.home.stats.message') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = [
  {
    value: '10+',
    label: 'pages.home.stats.experience',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    value: '25+',
    label: 'pages.home.stats.associatesExperience',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    value: '100+',
    label: 'pages.home.stats.clients',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    value: '100%',
    label: 'pages.home.stats.satisfaction',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]
</script>
