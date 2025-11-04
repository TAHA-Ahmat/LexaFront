<template>
  <div
    class="skeleton"
    :class="[shapeClass, animationClass]"
    :style="{ width, height }"
  ></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  width?: string
  height?: string
  shape?: 'rectangle' | 'circle' | 'rounded' | 'pill'
  animation?: 'shimmer' | 'pulse' | 'none'
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '1rem',
  shape: 'rectangle',
  animation: 'shimmer'
})

const shapeClass = computed(() => {
  const shapes = {
    rectangle: 'rounded-lg',
    circle: 'rounded-full',
    rounded: 'rounded-2xl',
    pill: 'rounded-full'
  }
  return shapes[props.shape]
})

const animationClass = computed(() => {
  if (props.animation === 'none') return ''
  return `skeleton-${props.animation}`
})
</script>

<style scoped>
.skeleton {
  @apply bg-gray-200 dark:bg-gray-800;
  @apply inline-block;
}

/* Shimmer animation (gradient qui se déplace) */
.skeleton-shimmer {
  @apply bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200;
  @apply dark:from-gray-800 dark:via-gray-700 dark:to-gray-800;
  animation: shimmer 2s infinite linear;
  background-size: 200% 100%;
}

/* Pulse animation (opacité qui change) */
.skeleton-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Accessibilité : réduire mouvement */
@media (prefers-reduced-motion: reduce) {
  .skeleton-shimmer,
  .skeleton-pulse {
    animation: none;
    @apply bg-gray-200 dark:bg-gray-800;
  }
}
</style>
