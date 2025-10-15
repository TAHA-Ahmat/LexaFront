<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- En-tête -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('pages.home.posts.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {{ $t('pages.home.posts.subtitle') }}
        </p>
      </div>

      <!-- Grille d'articles -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <article
          v-for="post in recentPosts"
          :key="post.slug"
          class="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <!-- Image -->
          <div class="h-56 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="post.icon" />
              </svg>
            </div>
            <!-- Catégorie badge -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold rounded-full">
                {{ $t(post.category) }}
              </span>
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-6">
            <!-- Date -->
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {{ post.date }}
            </p>

            <!-- Titre -->
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {{ $t(post.title) }}
            </h3>

            <!-- Extrait -->
            <p class="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
              {{ $t(post.excerpt) }}
            </p>

            <!-- Lien -->
            <NuxtLink
              :to="`/articles`"
              class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
            >
              {{ $t('common.readMore') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- Lien vers tous les articles -->
      <div class="text-center mt-12">
        <NuxtLink
          to="/articles"
          class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          {{ $t('pages.home.posts.viewAll') }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Articles d'exemple - à remplacer par des données réelles
const recentPosts = [
  {
    slug: 'droit-affaires-tchad',
    title: 'pages.home.posts.post1.title',
    excerpt: 'pages.home.posts.post1.excerpt',
    category: 'pages.home.posts.category.legal',
    date: '15 Mars 2025',
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
  },
  {
    slug: 'fiscalite-entreprises',
    title: 'pages.home.posts.post2.title',
    excerpt: 'pages.home.posts.post2.excerpt',
    category: 'pages.home.posts.category.fiscal',
    date: '10 Mars 2025',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
  },
  {
    slug: 'droit-social-afrique',
    title: 'pages.home.posts.post3.title',
    excerpt: 'pages.home.posts.post3.excerpt',
    category: 'pages.home.posts.category.social',
    date: '5 Mars 2025',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  }
]
</script>
