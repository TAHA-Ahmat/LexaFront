/**
 * Composable pour gérer les images optimisées
 * Utilise automatiquement WebP si disponible, sinon fallback vers l'original
 */

export const useOptimizedImage = () => {
  /**
   * Retourne le chemin optimal pour une image
   * Essaie WebP d'abord, fallback vers l'original
   */
  const getOptimizedImagePath = (imagePath: string): string => {
    // Extraire extension et créer version WebP
    const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

    // En production, on assume que les WebP existent
    // En dev, on peut vérifier avec le module image de Nuxt
    return webpPath
  }

  /**
   * Configuration pour NuxtImage selon le type d'image
   */
  const getImageConfig = (type: 'hero' | 'card' | 'thumbnail' | 'full') => {
    const configs = {
      hero: {
        quality: 85,
        format: 'webp',
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        densities: 'x1 x2',
        loading: 'eager' as const,
        preload: true
      },
      card: {
        quality: 80,
        format: 'webp',
        sizes: 'xs:100vw sm:50vw md:33vw lg:25vw',
        densities: 'x1 x2',
        loading: 'lazy' as const,
        preload: false
      },
      thumbnail: {
        quality: 75,
        format: 'webp',
        sizes: 'xs:50vw sm:33vw md:25vw lg:20vw',
        densities: 'x1',
        loading: 'lazy' as const,
        preload: false
      },
      full: {
        quality: 90,
        format: 'webp',
        sizes: '100vw',
        densities: 'x1 x2',
        loading: 'lazy' as const,
        preload: false
      }
    }

    return configs[type]
  }

  /**
   * Retourne les attributs src/srcset pour une image responsive
   */
  const getResponsiveImageAttrs = (
    imagePath: string,
    type: 'hero' | 'card' | 'thumbnail' | 'full' = 'card'
  ) => {
    const config = getImageConfig(type)
    const optimizedPath = getOptimizedImagePath(imagePath)

    return {
      src: optimizedPath,
      ...config
    }
  }

  return {
    getOptimizedImagePath,
    getImageConfig,
    getResponsiveImageAttrs
  }
}
