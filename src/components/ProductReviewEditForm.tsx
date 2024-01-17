import { useForm } from 'react-hook-form'
import { updateProductReview } from '../actions/update-product-review'

type ProductReviewEditFormProps = {
  id: number
  rating: number
  content: string | null
  onSubmit: () => void
}

type FormData = {
  rating: number
  content: string | null
}

export function ProductReviewEditForm(props: ProductReviewEditFormProps) {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      rating: props.rating,
      content: props.content,
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    console.log(data.rating)
    console.log(data.content)

    await updateProductReview(data, props.id)

    props.onSubmit()
  })

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label>Rating</label>
      <input {...register('rating')} />
      <label>Content</label>
      <input {...register('content')} />
      <input type="submit" value="Update" />
    </form>
  )
}
