'use client'

import { useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

type Props = {
  children: any
}

export function ShoppingCartProvider({ children }: Props) {
  const [items, setItems] = useState<{ id: number; count: number }[]>([])

  const addItem = (itemId: number) => {
    // console.log('Adding item id:', itemId)

    let itemExists = false
    for (const item of items) {
      if (item.id === itemId) {
        item.count += 1
        itemExists = true
        break
      }
    }

    if (itemExists !== true) {
      items.push({ id: itemId, count: 1 })
    }

    setItems([...items])
  }

  // const removeItem

  return <ShoppingCartContext.Provider value={{ items, addItem }}>{children}</ShoppingCartContext.Provider>
}
