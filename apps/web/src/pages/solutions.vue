<template>
  <div>
    <!-- Hero Section Premium -->
    <section class="relative py-20 md:py-28 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/20 dark:via-gray-950 dark:to-gray-950 overflow-hidden">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <!-- Gradient accents -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div class="relative container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <li><NuxtLink to="/" class="hover:text-purple-600 dark:hover:text-purple-400">Accueil</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></li>
            <li class="text-gray-900 dark:text-white font-medium">Solutions</li>
          </ol>
        </nav>

        <div class="max-w-4xl mx-auto text-center space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/30 rounded-full">
            <svg class="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-semibold text-purple-700 dark:text-purple-300">Solutions Innovantes</span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            {{ $t('pages.solutions.title') }}
          </h1>

          <!-- Description -->
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {{ $t('pages.solutions.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Solution 1: Secrétariat Juridique -->
            <div class="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <!-- Gradient overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative p-8 md:p-10">
                <!-- Icon -->
                <div class="w-16 h-16 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                <!-- Title -->
                <h3 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {{ $t('pages.solutions.legal.title') }}
                </h3>

                <!-- Description -->
                <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {{ $t('pages.solutions.legal.description') }}
                </p>

                <!-- Features -->
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ $t('pages.solutions.legal.feature1') }}</span>
                  </li>
                  <li class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ $t('pages.solutions.legal.feature2') }}</span>
                  </li>
                </ul>

                <!-- Link -->
                <NuxtLink to="/solutions/secretariat-juridique" class="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-4 transition-all group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                  {{ $t('common.readMore') }}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>

            <!-- Solution 2: Gouvernance d'Entreprise -->
            <div class="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <!-- Gradient overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative p-8 md:p-10">
                <!-- Icon -->
                <div class="w-16 h-16 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>

                <!-- Title -->
                <h3 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {{ $t('pages.solutions.governance.title') }}
                </h3>

                <!-- Description -->
                <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {{ $t('pages.solutions.governance.description') }}
                </p>

                <!-- Features -->
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <svg class="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ $t('pages.solutions.governance.feature1') }}</span>
                  </li>
                  <li class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <svg class="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ $t('pages.solutions.governance.feature2') }}</span>
                  </li>
                </ul>

                <!-- Link -->
                <NuxtLink to="/solutions/gouvernance-entreprise" class="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:gap-4 transition-all group-hover:text-teal-700 dark:group-hover:text-teal-300">
                  {{ $t('common.readMore') }}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>

            <!-- Solution 3: Création & Transformation -->
            <div class="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <!-- Gradient overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative p-8 md:p-10">
                <!-- Icon -->
                <div class="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <!-- Title -->
                <h3 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {{ $t('pages.solutions.creation.title') }}
                </h3>

                <!-- Description -->
                <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {{ $t('pages.solutions.creation.description') }}
                </p>

                <!-- Features -->
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <svg class="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ $t('pages.solutions.creation.feature1') }}</span>
                  </li>
                  <li class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <svg class="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ $t('pages.solutions.creation.feature2') }}</span>
                  </li>
                </ul>

                <!-- Link -->
                <NuxtLink to="/solutions/creation-transformation" class="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold hover:gap-4 transition-all group-hover:text-orange-700 dark:group-hover:text-orange-300">
                  {{ $t('common.readMore') }}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- Section Title -->
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {{ $t('pages.solutions.why.title') }}
            </h2>
            <div class="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <!-- Stats Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Stat 1 -->
            <div class="relative group">
              <div class="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-xl transition-all duration-300">
                <div class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  10+
                </div>
                <p class="text-gray-600 dark:text-gray-300 font-medium">
                  {{ $t('pages.solutions.why.experience') }}
                </p>
              </div>
            </div>

            <!-- Stat 2 -->
            <div class="relative group">
              <div class="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-xl transition-all duration-300">
                <div class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  35+
                </div>
                <p class="text-gray-600 dark:text-gray-300 font-medium">
                  {{ $t('pages.solutions.why.partners') }}
                </p>
              </div>
            </div>

            <!-- Stat 3 -->
            <div class="relative group">
              <div class="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-xl transition-all duration-300">
                <div class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  100%
                </div>
                <p class="text-gray-600 dark:text-gray-300 font-medium">
                  {{ $t('pages.solutions.why.satisfaction') }}
                </p>
              </div>
            </div>

            <!-- Stat 4 -->
            <div class="relative group">
              <div class="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-xl transition-all duration-300">
                <div class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  24/7
                </div>
                <p class="text-gray-600 dark:text-gray-300 font-medium">
                  {{ $t('pages.solutions.why.support') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto">
          <div class="relative bg-gradient-to-br from-purple-600 to-indigo-700 dark:from-purple-700 dark:to-indigo-800 rounded-2xl p-10 md:p-14 shadow-2xl border border-purple-500/20 overflow-hidden">
            <!-- Subtle pattern overlay -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <!-- Content -->
            <div class="relative text-center space-y-6">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {{ $t('pages.solutions.cta.title') }}
              </h2>
              <p class="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                {{ $t('pages.solutions.cta.subtitle') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center justify-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  {{ $t('pages.solutions.cta.button') }}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
                <NuxtLink
                  to="/services"
                  class="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all"
                >
                  Nos Services
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
  title: 'Nos Solutions - Lexafric',
  description: 'Découvrez nos solutions en secrétariat juridique, gouvernance d\'entreprise et création & transformation',
  ogTitle: 'Nos Solutions - Lexafric',
  ogDescription: 'Découvrez nos solutions en secrétariat juridique, gouvernance d\'entreprise et création & transformation'
})
</script>
