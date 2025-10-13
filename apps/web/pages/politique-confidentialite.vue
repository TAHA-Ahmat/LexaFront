<template>
  <NuxtLayout name="minimal">
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <h1 class="text-4xl font-bold mb-8">{{ $t('common.privacyPolicy') }}</h1>

      <div class="prose max-w-none">
        <h2>Collecte des données</h2>
        <p>Informations sur la collecte des données...</p>

        <h2>Utilisation des données</h2>
        <p>Comment nous utilisons vos données...</p>

        <h2>Cookies</h2>
        <p>Politique de cookies...</p>
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
