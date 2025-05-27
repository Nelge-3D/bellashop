'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import Tilt from 'react-parallax-tilt'

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

export default function Nouveautes() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 relative z-10">
      <h2 className="text-3xl font-extrabold mb-8 border-b-4 border-red-500 inline-block tracking-wide drop-shadow-lg">
        Nouveautés
      </h2>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        freeMode
        grabCursor
        className="py-4"
      >
        {nouveautes.map(({ category, product }) => (
          <SwiperSlide key={category}>
            <Tilt
              glareEnable
              glareMaxOpacity={0.2}
              scale={1.03}
              transitionSpeed={1000}
              className="rounded-xl"
            >
              <div className="bg-neutral-900 rounded-xl p-6 shadow-xl transition duration-300 hover:shadow-[0_0_25px_#dc2626aa] cursor-pointer group">
                <h3 className="text-xl font-semibold mb-3 tracking-wide">{category}</h3>
                <Link href={`/koreanskincare/${category.toLowerCase()}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="rounded-lg mb-3 w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <p className="text-gray-300 mb-1">{product.name}</p>
                <p className="text-red-500 font-bold text-lg">{product.price}</p>
              </div>
            </Tilt>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
