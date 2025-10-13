<template>
  <NuxtLayout name="minimal">
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <h1 class="text-4xl font-bold mb-8">{{ $t('common.legalNotice') }}</h1>

      <div class="prose max-w-none">
        <h2>{{ $t('legal.notice.editor.title') }}</h2>
        <p>{{ $t('legal.notice.editor.content') }}</p>

        <h2>{{ $t('legal.notice.hosting.title') }}</h2>
        <p>{{ $t('legal.notice.hosting.content') }}</p>

        <h2>{{ $t('legal.notice.property.title') }}</h2>
        <p>{{ $t('legal.notice.property.content') }}</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('seo.legal.title'),
  description: t('seo.legal.description'),
  robots: 'noindex, nofollow'
})
</script>
