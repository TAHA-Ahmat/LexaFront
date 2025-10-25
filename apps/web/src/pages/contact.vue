<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section avec réseau de lignes connectées -->
    <section class="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <!-- Network canvas -->
      <canvas ref="networkCanvas" class="absolute inset-0 w-full h-full"></canvas>

      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto text-center space-y-6">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {{ $t('pages.contact.title') }}
          </h1>

          <p class="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {{ $t('pages.contact.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content Minimaliste -->
    <section class="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16">
            <!-- Contact Info -->
            <div class="space-y-12">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  {{ $t('pages.contact.info.title') }}
                </h2>

                <div class="space-y-8">
                  <!-- Email -->
                  <div>
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      {{ $t('pages.contact.info.email') }}
                    </h3>
                    <a href="mailto:contact@lexafric.com" class="text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
                      contact@lexafric.com
                    </a>
                  </div>

                  <!-- Phone -->
                  <div>
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      {{ $t('pages.contact.info.phone') }}
                    </h3>
                    <a href="tel:+23522519166" class="text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
                      {{ $t('ui.phone') }}
                    </a>
                  </div>

                  <!-- Address -->
                  <div>
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      {{ $t('pages.contact.info.address') }}
                    </h3>
                    <p class="text-xl text-gray-900 dark:text-white">
                      {{ $t('pages.contact.info.addressValue') }}
                    </p>
                  </div>

                  <!-- Hours -->
                  <div>
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      {{ $t('pages.contact.info.hours') }}
                    </h3>
                    <div class="space-y-1 text-gray-900 dark:text-white">
                      <p>{{ $t('pages.contact.info.weekdays') }}</p>
                      <p class="text-gray-600 dark:text-gray-400">{{ $t('pages.contact.info.weekend') }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- WhatsApp -->
              <div class="pt-8 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="https://wa.me/23522519166"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
                >
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {{ $t('pages.contact.info.whatsapp') }}
                </a>
              </div>
            </div>

            <!-- Contact Form -->
            <div>
              <div class="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {{ $t('pages.contact.form.title') }}
                </h2>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Name -->
                  <div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      {{ $t('pages.contact.form.name') }}
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition text-gray-900 dark:text-white"
                      :placeholder="$t('pages.contact.form.namePlaceholder')"
                    />
                  </div>

                  <!-- Email -->
                  <div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      {{ $t('pages.contact.form.email') }}
                    </label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition text-gray-900 dark:text-white"
                      :placeholder="$t('pages.contact.form.emailPlaceholder')"
                    />
                  </div>

                  <!-- Subject -->
                  <div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      {{ $t('pages.contact.form.subject') }}
                    </label>
                    <input
                      v-model="form.subject"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition text-gray-900 dark:text-white"
                      :placeholder="$t('pages.contact.form.subjectPlaceholder')"
                    />
                  </div>

                  <!-- Message -->
                  <div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      {{ $t('pages.contact.form.message') }}
                    </label>
                    <textarea
                      v-model="form.message"
                      rows="5"
                      required
                      class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition resize-none text-gray-900 dark:text-white"
                      :placeholder="$t('pages.contact.form.messagePlaceholder')"
                    ></textarea>
                  </div>

                  <!-- Submit Button -->
                  <button
                    type="submit"
                    :disabled="loading"
                    class="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="!loading" class="flex items-center justify-center gap-2">
                      {{ $t('common.submit') }}
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </span>
                    <span v-else class="flex items-center justify-center gap-2">
                      <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {{ $t('pages.contact.form.sending') }}
                    </span>
                  </button>

                  <!-- Success Message -->
                  <div v-if="submitted" class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p class="text-green-800 dark:text-green-200 font-medium">
                      {{ $t('pages.contact.form.success') }}
                    </p>
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

// Network animation
const networkCanvas = ref<HTMLCanvasElement | null>(null)

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

onMounted(() => {
  const canvas = networkCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Set canvas size
  const resizeCanvas = () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  // Create nodes
  const nodes: Node[] = []
  const nodeCount = 40

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    })
  }

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update and draw nodes
    nodes.forEach(node => {
      // Update position
      node.x += node.vx
      node.y += node.vy

      // Bounce off edges
      if (node.x < 0 || node.x > canvas.width) node.vx *= -1
      if (node.y < 0 || node.y > canvas.height) node.vy *= -1

      // Draw node
      ctx.beginPath()
      ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(147, 197, 253, 0.5)'
      ctx.fill()
    })

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(nodes[j].x, nodes[j].y)
          ctx.strokeStyle = `rgba(147, 197, 253, ${0.2 * (1 - distance / 150)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }

    requestAnimationFrame(animate)
  }

  animate()

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas)
  })
})

// SEO
useSeoMeta({
  title: 'Contact - Lexafric',
  description: 'Contactez LEXAFRIC pour toutes vos questions juridiques et fiscales. Notre équipe est à votre écoute pour vous accompagner.',
  ogTitle: 'Contact - Lexafric',
  ogDescription: 'Contactez LEXAFRIC pour toutes vos questions juridiques et fiscales'
})
</script>
