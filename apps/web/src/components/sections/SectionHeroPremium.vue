<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
    <!-- Background avec effet de profondeur -->
    <div class="absolute inset-0">
      <!-- Gradient animé -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-purple-950 opacity-80"></div>

      <!-- Grille animée style Apple -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <!-- Particules flottantes -->
      <div class="absolute inset-0">
        <div v-for="i in 20" :key="i"
             class="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
             :style="getParticleStyle(i)"></div>
      </div>

      <!-- Effet de lumière -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 container mx-auto px-4 py-32">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Badge premium -->
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-blue-400 text-sm font-medium animate-fade-in-down">
          <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          {{ $t('pages.home.hero.badge') || 'Excellence Juridique' }}
        </div>

        <!-- Titre principal avec effet de gradient -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in-up">
          <span class="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight block">
            {{ $t('pages.home.hero.slide1.title') }}
          </span>
        </h1>

        <!-- Sous-titre élégant -->
        <p class="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-200">
          {{ $t('pages.home.presentation.description') }}
        </p>

        <!-- CTAs premium -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-400">
          <NuxtLink
            :to="localePath('/contact')"
            class="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
          >
            <span class="relative z-10 flex items-center gap-2">
              {{ $t('pages.home.cta.button1') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </NuxtLink>

          <NuxtLink
            :to="localePath('/a-propos')"
            class="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <span class="flex items-center gap-2">
              {{ $t('pages.home.cta.button2') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </NuxtLink>
        </div>

        <!-- Stats minimalistes -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-16 border-t border-white/10 animate-fade-in-up animation-delay-600">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
              {{ $t('pages.home.stats.experience') }}
            </div>
            <div class="text-sm text-gray-400 uppercase tracking-wider">
              {{ $t('pages.home.stats.experienceLabel') }}
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
              {{ $t('pages.home.stats.associatesExperience') }}
            </div>
            <div class="text-sm text-gray-400 uppercase tracking-wider">
              {{ $t('pages.home.stats.associatesExperienceLabel') }}
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
              {{ $t('pages.home.stats.team') }}
            </div>
            <div class="text-sm text-gray-400 uppercase tracking-wider">
              {{ $t('pages.home.stats.teamLabel') }}
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
              {{ $t('pages.home.stats.expertise') }}
            </div>
            <div class="text-sm text-gray-400 uppercase tracking-wider">
              {{ $t('pages.home.stats.expertiseLabel') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Indicateur de scroll -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

// Génère des styles aléatoires pour les particules
const getParticleStyle = (index: number) => {
  const positions = [
    { top: '10%', left: '15%', animationDelay: '0s' },
    { top: '20%', left: '85%', animationDelay: '2s' },
    { top: '40%', left: '10%', animationDelay: '4s' },
    { top: '60%', left: '90%', animationDelay: '1s' },
    { top: '80%', left: '20%', animationDelay: '3s' },
    { top: '15%', left: '60%', animationDelay: '5s' },
    { top: '35%', left: '40%', animationDelay: '2.5s' },
    { top: '55%', left: '70%', animationDelay: '1.5s' },
    { top: '75%', left: '50%', animationDelay: '3.5s' },
    { top: '25%', left: '30%', animationDelay: '4.5s' },
    { top: '45%', left: '80%', animationDelay: '0.5s' },
    { top: '65%', left: '25%', animationDelay: '2.8s' },
    { top: '85%', left: '65%', animationDelay: '1.8s' },
    { top: '5%', left: '45%', animationDelay: '3.2s' },
    { top: '50%', left: '55%', animationDelay: '4.2s' },
    { top: '70%', left: '35%', animationDelay: '0.8s' },
    { top: '90%', left: '75%', animationDelay: '2.2s' },
    { top: '30%', left: '20%', animationDelay: '3.8s' },
    { top: '48%', left: '60%', animationDelay: '1.2s' },
    { top: '68%', left: '15%', animationDelay: '4.8s' }
  ]

  return positions[index % positions.length]
}
</script>

<style scoped>
/* Grille de fond */
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Animations personnalisées */
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(20px);
    opacity: 0;
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.25;
  }
}

.animate-fade-in-down {
  animation: fade-in-down 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
  opacity: 0;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animate-float {
  animation: float 15s linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Effet de verre morphique */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-xl {
    backdrop-filter: blur(20px);
  }
}
</style>
