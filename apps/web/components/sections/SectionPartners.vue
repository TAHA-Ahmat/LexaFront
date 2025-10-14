<template>
  <section class="py-20 bg-white dark:bg-gray-950">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {{ $t('pages.home.partners.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('pages.home.partners.subtitle') }}
        </p>
      </div>

      <!-- Grille de logos partenaires -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        <!-- Placeholders pour les 35 logos -->
        <div v-for="i in 35" :key="i" class="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all hover:scale-105 group">
          <div class="text-center">
            <!-- Placeholder pour logo -->
            <div class="w-24 h-24 mx-auto mb-2 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-900 dark:group-hover:to-purple-900 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('pages.home.partners.partner') }} {{ i }}</p>
          </div>
        </div>
      </div>

      <!-- Message pour remplacer les logos -->
      <div class="mt-12 text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400 italic">
          {{ $t('pages.home.partners.note') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Section Partenaires selon le site Lexafric original (35 logos)
</script>
