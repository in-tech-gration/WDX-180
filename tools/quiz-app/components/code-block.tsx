"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
  language: string
  content: string
}

export default function CodeBlock({ language, content }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

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
        return "text-orange-600 dark:text-orange-400"
      case "css":
        return "text-blue-600 dark:text-blue-400"
      case "javascript":
      case "js":
        return "text-yellow-600 dark:text-yellow-400"
      case "jsx":
      case "tsx":
        return "text-cyan-600 dark:text-cyan-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  const highlightCode = (code: string, lang: string) => {
    let highlighted = code

    if (lang === "html") {
      // HTML tags
      highlighted = highlighted.replace(
        /(&lt;\/?)([a-zA-Z][a-zA-Z0-9]*)(.*?)(&gt;)/g,
        '<span class="text-blue-600 dark:text-blue-400">$1$2</span><span class="text-green-600 dark:text-green-400">$3</span><span class="text-blue-600 dark:text-blue-400">$4</span>',
      )
      // Attributes
      highlighted = highlighted.replace(
        /(\w+)=("[^"]*")/g,
        '<span class="text-purple-600 dark:text-purple-400">$1</span>=<span class="text-green-600 dark:text-green-400">$2</span>',
      )
    } else if (lang === "css") {
      // CSS selectors
      highlighted = highlighted.replace(
        /^([.#]?[a-zA-Z-]+)(\s*{)/gm,
        '<span class="text-blue-600 dark:text-blue-400">$1</span>$2',
      )
      // CSS properties
      highlighted = highlighted.replace(
        /(\s+)([a-zA-Z-]+)(:)/g,
        '$1<span class="text-purple-600 dark:text-purple-400">$2</span>$3',
      )
      // CSS values
      highlighted = highlighted.replace(
        /(:\s*)([^;]+)(;)/g,
        '$1<span class="text-green-600 dark:text-green-400">$2</span>$3',
      )
    } else if (lang === "javascript" || lang === "js" || lang === "jsx" || lang === "tsx") {
      // Keywords
      highlighted = highlighted.replace(
        /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default|async|await|try|catch|finally|throw|new|this|super|extends|static|public|private|protected)\b/g,
        '<span class="text-purple-600 dark:text-purple-400">$1</span>',
      )

      // React/JSX specific
      highlighted = highlighted.replace(
        /\b(useState|useEffect|useContext|useReducer|useCallback|useMemo|useRef|React|Component|Fragment)\b/g,
        '<span class="text-cyan-600 dark:text-cyan-400">$1</span>',
      )

      // Strings (handle both single and double quotes)
      highlighted = highlighted.replace(
        /(['"`])((?:(?!\1)[^\\]|\\.)*)(\1)/g,
        '<span class="text-green-600 dark:text-green-400">$1$2$3</span>',
      )

      // Numbers
      highlighted = highlighted.replace(
        /\b(\d+\.?\d*)\b/g,
        '<span class="text-orange-600 dark:text-orange-400">$1</span>',
      )

      // Comments (single line)
      highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span class="text-gray-500 dark:text-gray-400">$1</span>')

      // Comments (multi-line)
      highlighted = highlighted.replace(
        /(\/\*[\s\S]*?\*\/)/g,
        '<span class="text-gray-500 dark:text-gray-400">$1</span>',
      )

      // Method calls
      highlighted = highlighted.replace(
        /\.([a-zA-Z_$][a-zA-Z0-9_$]*)\(/g,
        '.<span class="text-blue-600 dark:text-blue-400">$1</span>(',
      )

      // Console methods
      highlighted = highlighted.replace(/\b(console)\./g, '<span class="text-red-600 dark:text-red-400">$1</span>.')

      // Boolean values
      highlighted = highlighted.replace(
        /\b(true|false|null|undefined)\b/g,
        '<span class="text-orange-600 dark:text-orange-400">$1</span>',
      )
    }

    return highlighted
  }

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
        <pre className="text-sm text-gray-100 dark:text-gray-200 font-mono leading-relaxed">
          <code
            dangerouslySetInnerHTML={{
              __html: highlightCode(content.replace(/</g, "&lt;").replace(/>/g, "&gt;"), language),
            }}
          />
        </pre>
      </div>
    </div>
  )
}
