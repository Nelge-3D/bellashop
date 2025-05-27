'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Promo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative z-10 px-6 pt-20 pb-24 max-w-5xl mx-auto text-center bg-gradient-to-br from-[#7f1d1d] via-[#b91c1c] to-[#dc2626] rounded-3xl shadow-[0_0_60px_#dc262650]"
    >
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-2 bg-white rounded-full opacity-30 blur-md" />
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
        🎁 Promotion spéciale
      </h2>
      <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
        Profitez de <strong className="text-white font-bold">-20%</strong> sur toute la gamme{' '}
        <em>Sérums</em> jusqu&apos;à la fin du mois. Une peau éclatante vous attend !
      </p>
      <Link
        href="/koreanskincare/serums"
        className="inline-block px-10 py-4 bg-white text-red-700 font-bold text-lg rounded-full shadow-lg hover:bg-red-100 transition transform hover:scale-105 active:scale-95"
      >
        Découvrir les Sérums
      </Link>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl pointer-events-none" />
    </motion.section>
  )
}
