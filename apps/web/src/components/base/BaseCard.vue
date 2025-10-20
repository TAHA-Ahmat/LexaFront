<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: boolean
  bordered?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  padding: 'md',
  shadow: true,
  bordered: false
})

const cardClasses = computed(() => {
  const base = 'bg-white rounded-lg'

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return [
    base,
    paddings[props.padding],
    props.shadow && 'shadow-md',
    props.bordered && 'border'
  ].filter(Boolean)
})
</script>
