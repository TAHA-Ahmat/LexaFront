/**
 * Chat Matcher Utility
 * Helps match user queries to knowledge base entries
 */

export interface KnowledgeEntry {
  question: string
  answer: string
  keywords?: string[]
  category?: string
}

export interface MatchResult {
  entry: KnowledgeEntry | null
  confidence: number
}

/**
 * Calculate similarity between two strings using simple word matching
 */
function calculateSimilarity(str1: string, str2: string): number {
  const words1 = str1.toLowerCase().split(/\s+/)
  const words2 = str2.toLowerCase().split(/\s+/)

  let matches = 0
  for (const word1 of words1) {
    if (words2.some(word2 => word2.includes(word1) || word1.includes(word2))) {
      matches++
    }
  }

  return matches / Math.max(words1.length, words2.length)
}

/**
 * Find the best matching knowledge entry for a user query
 */
export function findBestMatch(
  query: string,
  knowledgeBase: KnowledgeEntry[],
  threshold: number = 0.3
): MatchResult {
  let bestMatch: MatchResult = {
    entry: null,
    confidence: 0
  }

  for (const entry of knowledgeBase) {
    // Calculate similarity with question
    let confidence = calculateSimilarity(query, entry.question)

    // Also check keywords if available
    if (entry.keywords && entry.keywords.length > 0) {
      const keywordSimilarity = entry.keywords.reduce((max, keyword) => {
        const sim = calculateSimilarity(query, keyword)
        return Math.max(max, sim)
      }, 0)

      // Take the maximum of question and keyword similarity
      confidence = Math.max(confidence, keywordSimilarity)
    }

    // Update best match if this is better
    if (confidence > bestMatch.confidence && confidence >= threshold) {
      bestMatch = {
        entry,
        confidence
      }
    }
  }

  return bestMatch
}

/**
 * Extract category from user query
 */
export function extractCategory(query: string): string | null {
  const categories = [
    { name: 'legal', keywords: ['juridique', 'legal', 'droit', 'law', 'contrat'] },
    { name: 'fiscal', keywords: ['fiscal', 'tax', 'impôt', 'fiscalité', 'déclaration'] },
    { name: 'social', keywords: ['social', 'rh', 'employé', 'paie', 'sécurité sociale'] },
    { name: 'recrutement', keywords: ['recrutement', 'recruitment', 'embauche', 'hiring'] },
    { name: 'formation', keywords: ['formation', 'training', 'apprentissage', 'développement'] }
  ]

  const lowerQuery = query.toLowerCase()

  for (const category of categories) {
    if (category.keywords.some(keyword => lowerQuery.includes(keyword))) {
      return category.name
    }
  }

  return null
}

/**
 * Load knowledge base from JSON file
 */
export async function loadKnowledgeBase(): Promise<KnowledgeEntry[]> {
  try {
    // Import the knowledge base JSON file
    const kb = await import('~/data/chatbot-kb.json')
    return kb.default || kb
  } catch (error) {
    console.error('Failed to load knowledge base:', error)
    return []
  }
}
