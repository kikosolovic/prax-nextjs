'use client'
import { useContext } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'
import { AddOne } from './ui/AddOne'
import { RemoveOne } from './ui/RemoveOne'
import { RemoveAll } from './ui/removeAll'
export function ShoppingCartContent() {
  const { items } = useContext(ShoppingCartContext)

  return (
    <div>
      {' '}
      {items.map((i) => (
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <th>amount</th>
              <th>price</th>
              <th>a</th>
            </tr>

            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.count}</td>
              <td>-price</td>
              <td>
                <AddOne id={i.id} />
                <RemoveOne id={i.id} />
                <RemoveAll id={i.id} />
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  )
}
