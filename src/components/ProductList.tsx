import { createDB } from '../lib/db'
import Link from 'next/link'

async function getProducts() {
  const db = createDB()

  const products = await db.selectFrom('products').selectAll().execute()

  return products
}

type ProductProps = {
  id: number
  name: string
  description: string
}

// function Product({ name, description }: { name: string; description: string }) {
function Product(props: ProductProps) {
  // const { name, description } = props
  const name = props.name
  const description = props.description

  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="text-lg font-semibold">{name}</div>
      <div>{description}</div>
      <Link href={`/product/${props.id}`}>Details</Link>
    </div>
  )
}

export async function ProductList() {
  const products = await getProducts()

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((p) => (
        <Product key={p.id} id={p.id} name={p.name} description={p.description} />
      ))}
    </div>
  )
}
