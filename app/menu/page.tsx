"use client"

import { useEffect, useRef, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const menuCategories = [
  {
    id: "pizzas",
    name: "Pizzas",
    description: "Handcrafted pizzas with premium toppings",
    items: [
      { name: "Margherita", price: "₹12.99", description: "Fresh mozzarella, basil, tomato sauce" },
      { name: "Pepperoni", price: "₹14.99", description: "Classic pepperoni with extra cheese" },
      { name: "Vegetarian", price: "₹13.99", description: "Bell peppers, mushrooms, olives, onions" },
      { name: "BBQ Chicken", price: "₹15.99", description: "Grilled chicken, BBQ sauce, cheddar" },
      { name: "Rooster Special", price: "₹16.99", description: "Our signature blend of meats and veggies" },
      { name: "Four Cheese", price: "₹14.99", description: "Mozzarella, cheddar, parmesan, feta" },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    description: "Juicy burgers made with premium beef",
    items: [
      { name: "Classic Burger", price: "₹10.99", description: "Beef patty, lettuce, tomato, onion" },
      { name: "Cheese Burger", price: "₹11.99", description: "Double cheese, beef patty, special sauce" },
      { name: "Bacon Burger", price: "₹12.99", description: "Crispy bacon, cheddar, beef patty" },
      { name: "Mushroom Swiss", price: "₹12.99", description: "Sautéed mushrooms, Swiss cheese" },
      { name: "Rooster Deluxe", price: "₹13.99", description: "Double patty, all the toppings" },
      { name: "Spicy Burger", price: "₹11.99", description: "Jalapeños, pepper jack, spicy mayo" },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    description: "Fresh sandwiches with quality ingredients",
    items: [
      { name: "Chicken Sandwich", price: "₹9.99", description: "Grilled chicken, lettuce, tomato" },
      { name: "Turkey Club", price: "₹10.99", description: "Turkey, bacon, lettuce, tomato, mayo" },
      { name: "Veggie Delight", price: "₹8.99", description: "Hummus, veggies, sprouts on whole wheat" },
      { name: "Tuna Melt", price: "₹10.99", description: "Tuna salad, melted cheese, toasted bread" },
      { name: "Rooster Wrap", price: "₹11.99", description: "Grilled chicken, veggies, special sauce" },
      { name: "Philly Cheesesteak", price: "₹11.99", description: "Sliced beef, peppers, onions, cheese" },
    ],
  },
  {
    id: "maggi",
    name: "Maggi & Noodles",
    description: "Quick bites and noodle dishes",
    items: [
      { name: "Classic Maggi", price: "₹4.99", description: "Traditional Maggi noodles" },
      { name: "Spicy Maggi", price: "₹5.99", description: "Extra spice and chili flakes" },
      { name: "Chicken Maggi", price: "₹7.99", description: "Maggi with tender chicken pieces" },
      { name: "Vegetable Maggi", price: "₹6.99", description: "Mixed vegetables with Maggi" },
      { name: "Cheese Maggi", price: "₹6.99", description: "Creamy cheese Maggi" },
      { name: "Rooster Fusion", price: "₹8.99", description: "Maggi with chicken and veggies" },
    ],
  },
  {
    id: "ice-cream",
    name: "Ice Cream & Desserts",
    description: "Sweet treats and frozen delights",
    items: [
      { name: "Vanilla Scoop", price: "₹3.99", description: "Classic vanilla ice cream" },
      { name: "Chocolate Delight", price: "₹4.99", description: "Rich chocolate ice cream" },
      { name: "Strawberry Bliss", price: "₹4.99", description: "Fresh strawberry ice cream" },
      { name: "Rooster Sundae", price: "₹6.99", description: "Mixed ice cream with toppings" },
      { name: "Brownie Fudge", price: "₹5.99", description: "Chocolate brownie with fudge" },
      { name: "Mango Paradise", price: "₹4.99", description: "Fresh mango ice cream" },
    ],
  },
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("pizzas")
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elements = mainRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const currentCategory = menuCategories.find((cat) => cat.id === selectedCategory)

  return (
    <main ref={mainRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Menu Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20 text-center">
        <h1 className="text-5xl font-bold text-secondary mb-4">Our Complete Menu</h1>
        <p className="text-xl text-secondary/90">Explore our delicious selection of food items</p>
      </section>

      {/* Category Navigation */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-secondary text-primary shadow-lg scale-105"
                    : "bg-card text-foreground border-2 border-secondary hover:border-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          {currentCategory && (
            <div data-animate>
              <h2 className="text-4xl font-bold text-primary mb-2">{currentCategory.name}</h2>
              <p className="text-muted-foreground mb-8">{currentCategory.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategory.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card border-2 border-secondary/20 rounded-lg p-6 hover:shadow-lg hover:border-secondary transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                      <span className="text-2xl font-bold text-green-600">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                    
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
