<template>
  <!-- 1️⃣ QUI NOUS SOMMES -->
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Image de fond avec animation Ken Burns -->
    <div class="absolute inset-0 hero-background" :style="{ backgroundImage: backgroundImageUrl }">
      <div class="hero-image-zoom" :style="{ backgroundImage: backgroundImageUrl }"></div>
    </div>

    <!-- Overlay gradient pour lisibilité -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

    <!-- Animated stars background -->
    <div class="absolute inset-0 stars-container">
      <div
        v-for="star in stars"
        :key="star.id"
        class="absolute rounded-full bg-white animate-star"
        :style="{
          left: star.x + '%',
          top: star.y + '%',
          width: star.size + 'px',
          height: star.size + 'px',
          animationDelay: star.delay + 's',
          animationDuration: star.duration + 's',
          opacity: star.opacity
        }"
      ></div>
    </div>

    <!-- Subtle grid pattern -->
    <div class="absolute inset-0 opacity-[0.03]">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <div class="container mx-auto px-4 md:px-6 lg:px-8 relative h-full flex items-center">
      <div class="w-full lg:w-1/2 space-y-6 lg:space-y-8">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
          data-aos="fade-right"
        >
          <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-xs font-medium text-white">{{ $t('pages.home.hero.badge') }}</span>
        </div>

        <!-- Titre principal -->
        <h1
          class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {{ $t('pages.home.hero.title') }}
        </h1>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-start gap-3 pt-2"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            {{ $t('pages.home.hero.cta.contact') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>

          <NuxtLink
            :to="localePath('/services')"
            class="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all"
          >
            {{ $t('pages.home.hero.cta.services') }}
          </NuxtLink>
        </div>

        <!-- Stats rapides -->
        <div class="grid grid-cols-3 gap-3 sm:gap-6 pt-8 max-w-md">
          <div data-aos="fade-right" data-aos-delay="400">
            <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">10+</div>
            <div class="text-xs md:text-sm text-gray-400 mt-0.5">{{ $t('pages.home.hero.stats.years') }}</div>
          </div>
          <div data-aos="fade-right" data-aos-delay="500">
            <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">15+</div>
            <div class="text-xs md:text-sm text-gray-400 mt-0.5">{{ $t('pages.home.hero.stats.experts') }}</div>
          </div>
          <div data-aos="fade-right" data-aos-delay="600">
            <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">25+</div>
            <div class="text-xs md:text-sm text-gray-400 mt-0.5">{{ $t('pages.home.hero.stats.partners') }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroImage from '~/assets/images/Exterieur/hero-background.png'

const localePath = useLocalePath()

// URL de l'image de fond
const backgroundImageUrl = computed(() => `url(${heroImage})`)

// Generate random stars for the background
interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  opacity: number
}

const stars = ref<Star[]>([])

// Generate 50 random stars
onMounted(() => {
  for (let i = 0; i < 50; i++) {
    stars.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1, // 1-4px
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10, // 10-20s
      opacity: Math.random() * 0.5 + 0.3 // 0.3-0.8
    })
  }
})
</script>

<style scoped>
/* ==================== IMAGE DE FOND AVEC KEN BURNS ==================== */
.hero-background {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-image-zoom {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: kenBurns 20s ease-in-out infinite alternate;
  will-change: transform;
}

/* Animation Ken Burns - Zoom cinématographique lent */
@keyframes kenBurns {
  0% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(0.95);
  }
}

/* Responsive - Ajustement mobile */
@media (max-width: 768px) {
  .hero-background,
  .hero-image-zoom {
    background-position: center center;
  }

  @keyframes kenBurns {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
}

/* ==================== ÉTOILES AVEC OPACITÉ RÉDUITE ==================== */
.stars-container {
  opacity: 0.3;
  pointer-events: none;
}

@keyframes star {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: var(--star-opacity);
  }
  25% {
    transform: translateY(-20px) scale(1.2);
    opacity: 0.8;
  }
  50% {
    transform: translateY(0) scale(0.8);
    opacity: 0.4;
  }
  75% {
    transform: translateY(20px) scale(1.1);
    opacity: 0.6;
  }
}

.animate-star {
  animation: star linear infinite;
  --star-opacity: 0.5;
}
</style>
