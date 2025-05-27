'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useCartStore } from '@/lib/cartStore'

type Product = {
  name: string
  price: string
  image: string
}

type RawCategory = 'nettoyants' | 'toners' | 'serums' | 'masques' | 'cremes'
type CleanCategory = 'Nettoyants' | 'Toners' | 'Sérums' | 'Masques' | 'Crèmes'

const labelMapping: Record<RawCategory, CleanCategory> = {
  nettoyants: 'Nettoyants',
  toners: 'Toners',
  serums: 'Sérums',
  masques: 'Masques',
  cremes: 'Crèmes',
}

const products: Record<CleanCategory, Product[]> = {
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

export default function KoreanSkincareCategoryPage() {
  const params = useParams()
  const subcategory = (params?.subcategory as RawCategory)?.toLowerCase() as RawCategory
  const readableCategory = labelMapping[subcategory]
  const currentProducts = products[readableCategory] || []

  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <div className="bg-neutral-950 min-h-screen text-white px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8 uppercase">
        {readableCategory || 'Catégorie inconnue'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform hover:scale-[1.02]"
            >
              <div className="w-full h-48 bg-neutral-800 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover h-full w-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2 rounded-full transition-transform active:scale-95"
              >
                Ajouter au panier
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            Aucun produit trouvé pour cette catégorie.
          </p>
        )}
      </div>
    </div>
  )
}
