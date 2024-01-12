'use client'

import { useForm } from 'react-hook-form'
import { updateProduct } from '../actions/update-product'

type FormData = {
  name: string
  description: string
  price: number
}

type Props = {
  product: {
    name: string
    description: string
    price: number
  }
  productId: number
}

export function UpdateProductForm(props: Props) {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: props.product,
  })

  const onSubmit = handleSubmit(async (data) => {
    console.log(data.name)
    console.log(data.description)
    console.log(data.price)

    await updateProduct(data, props.productId)
  })

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label>Name</label>
      <input {...register('name')} />
      <label>Description</label>
      <input {...register('description')} />
      <label>Price</label>
      <input {...register('price')} />
      <input type="submit" value="Update" />
    </form>
  )
}
