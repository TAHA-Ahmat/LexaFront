<template>
  <section class="py-20 md:py-28 bg-white dark:bg-gray-950 overflow-hidden">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Vision -->
      <div class="max-w-5xl mx-auto mb-20 md:mb-24 text-center" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-6">
          Vision
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
          {{ $t('pages.home.values.vision.title') }}
        </h2>
        <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {{ $t('pages.home.values.vision.content') }}
        </p>
      </div>

      <!-- Mission -->
      <div class="max-w-5xl mx-auto mb-24 md:mb-32 text-center" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold mb-6">
          Mission
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
          {{ $t('pages.home.values.mission.title') }}
        </h2>
        <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {{ $t('pages.home.values.mission.content') }}
        </p>
      </div>

      <!-- Excellence et Rigueur - Layout Flottant Premium -->
      <div class="mb-20">
        <!-- Desktop: Layout Flottant Asymétrique -->
        <div class="hidden lg:block">
          <div class="relative min-h-[950px] max-w-7xl mx-auto">
            <!-- Image 1: Salle Réunion - Haut Gauche -->
            <div
              ref="parallaxImg1"
              class="floating-image floating-image-1 absolute"
              data-aos="fade-up-right"
              data-aos-delay="0"
              data-aos-duration="800"
            >
              <img
                :src="images.img1"
                alt="Équipe Lexafric en réunion collaborative"
                class="w-full h-full object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>

            <!-- Image 2: Bureau Beti - Haut Droite -->
            <div
              ref="parallaxImg2"
              class="floating-image floating-image-2 absolute"
              data-aos="fade-up-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <img
                :src="images.img2"
                alt="Bureau professionnel Lexafric moderne"
                class="w-full h-full object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>

            <!-- Image 3: Banderoles - Milieu Gauche -->
            <div
              ref="parallaxImg3"
              class="floating-image floating-image-3 absolute"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <img
                :src="images.img3"
                alt="Banderoles Lexafric - Excellence et professionnalisme"
                class="w-full h-full object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>

            <!-- Image 4: Portrait Team - Milieu Droite -->
            <div
              ref="parallaxImg4"
              class="floating-image floating-image-4 absolute"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <img
                :src="images.img4"
                alt="Membre de l'équipe Lexafric - Professionnalisme"
                class="w-full h-full object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>

            <!-- Image 5: Portrait Team - Bas -->
            <div
              ref="parallaxImg5"
              class="floating-image floating-image-5 absolute"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <img
                :src="images.img5"
                alt="Membre de l'équipe Lexafric - Expertise"
                class="w-full h-full object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>

            <!-- Texte Central -->
            <div
              class="central-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center px-4"
              data-aos="fade-zoom-in"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div class="bg-white/98 dark:bg-gray-900/98 backdrop-blur-lg rounded-3xl px-8 md:px-12 lg:px-16 py-8 md:py-12 shadow-2xl border-2 border-blue-500/30 dark:border-blue-400/30">
                <span class="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
                  Excellence & Rigueur
                </span>
                <h2 class="text-3xl md:text-4xl xl:text-5xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white leading-tight">
                  Excellence et Rigueur
                </h2>
                <p class="text-xl md:text-2xl xl:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Valeurs Fondamentales
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile & Tablet: Stack Vertical -->
        <div class="lg:hidden">
          <div class="text-center mb-12 md:mb-16" data-aos="fade-up">
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl px-6 py-10 md:px-10 md:py-12 shadow-lg border border-blue-200/50 dark:border-blue-700/50">
              <span class="inline-block px-4 py-2 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm font-semibold mb-4 shadow-sm">
                Excellence & Rigueur
              </span>
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">
                Excellence et Rigueur
              </h2>
              <p class="text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Valeurs Fondamentales
              </p>
            </div>
          </div>

          <div class="space-y-6 md:space-y-8">
            <!-- Image principale full width -->
            <div data-aos="fade-up" data-aos-delay="0" class="rounded-xl overflow-hidden shadow-xl">
              <img
                :src="images.img1"
                alt="Équipe Lexafric en réunion collaborative"
                class="w-full h-auto aspect-video object-cover"
                loading="lazy"
              />
            </div>

            <!-- Grid 2 colonnes - Images moyennes -->
            <div class="grid grid-cols-2 gap-4 md:gap-6">
              <div data-aos="fade-up" data-aos-delay="100" class="rounded-xl overflow-hidden shadow-lg">
                <img
                  :src="images.img2"
                  alt="Bureau professionnel Lexafric"
                  class="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="150" class="rounded-xl overflow-hidden shadow-lg">
                <img
                  :src="images.img3"
                  alt="Banderoles Lexafric"
                  class="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Grid 2 colonnes - Portraits -->
            <div class="grid grid-cols-2 gap-4 md:gap-6">
              <div data-aos="fade-up" data-aos-delay="200" class="rounded-xl overflow-hidden shadow-lg">
                <img
                  :src="images.img4"
                  alt="Équipe Lexafric - Professionnel"
                  class="w-full h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="250" class="rounded-xl overflow-hidden shadow-lg">
                <img
                  :src="images.img5"
                  alt="Équipe Lexafric - Expert"
                  class="w-full h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Valeurs - Grid classique conservée -->
      <div class="mb-12 max-w-7xl mx-auto">
        <div class="text-center mb-16 md:mb-20" data-aos="fade-up">
          <span class="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-6">
            Nos Valeurs
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {{ $t('pages.home.values.title') }}
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <!-- Intégrité -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="0">
            <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ $t('pages.home.values.integrity.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('pages.home.values.integrity.content') }}
            </p>
          </div>

          <!-- Écoute -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="100">
            <div class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ $t('pages.home.values.listening.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('pages.home.values.listening.content') }}
            </p>
          </div>

          <!-- Pédagogie -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="200">
            <div class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ $t('pages.home.values.pedagogy.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('pages.home.values.pedagogy.content') }}
            </p>
          </div>

          <!-- Interaction -->
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="300">
            <div class="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ $t('pages.home.values.interaction.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('pages.home.values.interaction.content') }}
            </p>
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
/* Layout Flottant Asymétrique Desktop */
.floating-image {
  will-change: transform;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.floating-image img {
  filter: brightness(0.98) contrast(1.05) saturate(1.1);
}

/* Position et taille de chaque image */
.floating-image-1 {
  top: 8%;
  left: 4%;
  width: 280px;
  height: 350px;
  z-index: 5;
}

.floating-image-2 {
  top: 5%;
  right: 6%;
  width: 240px;
  height: 320px;
  z-index: 6;
}

.floating-image-3 {
  top: 42%;
  left: 2%;
  width: 260px;
  height: 200px;
  z-index: 4;
}

.floating-image-4 {
  top: 38%;
  right: 3%;
  width: 220px;
  height: 300px;
  z-index: 7;
}

.floating-image-5 {
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: 300px;
  z-index: 5;
}

/* Animation Floating Continue - Version Subtile */
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
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(0.6deg);
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
    transform: translateX(-50%) translateY(0) rotate(0deg);
  }
  50% {
    transform: translateX(-50%) translateY(-7px) rotate(0.2deg);
  }
}

/* Appliquer animations avec durées plus longues (plus subtiles) */
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

/* Hover Effects Premium - Version Subtile */
.floating-image:hover {
  transform: scale(1.05) translateY(-8px) !important;
  z-index: 30 !important;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
}

.floating-image img {
  transition: all 0.5s ease;
}

.floating-image:hover img {
  filter: brightness(1.03) contrast(1.02);
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

/* Texte central avec glassmorphism */
.central-text {
  pointer-events: none;
}

/* Responsive adjustments */
@media (min-width: 1440px) {
  .floating-image-1 {
    width: 320px;
    height: 400px;
  }

  .floating-image-2 {
    width: 280px;
    height: 360px;
  }

  .floating-image-3 {
    width: 300px;
    height: 240px;
  }

  .floating-image-4 {
    width: 260px;
    height: 340px;
  }

  .floating-image-5 {
    width: 280px;
    height: 340px;
  }
}

/* Désactiver animations si prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .floating-image {
    animation: none !important;
    will-change: auto;
  }

  .floating-image:hover {
    transform: scale(1.02) !important;
  }
}

/* Dark mode adjustments */
:deep(.dark) .floating-image img {
  filter: brightness(0.92) contrast(1.08) saturate(1.15);
}

:deep(.dark) .floating-image:hover img {
  filter: brightness(0.98) contrast(1.05) saturate(1.1);
}

/* Amélioration du contraste du texte central */
.central-text h2 {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

:deep(.dark) .central-text h2 {
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
</style>
