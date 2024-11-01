'use server'

import { redirect } from 'next/navigation'
import { createDB } from '../lib/db'
import { revalidatePath } from 'next/cache'

type CreateOrderParams = {
  totalCount: number
  totalPrice: number
}

export async function createOrder(order: CreateOrderParams) {
  const db = createDB()

  const createdOrder = await db
    .insertInto('orders')
    .values({
      totalCount: order.totalCount,
      totalPrice: order.totalPrice,
    })
    .returningAll()
    .executeTakeFirstOrThrow()

  console.log(`New order ID: ${createdOrder.id}`)

  revalidatePath('/orders')
  redirect('/orders')
}
