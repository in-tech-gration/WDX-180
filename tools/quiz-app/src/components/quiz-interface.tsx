import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { Badge } from "../components/ui/badge"
import { ArrowLeft, ArrowRight } from "lucide-react"
import CodeBlock from "./code-block"
import { useTranslation } from "react-i18next"
import type { QuizData, QuizProgress, QuizResult } from "../types/quiz"

interface QuizInterfaceProps {
  quiz: QuizData
  progress: QuizProgress
  onComplete: (result: QuizResult) => void
  onUpdateProgress: (progress: QuizProgress) => void
  onBack: () => void
}

export default function QuizInterface({ quiz, progress, onComplete, onUpdateProgress, onBack }: QuizInterfaceProps) {

  const { t } = useTranslation()
  const [currentProgress, setCurrentProgress] = useState(progress)
  const currentQuestion = quiz.questions[currentProgress.currentQuestion]
  const totalQuestions = quiz.questions.length
  const progressPercentage = ((currentProgress.currentQuestion + 1) / totalQuestions) * 100;

  useEffect(() => {
    localStorage.setItem("quiz-progress", JSON.stringify(currentProgress))
    onUpdateProgress(currentProgress)
  }, [currentProgress, onUpdateProgress])

  const handleAnswerSelect = (answerIndex: number) => {
    const newProgress = {
      ...currentProgress,
      answers: {
        ...currentProgress.answers,
        [currentProgress.currentQuestion]: answerIndex,
      },
    }
    setCurrentProgress(newProgress)
  }

  const handleNext = () => {
    if (currentProgress.currentQuestion < totalQuestions - 1) {
      setCurrentProgress({
        ...currentProgress,
        currentQuestion: currentProgress.currentQuestion + 1,
      })
    } else {
      // Quiz completed
      const correctAnswers = quiz.questions.reduce((count, question, index) => {
        const userAnswer = currentProgress.answers[index]
        return userAnswer === question.correctAnswer ? count + 1 : count
      }, 0)

      const result: QuizResult = {
        category: currentProgress.category,
        subcategory: currentProgress.subcategory,
        totalQuestions,
        correctAnswers,
        answers: currentProgress.answers,
        completionTime: Date.now() - currentProgress.startTime,
        questions: quiz.questions,
      }

      onComplete(result)
    }
  }

  const handlePrevious = () => {
    if (currentProgress.currentQuestion > 0) {
      setCurrentProgress({
        ...currentProgress,
        currentQuestion: currentProgress.currentQuestion - 1,
      })
    }
  }

  const handleQuestionJump = (questionIndex: number) => {
    setCurrentProgress({
      ...currentProgress,
      currentQuestion: questionIndex,
    })
  }

  const isAnswered = currentProgress.answers[currentProgress.currentQuestion] !== undefined

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4 flex-col sm:flex-row">
            <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t("quiz.backToTopics")}
            </Button>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold capitalize">
                {t(`category.${currentProgress.category}.name`)} -{" "} {quiz.title}
              </h1>
              <Badge
                variant={
                  currentQuestion.level === "easy"
                    ? "default"
                    : currentQuestion.level === "medium"
                      ? "secondary"
                      : "destructive"
                }
              >
                {t(`common.${currentQuestion.level}`)}
              </Badge>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {t("quiz.question", { current: currentProgress.currentQuestion + 1, total: totalQuestions })}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {t("quiz.complete", { percentage: Math.round(progressPercentage) })}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Code Block (if present) */}
        {currentQuestion.code && (
          <div className="mb-6">
            <CodeBlock language={currentQuestion.code.language} content={currentQuestion.code.content} />
          </div>
        )}

        {/* Question */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant={currentProgress.answers[currentProgress.currentQuestion] === index ? "default" : "outline"}
                  className="w-full text-left justify-start h-auto p-4 dark:text-white text-lg whitespace-normal"
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Question Timeline */}
        <div className="mb-6">
          <div className="relative">
            {/* Background line */}
            <div className="absolute hidden md:block top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 transform -translate-y-1/2"></div>

            {/* Question buttons */}
            <div className="relative flex justify-start md:justify-between flex-wrap">
              {quiz.questions.map((_question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionJump(index)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-colors relative ${index === currentProgress.currentQuestion
                    ? "bg-blue-600 text-white border-blue-600 dark:bg-blue-600 dark:text-white"
                    : currentProgress.answers[index] !== undefined
                      ? "bg-green-500 text-white border-green-600 dark:bg-green-600 dark:text-white"
                      : "bg-white text-gray-700 border-gray-400 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                    }`}
                >
                  {index + 1}
                  {/* Code indicator */}
                  {/* {question.code && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                  )} */}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentProgress.currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("quiz.previous")}
          </Button>

          <Button onClick={handleNext} disabled={!isAnswered} className="flex items-center gap-2">
            {currentProgress.currentQuestion === totalQuestions - 1 ? t("quiz.finish") : t("quiz.next")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </div>
  )
}
