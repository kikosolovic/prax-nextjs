'use server'

import { redirect } from 'next/navigation'
import { createDB } from '../lib/db'
import { revalidatePath } from 'next/cache'

type UpdateProductParams = {
  name: string
  description: string
  price: number
}

export async function updateProduct(product: UpdateProductParams, productId: number) {
  const db = createDB()

  await db
    .updateTable('products')
    .set({
      name: product.name,
      description: product.description,
      price: product.price,
    })
    .where('id', '=', productId)
    .execute()

  revalidatePath('/')
  revalidatePath(`/product/${productId}`)
  redirect(`/product/${productId}`)
}
