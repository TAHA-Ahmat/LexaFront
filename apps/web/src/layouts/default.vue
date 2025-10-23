<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-950">
    <TopLangBar />
    <NavBar />

    <main class="flex-1">
      <slot />
    </main>

    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- À propos -->
          <div>
            <h3 class="text-lg font-bold mb-4">Lexafric</h3>
            <p class="text-gray-400 text-sm">{{ $t('pages.home.seo.description') }}</p>
            <div class="mt-4">
              <p class="text-gray-400 text-sm">
                <span class="font-semibold text-white">Contact:</span><br>
                contact@lexafric.com<br>
                (+235) 22 51 91 66
              </p>
            </div>
          </div>

          <!-- Liens légaux -->
          <div>
            <h4 class="font-bold mb-4">{{ $t('common.legalNotice') }}</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink :to="localePath('/mentions-legales')" class="text-gray-400 hover:text-white text-sm transition-colors">
                  {{ $t('common.legalNotice') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/politique-confidentialite')" class="text-gray-400 hover:text-white text-sm transition-colors">
                  {{ $t('common.privacyPolicy') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/services')" class="text-gray-400 hover:text-white text-sm transition-colors">
                  {{ $t('common.ourServices') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/contact')" class="text-gray-400 hover:text-white text-sm transition-colors">
                  {{ $t('common.contact') }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h4 class="font-bold mb-4">{{ $t('pages.home.newsletter.title') }}</h4>
            <p class="text-gray-400 text-sm mb-4">{{ $t('pages.home.newsletter.subtitle') }}</p>
            <form @submit.prevent="handleNewsletterSubmit" class="space-y-3">
              <input
                v-model="newsletterEmail"
                type="email"
                :placeholder="$t('pages.home.newsletter.placeholder')"
                required
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                {{ $t('pages.home.newsletter.button') }}
              </button>
              <p v-if="newsletterSuccess" class="text-green-400 text-sm">
                {{ $t('pages.home.newsletter.success') }}
              </p>
            </form>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p class="text-sm mb-2">&copy; {{ new Date().getFullYear() }} Lexafric. Tous droits réservés.</p>
          <p class="text-xs flex items-center justify-center gap-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
            <span>Développé par <a href="mailto:madmit@madmit.com" class="text-blue-400 hover:text-blue-300 transition-colors font-medium">madmit</a></span>
          </p>
        </div>
      </div>
    </footer>

    <!-- Chatbot intégré -->
    <ChatWidget />
  </div>
</template>

<script setup lang="ts">
import TopLangBar from '~/components/base/TopLangBar.vue'
import NavBar from '~/components/base/NavBar.vue'
import ChatWidget from '~/components/chat/ChatWidget.vue'

const localePath = useLocalePath()

// Newsletter form state
const newsletterEmail = ref('')
const newsletterSuccess = ref(false)

const handleNewsletterSubmit = () => {
  // Simulation d'inscription newsletter
  // TODO: Implémenter l'appel API pour l'inscription réelle
  newsletterSuccess.value = true
  newsletterEmail.value = ''

  // Réinitialiser le message après 5 secondes
  setTimeout(() => {
    newsletterSuccess.value = false
  }, 5000)
}
</script>
