<template>
  <div class="skeleton-card" :class="[variant, sizeClass]">
    <!-- Image placeholder (si avec image) -->
    <div v-if="hasImage" class="skeleton-image"></div>

    <!-- Contenu -->
    <div class="skeleton-content">
      <!-- Titre -->
      <div class="skeleton-title" :style="{ width: titleWidth }"></div>

      <!-- Lignes de texte -->
      <div v-for="i in lines" :key="i" class="skeleton-line" :style="{ width: getLineWidth(i) }"></div>

      <!-- Bouton (optionnel) -->
      <div v-if="hasButton" class="skeleton-button"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'card' | 'list' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  hasImage?: boolean
  hasButton?: boolean
  lines?: number
  titleWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'card',
  size: 'md',
  hasImage: true,
  hasButton: true,
  lines: 3,
  titleWidth: '70%'
})

const sizeClass = computed(() => `skeleton-${props.size}`)

const getLineWidth = (index: number): string => {
  // Lignes de largeur variable pour plus de réalisme
  const widths = ['95%', '85%', '60%']
  return widths[(index - 1) % widths.length]
}
</script>

<style scoped>
/* Base skeleton card */
.skeleton-card {
  @apply rounded-2xl overflow-hidden;
  @apply bg-white dark:bg-gray-900;
  @apply border border-gray-100 dark:border-gray-800;
}

.skeleton-card.card {
  @apply p-0;
}

.skeleton-card.list {
  @apply flex items-start gap-4 p-4;
}

.skeleton-card.minimal {
  @apply border-0 bg-transparent;
}

/* Sizes */
.skeleton-sm {
  @apply text-sm;
}

.skeleton-md {
  @apply text-base;
}

.skeleton-lg {
  @apply text-lg;
}

/* Image placeholder */
.skeleton-image {
  @apply w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200;
  @apply dark:from-gray-800 dark:via-gray-700 dark:to-gray-800;
  animation: shimmer 2s infinite linear;
  background-size: 200% 100%;
}

.skeleton-card.list .skeleton-image {
  @apply w-24 h-24 rounded-lg flex-shrink-0;
}

/* Content */
.skeleton-content {
  @apply p-6 space-y-4;
}

.skeleton-card.list .skeleton-content {
  @apply p-0 flex-1;
}

.skeleton-card.minimal .skeleton-content {
  @apply p-0;
}

/* Title */
.skeleton-title {
  @apply h-6 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200;
  @apply dark:from-gray-800 dark:via-gray-700 dark:to-gray-800;
  animation: shimmer 2s infinite linear;
  background-size: 200% 100%;
}

/* Lines */
.skeleton-line {
  @apply h-4 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200;
  @apply dark:from-gray-800 dark:via-gray-700 dark:to-gray-800;
  animation: shimmer 2s infinite linear;
  background-size: 200% 100%;
}

/* Button */
.skeleton-button {
  @apply h-10 w-32 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200;
  @apply dark:from-gray-800 dark:via-gray-700 dark:to-gray-800;
  animation: shimmer 2s infinite linear;
  background-size: 200% 100%;
}

/* Animation shimmer */
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
  .skeleton-image,
  .skeleton-title,
  .skeleton-line,
  .skeleton-button {
    animation: none;
    @apply bg-gray-200 dark:bg-gray-800;
  }
}
</style>
