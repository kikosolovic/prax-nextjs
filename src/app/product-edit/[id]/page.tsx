import { UpdateProductForm } from '../../../components/UpdateProductForm'
import { createDB } from '../../../lib/db'

async function getProductDetail(id: number) {
  const db = createDB()

  const product = await db.selectFrom('products').selectAll().where('id', '=', id).executeTakeFirstOrThrow()

  return product
}

type ProductEditPageProps = {
  params: {
    id: string
  }
}

export default async function ProductEditPage({ params }: ProductEditPageProps) {
  const productId = parseInt(params.id)

  const product = await getProductDetail(productId)

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Product Edit: {JSON.stringify(product)}</div>
      <UpdateProductForm product={product} productId={productId} />
    </main>
  )
}
