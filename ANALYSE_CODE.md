# Analyse complète du projet LexaFront

## 📋 Vue d'ensemble du projet

**LexaFront** est un **monorepo** pour un site vitrine multilingue (FR/EN/AR) développé avec **Nuxt 3**, **TypeScript** et **Tailwind CSS**. Le projet utilise une architecture hybride avec support RTL pour l'arabe.

---

## 🏗️ Structure du projet

### 1. Architecture Monorepo

```
LexaFront/
├── apps/web/              # Application Nuxt principale
├── packages/shared/       # Code partagé (types, utils, constantes)
└── .claude/              # Instructions pour l'assistant Claude
```

**Fichier racine** (`package.json`) :
- Gestion avec **pnpm** (gestionnaire de packages performant)
- Scripts pour lancer le projet : `dev`, `build`, `preview`, `lint`
- Configuration du workspace avec `pnpm-workspace.yaml`

---

## 🎯 Application Web (apps/web/)

### 2. Configuration principale

**`nuxt.config.ts`** - Configuration Nuxt avec :

#### a) Modules installés
- `@nuxtjs/tailwindcss` : Framework CSS utilitaire
- `@nuxtjs/i18n` : Internationalisation (multilingue)
- `@nuxt/image` : Optimisation automatique des images

#### b) Configuration i18n
- 3 langues : **FR** (défaut), **EN**, **AR** avec RTL
- Stratégie `prefix_except_default` : `/en/`, `/ar/`, mais `/` pour le français
- Fichiers de traduction lazy-loadés depuis `/locales`

```typescript
locales: [
  { code: 'fr', iso: 'fr-FR', name: 'Français', dir: 'ltr', file: 'fr.json' },
  { code: 'en', iso: 'en-US', name: 'English', dir: 'ltr', file: 'en.json' },
  { code: 'ar', iso: 'ar', name: 'العربية', dir: 'rtl', file: 'ar.json' }
]
```

#### c) Configuration images
- Formats modernes : **WebP** et **AVIF**
- Points de rupture responsive (xs à xxl)
- Qualité optimisée à 80%

#### d) Configuration runtime
- URL du site configurable via `.env`
- Support analytics optionnel

---

### 3. Point d'entrée de l'application

**`app.vue`** - Composant racine :
- Détecte automatiquement la direction (LTR/RTL) selon la langue
- Utilise `NuxtLayout` pour les layouts
- Utilise `NuxtPage` pour le routing automatique

```vue
<template>
  <div :dir="currentDir">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

---

### 4. Layouts (Mise en page)

**`layouts/default.vue`** - Layout principal :

#### Structure
```
TopLangBar          ← Barre de sélection de langue en haut
NavBar              ← Navigation principale sticky
<main>              ← Contenu de la page (slot)
<footer>            ← Pied de page avec liens et copyright
```

#### Caractéristiques
- Design responsive avec grille CSS
- Mode sombre (`dark:bg-gray-900`)
- Footer avec 3 colonnes : infos, liens légaux, contact
- Copyright dynamique avec année actuelle

**`layouts/minimal.vue`** - Layout minimal pour pages simples

---

### 5. Navigation

**`components/base/NavBar.vue`** - Barre de navigation sophistiquée :

#### Version Desktop
- Logo à gauche
- Menu centré avec 5 liens : Accueil, Offres, Articles, À propos, Contact
- Numéro de téléphone cliquable à droite
- Sticky avec effet de flou (`backdrop-blur`)
- Ombre apparaît au scroll

#### Version Mobile
- Bouton hamburger
- Drawer (tiroir) coulissant avec transitions
- Overlay semi-transparent
- Menu vertical avec même structure

#### Fonctionnalités
- Détection de page active avec soulignement bleu
- Animations CSS (fade/slide) pour le mobile
- Gestion du scroll (bloque quand menu ouvert)
- Support mode sombre

```typescript
const items = [
  { to: '/',         label: 'nav.home' },
  { to: '/offres',   label: 'nav.offers' },
  { to: '/articles', label: 'nav.articles' },
  { to: '/a-propos', label: 'nav.about' },
  { to: '/contact',  label: 'nav.contact' }
]
```

---

### 6. Pages

**`pages/index.vue`** - Page d'accueil composée de sections :

```vue
<SectionHero />        <!-- En-tête principal avec CTA -->
<SectionFeatures />    <!-- Présentation des fonctionnalités -->
<SectionStats />       <!-- Statistiques/chiffres clés -->
<SectionPosts />       <!-- Articles récents -->
<SectionCTA />         <!-- Appel à l'action final -->
```

**SEO** : Métadonnées Open Graph et Twitter Card configurées

#### Autres pages disponibles
- `/offres` : Page des offres
- `/articles` : Liste des articles
  - `/articles/[slug]` : Page détail d'un article
- `/a-propos` : Page À propos
- `/contact` : Formulaire de contact
- `/mentions-legales` : Mentions légales
- `/politique-confidentialite` : Politique de confidentialité

---

### 7. Composables (Logique réutilisable)

**`composables/useLocale.ts`** - Gestion des langues et RTL :

```typescript
export const useLocaleHelpers = () => {
  const { locale } = useI18n()

  const isRTL = computed(() => locale.value === 'ar')
  const dir = computed(() => isRTL.value ? 'rtl' : 'ltr')
  const textAlign = computed(() => isRTL.value ? 'right' : 'left')

  return { isRTL, dir, textAlign }
}
```

#### Autres composables disponibles
- **`useContact.ts`** : Gestion du formulaire de contact
- **`useSeo.ts`** : Helpers pour le SEO
- **`useContentMock.ts`** : Données de démo/mock

---

### 8. Composants

#### Structure
```
components/
├── base/                    ← Composants de base réutilisables
│   ├── TopLangBar.vue      ← Sélecteur de langue
│   ├── NavBar.vue          ← Navigation principale
│   ├── BaseCard.vue        ← Carte générique
│   ├── BaseButton.vue      ← Bouton générique
│   └── BaseInput.vue       ← Input générique
└── sections/               ← Sections de pages
    ├── SectionHero.vue
    ├── SectionFeatures.vue
    ├── SectionStats.vue
    ├── SectionPosts.vue
    ├── SectionTeam.vue
    ├── SectionCTA.vue
    └── SectionContactForm.vue
```

---

## 📦 Package Partagé (packages/shared/)

**`packages/shared/src/index.ts`** - Exports centralisés :

### Types TypeScript
- **`Locale`** : Type pour les codes de langue (fr, en, ar)
- **`LocaleInfo`** : Informations détaillées sur une langue
- **`Publication`** : Type pour les articles/publications

### Constantes
- **`SUPPORTED_LOCALES`** : ['fr', 'en', 'ar']
- **`DEFAULT_LOCALE`** : 'fr'
- **`LOCALE_INFO`** : Informations détaillées sur chaque langue

### Utilitaires
- **`slugify()`** : Convertit un texte en slug URL-friendly
- **`formatDate()`** : Formate les dates selon la locale

#### Structure du package
```
packages/shared/
├── src/
│   ├── types/
│   │   ├── locale.ts
│   │   ├── publication.ts
│   │   └── index.ts
│   ├── constants/
│   │   ├── locales.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── slugify.ts
│   │   ├── formatDate.ts
│   │   └── index.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

---

## 🎨 Technologies & Patterns

### Stack technique
- **Framework** : Nuxt 3 (Vue.js avec SSR/SSG)
- **Langage** : TypeScript (typage strict)
- **Styling** : Tailwind CSS (utility-first)
- **Multilingue** : @nuxtjs/i18n
- **Images** : @nuxt/image (optimisation automatique)
- **Gestion de packages** : pnpm (monorepo workspace)

### Patterns utilisés
- **Monorepo** : Code partagé centralisé avec workspaces
- **Composables** : Logique réutilisable (comme React hooks)
- **File-based routing** : Les pages créent automatiquement les routes
- **Auto-imports** : Composants importés automatiquement par Nuxt
- **SSR/SSG** : Génération côté serveur pour le SEO
- **Layout system** : Réutilisation de mises en page
- **Atomic Design** : Composants base + sections

---

## 🌍 Gestion du multilingue

### 1. Détection de langue
- Basée sur l'URL (`/en/`, `/ar/`)
- Français par défaut (pas de préfixe)
- Stratégie : `prefix_except_default`

### 2. RTL automatique
- Détecté pour l'arabe dans `app.vue`
- Attribut `dir` dynamique sur la racine
- Support dans Tailwind avec préfixes `rtl:` et `ltr:`

### 3. Traductions
- Fichiers JSON dans `/locales` (fr.json, en.json, ar.json)
- Chargement lazy (performance)
- Pas de détection automatique du navigateur

### 4. Utilisation
```vue
<!-- Dans les templates -->
{{ $t('nav.home') }}

<!-- Dans le script setup -->
const { t } = useI18n()
const title = t('nav.home')
```

---

## 🚀 Points forts du code

✅ **Architecture propre** : Séparation claire des responsabilités
✅ **TypeScript** : Code typé et maintenable
✅ **Responsive** : Design adapté mobile/desktop
✅ **Performance** : Images optimisées, lazy-loading
✅ **SEO-friendly** : SSR + métadonnées Open Graph
✅ **Accessibilité** : ARIA labels, focus management
✅ **Transitions fluides** : Animations CSS natives
✅ **Mode sombre** : Support avec Tailwind dark:
✅ **Monorepo** : Code partagé entre projets futurs
✅ **Composants réutilisables** : Base solide pour évolution

---

## 🔧 Commandes utiles

```bash
# Installation
npm install

# Développement
npm run dev
# Accessible sur http://localhost:3001

# Build production
npm run build

# Prévisualiser le build
npm run preview

# Linter
npm run lint
```

---

## 📁 Arborescence complète

```
LexaFront/
├── .claude/
│   └── instructions.md
├── apps/
│   └── web/
│       ├── assets/
│       │   └── images/
│       ├── components/
│       │   ├── base/
│       │   │   ├── BaseButton.vue
│       │   │   ├── BaseCard.vue
│       │   │   ├── BaseInput.vue
│       │   │   ├── NavBar.vue
│       │   │   └── TopLangBar.vue
│       │   └── sections/
│       │       ├── SectionCTA.vue
│       │       ├── SectionContactForm.vue
│       │       ├── SectionFeatures.vue
│       │       ├── SectionHero.vue
│       │       ├── SectionPosts.vue
│       │       ├── SectionStats.vue
│       │       └── SectionTeam.vue
│       ├── composables/
│       │   ├── useContact.ts
│       │   ├── useContentMock.ts
│       │   ├── useLocale.ts
│       │   └── useSeo.ts
│       ├── layouts/
│       │   ├── default.vue
│       │   └── minimal.vue
│       ├── locales/
│       │   ├── ar.json
│       │   ├── en.json
│       │   └── fr.json
│       ├── pages/
│       │   ├── articles/
│       │   │   ├── [slug].vue
│       │   │   └── index.vue
│       │   ├── a-propos.vue
│       │   ├── contact.vue
│       │   ├── index.vue
│       │   ├── mentions-legales.vue
│       │   ├── offres.vue
│       │   └── politique-confidentialite.vue
│       ├── public/
│       ├── app.config.ts
│       ├── app.vue
│       ├── error.vue
│       ├── nuxt.config.ts
│       ├── package.json
│       ├── README.md
│       └── tsconfig.json
├── packages/
│   └── shared/
│       ├── src/
│       │   ├── constants/
│       │   │   ├── index.ts
│       │   │   └── locales.ts
│       │   ├── types/
│       │   │   ├── index.ts
│       │   │   ├── locale.ts
│       │   │   └── publication.ts
│       │   ├── utils/
│       │   │   ├── formatDate.ts
│       │   │   ├── index.ts
│       │   │   └── slugify.ts
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
├── .env.example
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
├── README.md
└── tsconfig.json
```

---

## 🔗 Liens utiles

- [Documentation Nuxt 3](https://nuxt.com)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [Documentation @nuxtjs/i18n](https://i18n.nuxtjs.org)
- [Documentation @nuxt/image](https://image.nuxtjs.org)
- [Documentation pnpm](https://pnpm.io)

---

## 📄 Licence

Privé - Lexafric © 2025
