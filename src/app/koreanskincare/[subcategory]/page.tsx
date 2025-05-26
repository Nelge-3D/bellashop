'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'

const products: Record<string, { name: string; price: string; image: string }[]> = {
  nettoyants: [
    { name: 'Clean It Zero', price: '17.90€', image: '/cleanser1.jpg' },
    { name: 'Foam Cleanser', price: '14.50€', image: '/cleanser2.jpg' },
  ],
  toners: [
    { name: 'Hydrating Toner', price: '15.00€', image: '/toner1.jpg' },
    { name: 'Mild Exfoliating Toner', price: '18.00€', image: '/toner2.jpg' },
  ],
  serums: [
    { name: 'Snail Repair Serum', price: '21.90€', image: '/serum1.jpg' },
    { name: 'Vitamin C Serum', price: '23.50€', image: '/serum2.jpg' },
  ],
  masques: [
    { name: 'Sheet Mask Pack', price: '12.00€', image: '/mask1.jpg' },
    { name: 'Clay Mask', price: '16.50€', image: '/mask2.jpg' },
  ],
  cremes: [
    { name: 'Water Cream', price: '19.90€', image: '/cream1.jpg' },
    { name: 'Barrier Moisturizer', price: '22.00€', image: '/cream2.jpg' },
  ],
}

const labelMapping: Record<string, string> = {
  nettoyants: 'Nettoyants',
  toners: 'Toners',
  serums: 'Sérums',
  masques: 'Masques',
  cremes: 'Crèmes',
}

export default function KoreanSkincareCategoryPage() {
  const params = useParams()
  const subcategory = params?.subcategory as string
  const currentProducts = products[subcategory?.toLowerCase()] || []

  return (
    <div className="bg-neutral-950 min-h-screen text-white px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8 uppercase">
        {labelMapping[subcategory?.toLowerCase()] || 'Catégorie inconnue'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-2xl shadow-lg p-4 flex flex-col items-center"
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
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2 rounded-full">
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
