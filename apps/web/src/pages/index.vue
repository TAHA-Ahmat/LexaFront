<template>
  <div class="overflow-x-hidden">
    <!-- 1️⃣ QUI NOUS SOMMES -->
    <SectionHeroSimple />

    <!-- 2️⃣ CE QUE NOUS FAISONS -->
    <SectionServicesSimple />

    <!-- 3️⃣ COMMENT NOUS LE FAISONS -->
    <SectionApproach />

    <!-- 4️⃣ POURQUOI NOUS FAIRE CONFIANCE -->
    <SectionTrust />

    <!-- 5️⃣ AGISSEZ MAINTENANT -->
    <SectionCTASimple />
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
