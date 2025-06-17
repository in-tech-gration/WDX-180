import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Brain, Code, Zap } from "lucide-react"
import { useTranslation } from "react-i18next"

interface SplashScreenProps {
  onStart: () => void
}

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">

      <Card className="w-full max-w-md text-center shadow-xl">
        <CardContent className="p-8">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Brain className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{t("splash.title")}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{t("splash.subtitle")}</p>
          </div>

          {/* <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Code className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
              <span className="text-sm font-medium">{t("splash.multipleTopics")}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mb-2" />
              <span className="text-sm font-medium">{t("splash.quickFun")}</span>
            </div>
          </div> */}

          <Button
            onClick={onStart}
            className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 dark:text-white"
          >
            {t("splash.startQuiz")}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
