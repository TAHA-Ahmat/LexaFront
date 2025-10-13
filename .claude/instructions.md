# Instructions Front — Projet vitrine FR/EN/AR (Phase 1)

## 0) Objectif & périmètre

* Construire un **site vitrine multilingue** (FR par défaut, EN, AR **RTL**) en **front uniquement**.
* **Minimaliste, moderne, performant, SEO-first.**
* Prévoir des **points de branchement** (chatbot + APIs sociales) **sans les implémenter** en Phase 1.

---

## 1) Prérequis techniques

* **Node.js >= 20** : Nuxt 3.17+ nécessite Node 20 minimum
* **NVM (Node Version Manager)** : **fortement recommandé** pour gérer les versions de Node sans conflit
  * Windows : [nvm-windows](https://github.com/coreybutler/nvm-windows)
  * macOS/Linux : [nvm](https://github.com/nvm-sh/nvm)
* **pnpm >= 8** (recommandé) ou npm

### Configuration NVM

```bash
# Installer Node 20
nvm install 20
nvm use 20

# Vérifier
node --version  # doit afficher v20.x.x
```

**Important** : À chaque nouveau terminal, faire `nvm use 20` avant de lancer le projet.

---

## 2) Technologies (et ce qu'elles apportent)

* **Nuxt (Vue 3 + SSR/SSG)** : SSR/SSG = **SEO et vitesse**. Pages multilingues indexables, navigation fluide, rendu serveur out-of-the-box.
* **TypeScript** : Typage strict = **moins d'erreurs** en binôme. Meilleure collaboration, refactoring sûr.
* **Tailwind CSS** : **UI rapide et cohérente** sans CSS lourd. Utilitaires = dev rapide, responsive natif, pas de surcharge.
* **@nuxtjs/i18n** : **Routes FR/EN/AR + RTL propre**. Routes localisées, `hreflang` auto, switch de langue intégré.
* **Nuxt Image (local)** : **Images optimisées sans CDN**. Formats modernes (WebP/AVIF), lazy loading, dimensions auto. CDN plus tard si besoin.
* **Pinia** (**optionnel**) : Gestion d'état **légère** si besoin (ex. bannière cookies). **Ne pas l'ajouter tant que ce n'est pas utile.**

> Décisions fermes : **Nuxt + TS + Tailwind + i18n + Nuxt Image (local)**. Pas d'autres libs tant qu'il n'y a pas de besoin avéré.

**Objectif** : Chaque technologie a été choisie pour **minimiser le code** et **maximiser la maintenabilité**.

---

## 3) Architecture monorepo (évolutive et modulaire)

> **Principe** : Structure **monorepo** pour faciliter l'évolution (backend, admin, mobile) sans restructurer. Chaque élément a une place claire.

### 3.1) Pourquoi un monorepo ?

* ✅ **Évolution incrémentale** : ajout du backend/admin sans tout casser
* ✅ **Code partagé** : types, utils, constantes réutilisés entre front/back
* ✅ **Un seul dépôt Git** : CI/CD unique, versioning cohérent
* ✅ **Commandes centralisées** : `pnpm install/dev/build` à la racine

### 3.2) Structure complète (toutes phases)

```
LexaFront/                              # Racine monorepo
├── apps/                               # Applications (1 app = 1 déploiement)
│   ├── web/                            # 🎯 PHASE 1 - Front Nuxt
│   │   ├── pages/                      # Routes: assemblage de sections + SEO
│   │   │   ├── index.vue               # Accueil (FR/EN/AR via i18n routing)
│   │   │   ├── expertises.vue          # Services+solutions
│   │   │   ├── publications/
│   │   │   │   ├── index.vue           # Liste
│   │   │   │   └── [slug].vue          # Détail
│   │   │   ├── a-propos.vue
│   │   │   ├── contact.vue
│   │   │   ├── mentions-legales.vue
│   │   │   └── politique-confidentialite.vue
│   │   ├── layouts/
│   │   │   ├── default.vue             # En-tête, footer, sélecteur langue
│   │   │   └── minimal.vue             # Pages légales / 404
│   │   ├── components/
│   │   │   ├── base/                   # UI primitives (sans logique métier)
│   │   │   │   ├── BaseButton.vue
│   │   │   │   ├── BaseInput.vue
│   │   │   │   ├── BaseSelect.vue
│   │   │   │   ├── BaseCard.vue
│   │   │   │   └── BaseModal.vue
│   │   │   └── sections/               # Blocs de page (présentation pure)
│   │   │       ├── SectionHero.vue
│   │   │       ├── SectionFeatures.vue
│   │   │       ├── SectionStats.vue
│   │   │       ├── SectionPosts.vue
│   │   │       ├── SectionCTA.vue
│   │   │       ├── SectionTeam.vue
│   │   │       └── SectionContactForm.vue
│   │   ├── composables/                # Logique réutilisable
│   │   │   ├── useSeo.ts               # Title/description/OG centralisés
│   │   │   ├── useLocale.ts            # Aides i18n (locale, RTL)
│   │   │   ├── useContentMock.ts       # Contenu statique (Phase 1)
│   │   │   └── useContact.ts           # Stub formulaire (pas d'envoi)
│   │   ├── plugins/
│   │   │   ├── i18n.client.ts          # Config i18n + RTL
│   │   │   └── analytics.client.ts     # Placeholder (désactivé)
│   │   ├── middleware/
│   │   │   └── locale.ts               # Redirections i18n
│   │   ├── assets/
│   │   │   ├── styles/                 # CSS additionnels
│   │   │   ├── fonts/                  # Inter/Cairo/Noto Naskh
│   │   │   └── images/                 # Images locales (WebP/AVIF)
│   │   ├── public/
│   │   │   ├── favicon.ico
│   │   │   ├── robots.txt
│   │   │   └── sitemap.xml
│   │   ├── app.vue
│   │   ├── error.vue                   # 404/500
│   │   ├── app.config.ts               # Tokens design (espaces, couleurs)
│   │   ├── nuxt.config.ts              # Config Nuxt (i18n, image, modules)
│   │   ├── package.json                # Dépendances front (Nuxt, Tailwind)
│   │   └── tsconfig.json
│   │
│   ├── api/                            # 🔮 PHASE 2 - Backend (Node + MongoDB/Mongoose)
│   │                                   # Placeholder — pas d'impact Phase 1
│   │
│   └── admin/                          # 🔮 PHASE 3 - Backoffice (Nuxt/Vite)
│                                       # Placeholder — pas d'impact Phase 1
│
├── packages/                           # 🎯 PHASE 1 - Code partagé
│   ├── shared/                         # Types, utils, constantes
│   │   ├── src/
│   │   │   ├── types/
│   │   │   │   ├── publication.ts      # interface Publication
│   │   │   │   ├── user.ts
│   │   │   │   ├── locale.ts           # type Locale = 'fr' | 'en' | 'ar'
│   │   │   │   └── index.ts            # Exports centralisés
│   │   │   ├── constants/
│   │   │   │   ├── locales.ts          # SUPPORTED_LOCALES = ['fr', 'en', 'ar']
│   │   │   │   └── routes.ts
│   │   │   └── utils/
│   │   │       ├── formatDate.ts
│   │   │       └── slugify.ts
│   │   ├── package.json                # Nom: @lexafric/shared
│   │   └── tsconfig.json
│   │
│   └── ui/                             # 🔮 PHASE 3 - Composants partagés (optionnel)
│       ├── src/
│       │   └── components/
│       │       └── BaseButton.vue      # Si web + admin partagent UI
│       ├── package.json                # Nom: @lexafric/ui
│       └── tsconfig.json
│
├── .claude/
│   └── instructions.md                 # Ce fichier
│
├── package.json                        # 🎯 Scripts racine + workspaces
├── pnpm-workspace.yaml                 # 🎯 Définition monorepo
├── turbo.json                          # 🔮 PHASE 2+ - Cache builds (optionnel)
├── tsconfig.json                       # Config TypeScript de base
├── .gitignore
└── README.md
```

### 3.3) Évolution par phase

> **Chaque phase doit être validée fonctionnellement avant d'ouvrir la suivante.**

| Phase | Dossiers actifs | Actions | But |
|-------|----------------|---------|-----|
| **Phase 1** | `apps/web/` + `packages/shared/` | Front Nuxt + types de base | Site vitrine multilingue |
| **Phase 2** | + `apps/api/` | Backend API (NestJS/Fastify) | Formulaire contact, CMS publications |
| **Phase 3** | + `apps/admin/` | Backoffice admin | Édition publications, stats |
| **Phase 4** | + `packages/ui/` | Composants partagés | UI réutilisée web + admin |

**Règle** : Chaque phase = nouveaux dossiers. **Aucune restructuration**.

### 3.4) Outils de gestion

**Phase 1 : pnpm workspaces seul**
```yaml
# pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
```
Suffit amplement pour Phase 1 (front uniquement).

**Turborepo (optionnel — uniquement dès qu'on ajoute API/Admin)**
- Cache des builds
- Parallélisation des tâches
- À activer en Phase 2+ si 3+ apps et builds lents

### 3.5) Imports partagés (exemple)

**Définition du type** (packages/shared) :
```typescript
// packages/shared/src/types/publication.ts
export interface Publication {
  id: string
  title: string
  slug: string
  locale: 'fr' | 'en' | 'ar'
}
```

**Utilisation front** (apps/web) :
```typescript
// apps/web/composables/useContentMock.ts
import type { Publication } from '@lexafric/shared'

export const useContentMock = () => {
  const posts: Publication[] = [...]
}
```

**Utilisation backend** (apps/api) :
```typescript
// apps/api/src/modules/posts/posts.service.ts
import type { Publication } from '@lexafric/shared'

async create(data: Publication) { ... }
```

**Résultat** : Un seul type, zéro duplication, synchronisation garantie.

### 3.6) Règles d'implémentation

* **apps/web/pages/** : assemblage de **sections** + SEO (via `useSeo`), **pas d'appels réseau** en Phase 1.
* **apps/web/components/sections/** : **présentation pure**, pilotées par `props`.
* **apps/web/components/base/** : primitives UI **sans logique métier**.
* **apps/web/composables/** : logique réutilisable (front uniquement).
* **packages/shared/** : types, utils, constantes **partagés** front/back.
* **Aucun secret** côté client ; tout ce qui est sensible → backend (Phase 2+).

---

## 4) Pages (condensées) à produire en Phase 1

1. **Accueil** (Hero, blocs expertises, chiffres, CTA Contact)
2. **Nos expertises** (fusion des anciennes rubriques en sections + ancres)
3. **Publications — liste** (aperçus statiques/mock)
4. **Publication — détail** (structure article + SEO Article)
5. **À propos & équipe** (présentation + SectionTeam)
6. **Contact** (formulaire simple, lien WhatsApp — **placeholder** d'envoi)
7. **(Optionnel) Lexiclub** (placeholder)
8. **Mentions légales**
9. **Politique de confidentialité**

> **Condensation** : on garde l'essentiel, on supprime le redondant. Les "sous-pages" deviennent des **sections**.

---

## 5) Multilingue & RTL (AR)

* **Locales** : `fr` (défaut), `en`, `ar`.
* **Routes localisées** + balises **`hreflang`** automatiques.
* Activer **`dir="rtl"`** sur `<html>` quand la locale est `ar`.
* Utiliser des **propriétés CSS logiques** (ex. `margin-inline-start`) pour éviter de dupliquer les styles.
* **Fallback** : si un contenu manque dans EN/AR, afficher FR avec un **badge discret "traduction à venir"**.

---

## 6) Performance & SEO (non négociables)

* **SSR/SSG** activé par défaut sur toutes les pages publiques.
* **Budgets** : **LCP < 2.5s**, **CLS < 0.1**, **TBT < 200 ms** (mobile).
* **Images** : Nuxt Image (provider **local**), **WebP/AVIF**, lazy, dimensions explicites.
* **Meta par page** : Title (<60), Description (150–160), **OpenGraph** (1200×630).
* **Schema.org** : `Organization` (site), `Article` (publication).
* **Sitemap i18n** + **robots.txt** + **canonical**.
* **Accessibilité** : WCAG **AA** (contrastes, focus visibles, ARIA, navigation clavier).

---

## 7) Intégrations externes (préparation, pas d'implémentation)

* **Chatbot** : bouton/flottant d'ouverture de panneau → **pas de connexion** en Phase 1.
* **APIs sociales (WhatsApp/Facebook/LinkedIn)** : aucun appel direct depuis le front ; placer **uniquement** des hooks UI (boutons/CTA) qui seront reliés **plus tard** au backend.
* **Règle** : **tout** ce qui touche aux APIs externes passera par le **backend** ultérieurement.

---

## 8) Environnements & déploiement (front)

* **DEV local** + **PROD** (Vercel).
* **Staging** optionnel si plusieurs contributeurs ou publications fréquentes.
* **runtimeConfig (public)** :

  * `SITE_URL` (obligatoire)
  * `DEFAULT_LOCALE` (`fr`)
  * `ENABLE_ANALYTICS` (false par défaut)

---

## 9) Collaboration à deux (rôles & discipline)

* **Rôle A (architecture & contenu)** : structure des pages/sections, textes FR initiaux, check SEO/UX.
* **Rôle B (implémentation & i18n)** : intégration sections, styles Tailwind, mise en place EN/AR + RTL, perfs.
* **Revue croisée** : chaque PR respecte **SEO, perfs, a11y, i18n**.
* **Aucune dépendance** ajoutée sans justification (poids, utilité, alternatives).

---

## 10) Definition of Ready (avant d'implémenter une page)

* Sections listées et leur ordre validés.
* Textes **FR** prêts (ou placeholders).
* Choix des images (légères) validé.
* SEO de la page défini (title, description, OG).

## 11) Definition of Done (quand la page est prête)

* **FR/EN/AR** rendus et vérifiés (RTL ok).
* SEO complet (title/desc/OG), **hreflang** correct.
* **Perfs** dans les budgets (images optimisées, pas de console warn).
* **Accessibilité** : labels, focus, contrastes, navigation clavier ok.
* **Mobile-first validé** : rendering et interactions fluides sur petits écrans.
* **RTL visuel validé** : mise en page arabe vérifiée visuellement (direction, alignements).

---

## 12) Hors scope — Phase 1

* Pas d'auth, pas de back-office, pas d'APIs, pas de chatbot connecté.
* Pas de Pinia tant qu'un **besoin concret** d'état global n'existe pas.
* **Aucune référence à des sources/versions legacy externes**. Le front Phase 1 est construit from scratch.

---

## 13) Livrables Phase 1 (fin de semaine)

* Arborescence complète ci-dessus **créée** (fichiers vides acceptés).
* Pages **Accueil**, **Expertises**, **Publications (liste + détail)**, **À propos**, **Contact**, **Mentions**, **Confidentialité** **structurées** avec sections et contenus FR initiaux (EN/AR placeholders possibles).
* i18n + RTL activés, **SEO de base** OK, images locales optimisées.
* Déploiement **PROD** front en ligne (Vercel) — staging optionnel.

---

Ces instructions définissent **l'architecture, les technologies et la discipline** à suivre pour un front **minimal, propre et évolutif**. Elles sont conçues pour être lues **à chaque session** et guider des livrables **cohérents et rapides**.
