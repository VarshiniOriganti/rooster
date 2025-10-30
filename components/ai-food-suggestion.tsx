"use client"

import type React from "react"

import { useState } from "react"
import { Sparkles, Loader2 } from "lucide-react"

const foodItems = [
  { name: "Margherita Pizza", emoji: "🍕", description: "Fresh and classic" },
  { name: "Spicy Burger", emoji: "🍔", description: "Bold and delicious" },
  { name: "Grilled Sandwich", emoji: "🥪", description: "Crispy and fresh" },
  { name: "Maggi Noodles", emoji: "🍜", description: "Quick and tasty" },
  { name: "Vanilla Ice Cream", emoji: "🍦", description: "Cool and creamy" },
  { name: "Fresh Lemonade", emoji: "🍋", description: "Refreshing drink" },
]

interface Suggestion {
  name: string
  emoji: string
  description: string
  reason: string
}

export default function AiFoodSuggestion() {
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [mood, setMood] = useState("")
  const [error, setError] = useState("")

  const getSuggestion = async () => {
    if (!mood.trim()) {
      setError("Please tell us how you're feeling!")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/food-suggestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood }),
      })

      if (!response.ok) {
        throw new Error("Failed to get suggestion")
      }

      const data = await response.json()
      setSuggestion(data)
      setMood("")
    } catch (err) {
      console.error("Error getting suggestion:", err)
      // Fallback to random suggestion if API fails
      const randomIndex = Math.floor(Math.random() * foodItems.length)
      const item = foodItems[randomIndex]
      setSuggestion({
        ...item,
        reason: "Based on our menu favorites",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      getSuggestion()
    }
  }

  return (
    <section id="ai-suggestion" className="py-20 bg-gradient-to-r from-primary to-primary/80" data-animate>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-secondary mb-4">What Should You Eat Today?</h2>
        <p className="text-white text-lg mb-12">
          Tell us how you're feeling, and our AI will suggest something delicious!
        </p>

        <div className="mb-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="text"
            value={mood}
            onChange={(e) => {
              setMood(e.target.value)
              setError("")
            }}
            onKeyPress={handleKeyPress}
            placeholder="e.g., hungry, tired, want something spicy..."
            className="px-6 py-3 rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary flex-1 sm:flex-none sm:w-80"
            disabled={isLoading}
          />
          <button
            onClick={getSuggestion}
            disabled={isLoading}
            className="px-8 py-3 bg-secondary text-primary font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 whitespace-nowrap"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Thinking...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                Get Suggestion
              </>
            )}
          </button>
        </div>

        {error && <p className="text-red-300 mb-6 text-sm">{error}</p>}

        {suggestion && (
          <div className="bg-white rounded-2xl p-12 shadow-2xl animate-fade-in-up">
            <div className="text-8xl mb-4">{suggestion.emoji}</div>
            <h3 className="text-4xl font-bold text-primary mb-2">{suggestion.name}</h3>
            <p className="text-xl text-muted-foreground mb-2">{suggestion.description}</p>
            <p className="text-sm text-muted-foreground mb-6 italic">{suggestion.reason}</p>
            <button className="px-8 py-3 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 transition-colors">
              Order Now
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
