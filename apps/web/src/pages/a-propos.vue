<template>
  <div>
    <!-- Hero Section Premium -->
    <section class="relative py-20 md:py-28 bg-gradient-to-b from-blue-50 via-white to-white dark:from-blue-950/20 dark:via-gray-950 dark:to-gray-950 overflow-hidden">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <!-- Gradient accents -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div class="relative container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <li><NuxtLink :to="localePath('/')" class="hover:text-blue-600 dark:hover:text-blue-400">{{ $t('common.home') }}</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></li>
            <li class="text-gray-900 dark:text-white font-medium">{{ $t('nav.about') }}</li>
          </ol>
        </nav>

        <div class="max-w-4xl mx-auto text-center space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-full">
            <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-semibold text-blue-700 dark:text-blue-300">{{ $t('pages.about.badge') }}</span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            {{ $t('pages.about.title') }}
          </h1>

          <!-- Description -->
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {{ $t('pages.about.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Left Content -->
            <div class="space-y-6">
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {{ $t('pages.about.intro.title') }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t('pages.about.intro.p1') }}
              </p>
              <p class="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ $t('pages.about.intro.p2') }}
              </p>
            </div>

            <!-- Right Visual -->
            <div class="relative">
              <div class="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-gray-200 dark:border-gray-800 p-12">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
                <div class="relative z-10 flex items-center justify-center h-full">
                  <svg class="w-48 h-48 md:w-64 md:h-64 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {{ $t('pages.about.mission.title') }}
            </h2>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div class="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>{{ $t('pages.about.mission.p1') }}</p>
            <p>{{ $t('pages.about.mission.p2') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {{ $t('pages.about.values.title') }}
            </h2>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Excellence -->
            <div class="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl transition-all duration-300 overflow-hidden p-8">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {{ $t('pages.about.values.excellence.title') }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('pages.about.values.excellence.description') }}
                </p>
              </div>
            </div>

            <!-- Proximity -->
            <div class="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl transition-all duration-300 overflow-hidden p-8">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {{ $t('pages.about.values.proximity.title') }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('pages.about.values.proximity.description') }}
                </p>
              </div>
            </div>

            <!-- Commitment -->
            <div class="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl transition-all duration-300 overflow-hidden p-8">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {{ $t('pages.about.values.commitment.title') }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('pages.about.values.commitment.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {{ $t('pages.about.team.title') }}
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {{ $t('pages.about.team.subtitle') }}
            </p>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <!-- Member 1 - Mr Beti -->
            <div class="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="p-8 text-center">
                <div class="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900/30 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-colors">
                  <img src="~/assets/images/team/member1.png" alt="Mr Beti" class="w-full h-full object-cover" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ $t('pages.about.team.member1.name') }}
                </h3>
                <p class="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {{ $t('pages.about.team.member1.role') }}
                </p>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  {{ $t('pages.about.team.member1.description') }}
                </p>
              </div>
            </div>

            <!-- Member 2 - Mme Saha -->
            <div class="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="p-8 text-center">
                <div class="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900/30 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-colors">
                  <img src="~/assets/images/team/member2.png" alt="Mme Saha" class="w-full h-full object-cover" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ $t('pages.about.team.member2.name') }}
                </h3>
                <p class="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {{ $t('pages.about.team.member2.role') }}
                </p>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  {{ $t('pages.about.team.member2.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Stat 1 -->
            <div class="text-center">
              <div class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                30+
              </div>
              <p class="text-gray-600 dark:text-gray-300 font-medium">
                {{ $t('pages.about.stats.experience') }}
              </p>
            </div>

            <!-- Stat 2 -->
            <div class="text-center">
              <div class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                100%
              </div>
              <p class="text-gray-600 dark:text-gray-300 font-medium">
                {{ $t('pages.about.stats.satisfaction') }}
              </p>
            </div>

            <!-- Stat 3 -->
            <div class="text-center">
              <div class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                24/7
              </div>
              <p class="text-gray-600 dark:text-gray-300 font-medium">
                {{ $t('pages.about.stats.support') }}
              </p>
            </div>

            <!-- Stat 4 -->
            <div class="text-center">
              <div class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                10+
              </div>
              <p class="text-gray-600 dark:text-gray-300 font-medium">
                {{ $t('pages.about.stats.services') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto">
          <div class="relative bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 rounded-2xl p-10 md:p-14 shadow-2xl border border-blue-500/20 overflow-hidden">
            <!-- Subtle pattern overlay -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <!-- Content -->
            <div class="relative text-center space-y-6">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {{ $t('pages.about.cta.title') }}
              </h2>
              <p class="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                {{ $t('pages.about.cta.subtitle') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <NuxtLink
                  :to="localePath('/contact')"
                  class="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  {{ $t('common.contactUs') }}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/services')"
                  class="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all"
                >
                  {{ $t('common.ourServices') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'À propos - Lexafric',
  description: 'Cabinet de Conseil Juridique et Fiscal regroupant des professionnels avec plus de 30 ans d\'expérience. Découvrez notre mission, nos valeurs et notre équipe.',
  ogTitle: 'À propos - Lexafric',
  ogDescription: 'Cabinet de Conseil Juridique et Fiscal regroupant des professionnels avec plus de 30 ans d\'expérience'
})
</script>
