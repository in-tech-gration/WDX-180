export const metadata = {
  title: 'Pay - Mosaic',
  description: 'Page description',
}

import Link from 'next/link'
import PayForm from './pay-form'
import Logo from '@/components/ui/logo'

export default function Pay() {
  return (
    <>
      <header className="bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 -mb-px">

            {/* Logo */}
            <Logo />

            <Link className="block rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" href="/ecommerce/cart">
              <span className="sr-only">Back</span>
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path className="fill-current" d="M15.95 14.536l4.242-4.243a1 1 0 111.415 1.414l-4.243 4.243 4.243 4.242a1 1 0 11-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 01-1.414-1.415l4.243-4.242-4.243-4.243a1 1 0 011.414-1.414l4.243 4.243z" />
              </svg>
            </Link>

          </div>
        </div>
      </header>

      <PayForm />
    </>
  )
}