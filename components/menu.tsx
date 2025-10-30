"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: "₹12.99",
    description: "Fresh mozzarella, basil, and tomato sauce",
    image: "/margherita-pizza.png",
  },
  {
    id: 2,
    name: "Classic Burger",
    category: "Burger",
    price: "₹10.99",
    description: "Juicy beef patty with fresh lettuce and tomato",
    image: "/classic-burger.png",
  },
  {
    id: 3,
    name: "Grilled Sandwich",
    category: "Sandwich",
    price: "₹8.99",
    description: "Crispy bread with grilled vegetables and cheese",
    image: "/grilled-sandwich.png",
  },
  {
    id: 4,
    name: "Maggi Noodles",
    category: "Maggi",
    price: "₹5.99",
    description: "Quick, delicious, and perfectly seasoned",
    image: "/maggi-noodles.jpg",
  },
  {
    id: 5,
    name: "Vanilla Ice Cream",
    category: "Ice Cream",
    price: "₹4.99",
    description: "Creamy and smooth vanilla delight",
    image: "/vanilla-ice-cream.png",
  },
  {
    id: 6,
    name: "Fresh Lemonade",
    category: "Drinks",
    price: "₹3.99",
    description: "Refreshing homemade lemonade",
    image: "/fresh-lemonade.png",
  },
  {
    id: 7,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: "₹14.99",
    description: "Loaded with pepperoni and mozzarella",
    image: "/pepperoni-pizza.png",
  },
  {
    id: 8,
    name: "Spicy Chicken Burger",
    category: "Burger",
    price: "₹11.99",
    description: "Crispy chicken with spicy mayo",
    image: "/spicy-chicken-burger.png",
  },
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Pizza", "Burger", "Sandwich", "Maggi", "Ice Cream", "Drinks"]

  const filteredItems =
    selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="menu" className="py-20 bg-background" data-animate>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-primary mb-4">Our Menu</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Discover our delicious selection of fresh and tasty dishes
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-secondary shadow-lg"
                  : "bg-white text-primary border-2 border-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-secondary text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                  {item.price}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

                {/* <button className="w-full bg-primary text-secondary font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
