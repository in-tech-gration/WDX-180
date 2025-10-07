import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
import { Trophy, RotateCcw, Home, CheckCircle, XCircle } from "lucide-react"
import { useTranslation } from "react-i18next"
import type { QuizResult } from "../types/quiz"
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

interface ResultsScreenProps {
  result: QuizResult
  onRestart: () => void
  onRetakeQuiz: () => void
}

export default function ResultsScreen({ result, onRestart, onRetakeQuiz }: ResultsScreenProps) {

  const { t } = useTranslation();
  const { width, height } = useWindowSize();

  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100)
  const completionTimeMinutes = Math.round(result.completionTime / 60000)

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600 dark:text-green-400"
    if (percentage >= 60) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return t("results.excellent")
    if (percentage >= 80) return t("results.great")
    if (percentage >= 70) return t("results.good")
    if (percentage >= 60) return t("results.notBad")
    return t("results.keepPracticing")
  }

  const getProgressVariant = (percentage: number) => {
    if (percentage >= 80) return "success"
    if (percentage >= 60) return "warning"
    return "danger"
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">

        {percentage >= 90 && (
          <Confetti
            width={width}
            height={height}
          />
        )}

        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-full">
              <Trophy className="h-12 w-12 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">{t("results.title")}</h1>
          <p className="text-gray-600 dark:text-gray-300">{getScoreMessage(percentage)}</p>
        </div>

        {/* Score Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-center">{t("results.yourScore")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(percentage)}`}>{percentage}%</div>
              <p className="text-gray-600 dark:text-gray-300">
                {t("results.correctAnswers", { correct: result.correctAnswers, total: result.totalQuestions })}
              </p>
            </div>
            <Progress value={percentage} variant={getProgressVariant(percentage)} className="h-4 mb-4" />
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t("results.category")}</p>
                <p className="font-semibold capitalize">{t(`category.${result.category}.name`)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t("results.timeTaken")}</p>
                <p className="font-semibold">{t("results.minutes", { minutes: completionTimeMinutes })}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question Breakdown */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{t("results.questionBreakdown")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.questions.map((question, index) => {
                const userAnswer = result.answers[index]
                const isCorrect = userAnswer === question.correctAnswer

                return (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">
                            {t("quiz.question", { current: index + 1, total: result.totalQuestions })}
                          </span>
                          <Badge
                            variant={
                              question.level === "easy"
                                ? "default"
                                : question.level === "medium"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className="text-xs"
                          >
                            {t(`common.${question.level}`)}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{question.question}</p>
                        <div className="text-sm">
                          <p className={isCorrect ? "text-green-600" : "text-red-600"}>
                            {t("results.yourAnswer", {
                              answer:
                                userAnswer !== undefined ? question.options[userAnswer] : t("results.notAnswered"),
                            })}
                          </p>
                          {!isCorrect && (
                            <p className="text-green-600">
                              {t("results.correctAnswer", { answer: question.options[question.correctAnswer] })}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onRetakeQuiz} className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            {t("results.retakeQuiz")}
          </Button>
          <Button variant="outline" onClick={onRestart} className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            {t("results.backToHome")}
          </Button>
        </div>
      </div>
    </div>
  )
}
