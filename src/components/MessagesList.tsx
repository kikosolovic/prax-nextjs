export function MessagesList({ messages }: { messages: { content: string }[] }) {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message.content}</li>
      ))}
    </ul>
  )
}
