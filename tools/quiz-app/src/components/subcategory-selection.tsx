import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
import { ArrowLeft, RotateCcw } from "lucide-react"
import { quizData } from "../data/quiz-data"
import { getQuizHistoryForTopic } from "../utils/quiz-storage"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import type { Question, QuizHistory } from "../types/quiz"

interface SubcategorySelectionProps {
  category: string
  onSelectSubcategory: (subcategory: string) => void
  onBack: () => void
}

export default function SubcategorySelection({ category, onSelectSubcategory, onBack }: SubcategorySelectionProps) {

  const { t } = useTranslation()
  const subcategories = quizData[category] || {}
  const [quizHistories, setQuizHistories] = useState<Record<string, QuizHistory | null>>({})

  useEffect(() => {
    // Load quiz histories for all subcategories
    const histories: Record<string, QuizHistory | null> = {}
    Object.keys(subcategories).forEach((subcategoryKey) => {
      histories[subcategoryKey] = getQuizHistoryForTopic(category, subcategoryKey)
    })
    setQuizHistories(histories)
  }, [category, subcategories])

  const getDominantDifficulty = (questions: Question[]) => {

    const counts = { easy: 0, medium: 0, hard: 0 }
    questions.forEach((q) => counts[q.level]++)

    const max = Math.max(counts.easy, counts.medium, counts.hard)
    if (counts.hard === max) return "hard"
    if (counts.medium === max) return "medium"
    return "easy"
  }

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "easy":
        return "default"
      case "medium":
        return "secondary"
      case "hard":
        return "destructive"
      default:
        return "default"
    }
  }

  const getProgressVariant = (successRate: number) => {
    if (successRate >= 80) return "success"
    if (successRate >= 60) return "warning"
    return "danger"
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t("common.back")}
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {t("subcategory.title", { category: t(`category.${category}.name`) })}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">{t("subcategory.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(subcategories).map(([subcategoryKey, subcategoryData]) => {

            const isDisabled = subcategoryData.disabled;
            const history = quizHistories[subcategoryKey]
            const dominantDifficulty = getDominantDifficulty(subcategoryData.questions)
            const progressPercentage = history
              ? Math.round((history.answeredQuestions / subcategoryData.questions.length) * 100)
              : 0
            const successRate =
              history && history.isCompleted
                ? Math.round((history.correctAnswers / history.totalQuestions) * 100)
                : null

            return (
              <Card
                key={subcategoryKey}
                className={"hover:shadow-lg transition-all duration-200 hover:scale-105 transform flex flex-col justify-between " + (isDisabled ? "cursor-not-allowed" : "cursor-pointer")}
                onClick={() => {
                  if (isDisabled) {
                    return true;
                  }
                  // eslint-disable-next-line
                  !history?.isCompleted && onSelectSubcategory(subcategoryKey)
                }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg flex-1">
                      {quizData[category][subcategoryKey].title}
                      {/* {t(`quiz.${category}.${subcategoryKey}.title`)} */}
                    </CardTitle>
                    <Badge variant={getDifficultyColor(dominantDifficulty)} className="ml-2 capitalize">
                      {t(`common.${dominantDifficulty}`)}
                    </Badge>
                  </div>
                </CardHeader>

                {!isDisabled && (
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {quizData[category][subcategoryKey].description}
                      {/* {t(`quiz.${category}.${subcategoryKey}.description`)} */}
                    </p>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600 dark:text-gray-300">
                          {t("subcategory.questions", { count: subcategoryData.questions.length })}
                        </span>
                        {history && (
                          <span className="text-gray-600 dark:text-gray-300">
                            {t("subcategory.answered", {
                              answered: history.answeredQuestions,
                              total: subcategoryData.questions.length,
                            })}
                          </span>
                        )}
                      </div>

                      {/* Progress Bar */}
                      {history && progressPercentage > 0 && (
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600 dark:text-gray-300">{t("subcategory.progress")}</span>
                            <span className="font-medium">{progressPercentage}%</span>
                          </div>
                          <Progress value={progressPercentage} className="h-2" />
                        </div>
                      )}

                      {/* Success Rate */}
                      {successRate !== null && (
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600 dark:text-gray-300">{t("subcategory.successRate")}</span>
                            <span
                              className={`font-medium ${successRate >= 80
                                ? "text-green-600 dark:text-green-400"
                                : successRate >= 60
                                  ? "text-yellow-600 dark:text-yellow-400"
                                  : "text-red-600 dark:text-red-400"
                                }`}
                            >
                              {successRate}%
                            </span>
                          </div>
                          <Progress value={successRate} variant={getProgressVariant(successRate)} className="h-2" />
                        </div>
                      )}

                      {/* Best Score */}
                      {history?.bestScore && history.bestScore !== successRate && (
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {t("subcategory.best", { score: history.bestScore })}
                        </div>
                      )}

                      {/* Action Button */}
                      {history?.isCompleted ? (
                        <Button
                          onClick={(e) => {
                            e.stopPropagation()
                            onSelectSubcategory(subcategoryKey)
                          }}
                          className="w-full mt-4 flex items-center gap-2"
                          variant="outline"
                        >
                          <RotateCcw className="h-4 w-4" />
                          {t("subcategory.retake")}
                        </Button>
                      ) : history && progressPercentage > 0 ? (
                        <Button
                          onClick={(e) => {
                            e.stopPropagation()
                            onSelectSubcategory(subcategoryKey)
                          }}
                          className="w-full mt-4"
                        >
                          {t("subcategory.continue", { progress: progressPercentage })}
                        </Button>
                      ) : (
                        <Button
                          onClick={(e) => {
                            e.stopPropagation()
                            onSelectSubcategory(subcategoryKey)
                          }}
                          className="w-full mt-4"
                        >
                          {t("subcategory.startQuiz")}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                )}

                {isDisabled && (
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {quizData[category][subcategoryKey].description}
                    </p>

                    <div className="space-y-3">
                      <Button
                        disabled
                        className="w-full mt-4 dark:text-white"
                      >
                        Not yet available
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
