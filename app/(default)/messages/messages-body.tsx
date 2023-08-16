'use client'

import MessagesHeader from './messages-header'
import MessagesChat from './messages-chat'
import MessagesFooter from './messages-footer'

export default function MessagesBody() {
  return (
    <div className="grow flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out">
      <MessagesHeader />
      <MessagesChat />
      <MessagesFooter />
    </div>
  )
}