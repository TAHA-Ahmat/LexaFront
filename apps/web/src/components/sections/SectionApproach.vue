<template>
  <!-- 3️⃣ COMMENT NOUS LE FAISONS -->
  <section class="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('pages.home.approach.title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ $t('pages.home.approach.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Colonne 1 : Méthod ologie (Étapes) -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">{{ $t('pages.home.approach.method.title') }}</h3>
            <div class="space-y-6">
              <!-- Étape 1 -->
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <span class="text-blue-600 dark:text-blue-400 font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {{ $t('pages.home.approach.method.steps.analyze.title') }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ $t('pages.home.approach.method.steps.analyze.description') }}
                  </p>
                </div>
              </div>

              <!-- Étape 2 -->
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <span class="text-emerald-600 dark:text-emerald-400 font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {{ $t('pages.home.approach.method.steps.advise.title') }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ $t('pages.home.approach.method.steps.advise.description') }}
                  </p>
                </div>
              </div>

              <!-- Étape 3 -->
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <span class="text-purple-600 dark:text-purple-400 font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {{ $t('pages.home.approach.method.steps.implement.title') }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ $t('pages.home.approach.method.steps.implement.description') }}
                  </p>
                </div>
              </div>

              <!-- Étape 4 -->
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                    <span class="text-amber-600 dark:text-amber-400 font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {{ $t('pages.home.approach.method.steps.followup.title') }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ $t('pages.home.approach.method.steps.followup.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Colonne 2 : Valeurs -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">{{ $t('pages.home.approach.values.title') }}</h3>
            <div class="space-y-6">
              <!-- Valeur 1 : Intégrité -->
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {{ $t('pages.home.approach.values.items.integrity.title') }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ $t('pages.home.approach.values.items.integrity.description') }}
                  </p>
                </div>
              </div>

              <!-- Valeur 2 : Écoute -->
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {{ $t('pages.home.approach.values.items.listening.title') }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ $t('pages.home.approach.values.items.listening.description') }}
                  </p>
                </div>
              </div>

              <!-- Valeur 3 : Pédagogie -->
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {{ $t('pages.home.approach.values.items.pedagogy.title') }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ $t('pages.home.approach.values.items.pedagogy.description') }}
                  </p>
                </div>
              </div>

              <!-- Valeur 4 : Interaction -->
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {{ $t('pages.home.approach.values.items.interaction.title') }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ $t('pages.home.approach.values.items.interaction.description') }}
                  </p>
                </div>
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
