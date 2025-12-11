<template>
  <nav aria-label="Breadcrumb" class="py-4 md:py-6">
    <ol class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
      <li>
        <NuxtLink
          :to="localePath('/')"
          class="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {{ $t('breadcrumb.home') }}
        </NuxtLink>
      </li>

      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-2">
        <span class="text-gray-400 dark:text-gray-600">/</span>

        <NuxtLink
          v-if="item.to"
          :to="localePath(item.to)"
          class="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {{ item.label }}
        </NuxtLink>

        <span v-else class="text-gray-900 dark:text-white font-medium">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()

const localePath = useLocalePath()
</script>
