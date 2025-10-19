<template>
  <div class="overflow-x-hidden">
    <!-- Hero Premium Full-Screen -->
    <SectionHeroPremium />

    <!-- Features Premium avec animations -->
    <SectionFeaturesPremium />

    <!-- Methodology Premium avec timeline -->
    <SectionMethodologyPremium />

    <!-- Values Premium immersive -->
    <SectionValuesPremium />

    <!-- Sections conservées optimisées -->
    <SectionPartners />
    <SectionPosts />
    <SectionNewsletter />

    <!-- CTA Premium impactant -->
    <SectionCTAPremium />
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
