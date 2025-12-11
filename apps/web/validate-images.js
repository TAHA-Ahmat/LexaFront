#!/usr/bin/env node
/**
 * Script de validation des images du projet Lexafric
 * Vérifie que tous les chemins d'images utilisés dans les composants existent physiquement
 */

import { existsSync, readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Couleurs pour la console
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

console.log(`${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
console.log(`${colors.cyan}  Validation des images - Projet Lexafric${colors.reset}`);
console.log(`${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

// Chemins utilisés dans les composants
const imagePathsFromComponents = [
  // SectionHeroSimple.vue
  '/images/Exterieur/hero-background.webp',

  // SectionServicesSimple.vue
  '/images/Exterieur/juridique.webp',
  '/images/Exterieur/sociale.webp',

  // SectionApproach.vue - Images flottantes (desktop)
  '/images/Salle_Reunion/3.webp',
  '/images/M_Beti/beti_4.webp',
  '/images/Exterieur/IMG_6454.webp',
  '/images/team/24.webp',
  '/images/team/26.webp',

  // SectionApproach.vue - Méthodologie (desktop + mobile)
  '/images/Salle_Reunion/4.webp',
  '/images/team/25.webp',
  '/images/team/IMG_6393.webp',
  '/images/team/27.webp',
];

const publicDir = join(__dirname, 'public');
const missingImages = [];
const foundImages = [];

console.log(`${colors.blue}📁 Vérification de ${imagePathsFromComponents.length} images...${colors.reset}\n`);

// Vérification de chaque image
imagePathsFromComponents.forEach((imagePath) => {
  const fullPath = join(publicDir, imagePath.replace('/images/', 'images/'));
  const exists = existsSync(fullPath);

  if (exists) {
    foundImages.push(imagePath);
    console.log(`${colors.green}✓${colors.reset} ${imagePath}`);
  } else {
    missingImages.push(imagePath);
    console.log(`${colors.red}✗${colors.reset} ${imagePath} ${colors.red}(MANQUANT)${colors.reset}`);
  }
});

// Résumé
console.log(`\n${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
console.log(`${colors.cyan}  Résumé${colors.reset}`);
console.log(`${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

console.log(`Total d'images référencées : ${imagePathsFromComponents.length}`);
console.log(`${colors.green}✓ Images trouvées : ${foundImages.length}${colors.reset}`);
console.log(`${colors.red}✗ Images manquantes : ${missingImages.length}${colors.reset}\n`);

if (missingImages.length > 0) {
  console.log(`${colors.red}❌ ÉCHEC : Des images sont manquantes${colors.reset}`);
  console.log(`\nImages manquantes :`);
  missingImages.forEach(img => console.log(`  - ${img}`));
  process.exit(1);
} else {
  console.log(`${colors.green}✅ SUCCÈS : Toutes les images existent !${colors.reset}\n`);

  // Vérification des images non utilisées
  console.log(`${colors.yellow}📊 Analyse des images non utilisées...${colors.reset}\n`);

  // Fonction récursive pour lister tous les fichiers
  function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = join(dirPath, file);
      if (statSync(filePath).isDirectory()) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      } else if (/\.(webp|jpg|png|jpeg)$/i.test(file)) {
        arrayOfFiles.push(filePath);
      }
    });

    return arrayOfFiles;
  }

  const imagesDir = join(publicDir, 'images');
  const allImagesInPublic = getAllFiles(imagesDir).map(path =>
    '/' + path.replace(publicDir + '\\', '').replace(/\\/g, '/')
  );

  const unusedImages = allImagesInPublic.filter(
    img => !imagePathsFromComponents.includes(img)
  );

  if (unusedImages.length > 0) {
    console.log(`${colors.yellow}⚠️  ${unusedImages.length} images non référencées trouvées :${colors.reset}`);
    unusedImages.forEach(img => console.log(`  ${colors.yellow}•${colors.reset} ${img}`));
    console.log(`\n${colors.yellow}💡 Ces images peuvent être supprimées pour optimiser le bundle.${colors.reset}\n`);
  } else {
    console.log(`${colors.green}✓ Aucune image inutilisée détectée${colors.reset}\n`);
  }

  process.exit(0);
}
