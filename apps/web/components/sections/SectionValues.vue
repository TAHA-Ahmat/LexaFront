<template>
  <section class="py-20 bg-white dark:bg-gray-950">
    <div class="container mx-auto px-4">
      <!-- Vision -->
      <div class="max-w-4xl mx-auto mb-16 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {{ $t('pages.home.values.vision.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ $t('pages.home.values.vision.content') }}
        </p>
      </div>

      <!-- Mission -->
      <div class="max-w-4xl mx-auto mb-20 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {{ $t('pages.home.values.mission.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ $t('pages.home.values.mission.content') }}
        </p>
      </div>

      <!-- Valeurs -->
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          {{ $t('pages.home.values.title') }}
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Intégrité -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ $t('pages.home.values.integrity.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('pages.home.values.integrity.content') }}
            </p>
          </div>

          <!-- Écoute -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ $t('pages.home.values.listening.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('pages.home.values.listening.content') }}
            </p>
          </div>

          <!-- Pédagogie -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ $t('pages.home.values.pedagogy.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('pages.home.values.pedagogy.content') }}
            </p>
          </div>

          <!-- Interaction -->
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ $t('pages.home.values.interaction.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('pages.home.values.interaction.content') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Section Valeurs selon le site Lexafric original
</script>
