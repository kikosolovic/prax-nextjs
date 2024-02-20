'use client'

import { useForm } from 'react-hook-form'
import { createProduct } from '../actions/create-product'
import { FormSubmitButton } from './ui/FormSubmitButton'
import { FormInput } from './ui/FormInput'

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
      <FormInput inputProps={register('name')} />
      <label>Description</label>
      <FormInput inputProps={register('description')} />
      <label>Price</label>
      <FormInput inputProps={register('price')} />
      <FormSubmitButton value="Create" />
    </form>
  )
}
