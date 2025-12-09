# ✅ Checklist d'Optimisation Performance - Lexafric

## 🎯 Objectif
Réduire le temps de chargement de **5-8 secondes → 1-2 secondes** sans aucune régression visuelle.

---

## Phase 1: Préparation (5 min)

- [ ] **1.1** Prendre un screenshot de la page actuelle (référence visuelle)
- [ ] **1.2** Tester performance actuelle: https://pagespeed.web.dev/
  - Noter le score: _____ / 100
  - Noter LCP (Largest Contentful Paint): _____ secondes
  - Noter taille totale: _____ MB
- [ ] **1.3** Sauvegarder la branche actuelle
  ```bash
  git status
  git add .
  git commit -m "save: avant optimisation performance"
  ```

---

## Phase 2: Optimisation Images (10-15 min)

### 2.1 Exécuter le script d'optimisation

- [ ] **2.1.1** Vérifier que sharp est installé
  ```bash
  cd C:\Users\ahmat\code\Lexafric\LexaFront
  pnpm list sharp
  ```

- [ ] **2.1.2** Exécuter l'optimisation
  ```bash
  pnpm run optimize:images
  ```

- [ ] **2.1.3** Vérifier le rapport (économie attendue: 60-80%)
  - Taille avant: _____ MB
  - Taille après: _____ MB
  - Économie: _____ %

### 2.2 Déplacer images critiques vers /public

- [ ] **2.2.1** Créer dossiers dans public
  ```bash
  mkdir -p apps/web/public/images/Exterieur
  mkdir -p apps/web/public/images/Salle_Reunion
  mkdir -p apps/web/public/images/M_Beti
  mkdir -p apps/web/public/images/team
  ```

- [ ] **2.2.2** Copier images WebP vers public
  ```bash
  # Hero
  cp apps/web/src/assets/images/Exterieur/hero-background.webp apps/web/public/images/Exterieur/

  # Services
  cp apps/web/src/assets/images/Exterieur/juridique.webp apps/web/public/images/Exterieur/
  cp apps/web/src/assets/images/Exterieur/sociale.webp apps/web/public/images/Exterieur/

  # Approach (9 images)
  cp apps/web/src/assets/images/Salle_Reunion/3.webp apps/web/public/images/Salle_Reunion/
  cp apps/web/src/assets/images/M_Beti/beti_4.webp apps/web/public/images/M_Beti/
  # ... etc (voir liste complète dans OPTIMISATION_GUIDE.md)
  ```

- [ ] **2.2.3** Vérifier les images sont copiées
  ```bash
  ls -lh apps/web/public/images/**/*.webp
  ```

### 2.3 Tester visuellement

- [ ] **2.3.1** Lancer le serveur dev
  ```bash
  pnpm dev
  ```

- [ ] **2.3.2** Ouvrir http://localhost:3000

- [ ] **2.3.3** Vérifier images hero, services, approach s'affichent ✅

- [ ] **2.3.4** Ouvrir DevTools Console → Vérifier aucune erreur 404

---

## Phase 3: Nettoyer Dépendances (2 min)

- [ ] **3.1** Supprimer GSAP (non utilisé)
  ```bash
  cd apps/web
  pnpm remove gsap
  ```

- [ ] **3.2** Supprimer @vueuse/motion (non utilisé)
  ```bash
  pnpm remove @vueuse/motion
  ```

- [ ] **3.3** Vérifier package.json
  ```bash
  cat package.json | grep -E "(gsap|motion)"
  # Ne devrait rien retourner
  ```

- [ ] **3.4** Tester que tout fonctionne
  ```bash
  pnpm dev
  # Vérifier page d'accueil
  ```

---

## Phase 4: Optimiser SectionApproach (5 min)

### 4.1 Remplacer imports directs par chemins public

- [ ] **4.1.1** Ouvrir `apps/web/src/components/sections/SectionApproach.vue`

- [ ] **4.1.2** Chercher ligne 621-631 (bloc `import img1 from...`)

- [ ] **4.1.3** Remplacer par:
  ```typescript
  const images = {
    img1: '/images/Salle_Reunion/3.webp',
    img2: '/images/M_Beti/beti_4.webp',
    img3: '/images/Exterieur/IMG_6454.webp',
    img4: '/images/team/24.webp',
    img5: '/images/team/26.webp'
  }

  // Pour la méthodologie
  const methodImages = {
    analyse: '/images/Salle_Reunion/4.webp',
    conseil: '/images/team/25.webp',
    oeuvre: '/images/team/IMG_6393.webp',
    suivi: '/images/team/27.webp'
  }
  ```

- [ ] **4.1.4** Sauvegarder et vérifier pas d'erreur

### 4.2 Remplacer `<img>` par `<NuxtImg>` avec lazy loading

- [ ] **4.2.1** Dans SectionApproach, chercher tous les `<img>`

- [ ] **4.2.2** Remplacer par:
  ```vue
  <NuxtImg
    :src="images.img1"
    alt="Description"
    loading="lazy"
    format="webp"
    quality="80"
    sizes="xs:100vw sm:50vw md:33vw lg:25vw"
  />
  ```

- [ ] **4.2.3** Tester visuellement - toutes images doivent s'afficher

---

## Phase 5: Vérifier CSS Backgrounds (3 min)

- [ ] **5.1** Chercher CSS backgrounds restants
  ```bash
  grep -r "background-image: url" apps/web/src/components --include="*.vue"
  ```

- [ ] **5.2** Si résultats trouvés, remplacer par `<NuxtImg>` avec `position: absolute`

- [ ] **5.3** Vérifier visuellement après chaque remplacement

---

## Phase 6: Tests Finaux (10 min)

### 6.1 Tests Visuels

- [ ] **6.1.1** Page d'accueil - Hero image affichée ✅
- [ ] **6.1.2** Section Services - Images juridique + sociale ✅
- [ ] **6.1.3** Section Approach - Toutes images visibles ✅
- [ ] **6.1.4** Animations fonctionnent (juste plus rapides) ✅
- [ ] **6.1.5** Hover effects marchent ✅
- [ ] **6.1.6** Responsive mobile OK ✅

### 6.2 Tests Performance

- [ ] **6.2.1** Ouvrir DevTools > Network
- [ ] **6.2.2** Effacer cache et recharger (Ctrl+Shift+R)
- [ ] **6.2.3** Noter taille totale chargée: _____ MB
  - Avant: _____ MB
  - Réduction: _____ %

- [ ] **6.2.4** Ouvrir DevTools > Performance
- [ ] **6.2.5** Enregistrer chargement page
- [ ] **6.2.6** Vérifier FPS constant à 60

- [ ] **6.2.7** PageSpeed Insights
  - URL: https://pagespeed.web.dev/
  - Score: _____ / 100 (cible: 85+)
  - LCP: _____ s (cible: < 2.5s)

### 6.3 Tests Navigateurs

- [ ] **6.3.1** Chrome - OK ✅
- [ ] **6.3.2** Firefox - OK ✅
- [ ] **6.3.3** Edge - OK ✅
- [ ] **6.3.4** Safari - OK ✅
- [ ] **6.3.5** Mobile (Chrome Android) - OK ✅

---

## Phase 7: Build Production (5 min)

- [ ] **7.1** Build production
  ```bash
  pnpm build
  ```

- [ ] **7.2** Vérifier build réussit sans erreur

- [ ] **7.3** Tester preview
  ```bash
  pnpm preview
  ```

- [ ] **7.4** Ouvrir http://localhost:4173

- [ ] **7.5** Vérifier tout fonctionne en production

---

## Phase 8: Commit Final (2 min)

- [ ] **8.1** Review changements
  ```bash
  git status
  git diff
  ```

- [ ] **8.2** Commit
  ```bash
  git add .
  git commit -m "perf: optimisation complète - images WebP + animations + fonts

  - Images: conversion WebP (-60-80% poids)
  - Remplacé CSS backgrounds par NuxtImg lazy
  - Animations: AOS 400ms + étoiles 50→15
  - Parallaxe désactivé (gain CPU)
  - Fonts: loading non-bloquant + poids réduits
  - Supprimé: gsap, @vueuse/motion (non utilisés)

  Résultats:
  - Temps chargement: -4 à -6 secondes
  - Poids total: -10 à -15 MB
  - Score PageSpeed: +40-50 points"
  ```

- [ ] **8.3** Push vers remote
  ```bash
  git push origin ahmat-branch
  ```

---

## 🎉 Résultats Attendus

| Métrique | Avant | Après | Amélioration |
|----------|-------|-------|--------------|
| PageSpeed Score | 40-50 | 85-95 | +40-50 points |
| Temps chargement | 5-8s | 1-2s | -75% |
| LCP | 5-8s | <2.5s | -60% |
| Poids total | 15-20 MB | 5-8 MB | -60-70% |
| FPS scroll | 30-40 | 60 | +50% |

---

## ⚠️ En Cas de Problème

### Images ne s'affichent pas
```bash
# Vérifier chemins
ls apps/web/public/images/Exterieur/

# Vérifier console navigateur
# Devrait voir les requêtes 200 OK pour .webp
```

### Erreurs de build
```bash
# Nettoyer
rm -rf node_modules .nuxt apps/web/.nuxt
pnpm install
pnpm build
```

### Régression visuelle
```bash
# Revenir en arrière
git reset --hard HEAD~1

# Ou revenir au commit "save: avant optimisation"
git log --oneline
git reset --hard <commit-hash>
```

---

## 📋 Notes

Date début: ____________
Date fin: ____________
Durée totale: ____________

Score avant: _____ / 100
Score après: _____ / 100

Commentaires:
_________________________________
_________________________________
_________________________________

---

**✅ Checklist complétée le:** ____________
