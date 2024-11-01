'use server'

import { createDB } from '../lib/db'
import { revalidatePath } from 'next/cache'

type ProductReviewInput = {
  rating: number
  content: string
  username: string
}

export async function createProductReview(productReview: ProductReviewInput, productId: number) {
  console.log(productReview)
  console.log(productId)

  const db = createDB()
  const newProduct = await db
    .insertInto('productsReviews')
    .values({
      productId: productId,
      rating: productReview.rating,
      content: productReview.content,
      username: productReview.username,
    })
    .returningAll()
    .executeTakeFirstOrThrow()

  revalidatePath(`/product/${newProduct.productId}`)
}
