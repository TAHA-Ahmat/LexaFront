<template>
  <section class="py-16 bg-blue-600 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
      <p class="text-xl mb-8">Contactez-nous dès aujourd'hui pour discuter de votre projet</p>
      <NuxtLink to="/contact" class="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold">
        {{ $t('common.contact') }}
      </NuxtLink>
    </div>
  </section>
</template>
