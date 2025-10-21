<template>
  <section class="relative py-32 bg-black text-white overflow-hidden">
    <!-- Background avec effet parallaxe -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-purple-950"></div>
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px]"></div>
      </div>
    </div>

    <div class="relative container mx-auto px-4">
      <!-- En-tête -->
      <div class="max-w-3xl mx-auto text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          {{ $t('pages.home.values.title') }}
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
          {{ $t('pages.home.values.subtitle') }}
        </p>
      </div>

      <!-- Vision & Mission en grand -->
      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
        <!-- Vision -->
        <div class="group relative p-12 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500">
          <div class="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 class="text-3xl font-bold mb-4">{{ $t('pages.home.values.vision.title') }}</h3>
          <p class="text-gray-300 text-lg leading-relaxed">
            {{ $t('pages.home.values.vision.description') }}
          </p>
        </div>

        <!-- Mission -->
        <div class="group relative p-12 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500">
          <div class="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-3xl font-bold mb-4">{{ $t('pages.home.values.mission.title') }}</h3>
          <p class="text-gray-300 text-lg leading-relaxed">
            {{ $t('pages.home.values.mission.description') }}
          </p>
        </div>
      </div>

      <!-- Valeurs en grille -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div
          v-for="(value, index) in values"
          :key="index"
          class="group relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-500"
        >
          <!-- Numéro stylisé -->
          <div class="absolute top-4 right-4 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Icône -->
          <div class="w-12 h-12 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" :d="value.icon" />
            </svg>
          </div>

          <!-- Contenu -->
          <h3 class="text-xl font-bold mb-3">{{ $t(value.title) }}</h3>
          <p class="text-gray-300 text-sm leading-relaxed">
            {{ $t(value.description) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const values = [
  {
    title: 'pages.home.values.value1.title',
    description: 'pages.home.values.value1.description',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'pages.home.values.value2.title',
    description: 'pages.home.values.value2.description',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'pages.home.values.value3.title',
    description: 'pages.home.values.value3.description',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    title: 'pages.home.values.value4.title',
    description: 'pages.home.values.value4.description',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]
</script>
