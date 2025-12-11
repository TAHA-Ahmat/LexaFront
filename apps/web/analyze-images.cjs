const fs = require('fs');
const path = require('path');

// Fonction pour obtenir la taille d'un fichier
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

// Fonction pour formater la taille
function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Fonction pour trouver tous les fichiers d'un type
function findFiles(dir, extensions, results = []) {
  if (!fs.existsSync(dir)) return results;
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Ignorer certains dossiers
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        findFiles(filePath, extensions, results);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  }
  
  return results;
}

// Trouver toutes les images
const imageExtensions = ['.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.avif'];
const srcImages = findFiles('./src', imageExtensions);
const publicImages = findFiles('./public', imageExtensions);
const allImages = [...srcImages, ...publicImages];

console.log(`Total images trouvées: ${allImages.length}`);
console.log(`  - Dans src/: ${srcImages.length}`);
console.log(`  - Dans public/: ${publicImages.length}`);

// Trouver tous les fichiers source
const sourceFiles = [
  ...findFiles('./src', ['.vue', '.ts', '.js', '.css', '.scss'])
];

// Analyser les références
const imageUsage = new Map();

allImages.forEach(imgPath => {
  const relativePath = imgPath.replace(/\/g, '/');
  const fileName = path.basename(imgPath);
  const size = getFileSize(imgPath);
  
  imageUsage.set(relativePath, {
    path: relativePath,
    fileName,
    size,
    references: [],
    count: 0
  });
});

// Chercher les références dans les fichiers source
sourceFiles.forEach(srcFile => {
  const content = fs.readFileSync(srcFile, 'utf-8');
  const relSrcPath = srcFile.replace(/\/g, '/');
  
  imageUsage.forEach((data, imgPath) => {
    const fileName = data.fileName;
    const fileNameNoExt = path.parse(fileName).name;
    
    // Patterns de recherche
    const patterns = [
      fileName,  // nom exact du fichier
      fileNameNoExt,  // nom sans extension
    ];
    
    patterns.forEach(pattern => {
      if (content.includes(pattern)) {
        data.references.push(relSrcPath);
        data.count++;
      }
    });
  });
});

// Séparer images utilisées et non utilisées
const usedImages = [];
const unusedImages = [];

imageUsage.forEach(data => {
  // Dédupliquer les références
  data.references = [...new Set(data.references)];
  data.count = data.references.length;
  
  if (data.count > 0) {
    usedImages.push(data);
  } else {
    unusedImages.push(data);
  }
});

// Trier par nombre de références (décroissant)
usedImages.sort((a, b) => b.count - a.count);
unusedImages.sort((a, b) => b.size - a.size);

// Calculer les statistiques
const totalSize = allImages.reduce((sum, img) => sum + getFileSize(img), 0);
const unusedSize = unusedImages.reduce((sum, img) => sum + img.size, 0);
const usedSize = usedImages.reduce((sum, img) => sum + img.size, 0);

// Calculer le ratio Pareto (20% des images = 80% des références?)
const totalRefs = usedImages.reduce((sum, img) => sum + img.count, 0);
const top20PercentCount = Math.ceil(usedImages.length * 0.2);
const top20PercentRefs = usedImages
  .slice(0, top20PercentCount)
  .reduce((sum, img) => sum + img.count, 0);
const paretoRatio = totalRefs > 0 ? (top20PercentRefs / totalRefs * 100).toFixed(1) : 0;

// Générer le rapport
console.log('\n=================================================');
console.log('RAPPORT D\'ANALYSE DES IMAGES - LOI DE PARETO');
console.log('=================================================\n');

console.log('STATISTIQUES GENERALES');
console.log('---------------------');
console.log(`Total d'images: ${allImages.length}`);
console.log(`Images utilisees: ${usedImages.length} (${(usedImages.length/allImages.length*100).toFixed(1)}%)`);
console.log(`Images inutilisees: ${unusedImages.length} (${(unusedImages.length/allImages.length*100).toFixed(1)}%)`);
console.log(`Taille totale: ${formatSize(totalSize)}`);
console.log(`Taille utilisee: ${formatSize(usedSize)} (${(usedSize/totalSize*100).toFixed(1)}%)`);
console.log(`Taille inutilisee: ${formatSize(unusedSize)} (${(unusedSize/totalSize*100).toFixed(1)}%)`);
console.log(`\nLOI DE PARETO:`);
console.log(`Les ${top20PercentCount} images les plus utilisees (20%) representent ${paretoRatio}% des references`);

console.log('\n\nIMAGES UTILISEES (triees par frequence)');
console.log('========================================\n');

usedImages.forEach((img, index) => {
  console.log(`${index + 1}. ${img.fileName}`);
  console.log(`   Chemin: ${img.path}`);
  console.log(`   Taille: ${formatSize(img.size)}`);
  console.log(`   References: ${img.count}`);
  console.log(`   Utilisee dans:`);
  img.references.forEach(ref => {
    console.log(`     - ${ref}`);
  });
  console.log('');
});

console.log('\n\nIMAGES INUTILISEES (triees par taille)');
console.log('=======================================\n');

unusedImages.forEach((img, index) => {
  console.log(`${index + 1}. ${img.fileName}`);
  console.log(`   Chemin: ${img.path}`);
  console.log(`   Taille: ${formatSize(img.size)}`);
  console.log('');
});

console.log('\n\nRECAPITULATIF ET RECOMMANDATIONS');
console.log('================================\n');
console.log(`Espace liberable: ${formatSize(unusedSize)}`);
console.log(`${unusedImages.length} images peuvent etre supprimees\n`);

if (unusedImages.length > 0) {
  console.log('FICHIERS A SUPPRIMER:');
  unusedImages.forEach(img => {
    console.log(`  ${img.path}`);
  });
}

// Sauvegarder le rapport dans un fichier
const report = {
  timestamp: new Date().toISOString(),
  stats: {
    total: allImages.length,
    used: usedImages.length,
    unused: unusedImages.length,
    totalSize,
    usedSize,
    unusedSize,
    paretoRatio
  },
  usedImages: usedImages.map(img => ({
    fileName: img.fileName,
    path: img.path,
    size: img.size,
    references: img.count,
    usedIn: img.references
  })),
  unusedImages: unusedImages.map(img => ({
    fileName: img.fileName,
    path: img.path,
    size: img.size
  }))
};

fs.writeFileSync('image-analysis-report.json', JSON.stringify(report, null, 2));
console.log('\nRapport detaille sauvegarde dans: image-analysis-report.json');
