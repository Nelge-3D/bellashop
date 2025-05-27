'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type Product = {
  id: string
  name: string
  image: string
  price: number
}

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true)

      // Remplace ceci par un appel API réel ou une recherche locale
      const fakeProducts: Product[] = [
        { id: '1', name: 'Crème Hydratante', image: '/img/creme.jpg', price: 19.99 },
        { id: '2', name: 'Masque de Nuit', image: '/img/masque.jpg', price: 24.99 },
        { id: '3', name: 'Sérum Anti-âge', image: '/img/serum.jpg', price: 34.99 },
      ]

      const filtered = fakeProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )

      setResults(filtered)
      setLoading(false)
    }

    fetchResults()
  }, [query])

  if (loading) return <p>Recherche en cours...</p>
  if (!query) return <p>Veuillez entrer une recherche.</p>
  if (results.length === 0) return <p>Aucun produit trouvé pour “{query}”.</p>

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {results.map((product) => (
        <div key={product.id} className="bg-neutral-800 rounded-xl p-4 shadow hover:shadow-lg transition">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-2" />
          <h2 className="text-sm font-semibold">{product.name}</h2>
          <p className="text-red-500 font-bold">{product.price.toFixed(2)} €</p>
        </div>
      ))}
    </div>
  )
}
