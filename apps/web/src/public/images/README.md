# Images pour LEXAFRIC

## Structure des images

### Hero Slider
Ajouter les images suivantes dans ce répertoire :
- `hero-1.jpg` ou `hero-1.webp` - Image pour le slide 1 (Bienvenue sur LEXAFRIC)
- `hero-2.jpg` ou `hero-2.webp` - Image pour le slide 2 (Solutions idoines)

Dimensions recommandées : 1920x1080px ou plus
Formats : WebP (prioritaire), AVIF, ou JPG optimisé

### Logo
- `logo.svg` ou `logo.png` - Logo principal LEXAFRIC
- `favicon.ico` - Favicon du site

### Partenaires
Créer un sous-répertoire `partners/` et ajouter les logos des partenaires :
- Format : SVG ou PNG avec fond transparent
- Nommage : `partner-1.svg`, `partner-2.svg`, etc.
- Dimensions recommandées : 200x100px (largeur max)

### OpenGraph
- `og-image.jpg` - Image pour les partages sur réseaux sociaux
  Dimensions : 1200x630px

## Utilisation avec Nuxt Image

```vue
<NuxtImg
  src="/images/hero-1.webp"
  alt="Description"
  width="1920"
  height="1080"
  format="webp"
  quality="80"
  loading="lazy"
/>
```

## Optimisation

Toutes les images seront automatiquement optimisées par Nuxt Image :
- Conversion WebP/AVIF
- Lazy loading
- Responsive images
- Compression automatique
