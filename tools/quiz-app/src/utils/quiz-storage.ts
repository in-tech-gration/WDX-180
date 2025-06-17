import type { QuizHistory, QuizHistoryStorage, QuizProgress, QuizResult } from "@/types/quiz"

const QUIZ_HISTORY_KEY = "quiz-history"

export function getQuizHistory(): QuizHistoryStorage {
  if (typeof window === "undefined") return {}

  try {
    const stored = localStorage.getItem(QUIZ_HISTORY_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

export function saveQuizHistory(history: QuizHistoryStorage): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(history))
  } catch (error) {
    console.error("Failed to save quiz history:", error)
  }
}

export function updateQuizProgress(progress: QuizProgress): void {
  const history = getQuizHistory()
  const key = `${progress.category}-${progress.subcategory}`
  const answeredCount = Object.keys(progress.answers).length

  history[key] = {
    category: progress.category,
    subcategory: progress.subcategory,
    totalQuestions: 0, // Will be updated when quiz is completed
    answeredQuestions: answeredCount,
    correctAnswers: 0, // Will be calculated when quiz is completed
    isCompleted: false,
    lastAttempt: Date.now(),
    bestScore: history[key]?.bestScore,
  }

  saveQuizHistory(history)
}

export function updateQuizResult(result: QuizResult): void {
  const history = getQuizHistory()
  const key = `${result.category}-${result.subcategory}`
  const successRate = Math.round((result.correctAnswers / result.totalQuestions) * 100)

  history[key] = {
    category: result.category,
    subcategory: result.subcategory,
    totalQuestions: result.totalQuestions,
    answeredQuestions: result.totalQuestions,
    correctAnswers: result.correctAnswers,
    isCompleted: true,
    lastAttempt: Date.now(),
    bestScore: Math.max(successRate, history[key]?.bestScore || 0),
  }

  saveQuizHistory(history)
}

export function getQuizHistoryForTopic(category: string, subcategory: string): QuizHistory | null {
  const history = getQuizHistory()
  const key = `${category}-${subcategory}`
  return history[key] || null
}

export function clearQuizHistory(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(QUIZ_HISTORY_KEY)
}
