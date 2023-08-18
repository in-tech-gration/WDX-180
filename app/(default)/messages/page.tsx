export const metadata = {
  title: 'Messages - Mosaic',
  description: 'Page description',
}

import { FlyoutProvider } from '@/app/flyout-context'
import MessagesSidebar from './messages-sidebar'
import MessagesBody from './messages-body'

function MessagesContent() {
  return (
    <div className="relative flex h-full">
      <MessagesSidebar />
      <MessagesBody />
    </div>
  )
}

export default function Messages() {
  return (
    <FlyoutProvider initialState={true}>
      <MessagesContent />
    </FlyoutProvider>
  )
}