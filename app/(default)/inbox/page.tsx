export const metadata = {
  title: 'Inbox - Mosaic',
  description: 'Page description',
}

import { FlyoutProvider } from '@/app/flyout-context'
import InboxSidebar from './inbox-sidebar'
import InboxBody from './inbox-body'
import mailUser01 from '@/public/images/user-40-11.jpg'
import mailUser02 from '@/public/images/user-avatar-80.png'

function InboxContent() {

  // Some dummy mail data
  const mails = [
    {
      id: 0,
      open: false,
      image: mailUser01,
      name: 'Dominik Lamakani',
      email: 'dominiklama@acme.com',
      date: 'Sep 3, 3:18 PM',
      recipients: ['me', 'Carolyn'],
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…',
      message: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Consectetur adipiscing elit, sed do eiusmod aliqua? Check below:</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Cheers,</p><p class="font-medium">Dominik Lamakani</p>',
    },
    {
      id: 1,
      open: false,
      image: mailUser02,
      name: 'Acme Inc.',
      email: 'acmeinc@acme.com',
      date: 'Sep 3, 3:18 PM',
      recipients: ['me', 'Dominik'],
      excerpt: 'Dominik, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
      message: '<p>Dominik, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Consectetur adipiscing elit, sed do eiusmod aliqua? Check below:</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Cheers,</p><p class="font-medium">Acme Inc.</p>',
    },
    {
      id: 2,
      open: true,
      image: mailUser01,
      name: 'Dominik Lamakani',
      email: 'dominiklama@acme.com',
      date: 'Sep 4, 3:37 AM',
      recipients: ['me', 'Carolyn'],
      excerpt: 'Hey Acme 👋 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
      message: `<p>Hey Acme 👋</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <span class="underline">nostrud exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Consectetur adipiscing elit, sed do eiusmod <a class="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">tempor magna</a> aliqua? Check below:</p><p><img src="./images/inbox-image.jpg" width="320" height="190" alt="Inbox image" /></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Cheers,</p><p class="font-medium">Dominik Lamakani</p>`,
    },
  ]

  return (
    <div className="relative flex h-full">
      <InboxSidebar />
      <InboxBody mails={mails} />
    </div>
  )
}

export default function Inbox() {
  return (
    <FlyoutProvider>
      <InboxContent />
    </FlyoutProvider>
  )
}