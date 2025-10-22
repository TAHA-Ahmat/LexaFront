# LEXAFRIC - Site Vitrine Multilingue

Site web professionnel pour le cabinet juridique et fiscal Lexafric, développé avec Nuxt 3, Vue 3, et Tailwind CSS.

## 📁 Structure du Projet

```
apps/web/
├── src/                      # Code source de l'application
│   ├── components/          # Composants Vue réutilisables
│   │   ├── base/           # Composants de base (Button, Input, Card, etc.)
│   │   └── sections/       # Sections de pages (Hero, Features, CTA, etc.)
│   ├── composables/        # Composables Vue
│   ├── layouts/            # Layouts de l'application
│   ├── pages/              # Pages de l'application (routing auto)
│   ├── assets/             # Ressources statiques (CSS, images)
│   ├── locales/            # Fichiers de traductions (FR, EN, AR)
│   ├── public/             # Fichiers publics statiques
│   ├── app.vue             # Composant racine
│   └── error.vue           # Page d'erreur personnalisée
│
├── config/                  # Fichiers de configuration
│   ├── nuxt.config.ts      # Configuration Nuxt
│   ├── tailwind.config.ts  # Configuration Tailwind CSS
│   └── app.config.ts       # Configuration de l'application
│
├── scripts/                 # Scripts utilitaires
│   ├── compare-translations.js
│   └── compare-translations.mjs
│
├── package.json            # Dépendances npm
├── tsconfig.json           # Configuration TypeScript
└── README.md               # Documentation
```

## 🚀 Technologies

- **Framework**: Nuxt 3.17.5
- **UI Framework**: Vue 3.5.22
- **Styling**: Tailwind CSS
- **Internationalisation**: @nuxtjs/i18n (FR, EN, AR avec support RTL)
- **Images**: @nuxt/image
- **TypeScript**: Support complet

## 🌐 Fonctionnalités

- ✅ Design premium avec animations et glassmorphism
- ✅ Multilingue (Français, English, العربية)
- ✅ Support RTL pour l'arabe
- ✅ Responsive design (mobile, tablette, desktop)
- ✅ Navigation fluide avec localePath
- ✅ Composants réutilisables
- ✅ SEO optimisé

## 📦 Installation

Installer les dépendances :

```bash
npm install
```

## 🛠️ Développement

Démarrer le serveur de développement sur `http://localhost:3000` :

```bash
npm run dev
```

## 🏗️ Production

Construire l'application pour la production :

```bash
npm run build
```

Prévisualiser la build de production localement :

```bash
npm run preview
```

## 🌍 Langues Supportées

- 🇫🇷 Français (par défaut)
- 🇬🇧 English
- 🇸🇦 العربية (avec support RTL)

## 📄 Pages

- `/` - Page d'accueil (Hero, Services, Stats, Méthodologie, Valeurs, CTA)
- `/services` - Nos services (Juridique, Fiscal, Social, Recrutement, Formations)
- `/solutions` - Nos solutions (Secrétariat Juridique, Gouvernance, Création)
- `/a-propos` - À propos (Mission, Valeurs, Équipe)
- `/contact` - Contact (Formulaire, Coordonnées)
- `/articles` - Blog/Articles
- `/mentions-legales` - Mentions légales
- `/politique-confidentialite` - Politique de confidentialité
- `/offres` - Nos offres

## 🎨 Thème et Design

Le design utilise :
- Palette de couleurs professionnelle (Bleu, Violet, Gris)
- Typographie : Inter (sans-serif)
- Animations fluides et modernes
- Effets de glassmorphism et backdrop-blur
- Ombres douces et dégradés

## 📝 Scripts Utilitaires

- `scripts/compare-translations.js` - Compare les fichiers de traductions pour détecter les incohérences

## 📚 Documentation

Pour plus d'informations, consulter la [documentation Nuxt](https://nuxt.com/docs).

## 🤝 Contribution

1. Créer une nouvelle branche (`git checkout -b feature/ma-fonctionnalite`)
2. Commiter les changements (`git commit -m 'Ajout de ma fonctionnalité'`)
3. Pousser vers la branche (`git push origin feature/ma-fonctionnalite`)
4. Ouvrir une Pull Request

## 📧 Contact

Pour toute question ou suggestion, contactez l'équipe de développement.

---

**Lexafric** - Cabinet de Conseil Juridique et Fiscal en Afrique
