import { generateText } from "ai"

const foodItems = [
  { name: "Margherita Pizza", emoji: "🍕", description: "Fresh and classic" },
  { name: "Spicy Burger", emoji: "🍔", description: "Bold and delicious" },
  { name: "Grilled Sandwich", emoji: "🥪", description: "Crispy and fresh" },
  { name: "Maggi Noodles", emoji: "🍜", description: "Quick and tasty" },
  { name: "Vanilla Ice Cream", emoji: "🍦", description: "Cool and creamy" },
  { name: "Fresh Lemonade", emoji: "🍋", description: "Refreshing drink" },
]

export async function POST(request: Request) {
  try {
    const { mood } = await request.json()

    if (!mood) {
      return Response.json({ error: "Mood is required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt: `You are a friendly restaurant AI assistant. Based on the customer's mood/preference: "${mood}", suggest ONE item from this menu: ${foodItems.map((item) => `${item.name} (${item.description})`).join(", ")}. 
      
      Respond in JSON format with exactly this structure (no markdown, just raw JSON):
      {
        "name": "the exact menu item name",
        "reason": "a short, friendly reason why this is perfect for their mood (max 15 words)"
      }`,
    })

    // Parse the AI response
    const suggestion = JSON.parse(text)
    const menuItem = foodItems.find((item) => item.name === suggestion.name)

    if (!menuItem) {
      // Fallback if AI suggests something not on menu
      const randomItem = foodItems[Math.floor(Math.random() * foodItems.length)]
      return Response.json({
        ...randomItem,
        reason: suggestion.reason || "Perfect for your mood!",
      })
    }

    return Response.json({
      ...menuItem,
      reason: suggestion.reason,
    })
  } catch (error) {
    console.error("Error generating suggestion:", error)
    // Fallback to random suggestion
    const randomItem = foodItems[Math.floor(Math.random() * foodItems.length)]
    return Response.json({
      ...randomItem,
      reason: "One of our customer favorites!",
    })
  }
}
