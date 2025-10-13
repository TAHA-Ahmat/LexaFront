<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">{{ $t('common.about') }}</h1>

    <div class="max-w-3xl mb-12">
      <p class="text-lg text-gray-700 mb-6">
        Présentation de Lexafric...
      </p>
    </div>

    <SectionTeam />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'À propos - Lexafric',
  description: 'En savoir plus sur Lexafric et notre équipe',
  ogTitle: 'À propos - Lexafric'
})
</script>
