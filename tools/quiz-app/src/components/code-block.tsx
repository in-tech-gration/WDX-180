import { useState, useEffect, useRef } from "react"
import { Button } from "../components/ui/button"
import { Copy, Check } from "lucide-react"
import Prism from "prismjs"
import { trimContent } from "../utils/utils"

// Import Prism themes and languages
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-css"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-tsx"

interface CodeBlockProps {
  language: string
  content: string
}

export default function CodeBlock({ language, content }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const codeRef = useRef<HTMLElement>(null)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case "html":
      case "markup":
        return "text-orange-600 dark:text-orange-400"
      case "css":
        return "text-blue-600 dark:text-blue-400"
      case "javascript":
      case "js":
        return "text-yellow-600 dark:text-yellow-400"
      case "jsx":
      case "tsx":
      case "typescript":
        return "text-cyan-600 dark:text-cyan-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  const getPrismLanguage = (lang: string) => {
    switch (lang.toLowerCase()) {
      case "html":
        return "markup"
      case "js":
        return "javascript"
      default:
        return lang.toLowerCase()
    }
  }

  useEffect(() => {
    if (codeRef.current) {
      // Set the language class for Prism
      const prismLang = getPrismLanguage(language)
      codeRef.current.className = `language-${prismLang}`
      codeRef.current.textContent = trimContent(content);

      // Highlight the code
      Prism.highlightElement(codeRef.current)
    }
  }, [content, language]);

  const trimmedContent = trimContent(content);

  return (
    <div className="relative bg-gray-900 dark:bg-gray-950 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
        <span className={`text-sm font-medium ${getLanguageColor(language)}`}>{language.toUpperCase()}</span>
        <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 w-8 p-0 text-gray-400 hover:text-white">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed !bg-transparent !m-0">
          <code ref={codeRef} className={`language-${getPrismLanguage(language)} !bg-transparent`}>{trimmedContent}</code>
        </pre>
      </div>

    </div>
  )
}
