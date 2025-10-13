<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">{{ $t('team.title') }}</h2>

      <div class="grid md:grid-cols-4 gap-8">
        <div v-for="(member, index) in teamMembers" :key="index" class="text-center">
          <div class="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
          <h3 class="text-xl font-bold mb-1">{{ $t(member.name) }}</h3>
          <p class="text-gray-600">{{ $t(member.role) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  { name: 'team.member1.name', role: 'team.member1.role' },
  { name: 'team.member2.name', role: 'team.member2.role' },
  { name: 'team.member3.name', role: 'team.member3.role' },
  { name: 'team.member4.name', role: 'team.member4.role' }
]
</script>
