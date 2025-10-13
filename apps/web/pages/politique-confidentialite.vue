<template>
  <NuxtLayout name="minimal">
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <h1 class="text-4xl font-bold mb-8">{{ $t('common.privacyPolicy') }}</h1>

      <div class="prose max-w-none">
        <h2>{{ $t('legal.privacy.collection.title') }}</h2>
        <p>{{ $t('legal.privacy.collection.content') }}</p>

        <h2>{{ $t('legal.privacy.usage.title') }}</h2>
        <p>{{ $t('legal.privacy.usage.content') }}</p>

        <h2>{{ $t('legal.privacy.cookies.title') }}</h2>
        <p>{{ $t('legal.privacy.cookies.content') }}</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('seo.privacy.title'),
  description: t('seo.privacy.description'),
  robots: 'noindex, nofollow'
})
</script>
