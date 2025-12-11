<template>
  <section class="py-20 bg-white dark:bg-gray-950">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {{ $t('pages.home.partners.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('pages.home.partners.subtitle') }}
        </p>
      </div>

      <!-- Grille de logos partenaires -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        <div
          v-for="(logo, index) in partnerLogos"
          :key="index"
          class="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all hover:scale-105 group"
        >
          <img
            :src="logo"
            :alt="`${$t('pages.home.partners.partner')} ${index + 1}`"
            class="w-full h-auto max-h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Section Partenaires selon le site Lexafric original (31 logos)
const partnerLogos = [
  '/images/partenaires/18ef91041de0acc4ba4fd2cc532f9fc0.png',
  '/images/partenaires/7c39816908dc571f8b170f07f33aaa86.png',
  '/images/partenaires/1c127e5d2f219d4fdcbc053ed6e770b7.png',
  '/images/partenaires/68d30a5b09cb1524445065ffb9d8793a.png',
  '/images/partenaires/c3a20bddfa2cb516636f16a51dde330e.png',
  '/images/partenaires/ef3ea2ba04457f87648d20e8d004754a.png',
  '/images/partenaires/00629590a71a367c0b0407e7ee2ae478.png',
  '/images/partenaires/8bfdcf6432b577d156834032d2036107.png',
  '/images/partenaires/87c308d1d1c235231db5c447d88a98f8.png',
  '/images/partenaires/4ab85fa82781f81de4dad6bb33b6df1b.png',
  '/images/partenaires/a9c264ef1d89b48d807abbfa51555155.png',
  '/images/partenaires/a42d905987885e17e770f8e29abfdebe.png',
  '/images/partenaires/80203475c7e475c9113671bb354bbd36.png',
  '/images/partenaires/095289e5b516fa4b13ce1be71236bb7e.png',
  '/images/partenaires/7624b599c3e2ada6d28d054b9b271631.png',
  '/images/partenaires/b495beaa4fde1cae60e037ba43eed930.png',
  '/images/partenaires/a2b645d611df02c6b43c5ec0c8ef0500.png',
  '/images/partenaires/a0cb1c8f164ae2100f8eaa27579b1bc2.png',
  '/images/partenaires/1c2192c0a456134d04c759799931c10a.png',
  '/images/partenaires/2a4d234767140d99fc9607ba0c37456a.png',
  '/images/partenaires/9466f45c081f23bd4d6fec88553218f8.png',
  '/images/partenaires/2fa779a862bedc7c95a26a7a9d85eceb.png',
  '/images/partenaires/44857b032670b41d41dfb4fba2775366.png',
  '/images/partenaires/df1410f20762ebdbd74da8ba15159ea4.png',
  '/images/partenaires/24cfbb2cfad708920cfe0f7c2f583954.png',
  '/images/partenaires/698b4ebce88737ffb30fa4097ac45b5c.png',
  '/images/partenaires/7ca206c417a1de44fd8ad3dd43435a6b.png',
  '/images/partenaires/c99d2a0afec9bd3f6751e886729b07b0.png',
  '/images/partenaires/84fc093d8fdc61dbe9e73ec793d83117.png',
  '/images/partenaires/b2096986bd7976bf93166c529946563a.png',
  '/images/partenaires/535d987e8b8ed847e7fd7fb1c751afa8.png',
]
</script>
