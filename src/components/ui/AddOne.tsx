'use client'

import { useContext } from 'react'
import { ShoppingCartContext } from '../ShoppingCartContext'

type Props = {
  id: number
}

export function AddOne(props: Props) {
  const { addItem } = useContext(ShoppingCartContext)

  const onClick = () => {
    addItem(props.id)
  }

  return (
    <button className="btn btn-outline btn-xs" onClick={onClick}>
      +
    </button>
  )
}
