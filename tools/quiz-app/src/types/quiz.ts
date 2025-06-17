export type Category = "html" | "css" | "javascript" | "react";

export interface Question {
  question: string
  options: string[]
  correctAnswer: number
  level: "easy" | "medium" | "hard"
  code?: {
    language: "javascript" | "html" | "css" | "jsx"
    content: string
  }
}

export interface QuizData {
  disabled?: boolean;
  title: string
  description: string
  questions: Question[]
}

export interface QuizProgress {
  category: string
  subcategory: string
  currentQuestion: number
  answers: Record<number, number>
  startTime: number
}

export interface QuizResult {
  category: string
  subcategory: string
  totalQuestions: number
  correctAnswers: number
  answers: Record<number, number>
  completionTime: number
  questions: Question[]
}

export interface QuizDataStructure {
  [category: string]: {
    [subcategory: string]: QuizData
  }
}

export interface QuizHistory {
  category: string
  subcategory: string
  totalQuestions: number
  answeredQuestions: number
  correctAnswers: number
  isCompleted: boolean
  lastAttempt: number
  bestScore?: number
}

export interface QuizHistoryStorage {
  [key: string]: QuizHistory // key format: "category-subcategory"
}
