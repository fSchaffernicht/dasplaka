import { Message as MessageType } from "@types"
import styles from "./Message.module.css"

interface MessageProps {
  message?: MessageType
}

export default function Message({ message }: MessageProps) {
  if (!message) return null

  const today = new Date()

  const inRange =
    today >= new Date(message.start) && today <= new Date(message.end)

  if (!inRange) return null

  return <div className={styles.message}>{message.message}</div>
}
