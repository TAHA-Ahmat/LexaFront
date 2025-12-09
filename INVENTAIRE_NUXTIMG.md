# 📊 INVENTAIRE COMPLET - NuxtImg à Remplacer

**Date:** 2025-12-09
**Total:** 21 occurrences dans 3 fichiers

---

## 📁 FICHIERS CONCERNÉS

### 1️⃣ **SectionHeroSimple.vue** (1 occurrence)

**Ligne 6-14** : Image background hero
```vue
<NuxtImg
  src="/images/Exterieur/hero-background.webp"
  alt="Lexafric - Cabinet juridique et fiscal"
  class="hero-image-zoom"
  loading="eager"
  format="webp"
  quality="80"
  :style="{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }"
/>
```

**Props utilisées:**
- `src`: Chemin image
- `alt`: Texte alternatif SEO
- `class`: Animation Ken Burns
- `loading`: eager (priorité haute)
- `format`: webp (déjà le format source)
- `quality`: 80
- `:style`: Inline styles pour positionnement

**Fonctionnalités dépendantes:**
- ✅ Animation CSS `kenBurns` (lignes 169-176)
- ✅ Overlay gradient (ligne 18)
- ✅ z-index: 0 (ligne 163)

**Priorité:** 🔴 HAUTE (page d'accueil critique)

---

### 2️⃣ **SectionServicesSimple.vue** (2 occurrences)

#### **Occurrence 1 - Ligne 27-35** : Service Juridique
```vue
<NuxtImg
  src="/images/Exterieur/juridique.webp"
  alt="Assistance juridique Lexafric"
  class="absolute inset-0 w-full h-full object-cover"
  :style="{ zIndex: 0, display: 'block' }"
  loading="lazy"
  format="webp"
  quality="80"
/>
```

**Props utilisées:**
- `src`: /images/Exterieur/juridique.webp
- `alt`: SEO
- `class`: Tailwind positioning
- `loading`: lazy
- `:style`: z-index + display

**Fonctionnalités:**
- ✅ Overlay dark (ligne 37, z-index: 1)
- ✅ Card hover effect
- ✅ Border gradient

#### **Occurrence 2 - Ligne 105-113** : Service Sociale
```vue
<NuxtImg
  src="/images/Exterieur/sociale.webp"
  alt="Assistance sociale Lexafric"
  class="absolute inset-0 w-full h-full object-cover"
  :style="{ zIndex: 0, display: 'block' }"
  loading="lazy"
  format="webp"
  quality="80"
/>
```

**Props:** Identiques à Juridique

**Priorité:** 🟡 MOYENNE

---

### 3️⃣ **SectionApproach.vue** (18 occurrences)

#### **Zone A : Images asymétriques desktop (5 images × 2 versions = 10 occurrences)**

Chaque image apparaît **deux fois** : desktop + mobile

##### **Image 1 - Ligne 32-40** (Desktop) + **Ligne 205-213** (Mobile)
```vue
<NuxtImg
  :src="images.img1"  // /images/Salle_Reunion/3.webp
  alt="Équipe Lexafric en réunion collaborative"
  class="w-full h-full object-cover rounded-xl shadow-2xl"
  loading="eager"
  format="webp"
  quality="80"
  :style="{ display: 'block' }"
/>
```

**Variable source:** `images.img1` (ligne 725)

##### **Image 2 - Ligne 50-58** (Desktop) + **Ligne 218-226** (Mobile)
```vue
<NuxtImg :src="images.img2" />  // /images/M_Beti/beti_4.webp
```

##### **Image 3 - Ligne 68-76** (Desktop) + **Ligne 229-237** (Mobile)
```vue
<NuxtImg :src="images.img3" />  // /images/Exterieur/IMG_6454.webp
```

##### **Image 4 - Ligne 86-94** (Desktop) + **Ligne 241-249** (Mobile)
```vue
<NuxtImg :src="images.img4" />  // /images/team/24.webp
```

##### **Image 5 - Ligne 104-112** (Desktop) + **Ligne 252-260** (Mobile)
```vue
<NuxtImg :src="images.img5" />  // /images/team/26.webp
```

**Fonctionnalités:**
- ✅ Animations floating (CSS lignes 818-882)
- ✅ Hover scale + shadow
- ✅ AOS animations
- ✅ Position absolute asymétrique

---

#### **Zone B : Méthodologie timeline (4 images × 2 versions = 8 occurrences)**

##### **Étape 1 - Analyse** (Ligne 366-374 Desktop + 505-513 Mobile)
```vue
<NuxtImg
  src="/images/Salle_Reunion/4.webp"
  alt="Analyse - Méthodologie Lexafric"
  class="absolute inset-0 w-full h-full object-cover"
  :style="{ zIndex: 0 }"
  loading="lazy"
  format="webp"
  quality="80"
/>
```

##### **Étape 2 - Conseil** (Ligne 400-408 Desktop + 539-547 Mobile)
```vue
<NuxtImg src="/images/team/25.webp" />
```

##### **Étape 3 - Mise en œuvre** (Ligne 433-441 Desktop + 573-581 Mobile)
```vue
<NuxtImg src="/images/team/IMG_6393.webp" />
```

##### **Étape 4 - Suivi** (Ligne 466-474 Desktop + 606-614 Mobile)
```vue
<NuxtImg src="/images/team/27.webp" />
```

**Fonctionnalités:**
- ✅ Overlay gradient (z-index: 1)
- ✅ Glow pulse animations (lignes 1091-1118)
- ✅ Timeline horizontal desktop / vertical mobile
- ✅ Hover scale + border color

**Priorité:** 🟢 BASSE (animations complexes mais isolées)

---

## 📋 ORDRE DE REMPLACEMENT STRATÉGIQUE

### **Étape 1 : SectionServicesSimple** ⭐ FACILE
- 2 occurrences seulement
- Structure simple (2 cards identiques)
- Peu de risque
- Test rapide

### **Étape 2 : SectionApproach** ⭐⭐ MOYEN
- 18 occurrences (mais répétitives)
- Structure dupliquée desktop/mobile
- Animations complexes MAIS indépendantes de NuxtImg
- Remplacement par pattern

### **Étape 3 : SectionHeroSimple** ⭐⭐⭐ CRITIQUE
- 1 occurrence seulement
- MAIS page d'accueil principale
- Animation Ken Burns importante
- À faire en dernier après validation

---

## 🔧 TEMPLATE DE REMPLACEMENT

### **Pattern NuxtImg → img**

```vue
<!-- AVANT -->
<NuxtImg
  src="/images/exemple.webp"
  alt="Description"
  class="custom-class"
  loading="lazy"
  format="webp"
  quality="80"
  :style="{ zIndex: 0, display: 'block' }"
/>

<!-- APRÈS -->
<img
  src="/images/exemple.webp"
  alt="Description"
  class="custom-class"
  loading="lazy"
  style="z-index: 0; display: block;"
/>
```

**Props à supprimer** (spécifiques NuxtImg):
- ❌ `format` (inutile, déjà WebP)
- ❌ `quality` (inutile, déjà optimisé)

**Props à conserver** (standard HTML):
- ✅ `src`
- ✅ `alt`
- ✅ `class`
- ✅ `loading`
- ✅ `style` (convertir :style en style si nécessaire)

---

## ✅ CHECKLIST POST-REMPLACEMENT

Après chaque fichier modifié :

### Tests visuels
- [ ] Image s'affiche (pas de 404)
- [ ] Taille correcte (pas de déformation)
- [ ] Position correcte (pas de décalage)
- [ ] Overlay visible (z-index OK)

### Tests fonctionnels
- [ ] Lazy loading fonctionne (Network tab)
- [ ] Animations CSS intactes (hover, scroll)
- [ ] Responsive OK (mobile + desktop)
- [ ] Dark mode OK

### Tests techniques
- [ ] Console sans erreur
- [ ] DevTools Network : 200 OK
- [ ] Build dev fonctionne
- [ ] Build prod fonctionne

---

## 📊 RÉSULTAT ATTENDU

### **Avant**
```
❌ 21 × <NuxtImg> → 500 IPX errors
```

### **Après**
```
✅ 21 × <img> → 200 OK
```

**Gain :**
- ✅ Affichage immédiat
- ✅ 0 dépendance IPX
- ✅ Build plus rapide
- ✅ Maintenance simplifiée
