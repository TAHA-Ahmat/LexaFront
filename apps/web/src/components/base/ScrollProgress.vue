<template>
  <div
    v-if="isVisible"
    class="scroll-progress-wrapper"
    :class="position"
  >
    <div
      ref="progressBar"
      class="scroll-progress-bar"
      :style="progressStyle"
    >
      <div
        v-if="showGradient"
        class="scroll-progress-gradient"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

interface Props {
  position?: 'top' | 'bottom' | 'left' | 'right'
  height?: string
  topOffset?: string
  color?: string
  backgroundColor?: string
  showGradient?: boolean
  smoothness?: number
  hideOnTop?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  height: '3px',
  topOffset: '0px',
  color: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
  backgroundColor: 'transparent',
  showGradient: true,
  smoothness: 0.3,
  hideOnTop: true
})

const progressBar = ref<HTMLElement | null>(null)
const scrollProgress = ref(0)
const isVisible = ref(!props.hideOnTop)

const progressStyle = computed(() => {
  const isHorizontal = props.position === 'top' || props.position === 'bottom'

  return {
    [isHorizontal ? 'width' : 'height']: `${scrollProgress.value}%`,
    background: props.color,
    backgroundColor: props.backgroundColor
  }
})

const updateProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY || document.documentElement.scrollTop

  // Calculer le pourcentage de scroll
  const totalScroll = documentHeight - windowHeight
  const currentProgress = (scrollTop / totalScroll) * 100

  // Animer le changement de progression
  gsap.to(scrollProgress, {
    value: Math.min(Math.max(currentProgress, 0), 100),
    duration: props.smoothness,
    ease: 'power2.out'
  })

  // Gérer la visibilité
  if (props.hideOnTop) {
    isVisible.value = scrollTop > 100
  }
}

let rafId: number | null = null

const handleScroll = () => {
  if (rafId) {
    cancelAnimationFrame(rafId)
  }

  rafId = requestAnimationFrame(updateProgress)
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', updateProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateProgress)

  if (rafId) {
    cancelAnimationFrame(rafId)
  }
})
</script>

<style scoped>
.scroll-progress-wrapper {
  position: relative;
  pointer-events: none;
  width: 100%;
}

.scroll-progress-wrapper.top {
  height: v-bind(height);
}

.scroll-progress-wrapper.bottom {
  height: v-bind(height);
}

.scroll-progress-wrapper.left {
  width: v-bind(height);
}

.scroll-progress-wrapper.right {
  width: v-bind(height);
}

.scroll-progress-bar {
  position: relative;
  height: 100%;
  width: 0;
  transition: opacity 0.3s ease;
  will-change: width, height;
}

.scroll-progress-wrapper.left .scroll-progress-bar,
.scroll-progress-wrapper.right .scroll-progress-bar {
  width: 100%;
  height: 0;
}

.scroll-progress-gradient {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Support pour prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .scroll-progress-bar {
    transition: none !important;
  }

  .scroll-progress-gradient {
    animation: none !important;
  }
}
</style>
