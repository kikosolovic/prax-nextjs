import { createDB } from '../lib/db'
import Link from 'next/link'
import Image from 'next/image'
import { AddToCartButton } from './AddToCartButton'

async function getProducts(page: number) {
  const db = createDB()

  const pageSize = 9

  const products = await db
    .selectFrom('products')
    .leftJoin('productsPhotos', 'products.id', 'productsPhotos.productId')
    .select(['products.id', 'products.name', 'products.price', 'productsPhotos.url'])
    .groupBy(['products.id'])
    .limit(pageSize)
    .offset((page - 1) * pageSize)
    .execute()

  return products
}

type ProductProps = {
  id: number
  name: string
  url: string | null
}

function Product(props: ProductProps) {
  // const { name, description } = props
  const name = props.name
  const url = props.url

  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="text-lg font-semibold">{name}</div>
      <div>
        {url != null ? (
          <picture>
            <img src={url} alt="Photo" />
          </picture>
        ) : (
          <Image src="/no-photo.jpg" alt="No Photo" height={640} width={480} />
        )}
      </div>
      <Link href={`/product/${props.id}`}>Details</Link>
      <br />
      <Link href={`/product-edit/${props.id}`}>Edit</Link>
      <AddToCartButton id={props.id} />
    </div>
  )
}

type ProductListProps = {
  page: number
}

export async function ProductList(props: ProductListProps) {
  const page = props.page
  console.log(page)

  const products = await getProducts(page)

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((p) => (
        <Product key={p.id} id={p.id} name={p.name} url={p.url} />
      ))}
    </div>
  )
}
