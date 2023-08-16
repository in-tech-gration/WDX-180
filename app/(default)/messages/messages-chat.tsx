'use client'

import { useEffect, useRef } from 'react'
import { useFlyoutContext } from '@/app/flyout-context'
import Image from 'next/image'
import User01 from '@/public/images/user-40-11.jpg'
import User02 from '@/public/images/user-40-12.jpg'
import ChatImage from '@/public/images/chat-image.jpg'

export default function MessagesChat() {

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { flyoutOpen } = useFlyoutContext()

  useEffect(() => {
    !flyoutOpen && messagesEndRef.current?.scrollIntoView()
  }, [flyoutOpen])

  return (
    <div className="grow px-4 sm:px-6 md:px-5 py-6">
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <Image className="rounded-full mr-4" src={User01} width={40} height={40} alt="User 01" />
        <div>
          <div className="text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-lg rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-md mb-1">
            Can anyone help? I have a question about Acme Professional
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">2:40 PM</div>
          </div>
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <Image className="rounded-full mr-4" src={User02} width={40} height={40} alt="User 02" />
        <div>
          <div className="text-sm bg-indigo-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
            Hey Dominik Lamakani 👋<br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 🙌
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">2:40 PM</div>
            <svg className="w-5 h-3 shrink-0 fill-current text-emerald-500" viewBox="0 0 20 12">
              <path d="M10.402 6.988l1.586 1.586L18.28 2.28a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0L8.988 8.402l-2.293 2.293a1 1 0 01-1.414 0l-3-3A1 1 0 013.695 6.28l2.293 2.293L12.28 2.28a1 1 0 011.414 1.414l-3.293 3.293z" />
            </svg>
          </div>
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <Image className="rounded-full mr-4" src={User01} width={40} height={40} alt="User 01" />
        <div>
          <div className="flex items-center">
            <Image className="rounded-lg shadow-md mb-1" src={ChatImage} width={240} height={180} alt="Chat" />
            <button className="p-1.5 rounded-full border border-slate-200 dark:border-slate-700 ml-4 hover:bg-white dark:hover:bg-slate-800 transition duration-150">
              <span className="sr-only">Download</span>
              <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                <path d="M15 15H1a1 1 0 01-1-1V2a1 1 0 011-1h4v2H2v10h12V3h-3V1h4a1 1 0 011 1v12a1 1 0 01-1 1zM9 7h3l-4 4-4-4h3V1h2v6z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">2:48 PM</div>
          </div>
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <Image className="rounded-full mr-4" src={User01} width={40} height={40} alt="User 01" />
        <div>
          <div className="text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-lg rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-md mb-1">
            What do you think? Duis aute irure dolor in reprehenderit 🔥
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">2:48 PM</div>
          </div>
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <Image className="rounded-full mr-4" src={User02} width={40} height={40} alt="User 02" />
        <div>
          <div className="text-sm bg-indigo-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
            Sed euismod nisi porta lorem mollis. Tellus elementum sagittis vitae et leo duis. Viverra justo nec ultrices dui.<br />
            Sed lectus vestibulum mattis ullamcorper velit sed. Ut sem nulla pharetra diam sit amet 🎁
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">2:55 PM</div>
            <svg className="w-3 h-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
              <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
            </svg>
          </div>
        </div>
      </div>
      {/* Date separator */}
      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center text-xs text-slate-600 font-medium px-2.5 py-1 bg-white border border-slate-200 rounded-full my-5">
          Tuesday, 20 January
          </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <Image className="rounded-full mr-4" src={User02} width={40} height={40} alt="User 02" />
        <div>
          <div className="text-sm bg-indigo-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
            Can you join <a className="font-medium" href="#0">@dominik</a>? <a className="underline" href="#0">https://meet.google.com/haz-r3gt-idj</a>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">10:15 AM</div>
            <svg className="w-3 h-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
              <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
            </svg>
          </div>
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <Image className="rounded-full mr-4" src={User01} width={40} height={40} alt="User 01" />
        <div>
          <div className="text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-lg rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-md mb-1">
            <svg className="fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 15 3" width="15" height="3">
              <circle cx="1.5" cy="1.5" r="1.5">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
              </circle>
              <circle cx="7.5" cy="1.5" r="1.5">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
              </circle>
              <circle cx="13.5" cy="1.5" r="1.5">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
              </circle>
            </svg>
          </div>
        </div>
      </div>
      <div ref={messagesEndRef} aria-hidden="true" />
    </div>
  )
}