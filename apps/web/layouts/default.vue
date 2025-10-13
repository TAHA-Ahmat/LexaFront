<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-950">
    <TopLangBar />
    <NavBar />

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import TopLangBar from '~/components/base/TopLangBar.vue'
import NavBar from '~/components/base/NavBar.vue'
import Footer from '~/components/base/Footer.vue'
</script>
