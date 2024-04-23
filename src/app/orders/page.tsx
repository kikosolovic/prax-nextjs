import { createDB } from '../../lib/db'

async function getOrders() {
  const db = createDB()

  const orders = await db.selectFrom('orders').selectAll().execute()

  return orders
}

export default async function Orders() {
  const orders = await getOrders()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Orders List:</div>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Total Count</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.totalCount}</td>
              <td>{order.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
