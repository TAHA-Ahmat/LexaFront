<template>
  <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          {{ $t('pages.home.newsletter.title') }}
        </h2>
        <p class="text-xl mb-8 text-blue-100">
          {{ $t('pages.home.newsletter.subtitle') }}
        </p>

        <!-- Formulaire d'inscription -->
        <form @submit.prevent="subscribe" class="max-w-2xl mx-auto mb-8">
          <div class="flex flex-col md:flex-row gap-4">
            <input
              v-model="email"
              type="email"
              :placeholder="$t('pages.home.newsletter.placeholder')"
              required
              class="flex-1 px-6 py-4 rounded-lg text-gray-900 dark:text-white bg-white/90 dark:bg-gray-800/90 backdrop-blur focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button
              type="submit"
              class="px-8 py-4 bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {{ $t('pages.home.newsletter.button') }}
            </button>
          </div>

          <!-- Message de confirmation -->
          <p v-if="subscribed" class="mt-4 text-green-200 dark:text-green-300">
            {{ $t('pages.home.newsletter.success') }}
          </p>
        </form>

        <!-- Lien vers le blog -->
        <div class="flex justify-center gap-6">
          <NuxtLink
            to="/articles"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg font-semibold transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            {{ $t('pages.home.newsletter.blog') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')
const subscribed = ref(false)

const subscribe = () => {
  // Logique d'inscription (à implémenter avec votre service d'emailing)
  console.log('Newsletter subscription:', email.value)
  subscribed.value = true
  email.value = ''

  // Reset message après 5 secondes
  setTimeout(() => {
    subscribed.value = false
  }, 5000)
}
</script>
