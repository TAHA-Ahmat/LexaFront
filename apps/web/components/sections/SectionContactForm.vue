<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label class="block text-sm font-medium mb-2">{{ $t('form.labels.name') }}</label>
      <BaseInput v-model="form.name" type="text" required />
    </div>

    <div>
      <label class="block text-sm font-medium mb-2">{{ $t('form.labels.email') }}</label>
      <BaseInput v-model="form.email" type="email" required />
    </div>

    <div>
      <label class="block text-sm font-medium mb-2">{{ $t('form.labels.message') }}</label>
      <textarea
        v-model="form.message"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        rows="5"
        required
      ></textarea>
    </div>

    <BaseButton type="submit" :loading="loading">
      {{ $t('common.submit') }}
    </BaseButton>

    <p v-if="submitted" class="text-green-600">
      {{ $t('form.success') }}
    </p>
  </form>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const submitted = ref(false)

// Placeholder - pas d'envoi réel en Phase 1
const handleSubmit = async () => {
  loading.value = true

  // Simulation d'envoi
  await new Promise(resolve => setTimeout(resolve, 1000))

  submitted.value = true
  loading.value = false

  // Reset form
  setTimeout(() => {
    form.value = { name: '', email: '', message: '' }
    submitted.value = false
  }, 3000)
}
</script>
