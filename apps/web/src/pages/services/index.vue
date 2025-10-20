<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section Premium -->
    <section class="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 overflow-hidden">
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
        <div class="max-w-4xl mx-auto text-center space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-full">
            <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-semibold text-blue-700 dark:text-blue-300">Excellence juridique professionnelle</span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            {{ $t('pages.services.title') }}
          </h1>

          <!-- Subtitle -->
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {{ $t('pages.services.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid Premium -->
    <section class="relative py-16 md:py-24 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto space-y-24">
          <!-- Service 1: Assistance Juridique -->
          <NuxtLink to="/services/assistance-juridique" class="block group">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <!-- Contenu -->
              <div class="order-2 lg:order-1 space-y-6">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-lg text-sm font-medium text-blue-700 dark:text-blue-300">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" r="3"/>
                  </svg>
                  Assistance Juridique
                </div>

                <!-- Titre -->
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                  {{ $t('pages.services.legal.title') }}
                </h2>

                <!-- Description -->
                <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.services.legal.description') }}
                </p>

                <!-- Features -->
                <ul class="space-y-3 pt-2">
                  <li v-for="(feature, index) in $tm('pages.services.legal.features')" :key="index"
                      class="flex items-start gap-3">
                    <div class="flex-shrink-0 mt-0.5">
                      <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{{ $t(`pages.services.legal.features.${index}`) }}</span>
                  </li>
                </ul>

                <!-- CTA -->
                <div class="pt-4">
                  <div class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group/link">
                    <span>{{ $t('pages.services.learnMore') }}</span>
                    <svg class="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Image Premium -->
              <div class="order-1 lg:order-2">
                <div class="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-gray-200 dark:border-gray-800 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-all duration-300">
                  <!-- Gradient overlay -->
                  <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>

                  <!-- Image -->
                  <div class="relative w-full h-full flex items-center justify-center p-8 md:p-12">
                    <img
                      src="/images/services/assistance-juridique.png"
                      alt="Assistance Juridique"
                      class="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 2: Assistance Fiscale -->
          <NuxtLink to="/services/assistance-fiscale" class="block group">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <!-- Image Premium -->
              <div>
                <div class="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border border-gray-200 dark:border-gray-800 group-hover:border-emerald-300 dark:group-hover:border-emerald-700 transition-all duration-300">
                  <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5 group-hover:from-emerald-500/10 group-hover:to-green-500/10 transition-all duration-300"></div>
                  <div class="relative w-full h-full flex items-center justify-center p-8 md:p-12">
                    <img
                      src="/images/services/assistance-fiscale.png"
                      alt="Assistance Fiscale"
                      class="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              <!-- Contenu -->
              <div class="space-y-6">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 rounded-lg text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" r="3"/>
                  </svg>
                  Assistance Fiscale
                </div>

                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                  {{ $t('pages.services.fiscal.title') }}
                </h2>

                <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.services.fiscal.description') }}
                </p>

                <ul class="space-y-3 pt-2">
                  <li v-for="(feature, index) in $tm('pages.services.fiscal.features')" :key="index" class="flex items-start gap-3">
                    <div class="flex-shrink-0 mt-0.5">
                      <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{{ $t(`pages.services.fiscal.features.${index}`) }}</span>
                  </li>
                </ul>

                <div class="pt-4">
                  <div class="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold group/link">
                    <span>{{ $t('pages.services.learnMore') }}</span>
                    <svg class="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 3: Assistance Sociale -->
          <NuxtLink to="/services/assistance-sociale" class="block group">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div class="order-2 lg:order-1 space-y-6">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/30 rounded-lg text-sm font-medium text-purple-700 dark:text-purple-300">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" r="3"/>
                  </svg>
                  Assistance Sociale
                </div>

                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                  {{ $t('pages.services.social.title') }}
                </h2>

                <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.services.social.description') }}
                </p>

                <ul class="space-y-3 pt-2">
                  <li v-for="(feature, index) in $tm('pages.services.social.features')" :key="index" class="flex items-start gap-3">
                    <div class="flex-shrink-0 mt-0.5">
                      <svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{{ $t(`pages.services.social.features.${index}`) }}</span>
                  </li>
                </ul>

                <div class="pt-4">
                  <div class="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold group/link">
                    <span>{{ $t('pages.services.learnMore') }}</span>
                    <svg class="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="order-1 lg:order-2">
                <div class="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border border-gray-200 dark:border-gray-800 group-hover:border-purple-300 dark:group-hover:border-purple-700 transition-all duration-300">
                  <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-300"></div>
                  <div class="relative w-full h-full flex items-center justify-center p-8 md:p-12">
                    <img
                      src="/images/services/assistance-sociale.png"
                      alt="Assistance Sociale"
                      class="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 4: Assistance à Recrutement -->
          <NuxtLink to="/services/assistance-recrutement" class="block group">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <div class="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-gray-200 dark:border-gray-800 group-hover:border-amber-300 dark:group-hover:border-amber-700 transition-all duration-300">
                  <div class="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
                  <div class="relative w-full h-full flex items-center justify-center p-8 md:p-12">
                    <img
                      src="/images/services/assistance-recrutement.png"
                      alt="Assistance à Recrutement"
                      class="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              <div class="space-y-6">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30 rounded-lg text-sm font-medium text-amber-700 dark:text-amber-300">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" r="3"/>
                  </svg>
                  Assistance Recrutement
                </div>

                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                  {{ $t('pages.services.recruitment.title') }}
                </h2>

                <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.services.recruitment.description') }}
                </p>

                <ul class="space-y-3 pt-2">
                  <li v-for="(feature, index) in $tm('pages.services.recruitment.features')" :key="index" class="flex items-start gap-3">
                    <div class="flex-shrink-0 mt-0.5">
                      <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{{ $t(`pages.services.recruitment.features.${index}`) }}</span>
                  </li>
                </ul>

                <div class="pt-4">
                  <div class="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold group/link">
                    <span>{{ $t('pages.services.learnMore') }}</span>
                    <svg class="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 5: Formations -->
          <NuxtLink to="/services/formations" class="block group">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div class="order-2 lg:order-1 space-y-6">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800/30 rounded-lg text-sm font-medium text-rose-700 dark:text-rose-300">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" r="3"/>
                  </svg>
                  Formations
                </div>

                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                  {{ $t('pages.services.training.title') }}
                </h2>

                <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.services.training.description') }}
                </p>

                <ul class="space-y-3 pt-2">
                  <li v-for="(feature, index) in $tm('pages.services.training.features')" :key="index" class="flex items-start gap-3">
                    <div class="flex-shrink-0 mt-0.5">
                      <svg class="w-5 h-5 text-rose-600 dark:text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{{ $t(`pages.services.training.features.${index}`) }}</span>
                  </li>
                </ul>

                <div class="pt-4">
                  <div class="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold group/link">
                    <span>{{ $t('pages.services.learnMore') }}</span>
                    <svg class="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="order-1 lg:order-2">
                <div class="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 border border-gray-200 dark:border-gray-800 group-hover:border-rose-300 dark:group-hover:border-rose-700 transition-all duration-300">
                  <div class="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-pink-500/5 group-hover:from-rose-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                  <div class="relative w-full h-full flex items-center justify-center p-8 md:p-12">
                    <img
                      src="/images/services/formations.png"
                      alt="Formations"
                      class="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section Premium -->
    <section class="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <!-- Gradient accents -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto">
          <!-- Card Premium -->
          <div class="relative bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 rounded-2xl p-12 md:p-16 shadow-2xl border border-blue-500/20 overflow-hidden">
            <!-- Subtle pattern overlay -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>

            <!-- Content -->
            <div class="relative text-center space-y-6">
              <!-- Badge -->
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium text-white">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>Contactez-nous dès aujourd'hui</span>
              </div>

              <!-- Title -->
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {{ $t('pages.services.cta.title') }}
              </h2>

              <!-- Subtitle -->
              <p class="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                {{ $t('pages.services.cta.subtitle') }}
              </p>

              <!-- CTA Button -->
              <div class="pt-4">
                <NuxtLink
                  to="/contact"
                  class="group inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-base hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  {{ $t('pages.services.cta.button') }}
                  <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
  title: 'Nos Services - Lexafric',
  description: 'Découvrez nos services en assistance juridique, fiscale, sociale, recrutement et formations',
  ogTitle: 'Nos Services - Lexafric',
  ogDescription: 'Découvrez nos services en assistance juridique, fiscale, sociale, recrutement et formations'
})
</script>
