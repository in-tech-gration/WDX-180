'use client'

import { useFlyoutContext } from '@/app/flyout-context'
import ChannelMenu from '@/components/channel-menu'
import DirectMessages from './direct-messages'
import Channels from './channels'

export default function MessagesSidebar() {
  const { flyoutOpen } = useFlyoutContext()

  return (
    <div
      id="messages-sidebar"
      className={`absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transition-transform duration-200 ease-in-out ${
        flyoutOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="sticky top-16 bg-white dark:bg-slate-900 overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-slate-200 dark:border-slate-700 md:w-[18rem] xl:w-[20rem] h-[calc(100dvh-64px)]">
        {/* #Marketing group */}
        <div>
          {/* Group header */}
          <div className="sticky top-0 z-10">
            <div className="flex items-center bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-5 h-16">
              <div className="w-full flex items-center justify-between">
                {/* Channel menu */}
                <ChannelMenu />
                {/* Edit button */}
                <button className="p-1.5 shrink-0 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm ml-2">
                  <svg className="w-4 h-4 fill-current text-slate-500" viewBox="0 0 16 16">
                    <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Group body */}
          <div className="px-5 py-4">
            {/* Search form */}
            <form className="relative">
              <label htmlFor="msg-search" className="sr-only">
                Search
              </label>
              <input id="msg-search" className="form-input w-full pl-9 bg-white dark:bg-slate-800" type="search" placeholder="Search…" />
              <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg
                  className="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 ml-3 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
            {/* Direct messages */}
            <DirectMessages />
            {/* Channels */}
            <Channels />
          </div>
        </div>
      </div>
    </div>
  )
}