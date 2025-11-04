<template>
  <div class="chatbot-container">
    <!-- Bouton d'ouverture du chat -->
    <button
      v-if="!isOpen"
      class="chatbot-button"
      :class="{ 'rtl': locale === 'ar', 'has-notification': showNotificationBadge }"
      @click="toggleChat"
      :aria-label="$t('chatbot.openChat')"
    >
      <!-- Badge notification -->
      <span v-if="showNotificationBadge" class="notification-badge">1</span>
      <img :src="botAvatar" alt="Lexafric AI" class="chat-icon-img" />
    </button>

    <!-- Fenêtre de chat -->
    <div
      v-if="isOpen"
      class="chatbot-window"
      :class="{ 'rtl': locale === 'ar' }"
    >
      <!-- En-tête -->
      <div class="chatbot-header">
        <div class="header-content">
          <div class="header-icon">
            <img :src="botAvatar" alt="Lexafric AI" class="header-avatar" />
          </div>
          <div class="header-text">
            <h3>{{ $t('chatbot.title') }}</h3>
            <p class="ai-badge">
              <span class="ai-chip">🤖 Intelligence Artificielle</span>
            </p>
          </div>
        </div>
        <div class="header-actions">
          <button
            v-if="messages.length > 0"
            class="clear-button"
            @click="clearHistory"
            :aria-label="'Effacer l\'historique'"
            title="Effacer l'historique"
          >
            🗑️
          </button>
          <button
            class="close-button"
            @click="toggleChat"
            :aria-label="$t('chatbot.closeChat')"
          >
            ✕
          </button>
        </div>
      </div>

      <!-- Zone de messages -->
      <div class="chatbot-messages" ref="messagesContainer">
        <!-- Message de bienvenue enrichi -->
        <div v-if="messages.length === 0" class="welcome-section">
          <div class="bot-welcome-message">
            <img :src="botAvatar" alt="Lexafric AI" class="welcome-avatar" />
            <div class="welcome-bubble">
              <p class="welcome-greeting">👋 Bonjour !</p>
              <p class="welcome-intro">
                Je suis <strong>Lexa</strong>, votre assistant IA juridique.
              </p>
              <p class="welcome-capabilities">
                🤖 Je peux vous aider avec :
              </p>
              <ul class="welcome-list">
                <li>• Fiscalité</li>
                <li>• Droit des affaires</li>
                <li>• Procédures administratives</li>
              </ul>
              <p class="welcome-prompt">Posez-moi votre question !</p>
            </div>
          </div>

          <!-- Suggestions rapides -->
          <div class="quick-suggestions">
            <p class="suggestions-label">Questions fréquentes :</p>
            <button
              v-for="(suggestion, index) in quickSuggestions"
              :key="index"
              class="suggestion-button"
              @click="selectSuggestion(suggestion)"
            >
              {{ suggestion.icon }} {{ suggestion.text }}
            </button>
          </div>
        </div>

        <!-- Messages -->
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="message"
          :class="{
            'user-message': msg.role === 'user',
            'bot-message': msg.role === 'assistant',
            'clarification-message': msg.role === 'clarification',
            'contact-message': msg.role === 'contact'
          }"
        >
          <!-- Avatar du bot (pour assistant, clarification, contact) -->
          <img
            v-if="['assistant', 'clarification', 'contact'].includes(msg.role)"
            :src="botAvatar"
            alt="Lexafric AI"
            class="message-avatar"
          />

          <!-- Message standard (user/assistant) -->
          <div v-if="msg.role === 'user' || msg.role === 'assistant'" class="message-bubble">
            <p>{{ msg.content }}</p>
            <span v-if="msg.role === 'assistant' && msg.source" class="confidence-badge">
              {{ getSourceBadge(msg.source) }}
            </span>
          </div>

          <!-- Écran de clarification (niveau ambiguë) -->
          <div v-else-if="msg.role === 'clarification'" class="clarification-bubble">
            <div class="clarification-header">
              <span class="clarification-icon">🤔</span>
              <h4 class="clarification-title">Précisez votre besoin</h4>
            </div>
            <p class="clarification-text">Votre question peut concerner :</p>
            <div class="clarification-options">
              <button
                v-for="(option, optIndex) in msg.options"
                :key="optIndex"
                class="clarification-option"
                :style="{ '--option-delay': `${optIndex * 0.1}s` }"
                @click="selectClarification(option)"
              >
                <span class="option-icon">{{ getThemeStyle(option.theme).icon }}</span>
                <span class="option-text">{{ option.question }}</span>
              </button>
            </div>
            <div class="clarification-footer">
              <p class="clarification-contact">
                Ou contactez :
                <a href="mailto:contact@lexafric.com" class="contact-link">contact@lexafric.com</a>
              </p>
            </div>
          </div>

          <!-- Message de contact professionnel (niveau unclear) -->
          <div v-else-if="msg.role === 'contact'" class="contact-bubble">
            <div class="contact-header">
              <span class="contact-icon">📧</span>
              <h4 class="contact-title">Question spécifique</h4>
            </div>
            <p class="contact-text">
              Je n'ai pas trouvé d'information précise dans ma base de connaissances.
            </p>
            <p class="contact-subtitle">Pour une réponse personnalisée et confidentielle :</p>
            <a href="mailto:contact@lexafric.com" class="contact-email-button">
              <span class="email-icon">📧</span>
              <span class="email-text">contact@lexafric.com</span>
            </a>
            <div class="contact-badge">
              <span class="badge-icon">✓</span>
              <span class="badge-text">Confidentialité garantie</span>
            </div>
          </div>
        </div>

        <!-- Indicateur de chargement -->
        <div v-if="isLoading" class="message bot-message">
          <img :src="botAvatar" alt="Lexafric AI" class="message-avatar" />
          <div class="message-bubble loading-bubble">
            <div class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Zone de saisie enrichie -->
      <div class="chatbot-input-wrapper">
        <form @submit.prevent="sendMessage" class="chatbot-input-form">
          <!-- Indicateur visuel de statut -->
          <span class="input-status-icon" :class="inputStatusClass">
            {{ inputStatusIcon }}
          </span>

          <input
            ref="inputField"
            v-model="userInput"
            type="text"
            :placeholder="currentPlaceholder"
            :disabled="isLoading"
            class="chatbot-input"
            :class="{
              'has-content': userInput.length > 0,
              'input-valid': inputStatus === 'valid',
              'input-warning': inputStatus === 'warning',
              'input-error': inputStatus === 'error',
              'shake': showErrorShake
            }"
            :dir="locale === 'ar' ? 'rtl' : 'ltr'"
            maxlength="500"
            autocomplete="off"
            @focus="onInputFocus"
            @blur="onInputBlur"
            @keydown="handleKeyDown"
          />

          <button
            type="submit"
            :disabled="!userInput.trim() || isLoading"
            class="send-button"
            :class="{ 'button-success': showSuccessState }"
            :aria-label="$t('chatbot.send')"
          >
            <span v-if="!isLoading && !showSuccessState" class="send-icon">
              {{ locale === 'ar' ? '◄' : '►' }}
            </span>
            <span v-else-if="showSuccessState" class="success-icon">✓</span>
            <span v-else class="loading-spinner"></span>
          </button>
        </form>

        <!-- Dropdown Autocomplete Intelligent -->
        <transition name="dropdown-fade">
          <div
            v-if="isDropdownOpen && autocompleteSuggestions.length > 0"
            class="autocomplete-dropdown"
            @mousedown.prevent
          >
            <!-- Header du dropdown -->
            <div class="dropdown-header">
              <span class="dropdown-title">💡 Suggestions</span>
              <span class="dropdown-count">{{ flatSuggestions.length }} résultat{{ flatSuggestions.length > 1 ? 's' : '' }}</span>
            </div>

            <!-- Liste des suggestions groupées par thème -->
            <div class="dropdown-content">
              <div
                v-for="(group, groupIndex) in autocompleteSuggestions"
                :key="group.theme"
                class="suggestion-group"
                :style="{ '--group-delay': `${groupIndex * 0.05}s` }"
              >
                <!-- Thème header -->
                <div
                  class="theme-header"
                  :class="{ 'is-continuation': group.isContinuation }"
                  :style="{ '--theme-color': group.style.color }"
                >
                  <span class="theme-icon">{{ group.style.icon }}</span>
                  <span class="theme-name">{{ group.theme }}</span>
                  <span v-if="group.isContinuation" class="continuation-badge">⭐ Suite</span>
                </div>

                <!-- Questions du thème -->
                <button
                  v-for="(item, itemIndex) in group.questions"
                  :key="item.question"
                  class="suggestion-item"
                  :class="{
                    'suggestion-selected': selectedIndex === flatSuggestions.findIndex(q => q.question === item.question)
                  }"
                  :style="{ '--item-delay': `${(groupIndex * 0.05) + (itemIndex * 0.03)}s` }"
                  @click="selectAutocompleteSuggestion(item)"
                  @mouseenter="resetSelection()"
                >
                  <span class="suggestion-icon">❓</span>
                  <span class="suggestion-text">{{ item.question }}</span>
                </button>
              </div>
            </div>

            <!-- Footer avec hint keyboard -->
            <div class="dropdown-footer">
              <span class="keyboard-hint">
                <kbd>↑</kbd> <kbd>↓</kbd> Navigation &nbsp;•&nbsp; <kbd>Enter</kbd> Sélectionner &nbsp;•&nbsp; <kbd>Esc</kbd> Fermer
              </span>
            </div>
          </div>
        </transition>

        <!-- Character counter et feedback -->
        <div class="input-footer">
          <span v-if="userInput.length > 0" class="character-count" :class="characterCountClass">
            {{ userInput.length }}/500
            <span v-if="inputStatus === 'short'" class="count-hint">• Soyez plus précis</span>
            <span v-else-if="inputStatus === 'valid'" class="count-hint">• ✓ Parfait !</span>
            <span v-else-if="inputStatus === 'warning'" class="count-hint">• ⚠️ Bientôt la limite</span>
          </span>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useQuestionAutocomplete } from '~/composables/useQuestionAutocomplete'

// Avatar du bot (dans public pour le déploiement)
const botAvatar = '/images/image_lexafric_Bot.png'

// Types
interface Message {
  role: 'user' | 'assistant'
  content: string
  confidence?: number
  source?: string
}

interface ChatResponse {
  answer: string
  confidence: number
  source: string
  category?: string
  section?: string
}

// Composables
const { locale } = useI18n()

// État réactif
const isOpen = ref(false)
const userInput = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const messagesContainer = ref<HTMLElement | null>(null)
const showNotificationBadge = ref(false)
const inputField = ref<HTMLInputElement | null>(null)

// États UX enrichis
const showSuccessState = ref(false)
const showErrorShake = ref(false)
const currentPlaceholderIndex = ref(0)
const inputStatus = ref<'empty' | 'short' | 'valid' | 'warning' | 'error'>('empty')

// Autocomplete intelligent
const {
  searchQuestions,
  searchQuestionsWithContext,
  detectThemeFromQuestion,
  analyzeQuestionClarity,
  groupByTheme,
  getThemeStyle,
  isDropdownOpen,
  selectedIndex,
  openDropdown,
  closeDropdown,
  navigateDown,
  navigateUp,
  resetSelection
} = useQuestionAutocomplete()

const autocompleteSuggestions = ref<any[]>([])
const flatSuggestions = ref<any[]>([]) // Pour navigation keyboard
const currentTheme = ref<string | null>(null) // Thème actuel de la conversation
const selectedFromAutocomplete = ref<any | null>(null) // Question sélectionnée depuis autocomplete

// Suggestions rapides
interface QuickSuggestion {
  icon: string
  text: string
}

const quickSuggestions = ref<QuickSuggestion[]>([
  { icon: '💼', text: 'Comment créer une entreprise au Tchad ?' },
  { icon: '💰', text: 'Quels sont les régimes fiscaux disponibles ?' },
  { icon: '📋', text: 'Quels documents sont nécessaires ?' }
])

// Placeholders rotatifs pour guider l'utilisateur
const placeholders = [
  'Ex: "Comment créer une entreprise au Tchad ?"',
  'Ex: "Quel est le coût de création d\'une SARL ?"',
  'Ex: "Quels documents sont nécessaires ?"',
  'Ex: "Comment payer mes impôts ?"',
  'Ex: "Quelles sont les obligations sociales ?"'
]

// Computed pour placeholder actuel
const currentPlaceholder = computed(() => {
  if (userInput.value.length > 0) {
    return ''
  }
  return placeholders[currentPlaceholderIndex.value]
})

// Computed pour status de l'input
const inputStatusIcon = computed(() => {
  const len = userInput.value.length
  if (len === 0) return '💡'
  if (len < 15) return '🔴'
  if (len >= 15 && len < 450) return '🟢'
  return '🟡'
})

const inputStatusClass = computed(() => {
  const len = userInput.value.length
  if (len === 0) return 'status-empty'
  if (len < 15) return 'status-short'
  if (len >= 15 && len < 450) return 'status-valid'
  return 'status-warning'
})

const characterCountClass = computed(() => {
  const len = userInput.value.length
  if (len < 15) return 'count-short'
  if (len >= 450) return 'count-warning'
  return 'count-ok'
})

// Persistance des messages avec localStorage
const STORAGE_KEY = 'lexafric-chatbot-messages'
const messages = ref<Message[]>([])

// Charger les messages depuis localStorage au montage
onMounted(() => {
  // onMounted s'exécute toujours côté client, pas besoin de vérifier process.client
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      // Vérifier que c'est un tableau valide
      if (Array.isArray(parsed)) {
        messages.value = parsed
      }
    }
  } catch (error) {
    console.warn('Erreur lors du chargement de l\'historique du chat:', error)
  }

  // Afficher le badge de notification après 3 secondes
  setTimeout(() => {
    if (!isOpen.value) {
      showNotificationBadge.value = true
      console.log('✅ Badge notification activé!')
    }
  }, 3000)

  // Rotation des placeholders toutes les 4 secondes
  setInterval(() => {
    if (userInput.value.length === 0) {
      currentPlaceholderIndex.value = (currentPlaceholderIndex.value + 1) % placeholders.length
    }
  }, 4000)
})

// Sauvegarder les messages dans localStorage à chaque changement
watch(messages, (newMessages) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newMessages))
  } catch (error) {
    console.warn('Erreur lors de la sauvegarde de l\'historique du chat:', error)
  }
}, { deep: true })

// Mettre à jour le statut de l'input en fonction de la longueur
watch(userInput, (newValue) => {
  const len = newValue.length
  if (len === 0) {
    inputStatus.value = 'empty'
  } else if (len < 15) {
    inputStatus.value = 'short'
  } else if (len >= 15 && len < 450) {
    inputStatus.value = 'valid'
  } else if (len >= 450) {
    inputStatus.value = 'warning'
  }
})

// Watch pour autocomplete intelligent avec continuation thématique
watch(userInput, (newValue) => {
  if (newValue.trim().length >= 2) {
    // Utiliser la recherche contextuelle avec le thème actuel
    const results = searchQuestionsWithContext(newValue, currentTheme.value, 8)

    if (results.length > 0) {
      const grouped = groupByTheme(results)
      autocompleteSuggestions.value = Object.entries(grouped).map(([theme, questions]) => ({
        theme,
        questions,
        style: getThemeStyle(theme),
        isContinuation: theme === currentTheme.value // Marquer si c'est une continuation
      }))

      // Aplatir pour navigation keyboard
      flatSuggestions.value = results
      openDropdown()
    } else {
      closeDropdown()
    }
  } else {
    closeDropdown()
    autocompleteSuggestions.value = []
    flatSuggestions.value = []
  }
})

// Fonctions
const toggleChat = () => {
  isOpen.value = !isOpen.value

  // Masquer le badge de notification au clic
  if (isOpen.value) {
    showNotificationBadge.value = false
  }
}

// Sélectionner une suggestion rapide
const selectSuggestion = (suggestion: QuickSuggestion) => {
  userInput.value = suggestion.text
  // Focus sur l'input et envoyer automatiquement
  nextTick(() => {
    sendMessage()
  })
}

// Sélectionner une suggestion d'autocomplete
const selectAutocompleteSuggestion = async (item: any) => {
  closeDropdown()
  userInput.value = ''

  // Ajouter la question dans l'historique
  messages.value.push({
    role: 'user',
    content: item.question
  })

  await scrollToBottom()
  isLoading.value = true

  try {
    // ✅ Appel GPT avec cette Q&A comme contexte (même logique que clarification)
    console.log(`⚡ Appel GPT pour autocomplete: "${item.question}"`)

    const response = await $fetch('/api/chatbot', {
      method: 'POST',
      body: {
        question: item.question,
        contextData: [item] // Cette Q&A précise en contexte
      }
    })

    messages.value.push({
      role: 'assistant',
      content: response.answer,
      source: response.source || 'rag_instant',
      confidence: response.confidence || 0.95
    })

    // Détecter le thème
    currentTheme.value = item.theme
    console.log(`✅ Réponse GPT depuis autocomplete - Thème: ${item.theme}`)

    // Animation de succès
    showSuccessState.value = true
    setTimeout(() => {
      showSuccessState.value = false
    }, 1500)

  } catch (error: any) {
    console.error('❌ Erreur lors de l\'appel GPT:', error)

    // Fallback : Afficher réponse JSON directe
    messages.value.push({
      role: 'assistant',
      content: item.answer,
      source: 'faq_fallback',
      confidence: 0.9
    })

    currentTheme.value = item.theme
    console.log(`⚠️ Fallback sur réponse JSON directe`)
  } finally {
    isLoading.value = false
    await scrollToBottom()
  }
}

// Navigation keyboard dans l'autocomplete
const handleKeyDown = (event: KeyboardEvent) => {
  if (!isDropdownOpen.value || flatSuggestions.value.length === 0) {
    return
  }

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      navigateDown(flatSuggestions.value.length)
      break
    case 'ArrowUp':
      event.preventDefault()
      navigateUp()
      break
    case 'Enter':
      if (selectedIndex.value >= 0 && flatSuggestions.value[selectedIndex.value]) {
        event.preventDefault()
        selectAutocompleteSuggestion(flatSuggestions.value[selectedIndex.value])
      }
      break
    case 'Escape':
      event.preventDefault()
      closeDropdown()
      break
  }
}

// Fermer dropdown au clic extérieur
const handleClickOutside = () => {
  if (isDropdownOpen.value) {
    closeDropdown()
  }
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const clearHistory = () => {
  if (confirm('Voulez-vous vraiment effacer tout l\'historique du chat ?')) {
    messages.value = []
    localStorage.removeItem(STORAGE_KEY)
  }
}

// Handlers focus/blur pour animations enhanced
const onInputFocus = () => {
  // Placeholder disparaît naturellement, pas besoin de logique supplémentaire
}

const onInputBlur = () => {
  // Peut être utilisé pour analytics ou autres fonctionnalités futures
}

const getSourceBadge = (source: string): string => {
  switch (source) {
    case 'faq_gpt':
      return '</>Madmit AI'
    case 'faq_direct':
      return '📚 FAQ'
    case 'rag_doing_business':
      return '📖 Guide Tchad'
    case 'rag_gpt':
      return '</>Madmit AI'
    case 'rag_instant':
      return '⚡ Suggestion'
    case 'faq_fallback':
      return '📚 Réponse directe'
    case 'fallback':
      return '💬 Standard'
    case 'instant':
      return '⚡ Instantané'
    default:
      return '💬'
  }
}

// Sélectionner une option de clarification
const selectClarification = async (option: any) => {
  // Ajouter la question sélectionnée dans l'historique
  messages.value.push({
    role: 'user',
    content: option.question
  })

  await scrollToBottom()
  isLoading.value = true

  try {
    // ✅ Appel GPT avec cette Q&A comme contexte
    console.log(`🤖 Appel GPT pour clarification: "${option.question}"`)

    const response = await $fetch('/api/chatbot', {
      method: 'POST',
      body: {
        question: option.question,
        contextData: [option] // Cette Q&A précise en contexte
      }
    })

    messages.value.push({
      role: 'assistant',
      content: response.answer,
      source: response.source || 'rag_gpt',
      confidence: response.confidence || 0.9
    })

    // Détecter le thème
    currentTheme.value = option.theme
    console.log(`✅ Réponse GPT après clarification - Thème: ${option.theme}`)

    // Animation de succès
    showSuccessState.value = true
    setTimeout(() => {
      showSuccessState.value = false
    }, 1500)

  } catch (error: any) {
    console.error('❌ Erreur lors de l\'appel GPT:', error)

    // Fallback : Afficher réponse JSON directe
    messages.value.push({
      role: 'assistant',
      content: option.answer,
      source: 'faq_fallback',
      confidence: 0.8
    })

    currentTheme.value = option.theme
    console.log(`⚠️ Fallback sur réponse JSON directe`)
  } finally {
    isLoading.value = false
    await scrollToBottom()
  }
}

const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return

  const messageText = userInput.value.trim()
  errorMessage.value = ''

  // Reset états d'animation
  showSuccessState.value = false
  showErrorShake.value = false

  // Ajouter le message de l'utilisateur
  messages.value.push({
    role: 'user',
    content: messageText
  })

  userInput.value = ''
  await scrollToBottom()

  // Activer le chargement
  isLoading.value = true

  try {
    // 🎯 Analyser la question avec les 3 niveaux
    const analysis = analyzeQuestionClarity(messageText)
    console.log(`📊 Analyse: Niveau=${analysis.level}, Score=${analysis.bestScore.toFixed(2)}`)

    if (analysis.level === 'clear' || analysis.level === 'ambiguous') {
      // 🟢🟡 NIVEAU 1+2 : Question avec match (≥0.3) - Écran de clarification
      messages.value.push({
        role: 'clarification',
        options: analysis.bestMatches.slice(0, 4) // Top 4 suggestions max
      })

      console.log(`🤔 Suggestions proposées: ${analysis.bestMatches.length} option(s)`)

    } else {
      // 🔴 NIVEAU 3 : Question pas claire (< 0.3) - Message de contact pro
      messages.value.push({
        role: 'contact'
      })

      console.log(`📧 Message de contact affiché (score trop faible)`)
    }

    await scrollToBottom()

    // Animation de succès
    showSuccessState.value = true
    setTimeout(() => {
      showSuccessState.value = false
    }, 1500)

  } catch (error: any) {
    console.error('Erreur lors de l\'envoi du message:', error)
    errorMessage.value = error.data?.message || 'Une erreur est survenue. Veuillez réessayer.'

    // Retirer le dernier message utilisateur en cas d'erreur
    messages.value.pop()

    // Animation d'erreur (shake)
    showErrorShake.value = true
    setTimeout(() => {
      showErrorShake.value = false
    }, 500)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.chatbot-container {
  position: fixed;
  z-index: 9999;
}

/* Bouton d'ouverture */
.chatbot-button {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

.chatbot-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.5);
}

.chatbot-button.rtl {
  right: auto;
  left: 24px;
}

.chat-icon-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Badge notification */
.notification-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
  animation: badgePop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
             badgePulse 2s ease-in-out 1s infinite;
  z-index: 10;
}

.chatbot-button.rtl .notification-badge {
  right: auto;
  left: -8px;
}

@keyframes badgePop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes badgePulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 2px 12px rgba(239, 68, 68, 0.6);
  }
}

/* Bounce + Rotation de l'avatar */
.chatbot-button.has-notification .chat-icon-img {
  animation: bounceRotate 2s ease-in-out infinite;
}

@keyframes bounceRotate {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-8px) rotate(-5deg);
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
  75% {
    transform: translateY(-8px) rotate(5deg);
  }
}

/* Fenêtre de chat */
.chatbot-window {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 380px;
  max-width: calc(100vw - 48px);
  height: 600px;
  max-height: calc(100vh - 100px);
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slideUp 0.3s ease;
}

.chatbot-window.rtl {
  right: auto;
  left: 24px;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* En-tête */
.chatbot-header {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-icon {
  flex-shrink: 0;
}

.header-avatar {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.header-text h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.ai-badge {
  margin: 4px 0 0 0;
}

.ai-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.clear-button {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 8px;
  opacity: 0.8;
  transition: all 0.2s;
}

.clear-button:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

.close-button {
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 4px 8px;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.close-button:hover {
  opacity: 1;
}

/* Zone de messages */
.chatbot-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: #f9fafb;
}

/* Section de bienvenue enrichie */
.welcome-section {
  padding: 20px;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bot-welcome-message {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.welcome-avatar {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.welcome-bubble {
  background: white;
  padding: 16px;
  border-radius: 12px;
  border-bottom-left-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  flex: 1;
}

.welcome-greeting {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #1f2937;
}

.welcome-intro {
  margin: 0 0 12px 0;
  font-size: 14px;
  line-height: 1.5;
  color: #374151;
}

.welcome-capabilities {
  margin: 12px 0 8px 0;
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
}

.welcome-list {
  list-style: none;
  padding: 0;
  margin: 0 0 12px 0;
}

.welcome-list li {
  font-size: 13px;
  color: #4b5563;
  padding: 4px 0;
}

.welcome-prompt {
  margin: 12px 0 0 0;
  font-size: 14px;
  color: #2563eb;
  font-weight: 500;
}

/* Suggestions rapides */
.quick-suggestions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.suggestions-label {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  margin: 0 0 4px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.suggestion-button {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 12px 16px;
  border-radius: 8px;
  text-align: left;
  font-size: 13px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
  animation: slideInStagger 0.3s ease-out backwards;
}

.suggestion-button:nth-child(2) {
  animation-delay: 0.1s;
}

.suggestion-button:nth-child(3) {
  animation-delay: 0.2s;
}

.suggestion-button:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes slideInStagger {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.suggestion-button:hover {
  background: #f9fafb;
  border-color: #2563eb;
  color: #2563eb;
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);
}

.message {
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.user-message {
  justify-content: flex-end;
}

.bot-message {
  justify-content: flex-start;
}

.message-avatar {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
}

.message-bubble {
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 12px;
  position: relative;
}

.user-message .message-bubble {
  background: #2563eb;
  color: white;
  border-bottom-right-radius: 4px;
}

.bot-message .message-bubble {
  background: white;
  color: #1f2937;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.message-bubble p {
  margin: 0;
  line-height: 1.5;
  font-size: 14px;
}

.confidence-badge {
  display: inline-block;
  margin-left: 8px;
  font-size: 10px;
  opacity: 0.7;
}

/* Indicateur de chargement */
.loading-bubble {
  padding: 16px;
}

.typing-indicator {
  display: flex;
  gap: 4px;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: #9ca3af;
  border-radius: 50%;
  animation: typing 1.4s infinite;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-8px);
  }
}

/* Zone de saisie */
.chatbot-input-wrapper {
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 16px;
}

.chatbot-input-form {
  display: flex;
  gap: 8px;
  position: relative;
  align-items: center;
}

.chatbot-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.chatbot-input:focus {
  border-color: #2563eb;
}

.chatbot-input:disabled {
  background: #f3f4f6;
  cursor: not-allowed;
}

.send-button {
  width: 44px;
  height: 44px;
  background: #2563eb;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.send-button:hover:not(:disabled) {
  background: #1d4ed8;
  transform: scale(1.05);
}

.send-button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.send-icon {
  font-size: 16px;
  display: block;
}

.error-message {
  color: #dc2626;
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 0;
}

/* ========== PHASE 1 UX ENHANCEMENTS ========== */

/* Status icon indicator */
.input-status-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  pointer-events: none;
  z-index: 10;
}

.input-status-icon.status-empty {
  opacity: 0.5;
}

.input-status-icon.status-short {
  opacity: 0.8;
  animation: pulse 2s ease-in-out infinite;
}

.input-status-icon.status-valid {
  opacity: 1;
  animation: successPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.input-status-icon.status-warning {
  opacity: 1;
  animation: warningShake 0.5s ease-in-out;
}

.input-status-icon.status-error {
  opacity: 1;
  animation: errorPulse 0.5s ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    transform: translateY(-50%) scale(1);
  }
  50% {
    transform: translateY(-50%) scale(1.1);
  }
}

@keyframes successPop {
  0% {
    transform: translateY(-50%) scale(0.8);
  }
  50% {
    transform: translateY(-50%) scale(1.15);
  }
  100% {
    transform: translateY(-50%) scale(1);
  }
}

@keyframes warningShake {
  0%, 100% {
    transform: translateY(-50%) translateX(0);
  }
  25% {
    transform: translateY(-50%) translateX(-4px);
  }
  75% {
    transform: translateY(-50%) translateX(4px);
  }
}

@keyframes errorPulse {
  0%, 100% {
    transform: translateY(-50%) scale(1);
  }
  50% {
    transform: translateY(-50%) scale(1.2);
  }
}

/* Enhanced input with left padding for icon */
.chatbot-input {
  padding-left: 48px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.chatbot-input.has-content {
  border-color: #9ca3af;
  background: #ffffff;
}

.chatbot-input.input-valid {
  border-color: #10b981;
  background: #f0fdf4;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.chatbot-input.input-warning {
  border-color: #f59e0b;
  background: #fffbeb;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

.chatbot-input.input-error {
  border-color: #ef4444;
  background: #fef2f2;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Shake animation for error */
.chatbot-input.shake {
  animation: inputShake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

@keyframes inputShake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-4px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(4px);
  }
}

/* Enhanced focus state */
.chatbot-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
  transform: scale(1.01);
}

.chatbot-input:focus.input-valid {
  border-color: #10b981;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.15);
}

.chatbot-input:focus.input-warning {
  border-color: #f59e0b;
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.15);
}

.chatbot-input:focus.input-error {
  border-color: #ef4444;
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15);
}

/* Input footer with character counter */
.input-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
  min-height: 18px;
  animation: fadeIn 0.3s ease;
}

.character-count {
  font-size: 11px;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
}

.character-count.count-valid {
  color: #10b981;
}

.character-count.count-warning {
  color: #f59e0b;
  font-weight: 600;
}

.character-count.count-error {
  color: #ef4444;
  font-weight: 700;
}

.character-count span {
  font-size: 10px;
}

/* Send button enhancements */
.send-button.button-success {
  background: #10b981;
  animation: successBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes successBounce {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(0.95);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Loading spinner */
.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Placeholder animation on rotation change */
.chatbot-input::placeholder {
  transition: opacity 0.3s ease;
}

/* ========== AUTOCOMPLETE DROPDOWN INTELLIGENT ========== */

.autocomplete-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  max-height: 360px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

/* Transition du dropdown */
.dropdown-fade-enter-active {
  animation: dropdownSlideIn 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.dropdown-fade-leave-active {
  animation: dropdownSlideOut 0.2s cubic-bezier(0.7, 0, 0.84, 0);
}

@keyframes dropdownSlideIn {
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes dropdownSlideOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
  }
}

/* Header du dropdown */
.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-bottom: 1px solid #e5e7eb;
}

.dropdown-title {
  font-size: 12px;
  font-weight: 700;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.dropdown-count {
  font-size: 11px;
  color: #6b7280;
  background: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
}

/* Content scrollable */
.dropdown-content {
  flex: 1;
  overflow-y: auto;
  padding: 6px;
}

/* Groupe de suggestions par thème */
.suggestion-group {
  margin-bottom: 8px;
  animation: groupFadeIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) backwards;
  animation-delay: var(--group-delay);
}

@keyframes groupFadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.suggestion-group:last-child {
  margin-bottom: 0;
}

/* Header de thème */
.theme-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  margin-bottom: 4px;
  background: linear-gradient(135deg, rgba(var(--theme-color-rgb, 59, 130, 246), 0.08) 0%, rgba(var(--theme-color-rgb, 59, 130, 246), 0.12) 100%);
  border-radius: 8px;
  border-left: 3px solid var(--theme-color, #3b82f6);
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Thème en continuation - Plus visible */
.theme-header.is-continuation {
  background: linear-gradient(135deg,
    rgba(var(--theme-color-rgb, 59, 130, 246), 0.18) 0%,
    rgba(var(--theme-color-rgb, 59, 130, 246), 0.28) 100%
  );
  border-left-width: 4px;
  box-shadow: 0 2px 8px rgba(var(--theme-color-rgb, 59, 130, 246), 0.15);
  animation: pulseContinuation 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes pulseContinuation {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 2px 8px rgba(var(--theme-color-rgb, 59, 130, 246), 0.15);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(var(--theme-color-rgb, 59, 130, 246), 0.25);
  }
}

.theme-icon {
  font-size: 16px;
  flex-shrink: 0;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.theme-name {
  font-size: 11px;
  font-weight: 700;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Badge "Suite" pour continuation thématique */
.continuation-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
  padding: 2px 8px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(245, 158, 11, 0.3);
  animation: badgeSlideIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

@keyframes badgeSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-10px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

/* Item de suggestion */
.suggestion-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  margin: 2px 0;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  width: 100%;
  animation: itemSlideIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) backwards;
  animation-delay: var(--item-delay);
}

@keyframes itemSlideIn {
  from {
    opacity: 0;
    transform: translateX(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.suggestion-item:hover {
  background: #f9fafb;
  border-color: #e5e7eb;
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.suggestion-item.suggestion-selected {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-color: #3b82f6;
  transform: translateX(4px);
  box-shadow: 0 2px 12px rgba(59, 130, 246, 0.15);
}

.suggestion-icon {
  font-size: 14px;
  flex-shrink: 0;
  margin-top: 2px;
  opacity: 0.7;
}

.suggestion-text {
  flex: 1;
  font-size: 13px;
  line-height: 1.5;
  color: #374151;
  font-weight: 500;
}

.suggestion-item:hover .suggestion-text,
.suggestion-item.suggestion-selected .suggestion-text {
  color: #1f2937;
  font-weight: 600;
}

.suggestion-item.suggestion-selected .suggestion-icon {
  opacity: 1;
  animation: iconBounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes iconBounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* Footer du dropdown */
.dropdown-footer {
  padding: 8px 12px;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
}

.keyboard-hint {
  font-size: 10px;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 4px;
}

.keyboard-hint kbd {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 10px;
  font-family: monospace;
  font-weight: 600;
  color: #374151;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  min-width: 20px;
  text-align: center;
}

/* Scrollbar personnalisée pour le dropdown */
.dropdown-content::-webkit-scrollbar {
  width: 6px;
}

.dropdown-content::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 3px;
}

.dropdown-content::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
  transition: background 0.2s;
}

.dropdown-content::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* Animation reduced motion */
@media (prefers-reduced-motion: reduce) {
  .autocomplete-dropdown,
  .suggestion-group,
  .suggestion-item,
  .dropdown-fade-enter-active,
  .dropdown-fade-leave-active {
    animation: none !important;
    transition: opacity 0.2s !important;
  }
}

/* Support RTL */
.rtl .user-message {
  justify-content: flex-start;
}

.rtl .bot-message {
  justify-content: flex-end;
}

.rtl .user-message .message-bubble {
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 4px;
}

.rtl .bot-message .message-bubble {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 4px;
}

/* ========== ÉCRAN DE CLARIFICATION (NIVEAU 2 - AMBIGUË) ========== */

/* Container principal de la clarification */
.clarification-bubble {
  max-width: 90%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  animation: clarificationSlideIn 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  border: 2px solid #f3f4f6;
}

@keyframes clarificationSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Header de clarification avec icône */
.clarification-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-bottom: 2px solid #bfdbfe;
}

.clarification-icon {
  font-size: 24px;
  animation: iconWobble 1s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes iconWobble {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  75% {
    transform: rotate(15deg);
  }
}

.clarification-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #1e40af;
  letter-spacing: -0.3px;
}

/* Texte d'introduction */
.clarification-text {
  padding: 16px 18px 12px 18px;
  margin: 0;
  font-size: 14px;
  color: #374151;
  font-weight: 500;
}

/* Grid des options de clarification */
.clarification-options {
  padding: 0 12px 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Carte d'option individuelle avec stagger animation */
.clarification-option {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  background: linear-gradient(135deg, #fafafa 0%, #f9fafb 100%);
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  width: 100%;
  animation: optionStaggerIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) backwards;
  animation-delay: var(--option-delay);
}

@keyframes optionStaggerIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.clarification-option:hover {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-color: #3b82f6;
  transform: translateX(8px) scale(1.02);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.15);
}

.clarification-option:active {
  transform: translateX(8px) scale(0.98);
  transition: transform 0.1s;
}

.option-icon {
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 2px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.clarification-option:hover .option-icon {
  transform: scale(1.2) rotate(5deg);
}

.option-text {
  flex: 1;
  font-size: 13px;
  line-height: 1.5;
  color: #374151;
  font-weight: 500;
  transition: all 0.2s;
}

.clarification-option:hover .option-text {
  color: #1e40af;
  font-weight: 600;
}

/* Footer avec contact alternatif */
.clarification-footer {
  padding: 12px 18px 16px 18px;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
}

.clarification-contact {
  margin: 0;
  font-size: 12px;
  color: #6b7280;
  text-align: center;
}

.contact-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  display: inline-block;
}

.contact-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
  transform: translateY(-1px);
}

/* ========== MESSAGE DE CONTACT PROFESSIONNEL (NIVEAU 3 - UNCLEAR) ========== */

/* Container principal du message de contact */
.contact-bubble {
  max-width: 90%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  animation: contactSlideIn 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  border: 2px solid #fef3c7;
}

@keyframes contactSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Header du message de contact */
.contact-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-bottom: 2px solid #fbbf24;
}

.contact-icon {
  font-size: 24px;
  animation: mailPulse 2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes mailPulse {
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
  50% {
    transform: scale(1.1);
    filter: drop-shadow(0 4px 8px rgba(251, 191, 36, 0.3));
  }
}

.contact-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #92400e;
  letter-spacing: -0.3px;
}

/* Textes du message de contact */
.contact-text {
  padding: 16px 18px 8px 18px;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #374151;
  font-weight: 500;
}

.contact-subtitle {
  padding: 0 18px 16px 18px;
  margin: 0;
  font-size: 13px;
  color: #6b7280;
  font-weight: 600;
}

/* Bouton email professionnel avec gradient */
.contact-email-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 18px 16px 18px;
  padding: 14px 20px;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  animation: buttonEntrance 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s backwards;
}

@keyframes buttonEntrance {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.contact-email-button:hover {
  background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
}

.contact-email-button:active {
  transform: translateY(0) scale(0.98);
  transition: transform 0.1s;
}

.email-icon {
  font-size: 18px;
  animation: emailBounce 2s ease-in-out infinite;
}

@keyframes emailBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.email-text {
  letter-spacing: 0.3px;
}

/* Badge de confidentialité */
.contact-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 18px 16px 18px;
  margin: 0;
  animation: badgeEntrance 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.5s backwards;
}

@keyframes badgeEntrance {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.badge-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 900;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);
  animation: checkPulse 2s ease-in-out 1s infinite;
}

@keyframes checkPulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.5);
  }
}

.badge-text {
  font-size: 12px;
  color: #059669;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

/* Animation reduced motion pour clarification et contact */
@media (prefers-reduced-motion: reduce) {
  .clarification-bubble,
  .contact-bubble,
  .clarification-option,
  .contact-email-button,
  .clarification-icon,
  .contact-icon,
  .option-icon,
  .email-icon,
  .badge-icon {
    animation: none !important;
    transition: opacity 0.2s !important;
  }

  .clarification-option:hover,
  .contact-email-button:hover {
    transform: none !important;
  }
}

/* Responsive */
@media (max-width: 640px) {
  .chatbot-window {
    width: calc(100vw - 32px);
    height: calc(100vh - 100px);
    bottom: 16px;
    right: 16px;
  }

  .chatbot-window.rtl {
    right: auto;
    left: 16px;
  }

  .chatbot-button {
    bottom: 16px;
    right: 16px;
  }

  .chatbot-button.rtl {
    right: auto;
    left: 16px;
  }

  /* Ajustements pour clarification sur mobile */
  .clarification-bubble,
  .contact-bubble {
    max-width: 95%;
  }

  .clarification-option {
    padding: 12px 14px;
  }

  .option-text {
    font-size: 12px;
  }

  .contact-email-button {
    padding: 12px 16px;
    font-size: 13px;
  }
}
</style>
