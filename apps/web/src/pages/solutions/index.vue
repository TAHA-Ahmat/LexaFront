<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section avec orbes animés -->
    <section class="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      <!-- Animated orbs -->
      <div class="absolute inset-0">
        <div
          v-for="orb in orbs"
          :key="orb.id"
          class="absolute rounded-full blur-3xl animate-orb"
          :style="{
            left: orb.x + '%',
            top: orb.y + '%',
            width: orb.size + 'px',
            height: orb.size + 'px',
            background: orb.color,
            animationDelay: orb.delay + 's',
            animationDuration: orb.duration + 's'
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
            {{ $t('pages.solutions.title') }}
          </h1>

          <p class="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {{ $t('pages.solutions.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Solutions Grid Minimaliste -->
    <section class="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto space-y-20">
          <!-- Solution 1: Secrétariat Juridique -->
          <NuxtLink :to="localePath('/solutions/secretariat-juridique')" class="block group">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <div class="lg:col-span-1">
                <div class="text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-indigo-500 dark:group-hover:text-indigo-500 transition-colors">
                  01
                </div>
              </div>

              <div class="lg:col-span-4 space-y-4">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {{ $t('pages.solutions.legal.title') }}
                </h2>

                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {{ $t('pages.solutions.legal.description') }}
                </p>

                <div class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium pt-2 group-hover:gap-3 transition-all">
                  <span>{{ $t('common.readMore') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </NuxtLink>

          <!-- Solution 2: Gouvernance d'Entreprise -->
          <NuxtLink :to="localePath('/solutions/gouvernance-entreprise')" class="block group">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <div class="lg:col-span-1">
                <div class="text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-teal-500 dark:group-hover:text-teal-500 transition-colors">
                  02
                </div>
              </div>

              <div class="lg:col-span-4 space-y-4">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {{ $t('pages.solutions.governance.title') }}
                </h2>

                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {{ $t('pages.solutions.governance.description') }}
                </p>

                <div class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium pt-2 group-hover:gap-3 transition-all">
                  <span>{{ $t('common.readMore') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </NuxtLink>

          <!-- Solution 3: Création & Transformation -->
          <NuxtLink :to="localePath('/solutions/creation-transformation')" class="block group">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              <div class="lg:col-span-1">
                <div class="text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-orange-500 dark:group-hover:text-orange-500 transition-colors">
                  03
                </div>
              </div>

              <div class="lg:col-span-4 space-y-4">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {{ $t('pages.solutions.creation.title') }}
                </h2>

                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {{ $t('pages.solutions.creation.description') }}
                </p>

                <div class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium pt-2 group-hover:gap-3 transition-all">
                  <span>{{ $t('common.readMore') }}</span>
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
            {{ $t('pages.solutions.cta.title') }}
          </h2>

          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ $t('pages.solutions.cta.subtitle') }}
          </p>

          <div class="pt-4">
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
            >
              {{ $t('pages.solutions.cta.button') }}
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

// Generate animated orbs
interface Orb {
  id: number
  x: number
  y: number
  size: number
  color: string
  delay: number
  duration: number
}

const orbs = ref<Orb[]>([])

// Generate 5 colored orbs
onMounted(() => {
  const colors = [
    'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0) 70%)', // purple
    'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%)', // indigo
    'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0) 70%)', // blue
    'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0) 70%)', // purple-light
    'radial-gradient(circle, rgba(79, 70, 229, 0.3) 0%, rgba(79, 70, 229, 0) 70%)'  // indigo-dark
  ]

  for (let i = 0; i < 5; i++) {
    orbs.value.push({
      id: i,
      x: Math.random() * 80 + 10, // 10-90%
      y: Math.random() * 80 + 10, // 10-90%
      size: Math.random() * 300 + 200, // 200-500px
      color: colors[i],
      delay: Math.random() * 3,
      duration: Math.random() * 10 + 15 // 15-25s
    })
  }
})

// SEO
useSeoMeta({
  title: 'Nos Solutions - Lexafric',
  description: 'Découvrez nos solutions en secrétariat juridique, gouvernance d\'entreprise et création & transformation',
  ogTitle: 'Nos Solutions - Lexafric',
  ogDescription: 'Découvrez nos solutions en secrétariat juridique, gouvernance d\'entreprise et création & transformation'
})
</script>

<style scoped>
@keyframes orb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  25% {
    transform: translate(30px, -30px) scale(1.1);
    opacity: 0.8;
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
    opacity: 0.9;
  }
  75% {
    transform: translate(20px, 30px) scale(1.05);
    opacity: 0.85;
  }
}

.animate-orb {
  animation: orb ease-in-out infinite;
}
</style>
