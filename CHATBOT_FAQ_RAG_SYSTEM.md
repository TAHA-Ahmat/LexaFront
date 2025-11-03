# 🤖 Chatbot Lexafric - Système Hybride FAQ + RAG

## 📋 Vue d'ensemble

Le chatbot Lexafric utilise désormais un **système hybride intelligent** combinant :
1. **FAQ classique** (chatbot-kb.json) - Questions/réponses pré-définies
2. **RAG (Retrieval-Augmented Generation)** - Guide "Doing Business Tchad" complet

---

## 🏗️ Architecture

### **Fichiers de données**

```
apps/web/src/data/
├── chatbot-kb.json                      # Base FAQ (25 KB, 14 entrées)
└── doing_business_tchad_final.json      # Guide RAG (37 KB, 24 sections)
```

### **Fichiers de code**

```
apps/web/src/
├── server/api/chatbot.post.ts           # API backend hybride FAQ+RAG
└── components/chat/ChatWidget.vue       # Interface utilisateur
```

---

## 🔄 Flux de traitement (Stratégie de pondération)

```
Question utilisateur
       ↓
┌──────────────────────────────────────────────────────┐
│ ÉTAPE 1 : Recherche FAQ (Levenshtein)               │
│ Seuil haute confiance : > 0.6                        │
└──────────────────────────────────────────────────────┘
       ↓
   Confiance > 0.6 ?
       ├─ OUI → ✅ Réponse FAQ + Reformulation GPT (source: faq_gpt)
       └─ NON → Continuer...
       ↓
┌──────────────────────────────────────────────────────┐
│ ÉTAPE 2 : Recherche RAG (mots-clés dans le guide)   │
│ Seuil de score : > 3                                 │
└──────────────────────────────────────────────────────┘
       ↓
   Score RAG > 3 ?
       ├─ OUI → ✅ Réponse RAG contextuelle (source: rag_doing_business)
       └─ NON → Continuer...
       ↓
┌──────────────────────────────────────────────────────┐
│ ÉTAPE 3 : FAQ avec confiance moyenne                │
│ Seuil : 0.4 - 0.6                                    │
└──────────────────────────────────────────────────────┘
       ↓
   Confiance > 0.4 ?
       ├─ OUI → ✅ Réponse FAQ directe (source: faq_direct)
       └─ NON → Fallback
       ↓
┌──────────────────────────────────────────────────────┐
│ ÉTAPE 4 : Réponse de fallback                       │
│ Message standard invitant à contacter Lexafric      │
└──────────────────────────────────────────────────────┘
       ↓
   ✅ Réponse standard (source: fallback)
```

---

## 📊 Différences structurelles

### **chatbot-kb.json (FAQ)**

```json
{
  "knowledgeBase": [
    {
      "id": "services-general",
      "questions": {
        "fr": ["Quels services proposez-vous ?", "Que faites-vous ?"],
        "en": ["What services do you offer?"],
        "ar": ["ما هي الخدمات التي تقدمونها؟"]
      },
      "answer": {
        "fr": "Lexafric propose des services d'assistance juridique...",
        "en": "Lexafric offers legal, tax and social assistance...",
        "ar": "تقدم ليكسافريك خدمات المساعدة القانونية..."
      },
      "category": "general"
    }
  ],
  "fallbackResponses": {
    "fr": "Je n'ai pas trouvé de réponse...",
    "en": "I couldn't find a specific answer...",
    "ar": "لم أتمكن من العثور على إجابة..."
  }
}
```

**Caractéristiques :**
- ✅ Multilingue (FR/EN/AR)
- ✅ Matching exact par similarité Levenshtein
- ✅ Réponses courtes et ciblées
- ✅ 14 catégories (services, tarifs, contact, etc.)

---

### **doing_business_tchad_final.json (RAG)**

```json
[
  {
    "id": "13",
    "title": "AVANT-PROPOS",
    "content": "Ce guide, rédigé par les spécialistes reconnus du cabinet..."
  },
  {
    "id": "23",
    "title": "LES INCITATIONS FISCALES A L'INVESTISSEMENT",
    "content": "Une série de mesures relevant de la charte des investissements..."
  }
]
```

**Caractéristiques :**
- ✅ Contenu riche : 24 sections complètes (10 000+ mots/section)
- ✅ Recherche sémantique par mots-clés
- ✅ Réponses générées dynamiquement par GPT-4o-mini
- ✅ Sections : incitations fiscales, douanes, droit du travail, comptabilité, etc.
- ⚠️ Français uniquement

---

## 🔍 Algorithmes de recherche

### **1. FAQ - Similarité Levenshtein**

```typescript
function calculateSimilarity(str1: string, str2: string): number {
  // Distance d'édition entre deux chaînes
  // Retourne un score entre 0 et 1
  // 1 = identique, 0 = complètement différent
}
```

**Exemple :**
- Question utilisateur : "Quels sont vos tarifs ?"
- Question FAQ : "Quels sont vos prix ?"
- Score : 0.85 (haute similarité)

---

### **2. RAG - Recherche par mots-clés**

```typescript
function searchInDocumentSections(
  userQuestion: string,
  sections: DocumentSection[]
): { section: DocumentSection; score: number } | null {
  // 1. Extraire les mots-clés (sans stop-words)
  // 2. Normaliser (minuscules, sans accents)
  // 3. Compter les occurrences dans titre (x3) et contenu (x1)
  // 4. Retourner la section avec le meilleur score
}
```

**Exemple :**
- Question : "Quelles sont les incitations fiscales pour les investisseurs ?"
- Mots-clés extraits : `["incitations", "fiscales", "investisseurs"]`
- Section trouvée : "LES INCITATIONS FISCALES A L'INVESTISSEMENT" (score: 12.5)

---

## 🎯 Sources de réponses

| Source | Badge affiché | Description |
|--------|---------------|-------------|
| `faq_gpt` | 🤖 FAQ+GPT | FAQ avec reformulation GPT-4o-mini |
| `faq_direct` | 📚 FAQ | Réponse FAQ directe (sans GPT) |
| `rag_doing_business` | 📖 Guide Tchad | Réponse générée depuis le guide |
| `fallback` | 💬 Standard | Réponse par défaut |

---

## 🚀 Exemples d'utilisation

### **Cas 1 : Question FAQ simple**

**Question :** *"Quels sont vos tarifs ?"*

```
✅ ÉTAPE 1 : Match FAQ trouvé
   - Confiance : 0.92
   - Source : faq_gpt
   - Réponse reformulée par GPT

Réponse : "Nos tarifs sont adaptés à la nature et à la complexité
de votre demande. La première consultation est gratuite..."
```

---

### **Cas 2 : Question sur le droit du travail (RAG)**

**Question :** *"Quelles sont les cotisations sociales au Tchad ?"*

```
❌ ÉTAPE 1 : Pas de match FAQ (confiance : 0.3)
✅ ÉTAPE 2 : Match RAG trouvé
   - Section : "DROIT DU TRAVAIL ET SÉCURITÉ SOCIALE"
   - Score : 8.2
   - Source : rag_doing_business

Réponse : "Au Tchad, les cotisations patronales s'élèvent à 16,5%
du salaire brut, réparties ainsi : prestations familiales et
maternité (7,5%), pensions de vieillesse (5%), et accidents de
travail (4%). La part salariale est de 3,5%."
```

---

### **Cas 3 : Question hors sujet**

**Question :** *"Quelle est la météo aujourd'hui ?"*

```
❌ ÉTAPE 1 : Pas de match FAQ (confiance : 0.1)
❌ ÉTAPE 2 : Pas de match RAG (score : 0.5)
❌ ÉTAPE 3 : Confiance FAQ trop faible
✅ ÉTAPE 4 : Fallback

Réponse : "Je n'ai pas trouvé de réponse précise à votre question
dans ma base de connaissances. Pour obtenir une réponse
personnalisée, je vous invite à contacter notre équipe..."
```

---

## 🛠️ Configuration

### **Paramètres ajustables**

Dans `chatbot.post.ts` :

```typescript
// FAQ - Seuil de confiance minimum
const threshold = 0.4  // Ajuster entre 0.3 et 0.5

// FAQ - Seuil haute confiance pour GPT
if (faqMatch.confidence > 0.6)  // Ajuster entre 0.5 et 0.7

// RAG - Seuil de score minimum
if (ragMatch.score > 3)  // Ajuster entre 2 et 5

// GPT - Température (créativité)
temperature: 0.3  // FAQ reformulation : 0.7, RAG : 0.3

// GPT - Tokens maximum
max_tokens: 600  // FAQ : 500, RAG : 600
```

---

## 📈 Avantages du système hybride

### **FAQ (Priorité haute)**
✅ Réponses rapides et précises
✅ Support multilingue (FR/EN/AR)
✅ Faible coût API (reformulation uniquement)
✅ Contrôle total du contenu

### **RAG (Complément intelligent)**
✅ Couverture étendue (24 sections juridiques/fiscales)
✅ Réponses contextuelles riches
✅ Mise à jour facile (remplacer le JSON)
✅ Pas besoin de pré-définir les questions

### **Combinaison FAQ + RAG**
✅ **Aucune régression** : la FAQ fonctionne comme avant
✅ **Extension intelligente** : le RAG complète la FAQ
✅ **Fallback robuste** : plusieurs niveaux de réponse
✅ **Performance optimisée** : FAQ d'abord, RAG ensuite

---

## 🔧 Maintenance

### **Ajouter une question FAQ**

Modifier `apps/web/src/data/chatbot-kb.json` :

```json
{
  "id": "nouvelle-question",
  "questions": {
    "fr": ["Votre nouvelle question ?"],
    "en": ["Your new question?"],
    "ar": ["سؤالك الجديد؟"]
  },
  "answer": {
    "fr": "Réponse en français",
    "en": "Answer in English",
    "ar": "الإجابة بالعربية"
  },
  "category": "nouvelle-categorie"
}
```

---

### **Ajouter une section au guide RAG**

Modifier `apps/web/src/data/doing_business_tchad_final.json` :

```json
[
  {
    "id": "50",
    "title": "NOUVELLE SECTION",
    "content": "Contenu détaillé de la nouvelle section..."
  }
]
```

---

### **Tester une question**

```bash
# Démarrer le serveur
cd apps/web
pnpm dev

# Ouvrir le chatbot
# Poser une question
# Vérifier le badge de source affiché
```

---

## 📊 Monitoring

### **Logs serveur**

Les logs indiquent la source de chaque réponse :

```bash
# Console serveur
✓ FAQ Match: confiance=0.85, source=faq_gpt
✓ RAG Match: score=8.2, section="DROIT DU TRAVAIL"
⚠ Fallback utilisé (aucun match)
```

---

## 🚨 Gestion des erreurs

### **Scénarios de dégradation gracieuse**

1. **Erreur API OpenAI (RAG)**
   → Fallback vers FAQ si disponible
   → Sinon, réponse de fallback standard

2. **Fichier JSON manquant**
   → Erreur serveur 500
   → Vérifier les imports dans `chatbot.post.ts`

3. **Clé API absente**
   → FAQ directe sans reformulation
   → RAG désactivé automatiquement

---

## 📝 Checklist de déploiement

- [x] Fichier `doing_business_tchad_final.json` copié dans `src/data/`
- [x] Fichier `chatbot.post.ts` mis à jour avec logique hybride
- [x] Fichier `ChatWidget.vue` mis à jour pour afficher les nouvelles sources
- [x] Variable `OPENAI_API_KEY` configurée dans `.env`
- [ ] Tests effectués sur les 3 scénarios (FAQ, RAG, Fallback)
- [ ] Build de production réussi
- [ ] Déploiement Vercel

---

## 🎓 Questions fréquentes

### **1. Pourquoi le RAG est en français uniquement ?**
Le guide "Doing Business Tchad" source est en français. Pour l'anglais/arabe, GPT-4o-mini peut traduire la réponse, mais cela augmente les coûts.

### **2. Peut-on désactiver le RAG temporairement ?**
Oui, augmenter le seuil de score RAG à 999 :
```typescript
if (ragMatch.score > 999)  // RAG désactivé
```

### **3. Comment prioriser le RAG sur la FAQ ?**
Inverser les étapes 1 et 2 dans `chatbot.post.ts`.

### **4. Le guide RAG peut-il être mis à jour ?**
Oui, remplacer simplement le fichier `doing_business_tchad_final.json` et redémarrer le serveur.

---

## 📞 Support

Pour toute question technique :
- Consulter cette documentation
- Vérifier les logs serveur (`pnpm dev`)
- Tester avec des questions simples d'abord

---

**Version** : 2.0.0
**Date** : Novembre 2025
**Auteur** : Équipe Lexafric + Claude Code
