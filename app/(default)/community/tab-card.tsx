import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import EditMenu from '@/components/edit-menu'

interface User {
  id: number
  name: string
  image: StaticImageData
  link: string
  location: string
  content: string
}

export default function TabCard({ user }: { user: User}) {
  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="flex flex-col h-full">
        {/* Card top */}
        <div className="grow p-5">
          {/* Menu button */}
          <div className="relative">
            <div className="absolute top-0 right-0">
              <EditMenu align="right" />
            </div>
          </div>
          {/* Image + name */}
          <header>
            <div className="flex justify-center mb-2">
              <Link className="relative inline-flex items-start" href={user.link}>
                <div className="absolute top-0 right-0 -mr-2 bg-white dark:bg-slate-700 rounded-full shadow" aria-hidden="true">
                  <svg className="w-8 h-8 fill-current text-amber-500" viewBox="0 0 32 32">
                    <path d="M21 14.077a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 010 1.5 1.5 1.5 0 00-1.5 1.5.75.75 0 01-.75.75zM14 24.077a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                  </svg>
                </div>
                <Image className="rounded-full" src={user.image} width={64} height={64} alt={user.name} />
              </Link>
            </div>
            <div className="text-center">
              <Link className="inline-flex text-slate-800 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white" href={user.link}>
                <h2 className="text-xl leading-snug justify-center font-semibold">{user.name}</h2>
              </Link>
            </div>
            <div className="flex justify-center items-center"><span className="text-sm font-medium text-slate-400 -mt-0.5 mr-1">-&gt;</span> <span>{user.location}</span></div>
          </header>
          {/* Bio */}
          <div className="text-center mt-2">
            <div className="text-sm">{user.content}</div>
          </div>
        </div>
        {/* Card footer */}
        <div className="border-t border-slate-200 dark:border-slate-700">
          <Link className="block text-center text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-4" href="/messages">
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 fill-current shrink-0 mr-2" viewBox="0 0 16 16">
                <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
              </svg>
              <span>Send Message</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
