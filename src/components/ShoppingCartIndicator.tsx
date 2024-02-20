'use client'

import { useContext } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

export function ShoppingCartIndicator() {
  const { items } = useContext(ShoppingCartContext)

  return <div>Cart Items: {items.length}</div>
}
