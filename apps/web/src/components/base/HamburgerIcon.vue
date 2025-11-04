<template>
  <button
    ref="buttonRef"
    class="hamburger-button"
    :class="{ 'is-active': isOpen }"
    :aria-label="isOpen ? 'Close menu' : 'Open menu'"
    :aria-expanded="isOpen"
    @click="handleClick"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { gsap } from 'gsap'

interface Props {
  modelValue?: boolean
  color?: string
  activeColor?: string
  width?: string
  height?: string
  thickness?: string
  gap?: string
  animationType?: 'default' | 'elastic' | 'spring' | 'spin'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  color: 'currentColor',
  activeColor: 'currentColor',
  width: '24px',
  height: '20px',
  thickness: '2px',
  gap: '6px',
  animationType: 'elastic'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'toggle': [value: boolean]
}>()

const buttonRef = ref<HTMLElement | null>(null)
const isOpen = ref(props.modelValue)

const handleClick = () => {
  isOpen.value = !isOpen.value
  emit('update:modelValue', isOpen.value)
  emit('toggle', isOpen.value)
}

const animate = (open: boolean) => {
  if (!buttonRef.value) return

  const lines = buttonRef.value.querySelectorAll('.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after')
  const duration = 0.6
  const ease = props.animationType === 'elastic'
    ? 'elastic.out(1, 0.6)'
    : props.animationType === 'spring'
    ? 'back.out(1.7)'
    : props.animationType === 'spin'
    ? 'power2.inOut'
    : 'power3.out'

  if (open) {
    // Animer vers X
    const timeline = gsap.timeline()

    switch (props.animationType) {
      case 'elastic':
      case 'spring':
        timeline
          .to(buttonRef.value.querySelector('.hamburger-inner::before'), {
            y: 0,
            duration: duration * 0.6,
            ease
          }, 0)
          .to(buttonRef.value.querySelector('.hamburger-inner::after'), {
            y: 0,
            duration: duration * 0.6,
            ease
          }, 0)
          .to(buttonRef.value.querySelector('.hamburger-inner'), {
            rotation: 45,
            duration: duration,
            ease
          }, duration * 0.3)
          .to(buttonRef.value.querySelector('.hamburger-inner::before'), {
            rotation: 90,
            duration: duration,
            ease
          }, duration * 0.3)
          .to(buttonRef.value.querySelector('.hamburger-inner::after'), {
            opacity: 0,
            duration: duration * 0.3,
            ease: 'power2.out'
          }, 0)
        break

      case 'spin':
        timeline
          .to(buttonRef.value, {
            rotation: 180,
            duration: duration,
            ease
          }, 0)
          .to(buttonRef.value.querySelector('.hamburger-inner::before'), {
            y: 0,
            rotation: 0,
            duration: duration * 0.5,
            ease
          }, 0)
          .to(buttonRef.value.querySelector('.hamburger-inner::after'), {
            y: 0,
            duration: duration * 0.5,
            ease
          }, 0)
          .to(buttonRef.value.querySelector('.hamburger-inner'), {
            rotation: 45,
            duration: duration * 0.7,
            ease
          }, duration * 0.3)
          .to(buttonRef.value.querySelector('.hamburger-inner::before'), {
            rotation: 90,
            duration: duration * 0.7,
            ease
          }, duration * 0.3)
          .to(buttonRef.value.querySelector('.hamburger-inner::after'), {
            opacity: 0,
            duration: duration * 0.3
          }, 0)
        break

      default:
        timeline
          .to(buttonRef.value.querySelector('.hamburger-inner::before'), {
            y: 0,
            duration: duration * 0.5,
            ease
          }, 0)
          .to(buttonRef.value.querySelector('.hamburger-inner::after'), {
            y: 0,
            duration: duration * 0.5,
            ease
          }, 0)
          .to(buttonRef.value.querySelector('.hamburger-inner'), {
            rotation: 45,
            duration: duration * 0.8,
            ease
          }, duration * 0.2)
          .to(buttonRef.value.querySelector('.hamburger-inner::before'), {
            rotation: 90,
            duration: duration * 0.8,
            ease
          }, duration * 0.2)
          .to(buttonRef.value.querySelector('.hamburger-inner::after'), {
            opacity: 0,
            duration: duration * 0.2
          }, 0)
    }
  } else {
    // Animer vers hamburger
    const timeline = gsap.timeline()

    if (props.animationType === 'spin') {
      timeline.to(buttonRef.value, {
        rotation: 0,
        duration: duration,
        ease
      }, 0)
    }

    timeline
      .to(buttonRef.value.querySelector('.hamburger-inner'), {
        rotation: 0,
        duration: duration,
        ease
      }, 0)
      .to(buttonRef.value.querySelector('.hamburger-inner::before'), {
        y: `calc(-1 * (${props.gap} + ${props.thickness}))`,
        rotation: 0,
        duration: duration,
        ease
      }, 0)
      .to(buttonRef.value.querySelector('.hamburger-inner::after'), {
        y: `calc(${props.gap} + ${props.thickness})`,
        opacity: 1,
        duration: duration,
        ease
      }, 0)
  }
}

watch(() => props.modelValue, (newVal) => {
  isOpen.value = newVal
  animate(newVal)
})

watch(isOpen, (newVal) => {
  animate(newVal)
})

onMounted(() => {
  if (isOpen.value) {
    // Appliquer immédiatement l'état ouvert sans animation
    if (buttonRef.value) {
      gsap.set(buttonRef.value.querySelector('.hamburger-inner'), { rotation: 45 })
      gsap.set(buttonRef.value.querySelector('.hamburger-inner::before'), { y: 0, rotation: 90 })
      gsap.set(buttonRef.value.querySelector('.hamburger-inner::after'), { y: 0, opacity: 0 })
    }
  }
})
</script>

<style scoped>
.hamburger-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
  -webkit-tap-highlight-color: transparent;
}

.hamburger-button:hover {
  opacity: 0.8;
}

.hamburger-button:active {
  opacity: 0.6;
}

.hamburger-box {
  position: relative;
  display: inline-block;
  width: v-bind(width);
  height: v-bind(height);
}

.hamburger-inner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: v-bind(thickness);
  background-color: v-bind(color);
  border-radius: calc(v-bind(thickness) / 2);
  transform: translateY(-50%);
  transform-origin: center;
  will-change: transform;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: v-bind(thickness);
  background-color: v-bind(color);
  border-radius: calc(v-bind(thickness) / 2);
  transform-origin: center;
  will-change: transform, opacity;
}

.hamburger-inner::before {
  top: 0;
  transform: translateY(calc(-1 * (v-bind(gap) + v-bind(thickness))));
}

.hamburger-inner::after {
  bottom: 0;
  transform: translateY(calc(v-bind(gap) + v-bind(thickness)));
}

.hamburger-button.is-active .hamburger-inner,
.hamburger-button.is-active .hamburger-inner::before,
.hamburger-button.is-active .hamburger-inner::after {
  background-color: v-bind(activeColor);
}

/* Support pour prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .hamburger-button,
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    transition: none !important;
    animation: none !important;
  }
}
</style>
