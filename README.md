# Lexafric - Projet vitrine multilingue

Monorepo pour le projet front Lexafric (FR/EN/AR avec RTL).

## 📁 Structure

```
LexaFront/
├── apps/
│   └── web/          # Front Nuxt (Phase 1)
├── packages/
│   └── shared/       # Code partagé (types, utils, constantes)
└── .claude/
    └── instructions.md  # Instructions pour Claude
```

## 🚀 Démarrage rapide

### Prérequis

- Node.js >= 20 (Nuxt 3.17.5 nécessite Node 20+)
- pnpm >= 8 (recommandé) ou npm
- **NVM recommandé** pour gérer les versions de Node

### Installation avec NVM (recommandé)

```bash
# Installer Node 20 avec NVM
nvm install 20
nvm use 20

# Vérifier la version
node --version  # devrait afficher v20.x.x

# Installer les dépendances
npm install

# Lancer le dev
cd apps/web
npm run dev
```

Le site sera accessible sur `http://localhost:3001`

**Note :** Si vous utilisez NVM, pensez à faire `nvm use 20` à chaque fois que vous ouvrez un nouveau terminal pour ce projet.

## 📦 Commandes disponibles

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualiser le build
npm run lint     # Linter le code
```

## 🌍 Multilingue

Le site supporte 3 langues :
- **FR** (français) - par défaut
- **EN** (anglais)
- **AR** (arabe) - avec support RTL

## 🛠️ Stack technique

- **Nuxt 3** - Framework Vue.js avec SSR/SSG
- **TypeScript** - Typage strict
- **Tailwind CSS** - Styles utilitaires
- **@nuxtjs/i18n** - Internationalisation
- **@nuxt/image** - Optimisation d'images

## 📝 Instructions Claude

Les instructions complètes pour le développement se trouvent dans `.claude/instructions.md`.

## 🔗 Liens utiles

- [Documentation Nuxt](https://nuxt.com)
- [Documentation Tailwind](https://tailwindcss.com)
- [Documentation i18n](https://i18n.nuxtjs.org)

## 📄 Licence

Privé - Lexafric © 2025
