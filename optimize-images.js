/**
 * Script d'optimisation des images pour Lexafric
 * Convertit JPG/PNG -> WebP avec compression optimale
 * Réduit la taille de 60-80% sans perte visuelle
 */

import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const IMAGES_DIR = path.join(__dirname, 'apps/web/src/assets/images')
const QUALITY_SETTINGS = {
  jpeg: { quality: 85, mozjpeg: true },
  png: { quality: 90, compressionLevel: 9 },
  webp: { quality: 85, effort: 6 }
}

async function getAllImages(dir) {
  const files = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await getAllImages(fullPath))
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath)
    }
  }

  return files
}

async function optimizeImage(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase()
    const filename = path.basename(imagePath, ext)
    const dir = path.dirname(imagePath)

    // Statistiques avant
    const statsBefore = await fs.stat(imagePath)
    const sizeBefore = (statsBefore.size / 1024 / 1024).toFixed(2)

    console.log(`\n📸 Optimisation: ${path.basename(imagePath)}`)
    console.log(`   Taille avant: ${sizeBefore} MB`)

    const image = sharp(imagePath)
    const metadata = await image.metadata()

    // 1. Créer version WebP optimisée
    const webpPath = path.join(dir, `${filename}.webp`)
    await image
      .webp(QUALITY_SETTINGS.webp)
      .toFile(webpPath)

    const statsWebp = await fs.stat(webpPath)
    const sizeWebp = (statsWebp.size / 1024 / 1024).toFixed(2)
    const savings = (((statsBefore.size - statsWebp.size) / statsBefore.size) * 100).toFixed(1)

    console.log(`   ✅ WebP créé: ${sizeWebp} MB (-${savings}%)`)

    // 2. Optimiser l'original (fallback)
    const optimizedPath = imagePath + '.tmp'

    if (ext === '.png') {
      await image
        .png(QUALITY_SETTINGS.png)
        .toFile(optimizedPath)
    } else {
      await image
        .jpeg(QUALITY_SETTINGS.jpeg)
        .toFile(optimizedPath)
    }

    const statsOptimized = await fs.stat(optimizedPath)
    const sizeOptimized = (statsOptimized.size / 1024 / 1024).toFixed(2)

    // Remplacer l'original si plus petit
    if (statsOptimized.size < statsBefore.size) {
      await fs.rename(optimizedPath, imagePath)
      console.log(`   ✅ Original optimisé: ${sizeOptimized} MB`)
    } else {
      await fs.unlink(optimizedPath)
      console.log(`   ⏭️  Original déjà optimal`)
    }

    return {
      path: imagePath,
      sizeBefore: statsBefore.size,
      sizeAfter: Math.min(statsWebp.size, statsOptimized.size),
      webpCreated: true
    }

  } catch (error) {
    console.error(`   ❌ Erreur: ${error.message}`)
    return null
  }
}

async function main() {
  console.log('🚀 Démarrage de l\'optimisation des images...\n')
  console.log('📁 Dossier:', IMAGES_DIR)

  try {
    const images = await getAllImages(IMAGES_DIR)
    console.log(`\n📊 ${images.length} images trouvées\n`)

    const results = []

    for (const imagePath of images) {
      const result = await optimizeImage(imagePath)
      if (result) results.push(result)
    }

    // Statistiques finales
    const totalBefore = results.reduce((sum, r) => sum + r.sizeBefore, 0)
    const totalAfter = results.reduce((sum, r) => sum + r.sizeAfter, 0)
    const totalSavings = totalBefore - totalAfter
    const percentSavings = ((totalSavings / totalBefore) * 100).toFixed(1)

    console.log('\n' + '='.repeat(60))
    console.log('📊 RÉSULTATS FINAUX')
    console.log('='.repeat(60))
    console.log(`Images traitées: ${results.length}`)
    console.log(`Taille avant: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`)
    console.log(`Taille après: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`)
    console.log(`Économie: ${(totalSavings / 1024 / 1024).toFixed(2)} MB (${percentSavings}%)`)
    console.log('='.repeat(60))

  } catch (error) {
    console.error('❌ Erreur fatale:', error)
    process.exit(1)
  }
}

main()
