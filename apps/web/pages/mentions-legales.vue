<template>
  <NuxtLayout name="minimal">
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <h1 class="text-4xl font-bold mb-8">{{ $t('common.legalNotice') }}</h1>

      <div class="prose max-w-none">
        <h2>Éditeur du site</h2>
        <p>Informations sur l'éditeur...</p>

        <h2>Hébergement</h2>
        <p>Informations sur l'hébergeur...</p>

        <h2>Propriété intellectuelle</h2>
        <p>Contenu légal...</p>
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
