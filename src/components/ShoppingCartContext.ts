'use client'

import { createContext } from 'react'

export type ShoppingCart = {
  items: { id: number; count: number }[]
  addItem: (id: number, count: number) => void
  removeItem: (id: number, count: number) => void
  removeAll: (id: number, count: number) => void
}

export const ShoppingCartContext = createContext<ShoppingCart>({
  items: [],
  addItem: (itemId: number) => {},
  removeItem: (itemId: number) => {},
  removeAll: (itemId: number) => {},
})
