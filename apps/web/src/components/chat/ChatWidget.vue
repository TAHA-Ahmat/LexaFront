<template>
  <div class="chatbot-container">
    <!-- Bouton d'ouverture du chat -->
    <button
      v-if="!isOpen"
      class="chatbot-button"
      :class="{ 'rtl': locale === 'ar' }"
      @click="toggleChat"
      :aria-label="$t('chatbot.openChat')"
    >
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
        <button
          class="close-button"
          @click="toggleChat"
          :aria-label="$t('chatbot.closeChat')"
        >
          ✕
        </button>
      </div>

      <!-- Zone de messages -->
      <div class="chatbot-messages" ref="messagesContainer">
        <!-- Message de bienvenue -->
        <div v-if="messages.length === 0" class="welcome-message">
          <p class="welcome-title">{{ $t('chatbot.welcome') }}</p>
          <p class="welcome-subtitle">{{ $t('chatbot.askQuestion') }}</p>
        </div>

        <!-- Messages -->
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="message"
          :class="{ 'user-message': msg.role === 'user', 'bot-message': msg.role === 'assistant' }"
        >
          <!-- Avatar du bot (à gauche des messages) -->
          <img
            v-if="msg.role === 'assistant'"
            :src="botAvatar"
            alt="Lexafric AI"
            class="message-avatar"
          />

          <div class="message-bubble">
            <p>{{ msg.content }}</p>
            <span v-if="msg.role === 'assistant' && msg.confidence !== undefined" class="confidence-badge">
              {{ msg.source === 'knowledge_base_gpt' ? '🤖 GPT' : msg.source === 'knowledge_base_direct' ? '📚 KB' : '💬' }}
            </span>
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

      <!-- Zone de saisie -->
      <div class="chatbot-input-wrapper">
        <form @submit.prevent="sendMessage" class="chatbot-input-form">
          <input
            v-model="userInput"
            type="text"
            :placeholder="$t('chatbot.placeholder')"
            :disabled="isLoading"
            class="chatbot-input"
            :dir="locale === 'ar' ? 'rtl' : 'ltr'"
            maxlength="500"
          />
          <button
            type="submit"
            :disabled="!userInput.trim() || isLoading"
            class="send-button"
            :aria-label="$t('chatbot.send')"
          >
            <span class="send-icon">{{ locale === 'ar' ? '◄' : '►' }}</span>
          </button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

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
}

// Composables
const { locale } = useI18n()

// État réactif
const isOpen = ref(false)
const messages = ref<Message[]>([])
const userInput = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const messagesContainer = ref<HTMLElement | null>(null)

// Fonctions
const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value && messages.value.length === 0) {
    // Optionnel: ajouter un message de bienvenue automatique
  }
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return

  const messageText = userInput.value.trim()
  errorMessage.value = ''

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
    // Appeler l'API chatbot
    const response = await $fetch<ChatResponse>('/api/chatbot', {
      method: 'POST',
      body: {
        message: messageText,
        locale: locale.value
      }
    })

    // Ajouter la réponse du bot
    messages.value.push({
      role: 'assistant',
      content: response.answer,
      confidence: response.confidence,
      source: response.source
    })

    await scrollToBottom()
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi du message:', error)
    errorMessage.value = error.data?.message || 'Une erreur est survenue. Veuillez réessayer.'

    // Retirer le dernier message utilisateur en cas d'erreur
    messages.value.pop()
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

.welcome-message {
  text-align: center;
  padding: 40px 20px;
  color: #6b7280;
}

.welcome-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
}

.welcome-subtitle {
  font-size: 14px;
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
}
</style>
