<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 overflow-x-hidden">
    <!-- Breadcrumb -->
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <Breadcrumb :items="[{ label: $t('breadcrumb.about') }]" />
    </div>

    <!-- Introduction Section -->
    <section class="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {{ $t('pages.about.intro.title') }}
          </h2>

          <div class="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>{{ $t('pages.about.intro.p1') }}</p>
            <p>{{ $t('pages.about.intro.p2') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {{ $t('pages.about.mission.title') }}
          </h2>

          <div class="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>{{ $t('pages.about.mission.p1') }}</p>
            <p>{{ $t('pages.about.mission.p2') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            {{ $t('pages.about.values.title') }}
          </h2>

          <div class="grid md:grid-cols-3 gap-16">
            <!-- Excellence -->
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ $t('pages.about.values.excellence.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ $t('pages.about.values.excellence.description') }}
              </p>
            </div>

            <!-- Proximity -->
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ $t('pages.about.values.proximity.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ $t('pages.about.values.proximity.description') }}
              </p>
            </div>

            <!-- Commitment -->
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ $t('pages.about.values.commitment.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ $t('pages.about.values.commitment.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              {{ $t('pages.about.team.title') }}
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
              {{ $t('pages.about.team.subtitle') }}
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <!-- Member 1 -->
            <div class="text-center space-y-4">
              <div class="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span class="text-5xl font-bold text-white">MB</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ $t('pages.about.team.member1.name') }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 font-medium mt-1">
                  {{ $t('pages.about.team.member1.role') }}
                </p>
                <p class="text-gray-600 dark:text-gray-400 mt-3">
                  {{ $t('pages.about.team.member1.description') }}
                </p>
              </div>
            </div>

            <!-- Member 2 -->
            <div class="text-center space-y-4">
              <div class="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <span class="text-5xl font-bold text-white">MS</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ $t('pages.about.team.member2.name') }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 font-medium mt-1">
                  {{ $t('pages.about.team.member2.role') }}
                </p>
                <p class="text-gray-600 dark:text-gray-400 mt-3">
                  {{ $t('pages.about.team.member2.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div class="text-center">
              <div class="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                30+
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                {{ $t('pages.about.stats.experience') }}
              </p>
            </div>

            <div class="text-center">
              <div class="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                100%
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                {{ $t('pages.about.stats.satisfaction') }}
              </p>
            </div>

            <div class="text-center">
              <div class="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                24/7
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                {{ $t('pages.about.stats.support') }}
              </p>
            </div>

            <div class="text-center">
              <div class="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                10+
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                {{ $t('pages.about.stats.services') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section Minimaliste -->
    <section class="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {{ $t('pages.about.cta.title') }}
          </h2>

          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ $t('pages.about.cta.subtitle') }}
          </p>

          <div class="pt-4">
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
            >
              {{ $t('common.contactUs') }}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

// SEO
useSeoMeta({
  title: 'À propos - Lexafric',
  description: 'Cabinet de Conseil Juridique et Fiscal regroupant des professionnels avec plus de 30 ans d\'expérience. Découvrez notre mission, nos valeurs et notre équipe.',
  ogTitle: 'À propos - Lexafric',
  ogDescription: 'Cabinet de Conseil Juridique et Fiscal regroupant des professionnels avec plus de 30 ans d\'expérience'
})
</script>
