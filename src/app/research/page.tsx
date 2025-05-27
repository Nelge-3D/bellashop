import { Metadata } from 'next'
import { Suspense } from 'react'
import SearchResults from '@/app/research/search-results'

export const metadata: Metadata = {
  title: 'Résultats de recherche - BellaShop',
  description: 'Découvrez les produits correspondant à votre recherche.',
}

export default function RecherchePage() {
  return (
    <main className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Résultats de recherche</h1>
      <Suspense fallback={<p>Chargement des résultats...</p>}>
        <SearchResults />
      </Suspense>
    </main>
  )
}
