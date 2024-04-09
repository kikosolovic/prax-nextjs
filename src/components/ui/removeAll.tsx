'use client'

import { useContext } from 'react'
import { ShoppingCartContext } from '../ShoppingCartContext'

type Props = {
  id: number
}

export function RemoveAll(props: Props) {
  const { removeAll } = useContext(ShoppingCartContext)

  const onClick = () => {
    removeAll(props.id)
  }

  return (
    <button className="btn btn-outline btn-xs" onClick={onClick}>
      remove
    </button>
  )
}
