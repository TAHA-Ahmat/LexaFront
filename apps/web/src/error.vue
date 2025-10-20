<template>
  <NuxtLayout name="minimal">
    <div class="min-h-screen flex items-center justify-center px-4">
      <div class="text-center">
        <h1 class="text-6xl font-bold mb-4">{{ error.statusCode }}</h1>
        <p class="text-xl mb-8">{{ error.message }}</p>
        <NuxtLink to="/" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {{ $t('common.home') }}
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()
</script>
