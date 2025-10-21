<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Notre Équipe</h2>

      <div class="grid md:grid-cols-4 gap-8">
        <div v-for="member in teamMembers" :key="member.name" class="text-center">
          <div class="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
          <h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
          <p class="text-gray-600">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  { name: 'Membre 1', role: 'Rôle' },
  { name: 'Membre 2', role: 'Rôle' },
  { name: 'Membre 3', role: 'Rôle' },
  { name: 'Membre 4', role: 'Rôle' }
]
</script>
