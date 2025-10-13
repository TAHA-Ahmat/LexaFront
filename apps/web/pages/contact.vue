<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">{{ $t('common.contact') }}</h1>

    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
        <SectionContactForm />
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-6">Nos coordonnées</h2>
        <div class="space-y-4">
          <p><strong>Email:</strong> contact@lexafric.com</p>
          <p><strong>Téléphone:</strong> +XXX XXX XXX XXX</p>
          <p><strong>Adresse:</strong> Adresse complète...</p>

          <!-- Placeholder pour WhatsApp -->
          <a
            href="https://wa.me/XXXXXXXXXX"
            target="_blank"
            class="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Contacter via WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact - Lexafric',
  description: 'Contactez-nous pour toute question',
  ogTitle: 'Contact - Lexafric'
})
</script>
