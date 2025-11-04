<template>
  <!-- 1️⃣ QUI NOUS SOMMES - ENHANCED WITH MOTION DESIGN -->
  <section class="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
    <!-- Animated stars background with Parallax -->
    <div class="absolute inset-0">
      <div
        v-for="star in stars"
        :key="star.id"
        :ref="(el) => starRefs[star.id] = el as HTMLElement"
        class="absolute rounded-full bg-white animate-star parallax-star"
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

    <div class="container mx-auto px-4 md:px-6 lg:px-8 relative">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
          data-aos="fade-down"
        >
          <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium text-white">{{ $t('pages.home.hero.badge') }}</span>
        </div>

        <!-- Titre principal with Text Reveal -->
        <h1
          ref="titleRef"
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          {{ $t('pages.home.hero.title') }}
        </h1>

        <!-- Sous-titre with Text Reveal -->
        <p
          ref="subtitleRef"
          class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          {{ $t('pages.home.hero.subtitle') }}
        </p>

        <!-- CTA Buttons with Magnetic Effect -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <NuxtLink
            :to="localePath('/contact')"
            ref="ctaButton1"
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            {{ $t('pages.home.hero.cta.contact') }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>

          <NuxtLink
            :to="localePath('/services')"
            ref="ctaButton2"
            class="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all"
          >
            {{ $t('pages.home.hero.cta.services') }}
          </NuxtLink>
        </div>

        <!-- Stats rapides with Counter Animation -->
        <div class="grid grid-cols-3 gap-4 sm:gap-8 pt-12 max-w-2xl mx-auto">
          <div ref="stat1" class="text-center" data-aos="fade-up" data-aos-delay="400">
            <div class="text-3xl md:text-4xl font-bold text-white">{{ Math.floor(counter1.value) }}+</div>
            <div class="text-sm text-gray-400 mt-1">{{ $t('pages.home.hero.stats.years') }}</div>
          </div>
          <div ref="stat2" class="text-center" data-aos="fade-up" data-aos-delay="500">
            <div class="text-3xl md:text-4xl font-bold text-white">{{ Math.floor(counter2.value) }}+</div>
            <div class="text-sm text-gray-400 mt-1">{{ $t('pages.home.hero.stats.experts') }}</div>
          </div>
          <div ref="stat3" class="text-center" data-aos="fade-up" data-aos-delay="600">
            <div class="text-3xl md:text-4xl font-bold text-white">{{ Math.floor(counter3.value) }}+</div>
            <div class="text-sm text-gray-400 mt-1">{{ $t('pages.home.hero.stats.partners') }}</div>
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
import { useTextReveal } from '~/composables/useTextReveal'
import { useMagneticButton } from '~/composables/useMagneticButton'
import { useScrollCounter } from '~/composables/useCounterAnimation'
import { useMouseParallax } from '~/composables/useParallax'

const localePath = useLocalePath()

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
const starRefs = ref<Record<number, HTMLElement>>({})

// Text reveal refs
const titleRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)

// CTA button refs
const ctaButton1 = ref<HTMLElement | null>(null)
const ctaButton2 = ref<HTMLElement | null>(null)

// Stats counter refs
const stat1 = ref<HTMLElement | null>(null)
const stat2 = ref<HTMLElement | null>(null)
const stat3 = ref<HTMLElement | null>(null)

// Counters for stats
const counter1 = useScrollCounter(stat1, 10, { duration: 2, delay: 0.4 })
const counter2 = useScrollCounter(stat2, 15, { duration: 2.2, delay: 0.5 })
const counter3 = useScrollCounter(stat3, 25, { duration: 2.5, delay: 0.6 })

// Generate 50 random stars
onMounted(() => {
  for (let i = 0; i < 50; i++) {
    stars.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      opacity: Math.random() * 0.5 + 0.3
    })
  }

  // Apply text reveal animations
  if (titleRef.value) {
    useTextReveal(titleRef, {
      type: 'words',
      stagger: 0.08,
      from: 'bottom',
      blur: true,
      delay: 0.1
    })
  }

  if (subtitleRef.value) {
    useTextReveal(subtitleRef, {
      type: 'words',
      stagger: 0.04,
      from: 'bottom',
      blur: true,
      delay: 0.3
    })
  }

  // Apply magnetic effect to buttons
  if (ctaButton1.value) {
    useMagneticButton(ctaButton1, {
      strength: 0.3,
      scaleFactor: 1.05
    })
  }

  if (ctaButton2.value) {
    useMagneticButton(ctaButton2, {
      strength: 0.25,
      scaleFactor: 1.03
    })
  }

  // Apply parallax to random stars
  const parallaxStars = [5, 10, 15, 20, 25, 30, 35, 40, 45]
  parallaxStars.forEach((starId) => {
    const starEl = starRefs.value[starId]
    if (starEl) {
      useMouseParallax(ref(starEl), {
        strength: (starId % 3 + 1) * 5,
        smooth: true,
        smoothness: 0.15
      })
    }
  })
})
</script>

<style scoped>
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

.parallax-star {
  will-change: transform;
}
</style>
