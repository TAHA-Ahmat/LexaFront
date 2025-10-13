<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl">
    <article>
      <div class="h-96 bg-gray-200 rounded-lg mb-8"></div>

      <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>

      <div class="flex items-center gap-4 text-gray-600 mb-8">
        <span>Par {{ author }}</span>
        <span>•</span>
        <time>{{ publishedAt }}</time>
      </div>

      <div class="prose max-w-none">
        <p>Contenu de l'article...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Mock data
const title = `Article: ${slug}`
const author = 'Auteur'
const publishedAt = new Date().toLocaleDateString()

useSeoMeta({
  title: `${title} - Lexafric`,
  description: 'Lire l\'article complet',
  ogTitle: `${title} - Lexafric`,
  ogType: 'article'
})
</script>
