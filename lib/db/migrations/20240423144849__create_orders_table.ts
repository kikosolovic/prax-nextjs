import { sql, Kysely } from 'kysely'

export async function up(db: Kysely<unknown>): Promise<void> {
  await sql`
  CREATE TABLE orders (
    id integer primary key autoincrement not null,
    total_count integer not null,
    total_price real not null
  ) STRICT;
  `.execute(db)
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await sql`
  
  `.execute(db)
}
