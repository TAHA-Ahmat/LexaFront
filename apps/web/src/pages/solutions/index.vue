<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 overflow-x-hidden">
    <!-- Breadcrumb -->
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <Breadcrumb :items="[{ label: $t('breadcrumb.solutions') }]" />
    </div>

    <!-- Solutions Grid Minimaliste -->
    <section class="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto space-y-20">
          <!-- Solution 1: Secrétariat Juridique -->
          <NuxtLink :to="localePath('/solutions/secretariat-juridique')" class="block group">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <div class="lg:col-span-1">
                <div class="text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-indigo-500 dark:group-hover:text-indigo-500 transition-colors">
                  01
                </div>
              </div>

              <div class="lg:col-span-4 space-y-4">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {{ $t('pages.solutions.legal.title') }}
                </h2>

                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {{ $t('pages.solutions.legal.description') }}
                </p>

                <div class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium pt-2 group-hover:gap-3 transition-all">
                  <span>{{ $t('common.readMore') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </NuxtLink>

          <!-- Solution 2: Gouvernance d'Entreprise -->
          <NuxtLink :to="localePath('/solutions/gouvernance-entreprise')" class="block group">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <div class="lg:col-span-1">
                <div class="text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-teal-500 dark:group-hover:text-teal-500 transition-colors">
                  02
                </div>
              </div>

              <div class="lg:col-span-4 space-y-4">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {{ $t('pages.solutions.governance.title') }}
                </h2>

                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {{ $t('pages.solutions.governance.description') }}
                </p>

                <div class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium pt-2 group-hover:gap-3 transition-all">
                  <span>{{ $t('common.readMore') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </NuxtLink>

          <!-- Solution 3: Création & Transformation -->
          <NuxtLink :to="localePath('/solutions/creation-transformation')" class="block group">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <div class="lg:col-span-1">
                <div class="text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-orange-500 dark:group-hover:text-orange-500 transition-colors">
                  03
                </div>
              </div>

              <div class="lg:col-span-4 space-y-4">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {{ $t('pages.solutions.creation.title') }}
                </h2>

                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {{ $t('pages.solutions.creation.description') }}
                </p>

                <div class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium pt-2 group-hover:gap-3 transition-all">
                  <span>{{ $t('common.readMore') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section Minimaliste -->
    <section class="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {{ $t('pages.solutions.cta.title') }}
          </h2>

          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ $t('pages.solutions.cta.subtitle') }}
          </p>

          <div class="pt-4">
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
            >
              {{ $t('pages.solutions.cta.button') }}
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
const { t } = useI18n()

// SEO
useSeoMeta({
  title: () => `${t('nav.solutions')} - Lexafric`,
  description: () => t('pages.home.seo.description'),
  ogTitle: () => `${t('nav.solutions')} - Lexafric`,
  ogDescription: () => t('pages.home.seo.description')
})
</script>
