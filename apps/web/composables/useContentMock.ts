import type { Publication } from '@lexafric/shared'

/**
 * Composable pour gérer le contenu statique/mock (Phase 1)
 * À remplacer par des appels API en Phase 2
 */
export const useContentMock = () => {
  // Mock publications
  const publications = ref<Publication[]>([
    {
      id: '1',
      title: 'Article de démonstration 1',
      slug: 'article-demo-1',
      excerpt: 'Ceci est un extrait de l\'article de démonstration...',
      content: 'Contenu complet de l\'article...',
      locale: 'fr',
      publishedAt: new Date('2025-01-15'),
      updatedAt: new Date('2025-01-15'),
      author: 'Auteur 1',
      category: 'Actualités',
      tags: ['tag1', 'tag2']
    },
    {
      id: '2',
      title: 'Article de démonstration 2',
      slug: 'article-demo-2',
      excerpt: 'Un autre extrait intéressant...',
      content: 'Contenu complet de l\'article 2...',
      locale: 'fr',
      publishedAt: new Date('2025-01-10'),
      updatedAt: new Date('2025-01-10'),
      author: 'Auteur 2',
      category: 'Technologie',
      tags: ['tech', 'innovation']
    },
    {
      id: '3',
      title: 'Article de démonstration 3',
      slug: 'article-demo-3',
      excerpt: 'Troisième article de test...',
      content: 'Contenu complet de l\'article 3...',
      locale: 'fr',
      publishedAt: new Date('2025-01-05'),
      updatedAt: new Date('2025-01-05'),
      author: 'Auteur 3',
      category: 'Actualités',
      tags: ['news']
    }
  ])

  const getPublications = () => publications.value

  const getPublicationBySlug = (slug: string) => {
    return publications.value.find(p => p.slug === slug)
  }

  const getRecentPublications = (limit = 3) => {
    return publications.value
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .slice(0, limit)
  }

  return {
    publications,
    getPublications,
    getPublicationBySlug,
    getRecentPublications
  }
}
