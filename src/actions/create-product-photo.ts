'use server'

import { revalidatePath } from 'next/cache'
import { createDB } from '../lib/db'

export async function createProductPhoto(productId: number, url: string) {
  const db = createDB()

  await db
    .insertInto('productsPhotos')
    .values({
      productId,
      url,
    })
    .execute()

  revalidatePath('/')
  revalidatePath(`/product/${productId}`)
  revalidatePath(`/product-edit/${productId}`)
}
