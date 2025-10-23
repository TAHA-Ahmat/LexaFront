<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-950">
    <TopLangBar />
    <NavBar />

    <main class="flex-1">
      <slot />
    </main>

    <footer class="bg-gray-950 text-white py-12 md:py-16">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <!-- Colonne 1: À propos -->
          <div>
            <h3 class="text-sm font-bold uppercase tracking-wider text-white mb-4">À Propos</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              {{ $t('pages.home.seo.description') }}
            </p>
            <p class="text-gray-500 text-xs">
              Votre partenaire juridique et fiscal de confiance en Afrique centrale.
            </p>
          </div>

          <!-- Colonne 2: Nos Services -->
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-white mb-4">Nos Services</h4>
            <ul class="space-y-3">
              <li>
                <NuxtLink :to="localePath('/services/assistance-juridique')" class="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Assistance Juridique
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/services/assistance-fiscale')" class="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Assistance Fiscale
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/services/assistance-sociale')" class="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Assistance Sociale
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/services/assistance-recrutement')" class="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Recrutement
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Colonne 3: Contact Direct -->
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-white mb-4">Nous Contacter</h4>
            <div class="space-y-4">
              <!-- Téléphone -->
              <a href="tel:+23522519166" class="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                </svg>
                <span>(+235) 22 51 91 66</span>
              </a>

              <!-- Email -->
              <a href="mailto:contact@lexafric.com" class="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>contact@lexafric.com</span>
              </a>

              <!-- Adresse -->
              <div class="flex items-start gap-3 text-sm text-gray-400">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>N'Djamena, Tchad</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Copyright et crédits -->
        <div class="pt-8 border-t border-gray-800">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <!-- Gauche: Copyright + Liens légaux -->
            <div class="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-gray-400">
              <p>&copy; {{ new Date().getFullYear() }} Lexafric. Tous droits réservés.</p>
              <div class="flex items-center gap-3">
                <NuxtLink :to="localePath('/mentions-legales')" class="hover:text-white transition-colors">
                  Mentions légales
                </NuxtLink>
                <span class="text-gray-700">•</span>
                <NuxtLink :to="localePath('/politique-confidentialite')" class="hover:text-white transition-colors">
                  Politique de confidentialité
                </NuxtLink>
              </div>
            </div>

            <!-- Droite: Crédit développeur (EN ÉVIDENCE) -->
            <div class="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <div class="text-sm">
                <span class="text-gray-400">Développé par</span>
                <a href="mailto:madmit@madmit.com" class="ml-1 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  madmit
                </a>
              </div>
            </div>
          </div>
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
