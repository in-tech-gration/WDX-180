"use client"

import { useState, useEffect, FormEvent, useRef } from "react"
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
// FIREBASE:
import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { firebaseConfig } from "../firebase.config";

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
  const form = useRef<HTMLFormElement | null>(null);

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

  function login(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();
    const email = form.current?.email.value;
    const password = form.current?.password.value;
    const hasEmailAndPassword = email && password;

    if (!hasEmailAndPassword) {
      return false;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log('User signed in:', user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function logout() {

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.error('Sign-out error:', error);
    });

  }

  useEffect(() => {
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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
      <I18nProvider>
        <div className="min-h-screen bg-background text-foreground">

          {!isLoggedIn && (
            <div className="flex items-center justify-center p-4">
              <form ref={form} onSubmit={login} className="max-w-md">
                <p>
                  <label htmlFor="">
                    <input name="email" type="text" placeholder="email" className="p-2" defaultValue="" />
                  </label>
                </p>
                <p>
                  <label htmlFor="">
                    <input name="password" type="text" placeholder="password" className="p-2" defaultValue="" />
                  </label>
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Login</button>
              </form>
            </div>
          )}

          {isLoggedIn && (
            <div className="flex items-center justify-center p-4 gap-8">
              <p>Logged in as: <span className="font-bold">{currentUser?.userEmail}</span></p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={logout}>Logout</button>
            </div>
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
