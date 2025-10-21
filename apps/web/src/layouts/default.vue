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
          <div>
            <h3 class="text-lg font-bold mb-4">Lexafric</h3>
            <p class="text-gray-400">Site vitrine multilingue</p>
          </div>
          <div>
            <h4 class="font-bold mb-4">{{ $t('common.legalNotice') }}</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink :to="localePath('/mentions-legales')" class="text-gray-400 hover:text-white">
                  {{ $t('common.legalNotice') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/politique-confidentialite')" class="text-gray-400 hover:text-white">
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

    <!-- Chatbot intégré -->
    <ChatWidget />
  </div>
</template>

<script setup lang="ts">
import TopLangBar from '~/components/base/TopLangBar.vue'
import NavBar from '~/components/base/NavBar.vue'
import ChatWidget from '~/components/chat/ChatWidget.vue'

const localePath = useLocalePath()
</script>
