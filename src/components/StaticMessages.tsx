import { createDB } from '../lib/db'
import { MessagesList } from './MessagesList'

async function getMessages() {
  const db = createDB()
  const messages = await db.selectFrom('messages').select('content').execute()
  return messages
}

export async function StaticMessages() {
  const messages = await getMessages()

  return <MessagesList messages={messages} />
}
