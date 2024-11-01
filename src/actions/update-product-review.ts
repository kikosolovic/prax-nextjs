'use server'

import { revalidatePath } from 'next/cache'
import { createDB } from '../lib/db'

type UpdateProductReviewInput = {
  rating: number
  content: string | null
}

export async function updateProductReview(input: UpdateProductReviewInput, productReviewId: number) {
  const db = createDB()

  const updatedReview = await db
    .updateTable('productsReviews')
    .set({
      rating: input.rating,
      content: input.content,
    })
    .where('id', '=', productReviewId)
    .returningAll()
    .executeTakeFirstOrThrow()

  revalidatePath(`/product/${updatedReview.productId}`)
}
