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
    <!-- <SectionPosts /> Masqué temporairement - Section Actualités en cours de préparation -->
    <SectionNewsletter />

    <!-- CTA Premium impactant -->
    <SectionCTAPremium />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// SEO - Using useHead with computed to ensure i18n is loaded
useHead(() => ({
  title: t('pages.home.seo.title'),
  meta: [
    { name: 'description', content: t('pages.home.seo.description') },
    { property: 'og:title', content: t('pages.home.seo.title') },
    { property: 'og:description', content: t('pages.home.seo.description') },
    { property: 'og:image', content: '/og-image.jpg' },
    { property: 'og:url', content: 'https://lexafric.com' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
}))
</script>
