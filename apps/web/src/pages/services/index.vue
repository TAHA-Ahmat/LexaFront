<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
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
            class="group relative lg:col-span-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-100 via-blue-50 to-white/80 dark:from-blue-950/20 dark:to-gray-950 p-8 md:p-12 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl overflow-hidden min-h-[280px]"
          >
            <!-- Background subtle pattern -->
            <div class="absolute inset-0 opacity-[0.02]">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <div class="relative flex flex-col justify-between h-full">
              <div>
                <!-- Icône Balance de justice -->
                <div class="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                  </svg>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ $t('pages.services.legal.title') }}
                </h2>
              </div>

              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:gap-3 transition-all">
                <span class="text-sm font-medium">{{ $t('pages.services.bento.explore') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 2: Fiscale - Petite card -->
          <NuxtLink
            :to="localePath('/services/assistance-fiscale')"
            class="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-emerald-50 to-emerald-100/40 dark:from-emerald-950/20 dark:to-gray-950 p-8 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-xl overflow-hidden min-h-[280px]"
          >
            <div class="absolute inset-0 opacity-[0.02]">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <div class="relative flex flex-col justify-between h-full">
              <div>
                <!-- Icône Calculatrice -->
                <div class="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {{ $t('pages.services.fiscal.title') }}
                </h2>
              </div>

              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:gap-3 transition-all">
                <span class="text-sm font-medium">{{ $t('pages.services.bento.optimize') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 3: Sociale - Petite card -->
          <NuxtLink
            :to="localePath('/services/assistance-sociale')"
            class="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-purple-100 via-purple-50 to-transparent dark:from-purple-950/20 dark:to-gray-950 p-8 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:shadow-xl overflow-hidden min-h-[280px]"
          >
            <div class="absolute inset-0 opacity-[0.02]">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <div class="relative flex flex-col justify-between h-full">
              <div>
                <!-- Icône Groupe de personnes -->
                <div class="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {{ $t('pages.services.social.title') }}
                </h2>
              </div>

              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:gap-3 transition-all">
                <span class="text-sm font-medium">{{ $t('pages.services.bento.protect') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 4: Recrutement - Grande card (2 cols) -->
          <NuxtLink
            :to="localePath('/services/assistance-recrutement')"
            class="group relative lg:col-span-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-amber-100 via-amber-50 to-white/80 dark:from-amber-950/20 dark:to-gray-950 p-8 md:p-12 hover:border-amber-500 dark:hover:border-amber-400 transition-all duration-300 hover:shadow-xl overflow-hidden min-h-[280px]"
          >
            <div class="absolute inset-0 opacity-[0.02]">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <div class="relative flex flex-col justify-between h-full">
              <div>
                <!-- Icône Porte-documents -->
                <div class="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {{ $t('pages.services.recruitment.title') }}
                </h2>
              </div>

              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:gap-3 transition-all">
                <span class="text-sm font-medium">{{ $t('pages.services.bento.recruit') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 5: Formations - Petite card -->
          <NuxtLink
            :to="localePath('/services/formations')"
            class="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-rose-50 to-rose-100/40 dark:from-rose-950/20 dark:to-gray-950 p-8 hover:border-rose-500 dark:hover:border-rose-400 transition-all duration-300 hover:shadow-xl overflow-hidden min-h-[280px]"
          >
            <div class="absolute inset-0 opacity-[0.02]">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <div class="relative flex flex-col justify-between h-full">
              <div>
                <!-- Icône Graduation -->
                <div class="w-14 h-14 bg-rose-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                  </svg>
                </div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {{ $t('pages.services.training.title') }}
                </h2>
              </div>

              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 group-hover:gap-3 transition-all">
                <span class="text-sm font-medium">{{ $t('pages.services.bento.train') }}</span>
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
const { t } = useI18n()

// SEO - Conservé pour éviter régression
useSeoMeta({
  title: () => `${t('nav.services')} - Lexafric`,
  description: () => t('pages.home.seo.description'),
  ogTitle: () => `${t('nav.services')} - Lexafric`,
  ogDescription: () => t('pages.home.seo.description')
})
</script>
