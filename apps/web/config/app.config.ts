export default defineAppConfig({
  // Design tokens
  theme: {
    colors: {
      primary: '#2563eb', // blue-600
      secondary: '#4b5563', // gray-600
      accent: '#10b981', // green-500
      error: '#ef4444', // red-500
      success: '#22c55e', // green-500
      warning: '#f59e0b' // amber-500
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem'
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      full: '9999px'
    }
  },
  // Meta par défaut
  meta: {
    siteName: 'Lexafric',
    siteDescription: 'Site vitrine multilingue Lexafric',
    defaultLocale: 'fr'
  }
})
