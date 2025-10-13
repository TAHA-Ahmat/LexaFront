<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">{{ $t('nav.articles') }}</h1>

    <SectionPosts />

    <!-- Placeholder pour la liste des articles -->
    <div class="grid md:grid-cols-3 gap-8 mt-12">
      <article v-for="i in 6" :key="i" class="border rounded-lg overflow-hidden">
        <div class="h-48 bg-gray-200"></div>
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2">Article {{ i }}</h2>
          <p class="text-gray-600 mb-4">Extrait de l'article...</p>
          <NuxtLink :to="`/articles/article-${i}`" class="text-blue-600 hover:underline">
            {{ $t('common.readMore') }}
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Articles - Lexafric',
  description: 'Tous nos articles et actualités juridiques',
  ogTitle: 'Articles - Lexafric'
})
</script>
