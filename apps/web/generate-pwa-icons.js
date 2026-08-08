/**
 * Script de génération des icônes PWA pour Lexafric
 *
 * Ce script génère toutes les icônes PWA nécessaires à partir du logo SVG.
 *
 * Installation :
 *   pnpm add -D sharp
 *
 * Usage :
 *   node generate-pwa-icons.js
 */

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputSvg = join(__dirname, 'public', 'logo-lexafric.svg');
const outputDir = join(__dirname, 'public');

// Vérifier que le logo existe
if (!existsSync(inputSvg)) {
  console.error('❌ Erreur : logo.svg non trouvé dans /public/');
  process.exit(1);
}

const sizes = [
  { size: 64, name: 'pwa-64x64.png' },
  { size: 192, name: 'pwa-192x192.png' },
  { size: 512, name: 'pwa-512x512.png' }
];

async function generateIcons() {
  console.log('🚀 Génération des icônes PWA...\n');

  try {
    // Générer les icônes standard
    for (const { size, name } of sizes) {
      await sharp(inputSvg)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(join(outputDir, name));

      console.log(`✅ Généré: ${name}`);
    }

    // Générer l'icône maskable avec padding pour la safe zone
    // Safe zone = 40% du centre (donc logo prend 80% max)
    const maskableSize = 512;
    const logoSize = Math.floor(maskableSize * 0.65); // Logo à 65% pour rester dans la safe zone

    await sharp(inputSvg)
      .resize(logoSize, logoSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer()
      .then(data => {
        // Créer un canvas avec fond de couleur thème
        return sharp({
          create: {
            width: maskableSize,
            height: maskableSize,
            channels: 4,
            background: { r: 30, g: 64, b: 175, alpha: 1 } // #1e40af
          }
        })
          .composite([
            {
              input: data,
              gravity: 'center'
            }
          ])
          .png()
          .toFile(join(outputDir, 'maskable-icon-512x512.png'));
      });

    console.log('✅ Généré: maskable-icon-512x512.png');

    console.log('\n✨ Toutes les icônes PWA ont été générées avec succès !');
    console.log('\n📋 Prochaines étapes :');
    console.log('   1. Vérifier les icônes dans /public/');
    console.log('   2. Tester avec : pnpm run build && pnpm run preview');
    console.log('   3. Vérifier dans Chrome DevTools > Application > Manifest');

  } catch (error) {
    console.error('❌ Erreur lors de la génération des icônes :', error);
    process.exit(1);
  }
}

generateIcons();
