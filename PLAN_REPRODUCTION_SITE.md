# Plan de reproduction du site Lexafric

## 🎯 Analyse du site existant (www.lexafric.com)

### Vue d'ensemble
- **Type** : Site vitrine pour cabinet de conseil juridique et fiscal
- **Localisation** : N'Djamena, Tchad
- **Langues** : Français (principal) + support multilingue
- **Public cible** : Entreprises en Afrique

---

## 📋 Structure complète du site

### 1. **Navigation principale**

```
Accueil
Services
  ├── Assistance Juridique
  ├── Assistance Fiscale
  ├── Assistance Sociale
  ├── Assistance à Recrutement
  └── Formations
Solutions
  ├── Secrétariat Juridique
  ├── Gouvernance d'Entreprise
  └── Création & Transformation
Lexiclub
À propos
  ├── Contactez-nous
  └── Notre Équipe
```

---

## 🎨 Sections de la page d'accueil (ordre exact)

### **1. Hero Section (Slider avec 2 slides)**

**Slide 1 :**
- Image de fond : `slide-4-1.jpg`
- Titre : "BIENVENUE SUR LEXAFRIC"
- Sous-titre : "L'expert qui vous accompagne"
- Bouton CTA : "NOTRE EQUIPE"

**Slide 2 :**
- Image de fond : `slide-4-2.jpg`
- Titre : "LEXAFRIC vous offre des solutions idoines"
- Sous-titre : "Une expertise avérée"
- Bouton CTA : "NOUS CONTACTER"

**Caractéristiques techniques :**
- Slider automatique avec transitions
- Indicateurs de pagination (dots)
- Flèches de navigation
- Overlay sombre sur les images pour lisibilité du texte

---

### **2. Services Section**

**Titre de section :** "Nos Services"

**5 services affichés en grille :**

1. **Assistance Juridique**
   - Icône/Image
   - Description courte
   - Lien "SAVOIR PLUS"

2. **Assistance Fiscale**
   - Icône/Image
   - Description courte
   - Lien "SAVOIR PLUS"

3. **Assistance Sociale**
   - Icône/Image
   - Description courte
   - Lien "SAVOIR PLUS"

4. **Assistance à Recrutement**
   - Icône/Image
   - Description courte
   - Lien "SAVOIR PLUS"

5. **Formations**
   - Icône/Image
   - Description courte
   - Lien "SAVOIR PLUS"

**Mise en page :**
- Grille responsive (3 colonnes desktop, 2 tablette, 1 mobile)
- Cards avec hover effect
- Icônes ou images illustratives

---

### **3. À Propos Section**

**Contenu :**
- Titre : "À Propos de Lexafric"
- Description : "Cabinet de Conseil Juridique et Fiscal"
- Texte de présentation
- Mise en avant : "10+ années d'expérience"
- Contact : (+235) 22 51 91 66
- Possiblement une image d'équipe ou de bureau

**Mise en page :**
- Layout 2 colonnes (texte + image)
- Stats clés mis en évidence

---

### **4. Vision, Mission & Valeurs Section**

**Vision :**
"LexAfric est un cabinet de dimension internationale"

**Mission :**
Accompagner les entreprises nationales et sous-régionales dans la normalisation internationale

**Valeurs (4 piliers) :**
1. **Intégrité** - Description
2. **Écoute** - Description
3. **Pédagogie** - Description
4. **Interaction** - Description

**Mise en page :**
- Grille 4 colonnes (responsive)
- Icônes pour chaque valeur
- Background différencié (couleur ou image)

---

### **5. Méthodologie Section**

**Titre :** "Notre Méthodologie"

**3 étapes :**
1. **Stratégie**
   - Description de l'approche stratégique

2. **Planification**
   - Description de la phase de planification

3. **Mise en œuvre**
   - Description de l'exécution

**Mise en page :**
- Timeline horizontale ou verticale
- Numérotation claire (01, 02, 03)
- Icônes représentatives

---

### **6. Partenaires Section**

**Titre :** "Nos Partenaires"
**Sous-titre :** "Un réseau d'experts diversifiés"

**Contenu :**
- 35 logos de partenaires affichés
- Grille responsive
- Logos en niveaux de gris avec effet hover couleur

**Mise en page :**
- Grille 5-6 colonnes (desktop)
- Responsive adaptatif
- Possiblement un carousel pour mobile

---

### **7. Blog/Newsletter Section**

**Contenu :**
- Titre : "Restez informés"
- Description : Encouragement à s'abonner à la newsletter
- Formulaire d'inscription email
- Bouton : "VOIR LE BLOG"

**Mise en page :**
- Centré ou 2 colonnes
- Champ email + bouton submit
- Lien vers le blog

---

### **8. Footer**

**Structure en 4 colonnes :**

**Colonne 1 : À propos**
- Logo Lexafric
- Description courte du cabinet
- Slogan

**Colonne 2 : Liens rapides**
- Accueil
- Services
- Solutions
- À propos
- Contact

**Colonne 3 : Nos Services**
- Assistance Juridique
- Assistance Fiscale
- Assistance Sociale
- Recrutement
- Formations

**Colonne 4 : Contact**
- **Adresse :** 2700, Avenue Ngarta Tombalbaye, N'djamena, Tchad
- **Téléphone :** (+235) 22 51 91 66
- **Email :** contact@lexafric.com
- **Réseaux sociaux :** Icônes (Facebook, LinkedIn, Twitter, etc.)

**Copyright bar :**
"Copyrights © 2019. Tous Droits Réservés"

---

## 🎨 Design System à reproduire

### **Palette de couleurs (estimée)**
- **Primaire :** Bleu professionnel (#1E3A8A ou similaire)
- **Secondaire :** Or/Jaune (#F59E0B pour les accents)
- **Texte principal :** Gris foncé (#1F2937)
- **Texte secondaire :** Gris moyen (#6B7280)
- **Fond :** Blanc (#FFFFFF)
- **Fond alternatif :** Gris très clair (#F9FAFB)

### **Typographie**
- **Famille :** Probablement sans-serif moderne (Poppins, Roboto, ou Inter)
- **Titres (H1) :** 48px-56px, bold
- **Titres (H2) :** 36px-42px, bold
- **Titres (H3) :** 24px-28px, semi-bold
- **Corps de texte :** 16px-18px, regular
- **Boutons :** 14px-16px, medium/semi-bold

### **Espacements**
- **Sections :** Padding vertical 80px-120px
- **Entre éléments :** 32px-48px
- **Cards :** Padding 24px-32px
- **Container max-width :** 1200px-1280px

### **Effets & Animations**
- **Hover sur cards :** Élévation (shadow) + légère translation Y
- **Hover sur boutons :** Changement de couleur + transition smooth
- **Slider Hero :** Transition fade avec durée 5-7 secondes
- **Scroll animations :** Fade-in des sections (optionnel)
- **Images :** Zoom léger au hover

---

## 🛠️ Plan de développement recommandé

### **Phase 1 : Structure & Navigation (1-2 jours)**
✅ Votre structure actuelle est déjà bonne !

**Ajustements nécessaires :**
1. Mettre à jour la navigation avec les bonnes pages
2. Créer les pages manquantes :
   - `/services/assistance-juridique`
   - `/services/assistance-fiscale`
   - `/services/assistance-sociale`
   - `/services/assistance-recrutement`
   - `/services/formations`
   - `/solutions/secretariat-juridique`
   - `/solutions/gouvernance-entreprise`
   - `/solutions/creation-transformation`
   - `/lexiclub`
   - `/equipe`

---

### **Phase 2 : Composants de base (1 jour)**

**Composants à créer/adapter :**
```
components/
├── base/
│   ├── HeroSlider.vue          ← NOUVEAU (slider avec 2 slides)
│   ├── ServiceCard.vue         ← MODIFIER (style Lexafric)
│   ├── ValueCard.vue           ← NOUVEAU (pour les 4 valeurs)
│   ├── MethodologyStep.vue     ← NOUVEAU (pour méthodologie)
│   ├── PartnerLogo.vue         ← NOUVEAU (grille de logos)
│   └── NewsletterForm.vue      ← NOUVEAU (formulaire d'inscription)
```

---

### **Phase 3 : Sections de la page d'accueil (2-3 jours)**

**Sections à créer :**
```
components/sections/
├── SectionHeroSlider.vue       ← Remplacer SectionHero actuel
├── SectionServices.vue         ← Adapter avec les 5 services
├── SectionAbout.vue            ← NOUVEAU (À propos avec stats)
├── SectionValues.vue           ← NOUVEAU (Vision, Mission, Valeurs)
├── SectionMethodology.vue      ← NOUVEAU (3 étapes)
├── SectionPartners.vue         ← NOUVEAU (35 logos)
└── SectionNewsletter.vue       ← NOUVEAU (formulaire + lien blog)
```

**Ordre dans `pages/index.vue` :**
```vue
<template>
  <div>
    <SectionHeroSlider />
    <SectionServices />
    <SectionAbout />
    <SectionValues />
    <SectionMethodology />
    <SectionPartners />
    <SectionNewsletter />
  </div>
</template>
```

---

### **Phase 4 : Pages internes (2-3 jours)**

**Priorité 1 :**
- Page Services (détails de chaque service)
- Page Solutions (détails de chaque solution)
- Page Équipe (avec photos et bios)
- Page Contact (formulaire + map)

**Priorité 2 :**
- Page Lexiclub (section membres/avantages)
- Pages individuelles des services

---

### **Phase 5 : Contenu & Assets (1-2 jours)**

**À collecter/créer :**
1. **Images :**
   - 2 images hero slider (format paysage, 1920x1080)
   - Images pour chaque service
   - Photos de l'équipe
   - Photo du bureau/locaux
   - 35 logos partenaires

2. **Contenu texte :**
   - Descriptions détaillées de chaque service
   - Bios de l'équipe
   - Textes de présentation
   - Articles de blog (si applicable)

3. **Traductions :**
   - Mettre à jour les fichiers `fr.json`, `en.json`, `ar.json`

---

### **Phase 6 : Optimisation & Tests (1 jour)**

**Checklist finale :**
- ✅ Responsive sur mobile/tablette/desktop
- ✅ Performance (Lighthouse score > 90)
- ✅ SEO (meta tags, alt texts, sitemap)
- ✅ Accessibilité (ARIA labels, contraste)
- ✅ Multilingue fonctionnel (FR/EN/AR)
- ✅ Formulaire de contact opérationnel
- ✅ Tests navigateurs (Chrome, Firefox, Safari)

---

## 📦 Dépendances supplémentaires à installer

```bash
# Slider/Carousel
pnpm add swiper

# Animations
pnpm add @vueuse/motion

# Formulaire
pnpm add @vuelidate/core @vuelidate/validators

# Icônes (si besoin)
pnpm add @iconify/vue
```

---

## 🎯 Différences avec votre structure actuelle

### **Ce qui est déjà bon :**
✅ Architecture Nuxt 3 + TypeScript + Tailwind
✅ Support multilingue (i18n)
✅ Support RTL pour l'arabe
✅ Structure de composants modulaires
✅ Layouts réutilisables
✅ Composables pour la logique

### **Ce qui doit être adapté :**
❌ Navigation (ajouter Services, Solutions, Lexiclub)
❌ Hero Section (remplacer par un slider)
❌ Sections manquantes (Valeurs, Méthodologie, Partenaires)
❌ Pages de services détaillées
❌ Page Équipe
❌ Contenu spécifique Lexafric

---

## 🚀 Recommandation d'ordre de travail

### **Semaine 1 :**
1. Créer le Hero Slider
2. Adapter la section Services (5 services)
3. Créer la section À Propos
4. Créer la section Valeurs

### **Semaine 2 :**
5. Créer la section Méthodologie
6. Créer la section Partenaires
7. Créer la section Newsletter
8. Adapter le Footer

### **Semaine 3 :**
9. Créer les pages Services détaillées
10. Créer la page Équipe
11. Créer la page Contact avec formulaire
12. Créer la page Lexiclub

### **Semaine 4 :**
13. Intégrer le contenu réel (textes + images)
14. Traductions complètes (FR/EN/AR)
15. Tests & optimisations
16. Déploiement

---

## 📝 Notes importantes

1. **Demandez au client :**
   - Les images en haute qualité (hero, équipe, services)
   - Les logos des 35 partenaires
   - Les textes exacts pour chaque section
   - L'accès aux réseaux sociaux
   - Le contenu du blog (si existant)

2. **Palette de couleurs exacte :**
   - Demandez la charte graphique si disponible
   - Ou utilisez un outil comme ColorZilla pour extraire les couleurs exactes

3. **Polices de caractères :**
   - Identifiez la police exacte (WhatFont extension Chrome)
   - Ou utilisez Google Fonts pour une alternative proche

4. **Fonctionnalités backend :**
   - Formulaire de contact : intégration email (Nodemailer, SendGrid, etc.)
   - Newsletter : service type Mailchimp, Sendinblue
   - Blog : CMS headless (Strapi, Contentful) ou markdown files

---

## 🎨 Mockups/Wireframes recommandés

Avant de coder, créez des wireframes pour :
1. Page d'accueil complète
2. Page Service détaillée
3. Page Équipe
4. Page Contact

**Outils suggérés :** Figma, Adobe XD, ou Sketch

---

## ✅ Checklist de validation finale

Avant la livraison :
- [ ] Toutes les pages sont créées et fonctionnelles
- [ ] Navigation cohérente sur toutes les pages
- [ ] Contenu traduit en 3 langues (FR/EN/AR)
- [ ] RTL fonctionne correctement pour l'arabe
- [ ] Formulaire de contact envoie les emails
- [ ] Newsletter s'inscrit correctement
- [ ] 35 logos partenaires affichés
- [ ] Photos de l'équipe avec bios
- [ ] SEO optimisé (meta tags, sitemap)
- [ ] Performance > 90 sur Lighthouse
- [ ] Responsive sur tous les appareils
- [ ] Tests navigateurs validés
- [ ] Liens réseaux sociaux actifs
- [ ] Google Maps intégré (page contact)
- [ ] Favicon et images OG configurés

---

## 🔗 Ressources utiles

- **Swiper JS** : https://swiperjs.com/ (pour le slider hero)
- **Tailwind Components** : https://tailwindui.com/components
- **Heroicons** : https://heroicons.com/ (icônes)
- **Unsplash** : https://unsplash.com/ (images temporaires si besoin)

---

## 💡 Conseils pour un rendu professionnel

1. **Espacement cohérent :** Utilisez le système de spacing Tailwind (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
2. **Hiérarchie visuelle :** Tailles de police clairement différenciées
3. **Contraste :** Vérifiez l'accessibilité des couleurs (WCAG AA)
4. **Animations subtiles :** Ne pas abuser, privilégier la fluidité
5. **Loading states :** Ajouter des skeletons pour le chargement
6. **Error states :** Gérer les erreurs de formulaire élégamment
7. **Images optimisées :** Utiliser @nuxt/image pour la performance

---

Bonne chance pour la reproduction du site ! 🚀
