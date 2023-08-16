import Image from 'next/image'
import UserImage01 from '@/public/images/avatar-01.jpg'
import UserImage02 from '@/public/images/avatar-02.jpg'
import UserImage03 from '@/public/images/avatar-03.jpg'
import UserImage04 from '@/public/images/avatar-04.jpg'
import UserImage05 from '@/public/images/avatar-05.jpg'
import UserImage06 from '@/public/images/avatar-06.jpg'

export default function ForumRightContent() {
  return (
    <div className="w-full hidden xl:block xl:w-[18rem]">
      <div className="lg:sticky lg:top-16 lg:h-[calc(100dvh-64px)] lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
        <div className="md:py-8">
          {/* Button */}
          <div className="mb-6">
            <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">Create Post</button>
          </div>

          {/* Blocks */}
          <div className="space-y-4">

            {/* Block 1 */}
            <div className="bg-slate-50 dark:bg-slate-800/20 p-4 rounded border border-slate-200 dark:border-slate-700">
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-4">Forum Meetups</div>
              <ul>
                {/* Event 1 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Mon 27 Dec</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                        Silicon Valley Bootstrapper Breakfast Online for 2021
                      </a>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-3 -ml-0.5">
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage02}
                          width={28}
                          height={28}
                          alt="User 02"
                        />
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage03}
                          width={28}
                          height={28}
                          alt="User 03"
                        />
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage04}
                          width={28}
                          height={28}
                          alt="User 04"
                        />
                      </div>
                      <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+22</div>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-0.5 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200 dark:bg-slate-700" />
                    <div className="absolute top-0.5 left-0 -ml-0.5 w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-700 border-2 border-slate-50 dark:border-slate-900" />
                  </div>
                </li>
                {/* Event 2 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Mon 27 Dec</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                        New York &amp; New Jersey Virtual Retreat
                      </a>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-3 -ml-0.5">
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage01}
                          width={28}
                          height={28}
                          alt="User 01"
                        />
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage04}
                          width={28}
                          height={28}
                          alt="User 04"
                        />
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage05}
                          width={28}
                          height={28}
                          alt="User 05"
                        />
                      </div>
                      <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+132</div>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-0.5 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200 dark:bg-slate-700" />
                    <div className="absolute top-0.5 left-0 -ml-0.5 w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-700 border-2 border-slate-50 dark:border-slate-900" />
                  </div>
                </li>
                {/* Event 3 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Mon 29 Dec</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                        The World of AI and Machine Learning - Open Chat
                      </a>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-3 -ml-0.5">
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage06}
                          width={28}
                          height={28}
                          alt="User 06"
                        />
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage03}
                          width={28}
                          height={28}
                          alt="User 03"
                        />
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage01}
                          width={28}
                          height={28}
                          alt="User 01"
                        />
                      </div>
                      <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+12</div>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-0.5 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200 dark:bg-slate-700" />
                    <div className="absolute top-0.5 left-0 -ml-0.5 w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-700 border-2 border-slate-50 dark:border-slate-900" />
                  </div>
                </li>
                {/* Event 4 */}
                <li className="relative pb-4 last-of-type:pb-0">
                  <div className="pl-6">
                    <div className="text-xs font-medium uppercase text-indigo-600 mb-0.5">Mon 29 Dec</div>
                    <div className="text-sm mb-2">
                      <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                        NYC Code &amp; Coffee 2.0 @ Freehold Brooklyn
                      </a>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-3 -ml-0.5">
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage03}
                          width={28}
                          height={28}
                          alt="User 03"
                        />
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage05}
                          width={28}
                          height={28}
                          alt="User 05"
                        />
                        <Image
                          className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                          src={UserImage04}
                          width={28}
                          height={28}
                          alt="User 04"
                        />
                      </div>
                      <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+17</div>
                    </div>
                  </div>
                  {/* Timeline element */}
                  <div aria-hidden="true">
                    <div className="absolute top-0.5 -bottom-1 left-0.5 ml-px w-0.5 bg-slate-200 dark:bg-slate-700" />
                    <div className="absolute top-0.5 left-0 -ml-0.5 w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-700 border-2 border-slate-50 dark:border-slate-900" />
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <button className="btn-sm w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500 shadow-none">View All</button>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-slate-50 dark:bg-slate-800/20 p-4 rounded border border-slate-200 dark:border-slate-700">
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-4">Popular Stories</div>
              <ul className="space-y-3">
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      I built and sold 2 small SaaS products and quit my job in the last two years — AMA
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      markusj
                    </a>{' '}
                    · 2d · 312 comments
                  </div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Besides Product Hunt, where else should I promote my new project? 🤔
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      katemerlu
                    </a>{' '}
                    · 2h · 7 comments
                  </div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Which are the main channels you use to drive traffic to your website? 📈
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      sophiestar
                    </a>{' '}
                    · 3d · 66 comments
                  </div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Failed for the past 12 years as a tech entrepreneur. My key takeaways.
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      ekuplu89
                    </a>{' '}
                    · 4h · 14 comments
                  </div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      How to build a following on Twitter as a founder - A guide to growing your audience 🚀
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      molliehacks
                    </a>{' '}
                    · 3d · 32 comments
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <button className="btn-sm w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500 shadow-none">View All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}