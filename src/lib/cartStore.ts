// src/lib/cartStore.ts
import { create } from 'zustand'

type Product = {
  name: string
  price: string
  image: string
  quantity?: number
}

type CartState = {
  items: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (name: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.name === product.name)
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.name === product.name ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item
          ),
        }
      }
      return {
        items: [...state.items, { ...product, quantity: 1 }],
      }
    }),
  removeFromCart: (name) =>
    set((state) => ({
      items: state.items.filter((item) => item.name !== name),
    })),
  clearCart: () => set({ items: [] }),
}))
