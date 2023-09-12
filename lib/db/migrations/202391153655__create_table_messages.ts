import { sql, Kysely } from 'kysely'

export async function up(db: Kysely<unknown>): Promise<void> {
  await sql`
  CREATE TABLE messages (
    id integer primary key AUTOINCREMENT not null,
    content text not null
  );
  `.execute(db)
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await sql`
  DROP TABLE messages;
  `.execute(db)
}
