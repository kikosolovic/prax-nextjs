'use client'

import { createContext } from 'react'

export type ShoppingCart = {
  items: { id: number; count: number }[]
  addItem: (itemId: number) => void
  removeItem: (itemId: number) => void
  removeAllItems: (itemId: number) => void
  clear: () => void
}

export const ShoppingCartContext = createContext<ShoppingCart>({
  items: [],
  addItem: (itemId: number) => {
    throw new Error('Not implemented')
  },
  removeItem: (itemId: number) => {
    throw new Error('Not implemented')
  },
  removeAllItems: (itemId: number) => {
    throw new Error('Not implemented')
  },
  clear: () => {
    throw new Error('Not implemented')
  },
})
