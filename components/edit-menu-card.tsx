'use client'

import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

export default function EditMenuCard({
  align,
  className = '',
}: React.HTMLAttributes<HTMLDivElement> & {
  align?: 'left' | 'right'
  className?: string
}) {
  return (
    <Menu as="div" className={`relative inline-flex ${className}`}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`rounded-full ${open ? 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300' : 'bg-white dark:bg-slate-700 text-slate-400 hover:text-slate-500 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            <span className="sr-only">Menu</span>
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="2" />
              <circle cx="10" cy="16" r="2" />
              <circle cx="22" cy="16" r="2" />
            </svg>
          </Menu.Button>
          <Transition
            className={`origin-top-right z-10 absolute top-full min-w-[9rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
            enter="transition ease-out duration-200 transform"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items as="ul" className="focus:outline-none">
              <Menu.Item as="li">
                {({ active }) => (
                  <Link className={`font-medium text-sm flex py-1 px-3 ${active ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'}`} href="#0">
                    Option 1
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item as="li">
                {({ active }) => (
                  <Link className={`font-medium text-sm flex py-1 px-3 ${active ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'}`} href="#0">
                    Option 2
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item as="li">
                {({ active }) => (
                  <Link className={`font-medium text-sm flex py-1 px-3 ${active ? 'text-rose-600' : 'text-rose-500'}`} href="#0">
                    Remove
                  </Link>
                )}
              </Menu.Item>                            
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}