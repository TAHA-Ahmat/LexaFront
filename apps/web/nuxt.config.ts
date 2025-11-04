// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Nouveaux chemins vers src/
  srcDir: 'src/',
  dir: {
    pages: 'pages',
    layouts: 'layouts',
    public: 'public',
    assets: 'assets'
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vite-pwa/nuxt'
  ],

  // Configuration PWA
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Lexafric - Consulting & Law Firm',
      short_name: 'Lexafric',
      description: 'Cabinet de conseil juridique, fiscal et social en Afrique centrale',
      theme_color: '#1e40af',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      lang: 'fr',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico,webp,avif}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1 an
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1 an
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 30 // 30 jours
            }
          }
        }
      ]
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },

  // Configuration Tailwind
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: false
  },

  // Configuration des composants
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  // Configuration i18n (FR/EN/AR avec RTL)
  i18n: {
    restructureDir: false,
    locales: [
      {
        code: 'fr',
        language: 'fr-FR',
        name: 'Français',
        dir: 'ltr',
        file: 'fr.json'
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        dir: 'ltr',
        file: 'en.json'
      },
      {
        code: 'ar',
        language: 'ar',
        name: 'العربية',
        dir: 'rtl',
        file: 'ar.json'
      }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'locales',
    // Configuration i18n v9 - Désactiver optimizeTranslationDirective
    bundle: {
      optimizeTranslationDirective: false
    }
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
    // Private keys (accessible uniquement côté serveur)
    openaiApiKey: process.env.OPENAI_API_KEY,

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
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1e40af' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  },

  // Build configuration
  experimental: {
    payloadExtraction: false
  },

  // Nitro configuration for Vercel
  nitro: {
    preset: 'vercel'
  }
})
