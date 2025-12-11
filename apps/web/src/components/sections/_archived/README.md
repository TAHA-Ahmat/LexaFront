# Composants Archivés

Ce dossier contient les anciens composants de la page d'accueil qui ont été remplacés lors de la refonte de octobre 2025.

## Raison de l'archivage

La refonte de la page d'accueil visait à :
- Simplifier le parcours utilisateur (8 sections → 5 sections)
- Améliorer le temps de lecture (objectif 5-15-30 secondes)
- Fusionner les sections redondantes
- Créer un parcours narratif plus clair

## Composants archivés

### Remplacés par de nouveaux composants

| Ancien composant | Remplacé par | Raison |
|------------------|--------------|--------|
| `SectionHeroPremium.vue` | `SectionHeroSimple.vue` | Suppression des particules, message plus clair |
| `SectionFeaturesPremium.vue` | `SectionServicesSimple.vue` | Réduction de 6 à 4 services, design simplifié |
| `SectionCTAPremium.vue` | `SectionCTASimple.vue` | Message plus actionnable, contact direct visible |

### Fusionnés dans de nouveaux composants

| Ancien composant | Fusionné dans | Raison |
|------------------|---------------|--------|
| `SectionMethodologyPremium.vue` | `SectionApproach.vue` | Fusion Méthodologie + Valeurs |
| `SectionValuesPremium.vue` | `SectionApproach.vue` | Fusion Méthodologie + Valeurs |

### Déplacés ou supprimés

| Ancien composant | Nouveau emplacement | Raison |
|------------------|---------------------|--------|
| `SectionPartners.vue` | Remplacé par `SectionTrust.vue` | 35 placeholders → 3 stats + 6 vrais logos |
| `SectionNewsletter.vue` | Footer de `default.vue` | Newsletter disponible sur toutes les pages |

## Restauration

Pour restaurer un composant :
```bash
git mv _archived/SectionXXX.vue ./
```

## Date d'archivage

23 octobre 2025

## Commit de référence

Voir l'historique git pour les détails de la refonte.
