import { UpdateProductForm } from '../../../components/UpdateProductForm'
import { UpdateProductPhotosForm } from '../../../components/UpdateProductPhotosForm'
import { createDB } from '../../../lib/db'

async function getProductDetail(id: number) {
  const db = createDB()

  const product = await db.selectFrom('products').selectAll().where('id', '=', id).executeTakeFirstOrThrow()

  return product
}

async function getProductPhotos(id: number) {
  const db = createDB()

  const photos = await db.selectFrom('productsPhotos').select(['id', 'url']).where('productId', '=', id).execute()

  return photos
}

type ProductEditPageProps = {
  params: {
    id: string
  }
}

export default async function ProductEditPage({ params }: ProductEditPageProps) {
  const productId = parseInt(params.id)

  const product = await getProductDetail(productId)
  const photos = await getProductPhotos(productId)

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <UpdateProductForm product={product} productId={productId} />
      <UpdateProductPhotosForm productId={productId} photos={photos} />
    </main>
  )
}
