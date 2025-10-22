<template>
  <!-- 4️⃣ POURQUOI NOUS FAIRE CONFIANCE -->
  <section class="py-20 md:py-28 bg-white dark:bg-gray-950">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('pages.home.trust.title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ $t('pages.home.trust.subtitle') }}
          </p>
        </div>

        <!-- Stats simplifiés -->
        <div class="grid grid-cols-3 gap-8 mb-16">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
            <div class="text-gray-600 dark:text-gray-400">{{ $t('pages.home.trust.stats.years') }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">15</div>
            <div class="text-gray-600 dark:text-gray-400">{{ $t('pages.home.trust.stats.experts') }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
            <div class="text-gray-600 dark:text-gray-400">{{ $t('pages.home.trust.stats.partners') }}</div>
          </div>
        </div>

        <!-- Partenaires - 6 logos max -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold text-center text-gray-900 dark:text-white mb-8">
            {{ $t('pages.home.trust.partnersTitle') }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <!-- Logo 1 -->
            <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all">
              <img src="/images/partenaires/00629590a71a367c0b0407e7ee2ae478.png" alt="Partenaire 1" class="w-full h-16 object-contain" />
            </div>

            <!-- Logo 2 -->
            <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all">
              <img src="/images/partenaires/095289e5b516fa4b13ce1be71236bb7e.png" alt="Partenaire 2" class="w-full h-16 object-contain" />
            </div>

            <!-- Logo 3 -->
            <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all">
              <img src="/images/partenaires/18ef91041de0acc4ba4fd2cc532f9fc0.png" alt="Partenaire 3" class="w-full h-16 object-contain" />
            </div>

            <!-- Logo 4 -->
            <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all">
              <img src="/images/partenaires/1c127e5d2f219d4fdcbc053ed6e770b7.png" alt="Partenaire 4" class="w-full h-16 object-contain" />
            </div>

            <!-- Logo 5 -->
            <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all">
              <img src="/images/partenaires/1c2192c0a456134d04c759799931c10a.png" alt="Partenaire 5" class="w-full h-16 object-contain" />
            </div>

            <!-- Logo 6 -->
            <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all">
              <img src="/images/partenaires/24cfbb2cfad708920cfe0f7c2f583954.png" alt="Partenaire 6" class="w-full h-16 object-contain" />
            </div>
          </div>
        </div>

        <!-- Témoignage optionnel (simple) -->
        <div class="max-w-3xl mx-auto text-center">
          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
            <svg class="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p class="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
              {{ $t('pages.home.trust.testimonial.quote') }}
            </p>
            <div class="text-sm font-semibold text-gray-900 dark:text-white">
              {{ $t('pages.home.trust.testimonial.author') }}
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              {{ $t('pages.home.trust.testimonial.company') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
