'use client'

import { useState } from 'react'
import { navItems } from '@/app/data/NavItems'
import { ChevronDown, Menu, Search, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-neutral-900 text-white shadow z-50 relative">
        {/* Top bar */}
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo à gauche */}
          <div className="flex-1">
            <div className="text-2xl font-bold text-white">FabeLa</div>
          </div>

          {/* Login & Panier à droite */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <Link href="/login" className="text-sm font-semibold hover:text-red-500">
              Se connecter
            </Link>
            <Link href="/panier">
              <ShoppingCart className="w-5 h-5 hover:text-red-500" />
            </Link>
          </div>
        </div>

        {/* Middle bar */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Search bar */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              className="bg-neutral-800 border border-neutral-700 text-white rounded-full px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <Search className="text-red-500 w-4 h-4" />
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li
                key={item.title}
                className="relative group"
                onMouseEnter={() => setOpenMenu(item.title)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="flex items-center gap-1 font-semibold text-sm uppercase hover:text-red-500">
                  {item.title} <ChevronDown className="w-4 h-4" />
                </button>
                {/* Dropdown */}
                <div
                  className={clsx(
                    'absolute left-0 top-full bg-neutral-800 shadow-lg rounded p-4 w-max flex gap-8 transition-all z-50',
                    {
                      'opacity-100 pointer-events-auto': openMenu === item.title,
                      'opacity-0 pointer-events-none': openMenu !== item.title,
                    }
                  )}
                >
                  {item.items.map((sub) => (
                    <div key={sub.title}>
                      <h4 className="text-sm font-bold text-white mb-2 underline decoration-red-500">{sub.title}</h4>
                      <ul className="space-y-1">
                        {sub.links.map((link) => (
                          <li key={link}>
                            <Link
                              href="#"
                              className="text-sm text-gray-300 hover:text-red-500"
                            >
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* Burger icon */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Scrolling message - fond blanc, texte noir */}
        <div className="bg-white text-black text-sm py-2 overflow-hidden whitespace-nowrap relative">
          <div className="animate-marquee px-4">
            Livraison offerte dès 49€ d'achat 💖 | Nouveautés chaque semaine ✨ | Paiement en 3 fois disponible 🛒
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-neutral-900 z-50 flex flex-col p-6 space-y-6 overflow-y-auto">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">FabeLa</div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {navItems.map((item) => (
              <div key={item.title}>
                <p className="text-lg font-semibold uppercase text-red-500 mb-2">{item.title}</p>
                {item.items.map((sub) => (
                  <div key={sub.title} className="mb-4">
                    <h4 className="text-white text-sm underline decoration-red-500">{sub.title}</h4>
                    <ul className="pl-4 mt-1 space-y-1">
                      {sub.links.map((link) => (
                        <li key={link}>
                          <Link href="#" className="text-gray-300 hover:text-red-500 text-sm">
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Scrolling animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: inline-block;
          white-space: nowrap;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  )
}
