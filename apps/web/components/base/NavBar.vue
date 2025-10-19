<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-500',
      hasShadow
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-2xl shadow-soft border-b border-gray-200/50 dark:border-gray-800/50'
        : 'bg-white/70 dark:bg-black/70 backdrop-blur-xl'
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[80px] flex items-center">
      <!-- Left: Logo -->
      <div class="flex-shrink-0">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3 group">
          <img :src="logo" alt="LEX AFRIC" class="h-12 w-auto rounded-md shadow-sm group-hover:shadow-md transition-shadow" />
          <div class="hidden lg:flex flex-col">
            <span class="text-gray-900 dark:text-white font-bold text-xl tracking-tight leading-tight">LEX AFRIC</span>
            <span class="text-blue-600 dark:text-blue-400 text-[10px] uppercase tracking-widest font-medium">Legal Expertise</span>
          </div>
        </NuxtLink>
      </div>

      <!-- Center: Menu (desktop) -->
      <nav aria-label="Navigation principale" class="hidden lg:flex flex-1 justify-center">
        <ul class="flex items-center gap-1">
          <li v-for="item in items" :key="item.to">
            <NuxtLink
              :to="localePath(item.to)"
              class="relative px-4 py-2 text-[15px] font-semibold tracking-tight transition-all duration-300 group"
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
          class="inline-flex items-center gap-2.5 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
          </svg>
          <span class="text-sm">{{ t('ui.phone') }}</span>
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="lg:hidden ml-auto inline-flex items-center justify-center h-11 w-11 rounded-lg
               text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-800
               focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        :aria-expanded="mobileOpen ? 'true' : 'false'"
        @click="toggleMobile"
      >
        <span class="sr-only">Menu</span>
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile drawer -->
    <transition name="fade">
      <div v-if="mobileOpen" class="md:hidden fixed inset-0 z-50 bg-black/50" @click="closeMobile" />
    </transition>

    <transition name="slide">
      <aside
        v-if="mobileOpen"
        class="lg:hidden fixed top-0 bottom-0 right-0 w-full sm:w-[380px] bg-white dark:bg-gray-900 z-[60]
               flex flex-col shadow-2xl focus:outline-none overflow-y-auto"
        role="dialog" aria-modal="true"
      >
        <!-- Header du drawer -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <NuxtLink :to="localePath('/')" class="flex items-center gap-3" @click="closeMobile">
            <img :src="logo" alt="LEX AFRIC" class="h-10 w-auto rounded-md shadow-sm" />
            <div class="flex flex-col">
              <span class="text-gray-900 dark:text-white font-bold text-lg tracking-tight">LEX AFRIC</span>
              <span class="text-blue-600 dark:text-blue-400 text-[9px] uppercase tracking-widest font-medium">Legal Expertise</span>
            </div>
          </NuxtLink>
          <button class="h-10 w-10 grid place-items-center rounded-lg text-gray-600 dark:text-gray-300
                         hover:text-blue-600 hover:bg-blue-50 dark:hover:text-white dark:hover:bg-gray-800
                         focus:ring-2 focus:ring-blue-500 transition-colors"
                  @click="closeMobile">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Navigation mobile -->
        <nav aria-label="Navigation principale (mobile)" class="flex-1 p-6">
          <ul class="flex flex-col gap-1">
            <li v-for="item in items" :key="item.to">
              <NuxtLink
                :to="localePath(item.to)"
                class="block px-4 py-3.5 rounded-lg text-base font-semibold transition-all"
                :class="isActive(item.to)
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'"
                @click="closeMobile"
              >
                {{ t(item.label) }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Footer du drawer -->
        <div class="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <a
            :href="`tel:+23522519166`"
            class="flex items-center justify-center gap-2.5 w-full px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
            </svg>
            <span>{{ t('ui.phone') }}</span>
          </a>
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
  document.documentElement.style.overflow = mobileOpen.value ? 'hidden' : ''
}
const closeMobile = () => {
  mobileOpen.value = false
  document.documentElement.style.overflow = ''
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
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-enter-active, .slide-leave-active { transition: transform .25s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }
</style>
