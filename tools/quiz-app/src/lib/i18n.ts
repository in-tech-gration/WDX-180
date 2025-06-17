import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      // Splash Screen
      "splash.title": "Quiz Master",
      "splash.subtitle": "Test your knowledge in web development technologies",
      "splash.multipleTopics": "Multiple Topics",
      "splash.quickFun": "Quick & Fun",
      "splash.startQuiz": "Start Quiz",

      // Category Selection
      "category.title": "Choose a Category",
      "category.subtitle": "Select a technology to test your knowledge",
      "category.html.name": "HTML",
      "category.html.description": "Markup language fundamentals",
      "category.css.name": "CSS",
      "category.css.description": "Styling and layout techniques",
      "category.javascript.name": "JavaScript",
      "category.javascript.description": "Programming language essentials",
      "category.react.name": "React",
      "category.react.description": "Component-based development",

      // Subcategory Selection
      "subcategory.title": "{{category}} Topics",
      "subcategory.subtitle": "Choose a specific topic to focus on",
      "subcategory.questions": "{{count}} questions",
      "subcategory.answered": "{{answered}}/{{total}} answered",
      "subcategory.progress": "Progress",
      "subcategory.successRate": "Success Rate",
      "subcategory.best": "Best: {{score}}%",
      "subcategory.startQuiz": "Start Quiz",
      "subcategory.continue": "Continue ({{progress}}%)",
      "subcategory.retake": "Retake",

      // Quiz Interface
      "quiz.backToTopics": "Back to Topics",
      "quiz.question": "Question {{current}} of {{total}}",
      "quiz.complete": "{{percentage}}% Complete",
      "quiz.previous": "Previous",
      "quiz.next": "Next",
      "quiz.finish": "Finish",

      // Results Screen
      "results.title": "Quiz Complete!",
      "results.excellent": "Excellent! 🎉",
      "results.great": "Great job! 👏",
      "results.good": "Good work! 👍",
      "results.notBad": "Not bad! 🙂",
      "results.keepPracticing": "Keep practicing! 💪",
      "results.yourScore": "Your Score",
      "results.correctAnswers": "{{correct}} out of {{total}} correct",
      "results.category": "Category",
      "results.timeTaken": "Time Taken",
      "results.minutes": "{{minutes}} min",
      "results.questionBreakdown": "Question Breakdown",
      "results.yourAnswer": "Your answer: {{answer}}",
      "results.correctAnswer": "Correct answer: {{answer}}",
      "results.notAnswered": "Not answered",
      "results.retakeQuiz": "Retake Quiz",
      "results.backToHome": "Back to Home",

      // Common
      "common.back": "Back",
      "common.easy": "Easy",
      "common.medium": "Medium",
      "common.hard": "Hard",
      "common.toggleTheme": "Toggle theme",

      // Quiz Data
      "quiz.html.semantic.title": "HTML Semantic Elements",
      "quiz.html.semantic.description": "Test your knowledge of semantic HTML elements",
      "quiz.html.forms.title": "HTML Forms",
      "quiz.html.forms.description": "Learn about HTML form elements and attributes",
      "quiz.css.grid.title": "CSS Grid Layout",
      "quiz.css.grid.description": "Master CSS Grid layout system",
      "quiz.css.flexbox.title": "CSS Flexbox",
      "quiz.css.flexbox.description": "Understanding flexible box layout",
      "quiz.javascript.promises.title": "JavaScript Promises",
      "quiz.javascript.promises.description": "Asynchronous programming with Promises",
      "quiz.javascript.arrays.title": "JavaScript Arrays",
      "quiz.javascript.arrays.description": "Array methods and manipulation",
      "quiz.react.hooks.title": "React Hooks",
      "quiz.react.hooks.description": "Understanding React Hooks",
      "quiz.react.components.title": "React Components",
      "quiz.react.components.description": "Component creation and lifecycle",
    },
  },
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })
}

export default i18n
