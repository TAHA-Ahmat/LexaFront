<template>
  <div class="skeleton-text-wrapper" :class="align">
    <div
      v-for="i in lines"
      :key="i"
      class="skeleton-text-line"
      :class="[sizeClass, { 'last-line': i === lines && variant === 'paragraph' }]"
      :style="{ width: getWidth(i) }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  lines?: number
  variant?: 'paragraph' | 'heading' | 'uniform'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  align?: 'left' | 'center' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  lines: 3,
  variant: 'paragraph',
  size: 'md',
  align: 'left'
})

const sizeClass = computed(() => {
  const sizes = {
    sm: 'h-3',
    md: 'h-4',
    lg: 'h-5',
    xl: 'h-6'
  }
  return sizes[props.size]
})

const getWidth = (index: number): string => {
  if (props.variant === 'uniform') {
    return '100%'
  }

  if (props.variant === 'heading') {
    return index === 1 ? '70%' : '50%'
  }

  // Paragraph: dernière ligne plus courte
  if (index === props.lines) {
    return '60%'
  }

  // Lignes variées pour plus de réalisme
  const widths = ['100%', '95%', '98%', '92%']
  return widths[(index - 1) % widths.length]
}
</script>

<style scoped>
.skeleton-text-wrapper {
  @apply space-y-3;
}

.skeleton-text-wrapper.center {
  @apply flex flex-col items-center;
}

.skeleton-text-wrapper.right {
  @apply flex flex-col items-end;
}

.skeleton-text-line {
  @apply rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200;
  @apply dark:from-gray-800 dark:via-gray-700 dark:to-gray-800;
  animation: shimmer 2s infinite linear;
  background-size: 200% 100%;
}

.skeleton-text-line.last-line {
  @apply mb-0;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Accessibilité : réduire mouvement */
@media (prefers-reduced-motion: reduce) {
  .skeleton-text-line {
    animation: none;
    @apply bg-gray-200 dark:bg-gray-800;
  }
}
</style>
