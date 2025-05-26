'use client'

import { useState } from 'react'

type Product = {
  name: string
  price: string
  image: string
}

type Category = 'Nettoyants' | 'Toners' | 'Sérums' | 'Masques' | 'Crèmes'

const categories: Category[] = ['Nettoyants', 'Toners', 'Sérums', 'Masques', 'Crèmes']

const products: Record<Category, Product[]> = {
  Nettoyants: [
    { name: 'Clean It Zero', price: '17.90€', image: '/cleanser1.jpg' },
    { name: 'Foam Cleanser', price: '14.50€', image: '/cleanser2.jpg' },
  ],
  Toners: [
    { name: 'Hydrating Toner', price: '15.00€', image: '/toner1.jpg' },
    { name: 'Mild Exfoliating Toner', price: '18.00€', image: '/toner2.jpg' },
  ],
  Sérums: [
    { name: 'Snail Repair Serum', price: '21.90€', image: '/serum1.jpg' },
    { name: 'Vitamin C Serum', price: '23.50€', image: '/serum2.jpg' },
  ],
  Masques: [
    { name: 'Sheet Mask Pack', price: '12.00€', image: '/mask1.jpg' },
    { name: 'Clay Mask', price: '16.50€', image: '/mask2.jpg' },
  ],
  Crèmes: [
    { name: 'Water Cream', price: '19.90€', image: '/cream1.jpg' },
    { name: 'Barrier Moisturizer', price: '22.00€', image: '/cream2.jpg' },
  ],
}

export default function KoreanSkincarePage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Nettoyants')

  return (
    <div className="bg-neutral-950 min-h-screen text-white px-4 py-8">
      {/* CATEGORIES */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
              activeCategory === cat
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-neutral-800 text-gray-300 border-neutral-700 hover:bg-red-800 hover:border-red-600 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUITS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products[activeCategory].map((product: Product, index: number) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-2xl shadow-lg p-4 flex flex-col items-center"
          >
            <div className="w-full h-48 bg-neutral-800 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover h-full w-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{product.price}</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2 rounded-full">
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
