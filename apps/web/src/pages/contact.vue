<template>
  <div>
    <!-- Hero Section Soft -->
    <section class="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <li><NuxtLink :to="localePath('/')" class="hover:text-gray-700 dark:hover:text-gray-300">{{ $t('common.home') }}</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg></li>
            <li class="text-gray-900 dark:text-white font-medium">{{ $t('nav.contact') }}</li>
          </ol>
        </nav>

        <div class="max-w-3xl mx-auto text-center space-y-4">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white tracking-tight">
            {{ $t('pages.contact.title') }}
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 font-light">
            {{ $t('pages.contact.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-12 md:py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">

            <!-- Contact Form -->
            <div class="order-2 lg:order-1">
              <div class="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-10">
                <h2 class="text-2xl font-light text-gray-900 dark:text-white mb-8">
                  {{ $t('pages.contact.form.title') }}
                </h2>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Name -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {{ $t('pages.contact.form.name') }}
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:border-transparent transition text-gray-900 dark:text-white"
                      :placeholder="$t('pages.contact.form.namePlaceholder')"
                    />
                  </div>

                  <!-- Email -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {{ $t('pages.contact.form.email') }}
                    </label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:border-transparent transition text-gray-900 dark:text-white"
                      :placeholder="$t('pages.contact.form.emailPlaceholder')"
                    />
                  </div>

                  <!-- Subject -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {{ $t('pages.contact.form.subject') }}
                    </label>
                    <input
                      v-model="form.subject"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:border-transparent transition text-gray-900 dark:text-white"
                      :placeholder="$t('pages.contact.form.subjectPlaceholder')"
                    />
                  </div>

                  <!-- Message -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {{ $t('pages.contact.form.message') }}
                    </label>
                    <textarea
                      v-model="form.message"
                      rows="5"
                      required
                      class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:border-transparent transition resize-none text-gray-900 dark:text-white"
                      :placeholder="$t('pages.contact.form.messagePlaceholder')"
                    ></textarea>
                  </div>

                  <!-- Submit Button -->
                  <button
                    type="submit"
                    :disabled="loading"
                    class="w-full py-3.5 px-6 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="!loading">{{ $t('common.submit') }}</span>
                    <span v-else class="flex items-center justify-center gap-2">
                      <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {{ $t('pages.contact.form.sending') }}
                    </span>
                  </button>

                  <!-- Success Message -->
                  <div
                    v-if="submitted"
                    class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-800 dark:text-green-200 text-sm"
                  >
                    {{ $t('pages.contact.form.success') }}
                  </div>
                </form>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="order-1 lg:order-2 space-y-8">
              <div>
                <h2 class="text-2xl font-light text-gray-900 dark:text-white mb-6">
                  {{ $t('pages.contact.info.title') }}
                </h2>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ $t('pages.contact.info.description') }}
                </p>
              </div>

              <div class="space-y-6">
                <!-- Email -->
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      {{ $t('pages.contact.info.email') }}
                    </h3>
                    <a href="mailto:contact@lexafric.com" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                      contact@lexafric.com
                    </a>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      {{ $t('pages.contact.info.phone') }}
                    </h3>
                    <a href="tel:+23522519166" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                      {{ $t('ui.phone') }}
                    </a>
                  </div>
                </div>

                <!-- Address -->
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      {{ $t('pages.contact.info.address') }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      {{ $t('pages.contact.info.addressValue') }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- WhatsApp Button -->
              <div class="pt-6">
                <a
                  href="https://wa.me/23522519166"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-3 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition shadow-sm hover:shadow-md"
                >
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {{ $t('pages.contact.info.whatsapp') }}
                </a>
              </div>

              <!-- Hours -->
              <div class="pt-6 border-t border-gray-200 dark:border-gray-800">
                <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  {{ $t('pages.contact.info.hours') }}
                </h3>
                <div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>{{ $t('pages.contact.info.weekdays') }}</p>
                  <p>{{ $t('pages.contact.info.weekend') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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
