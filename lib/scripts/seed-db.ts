import { createDB } from '../../src/lib/db'
import { faker } from '@faker-js/faker'

async function seedDB() {
  console.log('Seeding database...')

  const db = createDB()
  await db.deleteFrom('productsReviews').execute()
  await db.deleteFrom('products').execute()

  const data = []
  for (let i = 0; i < 100; i++) {
    const pName = faker.commerce.product()
    const pDescription = faker.commerce.productDescription()
    const pPrice = faker.commerce.price()
    data.push({ name: pName, description: pDescription, price: Number(pPrice) })
  }
  const products = await db.insertInto('products').values(data).returning('id').execute()

  const reviews = []
  for (const product of products) {
    const nReviews = faker.number.int({ min: 1, max: 5 })
    for (let i = 0; i < nReviews; i++) {}
    reviews.push({
      productId: product.id,
      rating: faker.number.int({ min: 1, max: 5 }),
      content: faker.lorem.paragraphs({ min: 1, max: 5 }),
    })
  }
  await db.insertInto('productsReviews').values(reviews).execute()
  console.log('Done')
}

seedDB()
