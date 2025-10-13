<template>
  <header
    :class="[
      'sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/70 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60',
      hasShadow ? 'shadow-md' : 'shadow-none'
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[70px] flex items-center">
      <!-- Left (or right in RTL): Logo -->
      <div class="flex-1 flex items-center">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img :src="logo" alt="LEX AFRIC" class="h-8 w-auto rounded-sm" />
          <span class="hidden sm:inline text-gray-800 dark:text-gray-100 font-semibold tracking-wide">LEX AFRIC</span>
        </NuxtLink>
      </div>

      <!-- Center: Menu (desktop) -->
      <nav aria-label="Navigation principale" class="hidden md:flex justify-center">
        <ul class="flex items-center gap-8">
          <li v-for="item in items" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="px-3 py-2 rounded-lg text-[15px] font-medium transition
                     text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-white"
              :class="isActive(item.to) ? 'border-b-2 border-blue-600 text-blue-600 dark:text-white' : ''"
            >
              {{ t(item.label) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Right: Phone (desktop) -->
      <div class="flex-1 hidden md:flex justify-end">
        <a
          :href="`tel:+23522519166`"
          class="inline-flex items-center gap-2 text-[15px] font-medium text-blue-600 hover:text-blue-700
                 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-2 py-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
          </svg>
          <span>{{ t('ui.phone') }}</span>
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg
               text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-white
               focus:outline-none focus:ring-2 focus:ring-blue-500"
        :aria-expanded="mobileOpen ? 'true' : 'false'"
        @click="toggleMobile"
      >
        <span class="sr-only">Menu</span>
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z"/>
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
        class="md:hidden fixed top-0 bottom-0 right-0 w-full sm:w-[360px] bg-white dark:bg-gray-900 z-[60]
               p-6 flex flex-col gap-6 focus:outline-none"
        role="dialog" aria-modal="true"
      >
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-3" @click="closeMobile">
            <img :src="logo" alt="LEX AFRIC" class="h-8 w-auto rounded-sm" />
            <span class="text-gray-800 dark:text-gray-100 font-semibold tracking-wide">LEX AFRIC</span>
          </NuxtLink>
          <button class="h-10 w-10 grid place-items-center rounded-lg text-gray-600 dark:text-gray-300
                         hover:text-blue-600 dark:hover:text-white focus:ring-2 focus:ring-blue-500"
                  @click="closeMobile">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z"/>
            </svg>
          </button>
        </div>

        <nav aria-label="Navigation principale (mobile)">
          <ul class="flex flex-col gap-2">
            <li v-for="item in items" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="block px-4 py-3 rounded-lg text-[16px] font-medium
                       text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                @click="closeMobile"
              >
                {{ t(item.label) }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="mt-auto border-t border-gray-200 dark:border-gray-800 pt-4">
          <a :href="`tel:+23522519166`"
             class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
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
const route = useRoute()

const items = [
  { to: '/',         label: 'nav.home' },
  { to: '/offres',   label: 'nav.offers' },
  { to: '/articles', label: 'nav.articles' },
  { to: '/a-propos', label: 'nav.about' },
  { to: '/contact',  label: 'nav.contact' }
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
