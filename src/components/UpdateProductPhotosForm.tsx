'use client'

import { useForm } from 'react-hook-form'
import { deleteProductPhoto } from '../actions/delete-product-photo'
import { createProductPhoto } from '../actions/create-product-photo'

type UpdateProductPhotosFormProps = {
  productId: number
  photos: {
    id: number
    url: string
  }[]
}

type FormData = {
  url: string
}

export function UpdateProductPhotosForm(props: UpdateProductPhotosFormProps) {
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data.url)

    await createProductPhoto(props.productId, data.url)

    reset()
  })

  return (
    <div>
      <h3>Product ID: {props.productId}</h3>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <label>Url</label>
        <input {...register('url')} />
        <input type="submit" value="Add Photo" />
      </form>
      <div>
        {props.photos.map((photo) => (
          <div className="m-3" key={photo.id}>
            <img src={photo.url} />
            <button
              onClick={() => {
                console.log('Clicked Delete:', photo.id)
                deleteProductPhoto(photo.id)
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
