'use server'

import { createDB } from '../lib/db'

export async function getProductsDetails(ids: number[]) {
  const db = createDB()

  const products = await db
    .selectFrom('products')
    .leftJoin('productsPhotos', 'products.id', 'productsPhotos.productId')
    .select(['products.id', 'products.name', 'products.price', 'productsPhotos.url'])
    .groupBy(['products.id'])
    .where('products.id', 'in', ids)
    .execute()

  return products
}
