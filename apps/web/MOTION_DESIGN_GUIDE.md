# 🎬 Guide d'Intégration Motion Design - Lexafric

## 📋 Vue d'Ensemble

Ce guide vous explique comment intégrer les **8 effets motion design premium** créés pour transformer votre site en une expérience **20/10**.

---

## ✅ Composables Créés

Tous les composables sont dans `src/composables/` :

1. **useCounterAnimation.ts** - Compteurs animés
2. **useMagneticButton.ts** - Effet magnétique sur boutons
3. **useTextReveal.ts** - Révélation de texte lettre par lettre
4. **use3DTilt.ts** - Effet 3D tilt sur cartes
5. **useParallax.ts** - Effets parallax multi-layers
6. **useIconAnimation.ts** - Animations d'icônes avancées

## 🎨 Composants Créés

1. **ScrollProgress.vue** - Barre de progression de scroll
2. **HamburgerIcon.vue** - Menu hamburger avec morphing

---

## 🚀 Intégration par Composant

### 1️⃣ Layout - Ajouter Scroll Progress

**Fichier:** `src/layouts/default.vue`

```vue
<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-950">
    <!-- ✨ NOUVEAU: Scroll Progress Indicator -->
    <ScrollProgress />

    <TopLangBar />
    <NavBar />
    <!-- ... reste du layout ... -->
  </div>
</template>

<script setup lang="ts">
import ScrollProgress from '~/components/base/ScrollProgress.vue'
// ... autres imports ...
</script>
```

---

### 2️⃣ SectionHeroSimple - Compteurs + Text Reveal + Magnetic Buttons

**Fichier:** `src/components/sections/SectionHeroSimple.vue`

**Étapes:**

#### A. Ajouter les imports et refs
```vue
<script setup lang="ts">
import { useTextReveal } from '~/composables/useTextReveal'
import { useMagneticButton } from '~/composables/useMagneticButton'
import { useScrollCounter } from '~/composables/useCounterAnimation'
import { useMouseParallax } from '~/composables/useParallax'

// Refs pour les éléments
const titleRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const ctaButton1 = ref<HTMLElement | null>(null)
const ctaButton2 = ref<HTMLElement | null>(null)
const stat1 = ref<HTMLElement | null>(null)
const stat2 = ref<HTMLElement | null>(null)
const stat3 = ref<HTMLElement | null>(null)

// Créer les compteurs animés
const counter1 = useScrollCounter(stat1, 10, { duration: 2, delay: 0.4 })
const counter2 = useScrollCounter(stat2, 15, { duration: 2.2, delay: 0.5 })
const counter3 = useScrollCounter(stat3, 25, { duration: 2.5, delay: 0.6 })
</script>
```

#### B. Modifier le template - Titre avec Text Reveal
```vue
<!-- AVANT -->
<h1
  class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
  data-aos="fade-up"
  data-aos-delay="100"
>
  {{ $t('pages.home.hero.title') }}
</h1>

<!-- APRÈS -->
<h1
  ref="titleRef"
  class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
>
  {{ $t('pages.home.hero.title') }}
</h1>
```

#### C. Modifier le template - Sous-titre avec Text Reveal
```vue
<!-- AVANT -->
<p
  class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
  data-aos="fade-up"
  data-aos-delay="200"
>
  {{ $t('pages.home.hero.subtitle') }}
</p>

<!-- APRÈS -->
<p
  ref="subtitleRef"
  class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
>
  {{ $t('pages.home.hero.subtitle') }}
</p>
```

#### D. Modifier le template - Boutons avec Magnetic Effect
```vue
<!-- AVANT -->
<NuxtLink
  :to="localePath('/contact')"
  class="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
>

<!-- APRÈS -->
<NuxtLink
  :to="localePath('/contact')"
  ref="ctaButton1"
  class="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
>
```

#### E. Modifier le template - Stats avec Compteurs Animés
```vue
<!-- AVANT -->
<div class="text-3xl md:text-4xl font-bold text-white">10+</div>

<!-- APRÈS -->
<div class="text-3xl md:text-4xl font-bold text-white">
  {{ Math.floor(counter1.value) }}+
</div>
```

Répéter pour les 3 stats (counter1, counter2, counter3).

#### F. Activer les effets dans onMounted
```vue
<script setup lang="ts">
// ... imports et refs ci-dessus ...

onMounted(() => {
  // Text Reveal sur le titre
  if (titleRef.value) {
    useTextReveal(titleRef, {
      type: 'words',
      stagger: 0.08,
      from: 'bottom',
      blur: true,
      delay: 0.1
    })
  }

  // Text Reveal sur le sous-titre
  if (subtitleRef.value) {
    useTextReveal(subtitleRef, {
      type: 'words',
      stagger: 0.04,
      from: 'bottom',
      blur: true,
      delay: 0.3
    })
  }

  // Magnetic Effect sur bouton 1
  if (ctaButton1.value) {
    useMagneticButton(ctaButton1, {
      strength: 0.3,
      scaleFactor: 1.05
    })
  }

  // Magnetic Effect sur bouton 2
  if (ctaButton2.value) {
    useMagneticButton(ctaButton2, {
      strength: 0.25,
      scaleFactor: 1.03
    })
  }
})
</script>
```

---

### 3️⃣ SectionTrust - Compteurs Animés

**Fichier:** `src/components/sections/SectionTrust.vue`

```vue
<script setup lang="ts">
import { useScrollCounter } from '~/composables/useCounterAnimation'

const stat1 = ref<HTMLElement | null>(null)
const stat2 = ref<HTMLElement | null>(null)
const stat3 = ref<HTMLElement | null>(null)

const counter1 = useScrollCounter(stat1, 10, { duration: 2 })
const counter2 = useScrollCounter(stat2, 15, { duration: 2.2 })
const counter3 = useScrollCounter(stat3, 25, { duration: 2.5 })
</script>

<template>
  <!-- Stats avec compteurs -->
  <div ref="stat1" class="text-center" data-aos="fade-up" data-aos-delay="100">
    <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
      {{ Math.floor(counter1.value) }}+
    </div>
    <div class="text-gray-600 dark:text-gray-400 text-sm md:text-base">
      {{ $t('pages.home.trust.stats.years') }}
    </div>
  </div>

  <!-- Répéter pour stat2 et stat3 -->
</template>
```

---

### 4️⃣ SectionFeatures - Effet 3D Tilt sur Cartes

**Fichier:** `src/components/sections/SectionFeatures.vue`

```vue
<script setup lang="ts">
import { use3DTilt } from '~/composables/use3DTilt'

const features = [/* ... vos features ... */]
const featureRefs = ref<HTMLElement[]>([])

onMounted(() => {
  // Appliquer le 3D tilt à chaque carte
  featureRefs.value.forEach((card) => {
    if (card) {
      use3DTilt(ref(card), {
        maxTilt: 15,
        perspective: 1000,
        scale: 1.02,
        glare: true,
        glareMaxOpacity: 0.2
      })
    }
  })
})
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    <div
      v-for="(feature, index) in features"
      :key="index"
      :ref="(el) => featureRefs[index] = el as HTMLElement"
      class="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300"
      data-aos="zoom-in"
      :data-aos-delay="index * 100"
    >
      <!-- Contenu de la carte -->
    </div>
  </div>
</template>
```

---

### 5️⃣ SectionServicesSimple - Icônes Animées + Magnetic Buttons

**Fichier:** `src/components/sections/SectionServicesSimple.vue`

```vue
<script setup lang="ts">
import { useIconAnimation } from '~/composables/useIconAnimation'
import { useMagneticButton } from '~/composables/useMagneticButton'

const iconRefs = ref<HTMLElement[]>([])
const ctaButtonRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Animer chaque icône au hover
  iconRefs.value.forEach((icon) => {
    if (icon) {
      useIconAnimation(ref(icon), {
        type: 'bounce',
        trigger: 'hover',
        duration: 0.6
      })
    }
  })

  // Magnetic effect sur le bouton CTA
  if (ctaButtonRef.value) {
    useMagneticButton(ctaButtonRef, {
      strength: 0.4,
      scaleFactor: 1.08
    })
  }
})
</script>

<template>
  <!-- Icône dans chaque service -->
  <div :ref="(el) => iconRefs[index] = el as HTMLElement" class="icon-wrapper">
    <svg><!-- ... --></svg>
  </div>

  <!-- Bouton CTA avec magnetic effect -->
  <NuxtLink
    :to="localePath('/contact')"
    ref="ctaButtonRef"
    class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg"
  >
    {{ $t('pages.home.cta.contact') }}
  </NuxtLink>
</template>
```

---

### 6️⃣ NavBar - Remplacer le Hamburger

**Fichier:** `src/components/base/NavBar.vue`

```vue
<script setup lang="ts">
import HamburgerIcon from '~/components/base/HamburgerIcon.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <!-- Bouton mobile - AVANT -->
  <button @click="toggleMobileMenu">
    <svg><!-- hamburger icon --></svg>
  </button>

  <!-- Bouton mobile - APRÈS -->
  <HamburgerIcon
    v-model="mobileMenuOpen"
    @toggle="toggleMobileMenu"
    color="currentColor"
    :animation-type="'elastic'"
  />
</template>
```

---

## 🎯 Options de Configuration

### useTextReveal
```typescript
{
  type: 'letters' | 'words' | 'lines',  // Type de split
  stagger: 0.05,                         // Délai entre chaque élément (s)
  from: 'top' | 'bottom' | 'left' | 'right' | 'center',
  blur: true,                            // Effet de blur
  scale: true,                           // Effet de scale
  rotate: false,                         // Effet de rotation
  duration: 0.8,                         // Durée de l'animation (s)
  delay: 0,                              // Délai avant démarrage (s)
}
```

### useMagneticButton
```typescript
{
  strength: 0.4,                         // Force de l'aimantation (0-1)
  scaleFactor: 1.1,                      // Scale au hover
  ease: 'power3.out',                    // Easing function
  duration: 0.6,                         // Durée de l'animation (s)
  resetDuration: 0.8,                    // Durée du retour (s)
}
```

### use3DTilt
```typescript
{
  maxTilt: 20,                           // Angle max d'inclinaison (degrés)
  perspective: 1000,                     // Perspective 3D (px)
  scale: 1.05,                           // Scale au hover
  glare: true,                           // Effet de brillance
  glareMaxOpacity: 0.3,                  // Opacité max du glare
  speed: 0.6,                            // Vitesse de l'animation (s)
}
```

### useScrollCounter
```typescript
{
  duration: 2,                           // Durée du comptage (s)
  delay: 0,                              // Délai avant démarrage (s)
  ease: 'power2.out',                    // Easing function
  threshold: 0.5,                        // Seuil de scroll pour trigger
  once: true,                            // Animer une seule fois
}
```

### useIconAnimation
```typescript
{
  type: 'bounce' | 'rotate' | 'pulse' | 'shake' | 'flip' | 'swing' | 'tada' | 'heartbeat',
  trigger: 'hover' | 'click' | 'auto' | 'scroll',
  duration: 0.6,                         // Durée de l'animation (s)
  loop: false,                           // Boucler l'animation
  loopDelay: 2,                          // Délai entre les boucles (s)
  scale: 1.2,                            // Scale max
}
```

---

## 📦 Installation Rapide (Copy-Paste)

### 1. Hero Section (Copy-Paste complet)

Remplacez tout le contenu de `SectionHeroSimple.vue` par le fichier :
```
src/components/sections/SectionHeroSimple.enhanced.vue
```

### 2. Layout avec ScrollProgress

Ajoutez dans `src/layouts/default.vue` juste après `<template>` :
```vue
<ScrollProgress />
```

Et dans la section script :
```vue
import ScrollProgress from '~/components/base/ScrollProgress.vue'
```

---

## 🎨 Exemples Visuels

### Compteur Animé
```vue
<div ref="statRef">
  <div class="text-4xl font-bold">
    {{ Math.floor(counter.value) }}+
  </div>
</div>

<script setup>
const statRef = ref(null)
const counter = useScrollCounter(statRef, 100, { duration: 2 })
</script>
```

### Magnetic Button
```vue
<button ref="btnRef">Click me</button>

<script setup>
const btnRef = ref(null)
onMounted(() => {
  useMagneticButton(btnRef, { strength: 0.3 })
})
</script>
```

### Text Reveal
```vue
<h1 ref="titleRef">Hello World</h1>

<script setup>
const titleRef = ref(null)
onMounted(() => {
  useTextReveal(titleRef, { type: 'words', stagger: 0.05 })
})
</script>
```

### 3D Tilt Card
```vue
<div ref="cardRef" class="card">
  <h3>My Card</h3>
</div>

<script setup>
const cardRef = ref(null)
onMounted(() => {
  use3DTilt(cardRef, { maxTilt: 15, glare: true })
})
</script>
```

---

## ⚡ Performance Tips

1. **Lazy Load** : Utilisez `once: true` pour les animations au scroll
2. **GPU Acceleration** : Les animations utilisent `transform` et `opacity` (GPU-accelerated)
3. **Reduced Motion** : Toutes les animations respectent `prefers-reduced-motion`
4. **Debounce** : Les scroll listeners utilisent `requestAnimationFrame`
5. **Cleanup** : Tous les composables nettoient automatiquement les event listeners

---

## 🐛 Troubleshooting

### Les compteurs ne s'animent pas
- Vérifiez que la ref est bien assignée à l'élément DOM
- Vérifiez que `useScrollCounter` est appelé avant le `onMounted`
- Ajustez le `threshold` (0.1 à 0.9)

### Le text reveal ne fonctionne pas
- Assurez-vous que l'élément contient du texte au moment du `onMounted`
- Vérifiez que le texte n'est pas injecté dynamiquement après le mount
- Utilisez `nextTick()` si le texte vient d'une API

### Le magnetic effect ne réagit pas
- Vérifiez que l'élément a une `position` CSS définie
- Assurez-vous que l'élément n'est pas dans un container avec `overflow: hidden`
- Vérifiez la console pour les erreurs

---

## 🚀 Résultat Final

Avec tous ces effets intégrés, votre site aura :

✅ Compteurs animés sur les statistiques
✅ Boutons magnétiques sur tous les CTAs
✅ Révélation de texte fluide sur les titres
✅ Cartes 3D interactives
✅ Barre de progression de scroll
✅ Icônes animées au hover
✅ Menu hamburger avec morphing
✅ Effets parallax sur les backgrounds

**Score attendu : 20/10** ⭐⭐⭐⭐⭐

---

## 📞 Support

Pour toute question sur l'implémentation, référez-vous aux fichiers :
- `src/composables/*.ts` - Documentation inline complète
- `MOTION_DESIGN_GUIDE.md` - Ce guide
- `SectionHeroSimple.enhanced.vue` - Exemple complet

Bon développement ! 🎉
