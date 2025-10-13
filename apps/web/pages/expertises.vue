<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">{{ $t('common.expertises') }}</h1>

    <SectionFeatures />

    <!-- Placeholder pour les expertises détaillées -->
    <div class="grid md:grid-cols-2 gap-8 mt-12">
      <div class="p-6 border rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Service 1</h2>
        <p class="text-gray-600">Description du service...</p>
      </div>
      <div class="p-6 border rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Service 2</h2>
        <p class="text-gray-600">Description du service...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Nos expertises - Lexafric',
  description: 'Découvrez nos expertises et solutions',
  ogTitle: 'Nos expertises - Lexafric'
})
</script>
