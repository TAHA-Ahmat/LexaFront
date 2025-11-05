<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- En-tête de section -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('pages.home.features.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {{ $t('pages.home.features.subtitle') }}
        </p>
      </div>

      <!-- Grille de services premium avec images -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Card avec image ou design spécial -->
        <div
          v-for="(feature, index) in features"
          :key="index"
          :class="[
            'feature-card group relative rounded-2xl overflow-hidden transition-all duration-500',
            'hover:shadow-2xl',
            feature.type === 'image' ? 'feature-card-image' : '',
            feature.type === 'central' ? 'feature-card-central' : '',
            feature.type === 'standard' ? 'feature-card-standard' : ''
          ]"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="index * 100"
          @click="handleCardClick"
        >
          <!-- Image de fond (Cards 1 & 3) -->
          <div
            v-if="feature.type === 'image'"
            class="absolute inset-0 feature-bg-image"
            :style="{ backgroundImage: `url(${feature.backgroundImage})` }"
          ></div>

          <!-- Overlay gradient pour cards avec image -->
          <div v-if="feature.type === 'image'" class="absolute inset-0 feature-overlay"></div>

          <!-- Gradient animé + particules (Card 2 CENTRALE) -->
          <div v-if="feature.type === 'central'" class="absolute inset-0 feature-central-bg">
            <div class="central-gradient"></div>
            <div class="central-particles">
              <span v-for="n in particleCount" :key="n" class="particle" :style="getParticleStyle(n)"></span>
            </div>
          </div>

          <!-- Glassmorphism card content -->
          <div class="relative z-10 h-full p-6 md:p-8 flex flex-col backdrop-blur-sm bg-white/10 dark:bg-black/20">
            <!-- Icône -->
            <div class="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-xl mb-5 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border border-white/30">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
              </svg>
            </div>

            <!-- Contenu -->
            <h3 class="text-xl md:text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
              {{ $t(feature.title) }}
            </h3>
            <p class="text-sm md:text-base text-white/90 mb-5 leading-relaxed flex-grow">
              {{ $t(feature.description) }}
            </p>

            <!-- Liste des sous-services -->
            <ul class="space-y-2 mb-6">
              <li v-for="(item, i) in feature.items.slice(0, 3)" :key="i" class="flex items-start gap-2 text-xs md:text-sm text-white/80">
                <svg class="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t(item) }}
              </li>
            </ul>

            <!-- Lien "Savoir plus" -->
            <NuxtLink
              :to="localePath(feature.link)"
              class="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all duration-300 mt-auto group/link"
            >
              <span class="border-b-2 border-white/50 group-hover/link:border-white">{{ $t('common.readMore') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>

          <!-- Ripple effect container -->
          <span class="ripple"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// Nombre de particules selon l'écran
const particleCount = ref(15)

// Import dynamique des images
const getImageUrl = (imageName: string) => {
  try {
    return new URL(`../../../assets/images/Exterieur/${imageName}`, import.meta.url).href
  } catch (e) {
    console.error('Erreur chargement image:', e)
    return ''
  }
}

// Définition des features avec types et images
const features = [
  {
    type: 'image',
    backgroundImage: getImageUrl('juridique.jpg'),
    title: 'pages.services.legal.title',
    description: 'pages.services.legal.description',
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
    items: [
      'pages.services.legal.features.0',
      'pages.services.legal.features.1',
      'pages.services.legal.features.2',
      'pages.services.legal.features.3'
    ],
    link: '/services'
  },
  {
    type: 'central',
    title: 'pages.services.fiscal.title',
    description: 'pages.services.fiscal.description',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    items: [
      'pages.services.fiscal.features.0',
      'pages.services.fiscal.features.1',
      'pages.services.fiscal.features.2',
      'pages.services.fiscal.features.3'
    ],
    link: '/services'
  },
  {
    type: 'image',
    backgroundImage: getImageUrl('sociale.jpg'),
    title: 'pages.services.social.title',
    description: 'pages.services.social.description',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    items: [
      'pages.services.social.features.0',
      'pages.services.social.features.1',
      'pages.services.social.features.2',
      'pages.services.social.features.3'
    ],
    link: '/services'
  },
  {
    type: 'standard',
    title: 'pages.services.recruitment.title',
    description: 'pages.services.recruitment.description',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7',
    items: [
      'pages.services.recruitment.features.0',
      'pages.services.recruitment.features.1',
      'pages.services.recruitment.features.2',
      'pages.services.recruitment.features.3'
    ],
    link: '/services'
  },
  {
    type: 'standard',
    title: 'pages.services.training.title',
    description: 'pages.services.training.description',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    items: [
      'pages.services.training.features.0',
      'pages.services.training.features.1',
      'pages.services.training.features.2',
      'pages.services.training.features.3'
    ],
    link: '/services'
  }
]

// Générer style de particule aléatoire
const getParticleStyle = (n: number) => {
  const x = Math.random() * 100
  const y = Math.random() * 100
  const size = Math.random() * 4 + 2
  const duration = Math.random() * 10 + 15
  const delay = Math.random() * 5

  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  }
}

// Ripple effect au clic
const handleCardClick = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  const ripple = card.querySelector('.ripple') as HTMLElement

  if (!ripple) return

  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`
  ripple.classList.add('active')

  setTimeout(() => {
    ripple.classList.remove('active')
  }, 600)
}

// Ajuster nombre de particules selon l'écran
onMounted(() => {
  const updateParticleCount = () => {
    if (window.innerWidth < 768) {
      particleCount.value = 8
    } else if (window.innerWidth < 1024) {
      particleCount.value = 10
    } else {
      particleCount.value = 15
    }
  }

  updateParticleCount()
  window.addEventListener('resize', updateParticleCount)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateParticleCount)
  })
})
</script>

<style scoped>
/* ==================== BASE CARD STYLES ==================== */
.feature-card {
  min-height: 420px;
  cursor: pointer;
  position: relative;
  will-change: transform;
}

@media (max-width: 768px) {
  .feature-card {
    min-height: 380px;
  }
}

/* ==================== CARDS AVEC IMAGES (1 & 3) ==================== */
.feature-card-image {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.feature-card-image:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(59, 130, 246, 0.5);
}

/* Image de fond avec Ken Burns */
.feature-bg-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: kenBurnsImage 20s ease-in-out infinite alternate;
  will-change: transform;
  transform: scale(0.85);
}

.feature-card-image:hover .feature-bg-image {
  animation-play-state: running;
  transform: scale(0.95);
  transition: transform 1s ease-out;
}

@keyframes kenBurnsImage {
  0% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(0.95);
  }
}

/* Overlay gradient */
.feature-overlay {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.6) 100%);
  transition: background 0.5s ease;
}

.feature-card-image:hover .feature-overlay {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.4) 100%);
}

@media (max-width: 768px) {
  .feature-bg-image {
    transform: scale(1);
    animation: kenBurnsMobile 25s ease-in-out infinite alternate;
  }

  @keyframes kenBurnsMobile {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  .feature-overlay {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
  }
}

/* ==================== CARD CENTRALE (2) ==================== */
.feature-card-central {
  box-shadow: 0 15px 50px rgba(102, 126, 234, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.feature-card-central:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 70px rgba(102, 126, 234, 0.5), 0 0 0 3px rgba(118, 75, 162, 0.4);
}

/* Gradient animé */
.central-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-size: 200% 200%;
  animation: gradientShift 20s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.feature-card-central:hover .central-gradient {
  animation-duration: 10s;
  filter: brightness(1.1);
}

/* Particules flottantes */
.central-particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: floatParticle linear infinite;
}

@keyframes floatParticle {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(30px);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .central-gradient {
    animation-duration: 30s;
  }
}

/* ==================== CARDS STANDARD (4 & 5) ==================== */
.feature-card-standard {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  box-shadow: 0 10px 40px rgba(79, 70, 229, 0.2);
}

.feature-card-standard:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 50px rgba(79, 70, 229, 0.35);
}

/* ==================== RIPPLE EFFECT ==================== */
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: scale(0);
  pointer-events: none;
  animation: rippleAnimation 0.6s ease-out;
}

.ripple.active {
  animation: rippleAnimation 0.6s ease-out;
}

@keyframes rippleAnimation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1024px) {
  .feature-card {
    min-height: 400px;
  }
}

@media (max-width: 768px) {
  .feature-card {
    min-height: 380px;
  }

  .feature-card-image:hover,
  .feature-card-central:hover,
  .feature-card-standard:hover {
    transform: none;
  }
}

/* Touch devices - Disable hover, enable tap */
@media (hover: none) and (pointer: coarse) {
  .feature-card:active {
    transform: scale(0.98);
  }

  .feature-card-image:active .feature-bg-image {
    transform: scale(0.95);
  }

  .feature-card-central:active {
    transform: scale(0.98);
  }
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .feature-card,
  .feature-bg-image,
  .central-gradient,
  .particle {
    animation: none !important;
    transition: none !important;
  }

  .feature-card:hover {
    transform: none;
  }
}
</style>
