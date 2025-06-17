/* eslint-disable @typescript-eslint/no-unused-vars */

const metadata = {
  title: "Quiz Master - Test Your Web Development Knowledge",
  description:
    "Interactive quiz app for HTML, CSS, JavaScript, and React. Test your skills with multiple choice questions across different difficulty levels.",
    generator: 'v0.dev'
}

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/components/i18n-provider"
import SplashScreen from "@/components/splash-screen"
import CategorySelection from "@/components/category-selection"
import SubcategorySelection from "@/components/subcategory-selection"
import QuizInterface from "@/components/quiz-interface"
import ResultsScreen from "@/components/results-screen"
import type { QuizData, QuizProgress, QuizResult } from "./types/quiz"
import { quizData } from "./data/quiz-data"
import { updateQuizProgress, updateQuizResult } from "@/utils/quiz-storage"
// FIREBASE:
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { firebaseConfig } from "./firebase.config.ts";
import LoginBlock from "@/components/login-block";
// import ThemeToggle from "./components/theme-toggle"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

type AppState = "splash" | "category" | "subcategory" | "quiz" | "results"

const auth = getAuth();

export default function Home() {

  const [appState, setAppState] = useState<AppState>("splash")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("")
  const [currentQuiz, setCurrentQuiz] = useState<QuizData | null>(null)
  const [quizProgress, setQuizProgress] = useState<QuizProgress | null>(null)
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ userEmail: string } | null>(null);

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
  }, []);

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

  function logout() {

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.error('Sign-out error:', error);
    });

  }

  useEffect(function onAuthStateChangedHandler() {

    const stopListening = onAuthStateChanged(auth,
      authUser => {
        if (authUser) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setCurrentUser({ userEmail: authUser.email as string });
          return setIsLoggedIn(true);
        }
        // User is signed out
        setIsLoggedIn(false);
      },
    );
    return () => {
      stopListening();
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="system" >
      <I18nProvider>
        <div className="min-h-screen bg-background text-foreground">
          <div className="max-w-4xl m-auto justify-between py-2 flex flex-col sm:flex-row gap-2 sm:gap-8">

            {isLoggedIn && (
              <div className="flex items-center justify-center gap-8 pl-4">
                <p>Logged in: <span className="font-bold">{currentUser?.userEmail}</span></p>
              </div>
            )}

            <div className="flex gap-4 justify-between px-4">
              {isLoggedIn && (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-full" onClick={logout}>
                  Logout
                </button>
              )}
              {/* <ThemeToggle /> */}
            </div>

          </div>

          {!isLoggedIn && (
            <LoginBlock auth={auth} />
          )}

          {appState === "splash" && isLoggedIn && (
            <SplashScreen onStart={() => setAppState("category")} />
          )}

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
