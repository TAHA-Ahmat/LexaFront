import type { Locale } from './locale'

export interface Publication {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  locale: Locale
  publishedAt: Date
  updatedAt: Date
  author: string
  category?: string
  tags?: string[]
  coverImage?: string
}
