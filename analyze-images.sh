#!/bin/bash

echo "# ANALYSE EXHAUSTIVE DES IMAGES - LEXAFRONT"
echo ""
echo "Généré le: $(date)"
echo ""

# Fonction pour vérifier si une image est référencée
check_image_usage() {
    local image_name="$1"
    local search_path="/c/Users/ahmat/code/Lexafric/LexaFront/apps/web/src"
    
    # Rechercher le nom de fichier dans tout le code source
    grep -r "$image_name" "$search_path" --include="*.vue" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.tsx" 2>/dev/null | head -1
}

# Analyser un dossier
analyze_folder() {
    local folder_path="$1"
    local folder_name=$(basename "$folder_path")
    
    echo "## DOSSIER: $folder_name/"
    echo ""
    
    if [ ! -d "$folder_path" ]; then
        echo "⚠️  Dossier introuvable"
        echo ""
        return
    fi
    
    local files=$(find "$folder_path" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.svg" -o -iname "*.webp" \) 2>/dev/null | sort)
    
    if [ -z "$files" ]; then
        echo "Aucune image trouvée"
        echo ""
        return
    fi
    
    local used_images=""
    local unused_images=""
    local used_count=0
    local unused_count=0
    
    while IFS= read -r filepath; do
        local filename=$(basename "$filepath")
        local usage=$(check_image_usage "$filename")
        
        if [ -n "$usage" ]; then
            used_images="$used_images- $filename (référencé)\n"
            ((used_count++))
        else
            unused_images="$unused_images- $filename\n"
            ((unused_count++))
        fi
    done <<< "$files"
    
    echo "### ✅ À GARDER (utilisées: $used_count):"
    if [ -n "$used_images" ]; then
        echo -e "$used_images"
    else
        echo "Aucune"
    fi
    echo ""
    
    echo "### ❌ À SUPPRIMER (non utilisées: $unused_count):"
    if [ -n "$unused_images" ]; then
        echo -e "$unused_images"
    else
        echo "Aucune"
    fi
    echo ""
    echo "---"
    echo ""
}

# Liste des dossiers à analyser
FOLDERS=(
    "/c/Users/ahmat/code/Lexafric/LexaFront/apps/web/src/assets/images/team"
    "/c/Users/ahmat/code/Lexafric/LexaFront/apps/web/src/assets/images/Autre"
    "/c/Users/ahmat/code/Lexafric/LexaFront/apps/web/src/assets/images/M_Beti"
    "/c/Users/ahmat/code/Lexafric/LexaFront/apps/web/src/assets/images/Salle_Reunion"
    "/c/Users/ahmat/code/Lexafric/LexaFront/apps/web/src/assets/images/Exterieur"
    "/c/Users/ahmat/code/Lexafric/LexaFront/apps/web/src/assets/images"
    "/c/Users/ahmat/code/Lexafric/LexaFront/apps/web/src/public/images/services"
    "/c/Users/ahmat/code/Lexafric/LexaFront/apps/web/src/public/images/partenaires"
    "/c/Users/ahmat/code/Lexafric/LexaFront/apps/web/src/public/images"
)

for folder in "${FOLDERS[@]}"; do
    analyze_folder "$folder"
done

echo "# RÉSUMÉ"
echo ""
echo "Analyse terminée. Vérifiez chaque section ci-dessus."
