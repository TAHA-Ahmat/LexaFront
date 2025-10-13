<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-2xl font-bold">Lexafric</NuxtLink>

          <div class="flex items-center gap-6">
            <NuxtLink to="/" class="hover:text-blue-600">{{ $t('common.home') }}</NuxtLink>
            <NuxtLink to="/expertises" class="hover:text-blue-600">{{ $t('common.expertises') }}</NuxtLink>
            <NuxtLink to="/publications" class="hover:text-blue-600">{{ $t('common.publications') }}</NuxtLink>
            <NuxtLink to="/a-propos" class="hover:text-blue-600">{{ $t('common.about') }}</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-blue-600">{{ $t('common.contact') }}</NuxtLink>

            <!-- Language selector -->
            <div class="flex gap-2">
              <button
                v-for="loc in availableLocales"
                :key="loc.code"
                @click="setLocale(loc.code)"
                :class="['px-2 py-1 rounded', locale === loc.code ? 'bg-blue-600 text-white' : 'bg-gray-200']"
              >
                {{ loc.code.toUpperCase() }}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-bold mb-4">Lexafric</h3>
            <p class="text-gray-400">Site vitrine multilingue</p>
          </div>
          <div>
            <h4 class="font-bold mb-4">{{ $t('common.legalNotice') }}</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/mentions-legales" class="text-gray-400 hover:text-white">
                  {{ $t('common.legalNotice') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/politique-confidentialite" class="text-gray-400 hover:text-white">
                  {{ $t('common.privacyPolicy') }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Contact</h4>
            <p class="text-gray-400">contact@lexafric.com</p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} Lexafric. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => locales.value)
</script>
