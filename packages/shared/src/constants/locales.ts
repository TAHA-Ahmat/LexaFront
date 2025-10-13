import type { Locale, LocaleInfo } from '../types/locale'

export const SUPPORTED_LOCALES: Locale[] = ['fr', 'en', 'ar']

export const DEFAULT_LOCALE: Locale = 'fr'

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  fr: {
    code: 'fr',
    name: 'Français',
    dir: 'ltr'
  },
  en: {
    code: 'en',
    name: 'English',
    dir: 'ltr'
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl'
  }
}
