import { ShoppingCartItems } from '../../components/ShoppingCartItems'

export default async function ShoppingCartPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Shopping Cart</div>
      <ShoppingCartItems />
    </main>
  )
}
