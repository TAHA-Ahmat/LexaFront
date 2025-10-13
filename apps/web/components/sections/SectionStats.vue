<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8 text-center">
        <div v-for="(stat, index) in stats" :key="index">
          <div class="text-4xl font-bold text-blue-600 mb-2">{{ stat.value }}</div>
          <div class="text-gray-600">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '100+', label: 'Clients satisfaits' },
  { value: '500+', label: 'Projets réalisés' },
  { value: '15+', label: 'Années d\'expérience' },
  { value: '20+', label: 'Experts' }
]
</script>
