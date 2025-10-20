const fs = require('fs');
const path = require('path');

// Lire les fichiers JSON
const fr = JSON.parse(fs.readFileSync(path.join(__dirname, 'locales/fr.json'), 'utf8'));
const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'locales/en.json'), 'utf8'));
const ar = JSON.parse(fs.readFileSync(path.join(__dirname, 'locales/ar.json'), 'utf8'));

// Fonction pour obtenir toutes les clés d'un objet de manière récursive
function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const frKeys = new Set(getAllKeys(fr));
const enKeys = new Set(getAllKeys(en));
const arKeys = new Set(getAllKeys(ar));

console.log('=== STATISTIQUES ===');
console.log(`Clés FR: ${frKeys.size}`);
console.log(`Clés EN: ${enKeys.size}`);
console.log(`Clés AR: ${arKeys.size}`);
console.log('');

// Clés manquantes dans EN
const missingInEn = [...frKeys].filter(k => !enKeys.has(k));
if (missingInEn.length > 0) {
  console.log('=== MANQUANT DANS EN ===');
  missingInEn.forEach(k => console.log(`  - ${k}`));
  console.log('');
}

// Clés manquantes dans AR
const missingInAr = [...frKeys].filter(k => !arKeys.has(k));
if (missingInAr.length > 0) {
  console.log('=== MANQUANT DANS AR ===');
  missingInAr.forEach(k => console.log(`  - ${k}`));
  console.log('');
}

// Clés en EN qui ne sont pas dans FR
const extraInEn = [...enKeys].filter(k => !frKeys.has(k));
if (extraInEn.length > 0) {
  console.log('=== EXTRA DANS EN (pas dans FR) ===');
  extraInEn.forEach(k => console.log(`  - ${k}`));
  console.log('');
}

// Clés en AR qui ne sont pas dans FR
const extraInAr = [...arKeys].filter(k => !frKeys.has(k));
if (extraInAr.length > 0) {
  console.log('=== EXTRA DANS AR (pas dans FR) ===');
  extraInAr.forEach(k => console.log(`  - ${k}`));
  console.log('');
}

if (missingInEn.length === 0 && missingInAr.length === 0 && extraInEn.length === 0 && extraInAr.length === 0) {
  console.log('✅ Tous les fichiers sont cohérents !');
}
