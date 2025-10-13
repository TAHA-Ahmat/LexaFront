<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">{{ $t('home.features.title') }}</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index" class="p-6 bg-white rounded-lg shadow">
          <div class="w-12 h-12 bg-blue-600 rounded-lg mb-4"></div>
          <h3 class="text-xl font-bold mb-3">{{ $t(feature.title) }}</h3>
          <p class="text-gray-600">{{ $t(feature.description) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'home.features.item1.title',
    description: 'home.features.item1.description'
  },
  {
    title: 'home.features.item2.title',
    description: 'home.features.item2.description'
  },
  {
    title: 'home.features.item3.title',
    description: 'home.features.item3.description'
  }
]
</script>
