'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const heroSlides = [
  { image: '/hero1.jpg', href: '/koreanskincare/nettoyants', alt: 'Nettoyants' },
  { image: '/hero2.jpg', href: '/koreanskincare/toners', alt: 'Toners' },
  { image: '/hero3.jpg', href: '/koreanskincare/serums', alt: 'Sérums' },
]

export default function HomePage() {
  // Exemple produits (à remplacer par tes données réelles)
  const products = {
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
  }

  // Nouveautés : 1er produit par catégorie
  const nouveautes = Object.entries(products).map(([category, items]) => ({
    category,
    product: items[0],
  }))

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Carousel Swiper */}
      <div className="max-w-full md:h-[24rem]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="h-64 md:h-96"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <Link href={slide.href} aria-label={slide.alt}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="object-cover w-full h-64 md:h-96 rounded-sm"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Nouveautés */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 border-b border-red-600 inline-block">
          Nouveautés
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {nouveautes.map(({ category, product }) => (
            <div key={category} className="bg-neutral-900 rounded-lg p-4 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <Link href={`/koreanskincare/${category.toLowerCase()}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-md mb-2 w-full h-48 object-cover"
                />
              </Link>
              <p className="text-gray-400">{product.name}</p>
              <p className="text-red-500 font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotion */}
      <section className="bg-red-600 text-white py-12 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Promotion spéciale</h2>
        <p className="text-xl max-w-xl mx-auto">
          Profitez de -20% sur toute la gamme Sérums jusqu'à la fin du mois !
        </p>
        <Link href="/koreanskincare/serums" className="inline-block mt-6 px-6 py-3 bg-white text-red-600 font-bold rounded-full hover:bg-red-100 transition">
          Découvrir les Sérums
        </Link>
      </section>
    </div>
  )
}
