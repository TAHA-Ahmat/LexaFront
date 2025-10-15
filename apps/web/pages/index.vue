<template>
  <div>
    <SectionHeroSlider />
    <SectionFeatures />
    <SectionValues />
    <SectionMethodology />
    <SectionStats />
    <SectionPartners />
    <SectionPosts />
    <SectionNewsletter />
    <SectionCTA />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// SEO
useSeoMeta({
  title: t('pages.home.seo.title'),
  description: t('pages.home.seo.description'),
  ogTitle: t('pages.home.seo.title'),
  ogDescription: t('pages.home.seo.description'),
  ogImage: '/og-image.jpg',
  ogUrl: 'https://lexafric.com',
  twitterCard: 'summary_large_image'
})
</script>
