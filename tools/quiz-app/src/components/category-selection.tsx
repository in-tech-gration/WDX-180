import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { ArrowLeft, Code, Palette, Zap, Component } from "lucide-react"
import { useTranslation } from "react-i18next"
import { quizData } from "../data/quiz-data";
import type { Category } from "../types/quiz"

interface CategorySelectionProps {
  onSelectCategory: (category: string) => void
  onBack: () => void
}

const categoryIcons = {
  html: Code,
  css: Palette,
  javascript: Zap,
  react: Component
}

const categoryColors = {
  html: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
  css: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
  javascript: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400",
  react: "bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400",
}

const categories = Object.keys(quizData) as Category[];

export default function CategorySelection({ onSelectCategory, onBack }: CategorySelectionProps) {
  const { t } = useTranslation()

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
          <h1 className="text-3xl font-bold mb-2">{t("category.title")}</h1>
          <p className="text-gray-600 dark:text-gray-300">{t("category.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => {

            const IconComponent = categoryIcons[category];
            return (
              <Card
                key={category}
                className="cursor-pointer hover:shadow-lg transition-shadow duration-200 hover:scale-105 transform"
                onClick={() => onSelectCategory(category)}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full ${categoryColors[category]}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{t(`category.${category}.name`)}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300">{t(`category.${category}.description`)}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
