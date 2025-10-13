<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Logo et tagline -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img :src="logo" alt="LEX AFRIC" class="h-8 w-auto rounded-sm" />
          </div>
          <p class="text-gray-400 text-sm">
            {{ $t('footer.tagline') }}
          </p>
        </div>

        <!-- Liens rapides -->
        <div>
          <h4 class="font-semibold mb-4">{{ $t('footer.quickLinks') }}</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-white transition text-sm">
                {{ $t('nav.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/offres" class="text-gray-400 hover:text-white transition text-sm">
                {{ $t('nav.offers') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/articles" class="text-gray-400 hover:text-white transition text-sm">
                {{ $t('nav.articles') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/a-propos" class="text-gray-400 hover:text-white transition text-sm">
                {{ $t('nav.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-400 hover:text-white transition text-sm">
                {{ $t('nav.contact') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Légal -->
        <div>
          <h4 class="font-semibold mb-4">{{ $t('footer.legal') }}</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/mentions-legales" class="text-gray-400 hover:text-white transition text-sm">
                {{ $t('common.legalNotice') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/politique-confidentialite" class="text-gray-400 hover:text-white transition text-sm">
                {{ $t('common.privacyPolicy') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold mb-4">{{ $t('common.contact') }}</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="tel:+23522519166" class="text-gray-400 hover:text-white transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                </svg>
                {{ $t('ui.phone') }}
              </a>
            </li>
            <li>
              <a href="mailto:contact@lexafric.com" class="text-gray-400 hover:text-white transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                contact@lexafric.com
              </a>
            </li>
          </ul>

          <!-- Réseaux sociaux - Placeholders Phase 2 -->
          <div class="mt-4">
            <p class="text-sm font-semibold mb-2">{{ $t('footer.followUs') }}</p>
            <div class="flex gap-3">
              <!-- Placeholders - liens à activer en Phase 2 -->
              <a href="#" class="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
        <p>&copy; {{ currentYear }} Lexafric. {{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const logo = '/assets/images/logo.jpg'
const currentYear = new Date().getFullYear()
</script>
