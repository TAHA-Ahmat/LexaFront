import type { Locale } from '../types/locale'

/**
 * Formate une date selon la locale
 */
export function formatDate(date: Date | string, locale: Locale = 'fr'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  const localeMap: Record<Locale, string> = {
    fr: 'fr-FR',
    en: 'en-US',
    ar: 'ar-AR'
  }

  return dateObj.toLocaleDateString(localeMap[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
