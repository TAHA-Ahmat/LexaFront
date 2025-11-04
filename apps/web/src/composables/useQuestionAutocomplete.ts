import { ref, computed } from 'vue'
import doingBusinessData from '~/data/doing_business_tchad_final.json'

// ============================================================================
// TYPES
// ============================================================================

interface QuestionItem {
  question: string
  theme: string
  themeId: string
  answer: string
}

interface ThemeStyle {
  icon: string
  color: string
  gradient: string
}

// ============================================================================
// MAPPING THÈMES → STYLES VISUELS
// ============================================================================

const themeStyles: Record<string, ThemeStyle> = {
  'AVANT-PROPOS': {
    icon: '📖',
    color: '#6366f1',
    gradient: 'from-indigo-500 to-purple-600'
  },
  'INFORMATIONS GÉNÉRALES SUR LE TCHAD': {
    icon: '🇹🇩',
    color: '#0ea5e9',
    gradient: 'from-sky-500 to-blue-600'
  },
  'LES INCITATIONS FISCALES À L\'INVESTISSEMENT': {
    icon: '📊',
    color: '#10b981',
    gradient: 'from-green-500 to-emerald-600'
  },
  'RÉGLEMENTATION DOUANIÈRE': {
    icon: '🏛️',
    color: '#f59e0b',
    gradient: 'from-amber-500 to-orange-600'
  },
  'RÉGLEMENTATION DES CHANGES': {
    icon: '💱',
    color: '#8b5cf6',
    gradient: 'from-purple-500 to-violet-600'
  },
  'DROIT DU TRAVAIL ET SÉCURITÉ SOCIALE': {
    icon: '⚖️',
    color: '#3b82f6',
    gradient: 'from-blue-500 to-indigo-600'
  },
  'ASSURANCE': {
    icon: '🛡️',
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-teal-600'
  },
  'DROIT COMPTABLE': {
    icon: '📑',
    color: '#14b8a6',
    gradient: 'from-teal-500 to-cyan-600'
  },
  'PROPRIÉTÉ INTELLECTUELLE': {
    icon: '💡',
    color: '#f97316',
    gradient: 'from-orange-500 to-red-600'
  },
  'ARBITRAGE ET RÉSOLUTION DES LITIGES': {
    icon: '⚖️',
    color: '#ef4444',
    gradient: 'from-red-500 to-rose-600'
  }
}

// ============================================================================
// EXTRACTION DES QUESTIONS DU JSON
// ============================================================================

function extractAllQuestions(): QuestionItem[] {
  const questions: QuestionItem[] = []

  for (const section of doingBusinessData) {
    const theme = section.theme
    const themeId = section.id

    for (const qa of section.qa) {
      questions.push({
        question: qa.question,
        theme,
        themeId,
        answer: qa.answer
      })
    }
  }

  return questions
}

// ============================================================================
// FUZZY MATCHING AMÉLIORÉ avec Stop-Words
// ============================================================================

// Stop-words français (mots trop communs à ignorer)
const STOP_WORDS = new Set([
  'le', 'la', 'les', 'un', 'une', 'des', 'de', 'du', 'et', 'ou', 'mais', 'donc',
  'comment', 'quel', 'quelle', 'quels', 'quelles', 'qui', 'que', 'quoi', 'dont',
  'est', 'sont', 'a', 'ont', 'ai', 'as', 'avez', 'avec', 'dans', 'pour', 'sur',
  'au', 'aux', 'par', 'son', 'sa', 'ses', 'leur', 'leurs', 'ce', 'cet', 'cette',
  'ces', 'mon', 'ma', 'mes', 'ton', 'ta', 'tes', 'nous', 'vous', 'ils', 'elles'
])

// Mots-clés importants (boost le score pour améliorer la pertinence)
const IMPORTANT_KEYWORDS = new Set([
  // Création/Formation
  'creer', 'creation', 'former', 'formation', 'constituer', 'constitution',
  'entreprise', 'societe', 'sarl', 'etablissement', 'succursale',

  // Fiscalité
  'fiscalite', 'fiscal', 'fiscaux', 'impot', 'impots', 'taxe', 'taxes',
  'regime', 'regimes', 'tva', 'declaration', 'payer', 'paiement',

  // Documents/Procédures
  'document', 'documents', 'procedure', 'procedures', 'demarche', 'demarches',
  'formalite', 'formalites', 'inscription', 'immatriculation', 'enregistrement',

  // Finance
  'cout', 'couts', 'prix', 'tarif', 'tarifs', 'frais', 'montant',
  'capital', 'investissement', 'financement',

  // Travail/Emploi
  'travail', 'employe', 'employes', 'salaire', 'salaires', 'contrat', 'contrats',
  'embauche', 'recrutement', 'licenciement', 'conge', 'conges',

  // Juridique
  'juridique', 'legal', 'droit', 'loi', 'reglementation', 'statut', 'statuts',
  'tribunal', 'justice', 'avocat', 'conseil',

  // Douanes/Commerce
  'douane', 'douanier', 'importation', 'exportation', 'commerce', 'commercial',

  // Social
  'social', 'cnps', 'securite', 'assurance', 'cotisation', 'cotisations'
])

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprimer accents
    .replace(/[^\w\s]/g, ' ') // Remplacer ponctuation
    .replace(/\s+/g, ' ') // Normaliser espaces
    .trim()
}

function calculateFuzzyScore(query: string, target: string): number {
  const normalizedQuery = normalizeText(query)
  const normalizedTarget = normalizeText(target)

  if (normalizedQuery.length === 0) return 0

  // ✅ PRIORITÉ 1 : Match exact complet (score maximum)
  if (normalizedTarget.includes(normalizedQuery)) return 1.0

  // ✅ PRIORITÉ 2 : Extraire les mots significatifs (> 3 chars, pas stop-words)
  const queryWords = normalizedQuery
    .split(' ')
    .filter(w => w.length > 3 && !STOP_WORDS.has(w))

  const targetWords = normalizedTarget.split(' ')

  // Si pas de mots significatifs dans la query, score très bas
  if (queryWords.length === 0) {
    return 0.1
  }

  // ✅ PRIORITÉ 3 : Compter les mots significatifs qui matchent (avec boost)
  let matchingWords = 0
  let partialMatches = 0

  for (const qWord of queryWords) {
    // Déterminer si c'est un mot-clé important
    const isImportant = IMPORTANT_KEYWORDS.has(qWord)
    const boostMultiplier = isImportant ? 1.5 : 1.0

    let foundMatch = false
    for (const tWord of targetWords) {
      // 1. Match exact
      if (tWord === qWord) {
        matchingWords += 1.0 * boostMultiplier
        foundMatch = true
        break
      }

      // 2. Match par inclusion bidirectionnelle (racines communes)
      if (qWord.length >= 4 && tWord.length >= 4) {
        // Si l'un contient l'autre OU ils partagent une racine
        if (tWord.includes(qWord) || qWord.includes(tWord)) {
          partialMatches += 0.8 * boostMultiplier
          foundMatch = true
          break
        }

        // 3. Racine commune (4+ premiers caractères)
        // Ex: "fiscal" et "fiscalite" partagent "fisc"
        const minLength = Math.min(qWord.length, tWord.length)
        if (minLength >= 5) {
          const rootLength = Math.min(5, minLength)
          if (qWord.substring(0, rootLength) === tWord.substring(0, rootLength)) {
            partialMatches += 0.7 * boostMultiplier
            foundMatch = true
            break
          }
        }
      }
    }
  }

  // ✅ PRIORITÉ 4 : Calculer le score final pondéré
  const totalScore = matchingWords + partialMatches
  const maxScore = queryWords.length

  let finalScore = maxScore > 0 ? totalScore / maxScore : 0

  // ✅ PRIORITÉ 5 : DÉSACTIVÉ - Le score minimum créait des faux positifs
  // Quand le JSON ne contient pas le mot-clé (ex: "fiscalité"), toutes les questions
  // recevaient 0.20 et les 4 premières (AVANT-PROPOS) étaient retournées
  // Mieux vaut laisser score = 0 → message de contact (comportement correct)

  return Math.min(finalScore, 1.0)
}

// ============================================================================
// COMPOSABLE PRINCIPAL
// ============================================================================

export function useQuestionAutocomplete() {
  const allQuestions = extractAllQuestions()
  const isDropdownOpen = ref(false)
  const selectedIndex = ref(-1)

  /**
   * Recherche fuzzy dans les questions
   */
  function searchQuestions(query: string, maxResults = 8): QuestionItem[] {
    if (!query || query.trim().length < 2) {
      return []
    }

    // Calculer les scores pour toutes les questions
    const scored = allQuestions.map(item => ({
      ...item,
      score: calculateFuzzyScore(query, item.question)
    }))

    // Filtrer et trier par score décroissant
    return scored
      .filter(item => item.score >= 0.2) // Seuil de pertinence (inclusif)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults)
      .map(({ score, ...item }) => item) // Retirer le score
  }

  /**
   * Détecter le thème d'une question utilisateur
   */
  function detectThemeFromQuestion(userQuestion: string): string | null {
    if (!userQuestion || userQuestion.trim().length === 0) {
      return null
    }

    let bestMatch: { theme: string; score: number } | null = null
    let highestScore = 0

    // Chercher la question la plus similaire dans la base
    for (const item of allQuestions) {
      const score = calculateFuzzyScore(userQuestion, item.question)
      if (score > highestScore && score > 0.3) {
        highestScore = score
        bestMatch = {
          theme: item.theme,
          score
        }
      }
    }

    return bestMatch ? bestMatch.theme : null
  }

  /**
   * Recherche avec continuation thématique intelligente
   */
  function searchQuestionsWithContext(
    query: string,
    currentTheme: string | null,
    maxResults = 8
  ): QuestionItem[] {
    if (!query || query.trim().length < 2) {
      return []
    }

    // Calculer les scores pour toutes les questions
    const scored = allQuestions.map(item => {
      let baseScore = calculateFuzzyScore(query, item.question)

      // BOOST +50% si même thème que la conversation en cours
      if (currentTheme && item.theme === currentTheme) {
        baseScore *= 1.5
      }

      return {
        ...item,
        score: baseScore
      }
    })

    // Filtrer et trier par score décroissant
    return scored
      .filter(item => item.score >= 0.2) // Seuil de pertinence (inclusif)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults)
      .map(({ score, ...item }) => item) // Retirer le score
  }

  /**
   * Regrouper les résultats par thème
   */
  function groupByTheme(questions: QuestionItem[]): Record<string, QuestionItem[]> {
    const grouped: Record<string, QuestionItem[]> = {}

    for (const question of questions) {
      if (!grouped[question.theme]) {
        grouped[question.theme] = []
      }
      grouped[question.theme].push(question)
    }

    return grouped
  }

  /**
   * Obtenir le style visuel d'un thème
   */
  function getThemeStyle(theme: string): ThemeStyle {
    return themeStyles[theme] || {
      icon: '📄',
      color: '#6b7280',
      gradient: 'from-gray-500 to-gray-600'
    }
  }

  /**
   * Ouvrir le dropdown
   */
  function openDropdown() {
    isDropdownOpen.value = true
    selectedIndex.value = -1
  }

  /**
   * Fermer le dropdown
   */
  function closeDropdown() {
    isDropdownOpen.value = false
    selectedIndex.value = -1
  }

  /**
   * Navigation clavier
   */
  function navigateDown(maxIndex: number) {
    if (selectedIndex.value < maxIndex - 1) {
      selectedIndex.value++
    }
  }

  function navigateUp() {
    if (selectedIndex.value > 0) {
      selectedIndex.value--
    }
  }

  function resetSelection() {
    selectedIndex.value = -1
  }

  /**
   * Analyser la question utilisateur et déterminer le niveau de clarté
   * Retourne: 'clear' (0.6+), 'ambiguous' (0.3-0.6), 'unclear' (<0.3)
   */
  function analyzeQuestionClarity(userQuestion: string): {
    level: 'clear' | 'ambiguous' | 'unclear'
    bestMatches: QuestionItem[]
    bestScore: number
  } {
    if (!userQuestion || userQuestion.trim().length < 2) {
      return {
        level: 'unclear',
        bestMatches: [],
        bestScore: 0
      }
    }

    // Calculer les scores pour toutes les questions
    const scored = allQuestions.map(item => ({
      ...item,
      score: calculateFuzzyScore(userQuestion, item.question)
    }))

    // Trier par score décroissant
    const sorted = scored
      .filter(item => item.score >= 0.2)
      .sort((a, b) => b.score - a.score)

    if (sorted.length === 0) {
      return {
        level: 'unclear',
        bestMatches: [],
        bestScore: 0
      }
    }

    const bestScore = sorted[0].score

    // Déterminer le niveau selon le meilleur score
    if (bestScore >= 0.6) {
      // Question claire - réponse directe
      return {
        level: 'clear',
        bestMatches: [sorted[0]].map(({ score, ...item }) => item),
        bestScore
      }
    } else if (bestScore >= 0.2) {
      // Question ambiguë - proposer des clarifications
      // Prendre jusqu'à 4 meilleures suggestions
      // AJUSTÉ: 0.3 → 0.2 pour correspondre au score minimum des questions courtes
      return {
        level: 'ambiguous',
        bestMatches: sorted.slice(0, 4).map(({ score, ...item }) => item),
        bestScore
      }
    } else {
      // Question pas claire - message de contact
      return {
        level: 'unclear',
        bestMatches: [],
        bestScore
      }
    }
  }

  return {
    allQuestions,
    isDropdownOpen,
    selectedIndex,
    searchQuestions,
    searchQuestionsWithContext,
    detectThemeFromQuestion,
    analyzeQuestionClarity,
    groupByTheme,
    getThemeStyle,
    openDropdown,
    closeDropdown,
    navigateDown,
    navigateUp,
    resetSelection
  }
}
