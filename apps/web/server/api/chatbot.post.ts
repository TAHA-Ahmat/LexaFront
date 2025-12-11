import OpenAI from 'openai'
import type { H3Event } from 'h3'

// Type pour le body de la requête
interface ChatbotRequest {
  message: string
  locale: string
}

// Type pour la structure de la base de connaissances
interface KnowledgeEntry {
  id: string
  questions: Record<string, string[]>
  answer: Record<string, string>
  category: string
}

interface KnowledgeBase {
  knowledgeBase: KnowledgeEntry[]
  fallbackResponses: Record<string, string>
}

// Fonction de calcul de similarité (algorithme de Levenshtein simplifié)
function calculateSimilarity(str1: string, str2: string): number {
  const longer = str1.length > str2.length ? str1 : str2
  const shorter = str1.length > str2.length ? str2 : str1

  if (longer.length === 0) return 1.0

  const editDistance = getEditDistance(longer.toLowerCase(), shorter.toLowerCase())
  return (longer.length - editDistance) / longer.length
}

// Calcul de la distance de Levenshtein
function getEditDistance(s1: string, s2: string): number {
  s1 = s1.toLowerCase()
  s2 = s2.toLowerCase()

  const costs: number[] = []
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j
      } else if (j > 0) {
        let newValue = costs[j - 1]
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1
        }
        costs[j - 1] = lastValue
        lastValue = newValue
      }
    }
    if (i > 0) {
      costs[s2.length] = lastValue
    }
  }
  return costs[s2.length]
}

// Fonction pour trouver la meilleure correspondance dans la base de connaissances
function findBestMatch(
  userQuestion: string,
  knowledgeBase: KnowledgeBase,
  locale: string
): { answer: string; confidence: number } | null {
  let bestMatch: { answer: string; confidence: number } | null = null
  let highestSimilarity = 0
  const threshold = 0.4 // Seuil de confiance minimum

  for (const entry of knowledgeBase.knowledgeBase) {
    const questions = entry.questions[locale] || entry.questions.fr

    for (const question of questions) {
      const similarity = calculateSimilarity(userQuestion, question)

      if (similarity > highestSimilarity && similarity >= threshold) {
        highestSimilarity = similarity
        bestMatch = {
          answer: entry.answer[locale] || entry.answer.fr,
          confidence: similarity
        }
      }
    }
  }

  return bestMatch
}

// Fonction pour reformuler la réponse avec GPT
async function reformulateWithGPT(
  originalAnswer: string,
  userQuestion: string,
  locale: string,
  openai: OpenAI
): Promise<string> {
  try {
    const systemPrompt = locale === 'ar'
      ? 'أنت مساعد احترافي لشركة ليكسافريك. أعد صياغة الإجابة التالية بطريقة طبيعية ومهنية دون تغيير المحتوى الأساسي. استخدم نبرة ودية ومهنية.'
      : locale === 'en'
      ? 'You are a professional assistant for Lexafric. Reformulate the following answer in a natural and professional way without changing the core content. Use a friendly and professional tone.'
      : 'Tu es un assistant professionnel pour Lexafric. Reformule la réponse suivante de manière naturelle et professionnelle sans changer le contenu essentiel. Utilise un ton amical et professionnel.'

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: `Question de l'utilisateur: ${userQuestion}\n\nRéponse de base: ${originalAnswer}\n\nReformule cette réponse de manière naturelle et conversationnelle.`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    })

    return completion.choices[0]?.message?.content || originalAnswer
  } catch (error) {
    console.error('Erreur lors de la reformulation GPT:', error)
    // En cas d'erreur, retourner la réponse originale
    return originalAnswer
  }
}

export default defineEventHandler(async (event: H3Event) => {
  try {
    // Lire le body de la requête
    const body = await readBody<ChatbotRequest>(event)
    const { message, locale = 'fr' } = body

    if (!message || typeof message !== 'string') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Message manquant ou invalide'
      })
    }

    // Charger la base de connaissances
    const knowledgeBase: KnowledgeBase = await import('~/data/chatbot-kb.json').then(
      (module) => module.default
    )

    // Rechercher une correspondance dans la base de connaissances
    const match = findBestMatch(message, knowledgeBase, locale)

    if (match && match.confidence > 0.6) {
      // Haute confiance : reformuler avec GPT
      const config = useRuntimeConfig()

      if (config.openaiApiKey) {
        const openai = new OpenAI({
          apiKey: config.openaiApiKey
        })

        const reformulatedAnswer = await reformulateWithGPT(
          match.answer,
          message,
          locale,
          openai
        )

        return {
          answer: reformulatedAnswer,
          confidence: match.confidence,
          source: 'knowledge_base_gpt'
        }
      } else {
        // Pas de clé API : retourner la réponse directe
        return {
          answer: match.answer,
          confidence: match.confidence,
          source: 'knowledge_base_direct'
        }
      }
    } else if (match && match.confidence > 0.4) {
      // Confiance moyenne : retourner la réponse sans GPT
      return {
        answer: match.answer,
        confidence: match.confidence,
        source: 'knowledge_base_direct'
      }
    } else {
      // Aucune correspondance : réponse de fallback
      const fallbackResponse =
        knowledgeBase.fallbackResponses[locale] ||
        knowledgeBase.fallbackResponses.fr

      return {
        answer: fallbackResponse,
        confidence: 0,
        source: 'fallback'
      }
    }
  } catch (error: any) {
    console.error('Erreur dans /api/chatbot:', error)

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erreur lors du traitement de la requête'
    })
  }
})
