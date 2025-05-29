'use client'

import Link from 'next/link'
import Image from 'next/image'

const brands = [
  {
    name: 'CeraVe',
    image: '/marques/image1.jpg',
    slug: 'cerave',
    slogan: 'La science au service de votre peau.',
  },
  {
    name: 'The Ordinary',
    image: '/marques/image2.jpg',
    slug: 'the-ordinary',
    slogan: 'Des soins efficaces, sans fioritures.',
  },
  {
    name: 'Nuxe',
    image: '/marques/image3.jpg',
    slug: 'nuxe',
    slogan: 'L’alliance parfaite entre nature et luxe.',
  },
  {
    name: 'La Roche-Posay',
    image: '/marques/image4.jpg',
    slug: 'la-roche-posay',
    slogan: 'Recommandée par les dermatologues du monde entier.',
  },
]

export default function MarquesPage() {
  return (
    <div className="min-h-screen text-white px-4 py-8 bg-gradient-to-br from-black via-red-900 to-black">
      <h1 className="text-3xl sm:text-4xl font-light italic text-center mb-6 tracking-tight text-red-100 border-b border-red-600 inline-block pb-2">
  Nos Marques
</h1>



      {/* Texte publicitaire pour Bellashop */}
      <p className="text-center text-red-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
        Chez <strong>BellaShop</strong>, nous sélectionnons les meilleures marques de soins pour révéler la beauté naturelle de votre peau. Découvrez nos partenaires d’excellence !
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/marques/${brand.slug}`}
            className="bg-neutral-900 rounded-2xl shadow-lg p-4 flex flex-col items-center transition-all hover:scale-[1.02] hover:shadow-red-600 hover:shadow-md border border-transparent hover:border-red-600"
          >
            <div className="w-full h-40 bg-neutral-800 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
              <Image
                src={brand.image}
                alt={brand.name}
                width={300}
                height={300}
                className="object-cover h-full w-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">{brand.name}</h3>
            <p className="text-sm text-neutral-400 text-center mt-2">{brand.slogan}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
