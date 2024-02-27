import Link from 'next/link'
import { ShoppingCartIndicator } from './ShoppingCartIndicator'

export function NavBar() {
  return (
    <div className="flex flex-row space-x-4">
      <div>
        <Link href="/">HOME</Link>
      </div>
      <div>
        <Link href="/shopping-cart">Shopping Cart</Link>
      </div>
      <ShoppingCartIndicator />
    </div>
  )
}
