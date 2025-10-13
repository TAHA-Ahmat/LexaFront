<template>
  <div>
    <SectionHero />
    <SectionFeatures />
    <SectionStats />
    <SectionPosts />
    <SectionCTA />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Lexafric - Accueil',
  description: 'Site vitrine Lexafric - Expertise et solutions multilingues',
  ogTitle: 'Lexafric - Accueil',
  ogDescription: 'Site vitrine Lexafric - Expertise et solutions multilingues',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://lexafric.com',
  twitterCard: 'summary_large_image'
})
</script>
