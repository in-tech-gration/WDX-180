'use client'

import { useState } from 'react'
import { Mail } from './inbox-body'
import Image from 'next/image'

export default function MailItem({ mail }: { mail: Mail }) {
  const [open, setOpen] = useState<boolean>(mail.open)

  return (
    <div className="py-6">
      {/* Header */}
      <header className="flex items-start">
        {/* Avatar */}
        <Image className="rounded-full shrink-0 mr-3" src={mail.image} width={40} height={40} alt={mail.name} />
        {/* Meta */}
        <div className="grow">
          <div className="sm:flex items-start justify-between mb-0.5">
            {/* Message author */}
            <div className="xl:flex items-center mb-2 sm:mb-0">
              <button className="text-sm font-semibold text-slate-800 dark:text-slate-100 text-left truncate" onClick={() => setOpen(!open)}>{mail.name}</button>
              {open &&
                <>
                  <div className="text-sm text-slate-400 dark:text-slate-600 hidden xl:block mx-1">·</div>
                  <div className="text-xs dark:text-slate-500">{mail.email}</div>
                </>
              }
            </div>
            {/* Date */}
            <div className="text-xs font-medium text-slate-500 whitespace-nowrap mb-2 sm:mb-0">{mail.date}</div>
          </div>
          {/* To */}
          {open &&
            <div className="text-xs font-medium text-slate-500">To {mail.recipients.join(', ')}</div>
          }
          {/* Excerpt */}
          {!open &&
            <div className="text-sm">{mail.excerpt}</div>
          }
        </div>
      </header>
      {/* Body */}
      {open &&
        <div className="text-sm text-slate-800 dark:text-slate-100 mt-4 space-y-2" dangerouslySetInnerHTML={{ __html: mail.message }}></div>
      }
    </div>
  )
}