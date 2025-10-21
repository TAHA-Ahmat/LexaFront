/**
 * API Route pour le chatbot Lexafric
 * Gère les requêtes des utilisateurs et génère des réponses via ChatGPT
 */

import { OpenAI } from 'openai'
import { findBestMatch, loadKnowledgeBase } from '~/utils/chatMatcher'

interface ChatRequest {
  message: string
  conversationHistory?: Array<{ role: string; content: string }>
}

export default defineEventHandler(async (event) => {
  try {
    // 1. Récupérer la requête de l'utilisateur
    const body = await readBody<ChatRequest>(event)
    const userMessage = body.message?.trim()

    if (!userMessage) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Le message ne peut pas être vide'
      })
    }

    // 2. Charger la base de connaissances
    const knowledgeBase = await loadKnowledgeBase()

    // 3. Rechercher une correspondance dans la KB
    const matchResult = findBestMatch(userMessage, knowledgeBase)

    // 4. Initialiser OpenAI
    const config = useRuntimeConfig()
    const apiKey = config.openaiApiKey || process.env.OPENAI_API_KEY

    if (!apiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Clé API OpenAI non configurée'
      })
    }

    const openai = new OpenAI({
      apiKey: apiKey
    })

    // 5. Préparer le contexte système pour ChatGPT
    const systemPrompt = `Tu es l'assistant virtuel de Lexafric, une entreprise spécialisée dans l'assistance juridique, fiscale, sociale, le recrutement et les formations professionnelles au Tchad.

Ton rôle est de :
- Répondre de manière professionnelle, claire et rassurante
- Utiliser un ton courtois et adapté au contexte juridique/fiscal/social
- Reformuler les réponses pour qu'elles soient naturelles et variées (jamais robotiques)
- Rester concis (2-4 phrases maximum)
- Toujours terminer par une invitation à l'action si approprié

Important :
- Ne jamais inventer d'informations sur les tarifs, délais ou services précis
- Si la réponse fournie est insuffisante, suggérer de prendre rendez-vous
- Utiliser "nous" pour parler de Lexafric`

    let userPrompt: string

    if (matchResult.found) {
      // Cas 1 : Réponse trouvée dans la KB → Demander une reformulation naturelle
      userPrompt = `L'utilisateur a posé cette question : "${userMessage}"

Voici la réponse de référence à utiliser :
"${matchResult.answer}"

Reformule cette réponse de manière naturelle et engageante, en conservant toutes les informations importantes. Adapte le ton à la question de l'utilisateur.`
    } else {
      // Cas 2 : Pas de correspondance → Réponse standard avec reformulation
      userPrompt = `L'utilisateur a posé cette question : "${userMessage}"

Cette question n'est pas dans notre base de connaissances. Reformule de manière professionnelle et rassurante cette réponse standard :
"${matchResult.answer}"

Adapte la formulation au contexte de la question posée.`
    }

    // 6. Générer la réponse avec ChatGPT
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Modèle rapide et économique
      messages: [
        { role: 'system', content: systemPrompt },
        ...(body.conversationHistory || []),
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7, // Un peu de créativité pour varier les réponses
      max_tokens: 300, // Limite pour des réponses concises
      top_p: 0.9
    })

    const botResponse = completion.choices[0]?.message?.content?.trim()

    if (!botResponse) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Impossible de générer une réponse'
      })
    }

    // 7. Retourner la réponse
    return {
      success: true,
      data: {
        message: botResponse,
        matched: matchResult.found,
        confidence: matchResult.confidence,
        questionId: matchResult.questionId
      }
    }
  } catch (error: any) {
    console.error('Erreur API Chat:', error)

    // Gestion des erreurs OpenAI
    if (error?.status === 401) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Clé API OpenAI invalide'
      })
    }

    if (error?.status === 429) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Trop de requêtes, veuillez réessayer dans quelques instants'
      })
    }

    // Erreur générique
    throw createError({
      statusCode: error?.statusCode || 500,
      statusMessage: error?.statusMessage || 'Une erreur est survenue. Veuillez réessayer.'
    })
  }
})
