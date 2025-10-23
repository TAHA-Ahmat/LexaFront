<template>
  <!-- 3️⃣ EXCELLENCE & RIGUEUR -->
  <section class="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-20">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('pages.home.approach.title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ $t('pages.home.approach.subtitle') }}
          </p>
        </div>

        <!-- Méthodologie : Timeline Horizontale -->
        <div class="mb-24">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {{ $t('pages.home.approach.method.title') }}
          </h3>

          <!-- Timeline desktop (horizontal) -->
          <div class="hidden lg:block relative">
            <!-- Ligne de connexion -->
            <div class="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 via-purple-200 to-amber-200 dark:from-blue-800 dark:via-emerald-800 dark:via-purple-800 dark:to-amber-800"></div>

            <div class="grid grid-cols-4 gap-6">
              <!-- Étape 1 : Analyse -->
              <div class="relative group">
                <div class="flex flex-col items-center text-center">
                  <!-- Numéro avec animation -->
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative z-10 mb-6">
                    1
                  </div>

                  <!-- Contenu -->
                  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 border-2 border-blue-100 dark:border-blue-900/30 group-hover:border-blue-500 dark:group-hover:border-blue-400">
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {{ $t('pages.home.approach.method.steps.analyze.title') }}
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {{ $t('pages.home.approach.method.steps.analyze.description') }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Étape 2 : Conseil -->
              <div class="relative group">
                <div class="flex flex-col items-center text-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative z-10 mb-6">
                    2
                  </div>

                  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 border-2 border-emerald-100 dark:border-emerald-900/30 group-hover:border-emerald-500 dark:group-hover:border-emerald-400">
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {{ $t('pages.home.approach.method.steps.advise.title') }}
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {{ $t('pages.home.approach.method.steps.advise.description') }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Étape 3 : Mise en œuvre -->
              <div class="relative group">
                <div class="flex flex-col items-center text-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative z-10 mb-6">
                    3
                  </div>

                  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 border-2 border-purple-100 dark:border-purple-900/30 group-hover:border-purple-500 dark:group-hover:border-purple-400">
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {{ $t('pages.home.approach.method.steps.implement.title') }}
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {{ $t('pages.home.approach.method.steps.implement.description') }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Étape 4 : Suivi -->
              <div class="relative group">
                <div class="flex flex-col items-center text-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative z-10 mb-6">
                    4
                  </div>

                  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 border-2 border-amber-100 dark:border-amber-900/30 group-hover:border-amber-500 dark:group-hover:border-amber-400">
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {{ $t('pages.home.approach.method.steps.followup.title') }}
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {{ $t('pages.home.approach.method.steps.followup.description') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline mobile/tablet (vertical) -->
          <div class="lg:hidden space-y-8">
            <!-- Étape 1 -->
            <div class="flex gap-4 group">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-all">
                  1
                </div>
                <div class="w-0.5 flex-1 bg-blue-200 dark:bg-blue-800 mt-4"></div>
              </div>
              <div class="flex-1 pb-8">
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {{ $t('pages.home.approach.method.steps.analyze.title') }}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ $t('pages.home.approach.method.steps.analyze.description') }}
                </p>
              </div>
            </div>

            <!-- Étape 2 -->
            <div class="flex gap-4 group">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-all">
                  2
                </div>
                <div class="w-0.5 flex-1 bg-emerald-200 dark:bg-emerald-800 mt-4"></div>
              </div>
              <div class="flex-1 pb-8">
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {{ $t('pages.home.approach.method.steps.advise.title') }}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ $t('pages.home.approach.method.steps.advise.description') }}
                </p>
              </div>
            </div>

            <!-- Étape 3 -->
            <div class="flex gap-4 group">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-all">
                  3
                </div>
                <div class="w-0.5 flex-1 bg-purple-200 dark:bg-purple-800 mt-4"></div>
              </div>
              <div class="flex-1 pb-8">
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {{ $t('pages.home.approach.method.steps.implement.title') }}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ $t('pages.home.approach.method.steps.implement.description') }}
                </p>
              </div>
            </div>

            <!-- Étape 4 -->
            <div class="flex gap-4 group">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-all">
                  4
                </div>
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {{ $t('pages.home.approach.method.steps.followup.title') }}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ $t('pages.home.approach.method.steps.followup.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Valeurs : Grille 2x2 avec Hover Effects -->
        <div>
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {{ $t('pages.home.approach.values.title') }}
          </h3>

          <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <!-- Valeur 1 : Intégrité -->
            <div class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-1 overflow-hidden">
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ $t('pages.home.approach.values.items.integrity.title') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.home.approach.values.items.integrity.description') }}
                </p>
              </div>
            </div>

            <!-- Valeur 2 : Écoute -->
            <div class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:-translate-y-1 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative">
                <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {{ $t('pages.home.approach.values.items.listening.title') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.home.approach.values.items.listening.description') }}
                </p>
              </div>
            </div>

            <!-- Valeur 3 : Pédagogie -->
            <div class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 hover:-translate-y-1 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {{ $t('pages.home.approach.values.items.pedagogy.title') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.home.approach.values.items.pedagogy.description') }}
                </p>
              </div>
            </div>

            <!-- Valeur 4 : Interaction -->
            <div class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-400 hover:-translate-y-1 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative">
                <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {{ $t('pages.home.approach.values.items.interaction.title') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.home.approach.values.items.interaction.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
