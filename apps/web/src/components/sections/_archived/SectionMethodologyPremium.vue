<template>
  <section class="relative py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
    <div class="container mx-auto px-4">
      <!-- En-tête -->
      <div class="max-w-3xl mx-auto text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          {{ $t('pages.home.methodology.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ $t('pages.home.methodology.subtitle') }}
        </p>
      </div>

      <!-- Timeline verticale premium -->
      <div class="max-w-5xl mx-auto">
        <div class="relative">
          <!-- Ligne centrale -->
          <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform md:-translate-x-1/2"></div>

          <!-- Étapes -->
          <div class="space-y-16">
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="relative"
              :class="index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'"
            >
              <!-- Numéro sur la ligne -->
              <div class="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-2xl z-10">
                {{ String(index + 1).padStart(2, '0') }}
              </div>

              <!-- Carte de contenu -->
              <div
                class="ml-24 md:ml-0"
                :class="index % 2 === 0 ? 'md:mr-24' : 'md:ml-24'"
              >
                <div class="group p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                  <!-- Icône -->
                  <div class="w-14 h-14 mb-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" :d="step.icon" />
                    </svg>
                  </div>

                  <!-- Titre -->
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {{ $t(step.title) }}
                  </h3>

                  <!-- Description -->
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {{ $t(step.description) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA final -->
      <div class="text-center mt-20">
        <NuxtLink
          :to="localePath('/a-propos')"
          class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
        >
          <span>Découvrir notre approche</span>
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

const steps = [
  {
    title: 'pages.home.methodology.step1.title',
    description: 'pages.home.methodology.step1.description',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    title: 'pages.home.methodology.step2.title',
    description: 'pages.home.methodology.step2.description',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  },
  {
    title: 'pages.home.methodology.step3.title',
    description: 'pages.home.methodology.step3.description',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    title: 'pages.home.methodology.step4.title',
    description: 'pages.home.methodology.step4.description',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]
</script>
