import OpenAI from 'openai'
import type { H3Event } from 'h3'

// ============================================================================
// TYPES
// ============================================================================

interface ChatbotRequest {
  message: string
  locale: string
}

// Type pour la structure FAQ
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

// Type pour la structure RAG (Doing Business)
interface DocumentSection {
  id: string
  title: string
  content: string
}

// ============================================================================
// FONCTIONS DE SIMILARITÉ (pour FAQ)
// ============================================================================

function calculateSimilarity(str1: string, str2: string): number {
  const longer = str1.length > str2.length ? str1 : str2
  const shorter = str1.length > str2.length ? str2 : str1

  if (longer.length === 0) return 1.0

  const editDistance = getEditDistance(longer.toLowerCase(), shorter.toLowerCase())
  return (longer.length - editDistance) / longer.length
}

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

// ============================================================================
// RECHERCHE FAQ
// ============================================================================

function findBestMatch(
  userQuestion: string,
  knowledgeBase: KnowledgeBase,
  locale: string
): { answer: string; confidence: number; category: string } | null {
  let bestMatch: { answer: string; confidence: number; category: string } | null = null
  let highestSimilarity = 0
  const threshold = 0.4

  for (const entry of knowledgeBase.knowledgeBase) {
    const questions = entry.questions[locale] || entry.questions.fr

    for (const question of questions) {
      const similarity = calculateSimilarity(userQuestion, question)

      if (similarity > highestSimilarity && similarity >= threshold) {
        highestSimilarity = similarity
        bestMatch = {
          answer: entry.answer[locale] || entry.answer.fr,
          confidence: similarity,
          category: entry.category
        }
      }
    }
  }

  return bestMatch
}

// ============================================================================
// RECHERCHE RAG (Doing Business)
// ============================================================================

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
    .replace(/[^\w\s]/g, ' ') // Remplacer la ponctuation par des espaces
    .replace(/\s+/g, ' ') // Normaliser les espaces
    .trim()
}

function extractKeywords(question: string): string[] {
  const stopWords = [
    'le', 'la', 'les', 'un', 'une', 'des', 'de', 'du', 'et', 'ou', 'mais',
    'dans', 'pour', 'avec', 'sur', 'est', 'sont', 'a', 'ont', 'ce', 'ces',
    'quel', 'quelle', 'quels', 'quelles', 'comment', 'pourquoi', 'quand',
    'combien', 'que', 'qui', 'quoi', 'au', 'aux', 'en', 'par', 'ne', 'pas'
  ]

  const normalized = normalizeText(question)
  const words = normalized.split(' ').filter(w => w.length > 2 && !stopWords.includes(w))
  return words
}

function searchInDocumentSections(
  userQuestion: string,
  sections: DocumentSection[]
): { section: DocumentSection; score: number } | null {
  const keywords = extractKeywords(userQuestion)

  if (keywords.length === 0) {
    return null
  }

  let bestMatch: { section: DocumentSection; score: number } | null = null
  let highestScore = 0

  for (const section of sections) {
    const normalizedTitle = normalizeText(section.title)
    const normalizedContent = normalizeText(section.content)
    const combinedText = `${normalizedTitle} ${normalizedContent}`

    let score = 0

    // Score basé sur les occurrences dans le titre (pondération x3)
    for (const keyword of keywords) {
      const titleOccurrences = (normalizedTitle.match(new RegExp(keyword, 'g')) || []).length
      score += titleOccurrences * 3

      // Score basé sur les occurrences dans le contenu (pondération x1)
      const contentOccurrences = (normalizedContent.match(new RegExp(keyword, 'g')) || []).length
      score += contentOccurrences
    }

    // Normaliser le score par le nombre de mots-clés
    const normalizedScore = score / keywords.length

    if (normalizedScore > highestScore && normalizedScore > 1) {
      highestScore = normalizedScore
      bestMatch = { section, score: normalizedScore }
    }
  }

  return bestMatch
}

// ============================================================================
// REFORMULATION AVEC GPT
// ============================================================================

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
    return originalAnswer
  }
}

// Générer une réponse RAG à partir d'une section du document
async function generateRAGResponse(
  section: DocumentSection,
  userQuestion: string,
  locale: string,
  openai: OpenAI
): Promise<string> {
  try {
    const systemPrompt = locale === 'ar'
      ? `أنت مساعد قانوني وضريبي متخصص لشركة LEXAFRIC. استخدم المعلومات التالية من دليل "Doing Business Tchad" للإجابة على السؤال بدقة ومهنية.

عنوان القسم: ${section.title}

محتوى القسم:
${section.content}

تعليمات:
- قدم إجابة موجزة ودقيقة (2-4 جمل)
- استخدم فقط المعلومات من المحتوى المقدم
- إذا لم تكن المعلومات كافية، اذكر ذلك واقترح الاتصال بـ LEXAFRIC
- استخدم لهجة مهنية وودية`
      : locale === 'en'
      ? `You are a specialized legal and tax assistant for LEXAFRIC. Use the following information from the "Doing Business Tchad" guide to answer the question accurately and professionally.

Section Title: ${section.title}

Section Content:
${section.content}

Instructions:
- Provide a concise and accurate answer (2-4 sentences)
- Use only information from the provided content
- If information is insufficient, mention it and suggest contacting LEXAFRIC
- Use a professional and friendly tone`
      : `Tu es un assistant juridique et fiscal spécialisé pour LEXAFRIC. Utilise les informations suivantes du guide "Doing Business Tchad" pour répondre à la question de manière précise et professionnelle.

Titre de section: ${section.title}

Contenu de section:
${section.content}

Instructions:
- Fournis une réponse concise et précise (2-4 phrases)
- Utilise uniquement les informations du contenu fourni
- Si les informations sont insuffisantes, mentionne-le et suggère de contacter LEXAFRIC
- Utilise un ton professionnel et amical`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: userQuestion
        }
      ],
      temperature: 0.3, // Température basse pour plus de précision
      max_tokens: 600
    })

    return completion.choices[0]?.message?.content || 'Désolé, je n\'ai pas pu générer une réponse appropriée.'
  } catch (error) {
    console.error('Erreur lors de la génération RAG:', error)
    throw error
  }
}

// ============================================================================
// HANDLER PRINCIPAL
// ============================================================================

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

    const config = useRuntimeConfig()

    // Charger les deux bases de connaissances
    const knowledgeBase: KnowledgeBase = await import('~/data/chatbot-kb.json').then(
      (module) => module.default
    )

    const doingBusinessSections: DocumentSection[] = await import('~/data/doing_business_tchad_final.json').then(
      (module) => module.default
    )

    // ========================================================================
    // STRATÉGIE DE PONDÉRATION
    // ========================================================================
    // 1. Chercher d'abord dans la FAQ (priorité haute)
    // 2. Si pas de match FAQ ou confiance faible, chercher dans le guide RAG
    // 3. En dernier recours, réponse de fallback
    // ========================================================================

    // ÉTAPE 1 : Recherche dans la FAQ
    const faqMatch = findBestMatch(message, knowledgeBase, locale)

    if (faqMatch && faqMatch.confidence > 0.6) {
      // ✅ HAUTE CONFIANCE FAQ : reformuler avec GPT
      if (config.openaiApiKey) {
        const openai = new OpenAI({ apiKey: config.openaiApiKey })
        const reformulatedAnswer = await reformulateWithGPT(
          faqMatch.answer,
          message,
          locale,
          openai
        )

        return {
          answer: reformulatedAnswer,
          confidence: faqMatch.confidence,
          source: 'faq_gpt',
          category: faqMatch.category
        }
      } else {
        return {
          answer: faqMatch.answer,
          confidence: faqMatch.confidence,
          source: 'faq_direct',
          category: faqMatch.category
        }
      }
    }

    // ÉTAPE 2 : Recherche dans le guide Doing Business (RAG)
    const ragMatch = searchInDocumentSections(message, doingBusinessSections)

    if (ragMatch && ragMatch.score > 3 && config.openaiApiKey) {
      // ✅ MATCH RAG TROUVÉ : générer une réponse contextuelle
      const openai = new OpenAI({ apiKey: config.openaiApiKey })

      try {
        const ragAnswer = await generateRAGResponse(
          ragMatch.section,
          message,
          locale,
          openai
        )

        return {
          answer: ragAnswer,
          confidence: Math.min(ragMatch.score / 10, 0.95), // Normaliser le score
          source: 'rag_doing_business',
          section: ragMatch.section.title
        }
      } catch (error) {
        console.error('Erreur RAG, fallback vers FAQ si disponible')
        // En cas d'erreur RAG, utiliser la FAQ si disponible
        if (faqMatch && faqMatch.confidence > 0.4) {
          return {
            answer: faqMatch.answer,
            confidence: faqMatch.confidence,
            source: 'faq_direct',
            category: faqMatch.category
          }
        }
      }
    }

    // ÉTAPE 3 : FAQ avec confiance moyenne (0.4-0.6)
    if (faqMatch && faqMatch.confidence > 0.4) {
      return {
        answer: faqMatch.answer,
        confidence: faqMatch.confidence,
        source: 'faq_direct',
        category: faqMatch.category
      }
    }

    // ÉTAPE 4 : Réponse de fallback
    const fallbackResponse =
      knowledgeBase.fallbackResponses[locale] ||
      knowledgeBase.fallbackResponses.fr

    return {
      answer: fallbackResponse,
      confidence: 0,
      source: 'fallback'
    }

  } catch (error: any) {
    console.error('Erreur dans /api/chatbot:', error)

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erreur lors du traitement de la requête'
    })
  }
})
