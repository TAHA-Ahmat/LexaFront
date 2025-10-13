<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">{{ $t('common.about') }}</h1>
      <p class="text-xl text-gray-600 text-center">
        Cabinet d'expertise juridique et de conseil en Afrique
      </p>
    </div>

    <!-- Présentation -->
    <div class="max-w-4xl mx-auto mb-16">
      <div class="prose prose-lg max-w-none">
        <h2 class="text-3xl font-bold mb-6">Notre mission</h2>
        <p class="text-lg text-gray-700 mb-6">
          <strong>Lexafric</strong> est un cabinet spécialisé dans l'accompagnement juridique des entreprises et des particuliers en Afrique francophone.
          Nous offrons une expertise pointue dans les domaines du droit des affaires, du droit social et du conseil stratégique.
        </p>
        <p class="text-lg text-gray-700 mb-6">
          Notre approche combine rigueur juridique et compréhension fine des enjeux locaux, permettant à nos clients de naviguer
          sereinement dans un environnement réglementaire en constante évolution.
        </p>
      </div>
    </div>

    <!-- Valeurs -->
    <div class="max-w-6xl mx-auto mb-16">
      <h2 class="text-3xl font-bold mb-8 text-center">Nos valeurs</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center p-6">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Excellence</h3>
          <p class="text-gray-600">
            Nous garantissons un service juridique de haute qualité, fondé sur une expertise reconnue et une veille constante.
          </p>
        </div>

        <div class="text-center p-6">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Proximité</h3>
          <p class="text-gray-600">
            Nous cultivons une relation de confiance avec nos clients, basée sur l'écoute, la disponibilité et la réactivité.
          </p>
        </div>

        <div class="text-center p-6">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Engagement</h3>
          <p class="text-gray-600">
            Nous nous engageons pleinement dans la défense des intérêts de nos clients et la réussite de leurs projets.
          </p>
        </div>
      </div>
    </div>

    <!-- Équipe -->
    <SectionTeam />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'À propos de Lexafric - Cabinet juridique en Afrique',
  description: 'Lexafric, cabinet d\'expertise juridique et de conseil en Afrique francophone. Découvrez notre mission, nos valeurs et notre équipe.',
  ogTitle: 'À propos - Lexafric'
})
</script>
