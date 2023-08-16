export const metadata = {
  title: 'Forum - Mosaic',
  description: 'Page description',
}

import Image from 'next/image'
import ForumLeftContent from './forum-left-content'
import ForumEntries from './forum-entries'
import ForumRightContent from './forum-right-content'

export default function Forum() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-0 w-full max-w-[96rem] mx-auto">

      <div className="xl:flex">

        {/* Left + Middle content */}
        <div className="md:flex flex-1">

          {/* Left content */}
          <ForumLeftContent />

          {/* Middle content */}
          <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
            <div className="md:py-8">

              {/* Buttons group */}
              <div className="mb-4">
                <div className="w-full flex flex-wrap -space-x-px">
                  <button className="btn grow bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-indigo-500 rounded-none first:rounded-l last:rounded-r">Popular</button>
                  <button className="btn grow bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/20 text-slate-600 dark:text-slate-300 rounded-none first:rounded-l last:rounded-r">Newest</button>
                  <button className="btn grow bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/20 text-slate-600 dark:text-slate-300 rounded-none first:rounded-l last:rounded-r">Following</button>
                </div>
              </div>

              {/* Forum Entries */}
              <div className="space-y-2">
                <ForumEntries />
              </div>

              {/* Pagination */}
              <div className="mt-6 text-right">
                <nav className="inline-flex" role="navigation" aria-label="Navigation">
                  <ul className="flex justify-center">
                    <li className="ml-3 first:ml-0">
                      <span className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600">&lt;- Previous</span>
                    </li>
                    <li className="ml-3 first:ml-0">
                      <a className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500" href="#0">Next -&gt;</a>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>

        </div>

        {/* Right content */}
        <ForumRightContent />

      </div>

    </div>
  )
}
