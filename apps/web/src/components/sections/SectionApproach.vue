<template>
  <!-- 3️⃣ EXCELLENCE & RIGUEUR -->
  <section class="section-approach-premium py-20 md:py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:bg-gradient-to-br dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 relative overflow-hidden">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header Principal -->
        <div class="text-center mb-16 md:mb-24" data-aos="fade-up">
          <span class="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-6">
            Excellence & Rigueur
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {{ $t('pages.home.approach.title') }}
          </h2>
          <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {{ $t('pages.home.approach.subtitle') }}
          </p>
        </div>

        <!-- Zone Images + Valeurs (Desktop: 2 colonnes | Mobile: Stack) -->
        <div class="mb-24 md:mb-32">
          <!-- Desktop: Deux zones côte à côte -->
          <div class="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <!-- Zone GAUCHE: Images Asymétriques avec Motion Design -->
            <div class="relative min-h-[800px]" data-aos="fade-right">
              <!-- Image 1 -->
              <div
                ref="parallaxImg1"
                class="floating-image floating-image-1 absolute"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <img
                  :src="images.img1"
                  alt="Équipe Lexafric en réunion collaborative"
                  class="w-full h-full object-cover rounded-xl shadow-2xl"
                  loading="lazy"
                />
              </div>

              <!-- Image 2 -->
              <div
                ref="parallaxImg2"
                class="floating-image floating-image-2 absolute"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  :src="images.img2"
                  alt="Bureau professionnel Lexafric"
                  class="w-full h-full object-cover rounded-xl shadow-2xl"
                  loading="lazy"
                />
              </div>

              <!-- Image 3 -->
              <div
                ref="parallaxImg3"
                class="floating-image floating-image-3 absolute"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  :src="images.img3"
                  alt="Banderoles Lexafric"
                  class="w-full h-full object-cover rounded-xl shadow-2xl"
                  loading="lazy"
                />
              </div>

              <!-- Image 4 -->
              <div
                ref="parallaxImg4"
                class="floating-image floating-image-4 absolute"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  :src="images.img4"
                  alt="Professionnel Lexafric"
                  class="w-full h-full object-cover rounded-xl shadow-2xl"
                  loading="lazy"
                />
              </div>

              <!-- Image 5 -->
              <div
                ref="parallaxImg5"
                class="floating-image floating-image-5 absolute"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  :src="images.img5"
                  alt="Expert Lexafric"
                  class="w-full h-full object-cover rounded-xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Zone DROITE: Valeurs en Stack -->
            <div class="flex flex-col justify-center space-y-6" data-aos="fade-left">
              <!-- Valeur 1: Intégrité -->
              <div class="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-1">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div class="relative flex items-start gap-4">
                  <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {{ $t('pages.home.approach.values.items.integrity.title') }}
                    </h4>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {{ $t('pages.home.approach.values.items.integrity.description') }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Valeur 2: Écoute -->
              <div class="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:-translate-y-1">
                <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div class="relative flex items-start gap-4">
                  <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {{ $t('pages.home.approach.values.items.listening.title') }}
                    </h4>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {{ $t('pages.home.approach.values.items.listening.description') }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Valeur 3: Pédagogie -->
              <div class="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 hover:-translate-y-1">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div class="relative flex items-start gap-4">
                  <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {{ $t('pages.home.approach.values.items.pedagogy.title') }}
                    </h4>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {{ $t('pages.home.approach.values.items.pedagogy.description') }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Valeur 4: Interaction -->
              <div class="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-400 hover:-translate-y-1">
                <div class="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div class="relative flex items-start gap-4">
                  <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg class="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {{ $t('pages.home.approach.values.items.interaction.title') }}
                    </h4>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {{ $t('pages.home.approach.values.items.interaction.description') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile & Tablet: Stack Vertical -->
          <div class="lg:hidden space-y-12">
            <!-- Images en grilles -->
            <div class="space-y-6" data-aos="fade-up">
              <div class="rounded-xl overflow-hidden shadow-xl">
                <img
                  :src="images.img1"
                  alt="Équipe Lexafric"
                  class="w-full h-auto aspect-video object-cover"
                  loading="lazy"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="rounded-xl overflow-hidden shadow-lg">
                  <img
                    :src="images.img2"
                    alt="Bureau Lexafric"
                    class="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
                <div class="rounded-xl overflow-hidden shadow-lg">
                  <img
                    :src="images.img3"
                    alt="Banderoles Lexafric"
                    class="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="rounded-xl overflow-hidden shadow-lg">
                  <img
                    :src="images.img4"
                    alt="Professionnel Lexafric"
                    class="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                <div class="rounded-xl overflow-hidden shadow-lg">
                  <img
                    :src="images.img5"
                    alt="Expert Lexafric"
                    class="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- Valeurs -->
            <div class="space-y-4" data-aos="fade-up" data-aos-delay="100">
              <!-- Les mêmes 4 cartes valeurs mais en stack mobile -->
              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {{ $t('pages.home.approach.values.items.integrity.title') }}
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      {{ $t('pages.home.approach.values.items.integrity.description') }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {{ $t('pages.home.approach.values.items.listening.title') }}
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      {{ $t('pages.home.approach.values.items.listening.description') }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {{ $t('pages.home.approach.values.items.pedagogy.title') }}
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      {{ $t('pages.home.approach.values.items.pedagogy.description') }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {{ $t('pages.home.approach.values.items.interaction.title') }}
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      {{ $t('pages.home.approach.values.items.interaction.description') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Méthodologie : Timeline Horizontale -->
        <div class="mb-24">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {{ $t('pages.home.approach.method.title') }}
          </h3>

          <!-- Timeline desktop (horizontal) -->
          <div class="hidden lg:block relative">
            <!-- Ligne de connexion animée -->
            <div class="absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-blue-300 via-emerald-300 via-purple-300 to-amber-300 dark:from-blue-700 dark:via-emerald-700 dark:via-purple-700 dark:to-amber-700 rounded-full opacity-50"></div>

            <div class="grid grid-cols-4 gap-6">
              <!-- Étape 1 : Analyse -->
              <div class="relative group" data-aos="zoom-in" data-aos-delay="0">
                <div class="flex flex-col items-center text-center">
                  <!-- Numéro avec glow pulsé -->
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 relative z-10 mb-6 method-step-glow-blue">
                    <svg class="w-8 h-8 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>

                  <!-- Carte avec image background -->
                  <div class="card-methode-analyse relative overflow-hidden rounded-xl shadow-md group-hover:shadow-2xl transition-all duration-500 border-2 border-blue-300 dark:border-blue-600 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:-translate-y-2 group-hover:scale-105">
                    <!-- Overlay gradient léger pour voir l'image -->
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-900/75 via-blue-800/60 to-transparent"></div>

                    <div class="relative z-10 p-6">
                      <h4 class="text-lg font-bold text-white mb-3 drop-shadow-lg">
                        {{ $t('pages.home.approach.method.steps.analyze.title') }}
                      </h4>
                      <p class="text-sm text-white leading-relaxed drop-shadow-md">
                        {{ $t('pages.home.approach.method.steps.analyze.description') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Étape 2 : Conseil -->
              <div class="relative group" data-aos="zoom-in" data-aos-delay="100">
                <div class="flex flex-col items-center text-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 relative z-10 mb-6 method-step-glow-emerald">
                    <svg class="w-8 h-8 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>

                  <div class="card-methode-conseil relative overflow-hidden rounded-xl shadow-md group-hover:shadow-2xl transition-all duration-500 border-2 border-emerald-300 dark:border-emerald-600 group-hover:border-emerald-500 dark:group-hover:border-emerald-400 group-hover:-translate-y-2 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/75 via-emerald-800/60 to-transparent"></div>

                    <div class="relative z-10 p-6">
                      <h4 class="text-lg font-bold text-white mb-3 drop-shadow-lg">
                        {{ $t('pages.home.approach.method.steps.advise.title') }}
                      </h4>
                      <p class="text-sm text-white leading-relaxed drop-shadow-md">
                        {{ $t('pages.home.approach.method.steps.advise.description') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Étape 3 : Mise en œuvre -->
              <div class="relative group" data-aos="zoom-in" data-aos-delay="200">
                <div class="flex flex-col items-center text-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 relative z-10 mb-6 method-step-glow-purple">
                    <svg class="w-8 h-8 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>

                  <div class="card-methode-oeuvre relative overflow-hidden rounded-xl shadow-md group-hover:shadow-2xl transition-all duration-500 border-2 border-purple-300 dark:border-purple-600 group-hover:border-purple-500 dark:group-hover:border-purple-400 group-hover:-translate-y-2 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-purple-900/75 via-purple-800/60 to-transparent"></div>

                    <div class="relative z-10 p-6">
                      <h4 class="text-lg font-bold text-white mb-3 drop-shadow-lg">
                        {{ $t('pages.home.approach.method.steps.implement.title') }}
                      </h4>
                      <p class="text-sm text-white leading-relaxed drop-shadow-md">
                        {{ $t('pages.home.approach.method.steps.implement.description') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Étape 4 : Suivi -->
              <div class="relative group" data-aos="zoom-in" data-aos-delay="300">
                <div class="flex flex-col items-center text-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 relative z-10 mb-6 method-step-glow-amber">
                    <svg class="w-8 h-8 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>

                  <div class="card-methode-suivi relative overflow-hidden rounded-xl shadow-md group-hover:shadow-2xl transition-all duration-500 border-2 border-amber-300 dark:border-amber-600 group-hover:border-amber-500 dark:group-hover:border-amber-400 group-hover:-translate-y-2 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-amber-900/75 via-amber-800/60 to-transparent"></div>

                    <div class="relative z-10 p-6">
                      <h4 class="text-lg font-bold text-white mb-3 drop-shadow-lg">
                        {{ $t('pages.home.approach.method.steps.followup.title') }}
                      </h4>
                      <p class="text-sm text-white leading-relaxed drop-shadow-md">
                        {{ $t('pages.home.approach.method.steps.followup.description') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline mobile/tablet (vertical) -->
          <div class="lg:hidden space-y-8">
            <!-- Étape 1 : Analyse -->
            <div class="flex gap-4 group" data-aos="fade-up" data-aos-delay="0">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all method-step-glow-blue">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
                <div class="w-0.5 flex-1 bg-blue-200 dark:bg-blue-800 mt-4"></div>
              </div>
              <div class="flex-1 pb-8">
                <div class="card-methode-analyse-mobile relative overflow-hidden rounded-xl shadow-md border-2 border-blue-300 dark:border-blue-600">
                  <div class="absolute inset-0 bg-gradient-to-t from-blue-900/75 via-blue-800/60 to-transparent"></div>
                  <div class="relative z-10 p-5">
                    <h4 class="text-lg font-bold text-white mb-2 drop-shadow-lg">
                      {{ $t('pages.home.approach.method.steps.analyze.title') }}
                    </h4>
                    <p class="text-sm text-white leading-relaxed drop-shadow-md">
                      {{ $t('pages.home.approach.method.steps.analyze.description') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Étape 2 : Conseil -->
            <div class="flex gap-4 group" data-aos="fade-up" data-aos-delay="100">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all method-step-glow-emerald">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <div class="w-0.5 flex-1 bg-emerald-200 dark:bg-emerald-800 mt-4"></div>
              </div>
              <div class="flex-1 pb-8">
                <div class="card-methode-conseil-mobile relative overflow-hidden rounded-xl shadow-md border-2 border-emerald-300 dark:border-emerald-600">
                  <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/75 via-emerald-800/60 to-transparent"></div>
                  <div class="relative z-10 p-5">
                    <h4 class="text-lg font-bold text-white mb-2 drop-shadow-lg">
                      {{ $t('pages.home.approach.method.steps.advise.title') }}
                    </h4>
                    <p class="text-sm text-white leading-relaxed drop-shadow-md">
                      {{ $t('pages.home.approach.method.steps.advise.description') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Étape 3 : Mise en œuvre -->
            <div class="flex gap-4 group" data-aos="fade-up" data-aos-delay="200">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all method-step-glow-purple">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div class="w-0.5 flex-1 bg-purple-200 dark:bg-purple-800 mt-4"></div>
              </div>
              <div class="flex-1 pb-8">
                <div class="card-methode-oeuvre-mobile relative overflow-hidden rounded-xl shadow-md border-2 border-purple-300 dark:border-purple-600">
                  <div class="absolute inset-0 bg-gradient-to-t from-purple-900/75 via-purple-800/60 to-transparent"></div>
                  <div class="relative z-10 p-5">
                    <h4 class="text-lg font-bold text-white mb-2 drop-shadow-lg">
                      {{ $t('pages.home.approach.method.steps.implement.title') }}
                    </h4>
                    <p class="text-sm text-white leading-relaxed drop-shadow-md">
                      {{ $t('pages.home.approach.method.steps.implement.description') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Étape 4 : Suivi -->
            <div class="flex gap-4 group" data-aos="fade-up" data-aos-delay="300">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all method-step-glow-amber">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <div class="card-methode-suivi-mobile relative overflow-hidden rounded-xl shadow-md border-2 border-amber-300 dark:border-amber-600">
                  <div class="absolute inset-0 bg-gradient-to-t from-amber-900/75 via-amber-800/60 to-transparent"></div>
                  <div class="relative z-10 p-5">
                    <h4 class="text-lg font-bold text-white mb-2 drop-shadow-lg">
                      {{ $t('pages.home.approach.method.steps.followup.title') }}
                    </h4>
                    <p class="text-sm text-white leading-relaxed drop-shadow-md">
                      {{ $t('pages.home.approach.method.steps.followup.description') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Valeurs : Grille 2x2 avec Hover Effects -->
        <div>
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {{ $t('pages.home.approach.values.title') }}
          </h3>

          <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <!-- Valeur 1 : Intégrité -->
            <div class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-1 overflow-hidden">
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ $t('pages.home.approach.values.items.integrity.title') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.home.approach.values.items.integrity.description') }}
                </p>
              </div>
            </div>

            <!-- Valeur 2 : Écoute -->
            <div class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:-translate-y-1 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative">
                <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {{ $t('pages.home.approach.values.items.listening.title') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.home.approach.values.items.listening.description') }}
                </p>
              </div>
            </div>

            <!-- Valeur 3 : Pédagogie -->
            <div class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 hover:-translate-y-1 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {{ $t('pages.home.approach.values.items.pedagogy.title') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.home.approach.values.items.pedagogy.description') }}
                </p>
              </div>
            </div>

            <!-- Valeur 4 : Interaction -->
            <div class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-400 hover:-translate-y-1 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div class="relative">
                <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {{ $t('pages.home.approach.values.items.interaction.title') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.home.approach.values.items.interaction.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import img1 from '~/assets/images/Salle_Reunion/3.JPG'
import img2 from '~/assets/images/M_Beti/beti_4.JPG'
import img3 from '~/assets/images/Exterieur/IMG_6454.JPG'
import img4 from '~/assets/images/team/24.JPG'
import img5 from '~/assets/images/team/26.JPG'

// Images pour méthodologie
import methodeAnalyse from '~/assets/images/Salle_Reunion/4.JPG'
import methodeConseil from '~/assets/images/team/25.JPG'
import methodeMiseEnOeuvre from '~/assets/images/team/IMG_6393.JPG'
import methodeSuivi from '~/assets/images/team/27.JPG'

const images = {
  img1,
  img2,
  img3,
  img4,
  img5
}

// Refs pour parallaxe
const parallaxImg1 = ref<HTMLElement | null>(null)
const parallaxImg2 = ref<HTMLElement | null>(null)
const parallaxImg3 = ref<HTMLElement | null>(null)
const parallaxImg4 = ref<HTMLElement | null>(null)
const parallaxImg5 = ref<HTMLElement | null>(null)

// Parallaxe au scroll (desktop uniquement) - Version ultra subtile
const handleScroll = () => {
  if (window.innerWidth < 1024) return // Désactiver sur mobile/tablet

  const scrolled = window.scrollY
  const parallaxElements = [
    { el: parallaxImg1.value, speed: 0.15 },
    { el: parallaxImg2.value, speed: 0.25 },
    { el: parallaxImg3.value, speed: 0.2 },
    { el: parallaxImg4.value, speed: 0.3 },
    { el: parallaxImg5.value, speed: 0.1 }
  ]

  parallaxElements.forEach(({ el, speed }) => {
    if (el) {
      const yPos = -(scrolled * speed * 0.05) // Facteur très réduit pour effet ultra subtil
      el.style.transform = `translateY(${yPos}px)`
    }
  })
}

onMounted(() => {
  if (window.innerWidth >= 1024) {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ========================================
   ZONE IMAGES - Layout Flottant Asymétrique
   ======================================== */

.floating-image {
  will-change: transform;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.floating-image img {
  filter: brightness(0.98) contrast(1.05) saturate(1.1);
  transition: all 0.5s ease;
}

/* Positions et tailles asymétriques de chaque image */
.floating-image-1 {
  top: 5%;
  left: 5%;
  width: 240px;
  height: 300px;
  z-index: 5;
}

.floating-image-2 {
  top: 35%;
  right: 8%;
  width: 200px;
  height: 260px;
  z-index: 6;
}

.floating-image-3 {
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  height: 180px;
  z-index: 4;
}

.floating-image-4 {
  bottom: 20%;
  left: 10%;
  width: 180px;
  height: 240px;
  z-index: 7;
}

.floating-image-5 {
  bottom: 8%;
  right: 12%;
  width: 200px;
  height: 260px;
  z-index: 5;
}

/* ========================================
   ANIMATIONS FLOATING - Subtiles
   ======================================== */

@keyframes float1 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(0.5deg);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-6px) rotate(-0.3deg);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translateX(-50%) translateY(0) rotate(0deg);
  }
  50% {
    transform: translateX(-50%) translateY(-10px) rotate(0.6deg);
  }
}

@keyframes float4 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(-0.4deg);
  }
}

@keyframes float5 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-7px) rotate(0.2deg);
  }
}

/* Appliquer animations avec durées longues (effet plus calm) */
.floating-image-1 {
  animation: float1 10s ease-in-out infinite;
}

.floating-image-2 {
  animation: float2 12s ease-in-out infinite;
}

.floating-image-3 {
  animation: float3 9s ease-in-out infinite;
}

.floating-image-4 {
  animation: float4 13s ease-in-out infinite;
}

.floating-image-5 {
  animation: float5 11s ease-in-out infinite;
}

/* ========================================
   HOVER EFFECTS - Version Subtile
   ======================================== */

.floating-image:hover {
  transform: scale(1.05) translateY(-8px) !important;
  z-index: 30 !important;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
}

.floating-image:hover img {
  filter: brightness(1.03) contrast(1.02) saturate(1.1);
}

/* Glassmorphism overlay au hover */
.floating-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.15) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 0.75rem;
  pointer-events: none;
}

.floating-image:hover::after {
  opacity: 1;
}

/* ========================================
   RESPONSIVE ADJUSTMENTS
   ======================================== */

@media (min-width: 1440px) {
  .floating-image-1 {
    width: 280px;
    height: 350px;
  }

  .floating-image-2 {
    width: 240px;
    height: 300px;
  }

  .floating-image-3 {
    width: 260px;
    height: 220px;
  }

  .floating-image-4 {
    width: 220px;
    height: 280px;
  }

  .floating-image-5 {
    width: 240px;
    height: 300px;
  }
}

/* ========================================
   DARK MODE
   ======================================== */

:deep(.dark) .floating-image img {
  filter: brightness(0.92) contrast(1.08) saturate(1.15);
}

:deep(.dark) .floating-image:hover img {
  filter: brightness(0.98) contrast(1.05) saturate(1.1);
}

/* ========================================
   ACCESSIBILITY - Reduced Motion
   ======================================== */

@media (prefers-reduced-motion: reduce) {
  .floating-image {
    animation: none !important;
    will-change: auto;
  }

  .floating-image:hover {
    transform: scale(1.02) !important;
  }
}

/* ========================================
   V3 ULTRA PREMIUM EFFECTS
   ======================================== */

/* Border top gradient lumineux */
.section-approach-premium::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(59, 130, 246, 0.5) 20%,
    rgba(147, 51, 234, 0.6) 50%,
    rgba(59, 130, 246, 0.5) 80%,
    transparent 100%
  );
  z-index: 10;
  box-shadow: 0 2px 10px rgba(59, 130, 246, 0.2);
}

/* Radial mesh gradient visible */
.section-approach-premium::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 800px 600px at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 600px 800px at 80% 70%, rgba(147, 51, 234, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse 700px 500px at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
  opacity: 1;
}

/* Noise texture (Film grain effect) */
.section-approach-premium {
  position: relative;
}

.section-approach-premium > .container {
  position: relative;
  z-index: 2;
}

/* Subtle noise pattern */
@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}

.section-approach-premium {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px 200px;
}

/* Box shadow inset pour depth */
.section-approach-premium {
  box-shadow:
    inset 0 1px 0 0 rgba(255, 255, 255, 0.05),
    inset 0 -1px 2px 0 rgba(0, 0, 0, 0.02);
}

/* Dark mode adjustments */
:deep(.dark) .section-approach-premium::before {
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(96, 165, 250, 0.6) 20%,
    rgba(192, 132, 252, 0.7) 50%,
    rgba(96, 165, 250, 0.6) 80%,
    transparent 100%
  );
}

:deep(.dark) .section-approach-premium::after {
  background:
    radial-gradient(ellipse 800px 600px at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse 600px 800px at 80% 70%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 700px 500px at 50% 50%, rgba(99, 102, 241, 0.06) 0%, transparent 50%);
}

:deep(.dark) .section-approach-premium {
  box-shadow:
    inset 0 1px 0 0 rgba(255, 255, 255, 0.02),
    inset 0 -1px 2px 0 rgba(0, 0, 0, 0.1);
}

/* Subtle backdrop blur effect on images container (desktop only) */
@media (min-width: 1024px) {
  .floating-image::before {
    content: '';
    position: absolute;
    inset: -10px;
    background: inherit;
    filter: blur(20px);
    opacity: 0.3;
    z-index: -1;
    border-radius: 1rem;
  }
}

/* ========================================
   MÉTHODOLOGIE - Images Backgrounds
   ======================================== */

.card-methode-analyse {
  background-image: url('~/assets/images/Salle_Reunion/4.JPG');
  background-size: cover;
  background-position: center;
  min-height: 200px;
}

.card-methode-conseil {
  background-image: url('~/assets/images/team/25.JPG');
  background-size: cover;
  background-position: center;
  min-height: 200px;
}

.card-methode-oeuvre {
  background-image: url('~/assets/images/team/IMG_6393.JPG');
  background-size: cover;
  background-position: center 25%;
  min-height: 200px;
}

.card-methode-suivi {
  background-image: url('~/assets/images/team/27.JPG');
  background-size: cover;
  background-position: center;
  min-height: 200px;
}

/* ========================================
   MÉTHODOLOGIE - Glow Animations
   ======================================== */

@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px currentColor;
  }
  50% {
    box-shadow: 0 0 40px currentColor, 0 0 60px currentColor;
  }
}

.method-step-glow-blue {
  animation: glowPulse 3s ease-in-out infinite;
  color: rgba(59, 130, 246, 0.6);
}

.method-step-glow-emerald {
  animation: glowPulse 3s ease-in-out infinite 0.3s;
  color: rgba(16, 185, 129, 0.6);
}

.method-step-glow-purple {
  animation: glowPulse 3s ease-in-out infinite 0.6s;
  color: rgba(147, 51, 234, 0.6);
}

.method-step-glow-amber {
  animation: glowPulse 3s ease-in-out infinite 0.9s;
  color: rgba(245, 158, 11, 0.6);
}

/* ========================================
   MÉTHODOLOGIE MOBILE - Images Backgrounds
   ======================================== */

.card-methode-analyse-mobile {
  background-image: url('~/assets/images/Salle_Reunion/4.JPG');
  background-size: cover;
  background-position: center;
  min-height: 180px;
}

.card-methode-conseil-mobile {
  background-image: url('~/assets/images/team/25.JPG');
  background-size: cover;
  background-position: center;
  min-height: 180px;
}

.card-methode-oeuvre-mobile {
  background-image: url('~/assets/images/team/IMG_6393.JPG');
  background-size: cover;
  background-position: center 25%;
  min-height: 180px;
}

.card-methode-suivi-mobile {
  background-image: url('~/assets/images/team/27.JPG');
  background-size: cover;
  background-position: center;
  min-height: 180px;
}
</style>
