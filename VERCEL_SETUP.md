# Configuration Vercel pour LexaFront (Monorepo)

## 🎯 Problème

Vercel cherche un dossier `public` à la racine alors que l'application Nuxt se trouve dans `apps/web/` (monorepo pnpm workspace).

## ✅ Solution

### Étape 1: Configurer le projet Vercel

Allez dans **Settings** de votre projet sur Vercel et configurez:

#### **Root Directory**
```
apps/web
```
> ⚠️ **IMPORTANT:** Ceci indique à Vercel que votre app est dans `apps/web/` et non à la racine

#### **Build & Development Settings**

| Setting | Value |
|---------|-------|
| **Framework Preset** | Other (ou laisser vide) |
| **Build Command** | `pnpm run build` (laissez vide pour auto-détection) |
| **Output Directory** | Laissez **VIDE** (auto-détection) |
| **Install Command** | `pnpm install` |

### Étape 2: Variables d'environnement (optionnel)

Si vous utilisez OpenAI pour le chatbot, ajoutez:
```
OPENAI_API_KEY=your_key_here
```

### Étape 3: Redéployer

1. Sauvegardez les paramètres
2. Cliquez sur **Redeploy** dans l'onglet Deployments
3. Le build devrait maintenant réussir ✅

## 📋 Configuration technique

Le fichier `apps/web/nuxt.config.ts` contient déjà:

```typescript
nitro: {
  preset: 'vercel'
}
```

Cette configuration génère automatiquement `.vercel/output` qui est le format attendu par Vercel.

## 🔍 Vérification

Après le déploiement, vous devriez voir:
- ✅ Build successful
- ✅ Deployment ready
- ✅ Application accessible sur votre URL Vercel

## ❌ Ne PAS utiliser vercel.json

Pour ce projet (monorepo), la configuration via l'interface Vercel est préférable à un fichier `vercel.json`.

---

**Fait avec ❤️ par Claude Code**
