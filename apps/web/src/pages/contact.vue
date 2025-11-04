<template>
  <div class="overflow-x-hidden">
    <!-- Business Card Section -->
    <section
      ref="cardSection"
      class="relative min-h-screen py-20 md:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-950 dark:via-blue-950 dark:to-gray-900 overflow-hidden"
      @mousemove="handleMouseMove"
    >
      <!-- Holographic background shimmer -->
      <div class="absolute inset-0 opacity-30 pointer-events-none">
        <div class="holographic-bg"></div>
      </div>

      <!-- Orbital particles -->
      <div class="particles-container">
        <div v-for="i in 20" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <!-- Main Business Card -->
        <div
          v-if="!cardsRevealed"
          class="main-card-container perspective-container"
          :style="{ '--mouse-x': mouseX + 'px', '--mouse-y': mouseY + 'px' }"
        >
          <div class="main-card glassmorphism">
            <!-- Spotlight effect -->
            <div class="spotlight"></div>

            <!-- Card content -->
            <div class="card-content">
              <!-- Logo -->
              <div class="logo-container mb-8">
                <img
                  src="/logo-lexafric.svg"
                  alt="Lexafric"
                  class="card-logo"
                />
              </div>

              <!-- Identity -->
              <div class="identity-section">
                <h2 class="company-name">LEXAFRIC</h2>
                <p class="company-tagline">{{ $t('pages.contact.tagline') || 'Expertise Juridique & Fiscale' }}</p>
                <div class="separator"></div>
                <p class="company-description">
                  {{ $t('pages.contact.description') || 'Cabinet de conseil en droit des affaires et fiscalité au Tchad' }}
                </p>
              </div>

              <!-- Magnetic CTA Button -->
              <button
                ref="ctaButton"
                @click="revealCards"
                class="cta-button magnetic-button"
                @mouseenter="magneticHover = true"
                @mouseleave="magneticHover = false"
              >
                <span class="button-content">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>{{ $t('pages.contact.revealButton') || 'Révéler les contacts' }}</span>
                </span>
                <div class="button-shine"></div>
              </button>

              <!-- Breathing indicator -->
              <div class="breathing-rings">
                <div class="ring ring-1"></div>
                <div class="ring ring-2"></div>
                <div class="ring ring-3"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Satellite Cards (revealed state) -->
        <div v-else class="satellite-cards-container">
          <!-- Back button -->
          <button @click="hideCards" class="back-button glassmorphism">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span>{{ $t('pages.contact.back') || 'Retour' }}</span>
          </button>

          <!-- Cards Grid -->
          <div class="cards-grid">
            <!-- Phone Card -->
            <div
              class="satellite-card"
              :class="{ 'flipped': flippedCards.phone }"
              @click="toggleFlip('phone')"
            >
              <div class="card-inner">
                <!-- Front -->
                <div class="card-face card-front glassmorphism">
                  <div class="icon-wrapper phone-icon">
                    <div class="pulse-ring"></div>
                    <div class="pulse-ring delay-1"></div>
                    <div class="pulse-ring delay-2"></div>
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <h3 class="card-title">{{ $t('pages.contact.info.phone') || 'Téléphone' }}</h3>
                  <p class="card-hint">{{ $t('pages.contact.clickToReveal') || 'Cliquez pour révéler' }}</p>
                </div>

                <!-- Back -->
                <div class="card-face card-back glassmorphism">
                  <div class="card-back-content">
                    <svg class="w-8 h-8 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-2">
                      {{ $t('pages.contact.info.phone') || 'Téléphone' }}
                    </h4>
                    <a
                      href="tel:+23522519166"
                      class="contact-link"
                      @click.stop="handlePhoneClick"
                    >
                      {{ $t('ui.phone') || '+235 22 51 91 66' }}
                    </a>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      {{ $t('pages.contact.clickToCall') || 'Cliquer pour appeler' }}
                    </p>
                  </div>
                  <div class="ripple-effect" v-if="ripplePhone"></div>
                </div>
              </div>
            </div>

            <!-- Email Card -->
            <div
              class="satellite-card"
              :class="{ 'flipped': flippedCards.email }"
              @click="toggleFlip('email')"
            >
              <div class="card-inner">
                <!-- Front -->
                <div class="card-face card-front glassmorphism">
                  <div class="icon-wrapper email-icon">
                    <svg class="w-12 h-12 envelope-animation" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 class="card-title">{{ $t('pages.contact.info.email') || 'Email' }}</h3>
                  <p class="card-hint">{{ $t('pages.contact.clickToReveal') || 'Cliquez pour révéler' }}</p>
                </div>

                <!-- Back -->
                <div class="card-face card-back glassmorphism">
                  <div class="card-back-content">
                    <svg class="w-8 h-8 mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-2">
                      {{ $t('pages.contact.info.email') || 'Email' }}
                    </h4>
                    <a
                      href="mailto:contact@lexafric.com"
                      class="contact-link"
                      @click.stop
                    >
                      contact@lexafric.com
                    </a>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      {{ $t('pages.contact.clickToEmail') || 'Cliquer pour envoyer un email' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Address Card -->
            <div
              class="satellite-card"
              :class="{ 'flipped': flippedCards.address }"
              @click="toggleFlip('address')"
            >
              <div class="card-inner">
                <!-- Front -->
                <div class="card-face card-front glassmorphism">
                  <div class="icon-wrapper address-icon">
                    <div class="bouncing-pin">
                      <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 class="card-title">{{ $t('pages.contact.info.address') || 'Adresse' }}</h3>
                  <p class="card-hint">{{ $t('pages.contact.clickToReveal') || 'Cliquez pour révéler' }}</p>
                </div>

                <!-- Back -->
                <div class="card-face card-back glassmorphism">
                  <div class="card-back-content">
                    <svg class="w-8 h-8 mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-2">
                      {{ $t('pages.contact.info.address') || 'Adresse' }}
                    </h4>
                    <a
                      :href="addressMapUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="contact-link text-center"
                      @click.stop
                    >
                      {{ $t('pages.contact.info.addressValue') || 'N\'Djamena, Tchad' }}
                    </a>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      {{ $t('pages.contact.clickToMap') || 'Cliquer pour ouvrir Google Maps' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Hours Card -->
            <div
              class="satellite-card"
              :class="{ 'flipped': flippedCards.hours }"
              @click="toggleFlip('hours')"
            >
              <div class="card-inner">
                <!-- Front -->
                <div class="card-face card-front glassmorphism">
                  <div class="icon-wrapper hours-icon">
                    <div class="clock-container">
                      <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" stroke-width="2"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v5l3 3"/>
                      </svg>
                      <div class="clock-hand hour-hand"></div>
                      <div class="clock-hand minute-hand"></div>
                    </div>
                  </div>
                  <h3 class="card-title">{{ $t('pages.contact.info.hours') || 'Horaires' }}</h3>
                  <p class="card-hint">{{ $t('pages.contact.clickToReveal') || 'Cliquez pour révéler' }}</p>
                </div>

                <!-- Back -->
                <div class="card-face card-back glassmorphism">
                  <div class="card-back-content">
                    <svg class="w-8 h-8 mb-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" stroke-width="2"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v5l3 3"/>
                    </svg>
                    <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-2">
                      {{ $t('pages.contact.info.hours') || 'Horaires' }}
                    </h4>
                    <div class="text-gray-800 dark:text-gray-200 font-medium space-y-1">
                      <p class="text-sm">{{ $t('pages.contact.info.weekdays') || 'Lun - Ven: 8h - 18h' }}</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('pages.contact.info.weekend') || 'Sam: 9h - 13h' }}</p>
                    </div>
                    <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <span :class="['status-badge', isOpen ? 'status-open' : 'status-closed']">
                        <span class="status-dot"></span>
                        {{ isOpen ? (($t('pages.contact.open') as string) || 'Ouvert') : (($t('pages.contact.closed') as string) || 'Fermé') }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- WhatsApp Floating Action -->
          <div class="whatsapp-fab">
            <a
              href="https://wa.me/23522519166"
              target="_blank"
              rel="noopener noreferrer"
              class="whatsapp-button glassmorphism"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>{{ $t('pages.contact.info.whatsapp') || 'WhatsApp' }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// i18n
const localePath = useLocalePath()

// Refs
const cardSection = ref<HTMLElement | null>(null)
const ctaButton = ref<HTMLButtonElement | null>(null)

// State
const cardsRevealed = ref(false)
const flippedCards = ref({
  phone: false,
  email: false,
  address: false,
  hours: false
})
const ripplePhone = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
const magneticHover = ref(false)

// Computed
const addressMapUrl = computed(() => {
  const address = 'Lexafric N\'Djamena Tchad'
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
})

const isOpen = computed(() => {
  // Tchad timezone: GMT+1
  const now = new Date()
  const tchadTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Ndjamena' }))
  const day = tchadTime.getDay()
  const hours = tchadTime.getHours()

  // Lun-Ven: 8h-18h, Sam: 9h-13h, Dim: fermé
  if (day === 0) return false // Dimanche
  if (day === 6) return hours >= 9 && hours < 13 // Samedi
  return hours >= 8 && hours < 18 // Lundi-Vendredi
})

// Methods
const handleMouseMove = (e: MouseEvent) => {
  if (!cardSection.value) return
  const rect = cardSection.value.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}

const revealCards = () => {
  cardsRevealed.value = true
}

const hideCards = () => {
  cardsRevealed.value = false
  // Reset flipped states
  flippedCards.value = {
    phone: false,
    email: false,
    address: false,
    hours: false
  }
}

const toggleFlip = (card: keyof typeof flippedCards.value) => {
  flippedCards.value[card] = !flippedCards.value[card]
}

const handlePhoneClick = () => {
  ripplePhone.value = true
  setTimeout(() => {
    ripplePhone.value = false
  }, 600)
}

const getParticleStyle = (index: number) => {
  const angle = (index / 20) * 360
  const distance = 300 + Math.random() * 200
  const duration = 10 + Math.random() * 20
  const delay = Math.random() * 5

  return {
    '--angle': `${angle}deg`,
    '--distance': `${distance}px`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  }
}

// No additional setup needed for business card

// SEO (préservé)
useSeoMeta({
  title: 'Contact - Lexafric',
  description: 'Contactez LEXAFRIC pour toutes vos questions juridiques et fiscales. Notre équipe est à votre écoute pour vous accompagner.',
  ogTitle: 'Contact - Lexafric',
  ogDescription: 'Contactez LEXAFRIC pour toutes vos questions juridiques et fiscales'
})
</script>

<style scoped>
/* ========================================
   HOLOGRAPHIC BACKGROUND
   ======================================== */
.holographic-bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(59, 130, 246, 0.1) 0%,
    rgba(147, 51, 234, 0.1) 25%,
    rgba(236, 72, 153, 0.1) 50%,
    rgba(59, 130, 246, 0.1) 75%,
    rgba(147, 51, 234, 0.1) 100%
  );
  background-size: 400% 400%;
  animation: holographic-shift 15s ease infinite;
}

@keyframes holographic-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* ========================================
   PARTICLES
   ======================================== */
.particles-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent);
  border-radius: 50%;
  animation: orbit linear infinite;
}

@keyframes orbit {
  0% {
    transform: rotate(var(--angle)) translateX(var(--distance)) rotate(calc(-1 * var(--angle)));
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: rotate(calc(var(--angle) + 360deg)) translateX(var(--distance)) rotate(calc(-1 * (var(--angle) + 360deg)));
    opacity: 0;
  }
}

/* ========================================
   MAIN BUSINESS CARD
   ======================================== */
.perspective-container {
  perspective: 2000px;
  max-width: 600px;
  margin: 0 auto;
}

.main-card-container {
  animation: card-arrival 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes card-arrival {
  0% {
    opacity: 0;
    transform: perspective(2000px) translateZ(-500px) rotateX(45deg) scale(0.3);
    filter: blur(30px);
  }
  60% {
    transform: perspective(2000px) translateZ(30px) rotateX(-5deg) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: perspective(2000px) translateZ(0) rotateX(0) scale(1);
    filter: blur(0);
  }
}

.main-card {
  position: relative;
  padding: 3rem 2rem;
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.main-card:hover {
  transform: translateY(-8px) scale(1.02);
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04),
    inset 0 1px 1px rgba(255, 255, 255, 0.5);
}

.dark .glassmorphism {
  background: rgba(17, 24, 39, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.05);
}

/* Spotlight effect */
.spotlight {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.1) 0%,
    transparent 70%
  );
  pointer-events: none;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  left: var(--mouse-x);
  top: var(--mouse-y);
  transform: translate(-50%, -50%);
}

.card-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

/* Logo */
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-logo {
  height: 120px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
  animation: logo-float 3s ease-in-out infinite;
}

@keyframes logo-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Identity */
.identity-section {
  margin-bottom: 2rem;
}

.company-name {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.company-tagline {
  font-size: 1.125rem;
  color: #4b5563;
  font-weight: 600;
  margin-bottom: 1rem;
}

.dark .company-tagline {
  color: #9ca3af;
}

.separator {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #3b82f6, transparent);
  margin: 1rem auto;
}

.company-description {
  font-size: 1rem;
  color: #6b7280;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.6;
}

.dark .company-description {
  color: #9ca3af;
}

/* CTA Button */
.cta-button {
  position: relative;
  margin: 2rem auto 0;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow:
    0 4px 15px rgba(59, 130, 246, 0.4),
    0 10px 30px rgba(59, 130, 246, 0.2);
}

.cta-button:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    0 8px 25px rgba(59, 130, 246, 0.5),
    0 15px 40px rgba(59, 130, 246, 0.3);
}

.cta-button:active {
  transform: translateY(-2px) scale(1.02);
}

.button-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.button-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  animation: shine 3s infinite;
  pointer-events: none;
}

@keyframes shine {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

/* Breathing rings */
.breathing-rings {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  pointer-events: none;
}

.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: breathe 3s ease-in-out infinite;
}

.ring-2 {
  animation-delay: 1s;
}

.ring-3 {
  animation-delay: 2s;
}

@keyframes breathe {
  0%, 100% {
    width: 20px;
    height: 20px;
    opacity: 0.3;
  }
  50% {
    width: 80px;
    height: 80px;
    opacity: 0;
  }
}

/* ========================================
   SATELLITE CARDS
   ======================================== */
.satellite-cards-container {
  animation: fade-in 0.6s ease both;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  margin-bottom: 2rem;
  color: #3b82f6;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
}

.back-button:hover {
  transform: translateX(-4px);
  color: #1e40af;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* Individual satellite card */
.satellite-card {
  perspective: 1500px;
  height: 320px;
  cursor: pointer;
  animation: card-entrance 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.satellite-card:nth-child(1) {
  animation-delay: 0.1s;
}

.satellite-card:nth-child(2) {
  animation-delay: 0.2s;
}

.satellite-card:nth-child(3) {
  animation-delay: 0.3s;
}

.satellite-card:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes card-entrance {
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.8);
  }
  60% {
    transform: translateY(-10px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
}

.satellite-card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.card-front {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.card-back {
  transform: rotateY(180deg);
}

/* Icon wrappers */
.icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  margin-bottom: 1.5rem;
  color: #3b82f6;
}

/* Phone icon - pulse rings */
.phone-icon .pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid #3b82f6;
  border-radius: 50%;
  animation: pulse 2s ease-out infinite;
}

.pulse-ring.delay-1 {
  animation-delay: 0.5s;
}

.pulse-ring.delay-2 {
  animation-delay: 1s;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* Email icon - envelope animation */
.email-icon {
  color: #10b981;
}

.envelope-animation {
  animation: envelope-bounce 2s ease-in-out infinite;
}

@keyframes envelope-bounce {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(-2deg); }
  75% { transform: translateY(-5px) rotate(2deg); }
}

/* Address icon - bouncing pin */
.address-icon {
  color: #ef4444;
}

.bouncing-pin {
  animation: pin-bounce 2s ease-in-out infinite;
}

@keyframes pin-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Hours icon - clock */
.hours-icon {
  color: #8b5cf6;
}

.clock-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clock-hand {
  position: absolute;
  background: #8b5cf6;
  transform-origin: bottom center;
  border-radius: 2px;
}

.hour-hand {
  width: 3px;
  height: 25px;
  animation: rotate-hour 60s linear infinite;
}

.minute-hand {
  width: 2px;
  height: 35px;
  animation: rotate-minute 5s linear infinite;
}

@keyframes rotate-hour {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes rotate-minute {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Card titles and hints */
.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.dark .card-title {
  color: #f3f4f6;
}

.card-hint {
  font-size: 0.875rem;
  color: #6b7280;
}

.dark .card-hint {
  color: #9ca3af;
}

/* Card back content */
.card-back-content {
  text-align: center;
  width: 100%;
}

.contact-link {
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  word-break: break-all;
}

.contact-link:hover {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  transform: scale(1.05);
}

.dark .contact-link {
  color: #f3f4f6;
}

.dark .contact-link:hover {
  color: #60a5fa;
  background: rgba(59, 130, 246, 0.2);
}

/* Ripple effect for phone */
.ripple-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.5);
  transform: translate(-50%, -50%);
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  to {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

/* Status badge for hours */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-open {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.status-closed {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* ========================================
   WHATSAPP FAB
   ======================================== */
.whatsapp-fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;
  animation: fab-entrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both;
}

@keyframes fab-entrance {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
}

.whatsapp-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: #25d366;
  color: white;
  font-weight: 600;
  border-radius: 9999px;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
}

.whatsapp-button:hover {
  transform: scale(1.1) translateY(-4px);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
}

@media (max-width: 767px) {
  .whatsapp-fab {
    bottom: 1rem;
    right: 1rem;
  }

  .whatsapp-button span {
    display: none;
  }

  .whatsapp-button {
    width: 56px;
    height: 56px;
    padding: 0;
    justify-content: center;
  }
}

/* ========================================
   RESPONSIVE ADJUSTMENTS
   ======================================== */
@media (max-width: 767px) {
  .main-card {
    padding: 2rem 1.5rem;
  }

  .card-logo {
    height: 80px;
  }

  .company-name {
    font-size: 2rem;
  }

  .company-tagline {
    font-size: 1rem;
  }

  .company-description {
    font-size: 0.875rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 0.875rem 2rem;
  }

  .satellite-card {
    height: 280px;
  }

  .icon-wrapper {
    width: 100px;
    height: 100px;
  }

  .icon-wrapper svg {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .cards-grid {
    max-width: 700px;
  }
}
</style>
