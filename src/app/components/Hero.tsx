'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const heroSlides = [
  { image: '/hero1.png', href: '/koreanskincare/nettoyants', alt: 'Nettoyants' },
  { image: '/hero2.jpg', href: '/koreanskincare/toners', alt: 'Toners' },
  { image: '/hero3.jpg', href: '/koreanskincare/serums', alt: 'Sérums' },
]

export default function Hero() {
  return (
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
                <svg
                  aria-hidden="true"
                  className="absolute bottom-4 left-4 w-20 h-20 opacity-30"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="30" stroke="#F87171" strokeWidth="4" />
                  <path d="M20 44L32 20L44 44H20Z" fill="#F87171" fillOpacity="0.5" />
                </svg>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
