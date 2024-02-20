'use client'

import { useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

type Props = {
  children: any
}

export function ShoppingCartProvider({ children }: Props) {
  const [items, setItems] = useState<number[]>([])

  const addItem = (itemId: number) => {
    // console.log('Adding item id:', itemId)

    setItems([...items, itemId])
  }

  // const removeItem

  return (
    <ShoppingCartContext.Provider value={{ items, addItem }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
