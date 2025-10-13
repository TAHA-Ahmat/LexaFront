<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Dernières Publications</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <article v-for="post in recentPosts" :key="post.slug" class="bg-white rounded-lg overflow-hidden shadow">
          <div class="h-48 bg-gray-200"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ post.title }}</h3>
            <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
            <NuxtLink :to="`/articles/${post.slug}`" class="text-blue-600 hover:underline">
              {{ $t('common.readMore') }}
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Mock data - à remplacer par useContentMock
const recentPosts = [
  {
    slug: 'article-1',
    title: 'Article 1',
    excerpt: 'Extrait de l\'article...'
  },
  {
    slug: 'article-2',
    title: 'Article 2',
    excerpt: 'Extrait de l\'article...'
  },
  {
    slug: 'article-3',
    title: 'Article 3',
    excerpt: 'Extrait de l\'article...'
  }
]
</script>
