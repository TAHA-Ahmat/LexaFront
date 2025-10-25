<template>
  <!-- 4️⃣ POURQUOI NOUS FAIRE CONFIANCE -->
  <section class="py-20 md:py-28 bg-white dark:bg-gray-950 overflow-hidden">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('pages.home.trust.title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ $t('pages.home.trust.subtitle') }}
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-20 max-w-3xl mx-auto">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div class="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              {{ $t('pages.home.trust.stats.years') }}
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div class="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              {{ $t('pages.home.trust.stats.experts') }}
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">
              25+
            </div>
            <div class="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              {{ $t('pages.home.trust.stats.partners') }}
            </div>
          </div>
        </div>

        <!-- Carousel Title -->
        <h3 class="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-12">
          {{ $t('pages.home.trust.partnersTitle') }}
        </h3>

        <!-- Infinite Carousel Container -->
        <div class="relative mb-20">
          <!-- Rangée 1 : Défilement vers la droite → -->
          <div class="carousel-row mb-8">
            <div class="carousel-track">
              <!-- Premier groupe de logos -->
              <div v-for="logo in partnersRow1" :key="`row1-1-${logo}`" class="carousel-item">
                <img
                  :src="`/images/partenaires/${logo}`"
                  :alt="`Partner logo`"
                  class="h-10 sm:h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              <!-- Duplication pour effet infini -->
              <div v-for="logo in partnersRow1" :key="`row1-2-${logo}`" class="carousel-item">
                <img
                  :src="`/images/partenaires/${logo}`"
                  :alt="`Partner logo`"
                  class="h-10 sm:h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <!-- Rangée 2 : Défilement vers la gauche ← -->
          <div class="carousel-row-reverse">
            <div class="carousel-track-reverse">
              <!-- Premier groupe de logos -->
              <div v-for="logo in partnersRow2" :key="`row2-1-${logo}`" class="carousel-item">
                <img
                  :src="`/images/partenaires/${logo}`"
                  :alt="`Partner logo`"
                  class="h-10 sm:h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              <!-- Duplication pour effet infini -->
              <div v-for="logo in partnersRow2" :key="`row2-2-${logo}`" class="carousel-item">
                <img
                  :src="`/images/partenaires/${logo}`"
                  :alt="`Partner logo`"
                  class="h-10 sm:h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Témoignage -->
        <div class="max-w-3xl mx-auto">
          <div class="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <svg class="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 text-center leading-relaxed">
              {{ $t('pages.home.trust.testimonial.quote') }}
            </p>
            <div class="text-center">
              <div class="font-semibold text-gray-900 dark:text-white text-lg">
                {{ $t('pages.home.trust.testimonial.author') }}
              </div>
              <div class="text-gray-500 dark:text-gray-400">
                {{ $t('pages.home.trust.testimonial.company') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Divisez les 31 logos en 2 rangées
const partnersRow1 = [
  '00629590a71a367c0b0407e7ee2ae478.png',
  '095289e5b516fa4b13ce1be71236bb7e.png',
  '18ef91041de0acc4ba4fd2cc532f9fc0.png',
  '1c127e5d2f219d4fdcbc053ed6e770b7.png',
  '1c2192c0a456134d04c759799931c10a.png',
  '24cfbb2cfad708920cfe0f7c2f583954.png',
  '2a4d234767140d99fc9607ba0c37456a.png',
  '2fa779a862bedc7c95a26a7a9d85eceb.png',
  '44857b032670b41d41dfb4fba2775366.png',
  '4ab85fa82781f81de4dad6bb33b6df1b.png',
  '535d987e8b8ed847e7fd7fb1c751afa8.png',
  '68d30a5b09cb1524445065ffb9d8793a.png',
  '698b4ebce88737ffb30fa4097ac45b5c.png',
  '7624b599c3e2ada6d28d054b9b271631.png',
  '7c39816908dc571f8b170f07f33aaa86.png',
  '7ca206c417a1de44fd8ad3dd43435a6b.png'
]

const partnersRow2 = [
  '80203475c7e475c9113671bb354bbd36.png',
  '84fc093d8fdc61dbe9e73ec793d83117.png',
  '87c308d1d1c235231db5c447d88a98f8.png',
  '8bfdcf6432b577d156834032d2036107.png',
  '9466f45c081f23bd4d6fec88553218f8.png',
  'a0cb1c8f164ae2100f8eaa27579b1bc2.png',
  'a2b645d611df02c6b43c5ec0c8ef0500.png',
  'a42d905987885e17e770f8e29abfdebe.png',
  'a9c264ef1d89b48d807abbfa51555155.png',
  'b2096986bd7976bf93166c529946563a.png',
  'b495beaa4fde1cae60e037ba43eed930.png',
  'c3a20bddfa2cb516636f16a51dde330e.png',
  'c99d2a0afec9bd3f6751e886729b07b0.png',
  'df1410f20762ebdbd74da8ba15159ea4.png',
  'ef3ea2ba04457f87648d20e8d004754a.png'
]
</script>

<style scoped>
/* Carousel Row - Scroll vers la droite */
.carousel-row {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;

  gap: 2rem;
  animation: scroll-right 40s linear infinite;
}

@media (min-width: 640px) {
  .carousel-track {
    gap: 3rem;
  }
}

@media (min-width: 768px) {
  .carousel-track {
    gap: 4rem;
  }
}

.carousel-row:hover .carousel-track {
  animation-play-state: paused;
}

/* Carousel Row Reverse - Scroll vers la gauche */
.carousel-row-reverse {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-track-reverse {
  display: flex;
  gap: 2rem;
  animation: scroll-left 40s linear infinite;
}

@media (min-width: 640px) {
  .carousel-track-reverse {
    gap: 3rem;
  }
}

@media (min-width: 768px) {
  .carousel-track-reverse {
    gap: 4rem;
  }
}

.carousel-row-reverse:hover .carousel-track-reverse {
  animation-play-state: paused;
}

.carousel-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
}

@media (min-width: 640px) {
  .carousel-item {
    min-width: 140px;
  }
}

@media (min-width: 768px) {
  .carousel-item {
    min-width: 180px;
  }
  min-width: 180px;
}

/* Animations */
@keyframes scroll-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-item {
    min-width: 120px;
  }

  .carousel-track,
  .carousel-track-reverse {
    gap: 2rem;
  }
}
</style>
