<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section avec particules flottantes -->
    <section class="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <!-- Floating particles background -->
      <div class="absolute inset-0">
        <div
          v-for="particle in particles"
          :key="particle.id"
          class="absolute rounded-full bg-blue-400/30 animate-float"
          :style="{
            left: particle.x + '%',
            top: particle.y + '%',
            width: particle.size + 'px',
            height: particle.size + 'px',
            animationDelay: particle.delay + 's',
            animationDuration: particle.duration + 's'
          }"
        ></div>
      </div>

      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto text-center space-y-6">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {{ $t('pages.services.title') }}
          </h1>

          <p class="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {{ $t('pages.services.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid Minimaliste -->
    <section class="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto space-y-20">
          <!-- Service 1: Juridique -->
          <NuxtLink :to="localePath('/services/assistance-juridique')" class="block group">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <!-- Numéro -->
              <div class="lg:col-span-1">
                <div class="text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-blue-500 dark:group-hover:text-blue-500 transition-colors">
                  01
                </div>
              </div>

              <!-- Contenu -->
              <div class="lg:col-span-4 space-y-4">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ $t('pages.services.legal.title') }}
                </h2>

                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {{ $t('pages.services.legal.description') }}
                </p>

                <div class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium pt-2 group-hover:gap-3 transition-all">
                  <span>{{ $t('pages.services.learnMore') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </NuxtLink>

          <!-- Service 2: Fiscale -->
          <NuxtLink :to="localePath('/services/assistance-fiscale')" class="block group">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <div class="lg:col-span-1">
                <div class="text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-emerald-500 dark:group-hover:text-emerald-500 transition-colors">
                  02
                </div>
              </div>

              <div class="lg:col-span-4 space-y-4">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {{ $t('pages.services.fiscal.title') }}
                </h2>

                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {{ $t('pages.services.fiscal.description') }}
                </p>

                <div class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium pt-2 group-hover:gap-3 transition-all">
                  <span>{{ $t('pages.services.learnMore') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </NuxtLink>

          <!-- Service 3: Sociale -->
          <NuxtLink :to="localePath('/services/assistance-sociale')" class="block group">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <div class="lg:col-span-1">
                <div class="text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-purple-500 dark:group-hover:text-purple-500 transition-colors">
                  03
                </div>
              </div>

              <div class="lg:col-span-4 space-y-4">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {{ $t('pages.services.social.title') }}
                </h2>

                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {{ $t('pages.services.social.description') }}
                </p>

                <div class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium pt-2 group-hover:gap-3 transition-all">
                  <span>{{ $t('pages.services.learnMore') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </NuxtLink>

          <!-- Service 4: Recrutement -->
          <NuxtLink :to="localePath('/services/assistance-recrutement')" class="block group">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <div class="lg:col-span-1">
                <div class="text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-amber-500 dark:group-hover:text-amber-500 transition-colors">
                  04
                </div>
              </div>

              <div class="lg:col-span-4 space-y-4">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {{ $t('pages.services.recruitment.title') }}
                </h2>

                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {{ $t('pages.services.recruitment.description') }}
                </p>

                <div class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium pt-2 group-hover:gap-3 transition-all">
                  <span>{{ $t('pages.services.learnMore') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </NuxtLink>

          <!-- Service 5: Formations -->
          <NuxtLink :to="localePath('/services/formations')" class="block group">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <div class="lg:col-span-1">
                <div class="text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-rose-500 dark:group-hover:text-rose-500 transition-colors">
                  05
                </div>
              </div>

              <div class="lg:col-span-4 space-y-4">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {{ $t('pages.services.training.title') }}
                </h2>

                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {{ $t('pages.services.training.description') }}
                </p>

                <div class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium pt-2 group-hover:gap-3 transition-all">
                  <span>{{ $t('pages.services.learnMore') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section Minimaliste -->
    <section class="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {{ $t('pages.services.cta.title') }}
          </h2>

          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ $t('pages.services.cta.subtitle') }}
          </p>

          <div class="pt-4">
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
            >
              {{ $t('pages.services.cta.button') }}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// i18n
const localePath = useLocalePath()

// Generate floating particles
interface Particle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

const particles = ref<Particle[]>([])

// Generate 30 particles
onMounted(() => {
  for (let i = 0; i < 30; i++) {
    particles.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20, // 20-80px
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 15 // 15-30s
    })
  }
})

// SEO
useSeoMeta({
  title: 'Nos Services - Lexafric',
  description: 'Découvrez nos services en assistance juridique, fiscale, sociale, recrutement et formations',
  ogTitle: 'Nos Services - Lexafric',
  ogDescription: 'Découvrez nos services en assistance juridique, fiscale, sociale, recrutement et formations'
})
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-30px) translateX(20px);
  }
  50% {
    transform: translateY(-10px) translateX(-20px);
  }
  75% {
    transform: translateY(-40px) translateX(10px);
  }
}

.animate-float {
  animation: float linear infinite;
}
</style>
