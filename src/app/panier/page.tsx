'use client'

import { useCartStore } from '@/lib/cartStore'


export default function PanierPage() {
  const { items, removeFromCart, clearCart } = useCartStore()

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('€', '').replace(',', '.'))
    return sum + price * (item.quantity ?? 1)
  }, 0)

  const message = encodeURIComponent(
    `Bonjour ! Je souhaite commander :\n\n${items
      .map((item) => `• ${item.name} x${item.quantity} (${item.price})`)
      .join('\n')}\n\nTotal : ${total.toFixed(2)} €`
  )

  const whatsappLink = `https://wa.me/33600000000?text=${message}` // ← Remplace par ton numéro

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Votre panier</h1>

      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.name} className="flex justify-between border-b pb-4">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>{item.price} x {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.name)}
                className="text-red-500 text-sm"
              >
                Supprimer
              </button>
            </div>
          ))}

          <div className="mt-6">
            <p className="text-lg font-semibold">Total : {total.toFixed(2)} €</p>
            
            <div className="flex gap-4 mt-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full"
              >
                Vider le panier
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold"
              >
                Payer via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
