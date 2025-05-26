'use client'

import Link from 'next/link'
import { ArrowLeft, Smile, XOctagon, Zap } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 flex flex-col items-center justify-center px-6 text-center text-white relative overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-700 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 filter blur-3xl animate-fadeInSlow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-600 rounded-full opacity-15 translate-x-1/2 translate-y-1/2 filter blur-2xl animate-fadeInSlow delay-200"></div>

      {/* Illustration & headline */}
      <div className="relative z-10 max-w-xl">
        <XOctagon className="mx-auto w-28 h-28 text-red-500 animate-pulse mb-6" />
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Oups, cette page a disparu !
        </h1>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed drop-shadow-md">
          Pas d’inquiétude, on vous remet sur le bon chemin. Parfois, même les meilleures boutiques font quelques erreurs...
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-4 bg-red-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-red-700 transition-transform hover:scale-105 active:scale-95"
          aria-label="Retour à la page d’accueil"
        >
          <ArrowLeft className="w-6 h-6" />
          Retour à la boutique
        </Link>
      </div>

      {/* Footer with animated icons */}
      <footer className="mt-24 flex items-center justify-center space-x-6 text-red-400 opacity-80 z-10">
        <Zap className="w-8 h-8 animate-spin-slow" />
        <Smile className="w-8 h-8 animate-bounce" />
        <span className="uppercase font-bold tracking-widest text-sm select-none">
          FabeLa - La beauté venue d’Asie ✨
        </span>
        <Smile className="w-8 h-8 animate-bounce delay-150" />
        <Zap className="w-8 h-8 animate-spin-slow delay-300" />
      </footer>

      {/* Animations keyframes */}
      <style jsx>{`
        @keyframes fadeInSlow {
          0% { opacity: 0; transform: translateY(20px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeInSlow {
          animation: fadeInSlow 2s ease forwards;
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow {
          animation: spinSlow 15s linear infinite;
        }
      `}</style>
    </main>
  )
}
