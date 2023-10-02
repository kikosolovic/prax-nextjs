import { createDB } from '../../src/lib/db'

async function seedDB() {
  console.log('Seeding database...')

  const db = createDB()

  await db.deleteFrom('products').execute()

  await db
    .insertInto('products')
    .values([
      {
        name: 'iPhone 12',
        description: 'Apple IPHONE',
        price: 700,
      },
      {
        name: 'iPhone 11',
        description: 'Apple old IPHONE',
        price: 600,
      },
    ])
    .execute()

  console.log('Done')
}

seedDB()
