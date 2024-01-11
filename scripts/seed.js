const { db } = require('@vercel/postgres')
const { customers } = require('../app/lib/place-holder.js')

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS contacts (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          message VARCHAR(255) NOT NULL,
          date VARCHAR(255) NOT NULL
        );
      `

    console.log(`Created "contacts" table`)

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
          INSERT INTO contacts (id, name, email, message, date)
          VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.message}, ${customer.date})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    )

    console.log(`Seeded ${insertedCustomers.length} contacts`)

    return {
      createTable,
      contacts: insertedCustomers,
    }
  } catch (error) {
    console.error('Error seeding customers:', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedCustomers(client)

  await client.end()
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
