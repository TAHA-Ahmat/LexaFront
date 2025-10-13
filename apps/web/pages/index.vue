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
const { t } = useI18n()

// SEO
useSeoMeta({
  title: t('seo.home.title'),
  description: t('seo.home.description'),
  ogTitle: t('seo.home.title'),
  ogDescription: t('seo.home.description'),
  ogImage: '/og-image.jpg',
  ogUrl: 'https://lexafric.com',
  twitterCard: 'summary_large_image'
})
</script>
