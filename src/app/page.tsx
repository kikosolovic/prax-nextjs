import Link from 'next/link'
import { ProductList } from '../components/ProductList'
import { redirect } from 'next/navigation'

type HomePageProps = {
  searchParams: {
    page?: string
  }
}

function stringToNumber(page?: string | null): number {
  if (page == null) {
    return 1
  }

  return parseInt(page)
}

export default function Home(props: HomePageProps) {
  console.log(props)

  console.log(props.searchParams.page)

  let pageNum = stringToNumber(props.searchParams.page)

  if (isNaN(pageNum) || pageNum < 1) {
    redirect('/')
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Products List:</div>
      <ProductList page={pageNum} />
      {pageNum > 1 ? <Link href={`/?page=${pageNum - 1}`}>Previous</Link> : null}
      <Link href={`/?page=${pageNum + 1}`}>Next</Link>
    </main>
  )
}
