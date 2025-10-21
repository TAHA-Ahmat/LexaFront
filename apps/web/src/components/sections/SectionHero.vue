<template>
  <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold mb-6">{{ title }}</h1>
      <p class="text-xl mb-8">{{ subtitle }}</p>
      <NuxtLink to="/contact" class="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold">
        {{ $t('common.contact') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Bienvenue chez Lexafric',
  subtitle: 'Votre partenaire pour des solutions innovantes'
})
</script>
