<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-500',
      hasShadow
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-2xl shadow-soft border-b border-gray-200/50 dark:border-gray-800/50'
        : 'bg-white/70 dark:bg-black/70 backdrop-blur-xl'
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[80px] landscape:h-[64px] flex items-center">
      <!-- Left: Logo -->
      <div class="flex-shrink-0">
        <NuxtLink :to="localePath('/')" class="flex items-center group">
          <img :src="logo" alt="Lexafric" class="h-12 landscape:h-10 w-auto rounded-md shadow-sm group-hover:shadow-md transition-shadow" />
        </NuxtLink>
      </div>

      <!-- Center: Menu (desktop) -->
      <nav aria-label="Navigation principale" class="hidden lg:flex flex-1 justify-center">
        <ul class="flex items-center gap-1">
          <li v-for="item in items" :key="item.to">
            <NuxtLink
              :to="localePath(item.to)"
              class="relative px-4 py-2 landscape:px-3 landscape:py-1.5 text-[15px] landscape:text-[14px] font-semibold tracking-tight transition-all duration-300 group"
              :class="isActive(item.to)
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'"
            >
              {{ t(item.label) }}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform transition-all duration-300"
                :class="isActive(item.to) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'"
              ></span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Right: Phone (desktop) -->
      <div class="hidden lg:flex items-center gap-4">
        <a
          :href="`tel:+23522519166`"
          class="inline-flex items-center gap-2.5 px-6 landscape:px-5 py-2.5 landscape:py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 landscape:h-4 landscape:w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
          </svg>
          <span class="text-sm landscape:text-xs">{{ t('ui.phone') }}</span>
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="lg:hidden ml-auto inline-flex items-center justify-center h-11 w-11 landscape:h-9 landscape:w-9 rounded-lg
               text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-800
               focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        :aria-expanded="mobileOpen ? 'true' : 'false'"
        @click="toggleMobile"
      >
        <span class="sr-only">Menu</span>
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 landscape:h-5 landscape:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 landscape:h-5 landscape:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile drawer overlay with blur - Bloque le scroll de la page -->
    <transition name="fade">
      <div
        v-if="mobileOpen"
        class="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm overscroll-none"
        @click="closeMobile"
        @touchmove.prevent
      />
    </transition>

    <transition name="slide">
      <aside
        v-if="mobileOpen"
        class="fixed top-0 right-0 bottom-0 w-[90%] max-w-[360px] h-[88vh] bg-white dark:bg-gray-900 z-[100]
               flex flex-col shadow-2xl focus:outline-none overscroll-contain"
        @touchmove.stop
      >
        <!-- Header du drawer - Compact et élégant -->
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0">
          <NuxtLink :to="localePath('/')" class="flex items-center" @click="closeMobile">
            <img :src="logo" alt="Lexafric" class="h-9 w-auto rounded-md shadow-md" />
          </NuxtLink>
          <button
            class="h-9 w-9 grid place-items-center rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-200"
            @click="closeMobile"
            aria-label="Fermer le menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Navigation mobile - Occupe tout l'espace vertical disponible -->
        <nav aria-label="Navigation principale (mobile)" class="flex-1 flex items-center px-3">
          <ul class="flex flex-col justify-evenly w-full h-full py-2">
            <li v-for="item in items" :key="item.to">
              <NuxtLink
                :to="localePath(item.to)"
                class="flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-200"
                :class="isActive(item.to)
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-blue-600 dark:hover:text-blue-400'"
                @click="closeMobile"
              >
                <!-- Icônes -->
                <svg v-if="item.to === '/'" class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                <svg v-else-if="item.to === '/services'" class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <svg v-else-if="item.to === '/solutions'" class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                <svg v-else-if="item.to === '/a-propos'" class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <svg v-else-if="item.to === '/contact'" class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>{{ t(item.label) }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Footer fixé en bas - Compact et toujours visible avec marge de sécurité -->
        <div class="border-t border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-900 dark:to-blue-950/30 flex-shrink-0 px-3 pt-2.5 pb-8">
          <!-- Bouton téléphone compact -->
          <a
            href="tel:+23522519166"
            class="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
            </svg>
            <span class="text-sm tracking-wide">+235 22 51 91 66</span>
          </a>

          <!-- Crédit développeur - Une seule ligne avec marge -->
          <p class="text-center text-[11px] text-gray-600 dark:text-gray-400 mt-2 mb-1">
            Développé par <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Madmit</span>
          </p>
        </div>
      </aside>
    </transition>
  </header>
</template>

<script setup lang="ts">
import logo from '~/assets/images/logo.jpg'
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const items = [
  { to: '/',          label: 'nav.home' },
  { to: '/services',  label: 'nav.services' },
  { to: '/solutions', label: 'nav.solutions' },
  { to: '/a-propos',  label: 'nav.about' },
  { to: '/contact',   label: 'nav.contact' }
]

const isActive = (to: string) => route.path === to

const mobileOpen = ref(false)
const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
  if (mobileOpen.value) {
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
  } else {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
  }
}

const closeMobile = () => {
  mobileOpen.value = false
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
}

const hasShadow = ref(false)
onMounted(() => {
  const onScroll = () => (hasShadow.value = window.scrollY > 12)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
/* Overlay fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 200ms ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Drawer slide animation - Plus fluide */
.slide-enter-active {
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-leave-active {
  transition: transform 250ms cubic-bezier(0.7, 0, 0.84, 0);
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
</style>
