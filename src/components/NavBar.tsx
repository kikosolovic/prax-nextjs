import Link from 'next/link'
import { ShoppingCartIndicator } from './ShoppingCartIndicator'

export function NavBar() {
  return (
    <div className="flex flex-row space-x-4">
      <div>
        <Link href="/">NAVBAR</Link>
      </div>
      <div>
        <Link href="/cart">shopping cart</Link>
      </div>
      <ShoppingCartIndicator />
    </div>
  )
}
