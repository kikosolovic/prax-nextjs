'use client'

import { useContext } from 'react'
import { ShoppingCartContext } from '../ShoppingCartContext'

type Props = {
  id: number
}

export function RemoveOne(props: Props) {
  const { removeItem } = useContext(ShoppingCartContext)

  const onClick = () => {
    removeItem(props.id)
  }

  return (
    <button className="btn btn-outline btn-xs" onClick={onClick}>
      -
    </button>
  )
}
