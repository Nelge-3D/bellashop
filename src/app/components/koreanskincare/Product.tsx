'use client'

import { useState } from 'react'
import Image from 'next/image'

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
    <div className="relative min-h-screen bg-gradient-to-br from-[#2a0e0e] via-[#4a1414] to-[#0c0505] text-white px-4 py-8 overflow-hidden">
      {/* Background blurred red shapes */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-red-700 rounded-full opacity-30 filter blur-3xl animate-fadeInSlow"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-28 w-80 h-80 bg-red-800 rounded-full opacity-25 filter blur-2xl animate-fadeInSlow delay-200"></div>
      <div className="pointer-events-none absolute top-36 right-1/3 w-72 h-72 bg-red-600 rounded-full opacity-20 filter blur-xl animate-fadeInSlow delay-400"></div>

      {/* CATEGORIES */}
      <div className="flex flex-wrap justify-center gap-5 mb-12 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-red-600 text-white border-red-600 shadow-lg'
                : 'bg-neutral-800 text-gray-300 border-neutral-700 hover:bg-red-800 hover:border-red-600 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUITS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {products[activeCategory].map((product: Product, index: number) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-transform hover:scale-[1.03] cursor-pointer"
          >
            <div className="w-full h-48 bg-neutral-800 rounded-xl mb-5 overflow-hidden flex items-center justify-center shadow-inner">
              <Image
                src={product.image}
                alt={product.name}
                className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
                width={400}
                height={300}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 tracking-wide">{product.name}</h3>
            <p className="text-gray-400 mb-6">{product.price}</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md transition-transform active:scale-95">
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      {/* Animations keyframes */}
      <style jsx>{`
        @keyframes fadeInSlow {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInSlow {
          animation: fadeInSlow 2.5s ease forwards;
        }
      `}</style>
    </div>
  )
}
