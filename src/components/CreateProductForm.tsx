'use client'

import { useForm } from 'react-hook-form'
import { createProduct } from '../actions/create-product'

type FormData = {
  name: string
  description: string
  price: number
}

export function CreateProductForm() {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data.name)
    console.log(data.description)
    console.log(data.price)

    await createProduct(data)
  })

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label>Name</label>
      <input {...register('name')} />
      <label>Description</label>
      <input {...register('description')} />
      <label>Price</label>
      <input {...register('price')} />
      <input type="submit" value="Create" />
    </form>
  )
}
