// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/image'
  ],

  // Configuration i18n (FR/EN/AR avec RTL)
  i18n: {
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        dir: 'ltr',
        file: 'fr.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        dir: 'ltr',
        file: 'en.json'
      },
      {
        code: 'ar',
        iso: 'ar',
        name: 'العربية',
        dir: 'rtl',
        file: 'ar.json'
      }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'locales'
  },

  // Configuration Nuxt Image (provider local)
  image: {
    provider: 'ipx',
    format: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // TypeScript strict mode
  typescript: {
    strict: true,
    typeCheck: false  // Désactivé temporairement pour résoudre TSConfckParseError
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
      defaultLocale: 'fr',
      enableAnalytics: process.env.ENABLE_ANALYTICS === 'true' || false
    }
  },

  // App config
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  // CSS global
  css: [],

  // Build configuration
  experimental: {
    payloadExtraction: false
  }
})
