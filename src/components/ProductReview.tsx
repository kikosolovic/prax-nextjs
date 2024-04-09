'use client'

import { useState } from 'react'
import { ProductReviewEditForm } from './ProductReviewEditForm'
import { MyButton } from './ui/MyButton'

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
      <MyButton
        onClick={() => {
          console.log('Clicked Edit:', props.id)
          setIsOpen(!isOpen)
        }}
      >
        {isOpen ? 'Cancel' : 'Edit'}
      </MyButton>
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
