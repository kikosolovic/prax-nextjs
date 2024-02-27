'use client'

import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'
import { getProductsDetails } from '../actions/get-products-details'

export function ShoppingCartItems() {
  const [cart, setCart] = useState<{ id: number; count: number; name: string }[] | null>(null)
  const { items } = useContext(ShoppingCartContext)

  useEffect(() => {
    const itemIds = items.map((i) => i.id)

    getProductsDetails(itemIds).then((productsDetails) => {
      setCart(
        productsDetails.map((pd) => {
          let count = 1

          for (const i of items) {
            if (i.id === pd.id) {
              count = i.count
              break
            }
          }

          return {
            ...pd,
            count,
          }
        })
      )
    })
  }, [items, setCart])

  if (cart == null) {
    return <div>Loading ...</div>
  }

  return (
    <div>
      <ul>
        {cart.map((i) => (
          <li key={i.id}>
            {i.id} - {i.name} - {i.count}
          </li>
        ))}
      </ul>
    </div>
  )
}
