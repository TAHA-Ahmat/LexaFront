# Chatbot Lexafric - Documentation

## 📋 Vue d'ensemble

Le chatbot Lexafric est un assistant virtuel intelligent intégré au site web, propulsé par l'API OpenAI (ChatGPT). Il répond aux questions des visiteurs sur les services, tarifs, délais et informations générales de Lexafric.

## 🎯 Fonctionnalités

### Principes de base

1. **Intelligence artificielle ChatGPT**
   - Utilise l'API OpenAI (modèle `gpt-4o-mini`)
   - Génère des réponses naturelles et professionnelles
   - Adapte le ton au contexte juridique/fiscal/social de Lexafric

2. **Base de connaissances locale (JSON)**
   - Questions/réponses de référence stockées dans `src/data/chatbot-kb.json`
   - Matching intelligent des questions utilisateurs
   - Reformulation automatique des réponses pour un ton naturel

3. **Réponse de secours**
   - Si aucune correspondance n'est trouvée dans la base de connaissances
   - Message par défaut : *"Cette question nécessite une discussion un peu plus approfondie avec Lexafric. Souhaitez-vous prendre rendez-vous ?"*

## 🚀 Installation et Configuration

### 1. Clé API OpenAI

**⚠️ IMPORTANT : Sécurité de la clé API**

1. Créez ou régénérez votre clé API sur [OpenAI Platform](https://platform.openai.com/api-keys)
2. Ouvrez le fichier `.env` (situé dans `apps/web/.env`)
3. Remplacez la valeur placeholder par votre vraie clé :

```bash
OPENAI_API_KEY=sk-votre-vraie-cle-ici
```

**🔒 Règles de sécurité :**
- Ne JAMAIS partager cette clé publiquement
- Ne JAMAIS la committer dans Git (déjà protégé par `.gitignore`)
- Ne JAMAIS la mettre dans `.env.example`
- Révoquer immédiatement toute clé exposée

### 2. Dépendances

Les dépendances sont déjà installées. Si vous rencontrez des problèmes :

```bash
cd apps/web
pnpm install
```

### 3. Lancer le projet

```bash
cd apps/web
pnpm dev
```

Le chatbot sera visible en bas à droite de toutes les pages.

## 📂 Architecture du projet

```
apps/web/src/
├── components/chat/
│   ├── ChatBot.vue           # Widget principal (position bas-droite)
│   ├── ChatMessage.vue       # Composant pour un message individuel
│   └── ChatInput.vue         # Zone de saisie utilisateur
├── composables/
│   └── useChat.ts            # Logique d'état et API calls
├── server/api/
│   └── chat.post.ts          # Route API Nuxt pour OpenAI
├── utils/
│   └── chatMatcher.ts        # Service de matching Q&A
├── data/
│   └── chatbot-kb.json       # Base de connaissances
└── locales/
    ├── fr.json               # Traductions françaises
    ├── en.json               # Traductions anglaises
    └── ar.json               # Traductions arabes
```

## 🛠️ Personnalisation

### Modifier la base de connaissances

Éditez `src/data/chatbot-kb.json` :

```json
{
  "questions": [
    {
      "id": "identifiant-unique",
      "patterns": ["mot-clé1", "mot-clé2", "expression"],
      "answer": "Réponse de référence à reformuler par ChatGPT"
    }
  ],
  "fallbackResponse": "Réponse par défaut si aucune correspondance",
  "metadata": {
    "confidenceThreshold": 0.4
  }
}
```

**Conseils :**
- Utilisez plusieurs `patterns` pour couvrir les variations de questions
- Gardez les réponses claires et professionnelles
- Ajustez `confidenceThreshold` (0-1) pour la sensibilité du matching

### Modifier le comportement de l'IA

Éditez `src/server/api/chat.post.ts`, section `systemPrompt` :

```typescript
const systemPrompt = `Tu es l'assistant virtuel de Lexafric...`
```

**Paramètres OpenAI ajustables :**
- `temperature` (0-2) : Créativité des réponses (défaut : 0.7)
- `max_tokens` : Longueur maximale des réponses (défaut : 300)
- `model` : Modèle à utiliser (défaut : `gpt-4o-mini`)

### Personnaliser l'interface

**Position du chatbot** (`src/components/chat/ChatBot.vue`) :
```vue
<!-- Ligne 29 : Modifier la position -->
class="fixed bottom-6 right-6 z-50"
```

Options :
- `bottom-6 left-6` : Bas gauche
- `top-6 right-6` : Haut droite
- etc.

**Couleurs** (utilise Tailwind CSS) :
```vue
<!-- Changer from-blue-600 to-blue-700 par d'autres couleurs -->
bg-gradient-to-br from-blue-600 to-blue-700
```

## 🌍 Internationalisation (i18n)

Le chatbot supporte 3 langues : français, anglais, arabe.

**Ajouter/modifier des traductions** dans `src/locales/[lang].json` :

```json
{
  "chatbot": {
    "title": "Assistant Lexafric",
    "subtitle": "En ligne maintenant",
    "placeholder": "Posez votre question...",
    "send": "Envoyer",
    ...
  }
}
```

**Support RTL automatique** : L'arabe affiche automatiquement le chatbot en direction RTL.

## 🧪 Tests et Débogage

### Mode développement

En développement (localhost), les messages affichent des badges de debug :
- ✓ Matched (X%) : Question trouvée dans la KB avec score de confiance
- ○ Fallback : Réponse par défaut utilisée

### Tester le matching

1. Ouvrez le chatbot
2. Posez une question (ex: "Quels sont vos tarifs ?")
3. Vérifiez le badge de debug pour voir si la question a été matchée

### Logs serveur

Les erreurs API sont loguées côté serveur :
```bash
# Dans la console où tourne `pnpm dev`
Erreur API Chat: ...
```

## 📊 Flux de traitement

```
Question utilisateur
       ↓
1. Normalisation de la question
   (retrait accents, ponctuation, minuscules)
       ↓
2. Recherche dans chatbot-kb.json
   (algorithme de similarité Levenshtein)
       ↓
   Correspondance trouvée ?
   ├─ OUI → Reformulation par ChatGPT (ton naturel)
   └─ NON → Réponse standard reformulée
       ↓
3. Affichage dans le chat
   (animation, scroll automatique)
```

## 🔧 Résolution de problèmes

### Erreur : "Clé API OpenAI invalide"
- Vérifiez que `OPENAI_API_KEY` est correctement définie dans `.env`
- Régénérez la clé sur OpenAI Platform si nécessaire
- Redémarrez le serveur Nuxt après modification du `.env`

### Erreur : "Trop de requêtes"
- Vous avez atteint la limite de l'API OpenAI
- Vérifiez vos quotas sur [OpenAI Platform](https://platform.openai.com/usage)
- Attendez quelques instants ou augmentez votre limite

### Le chatbot ne s'affiche pas
- Vérifiez que `<ChatBot />` est bien dans `layouts/default.vue`
- Vérifiez la console navigateur pour des erreurs TypeScript
- Assurez-vous que les traductions i18n sont présentes

### Les réponses sont étranges
- Ajustez le `systemPrompt` dans `src/server/api/chat.post.ts`
- Modifiez la `temperature` (plus bas = plus prévisible)
- Vérifiez que la base de connaissances est bien structurée

## 📈 Améliorations futures

### Suggestions d'évolutions

1. **Statistiques**
   - Tracker les questions les plus fréquentes
   - Mesurer la satisfaction utilisateur
   - Analyser le taux de matching

2. **Contexte avancé**
   - Mémoriser les préférences utilisateur
   - Historique de conversation persistant
   - Détection automatique de la langue

3. **Intégrations**
   - Prise de rendez-vous directe (calendrier)
   - Formulaire de contact pré-rempli
   - Liens vers les pages pertinentes

4. **Base de connaissances enrichie**
   - Version multilingue de `chatbot-kb.json`
   - Réponses avec images/vidéos
   - FAQ dynamique alimentée par le chatbot

## 📝 Maintenance

### Mise à jour de la base de connaissances

1. Éditez `src/data/chatbot-kb.json`
2. Ajoutez/modifiez les questions et réponses
3. Pas besoin de redémarrer le serveur (rechargement à chaud)

### Mise à jour d'OpenAI

```bash
cd apps/web
pnpm update openai
```

### Surveillance des coûts

- Consultez régulièrement [OpenAI Usage Dashboard](https://platform.openai.com/usage)
- Le modèle `gpt-4o-mini` est le plus économique
- Définissez des limites de dépenses sur votre compte OpenAI

## 🤝 Support

Pour toute question technique :
1. Consultez cette documentation
2. Vérifiez les logs serveur et console navigateur
3. Contactez l'équipe de développement

---

**Dernière mise à jour** : 21 janvier 2025
**Version** : 1.0.0
**Auteur** : Équipe Lexafric
