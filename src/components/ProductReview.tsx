'use client'

import { useState } from 'react'
import { ProductReviewEditForm } from './ProductReviewEditForm'

type ProductReviewProps = {
  id: number
  rating: number
  content: string | null
  username: string
}

export function ProductReview(props: ProductReviewProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {props.username} - [{props.rating}] {props.content} ---{' '}
      <button
        onClick={() => {
          console.log('Clicked Edit:', props.id)
          setIsOpen(!isOpen)
        }}
      >
        {isOpen ? 'Cancel' : 'Edit'}
      </button>
      {isOpen ? (
        <ProductReviewEditForm
          id={props.id}
          rating={props.rating}
          content={props.content}
          onSubmit={() => {
            setIsOpen(false)
          }}
        />
      ) : null}
    </div>
  )
}
