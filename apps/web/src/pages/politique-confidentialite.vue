<template>
  <NuxtLayout name="minimal">
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <h1 class="text-4xl font-bold mb-8">{{ $t('pages.privacy.title') }}</h1>

      <div class="prose max-w-none">
        <h2>{{ $t('pages.privacy.collection.title') }}</h2>
        <p>{{ $t('pages.privacy.collection.content') }}</p>

        <h2>{{ $t('pages.privacy.usage.title') }}</h2>
        <p>{{ $t('pages.privacy.usage.content') }}</p>

        <h2>{{ $t('pages.privacy.cookies.title') }}</h2>
        <p>{{ $t('pages.privacy.cookies.content') }}</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Politique de confidentialité - Lexafric',
  robots: 'noindex, nofollow'
})
</script>
