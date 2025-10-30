"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  { id: 1, src: "/delicious-pizza.jpg", alt: "Pizza" },
  { id: 2, src: "/juicy-burger.jpg", alt: "Burger" },
  { id: 3, src: "/fresh-sandwich.jpg", alt: "Sandwich" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-yellow-50 to-green-50" data-animate>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent mb-4">Gallery</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Feast your eyes on our delicious creations</p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-gradient-to-tr from-yellow-400/30 via-transparent to-green-500/30">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-bold">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages.find((img) => img.id === selectedImage)?.src || "/placeholder.svg"}
              alt="Gallery"
              className="w-full h-auto rounded-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r from-yellow-400 to-green-500 text-white hover:opacity-90 transition-opacity"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
