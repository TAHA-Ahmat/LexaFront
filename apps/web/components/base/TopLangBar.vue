<template>
  <div class="w-full bg-gray-900 text-gray-300">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-end gap-4">
      <NuxtLink
        v-for="l in locales"
        :key="l.code"
        :to="switchLocalePath(l.code)"
        class="text-xs uppercase tracking-wide hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
        :aria-current="locale === l.code ? 'true' : 'false'"
      >
        <span :class="locale === l.code ? 'text-white font-semibold' : ''">
          {{ l.code }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
