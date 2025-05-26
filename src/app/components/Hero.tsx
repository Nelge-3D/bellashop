'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const heroSlides = [
  { image: '/hero1.jpg', href: '/koreanskincare/nettoyants', alt: 'Nettoyants' },
  { image: '/hero2.jpg', href: '/koreanskincare/toners', alt: 'Toners' },
  { image: '/hero3.jpg', href: '/koreanskincare/serums', alt: 'Sérums' },
]

export default function HomePage() {
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

  const nouveautes = Object.entries(products).map(([category, items]) => ({
    category,
    product: items[0],
  }))

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#2a0e0e] via-[#4a1414] to-[#0c0505] text-white overflow-hidden">
      {/* Background blurred red shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-red-700 rounded-full opacity-30 filter blur-3xl animate-fadeInSlow"></div>
      <div className="pointer-events-none absolute -bottom-28 -right-24 w-80 h-80 bg-red-800 rounded-full opacity-25 filter blur-2xl animate-fadeInSlow delay-200"></div>
      <div className="pointer-events-none absolute top-40 right-1/2 w-72 h-72 bg-red-600 rounded-full opacity-20 filter blur-xl animate-fadeInSlow delay-400"></div>

      {/* Hero Section */}
      <section className="max-w-full md:h-[24rem] relative z-10 flex flex-col items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          className="h-64 md:h-96 w-full max-w-6xl rounded-md shadow-lg overflow-hidden"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <Link href={slide.href} aria-label={slide.alt}>
                <div className="relative w-full h-64 md:h-96 cursor-pointer">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="100vw"
                    priority
                  />
                  {/* Overlay stylized illustration */}
                  <svg
                    aria-hidden="true"
                    className="absolute bottom-4 left-4 w-20 h-20 opacity-30"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="32" cy="32" r="30" stroke="#F87171" strokeWidth="4" />
                    <path
                      d="M20 44L32 20L44 44H20Z"
                      fill="#F87171"
                      fillOpacity="0.5"
                    />
                  </svg>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Nouveautés */}
      <section className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <h2 className="text-3xl font-extrabold mb-8 border-b-4 border-red-500 inline-block tracking-wide drop-shadow-lg">
          Nouveautés
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {nouveautes.map(({ category, product }) => (
            <div
              key={category}
              className="bg-neutral-900 rounded-xl p-6 shadow-xl hover:shadow-red-600 transition-shadow cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3 tracking-wide">{category}</h3>
              <Link href={`/koreanskincare/${category.toLowerCase()}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="rounded-lg mb-3 w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </Link>
              <p className="text-gray-300 mb-1">{product.name}</p>
              <p className="text-red-500 font-bold text-lg">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotion */}
      <section className="bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white py-16 px-6 text-center relative z-10 rounded-t-lg shadow-2xl max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
          Promotion spéciale
        </h2>
        <p className="text-xl max-w-xl mx-auto mb-8 leading-relaxed drop-shadow-md">
          Profitez de -20% sur toute la gamme Sérums jusqu&apos;à la fin du mois !
        </p>
        <Link
          href="/koreanskincare/serums"
          className="inline-block px-8 py-4 bg-white text-red-700 font-bold rounded-full shadow-lg hover:bg-red-50 transition transform hover:scale-105 active:scale-95"
        >
          Découvrir les Sérums
        </Link>
      </section>

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
