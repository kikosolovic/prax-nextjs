'use client'

import { useForm } from 'react-hook-form'
import { createProductReview } from '../actions/create-product-review'

type FormData = {
  rating: number
  content: string
  username: string
}

export function CreateProductReviewForm({ productId }: { productId: number }) {
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data.rating)
    console.log(data.content)
    console.log(data.username)

    await createProductReview(data, productId)

    reset()
  })

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label>Rating</label>
      <input {...register('rating')} />
      <label>Content</label>
      <input {...register('content')} />
      <label>Username</label>
      <input {...register('username')} />
      <input type="submit" value="Add Review" />
    </form>
  )
}
