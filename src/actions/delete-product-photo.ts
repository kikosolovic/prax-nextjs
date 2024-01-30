'use server'

import { revalidatePath } from 'next/cache'
import { createDB } from '../lib/db'

export async function deleteProductPhoto(id: number) {
  console.log('Delete product photo:', id)

  const db = createDB()

  const deletedPhoto = await db
    .deleteFrom('productsPhotos')
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirstOrThrow()

  revalidatePath('/')
  revalidatePath(`/product/${deletedPhoto.productId}`)
  revalidatePath(`/product-edit/${deletedPhoto.productId}`)
}
