export const metadata = {
  title: 'Roadmap - Mosaic',
  description: 'Page description',
}

import Image from 'next/image'
import User01 from '@/public/images/user-28-01.jpg'
import User02 from '@/public/images/user-28-02.jpg'
import User03 from '@/public/images/user-28-03.jpg'
import User05 from '@/public/images/user-28-05.jpg'
import User06 from '@/public/images/user-28-06.jpg'
import User08 from '@/public/images/user-28-08.jpg'
import User09 from '@/public/images/user-28-09.jpg'

export default function Roadmap() {
  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

        {/* Page header */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Roadmap ✨</h1>
          </div>

          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

            {/* Add board button */}
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
              <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="ml-2">Add Event</span>
            </button>

          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-3xl m-auto mt-8">

            {/* Posts */}
            <div className="xl:-translate-x-16">

              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <h2 className="text-xl leading-snug font-bold text-slate-800 dark:text-slate-100 xl:leading-7 mb-4 xl:mb-0">2021 Q1</h2>
                  </div>
                  <div className="grow pb-6 border-b border-slate-200 dark:border-slate-700">
                    <header>
                      <div className="flex flex-nowrap items-center space-x-2 mb-6">
                        {/* Avatars */}
                        <div className="flex shrink-0 -space-x-3 -ml-px">
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User05} width={28} height={28} alt="User 05" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User08} width={28} height={28} alt="User 08" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User09} width={28} height={28} alt="User 09" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User06} width={28} height={28} alt="User 06" />
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">Completed</div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Product V1 - Early Access</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Web3 Compatibility</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Proof-of-Funds Compliance Key</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Activity Feed Integration</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <h2 className="text-xl leading-snug font-bold text-slate-800 dark:text-slate-100 xl:leading-7 mb-4 xl:mb-0">2021 Q2</h2>
                  </div>
                  <div className="grow pb-6 border-b border-slate-200 dark:border-slate-700">
                    <header>
                      <div className="flex flex-nowrap items-center space-x-2 mb-6">
                        {/* Avatars */}
                        <div className="flex shrink-0 -space-x-3 -ml-px">
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User03} width={28} height={28} alt="User 03" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User05} width={28} height={28} alt="User 05" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User01} width={28} height={28} alt="User 01" />
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">Working on</div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Product V1 - Early Access</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Web3 Compatibility</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-indigo-500" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 20 20">
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Proof-of-Funds Compliance Key</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 rounded-full bg-white dark:bg-slate-900" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Activity Feed Integration</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <h2 className="text-xl leading-snug font-bold text-slate-800 dark:text-slate-100 xl:leading-7 mb-4 xl:mb-0">2021 Q3</h2>
                  </div>
                  <div className="grow pb-6 border-b border-slate-200 dark:border-slate-700">
                    <header>
                      <div className="flex flex-nowrap items-center space-x-2 mb-6">
                        {/* Avatars */}
                        <div className="flex shrink-0 -space-x-3 -ml-px">
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User06} width={28} height={28} alt="User 03" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User05} width={28} height={28} alt="User 05" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User09} width={28} height={28} alt="User 01" />
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="text-xs inline-flex font-medium bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400 rounded-full text-center px-2.5 py-1">Planned</div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-white dark:bg-slate-900" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Product V1 - Early Access</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 rounded-full bg-white dark:bg-slate-900" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Web3 Compatibility</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 shrink-0">
                    <h2 className="text-xl leading-snug font-bold text-slate-800 dark:text-slate-100 xl:leading-7 mb-4 xl:mb-0">2021 Q4</h2>
                  </div>
                  <div className="grow pb-6 border-b border-slate-200 dark:border-slate-700">
                    <header>
                      <div className="flex flex-nowrap items-center space-x-2 mb-6">
                        {/* Avatars */}
                        <div className="flex shrink-0 -space-x-3 -ml-px">
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User06} width={28} height={28} alt="User 03" />
                          </a>
                          <a className="block" href="#0">
                            <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={User02} width={28} height={28} alt="User 02" />
                          </a>
                        </div>
                        <div className="text-slate-400 dark:text-slate-600">·</div>
                        <div>
                          <div className="text-xs inline-flex font-medium bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400 rounded-full text-center px-2.5 py-1">Planned</div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 self-start ml-2.5 -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                          <div className="absolute left-0 rounded-full bg-white dark:bg-slate-900" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Product V1 - Early Access</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div className="absolute left-0 rounded-full bg-white dark:bg-slate-900" aria-hidden="true">
                            <svg className="w-5 h-5 fill-current text-slate-400 dark:text-slate-500" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pl-9">Web3 Compatibility</h3>
                        </div>
                        <div className="pl-9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}