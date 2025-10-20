#!/bin/bash

# Script pour déplacer les images des services dans le bon dossier

# Créer le dossier de destination s'il n'existe pas
mkdir -p /home/adoum/LexaFront/apps/web/src/public/images/services

echo "Déplacement des images des services..."

# Déplacer les 5 images
mv /home/adoum/LexaFront/assistance-juridique.png /home/adoum/LexaFront/apps/web/src/public/images/services/assistance-juridique.png
echo "✓ assistance-juridique.png déplacée"

mv /home/adoum/LexaFront/assistance-fiscale.png /home/adoum/LexaFront/apps/web/src/public/images/services/assistance-fiscale.png
echo "✓ assistance-fiscale.png déplacée"

mv /home/adoum/LexaFront/assistance-sociale.png /home/adoum/LexaFront/apps/web/src/public/images/services/assistance-sociale.png
echo "✓ assistance-sociale.png déplacée"

mv /home/adoum/LexaFront/assistance-recrutement.png /home/adoum/LexaFront/apps/web/src/public/images/services/assistance-recrutement.png
echo "✓ assistance-recrutement.png déplacée"

mv /home/adoum/LexaFront/formations.png /home/adoum/LexaFront/apps/web/src/public/images/services/formations.png
echo "✓ formations.png déplacée"

echo ""
echo "Toutes les images ont été déplacées avec succès dans apps/web/src/public/images/services/"
echo ""
echo "Liste des fichiers :"
ls -lh /home/adoum/LexaFront/apps/web/src/public/images/services/
