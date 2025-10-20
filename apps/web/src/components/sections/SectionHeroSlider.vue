<template>
  <section class="relative w-full h-[600px] md:h-[700px] overflow-hidden">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      class="h-full"
    >
      <!-- Slide 1 -->
      <SwiperSlide>
        <div class="relative w-full h-full">
          <!-- Background Image -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700">
            <!-- Placeholder pour l'image de fond -->
            <div class="absolute inset-0 bg-black/40"></div>
          </div>

          <!-- Content -->
          <div class="relative h-full flex items-center justify-center">
            <div class="container mx-auto px-4 text-center text-white z-10">
              <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                {{ $t('pages.home.hero.slide1.title') }}
              </h1>
              <p class="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up animation-delay-200">
                {{ $t('pages.home.hero.slide1.subtitle') }}
              </p>
              <NuxtLink
                :to="localePath('/a-propos')"
                class="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 animate-fade-in-up animation-delay-400"
              >
                {{ $t('pages.home.hero.slide1.cta') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <!-- Slide 2 -->
      <SwiperSlide>
        <div class="relative w-full h-full">
          <!-- Background Image -->
          <div class="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-700">
            <!-- Placeholder pour l'image de fond -->
            <div class="absolute inset-0 bg-black/40"></div>
          </div>

          <!-- Content -->
          <div class="relative h-full flex items-center justify-center">
            <div class="container mx-auto px-4 text-center text-white z-10">
              <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                {{ $t('pages.home.hero.slide2.title') }}
              </h1>
              <p class="text-xl md:text-2xl mb-8 text-purple-100 animate-fade-in-up animation-delay-200">
                {{ $t('pages.home.hero.slide2.subtitle') }}
              </p>
              <NuxtLink
                :to="localePath('/contact')"
                class="inline-block bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 animate-fade-in-up animation-delay-400"
              >
                {{ $t('pages.home.hero.slide2.cta') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const localePath = useLocalePath()
const modules = [Navigation, Pagination, Autoplay]
</script>

<style scoped>
/* Animation keyframes */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

/* Swiper custom styles */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: white;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px;
  font-weight: bold;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: white;
  opacity: 0.5;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  width: 32px;
  border-radius: 6px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    width: 40px;
    height: 40px;
  }

  :deep(.swiper-button-next::after),
  :deep(.swiper-button-prev::after) {
    font-size: 16px;
  }
}
</style>
