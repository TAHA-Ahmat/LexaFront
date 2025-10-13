<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-center mb-4">{{ $t('pages.offers.title') }}</h1>
    <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
      {{ $t('pages.offers.subtitle') }}
    </p>

    <!-- Section Services -->
    <section id="services" class="mb-20 scroll-mt-24">
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-4">{{ $t('pages.offers.services.title') }}</h2>
        <p class="text-gray-600 mb-8">{{ $t('pages.offers.services.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-3">{{ $t('pages.offers.services.item1.title') }}</h3>
          <p class="text-gray-600">{{ $t('pages.offers.services.item1.desc') }}</p>
        </div>
        <div class="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-3">{{ $t('pages.offers.services.item2.title') }}</h3>
          <p class="text-gray-600">{{ $t('pages.offers.services.item2.desc') }}</p>
        </div>
        <div class="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-3">{{ $t('pages.offers.services.item3.title') }}</h3>
          <p class="text-gray-600">{{ $t('pages.offers.services.item3.desc') }}</p>
        </div>
      </div>
    </section>

    <!-- Section Solutions -->
    <section id="solutions" class="scroll-mt-24">
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-4">{{ $t('pages.offers.solutions.title') }}</h2>
        <p class="text-gray-600 mb-8">{{ $t('pages.offers.solutions.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-8 border-2 border-blue-600 rounded-lg hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-3">{{ $t('pages.offers.solutions.item1.title') }}</h3>
          <p class="text-gray-600 mb-4">{{ $t('pages.offers.solutions.item1.desc') }}</p>
          <ul class="text-sm text-gray-500 space-y-2">
            <li>✓ {{ $t('pages.offers.solutions.item1.features.f1') }}</li>
            <li>✓ {{ $t('pages.offers.solutions.item1.features.f2') }}</li>
            <li>✓ {{ $t('pages.offers.solutions.item1.features.f3') }}</li>
          </ul>
        </div>
        <div class="p-8 border-2 border-blue-600 rounded-lg hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-3">{{ $t('pages.offers.solutions.item2.title') }}</h3>
          <p class="text-gray-600 mb-4">{{ $t('pages.offers.solutions.item2.desc') }}</p>
          <ul class="text-sm text-gray-500 space-y-2">
            <li>✓ {{ $t('pages.offers.solutions.item2.features.f1') }}</li>
            <li>✓ {{ $t('pages.offers.solutions.item2.features.f2') }}</li>
            <li>✓ {{ $t('pages.offers.solutions.item2.features.f3') }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Nos offres - Services et Solutions juridiques | Lexafric',
  description: 'Découvrez nos services juridiques ponctuels et nos solutions d\'accompagnement complètes adaptées à vos besoins',
  ogTitle: 'Nos offres - Lexafric'
})
</script>
