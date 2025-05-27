'use client'

import { useState, useEffect, useRef } from 'react'
import { navItems } from '@/app/data/NavItems'
import { ChevronDown, Menu, Search, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'
import { useCartStore } from '@/lib/cartStore'

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const items = useCartStore((state) => state.items)
  const itemCount = items.reduce((total, item) => total + (item.quantity ?? 1), 0)

  // Scroll direction state
  const [showNavbar, setShowNavbar] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowNavbar(lastScrollY.current > currentScrollY || currentScrollY < 10)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={clsx(
          "bg-neutral-900 text-white shadow z-50 fixed w-full top-0 left-0 transition-transform duration-300",
          { "-translate-y-full": !showNavbar, "translate-y-0": showNavbar }
        )}
      >
        {/* Top bar */}
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo à gauche */}
          <div className="flex-1">
            <Link href="/" className="text-2xl font-bold text-white hover:text-red-500">
              BellaShop
            </Link>
          </div>

          {/* Login & Panier */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <Link href="/login" className="text-sm font-semibold hover:text-red-500">
              Se connecter
            </Link>
            <Link href="/panier" className="relative">
              <ShoppingCart className="w-5 h-5 hover:text-red-500" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Middle bar */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Search bar */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un produit..."
              className="bg-neutral-800 border border-neutral-700 text-white rounded-full px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              onClick={() => {
                if (searchQuery.trim()) {
                  window.location.href = `/recherche?q=${encodeURIComponent(searchQuery)}`
                }
              }}
            >
              <Search className="text-red-500 w-4 h-4" />
            </button>
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
                <Link href={item.path} className="flex items-center gap-1 font-semibold text-sm uppercase hover:text-red-500">
                  {item.title} <ChevronDown className="w-4 h-4" />
                </Link>
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
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="text-sm text-gray-300 hover:text-red-500"
                            >
                              {link.label}
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

        {/* Scrolling message */}
        <div className="bg-white text-black text-sm py-2 overflow-hidden whitespace-nowrap relative">
          <div className="animate-marquee px-4">
            Livraison offerte dès 49€ d&apos;achat 💖 | Nouveautés chaque semaine ✨ | Paiement en 3 fois disponible 🛒
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "fixed top-0 left-0 w-1/2 h-full bg-neutral-900 z-50 flex flex-col p-6 space-y-6 overflow-y-auto transition-transform duration-300 ease-in-out",
            {
              "translate-x-0": isMobileMenuOpen,
              "-translate-x-full": !isMobileMenuOpen,
            }
          )}
        >
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
              BellaShop
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {navItems.map((item) => (
            <div key={item.title}>
              <Link href={item.path} className="text-lg font-semibold uppercase text-red-500 mb-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                {item.title}
              </Link>
              {item.items.map((sub) => (
                <div key={sub.title} className="mb-4">
                  <h4 className="text-white text-sm underline decoration-red-500">{sub.title}</h4>
                  <ul className="pl-4 mt-1 space-y-1">
                    {sub.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-gray-300 hover:text-red-500 text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </nav>

      {/* Marquee animation */}
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
