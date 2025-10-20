<template>
  <NuxtLayout name="minimal">
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <h1 class="text-4xl font-bold mb-8">{{ $t('pages.legal.title') }}</h1>

      <div class="prose max-w-none">
        <h2>{{ $t('pages.legal.editor.title') }}</h2>
        <p>{{ $t('pages.legal.editor.content') }}</p>

        <h2>{{ $t('pages.legal.hosting.title') }}</h2>
        <p>{{ $t('pages.legal.hosting.content') }}</p>

        <h2>{{ $t('pages.legal.intellectual.title') }}</h2>
        <p>{{ $t('pages.legal.intellectual.content') }}</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Mentions légales - Lexafric',
  robots: 'noindex, nofollow'
})
</script>
