<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:bg-gradient-to-br dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20">
    <!-- Breadcrumb -->
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <Breadcrumb :items="[{ label: $t('breadcrumb.services') }]" />
    </div>

    <!-- Bento Grid Services -->
    <section class="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
      <div class="max-w-6xl mx-auto">
        <!-- Grid asymétrique Bento -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <!-- Service 1: Juridique - Grande card (2 cols) -->
          <NuxtLink
            :to="localePath('/services/assistance-juridique')"
            class="group relative lg:col-span-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950 p-8 md:p-12 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl overflow-hidden min-h-[280px]"
          >
            <!-- Background subtle pattern -->
            <div class="absolute inset-0 opacity-[0.02]">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <div class="relative flex flex-col justify-between h-full">
              <div>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ $t('pages.services.legal.title') }}
                </h2>
              </div>

              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:gap-3 transition-all">
                <span class="text-sm font-medium">{{ $t('pages.services.learnMore') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 2: Fiscale - Petite card -->
          <NuxtLink
            :to="localePath('/services/assistance-fiscale')"
            class="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-gray-950 p-8 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-xl overflow-hidden min-h-[280px]"
          >
            <div class="absolute inset-0 opacity-[0.02]">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <div class="relative flex flex-col justify-between h-full">
              <div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {{ $t('pages.services.fiscal.title') }}
                </h2>
              </div>

              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:gap-3 transition-all">
                <span class="text-sm font-medium">{{ $t('pages.services.learnMore') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 3: Sociale - Petite card -->
          <NuxtLink
            :to="localePath('/services/assistance-sociale')"
            class="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-950 p-8 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:shadow-xl overflow-hidden min-h-[280px]"
          >
            <div class="absolute inset-0 opacity-[0.02]">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <div class="relative flex flex-col justify-between h-full">
              <div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {{ $t('pages.services.social.title') }}
                </h2>
              </div>

              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:gap-3 transition-all">
                <span class="text-sm font-medium">{{ $t('pages.services.learnMore') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 4: Recrutement - Grande card (2 cols) -->
          <NuxtLink
            :to="localePath('/services/assistance-recrutement')"
            class="group relative lg:col-span-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-gray-950 p-8 md:p-12 hover:border-amber-500 dark:hover:border-amber-400 transition-all duration-300 hover:shadow-xl overflow-hidden min-h-[280px]"
          >
            <div class="absolute inset-0 opacity-[0.02]">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <div class="relative flex flex-col justify-between h-full">
              <div>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {{ $t('pages.services.recruitment.title') }}
                </h2>
              </div>

              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:gap-3 transition-all">
                <span class="text-sm font-medium">{{ $t('pages.services.learnMore') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 5: Formations - Petite card -->
          <NuxtLink
            :to="localePath('/services/formations')"
            class="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/20 dark:to-gray-950 p-8 hover:border-rose-500 dark:hover:border-rose-400 transition-all duration-300 hover:shadow-xl overflow-hidden min-h-[280px]"
          >
            <div class="absolute inset-0 opacity-[0.02]">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <div class="relative flex flex-col justify-between h-full">
              <div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {{ $t('pages.services.training.title') }}
                </h2>
              </div>

              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 group-hover:gap-3 transition-all">
                <span class="text-sm font-medium">{{ $t('pages.services.learnMore') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

// SEO - Conservé pour éviter régression
useSeoMeta({
  title: 'Nos Services - Lexafric',
  description: 'Découvrez nos services en assistance juridique, fiscale, sociale, recrutement et formations',
  ogTitle: 'Nos Services - Lexafric',
  ogDescription: 'Découvrez nos services en assistance juridique, fiscale, sociale, recrutement et formations'
})
</script>
