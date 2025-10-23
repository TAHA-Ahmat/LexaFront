<template>
  <!-- 2️⃣ NOS EXPERTISES -->
  <section class="py-20 md:py-28 bg-white dark:bg-gray-950">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('pages.home.services.title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ $t('pages.home.services.subtitle') }}
          </p>
        </div>

        <!-- Services Grid - 4 cartes avec animations -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <!-- Service 1 : Juridique -->
          <NuxtLink
            :to="localePath('/services/assistance-juridique')"
            class="group relative p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 overflow-hidden"
          >
            <!-- Gradient overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="relative">
              <!-- Icon with gradient background and animation -->
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                </svg>
              </div>

              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {{ $t('pages.home.services.items.legal.title') }}
              </h3>

              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {{ $t('pages.home.services.items.legal.description') }}
              </p>

              <!-- Call to action -->
              <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>{{ $t('pages.home.services.items.legal.link') }}</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 2 : Fiscale -->
          <NuxtLink
            :to="localePath('/services/assistance-fiscale')"
            class="group relative p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 dark:border-gray-800 hover:border-emerald-500 dark:hover:border-emerald-400 overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>

              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {{ $t('pages.home.services.items.fiscal.title') }}
              </h3>

              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {{ $t('pages.home.services.items.fiscal.description') }}
              </p>

              <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>{{ $t('pages.home.services.items.fiscal.link') }}</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 3 : Sociale -->
          <NuxtLink
            :to="localePath('/services/assistance-sociale')"
            class="group relative p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-400 overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>

              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {{ $t('pages.home.services.items.social.title') }}
              </h3>

              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {{ $t('pages.home.services.items.social.description') }}
              </p>

              <div class="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>{{ $t('pages.home.services.items.social.link') }}</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 4 : Recrutement -->
          <NuxtLink
            :to="localePath('/services/assistance-recrutement')"
            class="group relative p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 dark:border-gray-800 hover:border-amber-500 dark:hover:border-amber-400 overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>

              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {{ $t('pages.home.services.items.recruitment.title') }}
              </h3>

              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {{ $t('pages.home.services.items.recruitment.description') }}
              </p>

              <div class="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>{{ $t('pages.home.services.items.recruitment.link') }}</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- CTA vers tous les services -->
        <div class="text-center">
          <NuxtLink
            :to="localePath('/services')"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <span>{{ $t('pages.home.services.viewAll') }}</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
