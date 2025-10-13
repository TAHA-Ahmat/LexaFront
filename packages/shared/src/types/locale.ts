export type Locale = 'fr' | 'en' | 'ar'

export interface LocaleInfo {
  code: Locale
  name: string
  dir: 'ltr' | 'rtl'
}
