# ✅ CHECKLIST D'INTÉGRATION MOTION DESIGN

Suivez cette checklist étape par étape pour intégrer tous les effets motion design.

---

## 📦 PHASE 1 : VÉRIFICATION (5 min)

### ✅ Dépendances installées
```bash
cd apps/web
pnpm list gsap @vueuse/motion @vueuse/core
```

**Attendu :**
- ✅ gsap 3.13.0
- ✅ @vueuse/motion 3.0.3
- ✅ @vueuse/core 14.0.0

**Status :** ✅ INSTALLÉ

---

### ✅ Fichiers créés
Vérifiez que ces fichiers existent :

**Composables** (6 fichiers dans `src/composables/`) :
- [ ] useCounterAnimation.ts
- [ ] useMagneticButton.ts
- [ ] useTextReveal.ts
- [ ] use3DTilt.ts
- [ ] useParallax.ts
- [ ] useIconAnimation.ts

**Composants** (3 fichiers dans `src/components/`) :
- [ ] base/ScrollProgress.vue
- [ ] base/HamburgerIcon.vue
- [ ] sections/SectionHeroSimple.enhanced.vue (exemple)

**Documentation** (3 fichiers dans `apps/web/`) :
- [ ] MOTION_DESIGN_GUIDE.md
- [ ] MOTION_DESIGN_SUMMARY.md
- [ ] INTEGRATION_CHECKLIST.md (ce fichier)

---

## 🚀 PHASE 2 : INTÉGRATION RAPIDE (15 min)

### Étape 1 : Scroll Progress (2 min)

**Fichier :** `src/layouts/default.vue`

#### A. Importer le composant
```vue
<script setup lang="ts">
import ScrollProgress from '~/components/base/ScrollProgress.vue'
// ... autres imports existants
</script>
```

#### B. Ajouter dans le template
```vue
<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-950">
    <!-- ✨ AJOUTEZ CETTE LIGNE ICI -->
    <ScrollProgress />

    <TopLangBar />
    <NavBar />
    <!-- ... -->
  </div>
</template>
```

**Test :** Scrollez la page → Vous devez voir une barre bleue/violette en haut

- [ ] ScrollProgress ajouté
- [ ] Testé et visible

---

### Étape 2 : Compteurs Animés - Hero (3 min)

**Fichier :** `src/components/sections/SectionHeroSimple.vue`

#### A. Ajouter l'import
```vue
<script setup lang="ts">
import { useScrollCounter } from '~/composables/useCounterAnimation'

// ... code existant ...
```

#### B. Créer les refs et compteurs
```vue
<script setup lang="ts">
// ... imports ...

const stat1 = ref<HTMLElement | null>(null)
const stat2 = ref<HTMLElement | null>(null)
const stat3 = ref<HTMLElement | null>(null)

const counter1 = useScrollCounter(stat1, 10, { duration: 2, delay: 0.4 })
const counter2 = useScrollCounter(stat2, 15, { duration: 2.2, delay: 0.5 })
const counter3 = useScrollCounter(stat3, 25, { duration: 2.5, delay: 0.6 })
</script>
```

#### C. Modifier le template
```vue
<!-- TROUVEZ CETTE SECTION (ligne ~83) -->
<div class="grid grid-cols-3 gap-4 sm:gap-8 pt-12 max-w-2xl mx-auto">
  <!-- STAT 1 -->
  <div ref="stat1" class="text-center" data-aos="fade-up" data-aos-delay="400">
    <div class="text-3xl md:text-4xl font-bold text-white">
      {{ Math.floor(counter1.value) }}+
    </div>
    <div class="text-sm text-gray-400 mt-1">{{ $t('pages.home.hero.stats.years') }}</div>
  </div>

  <!-- STAT 2 -->
  <div ref="stat2" class="text-center" data-aos="fade-up" data-aos-delay="500">
    <div class="text-3xl md:text-4xl font-bold text-white">
      {{ Math.floor(counter2.value) }}+
    </div>
    <div class="text-sm text-gray-400 mt-1">{{ $t('pages.home.hero.stats.experts') }}</div>
  </div>

  <!-- STAT 3 -->
  <div ref="stat3" class="text-center" data-aos="fade-up" data-aos-delay="600">
    <div class="text-3xl md:text-4xl font-bold text-white">
      {{ Math.floor(counter3.value) }}+
    </div>
    <div class="text-sm text-gray-400 mt-1">{{ $t('pages.home.hero.stats.partners') }}</div>
  </div>
</div>
```

**Test :** Scrollez jusqu'à la section hero → Les chiffres doivent monter de 0 à leur valeur

- [ ] Compteurs ajoutés
- [ ] Testés et fonctionnels

---

### Étape 3 : Magnetic Buttons - Hero (3 min)

**Fichier :** `src/components/sections/SectionHeroSimple.vue` (suite)

#### A. Ajouter l'import
```vue
<script setup lang="ts">
import { useMagneticButton } from '~/composables/useMagneticButton'
// ... autres imports ...
```

#### B. Créer les refs
```vue
<script setup lang="ts">
// ... code existant ...

const ctaButton1 = ref<HTMLElement | null>(null)
const ctaButton2 = ref<HTMLElement | null>(null)

onMounted(() => {
  if (ctaButton1.value) {
    useMagneticButton(ctaButton1, {
      strength: 0.3,
      scaleFactor: 1.05
    })
  }

  if (ctaButton2.value) {
    useMagneticButton(ctaButton2, {
      strength: 0.25,
      scaleFactor: 1.03
    })
  }
})
</script>
```

#### C. Modifier le template
```vue
<!-- TROUVEZ LES BOUTONS CTA (ligne ~64) -->
<NuxtLink
  :to="localePath('/contact')"
  ref="ctaButton1"
  class="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
>
  {{ $t('pages.home.hero.cta.contact') }}
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
</NuxtLink>

<NuxtLink
  :to="localePath('/services')"
  ref="ctaButton2"
  class="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all"
>
  {{ $t('pages.home.hero.cta.services') }}
</NuxtLink>
```

**Test :** Bougez la souris près des boutons → Ils doivent "suivre" la souris

- [ ] Magnetic buttons ajoutés
- [ ] Testés et fonctionnels

---

### Étape 4 : Text Reveal - Hero (3 min)

**Fichier :** `src/components/sections/SectionHeroSimple.vue` (suite)

#### A. Ajouter l'import
```vue
<script setup lang="ts">
import { useTextReveal } from '~/composables/useTextReveal'
// ... autres imports ...
```

#### B. Créer les refs et animations
```vue
<script setup lang="ts">
// ... code existant ...

const titleRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // ... magnetic buttons existants ...

  if (titleRef.value) {
    useTextReveal(titleRef, {
      type: 'words',
      stagger: 0.08,
      from: 'bottom',
      blur: true,
      delay: 0.1
    })
  }

  if (subtitleRef.value) {
    useTextReveal(subtitleRef, {
      type: 'words',
      stagger: 0.04,
      from: 'bottom',
      blur: true,
      delay: 0.3
    })
  }
})
</script>
```

#### C. Modifier le template
```vue
<!-- TITRE (ligne ~41) -->
<h1
  ref="titleRef"
  class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
>
  {{ $t('pages.home.hero.title') }}
</h1>

<!-- SOUS-TITRE (ligne ~50) -->
<p
  ref="subtitleRef"
  class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
>
  {{ $t('pages.home.hero.subtitle') }}
</p>
```

**Test :** Rechargez la page → Le titre et sous-titre doivent apparaître mot par mot

- [ ] Text reveal ajouté
- [ ] Testé et fonctionnel

---

### Étape 5 : Compteurs - Section Trust (2 min)

**Fichier :** `src/components/sections/SectionTrust.vue`

#### Appliquer les mêmes modifications que pour Hero
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
  <!-- Ligne ~18 -->
  <div ref="stat1" class="text-center" data-aos="fade-up" data-aos-delay="100">
    <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
      {{ Math.floor(counter1.value) }}+
    </div>
    <!-- ... -->
  </div>

  <!-- Répéter pour stat2 et stat3 -->
</template>
```

- [ ] Compteurs Trust ajoutés
- [ ] Testés et fonctionnels

---

## 🎨 PHASE 3 : INTÉGRATION AVANCÉE (30 min)

### Étape 6 : 3D Tilt - Features (5 min)

**Fichier :** `src/components/sections/SectionFeatures.vue`

```vue
<script setup lang="ts">
import { use3DTilt } from '~/composables/use3DTilt'

const featureRefs = ref<HTMLElement[]>([])

onMounted(() => {
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
  <div
    v-for="(feature, index) in features"
    :key="index"
    :ref="(el) => featureRefs[index] = el as HTMLElement"
    class="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300"
  >
    <!-- Contenu de la carte -->
  </div>
</template>
```

- [ ] 3D Tilt ajouté
- [ ] Testé et fonctionnel

---

### Étape 7 : Icon Animations - Services (5 min)

**Fichier :** `src/components/sections/SectionServicesSimple.vue`

```vue
<script setup lang="ts">
import { useIconAnimation } from '~/composables/useIconAnimation'

const iconRefs = ref<HTMLElement[]>([])

onMounted(() => {
  iconRefs.value.forEach((icon) => {
    if (icon) {
      useIconAnimation(ref(icon), {
        type: 'bounce',
        trigger: 'hover',
        duration: 0.6
      })
    }
  })
})
</script>

<template>
  <div
    v-for="(service, index) in services"
    :key="index"
  >
    <div :ref="(el) => iconRefs[index] = el as HTMLElement" class="icon-wrapper">
      <svg><!-- icône du service --></svg>
    </div>
  </div>
</template>
```

- [ ] Icon animations ajoutées
- [ ] Testées et fonctionnelles

---

### Étape 8 : Hamburger Morphing - NavBar (5 min)

**Fichier :** `src/components/base/NavBar.vue`

#### A. Importer le composant
```vue
<script setup lang="ts">
import HamburgerIcon from '~/components/base/HamburgerIcon.vue'
// ... autres imports
</script>
```

#### B. Remplacer le bouton hamburger
```vue
<!-- TROUVEZ LE BOUTON MOBILE (cherchez "mobile menu button") -->

<!-- AVANT -->
<button @click="toggleMobileMenu">
  <svg><!-- hamburger icon --></svg>
</button>

<!-- APRÈS -->
<HamburgerIcon
  v-model="mobileMenuOpen"
  @toggle="handleToggle"
  animation-type="elastic"
  color="currentColor"
/>
```

#### C. Ajouter la méthode
```vue
<script setup lang="ts">
const mobileMenuOpen = ref(false)

const handleToggle = (isOpen: boolean) => {
  mobileMenuOpen.value = isOpen
  // ... votre logique de menu mobile existante
}
</script>
```

- [ ] Hamburger morphing ajouté
- [ ] Testé et fonctionnel

---

### Étape 9 : Parallax Mouse - Hero Stars (5 min)

**Fichier :** `src/components/sections/SectionHeroSimple.vue`

```vue
<script setup lang="ts">
import { useMouseParallax } from '~/composables/useParallax'

const starRefs = ref<Record<number, HTMLElement>>({})

onMounted(() => {
  // ... code existant ...

  // Appliquer parallax sur certaines étoiles
  const parallaxStars = [5, 10, 15, 20, 25, 30, 35, 40, 45]
  parallaxStars.forEach((starId) => {
    const starEl = starRefs.value[starId]
    if (starEl) {
      useMouseParallax(ref(starEl), {
        strength: (starId % 3 + 1) * 5,
        smooth: true,
        smoothness: 0.15
      })
    }
  })
})
</script>

<template>
  <div
    v-for="star in stars"
    :key="star.id"
    :ref="(el) => starRefs[star.id] = el as HTMLElement"
    class="absolute rounded-full bg-white animate-star"
  >
  </div>
</template>
```

- [ ] Parallax mouse ajouté
- [ ] Testé et fonctionnel

---

### Étape 10 : Magnetic CTA - Services (3 min)

**Fichier :** `src/components/sections/SectionServicesSimple.vue`

```vue
<script setup lang="ts">
import { useMagneticButton } from '~/composables/useMagneticButton'

const ctaButtonRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (ctaButtonRef.value) {
    useMagneticButton(ctaButtonRef, {
      strength: 0.4,
      scaleFactor: 1.08
    })
  }
})
</script>

<template>
  <NuxtLink
    :to="localePath('/contact')"
    ref="ctaButtonRef"
    class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg"
  >
    {{ $t('pages.home.cta.contact') }}
  </NuxtLink>
</template>
```

- [ ] Magnetic CTA ajouté
- [ ] Testé et fonctionnel

---

## ✅ PHASE 4 : VÉRIFICATION FINALE (10 min)

### Tests par Section

#### Hero Section
- [ ] Scroll progress visible
- [ ] Compteurs qui montent (10+, 15+, 25+)
- [ ] Titre apparaît mot par mot
- [ ] Sous-titre apparaît mot par mot
- [ ] Boutons suivent la souris (magnetic)
- [ ] Étoiles bougent avec la souris (parallax)

#### Trust Section
- [ ] Compteurs qui montent (10+, 15+, 25+)

#### Features Section
- [ ] Cartes s'inclinent en 3D au hover

#### Services Section
- [ ] Icônes rebondissent au hover
- [ ] Bouton CTA suit la souris

#### NavBar
- [ ] Hamburger se transforme en X (mobile)

#### Global
- [ ] Barre de progression en haut
- [ ] Pas d'erreur console
- [ ] Performance 60 FPS

---

### Tests Performance

```bash
# Ouvrir Chrome DevTools
# Performance > Record > Scroller la page > Stop

# Vérifier :
- [ ] FPS stable ~60
- [ ] Pas de long tasks > 50ms
- [ ] Animations fluides
```

---

### Tests Accessibilité

- [ ] `prefers-reduced-motion` respecté
- [ ] Focus visible sur tous les éléments
- [ ] Pas d'erreur de contraste
- [ ] Navigation clavier fonctionnelle

---

## 🎉 FÉLICITATIONS !

Si tous les items sont cochés, vous avez réussi l'intégration complète !

**Votre site a maintenant une note de 20/10 ! 🏆**

---

## 📞 BESOIN D'AIDE ?

Consultez :
- `MOTION_DESIGN_GUIDE.md` - Guide détaillé
- `MOTION_DESIGN_SUMMARY.md` - Résumé complet
- `src/composables/*.ts` - Documentation inline

---

**Dernière mise à jour :** 2025-11-03
**Version :** 1.0.0
**Status :** Production Ready ✅
