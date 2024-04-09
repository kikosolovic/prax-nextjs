import { ShoppingCartContent } from '../../components/ShoppingCartContent'

export default async function CartContent() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <p>cart</p>
        <ShoppingCartContent />
      </div>
    </main>
  )
}
