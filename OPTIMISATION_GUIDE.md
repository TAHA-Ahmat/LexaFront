# 🚀 Guide d'Optimisation des Performances - Lexafric

## ✅ Optimisations Déjà Appliquées

### 1. **Images Optimisées**
- ✅ Script d'optimisation créé (`optimize-images.js`)
- ✅ Composable `useOptimizedImage` pour gérer WebP
- ✅ Remplacement CSS backgrounds par `<NuxtImg>` dans :
  - SectionHeroSimple.vue (hero-background)
  - SectionServicesSimple.vue (juridique + sociale)

### 2. **Animations Optimisées**
- ✅ Étoiles réduites de 50 → 15 (70% moins de calculs)
- ✅ Durée AOS réduite de 800ms → 400ms
- ✅ AOS désactivé sur mobile (`disable: 'mobile'`)
- ✅ Parallaxe scroll désactivé (économie CPU massive)

### 3. **Fonts Optimisées**
- ✅ Google Fonts chargement non-bloquant
- ✅ Poids réduits (enlevé 300 et 900, gardé 400-800)
- ✅ `display=swap` ajouté

---

## 📋 Étapes Restantes (À Faire Manuellement)

### ÉTAPE 1: Optimiser Toutes Les Images

**Installer sharp et exécuter le script:**
```bash
cd C:\Users\ahmat\code\Lexafric\LexaFront
pnpm run optimize:images
```

Ce script va :
- Convertir tous les JPG/PNG en WebP (-60% à -80% taille)
- Compresser les originaux comme fallback
- Créer un rapport détaillé

**Images à déplacer dans `/public`:**

Après optimisation, déplacer ces images vers `apps/web/public/images/` :
```
apps/web/src/assets/images/Exterieur/hero-background.webp
  → apps/web/public/images/Exterieur/hero-background.webp

apps/web/src/assets/images/Exterieur/juridique.webp
  → apps/web/public/images/Exterieur/juridique.webp

apps/web/src/assets/images/Exterieur/sociale.webp
  → apps/web/public/images/Exterieur/sociale.webp
```

---

### ÉTAPE 2: Nettoyer Les Dépendances Inutilisées

**Supprimer GSAP et @vueuse/motion (non utilisés):**

```bash
cd apps/web
pnpm remove gsap @vueuse/motion
```

**Gain:** ~200KB de JavaScript en moins

---

### ÉTAPE 3: Optimiser SectionApproach Images

Le composant `SectionApproach.vue` importe 9 images (ligne 621-631).

**Remplacer les imports directs par lazy loading:**

```typescript
// ❌ AVANT (apps/web/src/components/sections/SectionApproach.vue:621-631)
import img1 from '~/assets/images/Salle_Reunion/3.JPG'
import img2 from '~/assets/images/M_Beti/beti_4.JPG'
// ... 7 autres imports

// ✅ APRÈS - Utiliser NuxtImg avec lazy loading
const images = {
  img1: '/images/Salle_Reunion/3.webp',
  img2: '/images/M_Beti/beti_4.webp',
  // ...
}
```

Puis dans le template, remplacer les `<img>` par `<NuxtImg>` avec `loading="lazy"`

---

### ÉTAPE 4: Ajouter Lazy Loading Partout

**Chercher tous les `<img>` et `<NuxtImg>` sans lazy loading:**

```bash
grep -r "<img" apps/web/src/components --include="*.vue"
grep -r "<NuxtImg" apps/web/src/components --include="*.vue" | grep -v "loading="
```

**Ajouter systématiquement:**
```vue
<NuxtImg
  src="/chemin/image.webp"
  loading="lazy"
  format="webp"
  quality="80"
/>
```

**Exception:** Garder `loading="eager"` uniquement pour le hero (première image visible).

---

### ÉTAPE 5: Vérifier Les Imports CSS Background Restants

**Chercher les CSS backgrounds:**
```bash
grep -r "background-image: url" apps/web/src/components --include="*.vue"
```

Tous doivent être remplacés par `<NuxtImg>` avec position absolute.

---

## 📊 Gains Attendus

| Optimisation | Gain Temps Chargement | Gain Poids |
|--------------|----------------------|-----------|
| Images WebP | -3 à -5 secondes | -10 à -15 MB |
| Suppression GSAP/Motion | -0.5 secondes | -200 KB |
| Animations réduites | -0.3 secondes | - |
| Parallaxe désactivé | Scroll +60% fluide | - |
| Fonts optimisées | -0.2 secondes | -50 KB |
| **TOTAL** | **-4 à -6 secondes** | **-10 à -15 MB** |

---

## 🧪 Tester Les Performances

### Avant de commencer:
```bash
# Lancer le dev server
pnpm dev

# Ouvrir DevTools > Performance
# Enregistrer le chargement de la page d'accueil
# Noter: LCP (Largest Contentful Paint), FID, CLS
```

### Après optimisation:
```bash
# Même test
# Comparer les métriques

# Devrait voir:
# - LCP: -3 à -5 secondes
# - Total Bundle: -200KB à -400KB
# - Animations plus fluides (60 FPS constant)
```

### Tools en ligne:
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/

**Score attendu:**
- Performance: 85-95+ (au lieu de 40-60)
- LCP: < 2.5s (au lieu de 5-8s)

---

## ⚠️ Vérifications Importantes

### Aucune Régression Visuelle

Après chaque changement, vérifier:

1. ✅ Images s'affichent correctement
2. ✅ Animations fonctionnent (juste plus rapides)
3. ✅ Layout identique
4. ✅ Hover effects marchent
5. ✅ Responsive fonctionne

### Compatibilité WebP

Tous les navigateurs modernes supportent WebP (2024):
- Chrome ✅
- Firefox ✅
- Safari ✅ (depuis iOS 14)
- Edge ✅

Fallback automatique vers JPG/PNG pour anciens navigateurs.

---

## 🔧 Commandes Utiles

```bash
# Optimiser toutes les images
pnpm run optimize:images

# Supprimer dépendances inutiles
pnpm remove gsap @vueuse/motion

# Build production pour tester
pnpm build
pnpm preview

# Analyser le bundle
pnpm build --analyze
```

---

## 📝 Prochaines Optimisations (Optionnel)

1. **Image CDN**: Utiliser Cloudinary/ImageKit pour servir les images
2. **Lazy Components**: Charger les sections hors viewport en lazy
3. **Code Splitting**: Séparer les routes en chunks séparés
4. **Service Worker**: Cache agressif des assets statiques
5. **Preload Critical**: Précharger hero image et CSS critique

---

## 🆘 En Cas de Problème

### Images ne s'affichent pas:
```bash
# Vérifier que les WebP existent
ls apps/web/public/images/**/*.webp

# Vérifier console navigateur pour erreurs 404
```

### Animations cassées:
```bash
# Vérifier AOS est bien importé
grep -r "import AOS" apps/web/src/plugins

# Vérifier data-aos dans les templates
grep -r "data-aos=" apps/web/src/components
```

### Build échoue:
```bash
# Nettoyer et réinstaller
rm -rf node_modules .nuxt
pnpm install
pnpm build
```

---

## 📧 Support

En cas de questions, contacter: madmit@madmit.com

---

**Dernière mise à jour:** 2025-12-08
**Version:** 1.0
