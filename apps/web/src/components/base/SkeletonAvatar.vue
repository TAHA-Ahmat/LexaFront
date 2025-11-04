<template>
  <div class="skeleton-avatar-wrapper" :class="align">
    <div class="skeleton-avatar" :class="[shapeClass, sizeClass]"></div>
    <div v-if="withText" class="skeleton-avatar-text">
      <div class="skeleton-avatar-title"></div>
      <div v-if="withSubtitle" class="skeleton-avatar-subtitle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square' | 'rounded'
  withText?: boolean
  withSubtitle?: boolean
  align?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  shape: 'circle',
  withText: false,
  withSubtitle: false,
  align: 'horizontal'
})

const sizeClass = computed(() => {
  const sizes = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }
  return sizes[props.size]
})

const shapeClass = computed(() => {
  const shapes = {
    circle: 'rounded-full',
    square: 'rounded-none',
    rounded: 'rounded-xl'
  }
  return shapes[props.shape]
})
</script>

<style scoped>
.skeleton-avatar-wrapper {
  @apply flex items-center gap-3;
}

.skeleton-avatar-wrapper.vertical {
  @apply flex-col items-center;
}

.skeleton-avatar {
  @apply flex-shrink-0;
  @apply bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200;
  @apply dark:from-gray-800 dark:via-gray-700 dark:to-gray-800;
  animation: shimmer 2s infinite linear;
  background-size: 200% 100%;
}

.skeleton-avatar-text {
  @apply flex-1 space-y-2;
}

.skeleton-avatar-wrapper.vertical .skeleton-avatar-text {
  @apply text-center w-full;
}

.skeleton-avatar-title {
  @apply h-4 w-24 rounded-lg;
  @apply bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200;
  @apply dark:from-gray-800 dark:via-gray-700 dark:to-gray-800;
  animation: shimmer 2s infinite linear;
  background-size: 200% 100%;
}

.skeleton-avatar-wrapper.vertical .skeleton-avatar-title {
  @apply mx-auto;
}

.skeleton-avatar-subtitle {
  @apply h-3 w-16 rounded-lg;
  @apply bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200;
  @apply dark:from-gray-800 dark:via-gray-700 dark:to-gray-800;
  animation: shimmer 2s infinite linear;
  background-size: 200% 100%;
}

.skeleton-avatar-wrapper.vertical .skeleton-avatar-subtitle {
  @apply mx-auto;
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
  .skeleton-avatar,
  .skeleton-avatar-title,
  .skeleton-avatar-subtitle {
    animation: none;
    @apply bg-gray-200 dark:bg-gray-800;
  }
}
</style>
