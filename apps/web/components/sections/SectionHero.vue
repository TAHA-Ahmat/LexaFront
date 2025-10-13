<template>
  <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold mb-6">{{ displayTitle }}</h1>
      <p class="text-xl mb-8">{{ displaySubtitle }}</p>
      <NuxtLink to="/contact" class="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold">
        {{ $t('common.contact') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Props {
  title?: string
  subtitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: ''
})

const displayTitle = computed(() => props.title || t('home.hero.title'))
const displaySubtitle = computed(() => props.subtitle || t('home.hero.subtitle'))
</script>
