import { CreateProductForm } from '../../components/CreateProductForm'

export default async function ProductDetailPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Create New Product</div>
      <CreateProductForm />
    </main>
  )
}
