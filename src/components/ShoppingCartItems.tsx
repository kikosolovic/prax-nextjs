'use client'

import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'
import { getProductsDetails } from '../actions/get-products-details'

export function ShoppingCartItems() {
  const [cart, setCart] = useState<{ id: number; count: number; name: string; price: number }[] | null>(null)
  const { items, addItem, removeItem, removeAllItems } = useContext(ShoppingCartContext)

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
      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>Count</td>
            <td>Total</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.price}€</td>
              <td>{i.count}</td>
              <td>{i.count * i.price}€</td>
              <td>
                <button
                  className="btn btn-xs btn-ghost"
                  onClick={() => {
                    addItem(i.id)
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-xs btn-ghost"
                  onClick={() => {
                    removeItem(i.id)
                  }}
                >
                  -
                </button>
                <button
                  className="btn btn-xs btn-ghost"
                  onClick={() => {
                    removeAllItems(i.id)
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      Grand Total: {cart.reduce((acc, i) => acc + i.count * i.price, 0)}€
    </div>
  )
}
