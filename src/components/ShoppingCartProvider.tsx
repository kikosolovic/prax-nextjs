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
    for (let item of items) {
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
  const removeItem = (itemId: number) => {
    // console.log('Adding item id:', itemId)
    let itemExists = true
    for (let item in items) {
      if (items[item].id === itemId) {
        items[item].count -= 1
        if (items[item].count === 0) {
          console.log('a')
          items.splice(parseInt(item), 1)
        }
        break
      }
    }

    setItems([...items])
  }

  const removeAll = (itemId: number) => {
    setItems(
      items.filter((v) => {
        return v.id !== itemId
      })
    )
  }

  // const removeItem

  return (
    <ShoppingCartContext.Provider value={{ items, addItem, removeItem, removeAll }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
