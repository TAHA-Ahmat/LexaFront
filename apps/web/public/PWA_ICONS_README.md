# Génération des Icônes PWA pour Lexafric

## Icônes Requises

Le fichier `nuxt.config.ts` référence les icônes PWA suivantes :

- `pwa-64x64.png` (64x64px)
- `pwa-192x192.png` (192x192px)
- `pwa-512x512.png` (512x512px)
- `maskable-icon-512x512.png` (512x512px avec safe zone)

## Option 1 : Génération Automatique (Recommandé)

Utilisez [RealFaviconGenerator](https://realfavicongenerator.net/) :

1. Téléchargez le fichier `/public/logo.svg`
2. Allez sur https://realfavicongenerator.net/
3. Uploadez le logo
4. Sélectionnez les options PWA
5. Téléchargez les icônes générées
6. Placez-les dans `/apps/web/public/`

## Option 2 : Génération Manuelle avec Sharp

Si vous avez Node.js installé :

```bash
# Installer sharp
pnpm add -D sharp

# Créer un script de génération
node generate-pwa-icons.js
```

**Fichier `generate-pwa-icons.js`** :

```javascript
const sharp = require('sharp');
const fs = require('fs');

const sizes = [64, 192, 512];
const inputSvg = './public/logo.svg';

async function generateIcons() {
  for (const size of sizes) {
    await sharp(inputSvg)
      .resize(size, size)
      .png()
      .toFile(`./public/pwa-${size}x${size}.png`);

    console.log(`✓ Generated pwa-${size}x${size}.png`);
  }

  // Maskable icon avec padding
  await sharp(inputSvg)
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 30, g: 64, b: 175, alpha: 1 } // theme_color
    })
    .png()
    .toFile('./public/maskable-icon-512x512.png');

  console.log('✓ Generated maskable-icon-512x512.png');
}

generateIcons().catch(console.error);
```

## Option 3 : Conversion Simple (Temporaire)

Utilisez ImageMagick ou GIMP pour redimensionner manuellement le logo :

```bash
# Avec ImageMagick
convert logo.svg -resize 64x64 pwa-64x64.png
convert logo.svg -resize 192x192 pwa-192x192.png
convert logo.svg -resize 512x512 pwa-512x512.png
```

## Spécifications des Icônes

### Icône Standard (pwa-*.png)
- Format : PNG
- Fond : Transparent ou blanc
- Contenu : Logo centré avec marges

### Icône Maskable (maskable-icon-512x512.png)
- Format : PNG
- Fond : Couleur du thème (#1e40af)
- Safe zone : 40% au centre (205px de diamètre)
- Le logo doit rester visible même avec un masque circulaire

## Vérification

Après génération, vérifiez que :

1. Toutes les icônes sont dans `/apps/web/public/`
2. Les fichiers ont la bonne taille
3. Le maskable icon respecte la safe zone
4. Les icônes sont bien référencées dans `nuxt.config.ts`

## Test PWA

```bash
pnpm run build
pnpm run preview
```

Ouvrez Chrome DevTools > Application > Manifest pour vérifier les icônes.
