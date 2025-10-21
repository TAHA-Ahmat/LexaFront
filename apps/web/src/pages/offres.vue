<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-center mb-4">{{ $t('nav.offers') }}</h1>
    <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
      Découvrez nos services et solutions adaptés à vos besoins juridiques
    </p>

    <!-- Section Services -->
    <section id="services" class="mb-20 scroll-mt-24">
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-4">Services</h2>
        <p class="text-gray-600 mb-8">Prestations juridiques ponctuelles et conseil expert</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-3">Conseil juridique</h3>
          <p class="text-gray-600">Accompagnement et conseil personnalisé pour tous vos besoins juridiques.</p>
        </div>
        <div class="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-3">Rédaction de contrats</h3>
          <p class="text-gray-600">Rédaction et révision de tous types de contrats commerciaux et civils.</p>
        </div>
        <div class="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-3">Représentation légale</h3>
          <p class="text-gray-600">Défense de vos intérêts devant les juridictions compétentes.</p>
        </div>
      </div>
    </section>

    <!-- Section Solutions -->
    <section id="solutions" class="scroll-mt-24">
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-4">Solutions</h2>
        <p class="text-gray-600 mb-8">Accompagnements packagés et solutions complètes sur mesure</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-8 border-2 border-blue-600 rounded-lg hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-3">Accompagnement création d'entreprise</h3>
          <p class="text-gray-600 mb-4">Solution complète pour lancer votre activité en toute sérénité : choix de structure, rédaction de statuts, formalités administratives.</p>
          <ul class="text-sm text-gray-500 space-y-2">
            <li>✓ Conseil sur la forme juridique</li>
            <li>✓ Rédaction des statuts</li>
            <li>✓ Accompagnement administratif</li>
          </ul>
        </div>
        <div class="p-8 border-2 border-blue-600 rounded-lg hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-3">Gestion juridique externalisée</h3>
          <p class="text-gray-600 mb-4">Déléguez la gestion juridique de votre entreprise à nos experts : veille réglementaire, contrats, conformité.</p>
          <ul class="text-sm text-gray-500 space-y-2">
            <li>✓ Veille juridique continue</li>
            <li>✓ Gestion des contrats</li>
            <li>✓ Conformité réglementaire</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Nos offres - Services et Solutions juridiques | Lexafric',
  description: 'Découvrez nos services juridiques ponctuels et nos solutions d\'accompagnement complètes adaptées à vos besoins',
  ogTitle: 'Nos offres - Lexafric'
})
</script>
