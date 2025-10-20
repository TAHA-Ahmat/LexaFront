<template>
  <section class="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {{ $t('pages.home.methodology.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('pages.home.methodology.subtitle') }}
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Étape 1: Stratégie -->
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <!-- Numéro -->
              <div class="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                01
              </div>

              <!-- Icône -->
              <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {{ $t('pages.home.methodology.strategy.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ $t('pages.home.methodology.strategy.content') }}
              </p>
            </div>
          </div>

          <!-- Étape 2: Planification -->
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <!-- Numéro -->
              <div class="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                02
              </div>

              <!-- Icône -->
              <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>

              <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {{ $t('pages.home.methodology.planning.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ $t('pages.home.methodology.planning.content') }}
              </p>
            </div>
          </div>

          <!-- Étape 3: Mise en œuvre -->
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <!-- Numéro -->
              <div class="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                03
              </div>

              <!-- Icône -->
              <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {{ $t('pages.home.methodology.implementation.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ $t('pages.home.methodology.implementation.content') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Section Méthodologie selon le site Lexafric original
</script>
