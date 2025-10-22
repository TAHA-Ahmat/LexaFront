<template>
  <div>
    <!-- Hero Section Premium -->
    <section class="relative py-20 md:py-28 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
      <!-- Animated background -->
      <div class="absolute inset-0">
        <!-- Gradient orbs -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>
        <!-- Grid pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 40px 40px;"></div>
        </div>
      </div>

      <div class="relative container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center gap-2 text-sm text-blue-100">
            <li><NuxtLink :to="localePath('/')" class="hover:text-white transition-colors">{{ $t('common.home') }}</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></li>
            <li class="text-white font-medium">{{ $t('nav.contact') }}</li>
          </ol>
        </nav>

        <div class="max-w-4xl mx-auto text-center space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <span class="text-sm font-semibold text-white">{{ $t('pages.contact.badge') }}</span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {{ $t('pages.contact.title') }}
          </h1>

          <!-- Subtitle -->
          <p class="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            {{ $t('pages.contact.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content Premium -->
    <section class="relative py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
      <!-- Subtle background pattern -->
      <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 30px 30px;"></div>
      </div>

      <div class="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-5 gap-8 lg:gap-12">

            <!-- Contact Info - À GAUCHE (2 colonnes) -->
            <div class="lg:col-span-2 space-y-8">
              <!-- Section principale -->
              <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-200 dark:border-gray-800">
                <div class="mb-8">
                  <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {{ $t('pages.contact.info.title') }}
                  </h2>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {{ $t('pages.contact.info.description') }}
                  </p>
                </div>

                <div class="space-y-6">
                  <!-- Email -->
                  <div class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                    <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                        {{ $t('pages.contact.info.email') }}
                      </h3>
                      <a href="mailto:contact@lexafric.com" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition">
                        contact@lexafric.com
                      </a>
                    </div>
                  </div>

                  <!-- Phone -->
                  <div class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300">
                    <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                        {{ $t('pages.contact.info.phone') }}
                      </h3>
                      <a href="tel:+23522519166" class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition">
                        {{ $t('ui.phone') }}
                      </a>
                    </div>
                  </div>

                  <!-- Address -->
                  <div class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300">
                    <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                        {{ $t('pages.contact.info.address') }}
                      </h3>
                      <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {{ $t('pages.contact.info.addressValue') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- WhatsApp Premium Button -->
              <div class="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-2xl">
                <div class="flex items-center gap-4 mb-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-bold text-lg">{{ $t('pages.contact.info.whatsappTitle') }}</h3>
                    <p class="text-green-100 text-sm">{{ $t('pages.contact.info.whatsappText') }}</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/23522519166"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-3 w-full py-4 bg-white text-green-600 rounded-2xl font-bold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {{ $t('pages.contact.info.whatsapp') }}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>
              </div>

              <!-- Hours -->
              <div class="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-800">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                    {{ $t('pages.contact.info.hours') }}
                  </h3>
                </div>
                <div class="space-y-2 text-sm text-gray-600 dark:text-gray-400 pl-13">
                  <p class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                    {{ $t('pages.contact.info.weekdays') }}
                  </p>
                  <p class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-red-500 rounded-full"></span>
                    {{ $t('pages.contact.info.weekend') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Contact Form - À DROITE (3 colonnes) -->
            <div class="lg:col-span-3">
              <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-800">
                <div class="mb-10">
                  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    {{ $t('pages.contact.form.title') }}
                  </h2>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ $t('pages.contact.form.subtitle') }}
                  </p>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Name & Email (side by side on desktop) -->
                  <div class="grid md:grid-cols-2 gap-6">
                    <!-- Name -->
                    <div>
                      <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        {{ $t('pages.contact.form.name') }}
                      </label>
                      <input
                        v-model="form.name"
                        type="text"
                        required
                        class="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900 dark:text-white placeholder-gray-400"
                        :placeholder="$t('pages.contact.form.namePlaceholder')"
                      />
                    </div>

                    <!-- Email -->
                    <div>
                      <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        {{ $t('pages.contact.form.email') }}
                      </label>
                      <input
                        v-model="form.email"
                        type="email"
                        required
                        class="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900 dark:text-white placeholder-gray-400"
                        :placeholder="$t('pages.contact.form.emailPlaceholder')"
                      />
                    </div>
                  </div>

                  <!-- Subject -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {{ $t('pages.contact.form.subject') }}
                    </label>
                    <input
                      v-model="form.subject"
                      type="text"
                      required
                      class="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900 dark:text-white placeholder-gray-400"
                      :placeholder="$t('pages.contact.form.subjectPlaceholder')"
                    />
                  </div>

                  <!-- Message -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {{ $t('pages.contact.form.message') }}
                    </label>
                    <textarea
                      v-model="form.message"
                      rows="6"
                      required
                      class="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none text-gray-900 dark:text-white placeholder-gray-400"
                      :placeholder="$t('pages.contact.form.messagePlaceholder')"
                    ></textarea>
                  </div>

                  <!-- Submit Button Premium -->
                  <button
                    type="submit"
                    :disabled="loading"
                    class="group relative w-full py-5 px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <!-- Gradient overlay on hover -->
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <span v-if="!loading" class="relative flex items-center justify-center gap-3">
                      {{ $t('common.submit') }}
                      <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </span>
                    <span v-else class="relative flex items-center justify-center gap-3">
                      <svg class="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {{ $t('pages.contact.form.sending') }}
                    </span>
                  </button>

                  <!-- Success Message Premium -->
                  <div
                    v-if="submitted"
                    class="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-2xl"
                  >
                    <div class="flex items-start gap-4">
                      <div class="flex-shrink-0 w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-bold text-green-900 dark:text-green-100 mb-1">{{ $t('pages.contact.form.successTitle') }}</h4>
                        <p class="text-sm text-green-800 dark:text-green-200">{{ $t('pages.contact.form.success') }}</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// i18n
const localePath = useLocalePath()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  loading.value = true

  // Simulation d'envoi
  await new Promise(resolve => setTimeout(resolve, 1500))

  submitted.value = true
  loading.value = false

  // Reset form
  setTimeout(() => {
    form.value = { name: '', email: '', subject: '', message: '' }
    submitted.value = false
  }, 4000)
}

// SEO
useSeoMeta({
  title: 'Contact - Lexafric',
  description: 'Contactez LEXAFRIC pour toutes vos questions juridiques et fiscales. Notre équipe est à votre écoute pour vous accompagner.',
  ogTitle: 'Contact - Lexafric',
  ogDescription: 'Contactez LEXAFRIC pour toutes vos questions juridiques et fiscales'
})
</script>
