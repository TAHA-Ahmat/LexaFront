<template>
  <div class="min-h-screen overflow-x-hidden bg-white dark:bg-gray-950">
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
                    <span class="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{{ feature }}</span>
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
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <!-- Image/Illustration -->
              <div>
                <div class="relative aspect-square">
                  <div class="absolute inset-0 bg-white/50 dark:bg-white/5 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-white/10 p-12 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-500/20">
                    <div class="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:via-green-500/5 group-hover:to-emerald-500/10 rounded-3xl transition-all duration-500"></div>
                    <div class="relative z-10 w-full h-full flex items-center justify-center p-8">
                      <img
                        src="/images/services/assistance-fiscale.png"
                        alt="Assistance Fiscale"
                        class="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contenu -->
              <div class="space-y-8">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold backdrop-blur-sm">
                  <span class="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                  Service #2
                </div>

                <h2 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {{ $t('pages.services.fiscal.title') }}
                </h2>

                <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.services.fiscal.description') }}
                </p>

                <ul class="space-y-4">
                  <li v-for="(feature, index) in $tm('pages.services.fiscal.features')" :key="index" class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-6 h-6 mt-1 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ feature }}</span>
                  </li>
                </ul>

                <div class="inline-flex items-center gap-3 text-green-600 dark:text-green-400 font-semibold text-lg group/link">
                  <span>{{ $t('pages.services.learnMore') }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform group-hover/link:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 3: Assistance Sociale -->
          <NuxtLink to="/services/assistance-sociale" class="block group">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div class="order-2 lg:order-1 space-y-8">
                <div class="inline-flex items-center gap-3 px-6 py-3 bg-purple-50/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold backdrop-blur-sm border border-purple-200/50 dark:border-purple-500/30">
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                  </span>
                  Service #3
                </div>
                <div>
                  <h2 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300 tracking-tight leading-tight">
                    {{ $t('pages.services.social.title') }}
                  </h2>
                  <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ $t('pages.services.social.description') }}
                  </p>
                </div>
                <ul class="space-y-4">
                  <li v-for="(feature, index) in $tm('pages.services.social.features')" :key="index" class="flex items-start gap-4">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                        <svg class="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{{ feature }}</span>
                  </li>
                </ul>
                <div class="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all group-hover:gap-4 group-hover:shadow-xl group-hover:shadow-purple-500/20">
                  {{ $t('pages.services.learnMore') }}
                  <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <div class="order-1 lg:order-2 relative aspect-square">
                <div class="absolute inset-0 bg-white/50 dark:bg-white/5 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-white/10 p-12 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                  <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/10 to-purple-500/10 group-hover:from-purple-500/20 group-hover:via-violet-500/20 group-hover:to-purple-500/20 rounded-3xl transition-all duration-500"></div>
                  <div class="relative h-full flex items-center justify-center p-8">
                    <img
                      src="/images/services/assistance-sociale.png"
                      alt="Assistance Sociale"
                      class="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 4: Assistance à Recrutement -->
          <NuxtLink to="/services/assistance-recrutement" class="block group">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div class="relative aspect-square">
                <div class="absolute inset-0 bg-white/50 dark:bg-white/5 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-white/10 p-12 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                  <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-yellow-500/10 group-hover:from-yellow-500/20 group-hover:via-amber-500/20 group-hover:to-yellow-500/20 rounded-3xl transition-all duration-500"></div>
                  <div class="relative h-full flex items-center justify-center p-8">
                    <img
                      src="/images/services/assistance-recrutement.png"
                      alt="Assistance à Recrutement"
                      class="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div class="space-y-8">
                <div class="inline-flex items-center gap-3 px-6 py-3 bg-yellow-50/80 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-500/30">
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                  </span>
                  Service #4
                </div>
                <div>
                  <h2 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-all duration-300 tracking-tight leading-tight">
                    {{ $t('pages.services.recruitment.title') }}
                  </h2>
                  <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ $t('pages.services.recruitment.description') }}
                  </p>
                </div>
                <ul class="space-y-4">
                  <li v-for="(feature, index) in $tm('pages.services.recruitment.features')" :key="index" class="flex items-start gap-4">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-7 h-7 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                        <svg class="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{{ feature }}</span>
                  </li>
                </ul>
                <div class="inline-flex items-center gap-3 bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all group-hover:gap-4 group-hover:shadow-xl group-hover:shadow-yellow-500/20">
                  {{ $t('pages.services.learnMore') }}
                  <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Service 5: Formations -->
          <NuxtLink to="/services/formations" class="block group">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div class="order-2 lg:order-1 space-y-8">
                <div class="inline-flex items-center gap-3 px-6 py-3 bg-red-50/80 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-semibold backdrop-blur-sm border border-red-200/50 dark:border-red-500/30">
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  Service #5
                </div>
                <div>
                  <h2 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-300 tracking-tight leading-tight">
                    {{ $t('pages.services.training.title') }}
                  </h2>
                  <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ $t('pages.services.training.description') }}
                  </p>
                </div>
                <ul class="space-y-4">
                  <li v-for="(feature, index) in $tm('pages.services.training.features')" :key="index" class="flex items-start gap-4">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-7 h-7 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                        <svg class="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{{ feature }}</span>
                  </li>
                </ul>
                <div class="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all group-hover:gap-4 group-hover:shadow-xl group-hover:shadow-red-500/20">
                  {{ $t('pages.services.learnMore') }}
                  <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <div class="order-1 lg:order-2 relative aspect-square">
                <div class="absolute inset-0 bg-white/50 dark:bg-white/5 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-white/10 p-12 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl group-hover:shadow-red-500/20">
                  <div class="absolute inset-0 bg-gradient-to-br from-red-500/10 via-rose-500/10 to-red-500/10 group-hover:from-red-500/20 group-hover:via-rose-500/20 group-hover:to-red-500/20 rounded-3xl transition-all duration-500"></div>
                  <div class="relative h-full flex items-center justify-center p-8">
                    <img
                      src="/images/services/formations.png"
                      alt="Formations"
                      class="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-32 overflow-hidden">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900"></div>

      <!-- Animated Pattern Overlay -->
      <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>

      <!-- Radial Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent"></div>

      <!-- Glassmorphism Container -->
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <div class="relative backdrop-blur-xl bg-white/10 dark:bg-white/5 rounded-3xl border border-white/20 dark:border-white/10 p-12 md:p-16 shadow-2xl">
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl"></div>

            <!-- Content -->
            <div class="relative text-center space-y-8">
              <!-- Badge -->
              <div class="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                Prêt à transformer votre entreprise ?
              </div>

              <!-- Title -->
              <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                {{ $t('pages.services.cta.title') }}
              </h2>

              <!-- Subtitle -->
              <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {{ $t('pages.services.cta.subtitle') }}
              </p>

              <!-- CTA Button -->
              <div class="pt-4">
                <NuxtLink
                  to="/contact"
                  class="group inline-flex items-center gap-4 bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30"
                >
                  {{ $t('pages.services.cta.button') }}
                  <svg class="w-7 h-7 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
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
