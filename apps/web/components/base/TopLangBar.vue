<template>
  <div class="w-full bg-gray-900 text-gray-300">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-end gap-4">
      <button
        v-for="l in locales"
        :key="l.code"
        class="text-xs uppercase tracking-wide hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
        :aria-current="locale === l.code ? 'true' : 'false'"
        @click="setLocale(l.code)"
      >
        <span :class="locale === l.code ? 'text-white font-semibold' : ''">
          {{ l.code }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale, locales } = useI18n()
</script>
