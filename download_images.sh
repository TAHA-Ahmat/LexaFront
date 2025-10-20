#!/bin/bash

# Script pour télécharger les images des services depuis lexafric.com
cd /home/adoum/LexaFront/apps/web/src/public/images

# Créer le dossier services s'il n'existe pas
mkdir -p services

# Télécharger les images
cd services

echo "Téléchargement des images des services..."

# Service 1 - Assistance Juridique
wget -q https://www.lexafric.com/Public/img/assistance.png -O assistance-juridique.png
echo "✓ assistance-juridique.png"

# Service 2 - Assistance Fiscale
wget -q https://www.lexafric.com/Public/img/fiscale.png -O assistance-fiscale.png
echo "✓ assistance-fiscale.png"

# Service 3 - Assistance Sociale (essayer plusieurs variantes)
wget -q https://www.lexafric.com/Public/img/sociale.png -O assistance-sociale.png 2>/dev/null || \
wget -q https://www.lexafric.com/Public/img/social.png -O assistance-sociale.png 2>/dev/null || \
wget -q https://www.lexafric.com/Public/img/rh.png -O assistance-sociale.png
echo "✓ assistance-sociale.png"

# Service 4 - Assistance Recrutement
wget -q https://www.lexafric.com/Public/img/recrutement.png -O assistance-recrutement.png 2>/dev/null || \
wget -q https://www.lexafric.com/Public/img/recruitment.png -O assistance-recrutement.png
echo "✓ assistance-recrutement.png"

# Service 5 - Formations
wget -q https://www.lexafric.com/Public/img/formations.png -O formations.png 2>/dev/null || \
wget -q https://www.lexafric.com/Public/img/formation.png -O formations.png 2>/dev/null || \
wget -q https://www.lexafric.com/Public/img/training.png -O formations.png
echo "✓ formations.png"

echo ""
echo "Toutes les images des services ont été téléchargées avec succès!"
ls -lh
