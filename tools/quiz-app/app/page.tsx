"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/components/i18n-provider"
import SplashScreen from "@/components/splash-screen"
import CategorySelection from "@/components/category-selection"
import SubcategorySelection from "@/components/subcategory-selection"
import QuizInterface from "@/components/quiz-interface"
import ResultsScreen from "@/components/results-screen"
import type { QuizData, QuizProgress, QuizResult } from "@/types/quiz"
import { quizData } from "@/data/quiz-data"
import { updateQuizProgress, updateQuizResult } from "@/utils/quiz-storage"

type AppState = "splash" | "category" | "subcategory" | "quiz" | "results"

export default function Home() {
  const [appState, setAppState] = useState<AppState>("splash")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("")
  const [currentQuiz, setCurrentQuiz] = useState<QuizData | null>(null)
  const [quizProgress, setQuizProgress] = useState<QuizProgress | null>(null)
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null)

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem("quiz-progress")
    if (savedProgress) {
      const progress = JSON.parse(savedProgress) as QuizProgress
      setQuizProgress(progress)
      setSelectedCategory(progress.category)
      setSelectedSubcategory(progress.subcategory)
      setCurrentQuiz(quizData[progress.category]?.[progress.subcategory])
      setAppState("quiz")
    }
  }, [])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setAppState("subcategory")
  }

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory)
    const quiz = quizData[selectedCategory]?.[subcategory]
    if (quiz) {
      setCurrentQuiz(quiz)
      const newProgress: QuizProgress = {
        category: selectedCategory,
        subcategory,
        currentQuestion: 0,
        answers: {},
        startTime: Date.now(),
      }
      setQuizProgress(newProgress)
      localStorage.setItem("quiz-progress", JSON.stringify(newProgress))
      setAppState("quiz")
    }
  }

  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result)
    updateQuizResult(result)
    localStorage.removeItem("quiz-progress")
    setAppState("results")
  }

  const handleProgressUpdate = (progress: QuizProgress) => {
    setQuizProgress(progress)
    updateQuizProgress(progress)
  }

  const handleRestart = () => {
    setAppState("splash")
    setSelectedCategory("")
    setSelectedSubcategory("")
    setCurrentQuiz(null)
    setQuizProgress(null)
    setQuizResult(null)
    localStorage.removeItem("quiz-progress")
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
      <I18nProvider>
        <div className="min-h-screen bg-background text-foreground">
          {appState === "splash" && <SplashScreen onStart={() => setAppState("category")} />}
          {appState === "category" && (
            <CategorySelection onSelectCategory={handleCategorySelect} onBack={() => setAppState("splash")} />
          )}
          {appState === "subcategory" && (
            <SubcategorySelection
              category={selectedCategory}
              onSelectSubcategory={handleSubcategorySelect}
              onBack={() => setAppState("category")}
            />
          )}
          {appState === "quiz" && currentQuiz && quizProgress && (
            <QuizInterface
              quiz={currentQuiz}
              progress={quizProgress}
              onComplete={handleQuizComplete}
              onUpdateProgress={handleProgressUpdate}
              onBack={() => {
                // Clear current quiz progress and go back to subcategory selection
                localStorage.removeItem("quiz-progress")
                setQuizProgress(null)
                setCurrentQuiz(null)
                setAppState("subcategory")
              }}
            />
          )}
          {appState === "results" && quizResult && (
            <ResultsScreen
              result={quizResult}
              onRestart={handleRestart}
              onRetakeQuiz={() => {
                setAppState("quiz")
                const newProgress: QuizProgress = {
                  category: selectedCategory,
                  subcategory: selectedSubcategory,
                  currentQuestion: 0,
                  answers: {},
                  startTime: Date.now(),
                }
                setQuizProgress(newProgress)
                localStorage.setItem("quiz-progress", JSON.stringify(newProgress))
              }}
            />
          )}
        </div>
      </I18nProvider>
    </ThemeProvider>
  )
}
