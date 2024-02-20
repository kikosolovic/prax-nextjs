'use client'

import { createContext } from 'react'

export type ShoppingCart = {
  items: number[]
  addItem: (itemId: number) => void
}

export const ShoppingCartContext = createContext<ShoppingCart>({
  items: [],
  addItem: (itemId: number) => {},
})
